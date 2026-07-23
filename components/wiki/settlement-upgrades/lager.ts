import { getSettlementBuildings } from "../settlement-buildings";
import type { SettlementUpgrade } from "./types";

export const lagerTillBy: SettlementUpgrade = {
    currentLevel: {
        name: "Läger",
        level: 2,
    },

    nextLevel: {
        name: "By",
        level: 3,
        href: "/wiki/settlements/by",
    },

    changes: [
        {
            label: "Territorieradie",
            from: "40 block",
            to: "60 block",
        },
        {
            label: "Handelsrabatt",
            from: "5 %",
            to: "10 %",
        },
        {
            label: "Veckounderhåll",
            from: "500 Coins",
            to: "1 000 Coins",
        },
    ],

    upgradeCost: {
        coins: "10 000 Coins",

        materials: [
            {
                id: "iron-ore",
                name: "Iron Ore",
                amount: 192,
                icon: "⛏️",
            },
            {
                id: "carrots",
                name: "Carrots",
                amount: 192,
                icon: "🥕",
            },
            {
                id: "beef",
                name: "Beef",
                amount: 96,
                icon: "🥩",
            },
            {
                id: "birch-logs",
                name: "Birch Logs",
                amount: 192,
                icon: "🪵",
            },
            {
                id: "salmon",
                name: "Salmon",
                amount: 48,
                icon: "🐟",
            },
            {
                id: "bricks",
                name: "Bricks",
                amount: 384,
                icon: "🧱",
            },
        ],
    },

    buildings: getSettlementBuildings("by"),

    requiredCurrentBuildings: [
        "Gruva",
        "Lada",
        "Ladugård",
        "Fiskebrygga",
        "Sågverk",
        "Stenhuggeri",
    ],

    footerText:
        "Kostnaden ovan gäller settlementuppgraderingen till By. Handelscentrum har en separat kostnad och låses upp som ett eget byggprojekt.",
};