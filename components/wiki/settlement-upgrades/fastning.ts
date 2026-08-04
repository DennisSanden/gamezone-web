import { getSettlementBuildings } from "../settlement-buildings";
import type { SettlementUpgrade } from "./types";

export const fastningTillHuvudstad: SettlementUpgrade = {
    currentLevel: {
        name: "Fästning",
        level: 9,
    },

    nextLevel: {
        name: "Huvudstad",
        level: 10,
        href: "/wiki/settlements/huvudstad",
    },

    changes: [
        {
            label: "Territorieradie",
            from: "100 block",
            to: "113 block",
        },
    ],

    upgradeCost: {
        coins: "1 000 000 Coins",

        materials: [
            {
                id: "diamond",
                name: "Diamond",
                amount: 300,
                icon: "💎",
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
                id: "carrot",
                name: "Carrot",
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
                id: "oak-log",
                name: "Oak Log",
                amount: 768,
                icon: "🪵",
            },
            {
                id: "birch-log",
                name: "Birch Log",
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
            }
        ],
    },

    buildings: getSettlementBuildings("huvudstad"),

    requiredCurrentBuildings: [],

    footerText:
        "Kostnaden ovan gäller settlementuppgraderingen till Huvudstad. Monument låses upp på nivå 10 som ett separat byggprojekt med en kostnad på 400 000 Coins.",
};