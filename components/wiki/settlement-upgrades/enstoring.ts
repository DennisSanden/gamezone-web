import { getSettlementBuildings } from "../settlement-buildings";
import type { SettlementUpgrade } from "./types";

export const enstoringTillLager: SettlementUpgrade = {
    currentLevel: {
        name: "Enstöring",
        level: 1,
    },

    nextLevel: {
        name: "Läger",
        level: 2,
        href: "/wiki/settlements/lager",
    },

    changes: [
        {
            label: "Territorieradie",
            from: "25 block",
            to: "40 block",
        },
    ],

    upgradeCost: {
        coins: "0 Coins",

        materials: [
            {
                id: "coal",
                name: "Coal",
                amount: 128,
                icon: "⬛",
            },
            {
                id: "wheat",
                name: "Wheat",
                amount: 128,
                icon: "🌾",
            },
            {
                id: "leather",
                name: "Leather",
                amount: 64,
                icon: "🟫",
            },
            {
                id: "oak-logs",
                name: "Oak Logs",
                amount: 128,
                icon: "🪵",
            },
            {
                id: "cod",
                name: "Cod",
                amount: 32,
                icon: "🐟",
            },
            {
                id: "stone-bricks",
                name: "Stone Bricks",
                amount: 256,
                icon: "🧱",
            },
        ],
    },

    buildings: getSettlementBuildings("lager"),

    requiredCurrentBuildings: [],

    footerText:
        "Alla Coins och material för settlementuppgraderingen måste finnas tillgängliga samtidigt. Om något krav saknas genomförs ingen del av uppgraderingen.",
};