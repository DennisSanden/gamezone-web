export const settlementLevelKeys = [
    "enstoring",
    "lager",
    "by",
    "bosattning",
    "samhalle",
    "koping",
    "stad",
    "handelsstad",
    "fastning",
    "huvudstad",
    "grevskap",
    "hertigdome",
    "nation",
    "kungadome",
    "imperium",
] as const;

export type SettlementLevelKey =
    (typeof settlementLevelKeys)[number];

export type SettlementLevel = {
    key: SettlementLevelKey;
    level: number;
    name: string;
    territoryRadius: string;
    categoryEconomy: string;
    nextLevel: string | null;
};

const settlementLevels: Record<
    SettlementLevelKey,
    SettlementLevel
> = {
    enstoring: {
        key: "enstoring",
        level: 1,
        name: "Enstöring",
        territoryRadius: "13 block",
        categoryEconomy: "Coins endast från vald kategori",
        nextLevel: "Läger",
    },
    lager: {
        key: "lager",
        level: 2,
        name: "Läger",
        territoryRadius: "20 block",
        categoryEconomy: "Coins endast från vald kategori",
        nextLevel: "Boplats",
    },
    by: {
        key: "by",
        level: 3,
        name: "Boplats",
        territoryRadius: "30 block",
        categoryEconomy: "Coins endast från vald kategori",
        nextLevel: "Nybygge",
    },
    bosattning: {
        key: "bosattning",
        level: 4,
        name: "Nybygge",
        territoryRadius: "40 block",
        categoryEconomy: "Coins endast från vald kategori",
        nextLevel: "By",
    },
    samhalle: {
        key: "samhalle",
        level: 5,
        name: "By",
        territoryRadius: "50 block",
        categoryEconomy: "Coins endast från vald kategori",
        nextLevel: "Storby",
    },
    koping: {
        key: "koping",
        level: 6,
        name: "Storby",
        territoryRadius: "63 block",
        categoryEconomy: "Coins endast från vald kategori",
        nextLevel: "Samhälle",
    },
    stad: {
        key: "stad",
        level: 7,
        name: "Samhälle",
        territoryRadius: "75 block",
        categoryEconomy: "Coins endast från vald kategori",
        nextLevel: "Köping",
    },
    handelsstad: {
        key: "handelsstad",
        level: 8,
        name: "Köping",
        territoryRadius: "88 block",
        categoryEconomy: "Coins endast från vald kategori",
        nextLevel: "Handelsköping",
    },
    fastning: {
        key: "fastning",
        level: 9,
        name: "Handelsköping",
        territoryRadius: "100 block",
        categoryEconomy: "Coins endast från vald kategori",
        nextLevel: "Småstad",
    },
    huvudstad: {
        key: "huvudstad",
        level: 10,
        name: "Småstad",
        territoryRadius: "113 block",
        categoryEconomy: "Coins endast från vald kategori",
        nextLevel: "Stad",
    },
    grevskap: {
        key: "grevskap",
        level: 11,
        name: "Stad",
        territoryRadius: "125 block",
        categoryEconomy: "Coins endast från vald kategori",
        nextLevel: "Handelsstad",
    },
    hertigdome: {
        key: "hertigdome",
        level: 12,
        name: "Handelsstad",
        territoryRadius: "135 block",
        categoryEconomy: "Coins endast från vald kategori",
        nextLevel: "Fästningsstad",
    },
    nation: {
        key: "nation",
        level: 13,
        name: "Fästningsstad",
        territoryRadius: "143 block",
        categoryEconomy: "Coins endast från vald kategori",
        nextLevel: "Residensstad",
    },
    kungadome: {
        key: "kungadome",
        level: 14,
        name: "Residensstad",
        territoryRadius: "148 block",
        categoryEconomy: "Coins endast från vald kategori",
        nextLevel: "Storstad",
    },
    imperium: {
        key: "imperium",
        level: 15,
        name: "Storstad",
        territoryRadius: "150 block",
        categoryEconomy: "Coins endast från vald kategori",
        nextLevel: null,
    },
};

export function isSettlementLevelKey(
    value: string,
): value is SettlementLevelKey {
    return settlementLevelKeys.includes(
        value as SettlementLevelKey,
    );
}

export function getSettlementLevel(
    key: SettlementLevelKey,
): SettlementLevel {
    return settlementLevels[key];
}

export function getSettlementInfoboxItems(
    key: SettlementLevelKey,
) {
    const settlement = getSettlementLevel(key);

    return [
        {
            label: "Nivå",
            value: String(settlement.level),
        },
        {
            label: "Territorieradie",
            value: settlement.territoryRadius,
        },
        {
            label: "Produktion",
            value: settlement.categoryEconomy,
        },
        {
            label: "Nästa nivå",
            value: settlement.nextLevel ?? "Högsta nivån",
        },
    ];
}
