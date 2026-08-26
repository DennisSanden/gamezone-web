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
            from: "40 block",
            to: "50 block",
        },
    ],

    upgradeCost: {
        coins: "50 000 Coins",

        materials: [
            {
                id: "raw-copper",
                name: "Raw Copper",
                amount: 256,
                icon: "🟧",
            },
            {
                id: "potato",
                name: "Potato",
                amount: 128,
                icon: "🥔",
            },
            {
                id: "white-wool",
                name: "White Wool",
                amount: 128,
                icon: "⬜",
            },
            {
                id: "spruce-log",
                name: "Spruce Log",
                amount: 256,
                icon: "🪵",
            },
            {
                id: "tropical-fish",
                name: "Tropical Fish",
                amount: 64,
                icon: "🐠",
            },
            {
                id: "deepslate-bricks",
                name: "Deepslate Bricks",
                amount: 512,
                icon: "🧱",
            }
        ],
    },

    buildings: getSettlementBuildings("samhalle"),

    requiredCurrentBuildings: ["Bank"],

    footerText:
        "Laboratorium blir tillgängligt från settlementnivå 5 endast för settlements med kategorin Alkemi. Det är inte ett generellt levelkrav.",
};