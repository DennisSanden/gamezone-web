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
        nextLevel: "By",
    },
    by: {
        key: "by",
        level: 3,
        name: "By",
        territoryRadius: "30 block",
        categoryEconomy: "Coins endast från vald kategori",
        nextLevel: "Bosättning",
    },
    bosattning: {
        key: "bosattning",
        level: 4,
        name: "Bosättning",
        territoryRadius: "40 block",
        categoryEconomy: "Coins endast från vald kategori",
        nextLevel: "Samhälle",
    },
    samhalle: {
        key: "samhalle",
        level: 5,
        name: "Samhälle",
        territoryRadius: "50 block",
        categoryEconomy: "Coins endast från vald kategori",
        nextLevel: "Köping",
    },
    koping: {
        key: "koping",
        level: 6,
        name: "Köping",
        territoryRadius: "63 block",
        categoryEconomy: "Coins endast från vald kategori",
        nextLevel: "Stad",
    },
    stad: {
        key: "stad",
        level: 7,
        name: "Stad",
        territoryRadius: "75 block",
        categoryEconomy: "Coins endast från vald kategori",
        nextLevel: "Handelsstad",
    },
    handelsstad: {
        key: "handelsstad",
        level: 8,
        name: "Handelsstad",
        territoryRadius: "88 block",
        categoryEconomy: "Coins endast från vald kategori",
        nextLevel: "Fästning",
    },
    fastning: {
        key: "fastning",
        level: 9,
        name: "Fästning",
        territoryRadius: "100 block",
        categoryEconomy: "Coins endast från vald kategori",
        nextLevel: "Huvudstad",
    },
    huvudstad: {
        key: "huvudstad",
        level: 10,
        name: "Huvudstad",
        territoryRadius: "113 block",
        categoryEconomy: "Coins endast från vald kategori",
        nextLevel: "Grevskap",
    },
    grevskap: {
        key: "grevskap",
        level: 11,
        name: "Grevskap",
        territoryRadius: "125 block",
        categoryEconomy: "Coins endast från vald kategori",
        nextLevel: "Hertigdöme",
    },
    hertigdome: {
        key: "hertigdome",
        level: 12,
        name: "Hertigdöme",
        territoryRadius: "135 block",
        categoryEconomy: "Coins endast från vald kategori",
        nextLevel: "Nation",
    },
    nation: {
        key: "nation",
        level: 13,
        name: "Nation",
        territoryRadius: "143 block",
        categoryEconomy: "Coins endast från vald kategori",
        nextLevel: "Kungadöme",
    },
    kungadome: {
        key: "kungadome",
        level: 14,
        name: "Kungadöme",
        territoryRadius: "148 block",
        categoryEconomy: "Coins endast från vald kategori",
        nextLevel: "Imperium",
    },
    imperium: {
        key: "imperium",
        level: 15,
        name: "Imperium",
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
