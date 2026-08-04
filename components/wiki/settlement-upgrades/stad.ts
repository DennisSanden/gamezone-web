import { getSettlementBuildings } from "../settlement-buildings";
import type { SettlementUpgrade } from "./types";

export const stadTillHandelsstad: SettlementUpgrade = {
    currentLevel: {
        name: "Stad",
        level: 7,
    },

    nextLevel: {
        name: "Handelsstad",
        level: 8,
        href: "/wiki/settlements/handelsstad",
    },

    changes: [
        {
            label: "Territorieradie",
            from: "75 block",
            to: "88 block",
        },
    ],

    upgradeCost: {
        coins: "300 000 Coins",

        materials: [
            {
                id: "lapis-lazuli",
                name: "Lapis Lazuli",
                amount: 768,
                icon: "🔵",
            },
            {
                id: "pumpkin",
                name: "Pumpkin",
                amount: 768,
                icon: "🎃",
            },
            {
                id: "egg",
                name: "Egg",
                amount: 384,
                icon: "🥚",
            },
            {
                id: "dark-oak-log",
                name: "Dark Oak Log",
                amount: 768,
                icon: "🪵",
            },
            {
                id: "salmon",
                name: "Salmon",
                amount: 192,
                icon: "🐟",
            },
            {
                id: "polished-andesite",
                name: "Polished Andesite",
                amount: 1536,
                icon: "🪨",
            },
            {
                id: "magma-cream",
                name: "Magma Cream",
                amount: 128,
                icon: "🟠",
            }
        ],
    },

    buildings: getSettlementBuildings("handelsstad"),

    requiredCurrentBuildings: ["Kyrka"],

    footerText:
        "Kostnaden ovan gäller settlementuppgraderingen till Handelsstad. Marknadsplats låses upp på nivå 8 som ett separat byggprojekt med en kostnad på 150 000 Coins.",
};