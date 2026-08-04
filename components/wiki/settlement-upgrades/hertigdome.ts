import { getSettlementBuildings } from "../settlement-buildings";
import type { SettlementUpgrade } from "./types";

export const hertigdomeTillNation: SettlementUpgrade = {
    currentLevel: {
        name: "Hertigdöme",
        level: 12,
    },

    nextLevel: {
        name: "Nation",
        level: 13,
        href: "/wiki/settlements/nation",
    },

    changes: [
        {
            label: "Territorieradie",
            from: "135 block",
            to: "143 block",
        },
    ],

    upgradeCost: {
        coins: "6 000 000 Coins",

        materials: [
            {
                id: "diamond",
                name: "Diamond",
                amount: 2048,
                icon: "💎",
            },
            {
                id: "raw-gold",
                name: "Raw Gold",
                amount: 1024,
                icon: "🟨",
            },
            {
                id: "bread",
                name: "Bread",
                amount: 2048,
                icon: "🍞",
            },
            {
                id: "wheat",
                name: "Wheat",
                amount: 1024,
                icon: "🌾",
            },
            {
                id: "mutton",
                name: "Mutton",
                amount: 1024,
                icon: "🥩",
            },
            {
                id: "leather",
                name: "Leather",
                amount: 1024,
                icon: "🟫",
            },
            {
                id: "mangrove-log",
                name: "Mangrove Log",
                amount: 2048,
                icon: "🪵",
            },
            {
                id: "cherry-log",
                name: "Cherry Log",
                amount: 1024,
                icon: "🪵",
            },
            {
                id: "tropical-fish",
                name: "Tropical Fish",
                amount: 512,
                icon: "🐠",
            },
            {
                id: "pufferfish",
                name: "Pufferfish",
                amount: 512,
                icon: "🐡",
            },
            {
                id: "deepslate-bricks",
                name: "Deepslate Bricks",
                amount: 5120,
                icon: "🧱",
            },
            {
                id: "ghast-tear",
                name: "Ghast Tear",
                amount: 768,
                icon: "💧",
            }
        ],
    },

    buildings: getSettlementBuildings("nation"),

    requiredCurrentBuildings: ["Slott"],

    footerText:
        "Nation låser inte upp någon ny unik byggnad. Slott måste redan vara permanent upplåst innan settlementet kan uppgraderas från Hertigdöme till Nation.",
};