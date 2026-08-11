export type SettlementBuildingGroup =
    | "lager"
    | "by"
    | "bosattning"
    | "samhalle"
    | "koping"
    | "stad"
    | "handelsstad"
    | "fastning"
    | "huvudstad"
    | "grevskap"
    | "hertigdome"
    | "nation"
    | "kungadome"
    | "imperium";


export type SettlementBuilding = {
    id: string;
    name: string;
    category: string;
    description: string;
    effect: string;
    cost: string;
    unlockLevel: number;
    href?: string;
};

const settlementBuildings: Record<
    SettlementBuildingGroup,
    SettlementBuilding[]
> = {
    lager: [
        {
            id: "gruva",
            name: "Gruva",
            category: "Gruvdrift",
            description:
                "Förstärker settlementets produktion från gruvdrift och resurser som registreras i Mining Registry.",
            effect: "+5 % Coins från Gruvdrift",
            cost: "2 500 Coins",
            unlockLevel: 2,
            href: "/wiki/buildings/gruva",
        },
        {
            id: "lada",
            name: "Lada",
            category: "Jordbruk",
            description:
                "Förstärker settlementets produktion från jordbruk och resurser som registreras i Farming Registry.",
            effect: "+5 % Coins från Jordbruk",
            cost: "2 500 Coins",
            unlockLevel: 2,
            href: "/wiki/buildings/lada",
        },
        {
            id: "ladugard",
            name: "Ladugård",
            category: "Boskap",
            description:
                "Förstärker settlementets produktion från boskap och resurser som registreras i Livestock Registry.",
            effect: "+5 % Coins från Boskap",
            cost: "2 500 Coins",
            unlockLevel: 2,
            href: "/wiki/buildings/ladugard",
        },
        {
            id: "fiskebrygga",
            name: "Fiskebrygga",
            category: "Fiske",
            description:
                "Förstärker settlementets produktion från fiske och resurser som registreras i Fishing Registry.",
            effect: "+5 % Coins från Fiske",
            cost: "2 500 Coins",
            unlockLevel: 2,
            href: "/wiki/buildings/fiskebrygga",
        },
        {
            id: "sagverk",
            name: "Sågverk",
            category: "Skogsbruk",
            description:
                "Förstärker settlementets produktion från skogsbruk och resurser som registreras i Forestry Registry.",
            effect: "+5 % Coins från Skogsbruk",
            cost: "2 500 Coins",
            unlockLevel: 2,
            href: "/wiki/buildings/sagverk",
        },
        {
            id: "stenhuggeri",
            name: "Stenhuggeri",
            category: "Byggmaterial",
            description:
                "Förstärker settlementets produktion från resurser som registreras i Building Materials Registry.",
            effect: "+5 % Coins från Byggmaterial",
            cost: "2 500 Coins",
            unlockLevel: 2,
            href: "/wiki/buildings/stenhuggeri",
        },
    ],

    by: [
        {
            id: "handelscentrum",
            name: "Handelscentrum",
            category: "Administration",
            description:
                "Låser upp möjligheten för settlementets invånare att registrera företag inom settlementet.",
            effect: "Låser upp företagsregistrering",
            cost: "10 000 Coins",
            unlockLevel: 3,
            href: "/wiki/buildings/handelscentrum",
        },
    ],

    bosattning: [
        {
            id: "bank",
            name: "Bank",
            category: "Ekonomi",
            description:
                "Låser upp utökad ekonomisk statistik och ger settlementets ledning en mer detaljerad överblick över ekonomins utveckling.",
            effect: "Låser upp utökad ekonomisk statistik",
            cost: "25 000 Coins",
            unlockLevel: 4,
            href: "/wiki/buildings/bank",
        },
    ],

    samhalle: [
        {
            id: "laboratorium",
            name: "Laboratorium",
            category: "Alkemi",
            description:
                "Förstärker settlementets produktion från alkemi och resurser som registreras i Alchemy Registry.",
            effect: "+5 % Coins från Alkemi",
            cost: "2 500 Coins",
            unlockLevel: 5,
            href: "/wiki/buildings/laboratorium",
        },
    ],

    koping: [
        {
            id: "kyrka",
            name: "Kyrka",
            category: "Specialbyggnad",
            description:
                "Ger settlementets aktiva medlemmar en permanent bonus från all registrerad manuell produktion.",
            effect:
                "+10 % Coins från all registrerad manuell produktion",
            cost: "75 000 Coins",
            unlockLevel: 6,
            href: "/wiki/buildings/kyrka",
        },
    ],

    stad: [],

    handelsstad: [
        {
            id: "marknadsplats",
            name: "Marknadsplats",
            category: "Ekonomi och handel",
            description:
                "Representerar settlementets utvecklade handelsinfrastruktur och marknadsfunktioner.",
            effect: "Marknadsfunktioner",
            cost: "150 000 Coins",
            unlockLevel: 8,
            href: "/wiki/buildings/marknadsplats",
        },
    ],

    fastning: [],

    huvudstad: [
        {
            id: "monument",
            name: "Monument",
            category: "Specialbyggnad",
            description:
                "Ett monumentalt byggprojekt som ger settlementets aktiva medlemmar en permanent bonus från all registrerad manuell produktion.",
            effect:
                "+10 % Coins från all registrerad manuell produktion",
            cost: "400 000 Coins",
            unlockLevel: 10,
            href: "/wiki/buildings/monument",
        },
    ],

    grevskap: [],

    hertigdome: [
        {
            id: "slott",
            name: "Slott",
            category: "Prestigebyggnad",
            description:
                "Ett stort permanent byggprojekt som representerar settlementets politiska och territoriella utveckling.",
            effect: "Ingen direkt spelbonus",
            cost: "1 000 000 Coins",
            unlockLevel: 12,
            href: "/wiki/buildings/slott",
        },
    ],

    nation: [],

    kungadome: [],

    imperium: [
        {
            id: "underverk",
            name: "Underverk",
            category: "Prestigebyggnad",
            description:
                "Det största permanenta byggprojektet i GameZone och slutpunkten för settlementets byggnadsprogression.",
            effect: "+10 % ränta på stadskassan",
            cost: "5 000 000 Coins",
            unlockLevel: 15,
            href: "/wiki/buildings/underverk",
        },
    ],
};


export function getSettlementBuildingHrefByRequirement(
    requirement: string,
): string | undefined {
    const normalized = requirement.trim().toLocaleLowerCase("sv-SE");

    for (const buildings of Object.values(settlementBuildings)) {
        const building = buildings.find((candidate) => {
            const name = candidate.name.toLocaleLowerCase("sv-SE");
            return normalized === name || normalized.startsWith(`${name},`);
        });

        if (building?.href) {
            return building.href;
        }
    }

    return undefined;
}

export function getSettlementBuildings(
    group: SettlementBuildingGroup,
): SettlementBuilding[] {
    return settlementBuildings[group] ?? [];
}

export function isSettlementBuildingGroup(
    value: string,
): value is SettlementBuildingGroup {
    return value in settlementBuildings;
}