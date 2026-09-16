export type SettlementBuildingGroup =
    | "enstoring"
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

const categoryBuildings: SettlementBuilding[] = [
    { id: "gruva", name: "Gruva", category: "Gruvdrift", description: "Kategoribyggnad för Gruvdrift.", effect: "+5 % Coins från Gruvdrift", cost: "10 000 Coins", unlockLevel: 2, href: "/wiki/buildings/gruva" },
    { id: "lada", name: "Lada", category: "Jordbruk", description: "Kategoribyggnad för Jordbruk.", effect: "+5 % Coins från Jordbruk", cost: "10 000 Coins", unlockLevel: 2, href: "/wiki/buildings/lada" },
    { id: "ladugard", name: "Ladugård", category: "Boskap", description: "Kategoribyggnad för Boskap.", effect: "+5 % Coins från Boskap", cost: "10 000 Coins", unlockLevel: 2, href: "/wiki/buildings/ladugard" },
    { id: "fiskebrygga", name: "Fiskebrygga", category: "Fiske", description: "Kategoribyggnad för Fiske.", effect: "+5 % Coins från Fiske", cost: "10 000 Coins", unlockLevel: 2, href: "/wiki/buildings/fiskebrygga" },
    { id: "sagverk", name: "Sågverk", category: "Skogsbruk", description: "Kategoribyggnad för Skogsbruk.", effect: "+5 % Coins från Skogsbruk", cost: "10 000 Coins", unlockLevel: 2, href: "/wiki/buildings/sagverk" },
    { id: "stenhuggeri", name: "Stenhuggeri", category: "Byggmaterial", description: "Kategoribyggnad för Byggmaterial.", effect: "+5 % Coins från Byggmaterial", cost: "10 000 Coins", unlockLevel: 2, href: "/wiki/buildings/stenhuggeri" },
];

const settlementBuildings: Record<SettlementBuildingGroup, SettlementBuilding[]> = {
    enstoring: [],
    lager: categoryBuildings,
    by: [
        { id: "handelscentrum", name: "Handelscentrum", category: "Administration", description: "Låser upp företagssystemet.", effect: "Företag, företagslicenser och handel", cost: "20 000 Coins", unlockLevel: 3, href: "/wiki/buildings/handelscentrum" },
    ],
    bosattning: [],
    samhalle: [
        { id: "laboratorium", name: "Laboratorium", category: "Alkemi", description: "Alkemins kategoribyggnad.", effect: "+5 % Coins från Alkemi", cost: "35 000 Coins", unlockLevel: 5, href: "/wiki/buildings/laboratorium" },
    ],
    koping: [
        { id: "bank", name: "Bank", category: "Ekonomi", description: "Låser upp detaljerad settlementstatistik.", effect: "Detaljerad settlementstatistik", cost: "50 000 Coins", unlockLevel: 6, href: "/wiki/buildings/bank" },
    ],
    stad: [
        { id: "reliktempel", name: "Reliktempel", category: "Reliker", description: "Aktiverar settlementets relikbonusar.", effect: "Relikbonusar", cost: "50 000 Coins", unlockLevel: 7, href: "/wiki/buildings/reliktempel" },
    ],
    handelsstad: [
        { id: "vindhamn", name: "Vindhamn", category: "Infrastruktur", description: "Krävs för att settlementets medlemmar ska kunna använda Elytra.", effect: "Elytra", cost: "100 000 Coins", unlockLevel: 8, href: "/wiki/buildings/vindhamn" },
    ],
    fastning: [],
    huvudstad: [
        { id: "gatukontor", name: "Gatukontor", category: "Infrastruktur", description: "Låser upp Riksvägsanslutningar.", effect: "Riksvägsanslutningar", cost: "5 000 000 Coins", unlockLevel: 10, href: "/wiki/buildings/gatukontor" },
    ],
    grevskap: [],
    hertigdome: [
        { id: "turistbyra", name: "Turistbyrå", category: "Turism", description: "Aktiverar settlementets turistsystem.", effect: "Turism och unika besök", cost: "350 000 Coins", unlockLevel: 12, href: "/wiki/buildings/turistbyra" },
    ],
    nation: [],
    kungadome: [
        { id: "stall", name: "Stall", category: "Infrastruktur", description: "Ökar hästhastigheten för settlementets medlemmar.", effect: "+25 % hästhastighet", cost: "500 000 Coins", unlockLevel: 14, href: "/wiki/buildings/stall" },
    ],
    imperium: [],
};

export function getSettlementBuildingHrefByRequirement(requirement: string): string | undefined {
    const normalized = requirement.trim().toLocaleLowerCase("sv-SE");
    for (const buildings of Object.values(settlementBuildings)) {
        const building = buildings.find((candidate) => {
            const name = candidate.name.toLocaleLowerCase("sv-SE");
            return normalized === name || normalized.startsWith(`${name},`);
        });
        if (building?.href) return building.href;
    }
    return undefined;
}

export function getSettlementBuildings(group: SettlementBuildingGroup): SettlementBuilding[] {
    return settlementBuildings[group] ?? [];
}

export function isSettlementBuildingGroup(value: string): value is SettlementBuildingGroup {
    return value in settlementBuildings;
}
