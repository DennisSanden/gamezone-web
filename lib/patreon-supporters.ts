export type PatreonTier = "supporter" | "gold";

export type PatreonSupporter = {
    minecraftUsername: string;
    displayName?: string;
    tier: PatreonTier;
    since?: string;
};

// Migration fallback. Remove this list after the existing supporters have linked
// themselves or have been added with /patreon-admin link.
export const PATREON_SUPPORTERS: PatreonSupporter[] = [
    { minecraftUsername: "TheAlphaKitten", tier: "supporter" },
    { minecraftUsername: "Minecraftmarre", tier: "supporter" },
    { minecraftUsername: "Meddu420", tier: "supporter" },
    { minecraftUsername: "WhiteMonkey1", tier: "supporter" },
    { minecraftUsername: "Firre7", tier: "supporter" },
    { minecraftUsername: "bk3390", tier: "supporter" },
    { minecraftUsername: "zerxisblind", tier: "supporter" },
    { minecraftUsername: "Mbmibit", tier: "supporter" },
    { minecraftUsername: "outbulten14", tier: "gold" },
    { minecraftUsername: "the_o49", tier: "gold" },
    { minecraftUsername: "jejojej", tier: "gold" },
    { minecraftUsername: "eviece", tier: "gold" },
    { minecraftUsername: "CutteDarky", tier: "gold" },
    { minecraftUsername: "L1llemannen", tier: "gold" },
    { minecraftUsername: "Zaibot01", tier: "gold" },
    { minecraftUsername: "davdd_", tier: "gold" },
    { minecraftUsername: "Unknown219", tier: "gold" },
    { minecraftUsername: "Mathyy", tier: "gold" },
    { minecraftUsername: "FrippeGG", tier: "gold" },
    { minecraftUsername: "Edv0n", tier: "gold" },
    { minecraftUsername: "xFae", tier: "gold" },
    { minecraftUsername: "celstenel", tier: "gold" },
];

export async function getLivePatreonSupporters(): Promise<PatreonSupporter[]> {
    const base = process.env.GAMEZONE_STEVE_API_URL?.replace(/\/$/, "");
    if (!base) return PATREON_SUPPORTERS;
    try {
        const response = await fetch(`${base}/patreon/supporters`, { next: { revalidate: 60 }, signal: AbortSignal.timeout(8_000) });
        const live = response.ok ? await response.json() : [];
        if (!Array.isArray(live)) return PATREON_SUPPORTERS;
        const merged = new Map<string, PatreonSupporter>();
        for (const supporter of PATREON_SUPPORTERS) merged.set(supporter.minecraftUsername.toLowerCase(), supporter);
        for (const supporter of live) {
            if (!supporter?.minecraftUsername || (supporter.tier !== "supporter" && supporter.tier !== "gold")) continue;
            merged.set(String(supporter.minecraftUsername).toLowerCase(), { minecraftUsername: String(supporter.minecraftUsername), tier: supporter.tier });
        }
        return [...merged.values()];
    } catch {
        return PATREON_SUPPORTERS;
    }
}

export function getPatreonSupporter(username: string) {
    const normalized = username.trim().toLocaleLowerCase("sv-SE");
    return PATREON_SUPPORTERS.find(supporter => supporter.minecraftUsername.trim().toLocaleLowerCase("sv-SE") === normalized) ?? null;
}

export function patreonTierLabel(tier: PatreonTier) {
    return tier === "gold" ? "Guldsupporter" : "Supporter";
}
