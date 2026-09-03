import { cache } from "react";
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
  const source = process.env.GAMEZONE_ENGINE_API_URL
      ? "GAMEZONE_ENGINE_API_URL"
      : process.env.ENGINE_API_URL
          ? "ENGINE_API_URL"
          : "fallback default";
  const base = (
      process.env.GAMEZONE_ENGINE_API_URL ??
      process.env.ENGINE_API_URL ??
      "http://162.120.2.221:25569"
  ).replace(/\/$/, "");
  console.log(`[engineFetch] using ${source}: ${base}`);
  return base;
}

async function engineFetch<T>(path: string): Promise<T | null> {
  const base = apiBase();
  if (!base) return null;
  try {
    const response = await fetch(`${base}${path}`, {
      next: { revalidate: 10_800 },
      signal: AbortSignal.timeout(12_000),
    });
    if (!response.ok) {
      console.error(`[engineFetch] ${base}${path} responded with HTTP ${response.status}`);
      return null;
    }
    const payload = (await response.json()) as EngineEnvelope<T>;
    return payload.result ?? null;
  } catch (err) {
    console.error(`[engineFetch] ${base}${path} failed:`, err);
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

export const getAllLeaderboardEntries = cache(async function getAllLeaderboardEntries(key: string): Promise<LeaderboardBoard | null> {
  const pageSize = 100;
  const maxPages = 5;

  const first = await getLeaderboard(key, pageSize, 0);
  if (!first) return null;
  if (first.entries.length < pageSize) return first;

  const entries: LeaderboardEntry[] = [...first.entries];
  for (let page = 1; page < maxPages; page++) {
    const board = await getLeaderboard(key, pageSize, page * pageSize);
    if (!board) break;
    entries.push(...board.entries);
    if (board.entries.length < pageSize) break;
  }

  return { ...first, entries };
});
