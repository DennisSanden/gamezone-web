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

type EngineEnvelope<T> = {
  status?: string;
  result?: T;
};

export async function getLeaderboards(limit = 5): Promise<LeaderboardBoard[]> {
  const apiBase = process.env.ENGINE_API_URL?.replace(/\/$/, "");
  if (!apiBase) return [];

  try {
    const response = await fetch(`${apiBase}/api/v1/leaderboards?limit=${limit}`, {
      next: { revalidate: 60 },
    });

    if (!response.ok) return [];

    const payload = (await response.json()) as EngineEnvelope<LeaderboardBoard[]>;
    return Array.isArray(payload.result) ? payload.result : [];
  } catch {
    return [];
  }
}
