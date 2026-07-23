import type { SettlementBuilding } from "../settlement-buildings";

export type SettlementUpgradeKey =
    | "enstoring-till-lager"
    | "lager-till-by"
    | "by-till-bosattning"
    | "bosattning-till-samhalle"
    | "samhalle-till-koping"
    | "koping-till-stad"
    | "stad-till-handelsstad"
    | "handelsstad-till-fastning"
    | "fastning-till-huvudstad"
    | "huvudstad-till-grevskap"
    | "grevskap-till-hertigdome"
    | "hertigdome-till-nation"
    | "nation-till-kungadome"
    | "kungadome-till-imperium";

export type SettlementUpgradeChange = {
    label: string;
    from: string;
    to: string;
};

export type SettlementUpgradeMaterial = {
    id: string;
    name: string;
    amount: number;
    icon: string;
};

export type SettlementUpgrade = {
    currentLevel: {
        name: string;
        level: number;
    };

    nextLevel: {
        name: string;
        level: number;
        href: string;
    };

    changes: SettlementUpgradeChange[];

    upgradeCost: {
        coins: string;
        materials: SettlementUpgradeMaterial[];
    };

    buildings: SettlementBuilding[];

    requiredCurrentBuildings: string[];

    footerText: string;
};