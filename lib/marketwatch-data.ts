export type DemandLevel = "critical" | "high" | "rising" | "stable" | "surplus";

export type MarketItem = {
    id: string;
    minecraftId: string;
    name: string;
    category: string;
    level: DemandLevel;
    demandScore: number;
    projectedNeed: number;
    shortage: number;
    coverageRatio: number;
    contributingSettlements: number;
    activeListings: number;
    stock: number;
    soldUnits: number;
    transactionCount: number;
    averageUnitPrice: number;
    minimumUnitPrice: number;
    maximumUnitPrice: number;
    latestUnitPrice: number;
    calculatedAt: string | null;
    lastSaleAt: string | null;
    // Compatibility for older comparison components. Live MarketWatch does not fabricate these values.
    buyPrice: number;
    sellPrice: number;
    change24h: number;
    volume24h: number;
    trend: "up" | "down" | "stable";
    history: number[];
    offers: ShopOffer[];
};

export type ShopOffer = { shopId: string; buyPrice: number; stock: number };
export type MarketShop = { id: string; name: string; settlement: string; owner: string; description: string; rating: number; sales24h: number; open: boolean };
export const marketShops: MarketShop[] = [];
export const marketItems: MarketItem[] = [];
export const marketCategories = ["Alla"];
export const getShopItems = (_shopId: string): Array<{ item: MarketItem; offer: ShopOffer }> => [];
export const getShop = (_shopId: string): MarketShop | undefined => undefined;

export type MarketWatchPayload = {
    status?: string;
    result?: unknown;
    errors?: Array<{ code?: string; message?: string }>;
};

const CATEGORY_BY_MATERIAL: Array<[RegExp, string]> = [
    [/(LOG|STEM|WOOD|PLANK|SAPLING|LEAVES)$/, "Skogsbruk"],
    [/(WHEAT|CARROT|POTATO|BEETROOT|PUMPKIN|MELON|BERRIES|SUGAR_CANE|BAMBOO|CACTUS|KELP|COCOA|BREAD)/, "Jordbruk"],
    [/(BEEF|PORKCHOP|CHICKEN|MUTTON|RABBIT|LEATHER|WOOL|FEATHER|EGG|MILK|HONEY)/, "Boskap"],
    [/(COD|SALMON|PUFFERFISH|TROPICAL_FISH|NAUTILUS|FISHING_ROD)/, "Fiske"],
    [/(ORE|COAL|IRON|COPPER|GOLD|DIAMOND|EMERALD|LAPIS|REDSTONE|ANCIENT_DEBRIS)/, "Gruvdrift"],
    [/(POTION|NETHER_WART|BLAZE|GHAST|MAGMA|SPIDER_EYE|PHANTOM_MEMBRANE)/, "Alkemi"],
];

const SWEDISH_NAMES: Record<string, string> = {
    IRON_INGOT: "Järntacka",
    GOLD_INGOT: "Guldtacka",
    DIAMOND: "Diamant",
    EMERALD: "Smaragd",
    COAL: "Kol",
    REDSTONE: "Redstone",
    LAPIS_LAZULI: "Lapis Lazuli",
    WHEAT: "Vete",
    CARROT: "Morot",
    POTATO: "Potatis",
    OAK_LOG: "Ekstock",
    SPRUCE_LOG: "Granstock",
    BIRCH_LOG: "Björkstock",
};

function numberValue(value: unknown): number {
    const parsed = typeof value === "number" ? value : Number(value ?? 0);
    return Number.isFinite(parsed) && parsed >= 0 ? parsed : 0;
}

function textValue(value: unknown): string {
    return typeof value === "string" ? value : "";
}

function materialName(itemDefinition: string): string {
    return itemDefinition.replace(/^MINECRAFT:/i, "").toUpperCase();
}

function displayName(material: string): string {
    if (SWEDISH_NAMES[material]) return SWEDISH_NAMES[material];
    return material.toLowerCase().split("_").map(part => part.charAt(0).toUpperCase() + part.slice(1)).join(" ");
}

function categoryFor(material: string): string {
    return CATEGORY_BY_MATERIAL.find(([pattern]) => pattern.test(material))?.[1] ?? "Byggmaterial";
}

function demandLevel(value: unknown): DemandLevel {
    const status = textValue(value).toUpperCase();
    if (status.includes("CRITICAL")) return "critical";
    if (status.includes("VERY_HIGH") || status === "HIGH") return "high";
    if (status.includes("RISING") || status.includes("INCREASING")) return "rising";
    if (status.includes("SURPLUS") || status.includes("SATURATED")) return "surplus";
    return "stable";
}

export function parseMarketWatch(payload: MarketWatchPayload): MarketItem[] {
    const result = Array.isArray(payload.result) ? payload.result : [];

    return result.map((entry, index) => {
        const row = entry && typeof entry === "object" ? entry as Record<string, unknown> : {};
        const material = materialName(textValue(row.itemDefinition) || `UNKNOWN_${index}`);
        return {
            id: material.toLowerCase().replaceAll("_", "-"),
            minecraftId: material.toLowerCase(),
            name: displayName(material),
            category: categoryFor(material),
            level: demandLevel(row.demandStatus),
            demandScore: numberValue(row.demandScore),
            projectedNeed: numberValue(row.projectedNeed),
            shortage: numberValue(row.estimatedShortage),
            coverageRatio: numberValue(row.coverageRatio),
            contributingSettlements: numberValue(row.contributingSettlements),
            activeListings: numberValue(row.activeListings),
            stock: numberValue(row.availableUnits),
            soldUnits: numberValue(row.soldUnits),
            transactionCount: numberValue(row.transactionCount),
            averageUnitPrice: numberValue(row.averageUnitPrice),
            minimumUnitPrice: numberValue(row.minimumUnitPrice),
            maximumUnitPrice: numberValue(row.maximumUnitPrice),
            latestUnitPrice: numberValue(row.latestUnitPrice),
            calculatedAt: textValue(row.calculatedAt) || null,
            lastSaleAt: textValue(row.lastSaleAt) || null,
            buyPrice: numberValue(row.minimumUnitPrice),
            sellPrice: numberValue(row.averageUnitPrice),
            change24h: 0,
            volume24h: numberValue(row.soldUnits),
            trend: "stable",
            history: [],
            offers: [],
        };
    });
}
