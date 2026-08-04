import { getSettlementBuildings } from "../settlement-buildings";
import type { SettlementUpgrade } from "./types";

export const enstoringTillLager: SettlementUpgrade = {
    currentLevel: {
        name: "Enstöring",
        level: 1,
    },

    nextLevel: {
        name: "Läger",
        level: 2,
        href: "/wiki/settlements/lager",
    },

    changes: [
        {
            label: "Territorieradie",
            from: "13 block",
            to: "20 block",
        },
    ],

    upgradeCost: {
        coins: "0 Coins",

        materials: [
            {
                id: "oak-log",
                name: "Oak Log",
                amount: 32,
                icon: "🪵",
            },
            {
                id: "cobblestone",
                name: "Cobblestone",
                amount: 64,
                icon: "🪨",
            }
        ],
    },

    buildings: getSettlementBuildings("lager"),

    requiredCurrentBuildings: [],

    footerText:
        "Alla Coins och material för settlementuppgraderingen måste finnas tillgängliga samtidigt. Om något krav saknas genomförs ingen del av uppgraderingen.",
};