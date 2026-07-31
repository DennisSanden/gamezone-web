export type ServerStatus = {
  online: boolean;
  playersOnline: number;
  playersMax: number;
  motd?: string;
};

export type LeaderboardEntry = {
  rank: number;
  displayName: string;
  value: number;
  detail?: string | null;
};

type EngineEnvelope<T> = { status?: string; result?: T };
type EngineBoard = { entries?: LeaderboardEntry[] };

const SERVER_ADDRESS = "play.gamezonemc.se";

export async function getServerStatus(): Promise<ServerStatus> {
  try {
    const response = await fetch(`https://api.mcsrvstat.us/3/${SERVER_ADDRESS}`, {
      next: { revalidate: 30 },
    });
    if (!response.ok) throw new Error(`Minecraft status HTTP ${response.status}`);
    const data = await response.json() as {
      online?: boolean;
      players?: { online?: number; max?: number };
      motd?: { clean?: string[] };
    };
    return {
      online: data.online === true,
      playersOnline: data.players?.online ?? 0,
      playersMax: 40,
      motd: data.motd?.clean?.join(" "),
    };
  } catch {
    return { online: false, playersOnline: 0, playersMax: 40 };
  }
}

export async function getLeaderboard(type: string): Promise<LeaderboardEntry[]> {
  const apiBase = process.env.ENGINE_API_URL?.replace(/\/$/, "");
  if (!apiBase) return [];

  try {
    const response = await fetch(`${apiBase}/api/v1/leaderboards/${type}?limit=3`, {
      next: { revalidate: 60 },
    });
    if (!response.ok) return [];
    const data = await response.json() as EngineEnvelope<EngineBoard>;
    return data.result?.entries?.slice(0, 3) ?? [];
  } catch {
    return [];
  }
}
