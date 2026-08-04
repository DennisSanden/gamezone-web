import { getSettlementBuildings } from "../settlement-buildings";
import type { SettlementUpgrade } from "./types";

export const huvudstadTillGrevskap: SettlementUpgrade = {
    currentLevel: {
        name: "Huvudstad",
        level: 10,
    },

    nextLevel: {
        name: "Grevskap",
        level: 11,
        href: "/wiki/settlements/grevskap",
    },

    changes: [
        {
            label: "Territorieradie",
            from: "113 block",
            to: "125 block",
        },
    ],

    upgradeCost: {
        coins: "2 000 000 Coins",

        materials: [
            {
                id: "raw-gold",
                name: "Raw Gold",
                amount: 1024,
                icon: "🟨",
            },
            {
                id: "copper-ore",
                name: "Copper Ore",
                amount: 1024,
                icon: "🟧",
            },
            {
                id: "potato",
                name: "Potato",
                amount: 1024,
                icon: "🥔",
            },
            {
                id: "beetroot",
                name: "Beetroot",
                amount: 1024,
                icon: "🫜",
            },
            {
                id: "white-wool",
                name: "White Wool",
                amount: 512,
                icon: "⬜",
            },
            {
                id: "porkchop",
                name: "Porkchop",
                amount: 512,
                icon: "🥩",
            },
            {
                id: "spruce-log",
                name: "Spruce Log",
                amount: 1024,
                icon: "🪵",
            },
            {
                id: "jungle-log",
                name: "Jungle Log",
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
                id: "pufferfish",
                name: "Pufferfish",
                amount: 256,
                icon: "🐡",
            },
            {
                id: "glass",
                name: "Glass",
                amount: 3072,
                icon: "🪟",
            },
            {
                id: "phantom-membrane",
                name: "Phantom Membrane",
                amount: 384,
                icon: "👻",
            }
        ],
    },

    buildings: getSettlementBuildings("grevskap"),

    requiredCurrentBuildings: ["Monument"],

    footerText:
        "Grevskap låser inte upp någon ny unik byggnad. Monument måste redan vara permanent upplåst innan settlementet kan uppgraderas från Huvudstad till Grevskap.",
};