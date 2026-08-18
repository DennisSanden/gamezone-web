export type PatreonTier = "supporter" | "gold";

export type PatreonSupporter = {
    minecraftUsername: string;
    displayName?: string;
    tier: PatreonTier;
    since?: string;
};

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

export function getPatreonSupporter(username: string) {
    const normalized = username.trim().toLocaleLowerCase("sv-SE");

    return (
        PATREON_SUPPORTERS.find(
            supporter =>
                supporter.minecraftUsername
                    .trim()
                    .toLocaleLowerCase("sv-SE") === normalized,
        ) ?? null
    );
}

export function patreonTierLabel(tier: PatreonTier) {
    return tier === "gold" ? "Guldsupporter" : "Supporter";
}