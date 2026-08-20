export type BuildingRequirementKey =
    | "stadskarna"
    | "gruva"
    | "ladugard"
    | "lada"
    | "fiskebrygga"
    | "sagverk"
    | "stenhuggeri"
    | "kategoribyggnad"
    | "handelscentrum"
    | "laboratorium"
    | "bank"
    | "reliktempel"
    | "vindhamn"
    | "gatukontor"
    | "turistbyra"
    | "stall"
    | "kontor"
    | "kyrka"
    | "marknadsplats"
    | "myntforvaring"
    | "radhus"
    | "slott"
    | "museum"
    | "rustkammare"
    | "myntverk";

export type BuildingRequirement = {
    minecraftId: string;
    name: string;
    amount: number;
};

const REQUIREMENTS: Record<BuildingRequirementKey, BuildingRequirement[]> = {
    stadskarna: [
        item("bell", "Bell", 1),
        item("lantern", "Lantern", 4),
        item("chest", "Chest", 2),
        item("cartography_table", "Cartography Table", 1),
    ],
    gruva: categoryRequirements(),
    ladugard: categoryRequirements(),
    lada: categoryRequirements(),
    fiskebrygga: categoryRequirements(),
    sagverk: categoryRequirements(),
    stenhuggeri: categoryRequirements(),
    kategoribyggnad: categoryRequirements(),
    handelscentrum: [
        item("barrel", "Barrel", 16),
        item("chest", "Chest", 16),
        item("item_frame", "Item Frame", 4),
        item("bell", "Bell", 2),
        item("lectern", "Lectern", 2),
    ],
    laboratorium: [
        item("brewing_stand", "Brewing Stand", 12),
        item("cauldron", "Cauldron", 8),
        item("bookshelf", "Bookshelf", 24),
        item("beacon", "Beacon", 2),
        item("decorated_pot", "Decorated Pot", 8),
    ],
    bank: [
        item("vault", "Vault", 2),
        item("ender_chest", "Ender Chest", 2),
        item("iron_door", "Iron Door", 4),
        item("bell", "Bell", 2),
        item("chiseled_bookshelf", "Chiseled Bookshelf", 8),
        item("heavy_weighted_pressure_plate", "Heavy Weighted Pressure Plate", 4),
    ],
    reliktempel: [
        item("vault", "Vault", 2),
        item("ender_chest", "Ender Chest", 1),
        item("chiseled_bookshelf", "Chiseled Bookshelf", 4),
        item("lectern", "Lectern", 2),
        item("candle", "Candle", 4),
        item("soul_lantern", "Soul Lantern", 2),
        item("enchanting_table", "Enchanting Table", 1),
        item("bell", "Bell", 1),
    ],
    vindhamn: [
        item("chain", "Chain", 8),
        item("lightning_rod", "Lightning Rod", 16),
        item("campfire", "Campfire", 4),
        item("beacon", "Beacon", 2),
    ],
    gatukontor: [
        item("cartography_table", "Cartography Table", 2),
        item("loom", "Loom", 2),
        item("lectern", "Lectern", 4),
        item("lantern", "Lantern", 8),
    ],
    turistbyra: [
        item("bell", "Bell", 2),
        item("cartography_table", "Cartography Table", 4),
        item("item_frame", "Item Frame", 8),
        item("flower_pot", "Flower Pot", 8),
    ],
    stall: [
        item("hay_block", "Hay Bale", 32),
        item("barrel", "Barrel", 8),
        item("oak_fence", "Fence, valfri träsort", 16),
        item("oak_fence_gate", "Fence Gate, valfri träsort", 8),
        item("cauldron", "Water Cauldron", 4),
    ],
    kontor: [
        item("chiseled_bookshelf", "Chiseled Bookshelf", 8),
        item("lectern", "Lectern", 8),
        item("chest", "Chest", 8),
        item("barrel", "Barrel", 8),
        item("crafter", "Crafter", 4),
    ],
    kyrka: [
        item("bell", "Bell", 2),
        item("candle", "Candle", 64),
        item("oak_stairs", "Trappblock, valfri sort", 40),
        item("lantern", "Lantern", 16),
        item("lectern", "Lectern", 4),
    ],
    marknadsplats: [
        item("chest", "Chest", 48),
        item("barrel", "Barrel", 48),
        item("item_frame", "Item Frame", 24),
        item("armor_stand", "Armor Stand", 12),
        item("bell", "Bell", 4),
    ],
    myntforvaring: [
        item("vault", "Vault", 8),
        item("chest", "Chest", 16),
        item("barrel", "Barrel", 8),
        item("chiseled_bookshelf", "Chiseled Bookshelf", 8),
        item("lectern", "Lectern", 4),
        item("iron_door", "Iron Door", 4),
        item("heavy_weighted_pressure_plate", "Heavy Weighted Pressure Plate", 4),
        item("iron_bars", "Iron Bars", 8),
        item("lantern", "Lantern", 4),
        item("bell", "Bell", 2),
    ],
    radhus: [
        item("lectern", "Lectern", 8),
        item("bell", "Bell", 8),
        item("white_banner", "Banner, valfri färg", 16),
        item("lantern", "Lantern", 32),
    ],
    slott: [
        item("beacon", "Beacon", 4),
        item("white_banner", "Banner, valfri färg", 16),
        item("bell", "Bell", 8),
        item("lantern", "Lantern", 32),
        item("vault", "Vault", 4),
    ],
    museum: [
        item("item_frame", "Item Frame", 32),
        item("armor_stand", "Armor Stand", 32),
        item("chiseled_bookshelf", "Chiseled Bookshelf", 16),
        item("decorated_pot", "Decorated Pot", 8),
        item("bell", "Bell", 4),
    ],
    rustkammare: [
        item("smithing_table", "Smithing Table", 16),
        item("grindstone", "Grindstone", 16),
        item("anvil", "Anvil", 16),
        item("blast_furnace", "Blast Furnace", 8),
        item("armor_stand", "Armor Stand", 8),
    ],
    myntverk: [
        item("vault", "Vault", 16),
        item("beacon", "Beacon", 8),
        item("bell", "Bell", 8),
        item("heavy_weighted_pressure_plate", "Heavy Weighted Pressure Plate", 16),
        item("chiseled_bookshelf", "Chiseled Bookshelf", 32),
    ],
};

export function getBuildingRequirements(building: BuildingRequirementKey) {
    return REQUIREMENTS[building];
}

export function isBuildingRequirementKey(value: string): value is BuildingRequirementKey {
    return value in REQUIREMENTS;
}

function categoryRequirements(): BuildingRequirement[] {
    return [
        item("crafter", "Crafter", 1),
        item("chest", "Chest", 2),
        item("barrel", "Barrel", 2),
        item("grindstone", "Grindstone", 2),
        item("lantern", "Lantern", 4),
    ];
}

function item(minecraftId: string, name: string, amount: number): BuildingRequirement {
    return { minecraftId, name, amount };
}
