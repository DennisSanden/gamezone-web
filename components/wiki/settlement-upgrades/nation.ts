import { getSettlementBuildings } from "../settlement-buildings";
import type { SettlementUpgrade } from "./types";

export const nationTillKungadome: SettlementUpgrade = {
    currentLevel: {
        name: "Nation",
        level: 13,
    },

    nextLevel: {
        name: "Kungadöme",
        level: 14,
        href: "/wiki/settlements/kungadome",
    },

    changes: [
        {
            label: "Territorieradie",
            from: "143 block",
            to: "148 block",
        },
    ],

    upgradeCost: {
        coins: "8 000 000 Coins",

        materials: [
            {
                id: "emerald",
                name: "Emerald",
                amount: 2560,
                icon: "💚",
            },
            {
                id: "raw-iron",
                name: "Raw Iron",
                amount: 1536,
                icon: "⛏️",
            },
            {
                id: "carrot",
                name: "Carrot",
                amount: 2560,
                icon: "🥕",
            },
            {
                id: "potato",
                name: "Potato",
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
                icon: "⬜",
            },
            {
                id: "pale-oak-log",
                name: "Pale Oak Log",
                amount: 2560,
                icon: "🪵",
            },
            {
                id: "oak-log",
                name: "Oak Log",
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
                icon: "🪨",
            },
            {
                id: "glistering-melon-slice",
                name: "Glistering Melon Slice",
                amount: 1024,
                icon: "🍈",
            }
        ],
    },

    buildings: getSettlementBuildings("kungadome"),

    requiredCurrentBuildings: ["Slott"],

    footerText:
        "Kungadöme låser inte upp någon ny unik byggnad. Slott måste redan vara permanent upplåst innan settlementet kan uppgraderas från Nation till Kungadöme.",
};