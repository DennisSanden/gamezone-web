import { getSettlementBuildings } from "../settlement-buildings";
import type { SettlementUpgrade } from "./types";

export const samhalleTillKoping: SettlementUpgrade = {
    currentLevel: {
        name: "Samhälle",
        level: 5,
    },

    nextLevel: {
        name: "Köping",
        level: 6,
        href: "/wiki/settlements/koping",
    },

    changes: [
        {
            label: "Territorieradie",
            from: "100 block",
            to: "125 block",
        },
        {
            label: "Handelsrabatt",
            from: "20 %",
            to: "25 %",
        },
        {
            label: "Veckounderhåll",
            from: "4 000 Coins",
            to: "7 500 Coins",
        },
    ],

    upgradeCost: {
        coins: "100 000 Coins",

        materials: [
            {
                id: "redstone-ore",
                name: "Redstone Ore",
                amount: 512,
                icon: "⛏️",
            },
            {
                id: "bread",
                name: "Bread",
                amount: 512,
                icon: "🍞",
            },
            {
                id: "chicken",
                name: "Chicken",
                amount: 256,
                icon: "🍗",
            },
            {
                id: "acacia-logs",
                name: "Acacia Logs",
                amount: 512,
                icon: "🪵",
            },
            {
                id: "cod",
                name: "Cod",
                amount: 128,
                icon: "🐟",
            },
            {
                id: "mud-bricks",
                name: "Mud Bricks",
                amount: 1024,
                icon: "🧱",
            },
            {
                id: "blaze-powder",
                name: "Blaze Powder",
                amount: 96,
                icon: "🔥",
            },
        ],
    },

    buildings: getSettlementBuildings("koping"),

    requiredCurrentBuildings: [
        "Laboratorium, endast för settlement med inriktningen Alkemi",
    ],

    footerText:
        "Kostnaden ovan gäller settlementuppgraderingen till Köping. Kyrka låses upp i samband med den första uppgraderingen till Köping och har egna byggnadskrav.",
};