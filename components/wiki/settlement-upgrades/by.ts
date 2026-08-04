import { getSettlementBuildings } from "../settlement-buildings";
import type { SettlementUpgrade } from "./types";

export const byTillBosattning: SettlementUpgrade = {
    currentLevel: {
        name: "By",
        level: 3,
    },

    nextLevel: {
        name: "Bosättning",
        level: 4,
        href: "/wiki/settlements/bosattning",
    },

    changes: [
        {
            label: "Territorieradie",
            from: "30 block",
            to: "40 block",
        },
    ],

    upgradeCost: {
        coins: "20 000 Coins",

        materials: [
            {
                id: "raw-iron",
                name: "Raw Iron",
                amount: 64,
                icon: "⛏️",
            },
            {
                id: "carrot",
                name: "Carrot",
                amount: 32,
                icon: "🥕",
            },
            {
                id: "beef",
                name: "Beef",
                amount: 64,
                icon: "🥩",
            },
            {
                id: "birch-log",
                name: "Birch Log",
                amount: 64,
                icon: "🪵",
            },
            {
                id: "salmon",
                name: "Salmon",
                amount: 32,
                icon: "🐟",
            },
            {
                id: "bricks",
                name: "Bricks",
                amount: 128,
                icon: "🧱",
            }
        ],
    },

    buildings: getSettlementBuildings("bosattning"),

    requiredCurrentBuildings: ["Handelscentrum"],

    footerText:
        "Kostnaden ovan gäller settlementuppgraderingen till Bosättning. Bank låses upp i samband med den första uppgraderingen till Bosättning och har egna byggnadskrav.",
};