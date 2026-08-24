export type TwitchCreator = {
    minecraftName: string;
    login: string;
    displayName: string;
    live: boolean;
    title: string;
    gameName: string;
    viewerCount: number;
    thumbnailUrl: string;
    startedAt: string;
    channelUrl: string;
};

export type TwitchCreatorsPayload = {
    creators: TwitchCreator[];
    rewardCoins: number;
    rewardMinutes: number;
};

const DEFAULT_ENGINE_API = "http://184.170.201.111:8765";

export async function getTwitchCreators(): Promise<TwitchCreatorsPayload> {
    const engineApi = (process.env.GAMEZONE_ENGINE_API_URL ?? process.env.ENGINE_API_URL ?? DEFAULT_ENGINE_API).replace(/\/$/, "");
    try {
        const response = await fetch(`${engineApi}/api/v1/twitch/creators`, { cache: "no-store", signal: AbortSignal.timeout(8_000) });
        if (!response.ok) return { creators: [], rewardCoins: 1000, rewardMinutes: 10 };
        const payload = await response.json() as { data?: TwitchCreator[]; rewardCoins?: number; rewardMinutes?: number };
        return {
            creators: Array.isArray(payload.data) ? payload.data : [],
            rewardCoins: payload.rewardCoins ?? 1000,
            rewardMinutes: payload.rewardMinutes ?? 10,
        };
    } catch (error) {
        console.error("[twitch] Engine Twitch endpoint failed:", error);
        return { creators: [], rewardCoins: 1000, rewardMinutes: 10 };
    }
}

export async function getApprovedLiveStreams() {
    const { creators } = await getTwitchCreators();
    return creators.filter((creator) => creator.live);
}
