export type LeaderboardEntry = {
  rank: number;
  entityId: string;
  displayName: string;
  value: number;
  detail?: string | null;
};

export type LeaderboardBoard = {
  key: string;
  displayName: string;
  entityType: string;
  valueType: string;
  entries: LeaderboardEntry[];
};

type EngineEnvelope<T> = { status?: string; result?: T };

function apiBase() {
  return process.env.ENGINE_API_URL?.replace(/\/$/, "");
}

async function engineFetch<T>(path: string): Promise<T | null> {
  const base = apiBase();
  if (!base) return null;
  try {
    const response = await fetch(`${base}${path}`, { next: { revalidate: 60 } });
    if (!response.ok) return null;
    const payload = (await response.json()) as EngineEnvelope<T>;
    return payload.result ?? null;
  } catch {
    return null;
  }
}

export async function getLeaderboards(limit = 5): Promise<LeaderboardBoard[]> {
  const result = await engineFetch<LeaderboardBoard[]>(`/api/v1/leaderboards?limit=${limit}`);
  return Array.isArray(result) ? result : [];
}

export async function getLeaderboard(key: string, limit = 25, offset = 0): Promise<LeaderboardBoard | null> {
  return engineFetch<LeaderboardBoard>(`/api/v1/leaderboards/${encodeURIComponent(key)}?limit=${limit}&offset=${offset}`);
}

export async function getAllLeaderboardEntries(key: string): Promise<LeaderboardBoard | null> {
  const pageSize = 100;
  const maxPages = 20;
  let template: LeaderboardBoard | null = null;
  const entries: LeaderboardEntry[] = [];

  for (let page = 0; page < maxPages; page += 1) {
    const board = await getLeaderboard(key, pageSize, page * pageSize);
    if (!board) return template ? { ...template, entries } : null;
    template ??= board;
    entries.push(...board.entries);
    if (board.entries.length < pageSize) break;
  }

  return template ? { ...template, entries } : null;
}
