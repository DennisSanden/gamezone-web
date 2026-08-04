import { getSettlementBuildings } from "../settlement-buildings";
import type { SettlementUpgrade } from "./types";

export const handelsstadTillFastning: SettlementUpgrade = {
    currentLevel: {
        name: "Handelsstad",
        level: 8,
    },

    nextLevel: {
        name: "Fästning",
        level: 9,
        href: "/wiki/settlements/fastning",
    },

    changes: [
        {
            label: "Territorieradie",
            from: "88 block",
            to: "100 block",
        },
    ],

    upgradeCost: {
        coins: "500 000 Coins",

        materials: [
            {
                id: "emerald",
                name: "Emerald",
                amount: 384,
                icon: "💚",
            },
            {
                id: "sugar-cane",
                name: "Sugar Cane",
                amount: 1024,
                icon: "🌿",
            },
            {
                id: "mutton",
                name: "Mutton",
                amount: 512,
                icon: "🥩",
            },
            {
                id: "mangrove-log",
                name: "Mangrove Log",
                amount: 1024,
                icon: "🪵",
            },
            {
                id: "tropical-fish",
                name: "Tropical Fish",
                amount: 256,
                icon: "🐠",
            },
            {
                id: "white-concrete",
                name: "White Concrete",
                amount: 2048,
                icon: "⬜",
            },
            {
                id: "glowstone-dust",
                name: "Glowstone Dust",
                amount: 192,
                icon: "✨",
            }
        ],
    },

    buildings: getSettlementBuildings("fastning"),

    requiredCurrentBuildings: ["Marknadsplats"],

    footerText:
        "Fästning låser inte upp någon ny unik byggnad. Marknadsplats måste redan vara permanent upplåst innan settlementet kan uppgraderas från Handelsstad till Fästning.",
};