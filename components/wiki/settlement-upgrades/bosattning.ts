import { getSettlementBuildings } from "../settlement-buildings";
import type { SettlementUpgrade } from "./types";

export const bosattningTillSamhalle: SettlementUpgrade = {
    currentLevel: {
        name: "Bosättning",
        level: 4,
    },

    nextLevel: {
        name: "Samhälle",
        level: 5,
        href: "/wiki/settlements/samhalle",
    },

    changes: [
        {
            label: "Territorieradie",
            from: "80 block",
            to: "100 block",
        },
    ],

    upgradeCost: {
        coins: "50 000 Coins",

        materials: [
            {
                id: "gold-ore",
                name: "Gold Ore",
                amount: 384,
                icon: "⛏️",
            },
            {
                id: "beetroot",
                name: "Beetroot",
                amount: 384,
                icon: "🌱",
            },
            {
                id: "porkchop",
                name: "Porkchop",
                amount: 192,
                icon: "🥩",
            },
            {
                id: "jungle-logs",
                name: "Jungle Logs",
                amount: 384,
                icon: "🪵",
            },
            {
                id: "pufferfish",
                name: "Pufferfish",
                amount: 96,
                icon: "🐡",
            },
            {
                id: "glass",
                name: "Glass",
                amount: 768,
                icon: "🪟",
            },
            {
                id: "nether-wart",
                name: "Nether Wart",
                amount: 64,
                icon: "🍄",
            },
        ],
    },

    buildings: getSettlementBuildings("samhalle"),

    requiredCurrentBuildings: ["Bank"],

    footerText:
        "Kostnaden ovan gäller settlementuppgraderingen till Samhälle. Laboratorium låses upp i samband med den första uppgraderingen till Samhälle och har egna byggnadskrav.",
};