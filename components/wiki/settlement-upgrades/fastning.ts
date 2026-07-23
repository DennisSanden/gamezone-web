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
            from: "200 block",
            to: "225 block",
        },
        {
            label: "Handelsrabatt",
            from: "40 %",
            to: "45 %",
        },
        {
            label: "Veckounderhåll",
            from: "30 000 Coins",
            to: "45 000 Coins",
        },
    ],

    upgradeCost: {
        coins: "1 000 000 Coins",

        materials: [
            {
                id: "gold-ore",
                name: "Gold Ore",
                amount: 1024,
                icon: "⛏️",
            },
            {
                id: "copper-ore",
                name: "Copper Ore",
                amount: 1024,
                icon: "⛏️",
            },
            {
                id: "potatoes",
                name: "Potatoes",
                amount: 1024,
                icon: "🥔",
            },
            {
                id: "beetroot",
                name: "Beetroot",
                amount: 1024,
                icon: "🌱",
            },
            {
                id: "white-wool",
                name: "White Wool",
                amount: 512,
                icon: "🐑",
            },
            {
                id: "porkchop",
                name: "Porkchop",
                amount: 512,
                icon: "🥩",
            },
            {
                id: "spruce-logs",
                name: "Spruce Logs",
                amount: 1024,
                icon: "🪵",
            },
            {
                id: "jungle-logs",
                name: "Jungle Logs",
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
            },
        ],
    },

    buildings: getSettlementBuildings("huvudstad"),

    requiredCurrentBuildings: [],

    footerText:
        "Kostnaden ovan gäller settlementuppgraderingen till Huvudstad. Monument låses upp på nivå 10 som ett separat byggprojekt med en kostnad på 400 000 Coins och egna materialkrav.",
};