/** Server-only Survival data gateway. No token or non-supporter premium statistics reach the browser. */
import { getLivePatreonSupporters } from "@/lib/patreon-supporters";

const ENGINE_API_URL = (process.env.GAMEZONE_ENGINE_API_URL ?? "http://162.120.2.221:25569").replace(/\/$/, "");
const PRIVATE_TOKEN = process.env.GAMEZONE_SURVIVAL_STATS_TOKEN ?? "";

type EngineEnvelope<T> = { status?: string; data?: T };

export type SurvivalBasic = {
  playerUuid: string;
  username: string;
  matches: number;
  bestWave: number;
  kills: number;
  lastPlayed: string | null;
};

export type SurvivalPremium = {
  averageWave: number;
  damage: number;
  summons: number;
  summonDamage: number;
  healingHearts: number;
  revives: number;
  damageTanked: number;
  damageTaken: number;
  shieldBlocked: number;
  ironBlocked: number;
  killsPerMatch: number;
  summonsPerMatch: number;
  healingPerMatch: number;
  earnedCoins: number;
  history?: Array<{ role: string; wave: number; kills: number; summons: number; damage: number; summonDamage: number; healingHearts: number; revives: number; tanked: number; earnedCoins: number; endedAt: string }>;
  classes?: Array<{ role: string; games: number; bestWave: number; kills: number; healingHearts: number; summons: number }>;
  personalBests?: Record<string, number>;
};

export type SurvivalPlayerRow = SurvivalBasic & { isPatreon: boolean; premium?: SurvivalPremium };
export type SurvivalOverview = { matches: number; bestWave: number; totalKills: number; records: Array<{ wave: number; kills: number; at: string; participants: string }> };

const numberField = (input: Record<string, unknown>, field: string) => {
  const value = Number(input[field]);
  return Number.isFinite(value) ? value : 0;
};

function basicFrom(input: Record<string, unknown>): SurvivalBasic {
  return {
    playerUuid: typeof input.playerUuid === "string" ? input.playerUuid : "",
    username: typeof input.username === "string" ? input.username : "Okänd spelare",
    matches: numberField(input, "matches"),
    bestWave: numberField(input, "bestWave"),
    kills: numberField(input, "kills"),
    lastPlayed: typeof input.lastPlayed === "string" ? input.lastPlayed : null,
  };
}

function premiumFrom(input: Record<string, unknown>): SurvivalPremium {
  const fields = ["averageWave", "damage", "summons", "summonDamage", "healingHearts", "revives", "damageTanked", "damageTaken", "shieldBlocked", "ironBlocked", "killsPerMatch", "summonsPerMatch", "healingPerMatch", "earnedCoins"] as const;
  const result = Object.fromEntries(fields.map((field) => [field, numberField(input, field)])) as unknown as SurvivalPremium;
  if (Array.isArray(input.history)) result.history = input.history.map((record: Record<string, unknown>) => ({
    role: String(record.role ?? "UNKNOWN"), wave: numberField(record, "wave"), kills: numberField(record, "kills"),
    summons: numberField(record, "summons"), damage: numberField(record, "damage"), summonDamage: numberField(record, "summonDamage"),
    healingHearts: numberField(record, "healingHearts"), revives: numberField(record, "revives"),
    tanked: numberField(record, "tanked"), earnedCoins: numberField(record, "earnedCoins"),
    endedAt: String(record.endedAt ?? ""),
  }));
  if (Array.isArray(input.classes)) result.classes = input.classes.map((record: Record<string, unknown>) => ({
    role: String(record.role ?? "UNKNOWN"), games: numberField(record, "games"), bestWave: numberField(record, "bestWave"),
    kills: numberField(record, "kills"), healingHearts: numberField(record, "healingHearts"), summons: numberField(record, "summons"),
  }));
  if (input.personalBests && typeof input.personalBests === "object") {
    const bests = input.personalBests as Record<string, unknown>;
    result.personalBests = Object.fromEntries(["kills", "damage", "summons", "summonDamage", "healingHearts", "revives", "tanked"].map((field) => [field, numberField(bests, field)]));
  }
  return result;
}

async function engineGet<T>(path: string, privateEndpoint = false): Promise<T> {
  if (privateEndpoint && PRIVATE_TOKEN.length < 32) throw new Error("Premiumstatistikens server-token saknas.");
  const response = await fetch(`${ENGINE_API_URL}/api/v1/survival/${path}`, {
    // 60-second Next.js data caching keeps repeated page views off the Minecraft database.
    next: { revalidate: 60 },
    headers: privateEndpoint ? { "X-GameZone-Analytics-Token": PRIVATE_TOKEN } : {},
    signal: AbortSignal.timeout(9_000),
  });
  if (!response.ok) throw new Error(`Survival API svarade ${response.status}.`);
  const payload = await response.json() as EngineEnvelope<T>;
  if (payload.status?.toLowerCase() !== "success" || payload.data === undefined) throw new Error("Ogiltigt svar från Survival API.");
  return payload.data;
}

export async function getSurvivalOverview(): Promise<SurvivalOverview> {
  return engineGet<SurvivalOverview>("overview");
}

/** All recorded participants are public; premium fields are attached only to active Patreon profiles. */
export async function getSurvivalRanking(): Promise<SurvivalPlayerRow[]> {
  const [publicRows, supporters] = await Promise.all([
    engineGet<Record<string, unknown>[]>("ranking"),
    getLivePatreonSupporters(),
  ]);
  const supporterNames = new Set(supporters.map((person) => person.minecraftUsername.toLowerCase()));
  const rows = publicRows.map((entry) => {
    const base = basicFrom(entry);
    return { ...base, isPatreon: supporterNames.has(base.username.toLowerCase()) } as SurvivalPlayerRow;
  });
  if (!supporterNames.size || PRIVATE_TOKEN.length < 32) return rows;
  try {
    const premiumRows = await engineGet<Record<string, unknown>[]>("advanced", true);
    const premiumByUuid = new Map(premiumRows.map((entry) => [String(entry.playerUuid), entry]));
    for (const player of rows) {
      if (!player.isPatreon) continue;
      const premium = premiumByUuid.get(player.playerUuid);
      if (premium) player.premium = premiumFrom(premium);
    }
  } catch (error) {
    console.warn("Survival premium ranking unavailable", error);
  }
  return rows;
}

export async function getSurvivalPlayer(username: string): Promise<SurvivalPlayerRow | null> {
  if (!/^[.A-Za-z0-9_ ]{3,32}$/.test(username)) return null;
  const baseData = await engineGet<Record<string, unknown>>(`profile?username=${encodeURIComponent(username)}`);
  if (!baseData.playerUuid) return null;
  const basic = basicFrom(baseData);
  const supporters = await getLivePatreonSupporters();
  const isPatreon = supporters.some((person) => person.minecraftUsername.toLowerCase() === basic.username.toLowerCase());
  const result: SurvivalPlayerRow = { ...basic, isPatreon };
  if (isPatreon && PRIVATE_TOKEN.length >= 32) {
    try {
      const premium = await engineGet<Record<string, unknown>>(`advanced?username=${encodeURIComponent(username)}`, true);
      if (premium.playerUuid === basic.playerUuid) result.premium = premiumFrom(premium);
    } catch (error) {
      console.warn("Survival premium profile unavailable", error);
    }
  }
  return result;
}
