export type SettlementBuildingGroup =
    | "lager"
    | "by"
    | "bosattning"
    | "samhalle"
    | "koping"
    | "stad"
    | "handelsstad"
    | "fastning"
    | "huvudstad"
    | "grevskap"
    | "hertigdome"
    | "nation"
    | "kungadome"
    | "imperium";

export type SettlementBuildingMaterial = {
    id: string;
    name: string;
    amount: number;
    icon: string;
};

export type SettlementBuilding = {
    id: string;
    name: string;
    category: string;
    description: string;
    effect: string;
    cost: string;
    unlockLevel: number;
    materials: SettlementBuildingMaterial[];
    materialNote?: string;
    href?: string;
};

const settlementBuildings: Record<
    SettlementBuildingGroup,
    SettlementBuilding[]
> = {
    lager: [
        {
            id: "gruva",
            name: "Gruva",
            category: "Gruvdrift",
            description:
                "Förstärker settlementets produktion från gruvdrift och resurser som registreras i Mining Registry.",
            effect: "+5 % Coins från Gruvdrift",
            cost: "2 500 Coins",
            unlockLevel: 2,
            materials: [],
            materialNote:
                "Byggnadens materialkrav är ännu inte fastställda i den officiella referensen.",
            href: "/wiki/settlements/lager#byggnader",
        },
        {
            id: "lada",
            name: "Lada",
            category: "Jordbruk",
            description:
                "Förstärker settlementets produktion från jordbruk och resurser som registreras i Farming Registry.",
            effect: "+5 % Coins från Jordbruk",
            cost: "2 500 Coins",
            unlockLevel: 2,
            materials: [
                {
                    id: "iron-ingots",
                    name: "Iron Ingots",
                    amount: 32,
                    icon: "⚙️",
                },
                {
                    id: "hay-bales",
                    name: "Hay Bales",
                    amount: 64,
                    icon: "🌾",
                },
                {
                    id: "carrots",
                    name: "Carrots",
                    amount: 64,
                    icon: "🥕",
                },
                {
                    id: "leather",
                    name: "Leather",
                    amount: 64,
                    icon: "🟫",
                },
                {
                    id: "spruce-logs",
                    name: "Spruce Logs",
                    amount: 128,
                    icon: "🪵",
                },
                {
                    id: "oak-fences",
                    name: "Oak Fences",
                    amount: 64,
                    icon: "🪵",
                },
                {
                    id: "salmon",
                    name: "Salmon",
                    amount: 32,
                    icon: "🐟",
                },
            ],
            href: "/wiki/settlements/lager#byggnader",
        },
        {
            id: "ladugard",
            name: "Ladugård",
            category: "Boskap",
            description:
                "Förstärker settlementets produktion från boskap och resurser som registreras i Livestock Registry.",
            effect: "+5 % Coins från Boskap",
            cost: "2 500 Coins",
            unlockLevel: 2,
            materials: [
                {
                    id: "iron-ingots",
                    name: "Iron Ingots",
                    amount: 32,
                    icon: "⚙️",
                },
                {
                    id: "wheat",
                    name: "Wheat",
                    amount: 128,
                    icon: "🌾",
                },
                {
                    id: "hay-bales",
                    name: "Hay Bales",
                    amount: 64,
                    icon: "🌾",
                },
                {
                    id: "leather",
                    name: "Leather",
                    amount: 64,
                    icon: "🟫",
                },
                {
                    id: "beef",
                    name: "Beef",
                    amount: 32,
                    icon: "🥩",
                },
                {
                    id: "oak-logs",
                    name: "Oak Logs",
                    amount: 128,
                    icon: "🪵",
                },
                {
                    id: "oak-planks",
                    name: "Oak Planks",
                    amount: 128,
                    icon: "🪵",
                },
                {
                    id: "cod",
                    name: "Cod",
                    amount: 32,
                    icon: "🐟",
                },
            ],
            href: "/wiki/settlements/lager#byggnader",
        },
        {
            id: "fiskebrygga",
            name: "Fiskebrygga",
            category: "Fiske",
            description:
                "Förstärker settlementets produktion från fiske och resurser som registreras i Fishing Registry.",
            effect: "+5 % Coins från Fiske",
            cost: "2 500 Coins",
            unlockLevel: 2,
            materials: [
                {
                    id: "iron-ingots",
                    name: "Iron Ingots",
                    amount: 16,
                    icon: "⚙️",
                },
                {
                    id: "wheat",
                    name: "Wheat",
                    amount: 64,
                    icon: "🌾",
                },
                {
                    id: "leather",
                    name: "Leather",
                    amount: 32,
                    icon: "🟫",
                },
                {
                    id: "oak-logs",
                    name: "Oak Logs",
                    amount: 128,
                    icon: "🪵",
                },
                {
                    id: "spruce-logs",
                    name: "Spruce Logs",
                    amount: 64,
                    icon: "🪵",
                },
                {
                    id: "oak-planks",
                    name: "Oak Planks",
                    amount: 128,
                    icon: "🪵",
                },
                {
                    id: "cod",
                    name: "Cod",
                    amount: 64,
                    icon: "🐟",
                },
                {
                    id: "salmon",
                    name: "Salmon",
                    amount: 64,
                    icon: "🐟",
                },
            ],
            href: "/wiki/settlements/lager#byggnader",
        },
        {
            id: "sagverk",
            name: "Sågverk",
            category: "Skogsbruk",
            description:
                "Förstärker settlementets produktion från skogsbruk och resurser som registreras i Forestry Registry.",
            effect: "+5 % Coins från Skogsbruk",
            cost: "2 500 Coins",
            unlockLevel: 2,
            materials: [
                {
                    id: "iron-ingots",
                    name: "Iron Ingots",
                    amount: 32,
                    icon: "⚙️",
                },
                {
                    id: "apples",
                    name: "Apples",
                    amount: 64,
                    icon: "🍎",
                },
                {
                    id: "leather",
                    name: "Leather",
                    amount: 32,
                    icon: "🟫",
                },
                {
                    id: "oak-logs",
                    name: "Oak Logs",
                    amount: 256,
                    icon: "🪵",
                },
                {
                    id: "birch-logs",
                    name: "Birch Logs",
                    amount: 128,
                    icon: "🪵",
                },
                {
                    id: "spruce-logs",
                    name: "Spruce Logs",
                    amount: 128,
                    icon: "🪵",
                },
                {
                    id: "stone-bricks",
                    name: "Stone Bricks",
                    amount: 128,
                    icon: "🧱",
                },
                {
                    id: "cod",
                    name: "Cod",
                    amount: 32,
                    icon: "🐟",
                },
            ],
            href: "/wiki/settlements/lager#byggnader",
        },
        {
            id: "stenhuggeri",
            name: "Stenhuggeri",
            category: "Byggmaterial",
            description:
                "Förstärker settlementets produktion från resurser som registreras i Building Materials Registry.",
            effect: "+5 % Coins från Byggmaterial",
            cost: "2 500 Coins",
            unlockLevel: 2,
            materials: [
                {
                    id: "iron-ingots",
                    name: "Iron Ingots",
                    amount: 64,
                    icon: "⚙️",
                },
                {
                    id: "coal",
                    name: "Coal",
                    amount: 64,
                    icon: "⬛",
                },
                {
                    id: "potatoes",
                    name: "Potatoes",
                    amount: 64,
                    icon: "🥔",
                },
                {
                    id: "leather",
                    name: "Leather",
                    amount: 32,
                    icon: "🟫",
                },
                {
                    id: "oak-logs",
                    name: "Oak Logs",
                    amount: 64,
                    icon: "🪵",
                },
                {
                    id: "salmon",
                    name: "Salmon",
                    amount: 32,
                    icon: "🐟",
                },
                {
                    id: "stone",
                    name: "Stone",
                    amount: 512,
                    icon: "🪨",
                },
                {
                    id: "cobblestone",
                    name: "Cobblestone",
                    amount: 256,
                    icon: "🪨",
                },
                {
                    id: "smooth-stone",
                    name: "Smooth Stone",
                    amount: 64,
                    icon: "🪨",
                },
            ],
            href: "/wiki/settlements/lager#byggnader",
        },
    ],

    by: [
        {
            id: "handelscentrum",
            name: "Handelscentrum",
            category: "Administration",
            description:
                "Låser upp möjligheten för settlementets invånare att registrera företag inom settlementet.",
            effect: "Låser upp företagsregistrering",
            cost: "10 000 Coins",
            unlockLevel: 3,
            materials: [
                {
                    id: "gold-ingots",
                    name: "Gold Ingots",
                    amount: 64,
                    icon: "🟨",
                },
                {
                    id: "bread",
                    name: "Bread",
                    amount: 128,
                    icon: "🍞",
                },
                {
                    id: "pumpkins",
                    name: "Pumpkins",
                    amount: 64,
                    icon: "🎃",
                },
                {
                    id: "leather",
                    name: "Leather",
                    amount: 64,
                    icon: "🟫",
                },
                {
                    id: "white-wool",
                    name: "White Wool",
                    amount: 64,
                    icon: "⬜",
                },
                {
                    id: "oak-logs",
                    name: "Oak Logs",
                    amount: 128,
                    icon: "🪵",
                },
                {
                    id: "birch-logs",
                    name: "Birch Logs",
                    amount: 128,
                    icon: "🪵",
                },
                {
                    id: "cod",
                    name: "Cod",
                    amount: 64,
                    icon: "🐟",
                },
                {
                    id: "bricks",
                    name: "Bricks",
                    amount: 256,
                    icon: "🧱",
                },
                {
                    id: "glass",
                    name: "Glass",
                    amount: 128,
                    icon: "🔷",
                },
            ],
            href: "/wiki/settlements/by#byggnader",
        },
    ],

    bosattning: [
        {
            id: "bank",
            name: "Bank",
            category: "Ekonomi",
            description:
                "Låser upp utökad ekonomisk statistik och ger settlementets ledning en mer detaljerad överblick över ekonomins utveckling.",
            effect: "Låser upp utökad ekonomisk statistik",
            cost: "25 000 Coins",
            unlockLevel: 4,
            materials: [
                {
                    id: "gold-ingots",
                    name: "Gold Ingots",
                    amount: 128,
                    icon: "🟨",
                },
                {
                    id: "emeralds",
                    name: "Emeralds",
                    amount: 32,
                    icon: "💚",
                },
                {
                    id: "bread",
                    name: "Bread",
                    amount: 128,
                    icon: "🍞",
                },
                {
                    id: "beetroot",
                    name: "Beetroot",
                    amount: 128,
                    icon: "🫜",
                },
                {
                    id: "cooked-beef",
                    name: "Cooked Beef",
                    amount: 128,
                    icon: "🥩",
                },
                {
                    id: "dark-oak-logs",
                    name: "Dark Oak Logs",
                    amount: 128,
                    icon: "🪵",
                },
                {
                    id: "spruce-logs",
                    name: "Spruce Logs",
                    amount: 128,
                    icon: "🪵",
                },
                {
                    id: "salmon",
                    name: "Salmon",
                    amount: 128,
                    icon: "🐟",
                },
                {
                    id: "stone-bricks",
                    name: "Stone Bricks",
                    amount: 512,
                    icon: "🧱",
                },
                {
                    id: "deepslate-bricks",
                    name: "Deepslate Bricks",
                    amount: 128,
                    icon: "🧱",
                },
            ],
            href: "/wiki/settlements/bosattning#byggnader",
        },
    ],

    samhalle: [
        {
            id: "laboratorium",
            name: "Laboratorium",
            category: "Alkemi",
            description:
                "Förstärker settlementets produktion från alkemi och resurser som registreras i Alchemy Registry.",
            effect: "+5 % Coins från Alkemi",
            cost: "2 500 Coins",
            unlockLevel: 5,
            materials: [
                {
                    id: "gold-ingots",
                    name: "Gold Ingots",
                    amount: 32,
                    icon: "🟨",
                },
                {
                    id: "sugar-cane",
                    name: "Sugar Cane",
                    amount: 64,
                    icon: "🌿",
                },
                {
                    id: "leather",
                    name: "Leather",
                    amount: 32,
                    icon: "🟫",
                },
                {
                    id: "dark-oak-logs",
                    name: "Dark Oak Logs",
                    amount: 64,
                    icon: "🪵",
                },
                {
                    id: "pufferfish",
                    name: "Pufferfish",
                    amount: 32,
                    icon: "🐡",
                },
                {
                    id: "stone-bricks",
                    name: "Stone Bricks",
                    amount: 256,
                    icon: "🧱",
                },
                {
                    id: "glass",
                    name: "Glass",
                    amount: 64,
                    icon: "🔷",
                },
            ],
            href: "/wiki/settlements/samhalle#byggnader",
        },
    ],

    koping: [
        {
            id: "kyrka",
            name: "Kyrka",
            category: "Specialbyggnad",
            description:
                "Ger settlementets aktiva medlemmar en permanent bonus från all registrerad manuell produktion.",
            effect:
                "+10 % Coins från all registrerad manuell produktion",
            cost: "75 000 Coins",
            unlockLevel: 6,
            materials: [
                {
                    id: "gold-blocks",
                    name: "Gold Blocks",
                    amount: 32,
                    icon: "🟨",
                },
                {
                    id: "bread",
                    name: "Bread",
                    amount: 256,
                    icon: "🍞",
                },
                {
                    id: "wheat",
                    name: "Wheat",
                    amount: 128,
                    icon: "🌾",
                },
                {
                    id: "white-wool",
                    name: "White Wool",
                    amount: 256,
                    icon: "⬜",
                },
                {
                    id: "spruce-logs",
                    name: "Spruce Logs",
                    amount: 256,
                    icon: "🪵",
                },
                {
                    id: "birch-logs",
                    name: "Birch Logs",
                    amount: 256,
                    icon: "🪵",
                },
                {
                    id: "salmon",
                    name: "Salmon",
                    amount: 128,
                    icon: "🐟",
                },
                {
                    id: "stone-bricks",
                    name: "Stone Bricks",
                    amount: 1024,
                    icon: "🧱",
                },
                {
                    id: "quartz-blocks",
                    name: "Quartz Blocks",
                    amount: 256,
                    icon: "⬜",
                },
                {
                    id: "nether-wart",
                    name: "Nether Wart",
                    amount: 128,
                    icon: "🍄",
                },
                {
                    id: "glowstone-dust",
                    name: "Glowstone Dust",
                    amount: 64,
                    icon: "✨",
                },
            ],
            href: "/wiki/settlements/koping#byggnader",
        },
    ],

    stad: [],

    handelsstad: [
        {
            id: "marknadsplats",
            name: "Marknadsplats",
            category: "Ekonomi och handel",
            description:
                "Representerar settlementets utvecklade handelsinfrastruktur och marknadsfunktioner.",
            effect: "Marknadsfunktioner",
            cost: "150 000 Coins",
            unlockLevel: 8,
            materials: [
                {
                    id: "emerald-blocks",
                    name: "Emerald Blocks",
                    amount: 32,
                    icon: "💚",
                },
                {
                    id: "gold-blocks",
                    name: "Gold Blocks",
                    amount: 16,
                    icon: "🟨",
                },
                {
                    id: "bread",
                    name: "Bread",
                    amount: 256,
                    icon: "🍞",
                },
                {
                    id: "carrots",
                    name: "Carrots",
                    amount: 128,
                    icon: "🥕",
                },
                {
                    id: "potatoes",
                    name: "Potatoes",
                    amount: 128,
                    icon: "🥔",
                },
                {
                    id: "pumpkins",
                    name: "Pumpkins",
                    amount: 128,
                    icon: "🎃",
                },
                {
                    id: "melons",
                    name: "Melons",
                    amount: 128,
                    icon: "🍉",
                },
                {
                    id: "cooked-beef",
                    name: "Cooked Beef",
                    amount: 128,
                    icon: "🥩",
                },
                {
                    id: "cooked-chicken",
                    name: "Cooked Chicken",
                    amount: 128,
                    icon: "🍗",
                },
                {
                    id: "oak-logs",
                    name: "Oak Logs",
                    amount: 256,
                    icon: "🪵",
                },
                {
                    id: "birch-logs",
                    name: "Birch Logs",
                    amount: 256,
                    icon: "🪵",
                },
                {
                    id: "spruce-logs",
                    name: "Spruce Logs",
                    amount: 256,
                    icon: "🪵",
                },
                {
                    id: "jungle-logs",
                    name: "Jungle Logs",
                    amount: 128,
                    icon: "🪵",
                },
                {
                    id: "cod",
                    name: "Cod",
                    amount: 128,
                    icon: "🐟",
                },
                {
                    id: "salmon",
                    name: "Salmon",
                    amount: 128,
                    icon: "🐟",
                },
                {
                    id: "pufferfish",
                    name: "Pufferfish",
                    amount: 64,
                    icon: "🐡",
                },
                {
                    id: "stone-bricks",
                    name: "Stone Bricks",
                    amount: 1024,
                    icon: "🧱",
                },
                {
                    id: "bricks",
                    name: "Bricks",
                    amount: 256,
                    icon: "🧱",
                },
                {
                    id: "glass",
                    name: "Glass",
                    amount: 128,
                    icon: "🔷",
                },
                {
                    id: "nether-wart",
                    name: "Nether Wart",
                    amount: 128,
                    icon: "🍄",
                },
                {
                    id: "blaze-powder",
                    name: "Blaze Powder",
                    amount: 64,
                    icon: "🔥",
                },
            ],
            href: "/wiki/settlements/handelsstad#byggnader",
        },
    ],

    fastning: [],

    huvudstad: [
        {
            id: "monument",
            name: "Monument",
            category: "Specialbyggnad",
            description:
                "Ett monumentalt byggprojekt som ger settlementets aktiva medlemmar en permanent bonus från all registrerad manuell produktion.",
            effect:
                "+10 % Coins från all registrerad manuell produktion",
            cost: "400 000 Coins",
            unlockLevel: 10,
            materials: [
                {
                    id: "diamond-blocks",
                    name: "Diamond Blocks",
                    amount: 16,
                    icon: "💎",
                },
                {
                    id: "gold-blocks",
                    name: "Gold Blocks",
                    amount: 32,
                    icon: "🟨",
                },
                {
                    id: "emerald-blocks",
                    name: "Emerald Blocks",
                    amount: 16,
                    icon: "💚",
                },
                {
                    id: "bread",
                    name: "Bread",
                    amount: 512,
                    icon: "🍞",
                },
                {
                    id: "wheat",
                    name: "Wheat",
                    amount: 256,
                    icon: "🌾",
                },
                {
                    id: "carrots",
                    name: "Carrots",
                    amount: 256,
                    icon: "🥕",
                },
                {
                    id: "potatoes",
                    name: "Potatoes",
                    amount: 256,
                    icon: "🥔",
                },
                {
                    id: "leather",
                    name: "Leather",
                    amount: 256,
                    icon: "🟫",
                },
                {
                    id: "white-wool",
                    name: "White Wool",
                    amount: 256,
                    icon: "⬜",
                },
                {
                    id: "cooked-beef",
                    name: "Cooked Beef",
                    amount: 256,
                    icon: "🥩",
                },
                {
                    id: "oak-logs",
                    name: "Oak Logs",
                    amount: 512,
                    icon: "🪵",
                },
                {
                    id: "spruce-logs",
                    name: "Spruce Logs",
                    amount: 512,
                    icon: "🪵",
                },
                {
                    id: "birch-logs",
                    name: "Birch Logs",
                    amount: 512,
                    icon: "🪵",
                },
                {
                    id: "dark-oak-logs",
                    name: "Dark Oak Logs",
                    amount: 512,
                    icon: "🪵",
                },
                {
                    id: "cod",
                    name: "Cod",
                    amount: 256,
                    icon: "🐟",
                },
                {
                    id: "salmon",
                    name: "Salmon",
                    amount: 256,
                    icon: "🐟",
                },
                {
                    id: "pufferfish",
                    name: "Pufferfish",
                    amount: 128,
                    icon: "🐡",
                },
                {
                    id: "stone-bricks",
                    name: "Stone Bricks",
                    amount: 2048,
                    icon: "🧱",
                },
                {
                    id: "quartz-blocks",
                    name: "Quartz Blocks",
                    amount: 512,
                    icon: "⬜",
                },
                {
                    id: "nether-wart",
                    name: "Nether Wart",
                    amount: 256,
                    icon: "🍄",
                },
                {
                    id: "blaze-powder",
                    name: "Blaze Powder",
                    amount: 128,
                    icon: "🔥",
                },
                {
                    id: "glowstone-dust",
                    name: "Glowstone Dust",
                    amount: 64,
                    icon: "✨",
                },
                {
                    id: "ghast-tears",
                    name: "Ghast Tears",
                    amount: 32,
                    icon: "💧",
                },
            ],
            href: "/wiki/settlements/huvudstad#byggnader",
        },
    ],

    grevskap: [],

    hertigdome: [
        {
            id: "slott",
            name: "Slott",
            category: "Prestigebyggnad",
            description:
                "Ett stort permanent byggprojekt som representerar settlementets politiska och territoriella utveckling.",
            effect: "Ingen direkt spelbonus",
            cost: "1 000 000 Coins",
            unlockLevel: 12,
            materials: [
                {
                    id: "diamond-blocks",
                    name: "Diamond Blocks",
                    amount: 32,
                    icon: "💎",
                },
                {
                    id: "netherite-ingots",
                    name: "Netherite Ingots",
                    amount: 32,
                    icon: "⬛",
                },
                {
                    id: "bread",
                    name: "Bread",
                    amount: 512,
                    icon: "🍞",
                },
                {
                    id: "wheat",
                    name: "Wheat",
                    amount: 256,
                    icon: "🌾",
                },
                {
                    id: "pumpkins",
                    name: "Pumpkins",
                    amount: 256,
                    icon: "🎃",
                },
                {
                    id: "melons",
                    name: "Melons",
                    amount: 256,
                    icon: "🍉",
                },
                {
                    id: "leather",
                    name: "Leather",
                    amount: 512,
                    icon: "🟫",
                },
                {
                    id: "cooked-beef",
                    name: "Cooked Beef",
                    amount: 256,
                    icon: "🥩",
                },
                {
                    id: "white-wool",
                    name: "White Wool",
                    amount: 256,
                    icon: "⬜",
                },
                {
                    id: "oak-logs",
                    name: "Oak Logs",
                    amount: 1024,
                    icon: "🪵",
                },
                {
                    id: "spruce-logs",
                    name: "Spruce Logs",
                    amount: 1024,
                    icon: "🪵",
                },
                {
                    id: "birch-logs",
                    name: "Birch Logs",
                    amount: 1024,
                    icon: "🪵",
                },
                {
                    id: "dark-oak-logs",
                    name: "Dark Oak Logs",
                    amount: 1024,
                    icon: "🪵",
                },
                {
                    id: "cod",
                    name: "Cod",
                    amount: 256,
                    icon: "🐟",
                },
                {
                    id: "salmon",
                    name: "Salmon",
                    amount: 256,
                    icon: "🐟",
                },
                {
                    id: "stone-bricks",
                    name: "Stone Bricks",
                    amount: 4096,
                    icon: "🧱",
                },
                {
                    id: "deepslate-bricks",
                    name: "Deepslate Bricks",
                    amount: 1024,
                    icon: "🧱",
                },
                {
                    id: "quartz-blocks",
                    name: "Quartz Blocks",
                    amount: 512,
                    icon: "⬜",
                },
                {
                    id: "nether-wart",
                    name: "Nether Wart",
                    amount: 512,
                    icon: "🍄",
                },
                {
                    id: "ghast-tears",
                    name: "Ghast Tears",
                    amount: 128,
                    icon: "💧",
                },
            ],
            href: "/wiki/settlements/hertigdome#byggnader",
        },
    ],

    nation: [],

    kungadome: [],

    imperium: [
        {
            id: "underverk",
            name: "Underverk",
            category: "Prestigebyggnad",
            description:
                "Det största permanenta byggprojektet i GameZone och slutpunkten för settlementets byggnadsprogression.",
            effect: "+10 % ränta på stadskassan",
            cost: "5 000 000 Coins",
            unlockLevel: 15,
            materials: [
                {
                    id: "diamond-blocks",
                    name: "Diamond Blocks",
                    amount: 64,
                    icon: "💎",
                },
                {
                    id: "netherite-ingots",
                    name: "Netherite Ingots",
                    amount: 64,
                    icon: "⬛",
                },
                {
                    id: "emerald-blocks",
                    name: "Emerald Blocks",
                    amount: 64,
                    icon: "💚",
                },
                {
                    id: "bread",
                    name: "Bread",
                    amount: 1024,
                    icon: "🍞",
                },
                {
                    id: "wheat",
                    name: "Wheat",
                    amount: 512,
                    icon: "🌾",
                },
                {
                    id: "carrots",
                    name: "Carrots",
                    amount: 512,
                    icon: "🥕",
                },
                {
                    id: "potatoes",
                    name: "Potatoes",
                    amount: 512,
                    icon: "🥔",
                },
                {
                    id: "pumpkins",
                    name: "Pumpkins",
                    amount: 512,
                    icon: "🎃",
                },
                {
                    id: "melons",
                    name: "Melons",
                    amount: 512,
                    icon: "🍉",
                },
                {
                    id: "leather",
                    name: "Leather",
                    amount: 1024,
                    icon: "🟫",
                },
                {
                    id: "white-wool",
                    name: "White Wool",
                    amount: 512,
                    icon: "⬜",
                },
                {
                    id: "cooked-beef",
                    name: "Cooked Beef",
                    amount: 512,
                    icon: "🥩",
                },
                {
                    id: "cooked-chicken",
                    name: "Cooked Chicken",
                    amount: 512,
                    icon: "🍗",
                },
                {
                    id: "oak-logs",
                    name: "Oak Logs",
                    amount: 2048,
                    icon: "🪵",
                },
                {
                    id: "spruce-logs",
                    name: "Spruce Logs",
                    amount: 2048,
                    icon: "🪵",
                },
                {
                    id: "birch-logs",
                    name: "Birch Logs",
                    amount: 2048,
                    icon: "🪵",
                },
                {
                    id: "dark-oak-logs",
                    name: "Dark Oak Logs",
                    amount: 2048,
                    icon: "🪵",
                },
                {
                    id: "cod",
                    name: "Cod",
                    amount: 512,
                    icon: "🐟",
                },
                {
                    id: "salmon",
                    name: "Salmon",
                    amount: 512,
                    icon: "🐟",
                },
                {
                    id: "pufferfish",
                    name: "Pufferfish",
                    amount: 512,
                    icon: "🐡",
                },
                {
                    id: "stone-bricks",
                    name: "Stone Bricks",
                    amount: 8192,
                    icon: "🧱",
                },
                {
                    id: "quartz-blocks",
                    name: "Quartz Blocks",
                    amount: 2048,
                    icon: "⬜",
                },
                {
                    id: "deepslate-bricks",
                    name: "Deepslate Bricks",
                    amount: 1024,
                    icon: "🧱",
                },
                {
                    id: "nether-wart",
                    name: "Nether Wart",
                    amount: 512,
                    icon: "🍄",
                },
                {
                    id: "blaze-powder",
                    name: "Blaze Powder",
                    amount: 256,
                    icon: "🔥",
                },
                {
                    id: "glowstone-dust",
                    name: "Glowstone Dust",
                    amount: 256,
                    icon: "✨",
                },
                {
                    id: "ghast-tears",
                    name: "Ghast Tears",
                    amount: 128,
                    icon: "💧",
                },
            ],
            href: "/wiki/settlements/imperium#byggnader",
        },
    ],
};

export function getSettlementBuildings(
    group: SettlementBuildingGroup,
): SettlementBuilding[] {
    return settlementBuildings[group] ?? [];
}

export function isSettlementBuildingGroup(
    value: string,
): value is SettlementBuildingGroup {
    return value in settlementBuildings;
}