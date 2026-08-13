export type BuildingRequirementKey =
    | "gruva"
    | "ladugard"
    | "lada"
    | "fiskebrygga"
    | "sagverk"
    | "stenhuggeri"
    | "handelscentrum"
    | "bank"
    | "laboratorium"
    | "kyrka"
    | "marknadsplats"
    | "monument"
    | "slott"
    | "underverk";

export type BuildingRequirement = {
    minecraftId: string;
    name: string;
    amount: number;
};

const REQUIREMENTS: Record<BuildingRequirementKey, BuildingRequirement[]> = {
    gruva: categoryRequirements(),
    ladugard: categoryRequirements(),
    lada: categoryRequirements(),
    fiskebrygga: categoryRequirements(),
    sagverk: categoryRequirements(),
    stenhuggeri: categoryRequirements(),
    handelscentrum: [
        item("barrel", "Barrel", 8),
        item("chest", "Chest", 8),
        item("item_frame", "Item Frame", 4),
        item("bell", "Bell", 1),
        item("lectern", "Lectern", 2),
    ],
    bank: [
        item("iron_block", "Iron Block", 4),
        item("gold_block", "Gold Block", 2),
        item("ender_chest", "Ender Chest", 1),
        item("iron_door", "Iron Door", 2),
        item("bell", "Bell", 1),
        item("chiseled_bookshelf", "Chiseled Bookshelf", 4),
        item("heavy_weighted_pressure_plate", "Heavy Weighted Pressure Plate", 2),
    ],
    laboratorium: [
        item("brewing_stand", "Brewing Stand", 6),
        item("cauldron", "Cauldron", 4),
        item("bookshelf", "Bookshelf", 12),
        item("decorated_pot", "Decorated Pot", 4),
    ],
    kyrka: [
        item("bell", "Bell", 1),
        item("candle", "Candle", 32),
        item("lantern", "Lantern", 8),
        item("lectern", "Lectern", 2),
    ],
    marknadsplats: [
        item("chest", "Chest", 24),
        item("barrel", "Barrel", 24),
        item("item_frame", "Item Frame", 12),
        item("armor_stand", "Armor Stand", 6),
        item("bell", "Bell", 2),
    ],
    monument: [
        item("beacon", "Beacon", 1),
        item("bell", "Bell", 1),
        item("lantern", "Lantern", 8),
        item("chiseled_stone_bricks", "Chiseled Stone Bricks", 16),
    ],
    slott: [
        item("beacon", "Beacon", 2),
        item("bell", "Bell", 4),
        item("lantern", "Lantern", 16),
        item("heavy_core", "Heavy Core", 1),
    ],
    underverk: [
        item("beacon", "Beacon", 8),
        item("bell", "Bell", 6),
        item("heavy_core", "Heavy Core", 2),
        item("ender_chest", "Ender Chest", 4),
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
        item("barrel", "Barrel", 1),
        item("grindstone", "Grindstone", 1),
        item("lantern", "Lantern", 2),
    ];
}

function item(minecraftId: string, name: string, amount: number): BuildingRequirement {
    return { minecraftId, name, amount };
}
