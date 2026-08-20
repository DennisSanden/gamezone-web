export type SettlementUpgradeKey =
    | "level-1-till-2"
    | "level-2-till-3"
    | "level-3-till-4"
    | "level-4-till-5"
    | "level-5-till-6"
    | "level-6-till-7"
    | "level-7-till-8"
    | "level-8-till-9"
    | "level-9-till-10"
    | "level-10-till-11"
    | "level-11-till-12"
    | "level-12-till-13"
    | "level-13-till-14"
    | "level-14-till-15"
    | "level-15-till-16"
    | "level-16-till-17"
    | "level-17-till-18"
    | "level-18-till-19"
    | "level-19-till-20"
    | "level-20-till-21"
    | "level-21-till-22"
    | "level-22-till-23"
    | "level-23-till-24"
    | "level-24-till-25"
    | "level-25-till-26"
    | "level-26-till-27"
    | "level-27-till-28"
    | "level-28-till-29"
    | "level-29-till-30"
    | "level-30-till-31"
    | "level-31-till-32"
    | "level-32-till-33"
    | "level-33-till-34"
    | "level-34-till-35"
    | "level-35-till-36"
    | "level-36-till-37"
    | "level-37-till-38"
    | "level-38-till-39"
    | "level-39-till-40"
    | "level-40-till-41"
    | "level-41-till-42"
    | "level-42-till-43"
    | "level-43-till-44"
    | "level-44-till-45"
    | "level-45-till-46"
    | "level-46-till-47"
    | "level-47-till-48"
    | "level-48-till-49"
    | "level-49-till-50";

export type SettlementUpgradeChange = {
    label: string;
    from: string;
    to: string;
};

export type SettlementUpgradeMaterial = {
    id: string;
    name: string;
    amount: number | string;
    icon: string;
    texture?: string;
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

    requiredCurrentBuildings: string[];

    // Legacy fields kept optional so older upgrade definition files
    // continue to type-check. The current 1-50 progression does not
    // use buildings as level requirements.
    buildings?: import("../settlement-buildings").SettlementBuilding[];
    footerText?: string;
};
