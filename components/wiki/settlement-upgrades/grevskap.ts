import { getSettlementBuildings } from "../settlement-buildings";
import type { SettlementUpgrade } from "./types";

export const grevskapTillHertigdome: SettlementUpgrade = {
    currentLevel: {
        name: "Grevskap",
        level: 11,
    },

    nextLevel: {
        name: "Hertigdöme",
        level: 12,
        href: "/wiki/settlements/hertigdome",
    },

    changes: [
        {
            label: "Territorieradie",
            from: "250 block",
            to: "270 block",
        },
        {
            label: "Handelsrabatt",
            from: "50 %",
            to: "55 %",
        },
        {
            label: "Veckounderhåll",
            from: "65 000 Coins",
            to: "90 000 Coins",
        },
    ],

    upgradeCost: {
        coins: "3 000 000 Coins",

        materials: [
            {
                id: "diamond-ore",
                name: "Diamond Ore",
                amount: 2048,
                icon: "⛏️",
            },
            {
                id: "gold-ore",
                name: "Gold Ore",
                amount: 1024,
                icon: "⛏️",
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
                id: "mangrove-logs",
                name: "Mangrove Logs",
                amount: 2048,
                icon: "🪵",
            },
            {
                id: "cherry-logs",
                name: "Cherry Logs",
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
                icon: "👻",
            },
        ],
    },

    buildings: getSettlementBuildings("hertigdome"),

    requiredCurrentBuildings: [],

    footerText:
        "Kostnaden ovan gäller settlementuppgraderingen till Hertigdöme. Grevskap har inget byggnadskrav för progression. Slott låses upp på nivå 12 som ett separat byggprojekt med en kostnad på 1 000 000 Coins och egna materialkrav.",
};