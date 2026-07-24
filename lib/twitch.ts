import { APPROVED_STREAMERS } from "@/lib/streamers";

export type ApprovedTwitchStream = {
    login: string;
    displayName: string;
    title: string;
    gameName: string;
    viewerCount: number;
    thumbnailUrl: string;
    channelUrl: string;
    startedAt: string;
};

type TwitchTokenResponse = {
    access_token?: string;
};

type TwitchStreamResponse = {
    data?: Array<{
        user_login: string;
        user_name: string;
        title: string;
        game_name: string;
        viewer_count: number;
        thumbnail_url: string;
        started_at: string;
    }>;
};

export const APPROVED_TWITCH_CREATORS = APPROVED_STREAMERS.map((streamer) => ({
    login: streamer.twitchLogin,
    displayName: streamer.displayName,
    channelUrl: streamer.channelUrl,
    description: streamer.description,
    initials: streamer.initials,
}));

let cachedToken: {
    value: string;
    expiresAt: number;
} | null = null;

async function getAppAccessToken(
    clientId: string,
    clientSecret: string,
): Promise<string | null> {
    if (cachedToken && cachedToken.expiresAt > Date.now()) {
        return cachedToken.value;
    }

    const body = new URLSearchParams({
        client_id: clientId,
        client_secret: clientSecret,
        grant_type: "client_credentials",
    });

    const response = await fetch("https://id.twitch.tv/oauth2/token", {
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
        },
        body,
        cache: "no-store",
    });

    if (!response.ok) {
        console.error(
            `[Twitch] Kunde inte skapa app-token. Status: ${response.status}`,
        );
        return null;
    }

    const payload = (await response.json()) as TwitchTokenResponse & {
        expires_in?: number;
    };

    if (!payload.access_token) {
        console.error("[Twitch] Token-svaret saknade access_token.");
        return null;
    }

    const expiresInSeconds = payload.expires_in ?? 3600;

    cachedToken = {
        value: payload.access_token,
        expiresAt: Date.now() + Math.max(expiresInSeconds - 300, 60) * 1000,
    };

    return payload.access_token;
}

export async function getApprovedLiveStreams(): Promise<ApprovedTwitchStream[]> {
    const clientId = process.env.TWITCH_CLIENT_ID;
    const clientSecret = process.env.TWITCH_CLIENT_SECRET;

    if (!clientId || !clientSecret) {
        console.warn(
            "[Twitch] TWITCH_CLIENT_ID eller TWITCH_CLIENT_SECRET saknas.",
        );
        return [];
    }

    try {
        const token = await getAppAccessToken(clientId, clientSecret);

        if (!token) {
            return [];
        }

        const query = new URLSearchParams();
        APPROVED_TWITCH_CREATORS.forEach(({ login }) => {
            query.append("user_login", login);
        });

        const response = await fetch(
            `https://api.twitch.tv/helix/streams?${query.toString()}`,
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Client-Id": clientId,
                },
                next: {
                    revalidate: 60,
                },
            },
        );

        if (!response.ok) {
            console.error(
                `[Twitch] Kunde inte hämta streams. Status: ${response.status}`,
            );
            return [];
        }

        const payload = (await response.json()) as TwitchStreamResponse;

        return (payload.data ?? []).map((stream) => ({
            login: stream.user_login,
            displayName: stream.user_name,
            title: stream.title,
            gameName: stream.game_name || "Minecraft",
            viewerCount: stream.viewer_count,
            thumbnailUrl: stream.thumbnail_url
                .replace("{width}", "1280")
                .replace("{height}", "720"),
            channelUrl: `https://www.twitch.tv/${stream.user_login}`,
            startedAt: stream.started_at,
        }));
    } catch (error) {
        console.error("[Twitch] Oväntat fel vid hämtning av streams:", error);
        return [];
    }
}
