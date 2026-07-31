export type MarketTrend = "up" | "down" | "stable";
export type DemandLevel = "critical" | "high" | "rising" | "stable" | "surplus";

export type ShopOffer = {
    shopId: string;
    buyPrice: number;
    stock: number;
};

export type MarketItem = {
    id: string;
    minecraftId: string;
    name: string;
    category: string;
    icon: string;
    buyPrice: number;
    sellPrice: number;
    change24h: number;
    demand: number;
    stock: number;
    shortage: number;
    volume24h: number;
    trend: MarketTrend;
    level: DemandLevel;
    history: number[];
    offers: ShopOffer[];
};

export type MarketShop = {
    id: string;
    name: string;
    settlement: string;
    owner: string;
    description: string;
    rating: number;
    sales24h: number;
    open: boolean;
};

export const marketShops: MarketShop[] = [
    { id: "northstar-trading", name: "Northstar Trading", settlement: "SverigesRike", owner: "gruggisarna", description: "Råvaror, trä och stora volymer till stabila priser.", rating: 4.9, sales24h: 18420, open: true },
    { id: "finest-market", name: "Finest Market", settlement: "The Capitol", owner: "FinestFiskar", description: "Premiumvaror, sällsynta drops och snabba leveranser.", rating: 4.8, sales24h: 16110, open: true },
    { id: "iron-vault", name: "Iron Vault", settlement: "Miletopia", owner: "Miletos", description: "Gruvdrift, metaller och byggmaterial i mängd.", rating: 4.7, sales24h: 13770, open: true },
    { id: "green-barrel", name: "The Green Barrel", settlement: "Tortuga Tía", owner: "Tortuga Tía", description: "Mat, jordbruk, fiske och vardagsvaror.", rating: 4.6, sales24h: 10320, open: true },
    { id: "redstone-labs", name: "Redstone Labs", settlement: "wapAB", owner: "wapAB", description: "Redstone, alkemi och tekniska resurser.", rating: 4.8, sales24h: 9720, open: true },
    { id: "black-anvil", name: "Black Anvil", settlement: "Mansson", owner: "Mansson__", description: "Netherresurser, mob drops och exklusiva fynd.", rating: 4.5, sales24h: 8360, open: false },
];

const seed = (id: string) => id.split("").reduce((sum, char) => sum + char.charCodeAt(0), 0);

const catalog: Array<[string, string, string, string, number]> = [
    ["iron-ingot", "Iron Ingot", "Gruvdrift", "Fe", 14], ["gold-ingot", "Gold Ingot", "Gruvdrift", "Au", 28],
    ["diamond", "Diamond", "Gruvdrift", "◆", 125], ["emerald", "Emerald", "Gruvdrift", "◇", 94],
    ["coal", "Coal", "Gruvdrift", "C", 5], ["copper-ingot", "Copper Ingot", "Gruvdrift", "Cu", 8],
    ["redstone", "Redstone Dust", "Gruvdrift", "R", 6], ["lapis", "Lapis Lazuli", "Gruvdrift", "L", 7],
    ["quartz", "Nether Quartz", "Gruvdrift", "Q", 11], ["netherite-scrap", "Netherite Scrap", "Gruvdrift", "N", 310],
    ["oak-log", "Oak Log", "Skogsbruk", "O", 4], ["spruce-log", "Spruce Log", "Skogsbruk", "S", 5],
    ["birch-log", "Birch Log", "Skogsbruk", "B", 4], ["jungle-log", "Jungle Log", "Skogsbruk", "J", 6],
    ["acacia-log", "Acacia Log", "Skogsbruk", "A", 5], ["dark-oak-log", "Dark Oak Log", "Skogsbruk", "D", 7],
    ["mangrove-log", "Mangrove Log", "Skogsbruk", "M", 8], ["cherry-log", "Cherry Log", "Skogsbruk", "Ch", 9],
    ["wheat", "Wheat", "Jordbruk", "W", 3], ["carrot", "Carrot", "Jordbruk", "Ca", 3],
    ["potato", "Potato", "Jordbruk", "P", 3], ["beetroot", "Beetroot", "Jordbruk", "Be", 4],
    ["sugar-cane", "Sugar Cane", "Jordbruk", "Su", 4], ["pumpkin", "Pumpkin", "Jordbruk", "Pu", 8],
    ["melon", "Melon", "Jordbruk", "Me", 7], ["cocoa-beans", "Cocoa Beans", "Jordbruk", "Co", 6],
    ["leather", "Leather", "Boskap", "Le", 12], ["beef", "Raw Beef", "Boskap", "Bf", 7],
    ["porkchop", "Raw Porkchop", "Boskap", "Pk", 7], ["chicken", "Raw Chicken", "Boskap", "Ck", 6],
    ["mutton", "Raw Mutton", "Boskap", "Mu", 6], ["wool", "White Wool", "Boskap", "Wo", 5],
    ["egg", "Egg", "Boskap", "Eg", 3], ["feather", "Feather", "Boskap", "F", 4],
    ["cod", "Raw Cod", "Fiske", "Cd", 5], ["salmon", "Raw Salmon", "Fiske", "Sa", 7],
    ["pufferfish", "Pufferfish", "Fiske", "Pf", 11], ["tropical-fish", "Tropical Fish", "Fiske", "Tf", 13],
    ["ink-sac", "Ink Sac", "Fiske", "I", 6], ["prismarine-shard", "Prismarine Shard", "Fiske", "Pr", 18],
    ["stone", "Stone", "Byggmaterial", "St", 2], ["cobblestone", "Cobblestone", "Byggmaterial", "Cb", 1],
    ["sand", "Sand", "Byggmaterial", "Sa", 3], ["gravel", "Gravel", "Byggmaterial", "Gr", 3],
    ["clay-ball", "Clay Ball", "Byggmaterial", "Cl", 4], ["brick", "Brick", "Byggmaterial", "Br", 6],
    ["glass", "Glass", "Byggmaterial", "Gl", 5], ["obsidian", "Obsidian", "Byggmaterial", "Ob", 22],
    ["gunpowder", "Gunpowder", "Produktion", "Gp", 18], ["string", "String", "Produktion", "Str", 6],
    ["slime-ball", "Slime Ball", "Produktion", "Sl", 24], ["bone", "Bone", "Produktion", "Bo", 5],
    ["rotten-flesh", "Rotten Flesh", "Produktion", "Rf", 2], ["blaze-rod", "Blaze Rod", "Produktion", "Bl", 42],
    ["ender-pearl", "Ender Pearl", "Produktion", "Ep", 35], ["ghast-tear", "Ghast Tear", "Produktion", "Gt", 88],
    ["spider-eye", "Spider Eye", "Alkemi", "Se", 9], ["glowstone-dust", "Glowstone Dust", "Alkemi", "Gd", 12],
    ["nether-wart", "Nether Wart", "Alkemi", "Nw", 14], ["magma-cream", "Magma Cream", "Alkemi", "Mc", 28],
    ["rabbit-foot", "Rabbit's Foot", "Alkemi", "Rb", 52], ["phantom-membrane", "Phantom Membrane", "Alkemi", "Pm", 64],
];

const minecraftIdFor = (id: string) => ({ beef: "beef", chicken: "chicken", porkchop: "porkchop", mutton: "mutton", wool: "white_wool", cod: "cod", salmon: "salmon", redstone: "redstone", lapis: "lapis_lazuli", quartz: "quartz" } as Record<string, string>)[id] ?? id.replaceAll("-", "_");

export const marketItems: MarketItem[] = catalog.map(([id, name, category, icon, base], index) => {
    const value = seed(id);
    const demand = 90 + ((value * 17 + index * 41) % 720);
    const stock = 35 + ((value * 11 + index * 29) % 650);
    const shortage = Math.max(0, demand - stock);
    const ratio = shortage / Math.max(1, demand);
    const level: DemandLevel = ratio > 0.6 ? "critical" : ratio > 0.35 ? "high" : ratio > 0.12 ? "rising" : stock > demand * 1.35 ? "surplus" : "stable";
    const change24h = Number((((value % 19) - 8) * 0.9 + (ratio * 5)).toFixed(1));
    const trend: MarketTrend = change24h > 1.2 ? "up" : change24h < -1.2 ? "down" : "stable";
    const sellPrice = Math.max(1, Math.round(base * (1 + ratio * 0.28)));
    const buyPrice = Math.max(sellPrice + 1, Math.round(sellPrice * 1.16));
    const history = Array.from({ length: 12 }, (_, point) => Math.max(1, Math.round(sellPrice - change24h * 0.45 + Math.sin((point + value) / 2.2) * Math.max(1, base * 0.08) + point * change24h * 0.08)));
    const offerCount = 2 + (value % 4);
    const offers = marketShops.slice(0, offerCount).map((shop, offerIndex) => ({
        shopId: shop.id,
        buyPrice: Math.max(1, Math.round(buyPrice * (0.88 + ((value + offerIndex * 7) % 19) / 100))),
        stock: 8 + ((value * (offerIndex + 3) + index * 11) % 620),
    })).sort((a, b) => a.buyPrice - b.buyPrice);

    return { id, minecraftId: minecraftIdFor(id), name, category, icon, buyPrice: offers[0]?.buyPrice ?? buyPrice, sellPrice, change24h, demand, stock, shortage, volume24h: 20 + ((value * 37 + index * 13) % 1600), trend, level, history, offers };
});

export const marketCategories = ["Alla", ...Array.from(new Set(marketItems.map((item) => item.category)))];
export const getShop = (shopId: string) => marketShops.find((shop) => shop.id === shopId);
export const getShopItems = (shopId: string) => marketItems.flatMap((item) => item.offers.filter((offer) => offer.shopId === shopId).map((offer) => ({ item, offer })));
