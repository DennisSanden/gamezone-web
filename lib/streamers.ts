export type Streamer = {
    twitchLogin: string;
    displayName: string;
    channelUrl: string;
    initials: string;
};

type EngineEnvelope<T> = { status?: string; result?: T };

function apiBase() {
    return (
        process.env.GAMEZONE_ENGINE_API_URL ??
        process.env.ENGINE_API_URL ??
        "http://184.170.201.111:8765"
    ).replace(/\/$/, "");
}

export async function getStreamers(): Promise<Streamer[]> {
    const base = apiBase();
    try {
        const response = await fetch(`${base}/api/v1/creators`, {
            next: { revalidate: 15 },
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
