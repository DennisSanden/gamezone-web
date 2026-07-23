import { getSettlementBuildings } from "../settlement-buildings";
import type { SettlementUpgrade } from "./types";

export const kopingTillStad: SettlementUpgrade = {
    currentLevel: {
        name: "Köping",
        level: 6,
    },

    nextLevel: {
        name: "Stad",
        level: 7,
        href: "/wiki/settlements/stad",
    },

    changes: [
        {
            label: "Territorieradie",
            from: "125 block",
            to: "150 block",
        },
        {
            label: "Handelsrabatt",
            from: "25 %",
            to: "30 %",
        },
        {
            label: "Veckounderhåll",
            from: "7 500 Coins",
            to: "12 500 Coins",
        },
    ],

    upgradeCost: {
        coins: "200 000 Coins",

        materials: [
            {
                id: "lapis-lazuli-ore",
                name: "Lapis Lazuli Ore",
                amount: 768,
                icon: "⛏️",
            },
            {
                id: "pumpkin",
                name: "Pumpkin",
                amount: 768,
                icon: "🎃",
            },
            {
                id: "egg",
                name: "Egg",
                amount: 384,
                icon: "🥚",
            },
            {
                id: "dark-oak-logs",
                name: "Dark Oak Logs",
                amount: 768,
                icon: "🪵",
            },
            {
                id: "salmon",
                name: "Salmon",
                amount: 192,
                icon: "🐟",
            },
            {
                id: "polished-andesite",
                name: "Polished Andesite",
                amount: 1536,
                icon: "🧱",
            },
            {
                id: "magma-cream",
                name: "Magma Cream",
                amount: 128,
                icon: "🔥",
            },
        ],
    },

    buildings: getSettlementBuildings("stad"),

    requiredCurrentBuildings: ["Kyrka"],

    footerText:
        "Stad låser inte upp någon ny unik byggnad. Kyrka måste redan vara färdigställd innan settlementet kan uppgraderas från Köping till Stad.",
};