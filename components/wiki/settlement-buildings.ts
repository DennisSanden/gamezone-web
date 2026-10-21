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
    { id: "gruva", name: "Gruva", category: "Gruvdrift", description: "Frivillig bonusbyggnad. Blast Furnaces smälter malm 15 % snabbare inom settlementet.", effect: "Blast Furnaces smälter malm 15 % snabbare inom settlementet.", cost: "10 000 Coins", unlockLevel: 2, href: "/wiki/buildings/gruva" },
    { id: "lada", name: "Lada", category: "Jordbruk", description: "Frivillig bonusbyggnad. 15 % chans att en skördad gröda automatiskt återplanteras utan att förbruka ett frö.", effect: "15 % chans att en skördad gröda automatiskt återplanteras utan att förbruka ett frö.", cost: "10 000 Coins", unlockLevel: 2, href: "/wiki/buildings/lada" },
    { id: "ladugard", name: "Ladugård", category: "Boskap", description: "Frivillig bonusbyggnad. Djur kan avlas igen 15 % snabbare efter föregående avel.", effect: "Djur kan avlas igen 15 % snabbare efter föregående avel.", cost: "10 000 Coins", unlockLevel: 2, href: "/wiki/buildings/ladugard" },
    { id: "fiskebrygga", name: "Fiskebrygga", category: "Fiske", description: "Frivillig bonusbyggnad. 15 % snabbare napp vid fiske inom settlementet.", effect: "15 % snabbare napp vid fiske inom settlementet.", cost: "10 000 Coins", unlockLevel: 2, href: "/wiki/buildings/fiskebrygga" },
    { id: "sagverk", name: "Sågverk", category: "Skogsbruk", description: "Frivillig bonusbyggnad. 10 % chans att få extra plankor när man tillverkar plankor av stockar.", effect: "10 % chans att få extra plankor när man tillverkar plankor av stockar.", cost: "10 000 Coins", unlockLevel: 2, href: "/wiki/buildings/sagverk" },
    { id: "stenhuggeri", name: "Stenhuggeri", category: "Byggmaterial", description: "Frivillig bonusbyggnad. 10 % chans att få ett extra trappblock eller en extra slab från en Stonecutter.", effect: "10 % chans att få ett extra trappblock eller en extra slab från en Stonecutter.", cost: "10 000 Coins", unlockLevel: 2, href: "/wiki/buildings/stenhuggeri" },
];

const settlementBuildings: Record<SettlementBuildingGroup, SettlementBuilding[]> = {
    enstoring: [],
    lager: categoryBuildings,
    by: [
        { id: "handelscentrum", name: "Handelscentrum", category: "Administration", description: "Frivillig bonusbyggnad. Företag i settlementet får ha 2 aktiva företagskontrakt samtidigt i stället för 1.", effect: "Företag i settlementet får ha 2 aktiva företagskontrakt samtidigt i stället för 1.", cost: "20 000 Coins", unlockLevel: 3, href: "/wiki/buildings/handelscentrum" },
    ],
    bosattning: [],
    samhalle: [
        { id: "laboratorium", name: "Laboratorium", category: "Alkemi", description: "Frivillig bonusbyggnad. 15 % chans att bryggning inte förbrukar Blaze Powder.", effect: "15 % chans att bryggning inte förbrukar Blaze Powder.", cost: "35 000 Coins", unlockLevel: 5, href: "/wiki/buildings/laboratorium" },
    ],
    koping: [
        { id: "bank", name: "Bank", category: "Ekonomi", description: "Frivillig bonusbyggnad. Tillgång till bankfunktionerna i GUI, ekonomisk historik och 10 % billigare företagslicenser.", effect: "Tillgång till bankfunktionerna i GUI, ekonomisk historik och 10 % billigare företagslicenser.", cost: "50 000 Coins", unlockLevel: 6, href: "/wiki/buildings/bank" },
    ],
    stad: [
        { id: "reliktempel", name: "Reliktempel", category: "Reliker", description: "Frivillig bonusbyggnad. Aktiva settlementrelikers produktions- och XP-bonusar blir 10 % starkare.", effect: "Aktiva settlementrelikers produktions- och XP-bonusar blir 10 % starkare.", cost: "50 000 Coins", unlockLevel: 7, href: "/wiki/buildings/reliktempel" },
    ],
    handelsstad: [
        { id: "vindhamn", name: "Vindhamn", category: "Infrastruktur", description: "Frivillig bonusbyggnad. 20 % chans att en fyrverkeriraket inte förbrukas vid Elytraflygning inom settlementet. Kräver fortfarande level 10 för att använda Elytra.", effect: "20 % chans att en fyrverkeriraket inte förbrukas vid Elytraflygning inom settlementet. Kräver fortfarande level 10 för att använda Elytra.", cost: "100 000 Coins", unlockLevel: 8, href: "/wiki/buildings/vindhamn" },
    ],
    fastning: [],
    huvudstad: [
        { id: "gatukontor", name: "Gatukontor", category: "Infrastruktur", description: "Frivillig bonusbyggnad. 10 % snabbare gånghastighet på vägar byggda av exempelvis Cobblestone, Stone Bricks och Packed Mud inom settlementet.", effect: "10 % snabbare gånghastighet på vägar byggda av exempelvis Cobblestone, Stone Bricks och Packed Mud inom settlementet.", cost: "5 000 000 Coins", unlockLevel: 10, href: "/wiki/buildings/gatukontor" },
    ],
    grevskap: [],
    hertigdome: [
        { id: "turistbyra", name: "Turistbyrå", category: "Turism", description: "Frivillig bonusbyggnad. Settlementet får Coins för unika förstagångsbesökare, med dagligt utbetalningstak.", effect: "Settlementet får Coins för unika förstagångsbesökare, med dagligt utbetalningstak.", cost: "350 000 Coins", unlockLevel: 12, href: "/wiki/buildings/turistbyra" },
    ],
    nation: [],
    kungadome: [
        { id: "stall", name: "Stall", category: "Infrastruktur", description: "Frivillig bonusbyggnad. Ytterligare 10 % hastighet för hästar, åsnor och mulor, med gemensamt hastighetstak.", effect: "Ytterligare 10 % hastighet för hästar, åsnor och mulor, med gemensamt hastighetstak.", cost: "500 000 Coins", unlockLevel: 14, href: "/wiki/buildings/stall" },
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
