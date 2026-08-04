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
    weeklyUpkeep: string;
    baseBonus: string;
    tradeDiscount: string;
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
        weeklyUpkeep: "0 Coins",
        baseBonus: "+15 % Coins",
        tradeDiscount: "0 %",
        nextLevel: "Läger",
    },
    lager: {
        key: "lager",
        level: 2,
        name: "Läger",
        territoryRadius: "20 block",
        weeklyUpkeep: "500 Coins",
        baseBonus: "+15 % Coins",
        tradeDiscount: "5 %",
        nextLevel: "By",
    },
    by: {
        key: "by",
        level: 3,
        name: "By",
        territoryRadius: "30 block",
        weeklyUpkeep: "1 000 Coins",
        baseBonus: "+15 % Coins",
        tradeDiscount: "10 %",
        nextLevel: "Bosättning",
    },
    bosattning: {
        key: "bosattning",
        level: 4,
        name: "Bosättning",
        territoryRadius: "40 block",
        weeklyUpkeep: "2 000 Coins",
        baseBonus: "+15 % Coins",
        tradeDiscount: "15 %",
        nextLevel: "Samhälle",
    },
    samhalle: {
        key: "samhalle",
        level: 5,
        name: "Samhälle",
        territoryRadius: "50 block",
        weeklyUpkeep: "4 000 Coins",
        baseBonus: "+15 % Coins",
        tradeDiscount: "20 %",
        nextLevel: "Köping",
    },
    koping: {
        key: "koping",
        level: 6,
        name: "Köping",
        territoryRadius: "63 block",
        weeklyUpkeep: "7 500 Coins",
        baseBonus: "+15 % Coins",
        tradeDiscount: "25 %",
        nextLevel: "Stad",
    },
    stad: {
        key: "stad",
        level: 7,
        name: "Stad",
        territoryRadius: "75 block",
        weeklyUpkeep: "12 500 Coins",
        baseBonus: "+15 % Coins",
        tradeDiscount: "30 %",
        nextLevel: "Handelsstad",
    },
    handelsstad: {
        key: "handelsstad",
        level: 8,
        name: "Handelsstad",
        territoryRadius: "88 block",
        weeklyUpkeep: "20 000 Coins",
        baseBonus: "+15 % Coins",
        tradeDiscount: "35 %",
        nextLevel: "Fästning",
    },
    fastning: {
        key: "fastning",
        level: 9,
        name: "Fästning",
        territoryRadius: "100 block",
        weeklyUpkeep: "30 000 Coins",
        baseBonus: "+15 % Coins",
        tradeDiscount: "40 %",
        nextLevel: "Huvudstad",
    },
    huvudstad: {
        key: "huvudstad",
        level: 10,
        name: "Huvudstad",
        territoryRadius: "113 block",
        weeklyUpkeep: "45 000 Coins",
        baseBonus: "+15 % Coins",
        tradeDiscount: "45 %",
        nextLevel: "Grevskap",
    },
    grevskap: {
        key: "grevskap",
        level: 11,
        name: "Grevskap",
        territoryRadius: "125 block",
        weeklyUpkeep: "65 000 Coins",
        baseBonus: "+15 % Coins",
        tradeDiscount: "50 %",
        nextLevel: "Hertigdöme",
    },
    hertigdome: {
        key: "hertigdome",
        level: 12,
        name: "Hertigdöme",
        territoryRadius: "135 block",
        weeklyUpkeep: "90 000 Coins",
        baseBonus: "+15 % Coins",
        tradeDiscount: "55 %",
        nextLevel: "Nation",
    },
    nation: {
        key: "nation",
        level: 13,
        name: "Nation",
        territoryRadius: "143 block",
        weeklyUpkeep: "125 000 Coins",
        baseBonus: "+15 % Coins",
        tradeDiscount: "60 %",
        nextLevel: "Kungadöme",
    },
    kungadome: {
        key: "kungadome",
        level: 14,
        name: "Kungadöme",
        territoryRadius: "148 block",
        weeklyUpkeep: "175 000 Coins",
        baseBonus: "+15 % Coins",
        tradeDiscount: "65 %",
        nextLevel: "Imperium",
    },
    imperium: {
        key: "imperium",
        level: 15,
        name: "Imperium",
        territoryRadius: "150 block",
        weeklyUpkeep: "250 000 Coins",
        baseBonus: "+15 % Coins",
        tradeDiscount: "70 %",
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
            label: "Veckounderhåll",
            value: settlement.weeklyUpkeep,
        },
        {
            label: "Grundbonus",
            value: settlement.baseBonus,
        },
        {
            label: "Handelsrabatt",
            value: settlement.tradeDiscount,
        },
        {
            label: "Nästa nivå",
            value: settlement.nextLevel ?? "Högsta nivån",
        },
    ];
}
