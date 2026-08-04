import { getSettlementBuildings } from "../settlement-buildings";
import type { SettlementUpgrade } from "./types";

export const nationTillKungadome: SettlementUpgrade = {
    currentLevel: {
        name: "Nation",
        level: 13,
    },

    nextLevel: {
        name: "Kungadöme",
        level: 14,
        href: "/wiki/settlements/kungadome",
    },

    changes: [
        {
            label: "Territorieradie",
            from: "285 block",
            to: "295 block",
        },
    ],

    upgradeCost: {
        coins: "8 000 000 Coins",

        materials: [
            {
                id: "diamond-ore",
                name: "Diamond Ore",
                amount: 3072,
                icon: "⛏️",
            },
            {
                id: "copper-ore",
                name: "Copper Ore",
                amount: 2048,
                icon: "⛏️",
            },
            {
                id: "beetroot",
                name: "Beetroot",
                amount: 3072,
                icon: "🌱",
            },
            {
                id: "pumpkin",
                name: "Pumpkin",
                amount: 2048,
                icon: "🎃",
            },
            {
                id: "porkchop",
                name: "Porkchop",
                amount: 1536,
                icon: "🥩",
            },
            {
                id: "chicken",
                name: "Chicken",
                amount: 1536,
                icon: "🍗",
            },
            {
                id: "crimson-stem",
                name: "Crimson Stem",
                amount: 3072,
                icon: "🪵",
            },
            {
                id: "warped-stem",
                name: "Warped Stem",
                amount: 2048,
                icon: "🪵",
            },
            {
                id: "salmon",
                name: "Salmon",
                amount: 768,
                icon: "🐟",
            },
            {
                id: "pufferfish",
                name: "Pufferfish",
                amount: 768,
                icon: "🐡",
            },
            {
                id: "black-concrete",
                name: "Black Concrete",
                amount: 8192,
                icon: "⬛",
            },
            {
                id: "golden-carrot",
                name: "Golden Carrot",
                amount: 1536,
                icon: "🥕",
            },
        ],
    },

    buildings: getSettlementBuildings("kungadome"),

    requiredCurrentBuildings: ["Slott"],

    footerText:
        "Kungadöme låser inte upp någon ny unik byggnad. Slott måste redan vara permanent upplåst innan settlementet kan uppgraderas från Nation till Kungadöme.",
};