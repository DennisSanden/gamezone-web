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
            from: "270 block",
            to: "285 block",
        },
    ],

    upgradeCost: {
        coins: "6 000 000 Coins",

        materials: [
            {
                id: "emerald-ore",
                name: "Emerald Ore",
                amount: 2560,
                icon: "⛏️",
            },
            {
                id: "iron-ore",
                name: "Iron Ore",
                amount: 1536,
                icon: "⛏️",
            },
            {
                id: "carrots",
                name: "Carrots",
                amount: 2560,
                icon: "🥕",
            },
            {
                id: "potatoes",
                name: "Potatoes",
                amount: 1536,
                icon: "🥔",
            },
            {
                id: "beef",
                name: "Beef",
                amount: 1280,
                icon: "🥩",
            },
            {
                id: "white-wool",
                name: "White Wool",
                amount: 1280,
                icon: "🐑",
            },
            {
                id: "pale-oak-logs",
                name: "Pale Oak Logs",
                amount: 2560,
                icon: "🪵",
            },
            {
                id: "oak-logs",
                name: "Oak Logs",
                amount: 1536,
                icon: "🪵",
            },
            {
                id: "cod",
                name: "Cod",
                amount: 640,
                icon: "🐟",
            },
            {
                id: "tropical-fish",
                name: "Tropical Fish",
                amount: 640,
                icon: "🐠",
            },
            {
                id: "polished-diorite",
                name: "Polished Diorite",
                amount: 6144,
                icon: "🧱",
            },
            {
                id: "glistering-melon-slice",
                name: "Glistering Melon Slice",
                amount: 1024,
                icon: "🍉",
            },
        ],
    },

    buildings: getSettlementBuildings("nation"),

    requiredCurrentBuildings: ["Slott"],

    footerText:
        "Nation låser inte upp någon ny unik byggnad. Slott måste redan vara permanent upplåst innan settlementet kan uppgraderas från Hertigdöme till Nation.",
};