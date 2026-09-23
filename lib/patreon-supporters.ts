export type PatreonTier = "supporter" | "gold";

export type PatreonSupporter = {
    minecraftUsername: string;
    displayName?: string;
    tier: PatreonTier;
    since?: string;
};

// Steve/Patreon is the single source of truth. No supporter names are hardcoded on the website.
export async function getLivePatreonSupporters(): Promise<PatreonSupporter[]> {
    const base = process.env.GAMEZONE_STEVE_API_URL?.replace(/\/$/, "");
    if (!base) return [];
    try {
        const response = await fetch(`${base}/patreon/supporters`, {
            next: { revalidate: 60 },
            signal: AbortSignal.timeout(8_000),
        });
        if (!response.ok) return [];
        const live = await response.json();
        if (!Array.isArray(live)) return [];

        const supporters = new Map<string, PatreonSupporter>();
        for (const supporter of live) {
            if (!supporter?.minecraftUsername || (supporter.tier !== "supporter" && supporter.tier !== "gold")) continue;
            const minecraftUsername = String(supporter.minecraftUsername);
            supporters.set(minecraftUsername.toLowerCase(), {
                minecraftUsername,
                tier: supporter.tier,
            });
        }
        return [...supporters.values()];
    } catch {
        return [];
    }
}

export function patreonTierLabel(tier: PatreonTier) {
    return tier === "gold" ? "Guldsupporter" : "Supporter";
}
