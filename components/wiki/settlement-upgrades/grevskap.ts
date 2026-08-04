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
            from: "125 block",
            to: "135 block",
        },
    ],

    upgradeCost: {
        coins: "3 000 000 Coins",

        materials: [
            {
                id: "emerald",
                name: "Emerald",
                amount: 1536,
                icon: "💚",
            },
            {
                id: "redstone",
                name: "Redstone",
                amount: 1024,
                icon: "🔴",
            },
            {
                id: "pumpkin",
                name: "Pumpkin",
                amount: 1536,
                icon: "🎃",
            },
            {
                id: "sugar-cane",
                name: "Sugar Cane",
                amount: 1024,
                icon: "🌿",
            },
            {
                id: "chicken",
                name: "Chicken",
                amount: 768,
                icon: "🍗",
            },
            {
                id: "egg",
                name: "Egg",
                amount: 768,
                icon: "🥚",
            },
            {
                id: "acacia-log",
                name: "Acacia Log",
                amount: 1536,
                icon: "🪵",
            },
            {
                id: "dark-oak-log",
                name: "Dark Oak Log",
                amount: 1024,
                icon: "🪵",
            },
            {
                id: "cod",
                name: "Cod",
                amount: 384,
                icon: "🐟",
            },
            {
                id: "salmon",
                name: "Salmon",
                amount: 384,
                icon: "🐟",
            },
            {
                id: "bricks",
                name: "Bricks",
                amount: 4096,
                icon: "🧱",
            },
            {
                id: "blaze-rod",
                name: "Blaze Rod",
                amount: 512,
                icon: "🔥",
            }
        ],
    },

    buildings: getSettlementBuildings("hertigdome"),

    requiredCurrentBuildings: [],

    footerText:
        "Kostnaden ovan gäller settlementuppgraderingen till Hertigdöme. Grevskap har inget byggnadskrav för progression. Slott låses upp på nivå 12 som ett separat byggprojekt med en kostnad på 1 000 000 Coins.",
};