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
            from: "295 block",
            to: "300 block",
        },
        {
            label: "Handelsrabatt",
            from: "65 %",
            to: "70 %",
        },
        {
            label: "Veckounderhåll",
            from: "175 000 Coins",
            to: "250 000 Coins",
        },
    ],

    upgradeCost: {
        coins: "10 000 000 Coins",

        materials: [
            {
                id: "emerald-ore",
                name: "Emerald Ore",
                amount: 4096,
                icon: "⛏️",
            },
            {
                id: "diamond-ore",
                name: "Diamond Ore",
                amount: 4096,
                icon: "⛏️",
            },
            {
                id: "gold-ore",
                name: "Gold Ore",
                amount: 2048,
                icon: "⛏️",
            },
            {
                id: "wheat",
                name: "Wheat",
                amount: 4096,
                icon: "🌾",
            },
            {
                id: "carrots",
                name: "Carrots",
                amount: 4096,
                icon: "🥕",
            },
            {
                id: "sugar-cane",
                name: "Sugar Cane",
                amount: 2048,
                icon: "🌿",
            },
            {
                id: "leather",
                name: "Leather",
                amount: 2048,
                icon: "🟫",
            },
            {
                id: "beef",
                name: "Beef",
                amount: 2048,
                icon: "🥩",
            },
            {
                id: "mutton",
                name: "Mutton",
                amount: 2048,
                icon: "🥩",
            },
            {
                id: "oak-logs",
                name: "Oak Logs",
                amount: 4096,
                icon: "🪵",
            },
            {
                id: "spruce-logs",
                name: "Spruce Logs",
                amount: 4096,
                icon: "🪵",
            },
            {
                id: "cherry-logs",
                name: "Cherry Logs",
                amount: 2048,
                icon: "🪵",
            },
            {
                id: "cod",
                name: "Cod",
                amount: 1024,
                icon: "🐟",
            },
            {
                id: "salmon",
                name: "Salmon",
                amount: 1024,
                icon: "🐟",
            },
            {
                id: "tropical-fish",
                name: "Tropical Fish",
                amount: 1024,
                icon: "🐠",
            },
            {
                id: "stone-bricks",
                name: "Stone Bricks",
                amount: 12288,
                icon: "🧱",
            },
            {
                id: "nether-wart",
                name: "Nether Wart",
                amount: 2048,
                icon: "🍄",
            },
            {
                id: "blaze-powder",
                name: "Blaze Powder",
                amount: 1024,
                icon: "🔥",
            },
            {
                id: "magma-cream",
                name: "Magma Cream",
                amount: 1024,
                icon: "🔥",
            },
        ],
    },

    buildings: getSettlementBuildings("imperium"),

    requiredCurrentBuildings: [],

    footerText:
        "Kostnaden ovan gäller settlementuppgraderingen till Imperium. Underverk låses upp på nivå 15 som ett separat byggprojekt med en kostnad på 5 000 000 Coins och egna materialkrav.",
};