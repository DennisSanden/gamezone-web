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
            from: "175 block",
            to: "200 block",
        },
    ],

    upgradeCost: {
        coins: "500 000 Coins",

        materials: [
            {
                id: "diamond-ore",
                name: "Diamond Ore",
                amount: 768,
                icon: "⛏️",
            },
            {
                id: "iron-ore",
                name: "Iron Ore",
                amount: 768,
                icon: "⛏️",
            },
            {
                id: "wheat",
                name: "Wheat",
                amount: 768,
                icon: "🌾",
            },
            {
                id: "carrots",
                name: "Carrots",
                amount: 768,
                icon: "🥕",
            },
            {
                id: "leather",
                name: "Leather",
                amount: 384,
                icon: "🟫",
            },
            {
                id: "beef",
                name: "Beef",
                amount: 384,
                icon: "🥩",
            },
            {
                id: "oak-logs",
                name: "Oak Logs",
                amount: 768,
                icon: "🪵",
            },
            {
                id: "birch-logs",
                name: "Birch Logs",
                amount: 768,
                icon: "🪵",
            },
            {
                id: "cod",
                name: "Cod",
                amount: 192,
                icon: "🐟",
            },
            {
                id: "salmon",
                name: "Salmon",
                amount: 192,
                icon: "🐟",
            },
            {
                id: "stone-bricks",
                name: "Stone Bricks",
                amount: 2560,
                icon: "🧱",
            },
            {
                id: "fermented-spider-eye",
                name: "Fermented Spider Eye",
                amount: 256,
                icon: "🕷️",
            },
        ],
    },

    buildings: getSettlementBuildings("fastning"),

    requiredCurrentBuildings: ["Marknadsplats"],

    footerText:
        "Fästning låser inte upp någon ny unik byggnad. Marknadsplats måste redan vara permanent upplåst innan settlementet kan uppgraderas från Handelsstad till Fästning.",
};