import { getLivePatreonSupporters } from "@/lib/patreon-supporters";

const ENGINE = (process.env.GAMEZONE_ENGINE_API_URL ?? "http://162.120.2.221:25569").replace(/\/$/, "");
const TOKEN = process.env.GAMEZONE_SURVIVAL_STATS_TOKEN ?? "";

export type SurvivalOverview = {
  matches: number; bestWave: number; totalKills: number;
  records: Array<{ wave: number; kills: number; at: string; participants: string }>;
};
export type SurvivalPlayer = {
  playerUuid: string; username: string; matches: number; bestWave: number; averageWave: number;
  kills: number; summons: number; damage: number; summonDamage: number; healingHearts: number;
  revives: number; damageTaken: number; shieldBlocked: number; ironBlocked: number;
  damageTanked: number; killsPerMatch: number; summonsPerMatch: number; healingPerMatch: number;
  earnedCoins: number; lastPlayed: string | null;
  history?: Array<{ role: string; wave: number; kills: number; summons: number; damage: number;
    summonDamage: number; healingHearts: number; revives: number; tanked: number;
    earnedCoins: number; endedAt: string }>;
  classes?: Array<{ role: string; games: number; bestWave: number; kills: number; healingHearts: number; summons: number }>;
  personalBests?: { kills: number; damage: number; summons: number; summonDamage: number; healingHearts: number; revives: number; tanked: number };
  tier?: "supporter" | "gold";
};

async function engineGet(path: string, premium = false): Promise<unknown> {
  if (premium && TOKEN.length < 32) throw new Error("Survival stats-token saknas i webbmiljön.");
  const response = await fetch(`${ENGINE}${path}`, {
    headers: premium ? { "X-GameZone-Analytics-Token": TOKEN } : {},
    next: { revalidate: premium ? 60 : 180 },
    signal: AbortSignal.timeout(8_000),
  });
  if (!response.ok) throw new Error(`Survival API svarade med ${response.status}`);
  const payload = await response.json();
  if (payload?.status !== "success") throw new Error("Ogiltigt svar från Survival API.");
  return payload.data;
}

export async function getSurvivalOverview(): Promise<SurvivalOverview> {
  return await engineGet("/api/v1/survival/overview") as SurvivalOverview;
}

/** Public viewers are allowed. Only active Patreon PLAYER profiles are published. */
export async function getSurvivalSupporterRanking(): Promise<SurvivalPlayer[]> {
  const patrons = await getLivePatreonSupporters();
  if (!patrons.length) return []; // Fail closed if Steve/Patreon is unavailable.
  const allowed = new Map(patrons.map(p => [p.minecraftUsername.toLowerCase(), p.tier] as const));
  const all = await engineGet("/api/v1/survival/advanced", true) as SurvivalPlayer[];
  return (Array.isArray(all) ? all : []).filter(row => typeof row.username === "string" && allowed.has(row.username.toLowerCase()))
    .map(row => ({ ...row, tier: allowed.get(row.username.toLowerCase()) }));
}

export async function getSurvivalSupporterProfile(username: string): Promise<SurvivalPlayer | null> {
  if (!/^[A-Za-z0-9_]{3,16}$/.test(username)) return null;
  const patrons = await getLivePatreonSupporters();
  const patron = patrons.find(p => p.minecraftUsername.toLowerCase() === username.toLowerCase());
  if (!patron) return null; // Never call premium Engine API for non-supporter profiles.
  const player = await engineGet(`/api/v1/survival/advanced?username=${encodeURIComponent(patron.minecraftUsername)}`, true) as SurvivalPlayer;
  if (!player || !player.playerUuid || player.username?.toLowerCase() !== patron.minecraftUsername.toLowerCase()) return null;
  return { ...player, tier: patron.tier };
}
