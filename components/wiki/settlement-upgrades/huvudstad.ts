import { getSettlementBuildings } from "../settlement-buildings";
import type { SettlementUpgrade } from "./types";

export const huvudstadTillGrevskap: SettlementUpgrade = {
    currentLevel: {
        name: "Huvudstad",
        level: 10,
    },

    nextLevel: {
        name: "Grevskap",
        level: 11,
        href: "/wiki/settlements/grevskap",
    },

    changes: [
        {
            label: "Territorieradie",
            from: "225 block",
            to: "250 block",
        },
    ],

    upgradeCost: {
        coins: "2 000 000 Coins",

        materials: [
            {
                id: "emerald-ore",
                name: "Emerald Ore",
                amount: 1536,
                icon: "⛏️",
            },
            {
                id: "redstone-ore",
                name: "Redstone Ore",
                amount: 1024,
                icon: "⛏️",
            },
            {
                id: "pumpkin",
                name: "Pumpkin",
                amount: 1536,
                icon: "🎃",
            },
            {
                id: "sugar-cane",
                name: "Sugar Cane",
                amount: 1024,
                icon: "🌿",
            },
            {
                id: "chicken",
                name: "Chicken",
                amount: 768,
                icon: "🍗",
            },
            {
                id: "egg",
                name: "Egg",
                amount: 768,
                icon: "🥚",
            },
            {
                id: "acacia-logs",
                name: "Acacia Logs",
                amount: 1536,
                icon: "🪵",
            },
            {
                id: "dark-oak-logs",
                name: "Dark Oak Logs",
                amount: 1024,
                icon: "🪵",
            },
            {
                id: "cod",
                name: "Cod",
                amount: 384,
                icon: "🐟",
            },
            {
                id: "salmon",
                name: "Salmon",
                amount: 384,
                icon: "🐟",
            },
            {
                id: "bricks",
                name: "Bricks",
                amount: 4096,
                icon: "🧱",
            },
            {
                id: "blaze-rod",
                name: "Blaze Rod",
                amount: 512,
                icon: "🔥",
            },
        ],
    },

    buildings: getSettlementBuildings("grevskap"),

    requiredCurrentBuildings: ["Monument"],

    footerText:
        "Grevskap låser inte upp någon ny unik byggnad. Monument måste redan vara permanent upplåst innan settlementet kan uppgraderas från Huvudstad till Grevskap.",
};