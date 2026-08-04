import { getSettlementBuildings } from "../settlement-buildings";
import type { SettlementUpgrade } from "./types";

export const samhalleTillKoping: SettlementUpgrade = {
    currentLevel: {
        name: "Samhälle",
        level: 5,
    },

    nextLevel: {
        name: "Köping",
        level: 6,
        href: "/wiki/settlements/koping",
    },

    changes: [
        {
            label: "Territorieradie",
            from: "50 block",
            to: "63 block",
        },
    ],

    upgradeCost: {
        coins: "100 000 Coins",

        materials: [
            {
                id: "raw-gold",
                name: "Raw Gold",
                amount: 384,
                icon: "🟨",
            },
            {
                id: "beetroot",
                name: "Beetroot",
                amount: 384,
                icon: "🫜",
            },
            {
                id: "porkchop",
                name: "Porkchop",
                amount: 192,
                icon: "🥩",
            },
            {
                id: "jungle-log",
                name: "Jungle Log",
                amount: 364,
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
                icon: "🔴",
            }
        ],
    },

    buildings: getSettlementBuildings("koping"),

    requiredCurrentBuildings: [
        "Laboratorium, endast för settlement med inriktningen Alkemi",
    ],

    footerText:
        "Kostnaden ovan gäller settlementuppgraderingen till Köping. Kyrka låses upp i samband med den första uppgraderingen till Köping och har egna byggnadskrav.",
};