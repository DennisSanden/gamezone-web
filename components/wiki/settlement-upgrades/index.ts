import type { SettlementUpgrade, SettlementUpgradeKey } from "./types";
import { enstoringTillLager } from "./enstoring";
import { lagerTillBy } from "./lager";
import { byTillBosattning } from "./by";
import { bosattningTillSamhalle } from "./bosattning";
import { samhalleTillKoping } from "./samhalle";
import { kopingTillStad } from "./koping";
import { stadTillHandelsstad } from "./stad";
import { handelsstadTillFastning } from "./handelsstad";
import { fastningTillHuvudstad } from "./fastning";
import { huvudstadTillGrevskap } from "./huvudstad";
import { grevskapTillHertigdome } from "./grevskap";
import { hertigdomeTillNation } from "./hertigdome";
import { nationTillKungadome } from "./nation";
import { kungadomeTillImperium } from "./kungadome";

const settlementUpgrades: Record<SettlementUpgradeKey, SettlementUpgrade> = {
    // Legacy named settlement pages still reference these keys.
    // Keep them registered alongside the newer 1-50 progression so old wiki
    // routes render their panels instead of falling back to an unknown-component warning.
    "enstoring-till-lager": enstoringTillLager,
    "lager-till-by": lagerTillBy,
    "by-till-bosattning": byTillBosattning,
    "bosattning-till-samhalle": bosattningTillSamhalle,
    "samhalle-till-koping": samhalleTillKoping,
    "koping-till-stad": kopingTillStad,
    "stad-till-handelsstad": stadTillHandelsstad,
    "handelsstad-till-fastning": handelsstadTillFastning,
    "fastning-till-huvudstad": fastningTillHuvudstad,
    "huvudstad-till-grevskap": huvudstadTillGrevskap,
    "grevskap-till-hertigdome": grevskapTillHertigdome,
    "hertigdome-till-nation": hertigdomeTillNation,
    "nation-till-kungadome": nationTillKungadome,
    "kungadome-till-imperium": kungadomeTillImperium,
    "level-1-till-2": {
        currentLevel: { name: "Enstöring", level: 1 },
        nextLevel: {
            name: "Läger",
            level: 2,
            href: "/wiki/settlements/settlement-upgrades#niva-2-lager",
        },
        changes: [],
        upgradeCost: {
            coins: "0 Coins",
            materials: [
            { id: "oak-log-1", name: "Oak Log", amount: 32, icon: "🪵", texture: "/minecraft/blocks/oak_log.png" },
            { id: "cobblestone-2", name: "Cobblestone", amount: 64, icon: "◆", texture: "/minecraft/blocks/cobblestone.png" }
            ],
        },
        requiredCurrentBuildings: ["Stadskärna"],
    },
    "level-2-till-3": {
        currentLevel: { name: "Läger", level: 2 },
        nextLevel: {
            name: "Boplats",
            level: 3,
            href: "/wiki/settlements/settlement-upgrades#niva-3-boplats",
        },
        changes: [],
        upgradeCost: {
            coins: "10 000 Coins",
            materials: [
            { id: "coal-1", name: "Coal", amount: 32, icon: "⬛", texture: "/minecraft/items/coal.png" },
            { id: "wheat-2", name: "Wheat", amount: 32, icon: "🌾", texture: "/minecraft/items/wheat.png" },
            { id: "leather-3", name: "Leather", amount: 16, icon: "🟫", texture: "/minecraft/items/leather.png" },
            { id: "oak-log-4", name: "Oak Log", amount: 64, icon: "🪵", texture: "/minecraft/blocks/oak_log.png" },
            { id: "cod-5", name: "Cod", amount: 16, icon: "🐟", texture: "/minecraft/items/cod.png" },
            { id: "stone-bricks-6", name: "Stone Bricks", amount: 128, icon: "◆", texture: "/minecraft/blocks/stone_bricks.png" }
            ],
        },
        requiredCurrentBuildings: ["Kategoribyggnad för settlementets aktiva kategori, Alkemi är undantaget"],
    },
    "level-3-till-4": {
        currentLevel: { name: "Boplats", level: 3 },
        nextLevel: {
            name: "Nybygge",
            level: 4,
            href: "/wiki/settlements/settlement-upgrades#niva-4-nybygge",
        },
        changes: [],
        upgradeCost: {
            coins: "25 000 Coins",
            materials: [
            { id: "raw-iron-1", name: "Raw Iron", amount: 64, icon: "⬜", texture: "/minecraft/items/raw_iron.png" },
            { id: "carrot-2", name: "Carrot", amount: 64, icon: "🥕", texture: "/minecraft/items/carrot.png" },
            { id: "beef-3", name: "Beef", amount: 32, icon: "🥩", texture: "/minecraft/items/beef.png" },
            { id: "birch-log-4", name: "Birch Log", amount: 96, icon: "🪵", texture: "/minecraft/blocks/birch_log.png" },
            { id: "salmon-5", name: "Salmon", amount: 32, icon: "🐟", texture: "/minecraft/items/salmon.png" },
            { id: "bricks-6", name: "Bricks", amount: 192, icon: "◆", texture: "/minecraft/blocks/bricks.png" }
            ],
        },
        requiredCurrentBuildings: ["Handelscentrum"],
    },
    "level-4-till-5": {
        currentLevel: { name: "Nybygge", level: 4 },
        nextLevel: {
            name: "By",
            level: 5,
            href: "/wiki/settlements/settlement-upgrades#niva-5-by",
        },
        changes: [],
        upgradeCost: {
            coins: "50 000 Coins",
            materials: [
            { id: "raw-copper-1", name: "Raw Copper", amount: 128, icon: "🟧", texture: "/minecraft/items/raw_copper.png" },
            { id: "potato-2", name: "Potato", amount: 96, icon: "🥔", texture: "/minecraft/items/potato.png" },
            { id: "white-wool-3", name: "White Wool", amount: 64, icon: "◆", texture: "/minecraft/blocks/white_wool.png" },
            { id: "spruce-log-4", name: "Spruce Log", amount: 128, icon: "🪵", texture: "/minecraft/blocks/spruce_log.png" },
            { id: "tropical-fish-5", name: "Tropical Fish", amount: 24, icon: "🐠", texture: "/minecraft/items/tropical_fish.png" },
            { id: "deepslate-bricks-6", name: "Deepslate Bricks", amount: 256, icon: "◆", texture: "/minecraft/blocks/deepslate_bricks.png" }
            ],
        },
        requiredCurrentBuildings: [],
    },
    "level-5-till-6": {
        currentLevel: { name: "By", level: 5 },
        nextLevel: {
            name: "Storby",
            level: 6,
            href: "/wiki/settlements/settlement-upgrades#niva-6-storby",
        },
        changes: [],
        upgradeCost: {
            coins: "100 000 Coins",
            materials: [
            { id: "raw-gold-1", name: "Raw Gold", amount: 96, icon: "🟨", texture: "/minecraft/items/raw_gold.png" },
            { id: "beetroot-2", name: "Beetroot", amount: 128, icon: "🫜", texture: "/minecraft/items/beetroot.png" },
            { id: "porkchop-3", name: "Porkchop", amount: 64, icon: "🥩", texture: "/minecraft/items/porkchop.png" },
            { id: "jungle-log-4", name: "Jungle Log", amount: 192, icon: "🪵", texture: "/minecraft/blocks/jungle_log.png" },
            { id: "pufferfish-5", name: "Pufferfish", amount: 24, icon: "🐡", texture: "/minecraft/items/pufferfish.png" },
            { id: "glass-6", name: "Glass", amount: 384, icon: "◆", texture: "/minecraft/blocks/glass.png" },
            { id: "nether-wart-7", name: "Nether Wart", amount: 32, icon: "◆", texture: "/minecraft/items/nether_wart.png" }
            ],
        },
        requiredCurrentBuildings: [],
    },
    "level-6-till-7": {
        currentLevel: { name: "Storby", level: 6 },
        nextLevel: {
            name: "Samhälle",
            level: 7,
            href: "/wiki/settlements/settlement-upgrades#niva-7-samhalle",
        },
        changes: [],
        upgradeCost: {
            coins: "175 000 Coins",
            materials: [
            { id: "redstone-1", name: "Redstone", amount: 256, icon: "🔴", texture: "/minecraft/items/redstone.png" },
            { id: "bread-2", name: "Bread", amount: 192, icon: "🍞", texture: "/minecraft/items/bread.png" },
            { id: "feather-3", name: "Feather", amount: 128, icon: "🪶", texture: "/minecraft/items/feather.png" },
            { id: "acacia-log-4", name: "Acacia Log", amount: 256, icon: "🪵", texture: "/minecraft/blocks/acacia_log.png" },
            { id: "cod-5", name: "Cod", amount: 96, icon: "🐟", texture: "/minecraft/items/cod.png" },
            { id: "mud-bricks-6", name: "Mud Bricks", amount: 512, icon: "◆", texture: "/minecraft/blocks/mud_bricks.png" },
            { id: "blaze-powder-7", name: "Blaze Powder", amount: 24, icon: "◆", texture: "/minecraft/items/blaze_powder.png" }
            ],
        },
        requiredCurrentBuildings: [],
    },
    "level-7-till-8": {
        currentLevel: { name: "Samhälle", level: 7 },
        nextLevel: {
            name: "Köping",
            level: 8,
            href: "/wiki/settlements/settlement-upgrades#niva-8-koping",
        },
        changes: [],
        upgradeCost: {
            coins: "300 000 Coins",
            materials: [
            { id: "lapis-lazuli-1", name: "Lapis Lazuli", amount: 384, icon: "🔵", texture: "/minecraft/items/lapis_lazuli.png" },
            { id: "pumpkin-2", name: "Pumpkin", amount: 256, icon: "🎃", texture: "/minecraft/items/pumpkin_pie.png" },
            { id: "egg-3", name: "Egg", amount: 192, icon: "🥚", texture: "/minecraft/items/egg.png" },
            { id: "dark-oak-log-4", name: "Dark Oak Log", amount: 384, icon: "🪵", texture: "/minecraft/blocks/dark_oak_log.png" },
            { id: "salmon-5", name: "Salmon", amount: 128, icon: "🐟", texture: "/minecraft/items/salmon.png" },
            { id: "polished-andesite-6", name: "Polished Andesite", amount: 768, icon: "◆", texture: "/minecraft/blocks/polished_andesite.png" },
            { id: "magma-cream-7", name: "Magma Cream", amount: 32, icon: "◆", texture: "/minecraft/items/magma_cream.png" }
            ],
        },
        requiredCurrentBuildings: [],
    },
    "level-8-till-9": {
        currentLevel: { name: "Köping", level: 8 },
        nextLevel: {
            name: "Handelsköping",
            level: 9,
            href: "/wiki/settlements/settlement-upgrades#niva-9-handelskoping",
        },
        changes: [],
        upgradeCost: {
            coins: "500 000 Coins",
            materials: [
            { id: "emerald-1", name: "Emerald", amount: 192, icon: "💚", texture: "/minecraft/items/emerald.png" },
            { id: "sugar-cane-2", name: "Sugar Cane", amount: 512, icon: "🎋", texture: "/minecraft/items/sugar_cane.png" },
            { id: "mutton-3", name: "Mutton", amount: 192, icon: "🥩", texture: "/minecraft/items/mutton.png" },
            { id: "mangrove-log-4", name: "Mangrove Log", amount: 512, icon: "🪵", texture: "/minecraft/blocks/mangrove_log.png" },
            { id: "ink-sac-5", name: "Ink Sac", amount: 128, icon: "◆", texture: "/minecraft/items/ink_sac.png" },
            { id: "white-concrete-6", name: "White Concrete", amount: 768, icon: "◆", texture: "/minecraft/blocks/white_concrete.png" },
            { id: "glowstone-dust-7", name: "Glowstone Dust", amount: 64, icon: "◆", texture: "/minecraft/items/glowstone_dust.png" }
            ],
        },
        requiredCurrentBuildings: [],
    },
    "level-9-till-10": {
        currentLevel: { name: "Handelsköping", level: 9 },
        nextLevel: {
            name: "Småstad",
            level: 10,
            href: "/wiki/settlements/settlement-upgrades#niva-10-smastad",
        },
        changes: [],
        upgradeCost: {
            coins: "800 000 Coins",
            materials: [
            { id: "diamond-1", name: "Diamond", amount: 48, icon: "💎", texture: "/minecraft/items/diamond.png" },
            { id: "melon-slice-2", name: "Melon Slice", amount: 768, icon: "🍉", texture: "/minecraft/items/melon_slice.png" },
            { id: "honeycomb-3", name: "Honeycomb", amount: 192, icon: "🍯", texture: "/minecraft/items/honeycomb.png" },
            { id: "cherry-log-4", name: "Cherry Log", amount: 512, icon: "🪵", texture: "/minecraft/blocks/cherry_log.png" },
            { id: "tropical-fish-5", name: "Tropical Fish", amount: 48, icon: "🐠", texture: "/minecraft/items/tropical_fish.png" },
            { id: "tuff-bricks-6", name: "Tuff Bricks", amount: 1024, icon: "◆", texture: "/minecraft/blocks/tuff_bricks.png" },
            { id: "fermented-spider-eye-7", name: "Fermented Spider Eye", amount: 64, icon: "◆", texture: "/minecraft/items/fermented_spider_eye.png" }
            ],
        },
        requiredCurrentBuildings: [],
    },
    "level-10-till-11": {
        currentLevel: { name: "Småstad", level: 10 },
        nextLevel: {
            name: "Stad",
            level: 11,
            href: "/wiki/settlements/settlement-upgrades#niva-11-stad",
        },
        changes: [],
        upgradeCost: {
            coins: "1 200 000 Coins",
            materials: [
            { id: "amethyst-shard-1", name: "Amethyst Shard", amount: 384, icon: "💜", texture: "/minecraft/items/amethyst_shard.png" },
            { id: "cocoa-beans-2", name: "Cocoa Beans", amount: 768, icon: "◆", texture: "/minecraft/items/cocoa_beans.png" },
            { id: "rabbit-hide-3", name: "Rabbit Hide", amount: 128, icon: "🐇", texture: "/minecraft/items/rabbit_hide.png" },
            { id: "pale-oak-log-4", name: "Pale Oak Log", amount: 640, icon: "🪵", texture: "/minecraft/blocks/pale_oak_log.png" },
            { id: "pufferfish-5", name: "Pufferfish", amount: 64, icon: "🐡", texture: "/minecraft/items/pufferfish.png" },
            { id: "lantern-6", name: "Lantern", amount: 128, icon: "◆", texture: "/minecraft/items/lantern.png" },
            { id: "potion-of-healing-7", name: "Potion of Healing", amount: 12, icon: "◆", texture: "/minecraft/items/potion.png" },
            { id: "clock-8", name: "Clock", amount: 4, icon: "🕒", texture: "/minecraft/items/clock_00.png" }
            ],
        },
        requiredCurrentBuildings: [],
    },
    "level-11-till-12": {
        currentLevel: { name: "Stad", level: 11 },
        nextLevel: {
            name: "Handelsstad",
            level: 12,
            href: "/wiki/settlements/settlement-upgrades#niva-12-handelsstad",
        },
        changes: [],
        upgradeCost: {
            coins: "1 750 000 Coins",
            materials: [
            { id: "quartz-1", name: "Quartz", amount: 512, icon: "◆", texture: "/minecraft/items/quartz.png" },
            { id: "sweet-berries-2", name: "Sweet Berries", amount: 768, icon: "🫐", texture: "/minecraft/items/sweet_berries.png" },
            { id: "honey-bottle-3", name: "Honey Bottle", amount: 192, icon: "🍯", texture: "/minecraft/items/honey_bottle.png" },
            { id: "crimson-stem-4", name: "Crimson Stem", amount: 768, icon: "🪵", texture: "/minecraft/blocks/crimson_stem.png" },
            { id: "cod-5", name: "Cod", amount: 192, icon: "🐟", texture: "/minecraft/items/cod.png" },
            { id: "chiseled-copper-6", name: "Chiseled Copper", amount: 256, icon: "◆", texture: "/minecraft/blocks/chiseled_copper.png" },
            { id: "potion-of-swiftness-7", name: "Potion of Swiftness", amount: 16, icon: "◆", texture: "/minecraft/items/potion.png" },
            { id: "compass-8", name: "Compass", amount: 4, icon: "🧭", texture: "/minecraft/items/compass_00.png" }
            ],
        },
        requiredCurrentBuildings: [],
    },
    "level-12-till-13": {
        currentLevel: { name: "Handelsstad", level: 12 },
        nextLevel: {
            name: "Fästningsstad",
            level: 13,
            href: "/wiki/settlements/settlement-upgrades#niva-13-fastningsstad",
        },
        changes: [],
        upgradeCost: {
            coins: "2 500 000 Coins",
            materials: [
            { id: "iron-ingot-1", name: "Iron Ingot", amount: 768, icon: "⬜", texture: "/minecraft/items/iron_ingot.png" },
            { id: "glow-berries-2", name: "Glow Berries", amount: 1024, icon: "🫐", texture: "/minecraft/items/glow_berries.png" },
            { id: "rabbit-foot-3", name: "Rabbit Foot", amount: 8, icon: "🐇", texture: "/minecraft/items/rabbit_foot.png" },
            { id: "warped-stem-4", name: "Warped Stem", amount: 768, icon: "🪵", texture: "/minecraft/blocks/warped_stem.png" },
            { id: "salmon-5", name: "Salmon", amount: 256, icon: "🐟", texture: "/minecraft/items/salmon.png" },
            { id: "iron-bars-6", name: "Iron Bars", amount: 512, icon: "◆", texture: "/minecraft/blocks/iron_bars.png" },
            { id: "potion-of-strength-7", name: "Potion of Strength", amount: 16, icon: "◆", texture: "/minecraft/items/potion.png" },
            { id: "shield-8", name: "Shield", amount: 8, icon: "🛡️" }
            ],
        },
        requiredCurrentBuildings: [],
    },
    "level-13-till-14": {
        currentLevel: { name: "Fästningsstad", level: 13 },
        nextLevel: {
            name: "Residensstad",
            level: 14,
            href: "/wiki/settlements/settlement-upgrades#niva-14-residensstad",
        },
        changes: [],
        upgradeCost: {
            coins: "3 500 000 Coins",
            materials: [
            { id: "gold-ingot-1", name: "Gold Ingot", amount: 512, icon: "🟨", texture: "/minecraft/items/gold_ingot.png" },
            { id: "bamboo-2", name: "Bamboo", amount: 1024, icon: "🎋", texture: "/minecraft/items/bamboo.png" },
            { id: "leather-3", name: "Leather", amount: 384, icon: "🟫", texture: "/minecraft/items/leather.png" },
            { id: "bamboo-planks-4", name: "Bamboo Planks", amount: 768, icon: "◆", texture: "/minecraft/blocks/bamboo_planks.png" },
            { id: "nautilus-shell-5", name: "Nautilus Shell", amount: 8, icon: "🐚", texture: "/minecraft/items/nautilus_shell.png" },
            { id: "tinted-glass-6", name: "Tinted Glass", amount: 384, icon: "◆", texture: "/minecraft/blocks/tinted_glass.png" },
            { id: "potion-of-regeneration-7", name: "Potion of Regeneration", amount: 16, icon: "◆", texture: "/minecraft/items/potion.png" },
            { id: "bookshelf-8", name: "Bookshelf", amount: 48, icon: "◆", texture: "/minecraft/blocks/bookshelf.png" }
            ],
        },
        requiredCurrentBuildings: [],
    },
    "level-14-till-15": {
        currentLevel: { name: "Residensstad", level: 14 },
        nextLevel: {
            name: "Storstad",
            level: 15,
            href: "/wiki/settlements/settlement-upgrades#niva-15-storstad",
        },
        changes: [],
        upgradeCost: {
            coins: "5 000 000 Coins",
            materials: [
            { id: "copper-ingot-1", name: "Copper Ingot", amount: 1024, icon: "◆", texture: "/minecraft/items/copper_ingot.png" },
            { id: "chorus-fruit-2", name: "Chorus Fruit", amount: 384, icon: "🟣", texture: "/minecraft/items/chorus_fruit.png" },
            { id: "white-wool-3", name: "White Wool", amount: 512, icon: "◆", texture: "/minecraft/blocks/white_wool.png" },
            { id: "oak-log-4", name: "Oak Log", amount: 1024, icon: "🪵", texture: "/minecraft/blocks/oak_log.png" },
            { id: "ink-sac-5", name: "Ink Sac", amount: 256, icon: "◆", texture: "/minecraft/items/ink_sac.png" },
            { id: "polished-blackstone-bricks-6", name: "Polished Blackstone Bricks", amount: 768, icon: "◆", texture: "/minecraft/blocks/polished_blackstone_bricks.png" },
            { id: "potion-of-fire-resistance-7", name: "Potion of Fire Resistance", amount: 16, icon: "◆", texture: "/minecraft/items/potion.png" },
            { id: "decorated-pot-8", name: "Decorated Pot", amount: 12, icon: "◆" }
            ],
        },
        requiredCurrentBuildings: [],
    },
    "level-15-till-16": {
        currentLevel: { name: "Storstad", level: 15 },
        nextLevel: {
            name: "Huvudstad",
            level: 16,
            href: "/wiki/settlements/settlement-upgrades#niva-16-huvudstad",
        },
        changes: [],
        upgradeCost: {
            coins: "7 000 000 Coins",
            materials: [
            { id: "diamond-1", name: "Diamond", amount: 64, icon: "💎", texture: "/minecraft/items/diamond.png" },
            { id: "pumpkin-2", name: "Pumpkin", amount: 1024, icon: "🎃", texture: "/minecraft/items/pumpkin_pie.png" },
            { id: "beef-3", name: "Beef", amount: 512, icon: "🥩", texture: "/minecraft/items/beef.png" },
            { id: "birch-log-4", name: "Birch Log", amount: 1024, icon: "🪵", texture: "/minecraft/blocks/birch_log.png" },
            { id: "nautilus-shell-5", name: "Nautilus Shell", amount: 12, icon: "🐚", texture: "/minecraft/items/nautilus_shell.png" },
            { id: "copper-bulb-6", name: "Copper Bulb", amount: 192, icon: "◆", texture: "/minecraft/blocks/copper_bulb.png" },
            { id: "potion-of-night-vision-7", name: "Potion of Night Vision", amount: 24, icon: "◆", texture: "/minecraft/items/potion.png" },
            { id: "spyglass-8", name: "Spyglass", amount: 8, icon: "🔭", texture: "/minecraft/items/spyglass.png" }
            ],
        },
        requiredCurrentBuildings: [],
    },
    "level-16-till-17": {
        currentLevel: { name: "Huvudstad", level: 16 },
        nextLevel: {
            name: "Stadsstat",
            level: 17,
            href: "/wiki/settlements/settlement-upgrades#niva-17-stadsstat",
        },
        changes: [],
        upgradeCost: {
            coins: "9 500 000 Coins",
            materials: [
            { id: "emerald-1", name: "Emerald", amount: 384, icon: "💚", texture: "/minecraft/items/emerald.png" },
            { id: "honey-bottle-2", name: "Honey Bottle", amount: 384, icon: "🍯", texture: "/minecraft/items/honey_bottle.png" },
            { id: "egg-3", name: "Egg", amount: 512, icon: "🥚", texture: "/minecraft/items/egg.png" },
            { id: "spruce-log-4", name: "Spruce Log", amount: 1280, icon: "🪵", texture: "/minecraft/blocks/spruce_log.png" },
            { id: "prismarine-crystals-5", name: "Prismarine Crystals", amount: 128, icon: "◆", texture: "/minecraft/items/prismarine_crystals.png" },
            { id: "chain-6", name: "Chain", amount: 384, icon: "◆", texture: "/minecraft/blocks/chain_command_block_back.png" },
            { id: "potion-of-water-breathing-7", name: "Potion of Water Breathing", amount: 24, icon: "◆", texture: "/minecraft/items/potion.png" },
            { id: "ender-chest-8", name: "Ender Chest", amount: 4, icon: "📦" }
            ],
        },
        requiredCurrentBuildings: [],
    },
    "level-17-till-18": {
        currentLevel: { name: "Stadsstat", level: 17 },
        nextLevel: {
            name: "Fristat",
            level: 18,
            href: "/wiki/settlements/settlement-upgrades#niva-18-fristat",
        },
        changes: [],
        upgradeCost: {
            coins: "12 500 000 Coins",
            materials: [
            { id: "redstone-1", name: "Redstone", amount: 1024, icon: "🔴", texture: "/minecraft/items/redstone.png" },
            { id: "kelp-2", name: "Kelp", amount: 1536, icon: "◆", texture: "/minecraft/items/kelp.png" },
            { id: "chicken-3", name: "Chicken", amount: 512, icon: "🍗", texture: "/minecraft/items/chicken.png" },
            { id: "jungle-log-4", name: "Jungle Log", amount: 1280, icon: "🪵", texture: "/minecraft/blocks/jungle_log.png" },
            { id: "name-tag-5", name: "Name Tag", amount: 4, icon: "◆", texture: "/minecraft/items/name_tag.png" },
            { id: "quartz-block-6", name: "Quartz Block", amount: 768, icon: "◆", texture: "/minecraft/blocks/quartz_block_side.png" },
            { id: "splash-potion-of-healing-7", name: "Splash Potion of Healing", amount: 16, icon: "◆", texture: "/minecraft/items/splash_potion.png" },
            { id: "music-disc-8", name: "Music Disc", amount: 1, icon: "💿", texture: "/minecraft/items/music_disc_13.png" }
            ],
        },
        requiredCurrentBuildings: [],
    },
    "level-18-till-19": {
        currentLevel: { name: "Fristat", level: 18 },
        nextLevel: {
            name: "Län",
            level: 19,
            href: "/wiki/settlements/settlement-upgrades#niva-19-lan",
        },
        changes: [],
        upgradeCost: {
            coins: "16 000 000 Coins",
            materials: [
            { id: "lapis-lazuli-1", name: "Lapis Lazuli", amount: 1024, icon: "🔵", texture: "/minecraft/items/lapis_lazuli.png" },
            { id: "pumpkin-2", name: "Pumpkin", amount: 1536, icon: "🎃", texture: "/minecraft/items/pumpkin_pie.png" },
            { id: "mutton-3", name: "Mutton", amount: 640, icon: "🥩", texture: "/minecraft/items/mutton.png" },
            { id: "acacia-log-4", name: "Acacia Log", amount: 1536, icon: "🪵", texture: "/minecraft/blocks/acacia_log.png" },
            { id: "cod-5", name: "Cod", amount: 384, icon: "🐟", texture: "/minecraft/items/cod.png" },
            { id: "end-stone-bricks-6", name: "End Stone Bricks", amount: 1024, icon: "◆", texture: "/minecraft/blocks/end_stone_bricks.png" },
            { id: "splash-potion-of-strength-7", name: "Splash Potion of Strength", amount: 16, icon: "◆", texture: "/minecraft/items/splash_potion.png" },
            { id: "recovery-compass-8", name: "Recovery Compass", amount: 1, icon: "🧭", texture: "/minecraft/items/recovery_compass_00.png" }
            ],
        },
        requiredCurrentBuildings: [],
    },
    "level-19-till-20": {
        currentLevel: { name: "Län", level: 19 },
        nextLevel: {
            name: "Grevskap",
            level: 20,
            href: "/wiki/settlements/settlement-upgrades#niva-20-grevskap",
        },
        changes: [],
        upgradeCost: {
            coins: "20 000 000 Coins",
            materials: [
            { id: "ancient-debris-1", name: "Ancient Debris", amount: 12, icon: "◆", texture: "/minecraft/blocks/ancient_debris_top.png" },
            { id: "chorus-fruit-2", name: "Chorus Fruit", amount: 512, icon: "🟣", texture: "/minecraft/items/chorus_fruit.png" },
            { id: "honeycomb-3", name: "Honeycomb", amount: 768, icon: "🍯", texture: "/minecraft/items/honeycomb.png" },
            { id: "dark-oak-log-4", name: "Dark Oak Log", amount: 1536, icon: "🪵", texture: "/minecraft/blocks/dark_oak_log.png" },
            { id: "salmon-5", name: "Salmon", amount: 384, icon: "🐟", texture: "/minecraft/items/salmon.png" },
            { id: "purpur-block-6", name: "Purpur Block", amount: 1024, icon: "◆", texture: "/minecraft/blocks/purpur_block.png" },
            { id: "lingering-potion-of-healing-7", name: "Lingering Potion of Healing", amount: 6, icon: "◆", texture: "/minecraft/items/lingering_potion.png" },
            { id: "goat-horn-8", name: "Goat Horn", amount: 1, icon: "📯", texture: "/minecraft/items/goat_horn.png" },
            { id: "totem-of-undying-9", name: "Totem of Undying", amount: 1, icon: "🗿", texture: "/minecraft/items/totem_of_undying.png" }
            ],
        },
        requiredCurrentBuildings: [],
    },
    "level-20-till-21": {
        currentLevel: { name: "Grevskap", level: 20 },
        nextLevel: {
            name: "Markgrevskap",
            level: 21,
            href: "/wiki/settlements/settlement-upgrades#niva-21-markgrevskap",
        },
        changes: [],
        upgradeCost: {
            coins: "25 000 000 Coins",
            materials: [
            { id: "raw-iron-1", name: "Raw Iron", amount: 1024, icon: "⬜", texture: "/minecraft/items/raw_iron.png" },
            { id: "carrot-2", name: "Carrot", amount: 1536, icon: "🥕", texture: "/minecraft/items/carrot.png" },
            { id: "leather-3", name: "Leather", amount: 768, icon: "🟫", texture: "/minecraft/items/leather.png" },
            { id: "mangrove-log-4", name: "Mangrove Log", amount: 1536, icon: "🪵", texture: "/minecraft/blocks/mangrove_log.png" },
            { id: "tropical-fish-5", name: "Tropical Fish", amount: 96, icon: "🐠", texture: "/minecraft/items/tropical_fish.png" },
            { id: "mossy-stone-bricks-6", name: "Mossy Stone Bricks", amount: 1536, icon: "◆", texture: "/minecraft/blocks/mossy_stone_bricks.png" },
            { id: "ghast-tear-7", name: "Ghast Tear", amount: 16, icon: "◆", texture: "/minecraft/items/ghast_tear.png" },
            { id: "saddle-8", name: "Saddle", amount: 2, icon: "🐎", texture: "/minecraft/items/saddle.png" }
            ],
        },
        requiredCurrentBuildings: [],
    },
    "level-21-till-22": {
        currentLevel: { name: "Markgrevskap", level: 21 },
        nextLevel: {
            name: "Furstendöme",
            level: 22,
            href: "/wiki/settlements/settlement-upgrades#niva-22-furstendome",
        },
        changes: [],
        upgradeCost: {
            coins: "30 000 000 Coins",
            materials: [
            { id: "raw-copper-1", name: "Raw Copper", amount: 1536, icon: "🟧", texture: "/minecraft/items/raw_copper.png" },
            { id: "potato-2", name: "Potato", amount: 1536, icon: "🥔", texture: "/minecraft/items/potato.png" },
            { id: "rabbit-hide-3", name: "Rabbit Hide", amount: 384, icon: "🐇", texture: "/minecraft/items/rabbit_hide.png" },
            { id: "cherry-log-4", name: "Cherry Log", amount: 1536, icon: "🪵", texture: "/minecraft/blocks/cherry_log.png" },
            { id: "pufferfish-5", name: "Pufferfish", amount: 96, icon: "🐡", texture: "/minecraft/items/pufferfish.png" },
            { id: "copper-grate-6", name: "Copper Grate", amount: 384, icon: "◆", texture: "/minecraft/blocks/copper_grate.png" },
            { id: "blaze-rod-7", name: "Blaze Rod", amount: 48, icon: "◆", texture: "/minecraft/items/blaze_rod.png" },
            ],
        },
        requiredCurrentBuildings: [],
    },
    "level-22-till-23": {
        currentLevel: { name: "Furstendöme", level: 22 },
        nextLevel: {
            name: "Hertigdöme",
            level: 23,
            href: "/wiki/settlements/settlement-upgrades#niva-23-hertigdome",
        },
        changes: [],
        upgradeCost: {
            coins: "36 000 000 Coins",
            materials: [
            { id: "raw-gold-1", name: "Raw Gold", amount: 768, icon: "🟨", texture: "/minecraft/items/raw_gold.png" },
            { id: "beetroot-2", name: "Beetroot", amount: 1536, icon: "🫜", texture: "/minecraft/items/beetroot.png" },
            { id: "feather-3", name: "Feather", amount: 1024, icon: "🪶", texture: "/minecraft/items/feather.png" },
            { id: "pale-oak-log-4", name: "Pale Oak Log", amount: 1536, icon: "🪵", texture: "/minecraft/blocks/pale_oak_log.png" },
            { id: "ink-sac-5", name: "Ink Sac", amount: 384, icon: "◆", texture: "/minecraft/items/ink_sac.png" },
            { id: "cut-copper-6", name: "Cut Copper", amount: 512, icon: "◆", texture: "/minecraft/blocks/cut_copper.png" },
            { id: "glistering-melon-slice-7", name: "Glistering Melon Slice", amount: 384, icon: "◆", texture: "/minecraft/items/glistering_melon_slice.png" },
            { id: "heart-of-the-sea-8", name: "Heart of the Sea", amount: 1, icon: "💙", texture: "/minecraft/items/heart_of_the_sea.png" }
            ],
        },
        requiredCurrentBuildings: [],
    },
    "level-23-till-24": {
        currentLevel: { name: "Hertigdöme", level: 23 },
        nextLevel: {
            name: "Storhertigdöme",
            level: 24,
            href: "/wiki/settlements/settlement-upgrades#niva-24-storhertigdome",
        },
        changes: [],
        upgradeCost: {
            coins: "43 000 000 Coins",
            materials: [
            { id: "amethyst-shard-1", name: "Amethyst Shard", amount: 1024, icon: "💜", texture: "/minecraft/items/amethyst_shard.png" },
            { id: "wheat-2", name: "Wheat", amount: 2048, icon: "🌾", texture: "/minecraft/items/wheat.png" },
            { id: "porkchop-3", name: "Porkchop", amount: 768, icon: "🥩", texture: "/minecraft/items/porkchop.png" },
            { id: "crimson-stem-4", name: "Crimson Stem", amount: 1536, icon: "🪵", texture: "/minecraft/blocks/crimson_stem.png" },
            { id: "glow-ink-sac-5", name: "Glow Ink Sac", amount: 256, icon: "◆", texture: "/minecraft/items/glow_ink_sac.png" },
            { id: "terracotta-6", name: "Terracotta", amount: 2048, icon: "◆", texture: "/minecraft/blocks/terracotta.png" },
            { id: "golden-carrot-7", name: "Golden Carrot", amount: 512, icon: "◆", texture: "/minecraft/items/golden_carrot.png" },
            { id: "pigstep-8", name: "Pigstep", amount: 1, icon: "💿", texture: "/minecraft/items/music_disc_pigstep.png" }
            ],
        },
        requiredCurrentBuildings: [],
    },
    "level-24-till-25": {
        currentLevel: { name: "Storhertigdöme", level: 24 },
        nextLevel: {
            name: "Fursterike",
            level: 25,
            href: "/wiki/settlements/settlement-upgrades#niva-25-fursterike",
        },
        changes: [],
        upgradeCost: {
            coins: "52 000 000 Coins",
            materials: [
            { id: "diamond-1", name: "Diamond", amount: 96, icon: "💎", texture: "/minecraft/items/diamond.png" },
            { id: "cocoa-beans-2", name: "Cocoa Beans", amount: 2048, icon: "◆", texture: "/minecraft/items/cocoa_beans.png" },
            { id: "white-wool-3", name: "White Wool", amount: 1024, icon: "◆", texture: "/minecraft/blocks/white_wool.png" },
            { id: "warped-stem-4", name: "Warped Stem", amount: 1536, icon: "🪵", texture: "/minecraft/blocks/warped_stem.png" },
            { id: "nautilus-shell-5", name: "Nautilus Shell", amount: 16, icon: "🐚", texture: "/minecraft/items/nautilus_shell.png" },
            { id: "prismarine-bricks-6", name: "Prismarine Bricks", amount: 1024, icon: "◆", texture: "/minecraft/blocks/prismarine_bricks.png" },
            { id: "phantom-membrane-7", name: "Phantom Membrane", amount: 24, icon: "◆", texture: "/minecraft/items/phantom_membrane.png" },
            ],
        },
        requiredCurrentBuildings: [],
    },
    "level-25-till-26": {
        currentLevel: { name: "Fursterike", level: 25 },
        nextLevel: {
            name: "Kronland",
            level: 26,
            href: "/wiki/settlements/settlement-upgrades#niva-26-kronland",
        },
        changes: [],
        upgradeCost: {
            coins: "62 000 000 Coins",
            materials: [
            { id: "emerald-1", name: "Emerald", amount: 512, icon: "💚", texture: "/minecraft/items/emerald.png" },
            { id: "sugar-cane-2", name: "Sugar Cane", amount: 2048, icon: "🎋", texture: "/minecraft/items/sugar_cane.png" },
            { id: "honey-bottle-3", name: "Honey Bottle", amount: 768, icon: "🍯", texture: "/minecraft/items/honey_bottle.png" },
            { id: "bamboo-4", name: "Bamboo", amount: 2048, icon: "🎋", texture: "/minecraft/items/bamboo.png" },
            { id: "prismarine-crystals-5", name: "Prismarine Crystals", amount: 256, icon: "◆", texture: "/minecraft/items/prismarine_crystals.png" },
            { id: "red-nether-bricks-6", name: "Red Nether Bricks", amount: 1536, icon: "◆", texture: "/minecraft/blocks/red_nether_bricks.png" },
            { id: "potion-of-slow-falling-7", name: "Potion of Slow Falling", amount: 24, icon: "◆", texture: "/minecraft/items/potion.png" },
            { id: "lodestone-8", name: "Lodestone", amount: 1, icon: "◆", texture: "/minecraft/blocks/lodestone_side.png" }
            ],
        },
        requiredCurrentBuildings: [],
    },
    "level-26-till-27": {
        currentLevel: { name: "Kronland", level: 26 },
        nextLevel: {
            name: "Riksland",
            level: 27,
            href: "/wiki/settlements/settlement-upgrades#niva-27-riksland",
        },
        changes: [],
        upgradeCost: {
            coins: "74 000 000 Coins",
            materials: [
            { id: "gold-block-1", name: "Gold Block", amount: 32, icon: "◆", texture: "/minecraft/blocks/gold_block.png" },
            { id: "glow-berries-2", name: "Glow Berries", amount: 2048, icon: "🫐", texture: "/minecraft/items/glow_berries.png" },
            { id: "rabbit-foot-3", name: "Rabbit Foot", amount: 24, icon: "🐇", texture: "/minecraft/items/rabbit_foot.png" },
            { id: "oak-log-4", name: "Oak Log", amount: 2048, icon: "🪵", texture: "/minecraft/blocks/oak_log.png" },
            { id: "cod-5", name: "Cod", amount: 512, icon: "🐟", texture: "/minecraft/items/cod.png" },
            { id: "chiseled-tuff-6", name: "Chiseled Tuff", amount: 1536, icon: "◆", texture: "/minecraft/blocks/chiseled_tuff.png" },
            { id: "potion-of-invisibility-7", name: "Potion of Invisibility", amount: 24, icon: "◆", texture: "/minecraft/items/potion.png" },
            ],
        },
        requiredCurrentBuildings: [],
    },
    "level-27-till-28": {
        currentLevel: { name: "Riksland", level: 27 },
        nextLevel: {
            name: "Förbundsstat",
            level: 28,
            href: "/wiki/settlements/settlement-upgrades#niva-28-forbundsstat",
        },
        changes: [],
        upgradeCost: {
            coins: "88 000 000 Coins",
            materials: [
            { id: "copper-block-1", name: "Copper Block", amount: 192, icon: "◆", texture: "/minecraft/blocks/copper_block.png" },
            { id: "melon-slice-2", name: "Melon Slice", amount: 2560, icon: "🍉", texture: "/minecraft/items/melon_slice.png" },
            { id: "leather-3", name: "Leather", amount: 1024, icon: "🟫", texture: "/minecraft/items/leather.png" },
            { id: "birch-log-4", name: "Birch Log", amount: 2048, icon: "🪵", texture: "/minecraft/blocks/birch_log.png" },
            { id: "salmon-5", name: "Salmon", amount: 512, icon: "🐟", texture: "/minecraft/items/salmon.png" },
            { id: "oxidized-copper-6", name: "Oxidized Copper", amount: 768, icon: "◆", texture: "/minecraft/blocks/oxidized_copper.png" },
            { id: "splash-potion-of-regeneration-7", name: "Splash Potion of Regeneration", amount: 24, icon: "◆", texture: "/minecraft/items/splash_potion.png" },
            { id: "conduit-8", name: "Conduit", amount: 1, icon: "◆", texture: "/minecraft/blocks/conduit.png" }
            ],
        },
        requiredCurrentBuildings: [],
    },
    "level-28-till-29": {
        currentLevel: { name: "Förbundsstat", level: 28 },
        nextLevel: {
            name: "Samvälde",
            level: 29,
            href: "/wiki/settlements/settlement-upgrades#niva-29-samvalde",
        },
        changes: [],
        upgradeCost: {
            coins: "105 000 000 Coins",
            materials: [
            { id: "iron-block-1", name: "Iron Block", amount: 96, icon: "◆", texture: "/minecraft/blocks/iron_block.png" },
            { id: "honeycomb-2", name: "Honeycomb", amount: 1536, icon: "🍯", texture: "/minecraft/items/honeycomb.png" },
            { id: "egg-3", name: "Egg", amount: 1024, icon: "🥚", texture: "/minecraft/items/egg.png" },
            { id: "spruce-log-4", name: "Spruce Log", amount: 2048, icon: "🪵", texture: "/minecraft/blocks/spruce_log.png" },
            { id: "tropical-fish-5", name: "Tropical Fish", amount: 128, icon: "🐠", texture: "/minecraft/items/tropical_fish.png" },
            { id: "black-concrete-6", name: "Black Concrete", amount: 2048, icon: "◆", texture: "/minecraft/blocks/black_concrete.png" },
            { id: "lingering-potion-of-strength-7", name: "Lingering Potion of Strength", amount: 12, icon: "◆", texture: "/minecraft/items/lingering_potion.png" },
            ],
        },
        requiredCurrentBuildings: [],
    },
    "level-29-till-30": {
        currentLevel: { name: "Samvälde", level: 29 },
        nextLevel: {
            name: "Rike",
            level: 30,
            href: "/wiki/settlements/settlement-upgrades#niva-30-rike",
        },
        changes: [],
        upgradeCost: {
            coins: "125 000 000 Coins",
            materials: [
            { id: "ancient-debris-1", name: "Ancient Debris", amount: 24, icon: "◆", texture: "/minecraft/blocks/ancient_debris_top.png" },
            { id: "chorus-fruit-2", name: "Chorus Fruit", amount: 768, icon: "🟣", texture: "/minecraft/items/chorus_fruit.png" },
            { id: "beef-3", name: "Beef", amount: 1024, icon: "🥩", texture: "/minecraft/items/beef.png" },
            { id: "jungle-log-4", name: "Jungle Log", amount: 2048, icon: "🪵", texture: "/minecraft/blocks/jungle_log.png" },
            { id: "nautilus-shell-5", name: "Nautilus Shell", amount: 20, icon: "🐚", texture: "/minecraft/items/nautilus_shell.png" },
            { id: "sea-lantern-6", name: "Sea Lantern", amount: 384, icon: "◆", texture: "/minecraft/blocks/sea_lantern.png" },
            { id: "dragons-breath-7", name: "Dragon's Breath", amount: 24, icon: "🐉" },
            { id: "end-crystal-8", name: "End Crystal", amount: 2, icon: "🔮", texture: "/minecraft/items/end_crystal.png" },
            { id: "nether-star-9", name: "Nether Star", amount: 1, icon: "⭐", texture: "/minecraft/items/nether_star.png" }
            ],
        },
        requiredCurrentBuildings: [],
    },
    "level-30-till-31": {
        currentLevel: { name: "Rike", level: 30 },
        nextLevel: {
            name: "Konungarike",
            level: 31,
            href: "/wiki/settlements/settlement-upgrades#niva-31-konungarike",
        },
        changes: [],
        upgradeCost: {
            coins: "150 000 000 Coins",
            materials: [
            { id: "coal-block-1", name: "Coal Block", amount: 256, icon: "◆", texture: "/minecraft/blocks/coal_block.png" },
            { id: "sweet-berries-2", name: "Sweet Berries", amount: 2560, icon: "🫐", texture: "/minecraft/items/sweet_berries.png" },
            { id: "chicken-3", name: "Chicken", amount: 1024, icon: "🍗", texture: "/minecraft/items/chicken.png" },
            { id: "acacia-log-4", name: "Acacia Log", amount: 2048, icon: "🪵", texture: "/minecraft/blocks/acacia_log.png" },
            { id: "pufferfish-5", name: "Pufferfish", amount: 128, icon: "🐡", texture: "/minecraft/items/pufferfish.png" },
            { id: "copper-bulb-6", name: "Copper Bulb", amount: 384, icon: "◆", texture: "/minecraft/blocks/copper_bulb.png" },
            { id: "potion-of-regeneration-7", name: "Potion of Regeneration", amount: 32, icon: "◆", texture: "/minecraft/items/potion.png" },
            { id: "ominous-bottle-8", name: "Ominous Bottle", amount: 4, icon: "◆", texture: "/minecraft/items/ominous_bottle.png" },
            { id: "totem-9", name: "Totem", amount: 1, icon: "🗿", texture: "/minecraft/items/totem_of_undying.png" }
            ],
        },
        requiredCurrentBuildings: [],
    },
    "level-31-till-32": {
        currentLevel: { name: "Konungarike", level: 31 },
        nextLevel: {
            name: "Kungadöme",
            level: 32,
            href: "/wiki/settlements/settlement-upgrades#niva-32-kungadome",
        },
        changes: [],
        upgradeCost: {
            coins: "180 000 000 Coins",
            materials: [
            { id: "redstone-block-1", name: "Redstone Block", amount: 256, icon: "◆", texture: "/minecraft/blocks/redstone_block.png" },
            { id: "pumpkin-2", name: "Pumpkin", amount: 2560, icon: "🎃", texture: "/minecraft/items/pumpkin_pie.png" },
            { id: "mutton-3", name: "Mutton", amount: 1024, icon: "🥩", texture: "/minecraft/items/mutton.png" },
            { id: "dark-oak-log-4", name: "Dark Oak Log", amount: 2048, icon: "🪵", texture: "/minecraft/blocks/dark_oak_log.png" },
            { id: "prismarine-shard-5", name: "Prismarine Shard", amount: 512, icon: "◆", texture: "/minecraft/items/prismarine_shard.png" },
            { id: "quartz-block-6", name: "Quartz Block", amount: 1024, icon: "◆", texture: "/minecraft/blocks/quartz_block_side.png" },
            { id: "potion-of-strength-7", name: "Potion of Strength", amount: 32, icon: "◆", texture: "/minecraft/items/potion.png" },
            { id: "smithing-template-8", name: "Smithing Template", amount: 1, icon: "◆", texture: "/minecraft/items/rib_armor_trim_smithing_template.png" }
            ],
        },
        requiredCurrentBuildings: [],
    },
    "level-32-till-33": {
        currentLevel: { name: "Kungadöme", level: 32 },
        nextLevel: {
            name: "Storkungadöme",
            level: 33,
            href: "/wiki/settlements/settlement-upgrades#niva-33-storkungadome",
        },
        changes: [],
        upgradeCost: {
            coins: "215 000 000 Coins",
            materials: [
            { id: "lapis-block-1", name: "Lapis Block", amount: 192, icon: "◆", texture: "/minecraft/blocks/lapis_block.png" },
            { id: "bamboo-2", name: "Bamboo", amount: 3072, icon: "🎋", texture: "/minecraft/items/bamboo.png" },
            { id: "honey-bottle-3", name: "Honey Bottle", amount: 1024, icon: "🍯", texture: "/minecraft/items/honey_bottle.png" },
            { id: "mangrove-log-4", name: "Mangrove Log", amount: 2048, icon: "🪵", texture: "/minecraft/blocks/mangrove_log.png" },
            { id: "glow-ink-sac-5", name: "Glow Ink Sac", amount: 384, icon: "◆", texture: "/minecraft/items/glow_ink_sac.png" },
            { id: "tuff-bricks-6", name: "Tuff Bricks", amount: 2048, icon: "◆", texture: "/minecraft/blocks/tuff_bricks.png" },
            { id: "splash-potion-of-swiftness-7", name: "Splash Potion of Swiftness", amount: 24, icon: "◆", texture: "/minecraft/items/splash_potion.png" },
            { id: "echo-shard-8", name: "Echo Shard", amount: 4, icon: "◆", texture: "/minecraft/items/echo_shard.png" }
            ],
        },
        requiredCurrentBuildings: [],
    },
    "level-33-till-34": {
        currentLevel: { name: "Storkungadöme", level: 33 },
        nextLevel: {
            name: "Kronrike",
            level: 34,
            href: "/wiki/settlements/settlement-upgrades#niva-34-kronrike",
        },
        changes: [],
        upgradeCost: {
            coins: "255 000 000 Coins",
            materials: [
            { id: "amethyst-block-1", name: "Amethyst Block", amount: 256, icon: "◆", texture: "/minecraft/blocks/amethyst_block.png" },
            { id: "glow-berries-2", name: "Glow Berries", amount: 2560, icon: "🫐", texture: "/minecraft/items/glow_berries.png" },
            { id: "rabbit-hide-3", name: "Rabbit Hide", amount: 768, icon: "🐇", texture: "/minecraft/items/rabbit_hide.png" },
            { id: "cherry-log-4", name: "Cherry Log", amount: 2048, icon: "🪵", texture: "/minecraft/blocks/cherry_log.png" },
            { id: "nautilus-shell-5", name: "Nautilus Shell", amount: 24, icon: "🐚", texture: "/minecraft/items/nautilus_shell.png" },
            { id: "copper-bulb-6", name: "Copper Bulb", amount: 512, icon: "◆", texture: "/minecraft/blocks/copper_bulb.png" },
            { id: "potion-of-slow-falling-7", name: "Potion of Slow Falling", amount: 32, icon: "◆", texture: "/minecraft/items/potion.png" },
            { id: "disc-fragment-8", name: "Disc Fragment", amount: 5, icon: "◆", texture: "/minecraft/items/disc_fragment_5.png" }
            ],
        },
        requiredCurrentBuildings: [],
    },
    "level-34-till-35": {
        currentLevel: { name: "Kronrike", level: 34 },
        nextLevel: {
            name: "Högkungadöme",
            level: 35,
            href: "/wiki/settlements/settlement-upgrades#niva-35-hogkungadome",
        },
        changes: [],
        upgradeCost: {
            coins: "300 000 000 Coins",
            materials: [
            { id: "diamond-block-1", name: "Diamond Block", amount: 8, icon: "◆", texture: "/minecraft/blocks/diamond_block.png" },
            { id: "hay-bale-2", name: "Hay Bale", amount: 768, icon: "◆", texture: "/minecraft/blocks/hay_block_side.png" },
            { id: "rabbit-foot-3", name: "Rabbit Foot", amount: 32, icon: "🐇", texture: "/minecraft/items/rabbit_foot.png" },
            { id: "pale-oak-log-4", name: "Pale Oak Log", amount: 2048, icon: "🪵", texture: "/minecraft/blocks/pale_oak_log.png" },
            { id: "cod-5", name: "Cod", amount: 768, icon: "🐟", texture: "/minecraft/items/cod.png" },
            { id: "end-stone-bricks-6", name: "End Stone Bricks", amount: 2048, icon: "◆", texture: "/minecraft/blocks/end_stone_bricks.png" },
            { id: "lingering-potion-of-healing-7", name: "Lingering Potion of Healing", amount: 16, icon: "◆", texture: "/minecraft/items/lingering_potion.png" },
            { id: "nether-star-9", name: "Nether Star", amount: 1, icon: "⭐", texture: "/minecraft/items/nether_star.png" }
            ],
        },
        requiredCurrentBuildings: [],
    },
    "level-35-till-36": {
        currentLevel: { name: "Högkungadöme", level: 35 },
        nextLevel: {
            name: "Förbundsrike",
            level: 36,
            href: "/wiki/settlements/settlement-upgrades#niva-36-forbundsrike",
        },
        changes: [],
        upgradeCost: {
            coins: "350 000 000 Coins",
            materials: [
            { id: "emerald-block-1", name: "Emerald Block", amount: 32, icon: "◆", texture: "/minecraft/blocks/emerald_block.png" },
            { id: "cocoa-beans-2", name: "Cocoa Beans", amount: 2560, icon: "◆", texture: "/minecraft/items/cocoa_beans.png" },
            { id: "wool-3", name: "Wool", amount: 1536, icon: "◆", texture: "/minecraft/blocks/white_wool.png" },
            { id: "crimson-stem-4", name: "Crimson Stem", amount: 2048, icon: "🪵", texture: "/minecraft/blocks/crimson_stem.png" },
            { id: "salmon-5", name: "Salmon", amount: 768, icon: "🐟", texture: "/minecraft/items/salmon.png" },
            { id: "purpur-block-6", name: "Purpur Block", amount: 2048, icon: "◆", texture: "/minecraft/blocks/purpur_block.png" },
            { id: "dragons-breath-7", name: "Dragon's Breath", amount: 32, icon: "🐉" },
            { id: "music-disc-creator-8", name: "Music Disc Creator", amount: 1, icon: "💿", texture: "/minecraft/items/music_disc_creator.png" },
            { id: "totem-9", name: "Totem", amount: 2, icon: "🗿", texture: "/minecraft/items/totem_of_undying.png" }
            ],
        },
        requiredCurrentBuildings: [],
    },
    "level-36-till-37": {
        currentLevel: { name: "Förbundsrike", level: 36 },
        nextLevel: {
            name: "Unionsrike",
            level: 37,
            href: "/wiki/settlements/settlement-upgrades#niva-37-unionsrike",
        },
        changes: [],
        upgradeCost: {
            coins: "410 000 000 Coins",
            materials: [
            { id: "gold-block-1", name: "Gold Block", amount: 64, icon: "◆", texture: "/minecraft/blocks/gold_block.png" },
            { id: "glow-berries-2", name: "Glow Berries", amount: 3072, icon: "🫐", texture: "/minecraft/items/glow_berries.png" },
            { id: "leather-3", name: "Leather", amount: 1536, icon: "🟫", texture: "/minecraft/items/leather.png" },
            { id: "warped-stem-4", name: "Warped Stem", amount: 2048, icon: "🪵", texture: "/minecraft/blocks/warped_stem.png" },
            { id: "tropical-fish-5", name: "Tropical Fish", amount: 160, icon: "🐠", texture: "/minecraft/items/tropical_fish.png" },
            { id: "quartz-bricks-6", name: "Quartz Bricks", amount: 2048, icon: "◆", texture: "/minecraft/blocks/quartz_bricks.png" },
            { id: "potion-of-invisibility-7", name: "Potion of Invisibility", amount: 32, icon: "◆", texture: "/minecraft/items/potion.png" },
            { id: "armor-trim-template-8", name: "Armor Trim Template", amount: "2 olika", icon: "◆", texture: "/minecraft/items/rib_armor_trim_smithing_template.png" }
            ],
        },
        requiredCurrentBuildings: [],
    },
    "level-37-till-38": {
        currentLevel: { name: "Unionsrike", level: 37 },
        nextLevel: {
            name: "Storrike",
            level: 38,
            href: "/wiki/settlements/settlement-upgrades#niva-38-storrike",
        },
        changes: [],
        upgradeCost: {
            coins: "475 000 000 Coins",
            materials: [
            { id: "ancient-debris-1", name: "Ancient Debris", amount: 32, icon: "◆", texture: "/minecraft/blocks/ancient_debris_top.png" },
            { id: "chorus-fruit-2", name: "Chorus Fruit", amount: 1024, icon: "🟣", texture: "/minecraft/items/chorus_fruit.png" },
            { id: "honeycomb-3", name: "Honeycomb", amount: 1536, icon: "🍯", texture: "/minecraft/items/honeycomb.png" },
            { id: "bamboo-block-4", name: "Bamboo Block", amount: 2048, icon: "◆", texture: "/minecraft/blocks/bamboo_block.png" },
            { id: "pufferfish-5", name: "Pufferfish", amount: 192, icon: "🐡", texture: "/minecraft/items/pufferfish.png" },
            { id: "prismarine-bricks-6", name: "Prismarine Bricks", amount: 2048, icon: "◆", texture: "/minecraft/blocks/prismarine_bricks.png" },
            { id: "lingering-potion-of-regeneration-7", name: "Lingering Potion of Regeneration", amount: 16, icon: "◆", texture: "/minecraft/items/lingering_potion.png" },
            { id: "recovery-compass-8", name: "Recovery Compass", amount: 1, icon: "🧭", texture: "/minecraft/items/recovery_compass_00.png" },
            ],
        },
        requiredCurrentBuildings: [],
    },
    "level-38-till-39": {
        currentLevel: { name: "Storrike", level: 38 },
        nextLevel: {
            name: "Stormaktsrike",
            level: 39,
            href: "/wiki/settlements/settlement-upgrades#niva-39-stormaktsrike",
        },
        changes: [],
        upgradeCost: {
            coins: "550 000 000 Coins",
            materials: [
            { id: "iron-block-1", name: "Iron Block", amount: 128, icon: "◆", texture: "/minecraft/blocks/iron_block.png" },
            { id: "beetroot-2", name: "Beetroot", amount: 3072, icon: "🫜", texture: "/minecraft/items/beetroot.png" },
            { id: "feather-3", name: "Feather", amount: 1536, icon: "🪶", texture: "/minecraft/items/feather.png" },
            { id: "oak-log-4", name: "Oak Log", amount: 2560, icon: "🪵", texture: "/minecraft/blocks/oak_log.png" },
            { id: "nautilus-shell-5", name: "Nautilus Shell", amount: 32, icon: "🐚", texture: "/minecraft/items/nautilus_shell.png" },
            { id: "oxidized-copper-6", name: "Oxidized Copper", amount: 768, icon: "◆", texture: "/minecraft/blocks/oxidized_copper.png" },
            { id: "splash-potion-of-strength-7", name: "Splash Potion of Strength", amount: 32, icon: "◆", texture: "/minecraft/items/splash_potion.png" },
            { id: "pigstep-8", name: "Pigstep", amount: 1, icon: "💿", texture: "/minecraft/items/music_disc_pigstep.png" },
            { id: "nether-star-9", name: "Nether Star", amount: 1, icon: "⭐", texture: "/minecraft/items/nether_star.png" }
            ],
        },
        requiredCurrentBuildings: [],
    },
    "level-39-till-40": {
        currentLevel: { name: "Stormaktsrike", level: 39 },
        nextLevel: {
            name: "Kejsardöme",
            level: 40,
            href: "/wiki/settlements/settlement-upgrades#niva-40-kejsardome",
        },
        changes: [],
        upgradeCost: {
            coins: "650 000 000 Coins",
            materials: [
            { id: "coal-1", name: "Coal", amount: 1536, icon: "⬛", texture: "/minecraft/items/coal.png" },
            { id: "honey-bottle-2", name: "Honey Bottle", amount: 1536, icon: "🍯", texture: "/minecraft/items/honey_bottle.png" },
            { id: "rabbit-foot-3", name: "Rabbit Foot", amount: 48, icon: "🐇", texture: "/minecraft/items/rabbit_foot.png" },
            { id: "birch-log-4", name: "Birch Log", amount: 2560, icon: "🪵", texture: "/minecraft/blocks/birch_log.png" },
            { id: "prismarine-crystal-5", name: "Prismarine Crystal", amount: 384, icon: "◆", texture: "/minecraft/items/prismarine_crystals.png" },
            { id: "sea-lantern-6", name: "Sea Lantern", amount: 768, icon: "◆", texture: "/minecraft/blocks/sea_lantern.png" },
            { id: "dragons-breath-7", name: "Dragon's Breath", amount: 48, icon: "🐉" },
            { id: "end-crystal-8", name: "End Crystal", amount: 4, icon: "🔮", texture: "/minecraft/items/end_crystal.png" },
            { id: "enchanted-golden-apple-9", name: "Enchanted Golden Apple", amount: 1, icon: "🍎" },
            ],
        },
        requiredCurrentBuildings: [],
    },
    "level-40-till-41": {
        currentLevel: { name: "Kejsardöme", level: 40 },
        nextLevel: {
            name: "Kejsarrike",
            level: 41,
            href: "/wiki/settlements/settlement-upgrades#niva-41-kejsarrike",
        },
        changes: [],
        upgradeCost: {
            coins: "750 000 000 Coins",
            materials: [
            { id: "raw-gold-1", name: "Raw Gold", amount: 1024, icon: "🟨", texture: "/minecraft/items/raw_gold.png" },
            { id: "wheat-2", name: "Wheat", amount: 3072, icon: "🌾", texture: "/minecraft/items/wheat.png" },
            { id: "beef-3", name: "Beef", amount: 1536, icon: "🥩", texture: "/minecraft/items/beef.png" },
            { id: "spruce-log-4", name: "Spruce Log", amount: 2560, icon: "🪵", texture: "/minecraft/blocks/spruce_log.png" },
            { id: "cod-5", name: "Cod", amount: 768, icon: "🐟", texture: "/minecraft/items/cod.png" },
            { id: "tuff-bricks-6", name: "Tuff Bricks", amount: 2560, icon: "◆", texture: "/minecraft/blocks/tuff_bricks.png" },
            { id: "potion-of-healing-7", name: "Potion of Healing", amount: 48, icon: "◆", texture: "/minecraft/items/potion.png" },
            { id: "bell-8", name: "Bell", amount: 8, icon: "◆", texture: "/minecraft/items/bell.png" },
            { id: "totem-9", name: "Totem", amount: 2, icon: "🗿", texture: "/minecraft/items/totem_of_undying.png" }
            ],
        },
        requiredCurrentBuildings: [],
    },
    "level-41-till-42": {
        currentLevel: { name: "Kejsarrike", level: 41 },
        nextLevel: {
            name: "Storkejsardöme",
            level: 42,
            href: "/wiki/settlements/settlement-upgrades#niva-42-storkejsardome",
        },
        changes: [],
        upgradeCost: {
            coins: "875 000 000 Coins",
            materials: [
            { id: "copper-block-1", name: "Copper Block", amount: 384, icon: "◆", texture: "/minecraft/blocks/copper_block.png" },
            { id: "carrot-2", name: "Carrot", amount: 3072, icon: "🥕", texture: "/minecraft/items/carrot.png" },
            { id: "white-wool-3", name: "White Wool", amount: 1536, icon: "◆", texture: "/minecraft/blocks/white_wool.png" },
            { id: "jungle-log-4", name: "Jungle Log", amount: 2560, icon: "🪵", texture: "/minecraft/blocks/jungle_log.png" },
            { id: "salmon-5", name: "Salmon", amount: 768, icon: "🐟", texture: "/minecraft/items/salmon.png" },
            { id: "copper-bulb-6", name: "Copper Bulb", amount: 768, icon: "◆", texture: "/minecraft/blocks/copper_bulb.png" },
            { id: "potion-of-regeneration-7", name: "Potion of Regeneration", amount: 48, icon: "◆", texture: "/minecraft/items/potion.png" },
            ],
        },
        requiredCurrentBuildings: [],
    },
    "level-42-till-43": {
        currentLevel: { name: "Storkejsardöme", level: 42 },
        nextLevel: {
            name: "Högkejsardöme",
            level: 43,
            href: "/wiki/settlements/settlement-upgrades#niva-43-hogkejsardome",
        },
        changes: [],
        upgradeCost: {
            coins: "1 000 000 000 Coins",
            materials: [
            { id: "emerald-block-1", name: "Emerald Block", amount: 48, icon: "◆", texture: "/minecraft/blocks/emerald_block.png" },
            { id: "potato-2", name: "Potato", amount: 3072, icon: "🥔", texture: "/minecraft/items/potato.png" },
            { id: "honeycomb-3", name: "Honeycomb", amount: 1536, icon: "🍯", texture: "/minecraft/items/honeycomb.png" },
            { id: "acacia-log-4", name: "Acacia Log", amount: 2560, icon: "🪵", texture: "/minecraft/blocks/acacia_log.png" },
            { id: "nautilus-shell-5", name: "Nautilus Shell", amount: 32, icon: "🐚", texture: "/minecraft/items/nautilus_shell.png" },
            { id: "quartz-bricks-6", name: "Quartz Bricks", amount: 2560, icon: "◆", texture: "/minecraft/blocks/quartz_bricks.png" },
            { id: "potion-of-strength-7", name: "Potion of Strength", amount: 48, icon: "◆", texture: "/minecraft/items/potion.png" },
            { id: "goat-horn-8", name: "Goat Horn", amount: "2 olika", icon: "📯", texture: "/minecraft/items/goat_horn.png" },
            ],
        },
        requiredCurrentBuildings: [],
    },
    "level-43-till-44": {
        currentLevel: { name: "Högkejsardöme", level: 43 },
        nextLevel: {
            name: "Kronimperium",
            level: 44,
            href: "/wiki/settlements/settlement-upgrades#niva-44-kronimperium",
        },
        changes: [],
        upgradeCost: {
            coins: "1 150 000 000 Coins",
            materials: [
            { id: "ancient-debris-1", name: "Ancient Debris", amount: 48, icon: "◆", texture: "/minecraft/blocks/ancient_debris_top.png" },
            { id: "pumpkin-2", name: "Pumpkin", amount: 3072, icon: "🎃", texture: "/minecraft/items/pumpkin_pie.png" },
            { id: "rabbit-hide-3", name: "Rabbit Hide", amount: 768, icon: "🐇", texture: "/minecraft/items/rabbit_hide.png" },
            { id: "dark-oak-log-4", name: "Dark Oak Log", amount: 2560, icon: "🪵", texture: "/minecraft/blocks/dark_oak_log.png" },
            { id: "tropical-fish-5", name: "Tropical Fish", amount: 192, icon: "🐠", texture: "/minecraft/items/tropical_fish.png" },
            { id: "end-stone-bricks-6", name: "End Stone Bricks", amount: 2560, icon: "◆", texture: "/minecraft/blocks/end_stone_bricks.png" },
            { id: "lingering-potion-of-healing-7", name: "Lingering Potion of Healing", amount: 24, icon: "◆", texture: "/minecraft/items/lingering_potion.png" },
            { id: "music-disc-8", name: "Music Disc", amount: "2 olika", icon: "💿", texture: "/minecraft/items/music_disc_13.png" },
            { id: "enchanted-golden-apple-9", name: "Enchanted Golden Apple", amount: 1, icon: "🍎" }
            ],
        },
        requiredCurrentBuildings: [],
    },
    "level-44-till-45": {
        currentLevel: { name: "Kronimperium", level: 44 },
        nextLevel: {
            name: "Imperialrike",
            level: 45,
            href: "/wiki/settlements/settlement-upgrades#niva-45-imperialrike",
        },
        changes: [],
        upgradeCost: {
            coins: "1 300 000 000 Coins",
            materials: [
            { id: "diamond-block-1", name: "Diamond Block", amount: 24, icon: "◆", texture: "/minecraft/blocks/diamond_block.png" },
            { id: "sugar-cane-2", name: "Sugar Cane", amount: 3072, icon: "🎋", texture: "/minecraft/items/sugar_cane.png" },
            { id: "leather-3", name: "Leather", amount: 1536, icon: "🟫", texture: "/minecraft/items/leather.png" },
            { id: "mangrove-log-4", name: "Mangrove Log", amount: 2560, icon: "🪵", texture: "/minecraft/blocks/mangrove_log.png" },
            { id: "prismarine-shard-5", name: "Prismarine Shard", amount: 768, icon: "◆", texture: "/minecraft/items/prismarine_shard.png" },
            { id: "purpur-block-6", name: "Purpur Block", amount: 2560, icon: "◆", texture: "/minecraft/blocks/purpur_block.png" },
            { id: "dragons-breath-7", name: "Dragon's Breath", amount: 64, icon: "🐉" },
            { id: "armor-trim-template-8", name: "Armor Trim Template", amount: "3 olika", icon: "◆", texture: "/minecraft/items/rib_armor_trim_smithing_template.png" },
            ],
        },
        requiredCurrentBuildings: [],
    },
    "level-45-till-46": {
        currentLevel: { name: "Imperialrike", level: 45 },
        nextLevel: {
            name: "Storimperium",
            level: 46,
            href: "/wiki/settlements/settlement-upgrades#niva-46-storimperium",
        },
        changes: [],
        upgradeCost: {
            coins: "1 475 000 000 Coins",
            materials: [
            { id: "gold-block-1", name: "Gold Block", amount: 96, icon: "◆", texture: "/minecraft/blocks/gold_block.png" },
            { id: "cocoa-beans-2", name: "Cocoa Beans", amount: 3072, icon: "◆", texture: "/minecraft/items/cocoa_beans.png" },
            { id: "rabbit-foot-3", name: "Rabbit Foot", amount: 64, icon: "🐇", texture: "/minecraft/items/rabbit_foot.png" },
            { id: "cherry-log-4", name: "Cherry Log", amount: 2560, icon: "🪵", texture: "/minecraft/blocks/cherry_log.png" },
            { id: "glow-ink-sac-5", name: "Glow Ink Sac", amount: 512, icon: "◆", texture: "/minecraft/items/glow_ink_sac.png" },
            { id: "chiseled-copper-6", name: "Chiseled Copper", amount: 1024, icon: "◆", texture: "/minecraft/blocks/chiseled_copper.png" },
            { id: "splash-potion-of-regeneration-7", name: "Splash Potion of Regeneration", amount: 48, icon: "◆", texture: "/minecraft/items/splash_potion.png" },
            { id: "recovery-compass-8", name: "Recovery Compass", amount: 2, icon: "🧭", texture: "/minecraft/items/recovery_compass_00.png" },
            { id: "totem-9", name: "Totem", amount: 3, icon: "🗿", texture: "/minecraft/items/totem_of_undying.png" }
            ],
        },
        requiredCurrentBuildings: [],
    },
    "level-46-till-47": {
        currentLevel: { name: "Storimperium", level: 46 },
        nextLevel: {
            name: "Högimperium",
            level: 47,
            href: "/wiki/settlements/settlement-upgrades#niva-47-hogimperium",
        },
        changes: [],
        upgradeCost: {
            coins: "1 675 000 000 Coins",
            materials: [
            { id: "emerald-block-1", name: "Emerald Block", amount: 64, icon: "◆", texture: "/minecraft/blocks/emerald_block.png" },
            { id: "glow-berries-2", name: "Glow Berries", amount: 3072, icon: "🫐", texture: "/minecraft/items/glow_berries.png" },
            { id: "honey-bottle-3", name: "Honey Bottle", amount: 1536, icon: "🍯", texture: "/minecraft/items/honey_bottle.png" },
            { id: "pale-oak-log-4", name: "Pale Oak Log", amount: 2560, icon: "🪵", texture: "/minecraft/blocks/pale_oak_log.png" },
            { id: "nautilus-shell-5", name: "Nautilus Shell", amount: 40, icon: "🐚", texture: "/minecraft/items/nautilus_shell.png" },
            { id: "sea-lantern-6", name: "Sea Lantern", amount: 1024, icon: "◆", texture: "/minecraft/blocks/sea_lantern.png" },
            { id: "lingering-potion-of-strength-7", name: "Lingering Potion of Strength", amount: 24, icon: "◆", texture: "/minecraft/items/lingering_potion.png" },
            { id: "echo-shard-8", name: "Echo Shard", amount: 8, icon: "◆", texture: "/minecraft/items/echo_shard.png" },
            { id: "nether-star-9", name: "Nether Star", amount: 1, icon: "⭐", texture: "/minecraft/items/nether_star.png" }
            ],
        },
        requiredCurrentBuildings: [],
    },
    "level-47-till-48": {
        currentLevel: { name: "Högimperium", level: 47 },
        nextLevel: {
            name: "Världsimperium",
            level: 48,
            href: "/wiki/settlements/settlement-upgrades#niva-48-varldsimperium",
        },
        changes: [],
        upgradeCost: {
            coins: "1 900 000 000 Coins",
            materials: [
            { id: "ancient-debris-1", name: "Ancient Debris", amount: 64, icon: "◆", texture: "/minecraft/blocks/ancient_debris_top.png" },
            { id: "chorus-fruit-2", name: "Chorus Fruit", amount: 1536, icon: "🟣", texture: "/minecraft/items/chorus_fruit.png" },
            { id: "white-wool-3", name: "White Wool", amount: 2048, icon: "◆", texture: "/minecraft/blocks/white_wool.png" },
            { id: "crimson-stem-4", name: "Crimson Stem", amount: 2560, icon: "🪵", texture: "/minecraft/blocks/crimson_stem.png" },
            { id: "prismarine-crystals-5", name: "Prismarine Crystals", amount: 512, icon: "◆", texture: "/minecraft/items/prismarine_crystals.png" },
            { id: "black-concrete-6", name: "Black Concrete", amount: 3072, icon: "◆", texture: "/minecraft/blocks/black_concrete.png" },
            { id: "dragons-breath-7", name: "Dragon's Breath", amount: 64, icon: "🐉" },
            { id: "enchanted-golden-apple-8", name: "Enchanted Golden Apple", amount: 1, icon: "🍎" },
            { id: "heavy-core-9", name: "Heavy Core", amount: 1, icon: "⚙️", texture: "/minecraft/blocks/heavy_core.png" },
            ],
        },
        requiredCurrentBuildings: [],
    },
    "level-48-till-49": {
        currentLevel: { name: "Världsimperium", level: 48 },
        nextLevel: {
            name: "Kejsarimperium",
            level: 49,
            href: "/wiki/settlements/settlement-upgrades#niva-49-kejsarimperium",
        },
        changes: [],
        upgradeCost: {
            coins: "2 150 000 000 Coins",
            materials: [
            { id: "diamond-block-1", name: "Diamond Block", amount: 32, icon: "◆", texture: "/minecraft/blocks/diamond_block.png" },
            { id: "honey-bottle-2", name: "Honey Bottle", amount: 2048, icon: "🍯", texture: "/minecraft/items/honey_bottle.png" },
            { id: "rabbit-foot-3", name: "Rabbit Foot", amount: 64, icon: "🐇", texture: "/minecraft/items/rabbit_foot.png" },
            { id: "warped-stem-4", name: "Warped Stem", amount: 2560, icon: "🪵", texture: "/minecraft/blocks/warped_stem.png" },
            { id: "nautilus-shell-5", name: "Nautilus Shell", amount: 48, icon: "🐚", texture: "/minecraft/items/nautilus_shell.png" },
            { id: "copper-bulb-6", name: "Copper Bulb", amount: 1024, icon: "◆", texture: "/minecraft/blocks/copper_bulb.png" },
            { id: "lingering-potion-of-regeneration-7", name: "Lingering Potion of Regeneration", amount: 32, icon: "◆", texture: "/minecraft/items/lingering_potion.png" },
            { id: "armor-trim-template-8", name: "Armor Trim Template", amount: "2 olika", icon: "◆", texture: "/minecraft/items/rib_armor_trim_smithing_template.png" },
            { id: "totem-9", name: "Totem", amount: 2, icon: "🗿", texture: "/minecraft/items/totem_of_undying.png" },
            { id: "nether-star-10", name: "Nether Star", amount: 1, icon: "⭐", texture: "/minecraft/items/nether_star.png" },
            { id: "elytra-11", name: "Elytra", amount: 1, icon: "🪽", texture: "/minecraft/items/elytra.png" }
            ],
        },
        requiredCurrentBuildings: [],
    },
    "level-49-till-50": {
        currentLevel: { name: "Kejsarimperium", level: 49 },
        nextLevel: {
            name: "Imperium",
            level: 50,
            href: "/wiki/settlements/settlement-upgrades#niva-50-imperium",
        },
        changes: [],
        upgradeCost: {
            coins: "2 500 000 000 Coins",
            materials: [
            { id: "diamond-block-1", name: "Diamond Block", amount: 32, icon: "◆", texture: "/minecraft/blocks/diamond_block.png" },
            { id: "golden-carrot-2", name: "Golden Carrot", amount: 1536, icon: "◆", texture: "/minecraft/items/golden_carrot.png" },
            { id: "honey-bottle-3", name: "Honey Bottle", amount: 2048, icon: "🍯", texture: "/minecraft/items/honey_bottle.png" },
            { id: "cherry-log-4", name: "Cherry Log", amount: 3072, icon: "🪵", texture: "/minecraft/blocks/cherry_log.png" },
            { id: "nautilus-shell-5", name: "Nautilus Shell", amount: 48, icon: "🐚", texture: "/minecraft/items/nautilus_shell.png" },
            { id: "sea-lantern-6", name: "Sea Lantern", amount: 1536, icon: "◆", texture: "/minecraft/blocks/sea_lantern.png" },
            { id: "dragons-breath-7", name: "Dragon's Breath", amount: 64, icon: "🐉" },
            { id: "music-disc-8", name: "Music Disc", amount: "2 olika", icon: "💿", texture: "/minecraft/items/music_disc_13.png" },
            { id: "goat-horn-9", name: "Goat Horn", amount: "1 olika", icon: "📯", texture: "/minecraft/items/goat_horn.png" },
            { id: "armor-trim-template-10", name: "Armor Trim Template", amount: "2 olika", icon: "◆", texture: "/minecraft/items/rib_armor_trim_smithing_template.png" },
            { id: "recovery-compass-12", name: "Recovery Compass", amount: 1, icon: "🧭", texture: "/minecraft/items/recovery_compass_00.png" },
            { id: "enchanted-golden-apple-13", name: "Enchanted Golden Apple", amount: 1, icon: "🍎" },
            { id: "elytra-14", name: "Elytra", amount: 1, icon: "🪽", texture: "/minecraft/items/elytra.png" },
            { id: "nether-star-15", name: "Nether Star", amount: 1, icon: "⭐", texture: "/minecraft/items/nether_star.png" },
            { id: "heavy-core-17", name: "Heavy Core", amount: 1, icon: "⚙️", texture: "/minecraft/blocks/heavy_core.png" },
            { id: "trident-18", name: "Trident", amount: 1, icon: "🔱", texture: "/minecraft/items/trident.png" },
            { id: "totem-of-undying-19", name: "Totem of Undying", amount: 2, icon: "🗿", texture: "/minecraft/items/totem_of_undying.png" }
            ],
        },
        requiredCurrentBuildings: [],
    }
};

export function getSettlementUpgrade(
    key: SettlementUpgradeKey,
): SettlementUpgrade | null {
    return settlementUpgrades[key] ?? null;
}

export function isSettlementUpgradeKey(
    value: string,
): value is SettlementUpgradeKey {
    return value in settlementUpgrades;
}

export type {
    SettlementUpgrade,
    SettlementUpgradeChange,
    SettlementUpgradeKey,
    SettlementUpgradeMaterial,
} from "./types";
