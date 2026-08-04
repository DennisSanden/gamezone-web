import { getSettlementBuildings } from "../settlement-buildings";
import type { SettlementUpgrade } from "./types";

export const kungadomeTillImperium: SettlementUpgrade = {
    currentLevel: {
        name: "Kungadöme",
        level: 14,
    },

    nextLevel: {
        name: "Imperium",
        level: 15,
        href: "/wiki/settlements/imperium",
    },

    changes: [
        {
            label: "Territorieradie",
            from: "148 block",
            to: "150 block",
        },
    ],

    upgradeCost: {
        coins: "10 000 000 Coins",

        materials: [
            {
                id: "diamond-ore",
                name: "Diamond Ore",
                amount: 3072,
                icon: "💎",
            },
            {
                id: "copper-ore",
                name: "Copper Ore",
                amount: 2048,
                icon: "🟧",
            },
            {
                id: "beetroot",
                name: "Beetroot",
                amount: 3072,
                icon: "🫜",
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
            }
        ],
    },

    buildings: getSettlementBuildings("imperium"),

    requiredCurrentBuildings: [],

    footerText:
        "Kostnaden ovan gäller settlementuppgraderingen till Imperium. Underverk låses upp på nivå 15 som ett separat byggprojekt med en kostnad på 5 000 000 Coins.",
};