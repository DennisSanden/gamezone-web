import { getSettlementBuildings } from "../settlement-buildings";
import type { SettlementUpgrade } from "./types";

export const stadTillHandelsstad: SettlementUpgrade = {
    currentLevel: {
        name: "Stad",
        level: 7,
    },

    nextLevel: {
        name: "Handelsstad",
        level: 8,
        href: "/wiki/settlements/handelsstad",
    },

    changes: [
        {
            label: "Territorieradie",
            from: "150 block",
            to: "175 block",
        },
        {
            label: "Handelsrabatt",
            from: "30 %",
            to: "35 %",
        },
        {
            label: "Veckounderhåll",
            from: "12 500 Coins",
            to: "20 000 Coins",
        },
    ],

    upgradeCost: {
        coins: "300 000 Coins",

        materials: [
            {
                id: "emerald-ore",
                name: "Emerald Ore",
                amount: 1024,
                icon: "⛏️",
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
                id: "mangrove-logs",
                name: "Mangrove Logs",
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
            },
        ],
    },

    buildings: getSettlementBuildings("handelsstad"),

    requiredCurrentBuildings: ["Kyrka"],

    footerText:
        "Kostnaden ovan gäller settlementuppgraderingen till Handelsstad. Marknadsplats låses upp på nivå 8 som ett separat byggprojekt med en kostnad på 150 000 Coins och egna materialkrav.",
};