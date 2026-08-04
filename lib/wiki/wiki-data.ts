export type WikiArticleLink = {
    slug: string;
    title: string;
};

export type WikiCategory = {
    slug: string;
    title: string;
    description: string;
    number: string;
    articles: WikiArticleLink[];
};

export const wikiCategories: WikiCategory[] = [
    {
        slug: "kom-igang",
        title: "Kom igång",
        description:
            "Anslut till servern, ansök om whitelist och lär dig grunderna.",
        number: "01",
        articles: [
            {
                slug: "sa-borjar-du-spela",
                title: "Så börjar du spela",
            },
            {
                slug: "whitelist",
                title: "Whitelist",
            },
            {
                slug: "din-forsta-dag",
                title: "Din första dag",
            },
        ],
    },
    {
        slug: "regler",
        title: "Regler",
        description:
            "Regler och riktlinjer som gäller för samtliga GameZone-spelare.",
        number: "02",
        articles: [
            {
                slug: "grundregler",
                title: "Grundregler",
            },
            {
                slug: "handel",
                title: "Handel mellan spelare",
            },
            {
                slug: "avstangningar",
                title: "Avstängningar",
            },
        ],
    },
    {
        slug: "economy",
        title: "Economy",
        description:
            "Coins, betalningar, skatter och GameZones ekonomiska system.",
        number: "03",
        articles: [
            {
                slug: "coins",
                title: "Coins",
            },
            {
                slug: "betalningar",
                title: "Betalningar",
            },
            {
                slug: "skatter",
                title: "Skatter",
            },
        ],
    },
    {
        slug: "experience",
        title: "Experience",
        description:
            "Experience, progression och de titlar som spelaren kan erhålla.",
        number: "04",
        articles: [
            {
                slug: "experience",
                title: "Experience",
            },
            {
                slug: "progression",
                title: "Progression",
            },
            {
                slug: "titlar",
                title: "Titlar",
            },
        ],
    },
    {
        slug: "production",
        title: "Production",
        description:
            "Produktion, resurser, specialiseringar och förädling av produkter.",
        number: "05",
        articles: [
            {
                slug: "produktionssystemet",
                title: "Produktionssystemet",
            },
            {
                slug: "produktionskategorier",
                title: "Produktionskategorier",
            },
            {
                slug: "foradling",
                title: "Förädling",
            },
        ],
    },
    {
        slug: "settlements",
        title: "Settlements",
        description:
            "Grundande, medlemskap, nivåer och utveckling av settlements.",
        number: "06",
        articles: [
            {
                slug: "skapa-ett-settlement",
                title: "Skapa ett settlement",
            },
            {
                slug: "medlemskap",
                title: "Medlemskap",
            },
            {
                slug: "settlementnivaer",
                title: "Settlementnivåer",
            },
            {
                slug: "byggnader",
                title: "Byggnader",
            },
        ],
    },
    {
        slug: "government",
        title: "Government",
        description:
            "Ledarskap, roller och behörigheter inom ett settlement.",
        number: "07",
        articles: [
            {
                slug: "roller",
                title: "Roller",
            },
            {
                slug: "behorigheter",
                title: "Behörigheter",
            },
            {
                slug: "ledarskapsbyte",
                title: "Ledarskapsbyte",
            },
        ],
    },
    {
        slug: "companies",
        title: "Companies",
        description:
            "Företag, medlemskap, roller och ekonomiska organisationer.",
        number: "08",
        articles: [
            {
                slug: "foretag",
                title: "Företag",
            },
            {
                slug: "shopping-chests",
                title: "Shopping Chests",
            },
            {
                slug: "shopping-plots",
                title: "Shopping Plots",
            },
        ],
    },
    {
        slug: "marketplace",
        title: "Marketplace",
        description:
            "Köp, försäljning och handel genom GameZones marknadssystem.",
        number: "09",
        articles: [
            {
                slug: "sa-fungerar-marketplace",
                title: "Så fungerar Marketplace",
            },
            {
                slug: "kopa-produkter",
                title: "Köpa produkter",
            },
            {
                slug: "salja-produkter",
                title: "Sälja produkter",
            },
        ],
    },
    {
        slug: "world",
        title: "World & Map",
        description:
            "Världskartan, områden, kartmarkörer och geografisk information.",
        number: "10",
        articles: [
            {
                slug: "varldskartan",
                title: "Världskartan",
            },
            {
                slug: "kartmarkorer",
                title: "Kartmarkörer",
            },
            {
                slug: "settlementomraden",
                title: "Settlementområden",
            },
        ],
    },
    {
        slug: "discord",
        title: "Discord",
        description:
            "GameZones Discord, roller, kanaler och kopplingar till spelvärlden.",
        number: "11",
        articles: [
            {
                slug: "anslut-till-discord",
                title: "Anslut till Discord",
            },
            {
                slug: "settlementkanaler",
                title: "Settlementkanaler",
            },
            {
                slug: "discordroller",
                title: "Discordroller",
            },
        ],
    },
    {
        slug: "kommandon",
        title: "Kommandon",
        description:
            "Kommandon, syntax och behörigheter för GameZones olika system.",
        number: "12",
        articles: [
            {
                slug: "settlementkommandon",
                title: "Settlementkommandon",
            },
            {
                slug: "economykommandon",
                title: "Economykommandon",
            },
            {
                slug: "companykommandon",
                title: "Companykommandon",
            },
        ],
    },
];