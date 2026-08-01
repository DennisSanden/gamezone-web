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

// Genererad från se.gamezone.engine.domain.production.resource.DefaultProductionResources
// (backend-repot). Varje rad: [id, visningsnamn, kategori, basvärde].
// Basvärdet är enbart en startmagnitud för prissimuleringen nedan (härledd från
// registrets coinReward) — det faktiska köp/säljpriset i UI:t bestäms fortfarande
// av den simulerade utbud/efterfråge-motorn, inte av basvärdet direkt.
const catalog: Array<[string, string, string, number]> = [
    // Gruvdrift (17)
    ["coal-ore", "Kolmalm", "Gruvdrift", 2], ["deepslate-coal-ore", "Deepslate Kolmalm", "Gruvdrift", 2],
    ["iron-ore", "Järnmalm", "Gruvdrift", 8], ["deepslate-iron-ore", "Deepslate Järnmalm", "Gruvdrift", 8],
    ["copper-ore", "Kopparmalm", "Gruvdrift", 3], ["deepslate-copper-ore", "Deepslate Kopparmalm", "Gruvdrift", 3],
    ["gold-ore", "Guldmalm", "Gruvdrift", 15], ["deepslate-gold-ore", "Deepslate Guldmalm", "Gruvdrift", 15],
    ["redstone-ore", "Redstonemalm", "Gruvdrift", 4], ["deepslate-redstone-ore", "Deepslate Redstonemalm", "Gruvdrift", 4],
    ["lapis-ore", "Lapis Lazuli-malm", "Gruvdrift", 5], ["deepslate-lapis-ore", "Deepslate Lapis Lazuli-malm", "Gruvdrift", 5],
    ["emerald-ore", "Smaragdmalm", "Gruvdrift", 45], ["deepslate-emerald-ore", "Deepslate Smaragdmalm", "Gruvdrift", 45],
    ["diamond-ore", "Diamantmalm", "Gruvdrift", 75], ["deepslate-diamond-ore", "Deepslate Diamantmalm", "Gruvdrift", 75],
    ["ancient-debris", "Ancient Debris", "Gruvdrift", 500],
    // Skogsbruk (11)
    ["oak-log", "Oak Log", "Skogsbruk", 3], ["spruce-log", "Spruce Log", "Skogsbruk", 3],
    ["birch-log", "Birch Log", "Skogsbruk", 3], ["jungle-log", "Jungle Log", "Skogsbruk", 3],
    ["acacia-log", "Acacia Log", "Skogsbruk", 3], ["dark-oak-log", "Dark Oak Log", "Skogsbruk", 3],
    ["mangrove-log", "Mangrove Log", "Skogsbruk", 4], ["cherry-log", "Cherry Log", "Skogsbruk", 4],
    ["pale-oak-log", "Pale Oak Log", "Skogsbruk", 4], ["crimson-stem", "Crimson Stem", "Skogsbruk", 5],
    ["warped-stem", "Warped Stem", "Skogsbruk", 5],
    // Jordbruk (16)
    ["wheat", "Vete", "Jordbruk", 2], ["beetroot", "Rödbeta", "Jordbruk", 2],
    ["carrot", "Morot", "Jordbruk", 2], ["potato", "Potatis", "Jordbruk", 2],
    ["melon-slice", "Melonskiva", "Jordbruk", 2], ["pumpkin", "Pumpa", "Jordbruk", 3],
    ["sweet-berries", "Söta bär", "Jordbruk", 2], ["glow-berries", "Lysbär", "Jordbruk", 3],
    ["cocoa-beans", "Kakaobönor", "Jordbruk", 3], ["sugar-cane", "Sockerrör", "Jordbruk", 2],
    ["bamboo", "Bambu", "Jordbruk", 2], ["cactus", "Kaktus", "Jordbruk", 2],
    ["kelp", "Kelp", "Jordbruk", 2], ["sea-pickle", "Sjögurka", "Jordbruk", 3],
    ["chorus-fruit", "Chorus Fruit", "Jordbruk", 5], ["bread", "Bröd", "Jordbruk", 4],
    // Boskap (20)
    ["beef", "Beef", "Boskap", 7], ["cooked-beef", "Cooked Beef", "Boskap", 7],
    ["leather", "Leather", "Boskap", 6], ["milk-bucket", "Milk Bucket", "Boskap", 1],
    ["porkchop", "Porkchop", "Boskap", 6], ["cooked-porkchop", "Cooked Porkchop", "Boskap", 6],
    ["chicken", "Chicken", "Boskap", 5], ["cooked-chicken", "Cooked Chicken", "Boskap", 5],
    ["feather", "Feather", "Boskap", 3], ["egg", "Egg", "Boskap", 3],
    ["white-wool", "White Wool", "Boskap", 7], ["any-dyed-wool", "Any Dyed Wool", "Boskap", 7],
    ["mutton", "Mutton", "Boskap", 5], ["cooked-mutton", "Cooked Mutton", "Boskap", 6],
    ["rabbit", "Rabbit", "Boskap", 8], ["cooked-rabbit", "Cooked Rabbit", "Boskap", 9],
    ["rabbit-hide", "Rabbit Hide", "Boskap", 4], ["rabbit-foot", "Rabbit Foot", "Boskap", 20],
    ["honey-bottle", "Honey Bottle", "Boskap", 12], ["honeycomb", "Honeycomb", "Boskap", 15],
    // Fiske (19)
    ["cod", "Cod", "Fiske", 10], ["salmon", "Salmon", "Fiske", 12],
    ["tropical-fish", "Tropical Fish", "Fiske", 30], ["pufferfish", "Pufferfish", "Fiske", 40],
    ["name-tag", "Name Tag", "Fiske", 120], ["nautilus-shell", "Nautilus Shell", "Fiske", 140],
    ["saddle", "Saddle", "Fiske", 160], ["fishing-rod", "Fishing Rod", "Fiske", 180],
    ["bow", "Bow", "Fiske", 200], ["enchanted-book", "Enchanted Book", "Fiske", 50],
    ["bowl", "Bowl", "Fiske", 1], ["leather-boots", "Leather Boots", "Fiske", 1],
    ["fishing-rod-broken", "Fishing Rod (Broken)", "Fiske", 1], ["tripwire-hook", "Tripwire Hook", "Fiske", 1],
    ["string", "String", "Fiske", 1], ["water-bottle", "Water Bottle", "Fiske", 1],
    ["bone", "Bone", "Fiske", 1], ["rotten-flesh", "Rotten Flesh", "Fiske", 1],
    ["ink-sac", "Ink Sac", "Fiske", 2],
    // Byggmaterial (275)
    ["crafted-saddle", "Crafted Saddle", "Byggmaterial", 160], ["stick", "Stick", "Byggmaterial", 1],
    ["oak-planks", "Oak Planks", "Byggmaterial", 1], ["spruce-planks", "Spruce Planks", "Byggmaterial", 1],
    ["birch-planks", "Birch Planks", "Byggmaterial", 1], ["jungle-planks", "Jungle Planks", "Byggmaterial", 1],
    ["acacia-planks", "Acacia Planks", "Byggmaterial", 1], ["dark-oak-planks", "Dark Oak Planks", "Byggmaterial", 1],
    ["mangrove-planks", "Mangrove Planks", "Byggmaterial", 1], ["cherry-planks", "Cherry Planks", "Byggmaterial", 2],
    ["bamboo-planks", "Bamboo Planks", "Byggmaterial", 1], ["crimson-planks", "Crimson Planks", "Byggmaterial", 2],
    ["warped-planks", "Warped Planks", "Byggmaterial", 2], ["pale-oak-planks", "Pale Oak Planks", "Byggmaterial", 2],
    ["oak-slab", "Oak Slab", "Byggmaterial", 1], ["spruce-slab", "Spruce Slab", "Byggmaterial", 1],
    ["birch-slab", "Birch Slab", "Byggmaterial", 1], ["jungle-slab", "Jungle Slab", "Byggmaterial", 1],
    ["acacia-slab", "Acacia Slab", "Byggmaterial", 1], ["dark-oak-slab", "Dark Oak Slab", "Byggmaterial", 1],
    ["mangrove-slab", "Mangrove Slab", "Byggmaterial", 1], ["cherry-slab", "Cherry Slab", "Byggmaterial", 2],
    ["bamboo-slab", "Bamboo Slab", "Byggmaterial", 1], ["crimson-slab", "Crimson Slab", "Byggmaterial", 2],
    ["warped-slab", "Warped Slab", "Byggmaterial", 2], ["pale-oak-slab", "Pale Oak Slab", "Byggmaterial", 2],
    ["oak-stairs", "Oak Stairs", "Byggmaterial", 3], ["spruce-stairs", "Spruce Stairs", "Byggmaterial", 3],
    ["birch-stairs", "Birch Stairs", "Byggmaterial", 3], ["jungle-stairs", "Jungle Stairs", "Byggmaterial", 3],
    ["acacia-stairs", "Acacia Stairs", "Byggmaterial", 3], ["dark-oak-stairs", "Dark Oak Stairs", "Byggmaterial", 3],
    ["mangrove-stairs", "Mangrove Stairs", "Byggmaterial", 3], ["cherry-stairs", "Cherry Stairs", "Byggmaterial", 4],
    ["bamboo-stairs", "Bamboo Stairs", "Byggmaterial", 3], ["crimson-stairs", "Crimson Stairs", "Byggmaterial", 4],
    ["warped-stairs", "Warped Stairs", "Byggmaterial", 4], ["pale-oak-stairs", "Pale Oak Stairs", "Byggmaterial", 4],
    ["oak-fence", "Oak Fence", "Byggmaterial", 3], ["spruce-fence", "Spruce Fence", "Byggmaterial", 3],
    ["birch-fence", "Birch Fence", "Byggmaterial", 3], ["jungle-fence", "Jungle Fence", "Byggmaterial", 3],
    ["acacia-fence", "Acacia Fence", "Byggmaterial", 3], ["dark-oak-fence", "Dark Oak Fence", "Byggmaterial", 3],
    ["mangrove-fence", "Mangrove Fence", "Byggmaterial", 3], ["cherry-fence", "Cherry Fence", "Byggmaterial", 4],
    ["bamboo-fence", "Bamboo Fence", "Byggmaterial", 3], ["crimson-fence", "Crimson Fence", "Byggmaterial", 4],
    ["warped-fence", "Warped Fence", "Byggmaterial", 4], ["pale-oak-fence", "Pale Oak Fence", "Byggmaterial", 4],
    ["oak-fence-gate", "Oak Fence Gate", "Byggmaterial", 4], ["spruce-fence-gate", "Spruce Fence Gate", "Byggmaterial", 4],
    ["birch-fence-gate", "Birch Fence Gate", "Byggmaterial", 4], ["jungle-fence-gate", "Jungle Fence Gate", "Byggmaterial", 4],
    ["acacia-fence-gate", "Acacia Fence Gate", "Byggmaterial", 4], ["dark-oak-fence-gate", "Dark Oak Fence Gate", "Byggmaterial", 4],
    ["mangrove-fence-gate", "Mangrove Fence Gate", "Byggmaterial", 4], ["cherry-fence-gate", "Cherry Fence Gate", "Byggmaterial", 5],
    ["bamboo-fence-gate", "Bamboo Fence Gate", "Byggmaterial", 4], ["crimson-fence-gate", "Crimson Fence Gate", "Byggmaterial", 5],
    ["warped-fence-gate", "Warped Fence Gate", "Byggmaterial", 5], ["pale-oak-fence-gate", "Pale Oak Fence Gate", "Byggmaterial", 5],
    ["oak-door", "Oak Door", "Byggmaterial", 2], ["spruce-door", "Spruce Door", "Byggmaterial", 2],
    ["birch-door", "Birch Door", "Byggmaterial", 2], ["jungle-door", "Jungle Door", "Byggmaterial", 2],
    ["acacia-door", "Acacia Door", "Byggmaterial", 2], ["dark-oak-door", "Dark Oak Door", "Byggmaterial", 2],
    ["mangrove-door", "Mangrove Door", "Byggmaterial", 2], ["cherry-door", "Cherry Door", "Byggmaterial", 2],
    ["bamboo-door", "Bamboo Door", "Byggmaterial", 2], ["crimson-door", "Crimson Door", "Byggmaterial", 2],
    ["warped-door", "Warped Door", "Byggmaterial", 2], ["pale-oak-door", "Pale Oak Door", "Byggmaterial", 2],
    ["oak-trapdoor", "Oak Trapdoor", "Byggmaterial", 2], ["spruce-trapdoor", "Spruce Trapdoor", "Byggmaterial", 2],
    ["birch-trapdoor", "Birch Trapdoor", "Byggmaterial", 2], ["jungle-trapdoor", "Jungle Trapdoor", "Byggmaterial", 2],
    ["acacia-trapdoor", "Acacia Trapdoor", "Byggmaterial", 2], ["dark-oak-trapdoor", "Dark Oak Trapdoor", "Byggmaterial", 2],
    ["mangrove-trapdoor", "Mangrove Trapdoor", "Byggmaterial", 2], ["cherry-trapdoor", "Cherry Trapdoor", "Byggmaterial", 2],
    ["bamboo-trapdoor", "Bamboo Trapdoor", "Byggmaterial", 2], ["crimson-trapdoor", "Crimson Trapdoor", "Byggmaterial", 2],
    ["warped-trapdoor", "Warped Trapdoor", "Byggmaterial", 2], ["pale-oak-trapdoor", "Pale Oak Trapdoor", "Byggmaterial", 2],
    ["stone-bricks", "Stone Bricks", "Byggmaterial", 6], ["mossy-stone-bricks", "Mossy Stone Bricks", "Byggmaterial", 2],
    ["cracked-stone-bricks", "Cracked Stone Bricks", "Byggmaterial", 2], ["chiseled-stone-bricks", "Chiseled Stone Bricks", "Byggmaterial", 3],
    ["stone-brick-slab", "Stone Brick Slab", "Byggmaterial", 2], ["stone-brick-stairs", "Stone Brick Stairs", "Byggmaterial", 2],
    ["stone-brick-wall", "Stone Brick Wall", "Byggmaterial", 2], ["bricks", "Bricks", "Byggmaterial", 8],
    ["brick-slab", "Brick Slab", "Byggmaterial", 2], ["brick-stairs", "Brick Stairs", "Byggmaterial", 2],
    ["brick-wall", "Brick Wall", "Byggmaterial", 2], ["mud-bricks", "Mud Bricks", "Byggmaterial", 3],
    ["mud-brick-slab", "Mud Brick Slab", "Byggmaterial", 2], ["mud-brick-stairs", "Mud Brick Stairs", "Byggmaterial", 2],
    ["mud-brick-wall", "Mud Brick Wall", "Byggmaterial", 2], ["sandstone", "Sandstone", "Byggmaterial", 1],
    ["cut-sandstone", "Cut Sandstone", "Byggmaterial", 1], ["chiseled-sandstone", "Chiseled Sandstone", "Byggmaterial", 1],
    ["smooth-sandstone", "Smooth Sandstone", "Byggmaterial", 1], ["sandstone-slab", "Sandstone Slab", "Byggmaterial", 1],
    ["sandstone-stairs", "Sandstone Stairs", "Byggmaterial", 1], ["sandstone-wall", "Sandstone Wall", "Byggmaterial", 1],
    ["red-sandstone", "Red Sandstone", "Byggmaterial", 1], ["cut-red-sandstone", "Cut Red Sandstone", "Byggmaterial", 1],
    ["chiseled-red-sandstone", "Chiseled Red Sandstone", "Byggmaterial", 1], ["smooth-red-sandstone", "Smooth Red Sandstone", "Byggmaterial", 1],
    ["red-sandstone-slab", "Red Sandstone Slab", "Byggmaterial", 1], ["red-sandstone-stairs", "Red Sandstone Stairs", "Byggmaterial", 1],
    ["red-sandstone-wall", "Red Sandstone Wall", "Byggmaterial", 1], ["polished-granite", "Polished Granite", "Byggmaterial", 2],
    ["granite-slab", "Granite Slab", "Byggmaterial", 2], ["granite-stairs", "Granite Stairs", "Byggmaterial", 2],
    ["granite-wall", "Granite Wall", "Byggmaterial", 2], ["polished-diorite", "Polished Diorite", "Byggmaterial", 2],
    ["diorite-slab", "Diorite Slab", "Byggmaterial", 2], ["diorite-stairs", "Diorite Stairs", "Byggmaterial", 2],
    ["diorite-wall", "Diorite Wall", "Byggmaterial", 2], ["polished-andesite", "Polished Andesite", "Byggmaterial", 2],
    ["andesite-slab", "Andesite Slab", "Byggmaterial", 2], ["andesite-stairs", "Andesite Stairs", "Byggmaterial", 2],
    ["andesite-wall", "Andesite Wall", "Byggmaterial", 2], ["polished-tuff", "Polished Tuff", "Byggmaterial", 3],
    ["tuff-bricks", "Tuff Bricks", "Byggmaterial", 3], ["tuff-brick-slab", "Tuff Brick Slab", "Byggmaterial", 2],
    ["tuff-brick-stairs", "Tuff Brick Stairs", "Byggmaterial", 2], ["tuff-brick-wall", "Tuff Brick Wall", "Byggmaterial", 2],
    ["polished-blackstone", "Polished Blackstone", "Byggmaterial", 2], ["polished-blackstone-bricks", "Polished Blackstone Bricks", "Byggmaterial", 11],
    ["polished-blackstone-slab", "Polished Blackstone Slab", "Byggmaterial", 2], ["polished-blackstone-stairs", "Polished Blackstone Stairs", "Byggmaterial", 2],
    ["polished-blackstone-wall", "Polished Blackstone Wall", "Byggmaterial", 2], ["chiseled-polished-blackstone", "Chiseled Polished Blackstone", "Byggmaterial", 3],
    ["blackstone-wall", "Blackstone Wall", "Byggmaterial", 2], ["blackstone-stairs", "Blackstone Stairs", "Byggmaterial", 2],
    ["blackstone-slab", "Blackstone Slab", "Byggmaterial", 2], ["deepslate-bricks", "Deepslate Bricks", "Byggmaterial", 2],
    ["cracked-deepslate-bricks", "Cracked Deepslate Bricks", "Byggmaterial", 3], ["deepslate-tiles", "Deepslate Tiles", "Byggmaterial", 3],
    ["cracked-deepslate-tiles", "Cracked Deepslate Tiles", "Byggmaterial", 3], ["cobbled-deepslate-stairs", "Cobbled Deepslate Stairs", "Byggmaterial", 2],
    ["cobbled-deepslate-slab", "Cobbled Deepslate Slab", "Byggmaterial", 2], ["cobbled-deepslate-wall", "Cobbled Deepslate Wall", "Byggmaterial", 2],
    ["deepslate-brick-stairs", "Deepslate Brick Stairs", "Byggmaterial", 2], ["deepslate-brick-slab", "Deepslate Brick Slab", "Byggmaterial", 2],
    ["deepslate-brick-wall", "Deepslate Brick Wall", "Byggmaterial", 2], ["deepslate-tile-stairs", "Deepslate Tile Stairs", "Byggmaterial", 2],
    ["deepslate-tile-slab", "Deepslate Tile Slab", "Byggmaterial", 2], ["deepslate-tile-wall", "Deepslate Tile Wall", "Byggmaterial", 2],
    ["glass", "Glass", "Byggmaterial", 2], ["glass-pane", "Glass Pane", "Byggmaterial", 2],
    ["tinted-glass", "Tinted Glass", "Byggmaterial", 4], ["white-stained-glass", "White Stained Glass", "Byggmaterial", 2],
    ["orange-stained-glass", "Orange Stained Glass", "Byggmaterial", 2], ["magenta-stained-glass", "Magenta Stained Glass", "Byggmaterial", 2],
    ["light-blue-stained-glass", "Light Blue Stained Glass", "Byggmaterial", 2], ["yellow-stained-glass", "Yellow Stained Glass", "Byggmaterial", 2],
    ["lime-stained-glass", "Lime Stained Glass", "Byggmaterial", 2], ["pink-stained-glass", "Pink Stained Glass", "Byggmaterial", 2],
    ["gray-stained-glass", "Gray Stained Glass", "Byggmaterial", 2], ["light-gray-stained-glass", "Light Gray Stained Glass", "Byggmaterial", 2],
    ["cyan-stained-glass", "Cyan Stained Glass", "Byggmaterial", 2], ["purple-stained-glass", "Purple Stained Glass", "Byggmaterial", 2],
    ["blue-stained-glass", "Blue Stained Glass", "Byggmaterial", 2], ["brown-stained-glass", "Brown Stained Glass", "Byggmaterial", 2],
    ["green-stained-glass", "Green Stained Glass", "Byggmaterial", 2], ["red-stained-glass", "Red Stained Glass", "Byggmaterial", 2],
    ["black-stained-glass", "Black Stained Glass", "Byggmaterial", 2], ["white-concrete", "White Concrete", "Byggmaterial", 3],
    ["orange-concrete", "Orange Concrete", "Byggmaterial", 3], ["magenta-concrete", "Magenta Concrete", "Byggmaterial", 3],
    ["light-blue-concrete", "Light Blue Concrete", "Byggmaterial", 3], ["yellow-concrete", "Yellow Concrete", "Byggmaterial", 3],
    ["lime-concrete", "Lime Concrete", "Byggmaterial", 3], ["pink-concrete", "Pink Concrete", "Byggmaterial", 3],
    ["gray-concrete", "Gray Concrete", "Byggmaterial", 3], ["light-gray-concrete", "Light Gray Concrete", "Byggmaterial", 3],
    ["cyan-concrete", "Cyan Concrete", "Byggmaterial", 3], ["purple-concrete", "Purple Concrete", "Byggmaterial", 3],
    ["blue-concrete", "Blue Concrete", "Byggmaterial", 3], ["brown-concrete", "Brown Concrete", "Byggmaterial", 3],
    ["green-concrete", "Green Concrete", "Byggmaterial", 3], ["red-concrete", "Red Concrete", "Byggmaterial", 3],
    ["black-concrete", "Black Concrete", "Byggmaterial", 3], ["white-concrete-powder", "White Concrete Powder", "Byggmaterial", 2],
    ["orange-concrete-powder", "Orange Concrete Powder", "Byggmaterial", 2], ["magenta-concrete-powder", "Magenta Concrete Powder", "Byggmaterial", 2],
    ["light-blue-concrete-powder", "Light Blue Concrete Powder", "Byggmaterial", 2], ["yellow-concrete-powder", "Yellow Concrete Powder", "Byggmaterial", 2],
    ["lime-concrete-powder", "Lime Concrete Powder", "Byggmaterial", 2], ["pink-concrete-powder", "Pink Concrete Powder", "Byggmaterial", 2],
    ["gray-concrete-powder", "Gray Concrete Powder", "Byggmaterial", 2], ["light-gray-concrete-powder", "Light Gray Concrete Powder", "Byggmaterial", 2],
    ["cyan-concrete-powder", "Cyan Concrete Powder", "Byggmaterial", 2], ["purple-concrete-powder", "Purple Concrete Powder", "Byggmaterial", 2],
    ["blue-concrete-powder", "Blue Concrete Powder", "Byggmaterial", 2], ["brown-concrete-powder", "Brown Concrete Powder", "Byggmaterial", 2],
    ["green-concrete-powder", "Green Concrete Powder", "Byggmaterial", 2], ["red-concrete-powder", "Red Concrete Powder", "Byggmaterial", 2],
    ["black-concrete-powder", "Black Concrete Powder", "Byggmaterial", 2], ["white-terracotta", "White Terracotta", "Byggmaterial", 3],
    ["orange-terracotta", "Orange Terracotta", "Byggmaterial", 3], ["magenta-terracotta", "Magenta Terracotta", "Byggmaterial", 3],
    ["light-blue-terracotta", "Light Blue Terracotta", "Byggmaterial", 3], ["yellow-terracotta", "Yellow Terracotta", "Byggmaterial", 3],
    ["lime-terracotta", "Lime Terracotta", "Byggmaterial", 3], ["pink-terracotta", "Pink Terracotta", "Byggmaterial", 3],
    ["gray-terracotta", "Gray Terracotta", "Byggmaterial", 3], ["light-gray-terracotta", "Light Gray Terracotta", "Byggmaterial", 3],
    ["cyan-terracotta", "Cyan Terracotta", "Byggmaterial", 3], ["purple-terracotta", "Purple Terracotta", "Byggmaterial", 3],
    ["blue-terracotta", "Blue Terracotta", "Byggmaterial", 3], ["brown-terracotta", "Brown Terracotta", "Byggmaterial", 3],
    ["green-terracotta", "Green Terracotta", "Byggmaterial", 3], ["red-terracotta", "Red Terracotta", "Byggmaterial", 3],
    ["black-terracotta", "Black Terracotta", "Byggmaterial", 3], ["white-glazed-terracotta", "White Glazed Terracotta", "Byggmaterial", 3],
    ["orange-glazed-terracotta", "Orange Glazed Terracotta", "Byggmaterial", 3], ["magenta-glazed-terracotta", "Magenta Glazed Terracotta", "Byggmaterial", 3],
    ["light-blue-glazed-terracotta", "Light Blue Glazed Terracotta", "Byggmaterial", 3], ["yellow-glazed-terracotta", "Yellow Glazed Terracotta", "Byggmaterial", 3],
    ["lime-glazed-terracotta", "Lime Glazed Terracotta", "Byggmaterial", 3], ["pink-glazed-terracotta", "Pink Glazed Terracotta", "Byggmaterial", 3],
    ["gray-glazed-terracotta", "Gray Glazed Terracotta", "Byggmaterial", 3], ["light-gray-glazed-terracotta", "Light Gray Glazed Terracotta", "Byggmaterial", 3],
    ["cyan-glazed-terracotta", "Cyan Glazed Terracotta", "Byggmaterial", 3], ["purple-glazed-terracotta", "Purple Glazed Terracotta", "Byggmaterial", 3],
    ["blue-glazed-terracotta", "Blue Glazed Terracotta", "Byggmaterial", 3], ["brown-glazed-terracotta", "Brown Glazed Terracotta", "Byggmaterial", 3],
    ["green-glazed-terracotta", "Green Glazed Terracotta", "Byggmaterial", 3], ["red-glazed-terracotta", "Red Glazed Terracotta", "Byggmaterial", 3],
    ["black-glazed-terracotta", "Black Glazed Terracotta", "Byggmaterial", 3], ["iron-bars", "Iron Bars", "Byggmaterial", 2],
    ["chain", "Chain", "Byggmaterial", 3], ["lantern", "Lantern", "Byggmaterial", 3],
    ["soul-lantern", "Soul Lantern", "Byggmaterial", 16], ["campfire", "Campfire", "Byggmaterial", 2],
    ["soul-campfire", "Soul Campfire", "Byggmaterial", 5], ["anvil", "Anvil", "Byggmaterial", 5],
    ["chipped-anvil", "Chipped Anvil", "Byggmaterial", 5], ["damaged-anvil", "Damaged Anvil", "Byggmaterial", 4],
    ["cauldron", "Cauldron", "Byggmaterial", 4], ["hopper", "Hopper", "Byggmaterial", 5],
    ["minecart", "Minecart", "Byggmaterial", 5], ["rail", "Rail", "Byggmaterial", 1],
    ["powered-rail", "Powered Rail", "Byggmaterial", 2], ["detector-rail", "Detector Rail", "Byggmaterial", 2],
    ["activator-rail", "Activator Rail", "Byggmaterial", 2], ["lightning-rod", "Lightning Rod", "Byggmaterial", 4],
    ["iron-door", "Iron Door", "Byggmaterial", 3], ["iron-trapdoor", "Iron Trapdoor", "Byggmaterial", 3],
    ["heavy-weighted-pressure-plate", "Heavy Weighted Pressure Plate", "Byggmaterial", 3], ["light-weighted-pressure-plate", "Light Weighted Pressure Plate", "Byggmaterial", 3],
    ["block-of-copper", "Block of Copper", "Byggmaterial", 3], ["cut-copper", "Cut Copper", "Byggmaterial", 3],
    ["cut-copper-slab", "Cut Copper Slab", "Byggmaterial", 2], ["cut-copper-stairs", "Cut Copper Stairs", "Byggmaterial", 2],
    ["chiseled-copper", "Chiseled Copper", "Byggmaterial", 2], ["copper-grate", "Copper Grate", "Byggmaterial", 3],
    ["copper-bulb", "Copper Bulb", "Byggmaterial", 3], ["copper-door", "Copper Door", "Byggmaterial", 3],
    ["copper-trapdoor", "Copper Trapdoor", "Byggmaterial", 3], ["exposed-copper-block", "Exposed Copper Block", "Byggmaterial", 3],
    ["weathered-copper-block", "Weathered Copper Block", "Byggmaterial", 3], ["oxidized-copper-block", "Oxidized Copper Block", "Byggmaterial", 3],
    ["waxed-copper-block", "Waxed Copper Block", "Byggmaterial", 3], ["waxed-cut-copper", "Waxed Cut Copper", "Byggmaterial", 3],
    ["waxed-copper-door", "Waxed Copper Door", "Byggmaterial", 3], ["waxed-copper-trapdoor", "Waxed Copper Trapdoor", "Byggmaterial", 3],
    ["waxed-copper-bulb", "Waxed Copper Bulb", "Byggmaterial", 3],
    // Alkemi (82)
    ["nether-wart", "Nether Wart", "Alkemi", 20], ["blaze-powder", "Blaze Powder", "Alkemi", 40],
    ["blaze-rod", "Blaze Rod", "Alkemi", 50], ["ghast-tear", "Ghast Tear", "Alkemi", 120],
    ["phantom-membrane", "Phantom Membrane", "Alkemi", 80], ["magma-cream", "Magma Cream", "Alkemi", 60],
    ["glistering-melon-slice", "Glistering Melon Slice", "Alkemi", 48], ["golden-carrot", "Golden Carrot", "Alkemi", 70],
    ["spider-eye", "Spider Eye", "Alkemi", 18], ["fermented-spider-eye", "Fermented Spider Eye", "Alkemi", 46],
    ["turtle-helmet", "Turtle Helmet", "Alkemi", 220], ["awkward-potion", "Awkward Potion", "Alkemi", 40],
    ["thick-potion", "Thick Potion", "Alkemi", 16], ["mundane-potion", "Mundane Potion", "Alkemi", 16],
    ["potion-of-healing", "Potion of Healing", "Alkemi", 180], ["potion-of-strong-healing", "Potion of Strong Healing", "Alkemi", 240],
    ["potion-of-regeneration", "Potion of Regeneration", "Alkemi", 210], ["potion-of-strong-regeneration", "Potion of Strong Regeneration", "Alkemi", 280],
    ["potion-of-swiftness", "Potion of Swiftness", "Alkemi", 160], ["potion-of-strong-swiftness", "Potion of Strong Swiftness", "Alkemi", 220],
    ["potion-of-long-swiftness", "Potion of Long Swiftness", "Alkemi", 210], ["potion-of-strength", "Potion of Strength", "Alkemi", 220],
    ["potion-of-strong-strength", "Potion of Strong Strength", "Alkemi", 300], ["potion-of-long-strength", "Potion of Long Strength", "Alkemi", 280],
    ["potion-of-fire-resistance", "Potion of Fire Resistance", "Alkemi", 190], ["potion-of-long-fire-resistance", "Potion of Long Fire Resistance", "Alkemi", 250],
    ["potion-of-water-breathing", "Potion of Water Breathing", "Alkemi", 190], ["potion-of-long-water-breathing", "Potion of Long Water Breathing", "Alkemi", 250],
    ["potion-of-night-vision", "Potion of Night Vision", "Alkemi", 180], ["potion-of-long-night-vision", "Potion of Long Night Vision", "Alkemi", 240],
    ["potion-of-invisibility", "Potion of Invisibility", "Alkemi", 220], ["potion-of-long-invisibility", "Potion of Long Invisibility", "Alkemi", 280],
    ["potion-of-slow-falling", "Potion of Slow Falling", "Alkemi", 260], ["potion-of-long-slow-falling", "Potion of Long Slow Falling", "Alkemi", 320],
    ["potion-of-leaping", "Potion of Leaping", "Alkemi", 180], ["potion-of-strong-leaping", "Potion of Strong Leaping", "Alkemi", 240],
    ["potion-of-long-leaping", "Potion of Long Leaping", "Alkemi", 220], ["potion-of-luck", "Potion of Luck", "Alkemi", 350],
    ["potion-of-poison", "Potion of Poison", "Alkemi", 180], ["potion-of-strong-poison", "Potion of Strong Poison", "Alkemi", 240],
    ["potion-of-long-poison", "Potion of Long Poison", "Alkemi", 220], ["potion-of-weakness", "Potion of Weakness", "Alkemi", 170],
    ["potion-of-long-weakness", "Potion of Long Weakness", "Alkemi", 230], ["potion-of-slowness", "Potion of Slowness", "Alkemi", 180],
    ["potion-of-long-slowness", "Potion of Long Slowness", "Alkemi", 240], ["potion-of-strong-slowness", "Potion of Strong Slowness", "Alkemi", 260],
    ["potion-of-harming", "Potion of Harming", "Alkemi", 220], ["potion-of-strong-harming", "Potion of Strong Harming", "Alkemi", 300],
    ["splash-potion-of-healing", "Splash Potion of Healing", "Alkemi", 220], ["splash-potion-of-strong-healing", "Splash Potion of Strong Healing", "Alkemi", 290],
    ["splash-potion-of-regeneration", "Splash Potion of Regeneration", "Alkemi", 250], ["splash-potion-of-strong-regeneration", "Splash Potion of Strong Regeneration", "Alkemi", 320],
    ["splash-potion-of-swiftness", "Splash Potion of Swiftness", "Alkemi", 210], ["splash-potion-of-strong-swiftness", "Splash Potion of Strong Swiftness", "Alkemi", 280],
    ["splash-potion-of-strength", "Splash Potion of Strength", "Alkemi", 280], ["splash-potion-of-strong-strength", "Splash Potion of Strong Strength", "Alkemi", 360],
    ["splash-potion-of-fire-resistance", "Splash Potion of Fire Resistance", "Alkemi", 240], ["splash-potion-of-water-breathing", "Splash Potion of Water Breathing", "Alkemi", 240],
    ["splash-potion-of-night-vision", "Splash Potion of Night Vision", "Alkemi", 230], ["splash-potion-of-invisibility", "Splash Potion of Invisibility", "Alkemi", 280],
    ["splash-potion-of-slow-falling", "Splash Potion of Slow Falling", "Alkemi", 330], ["splash-potion-of-poison", "Splash Potion of Poison", "Alkemi", 240],
    ["splash-potion-of-strong-poison", "Splash Potion of Strong Poison", "Alkemi", 310], ["splash-potion-of-weakness", "Splash Potion of Weakness", "Alkemi", 220],
    ["splash-potion-of-slowness", "Splash Potion of Slowness", "Alkemi", 240], ["splash-potion-of-harming", "Splash Potion of Harming", "Alkemi", 300],
    ["splash-potion-of-strong-harming", "Splash Potion of Strong Harming", "Alkemi", 390], ["lingering-potion-of-healing", "Lingering Potion of Healing", "Alkemi", 320],
    ["lingering-potion-of-strong-healing", "Lingering Potion of Strong Healing", "Alkemi", 400], ["lingering-potion-of-regeneration", "Lingering Potion of Regeneration", "Alkemi", 360],
    ["lingering-potion-of-strong-regeneration", "Lingering Potion of Strong Regeneration", "Alkemi", 450], ["lingering-potion-of-swiftness", "Lingering Potion of Swiftness", "Alkemi", 310],
    ["lingering-potion-of-strength", "Lingering Potion of Strength", "Alkemi", 400], ["lingering-potion-of-fire-resistance", "Lingering Potion of Fire Resistance", "Alkemi", 340],
    ["lingering-potion-of-water-breathing", "Lingering Potion of Water Breathing", "Alkemi", 340], ["lingering-potion-of-night-vision", "Lingering Potion of Night Vision", "Alkemi", 330],
    ["lingering-potion-of-invisibility", "Lingering Potion of Invisibility", "Alkemi", 390], ["lingering-potion-of-slow-falling", "Lingering Potion of Slow Falling", "Alkemi", 460],
    ["lingering-potion-of-poison", "Lingering Potion of Poison", "Alkemi", 340], ["lingering-potion-of-weakness", "Lingering Potion of Weakness", "Alkemi", 320],
    ["lingering-potion-of-slowness", "Lingering Potion of Slowness", "Alkemi", 340], ["lingering-potion-of-harming", "Lingering Potion of Harming", "Alkemi", 430],
];

// Minecrafts item-id:n matchar nästan alltid gjutna till snake_case av samma namn
// som backend-nyckeln (t.ex. OAK_LOG -> oak_log). Potions delar tre bastexturer
// oavsett effekt, och ett fåtal syntetiska backend-nycklar motsvarar inget eget
// item i spelet — de mappas här till närmaste riktiga ikon.
const minecraftIdOverrides: Record<string, string> = {
    "any-dyed-wool": "white_wool",
    "crafted-saddle": "saddle",
};

const minecraftIdFor = (id: string) => {
    if (minecraftIdOverrides[id]) return minecraftIdOverrides[id];
    if (id.startsWith("lingering-potion-of-")) return "lingering_potion";
    if (id.startsWith("splash-potion-of-")) return "splash_potion";
    if (id.startsWith("potion-of-")) return "potion";
    return id.replaceAll("-", "_");
};

export const marketItems: MarketItem[] = catalog.map(([id, name, category, base], index) => {
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

    return { id, minecraftId: minecraftIdFor(id), name, category, buyPrice: offers[0]?.buyPrice ?? buyPrice, sellPrice, change24h, demand, stock, shortage, volume24h: 20 + ((value * 37 + index * 13) % 1600), trend, level, history, offers };
});

export const marketCategories = ["Alla", ...Array.from(new Set(marketItems.map((item) => item.category)))];
export const getShop = (shopId: string) => marketShops.find((shop) => shop.id === shopId);
export const getShopItems = (shopId: string) => marketItems.flatMap((item) => item.offers.filter((offer) => offer.shopId === shopId).map((offer) => ({ item, offer })));
