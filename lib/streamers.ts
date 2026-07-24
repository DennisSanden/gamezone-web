export type ApprovedStreamer = {
    twitchLogin: string;
    displayName: string;
    channelUrl: string;
    description: string;
    initials: string;
    featured: boolean;
};

export const APPROVED_STREAMERS: readonly ApprovedStreamer[] = [
    {
        twitchLogin: "dennissanden",
        displayName: "Dennissanden",
        channelUrl: "https://www.twitch.tv/dennissanden",
        description: "Minecraft, GameZone och äventyren som formar serverns historia.",
        initials: "DS",
        featured: true,
    },
] as const;

export function getFeaturedStreamer(): ApprovedStreamer {
    return APPROVED_STREAMERS.find((streamer) => streamer.featured)
        ?? APPROVED_STREAMERS[0];
}
