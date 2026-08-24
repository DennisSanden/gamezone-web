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
    rewardHourlyCap: number;
    rewardDailyCap: number;
    rewardsEnabled: boolean;
};

function engineApiUrl(): string | null {
    const configured = process.env.GAMEZONE_ENGINE_API_URL ?? process.env.ENGINE_API_URL;
    if (!configured) return process.env.NODE_ENV === "production" ? null : "http://127.0.0.1:8765";
    const value = configured.replace(/\/$/, "");
    if (process.env.NODE_ENV === "production" && !value.startsWith("https://")) return null;
    return value;
}

const EMPTY: TwitchCreatorsPayload = {
    creators: [],
    rewardCoins: 1000,
    rewardMinutes: 10,
    rewardHourlyCap: 6000,
    rewardDailyCap: 30000,
    rewardsEnabled: false,
};

export async function getTwitchCreators(): Promise<TwitchCreatorsPayload> {
    const engineApi = engineApiUrl();
    if (!engineApi) {
        console.error("[twitch] GAMEZONE_ENGINE_API_URL must be HTTPS in production.");
        return EMPTY;
    }
    try {
        const response = await fetch(`${engineApi}/api/v1/twitch/creators`, { cache: "no-store", signal: AbortSignal.timeout(8_000) });
        if (!response.ok) return EMPTY;
        const payload = await response.json() as {
            data?: TwitchCreator[];
            rewardCoins?: number;
            rewardMinutes?: number;
            rewardHourlyCap?: number;
            rewardDailyCap?: number;
            rewardsEnabled?: boolean;
        };
        return {
            creators: Array.isArray(payload.data) ? payload.data : [],
            rewardCoins: payload.rewardCoins ?? 1000,
            rewardMinutes: payload.rewardMinutes ?? 10,
            rewardHourlyCap: payload.rewardHourlyCap ?? 6000,
            rewardDailyCap: payload.rewardDailyCap ?? 30000,
            rewardsEnabled: payload.rewardsEnabled === true,
        };
    } catch (error) {
        console.error("[twitch] Engine Twitch endpoint failed:", error);
        return EMPTY;
    }
}

export async function getApprovedLiveStreams() {
    const { creators } = await getTwitchCreators();
    return creators.filter((creator) => creator.live);
}
