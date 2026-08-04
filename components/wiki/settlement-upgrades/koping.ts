import { getSettlementBuildings } from "../settlement-buildings";
import type { SettlementUpgrade } from "./types";

export const kopingTillStad: SettlementUpgrade = {
    currentLevel: {
        name: "Köping",
        level: 6,
    },

    nextLevel: {
        name: "Stad",
        level: 7,
        href: "/wiki/settlements/stad",
    },

    changes: [
        {
            label: "Territorieradie",
            from: "63 block",
            to: "75 block",
        },
    ],

    upgradeCost: {
        coins: "200 000 Coins",

        materials: [
            {
                id: "redstone",
                name: "Redstone",
                amount: 512,
                icon: "🔴",
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
                id: "acacia-log",
                name: "Acacia Log",
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
            }
        ],
    },

    buildings: getSettlementBuildings("stad"),

    requiredCurrentBuildings: ["Kyrka"],

    footerText:
        "Stad låser inte upp någon ny unik byggnad. Kyrka måste redan vara färdigställd innan settlementet kan uppgraderas från Köping till Stad.",
};