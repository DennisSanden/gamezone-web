export type Streamer = {
    twitchLogin: string;
    displayName: string;
    channelUrl: string;
    initials: string;
    profileImageUrl: string;
    offlineImageUrl: string;
    description: string;
    live: boolean;
    streamTitle: string;
    gameName: string;
    viewers: number;
};

type EngineEnvelope<T> = { status?: string; result?: T };

function apiBase() {
    return (
        process.env.GAMEZONE_ENGINE_API_URL ??
        process.env.ENGINE_API_URL ??
        "http://162.120.2.221:25569"
    ).replace(/\/$/, "");
}

export async function getStreamers(): Promise<Streamer[]> {
    const base = apiBase();
    try {
        const response = await fetch(`${base}/api/v1/creators`, {
            next: { revalidate: 10_800 },
            signal: AbortSignal.timeout(8_000),
        });
        if (!response.ok) {
            console.error(`[streamers] ${base}/api/v1/creators responded with HTTP ${response.status}`);
            return [];
        }
        const payload = await response.json() as EngineEnvelope<Streamer[]>;
        return Array.isArray(payload.result) ? payload.result : [];
    } catch (err) {
        console.error(`[streamers] ${base}/api/v1/creators failed:`, err);
        return [];
    }
}
