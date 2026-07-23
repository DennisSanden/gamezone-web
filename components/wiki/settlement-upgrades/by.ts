import { getSettlementBuildings } from "../settlement-buildings";
import type { SettlementUpgrade } from "./types";

export const byTillBosattning: SettlementUpgrade = {
    currentLevel: {
        name: "By",
        level: 3,
    },

    nextLevel: {
        name: "Bosättning",
        level: 4,
        href: "/wiki/settlements/bosattning",
    },

    changes: [
        {
            label: "Territorieradie",
            from: "60 block",
            to: "80 block",
        },
        {
            label: "Handelsrabatt",
            from: "10 %",
            to: "15 %",
        },
        {
            label: "Veckounderhåll",
            from: "1 000 Coins",
            to: "2 000 Coins",
        },
    ],

    upgradeCost: {
        coins: "20 000 Coins",

        materials: [
            {
                id: "copper-ore",
                name: "Copper Ore",
                amount: 256,
                icon: "⛏️",
            },
            {
                id: "potatoes",
                name: "Potatoes",
                amount: 256,
                icon: "🥔",
            },
            {
                id: "white-wool",
                name: "White Wool",
                amount: 128,
                icon: "🐑",
            },
            {
                id: "spruce-logs",
                name: "Spruce Logs",
                amount: 256,
                icon: "🪵",
            },
            {
                id: "tropical-fish",
                name: "Tropical Fish",
                amount: 64,
                icon: "🐠",
            },
            {
                id: "deepslate-bricks",
                name: "Deepslate Bricks",
                amount: 512,
                icon: "🧱",
            },
        ],
    },

    buildings: getSettlementBuildings("bosattning"),

    requiredCurrentBuildings: ["Handelscentrum"],

    footerText:
        "Kostnaden ovan gäller settlementuppgraderingen till Bosättning. Bank låses upp i samband med den första uppgraderingen till Bosättning och har egna byggnadskrav.",
};