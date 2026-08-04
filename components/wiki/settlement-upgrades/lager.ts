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
            from: "20 block",
            to: "30 block",
        },
    ],

    upgradeCost: {
        coins: "10 000 Coins",

        materials: [
            {
                id: "coal",
                name: "Coal",
                amount: 32,
                icon: "⬛",
            },
            {
                id: "wheat",
                name: "Wheat",
                amount: 32,
                icon: "🌾",
            },
            {
                id: "leather",
                name: "Leather",
                amount: 16,
                icon: "🟫",
            },
            {
                id: "oak-log",
                name: "Oak Log",
                amount: 64,
                icon: "🪵",
            },
            {
                id: "cod",
                name: "Cod",
                amount: 16,
                icon: "🐟",
            },
            {
                id: "stone-bricks",
                name: "Stone Bricks",
                amount: 128,
                icon: "🧱",
            }
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