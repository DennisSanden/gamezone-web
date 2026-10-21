import { getSettlementLevelBonus } from "./settlement-bonuses";
import Link from "next/link";

import {
    getSettlementUpgrade,
    type SettlementUpgradeKey,
} from "./settlement-upgrades";
import BuildingRequirementsTable from "./BuildingRequirementsTable";
import type { BuildingRequirementKey } from "./building-requirements";

import styles from "./SettlementUpgradePanel.module.css";

type SettlementUpgradePanelProps = {
    upgradeKey: SettlementUpgradeKey;
};

type LevelBuilding = {
    name: string;
    slug: string;
    requirementKey: BuildingRequirementKey;
    license: string;
    bonus: string;
};

const LEVEL_BUILDINGS: Record<number, LevelBuilding> = {
    1: {
        name: "Stadskärna",
        slug: "stadskarna",
        requirementKey: "stadskarna",
        license: "5 000 Coins",
        bonus: "Alla framtida settlementuppgraderingar kostar 5 % mindre Coins.",
    },
    2: {
        name: "Kategoribyggnad",
        slug: "kategoribyggnad",
        requirementKey: "kategoribyggnad",
        license: "10 000 Coins",
        bonus: "Frivilliga specialbonusar beroende på byggnad",
    },
    3: {
        name: "Handelscentrum",
        slug: "handelscentrum",
        requirementKey: "handelscentrum",
        license: "20 000 Coins",
        bonus: "Företag i settlementet får ha 2 aktiva företagskontrakt samtidigt i stället för 1.",
    },
    5: {
        name: "Laboratorium",
        slug: "laboratorium",
        requirementKey: "laboratorium",
        license: "35 000 Coins",
        bonus: "15 % chans att bryggning inte förbrukar Blaze Powder.",
    },
    6: {
        name: "Bank",
        slug: "bank",
        requirementKey: "bank",
        license: "50 000 Coins",
        bonus: "Tillgång till bankfunktionerna i GUI, ekonomisk historik och 10 % billigare företagslicenser.",
    },
    7: {
        name: "Reliktempel",
        slug: "reliktempel",
        requirementKey: "reliktempel",
        license: "50 000 Coins",
        bonus: "Aktiva settlementrelikers produktions- och XP-bonusar blir 10 % starkare.",
    },
    8: {
        name: "Vindhamn",
        slug: "vindhamn",
        requirementKey: "vindhamn",
        license: "100 000 Coins",
        bonus: "20 % chans att en fyrverkeriraket inte förbrukas vid Elytraflygning inom settlementet. Kräver fortfarande level 10 för att använda Elytra.",
    },
    10: {
        name: "Gatukontor",
        slug: "gatukontor",
        requirementKey: "gatukontor",
        license: "5 000 000 Coins",
        bonus: "10 % snabbare gånghastighet på vägar byggda av exempelvis Cobblestone, Stone Bricks och Packed Mud inom settlementet.",
    },
    12: {
        name: "Turistbyrå",
        slug: "turistbyra",
        requirementKey: "turistbyra",
        license: "350 000 Coins",
        bonus: "Settlementet får Coins för unika förstagångsbesökare, med dagligt utbetalningstak.",
    },
    14: {
        name: "Stall",
        slug: "stall",
        requirementKey: "stall",
        license: "500 000 Coins",
        bonus: "Ytterligare 10 % hastighet för hästar, åsnor och mulor, med gemensamt hastighetstak.",
    },
    16: {
        name: "Kontor",
        slug: "kontor",
        requirementKey: "kontor",
        license: "750 000 Coins",
        bonus: "Alla företag i settlementet får 3 extra Shopping Chests.",
    },
    18: {
        name: "Kyrka",
        slug: "kyrka",
        requirementKey: "kyrka",
        license: "1 000 000 Coins",
        bonus: "Alla invånare får 5 % mer Character XP från yrkesaktiviteter.",
    },
    20: {
        name: "Marknadsplats",
        slug: "marknadsplats",
        requirementKey: "marknadsplats",
        license: "1 500 000 Coins",
        bonus: "Behåller sin nuvarande skatterabatt på 10 procentenheter vid handel.",
    },
    22: {
        name: "Myntförvaring",
        slug: "myntforvaring",
        requirementKey: "myntforvaring",
        license: "2 000 000 Coins",
        bonus: "Stadskasseavgiften sänks från 7,5 % till 2,5 %.",
    },
    25: {
        name: "Rådhus",
        slug: "radhus",
        requirementKey: "radhus",
        license: "2 500 000 Coins",
        bonus: "Settlementet får använda en extra aktiv policy. De två extra Lords får man redan på level 12.",
    },
    30: {
        name: "Slott",
        slug: "slott",
        requirementKey: "slott",
        license: "5 000 000 Coins",
        bonus: "Invånarna får genomföra 6 rikskontrakt per vecka i stället för 5.",
    },
    35: {
        name: "Museum",
        slug: "museum",
        requirementKey: "museum",
        license: "8 000 000 Coins",
        bonus: "25 % högre turistintäkter, inom ett gemensamt dagligt tak.",
    },
    40: {
        name: "Rustkammare",
        slug: "rustkammare",
        requirementKey: "rustkammare",
        license: "12 500 000 Coins",
        bonus: "Rustningar förlorar 15 % mindre durability när invånare tar skada av vanliga mobs. Gäller inte events.",
    },
    45: {
        name: "Myntverk",
        slug: "myntverk",
        requirementKey: "myntverk",
        license: "20 000 000 Coins",
        bonus: "Dagliga intäkter från byggnaden, med bonus utifrån faktiskt intjänad stadsskatt. Maximalt 150 000 Coins per dag.",
    },
};


export default function SettlementUpgradePanel({
    upgradeKey,
}: SettlementUpgradePanelProps) {
    const upgrade = getSettlementUpgrade(upgradeKey);

    if (!upgrade) {
        return null;
    }

    const hasMaterials = upgrade.upgradeCost.materials.length > 0;
    const unlockedBonus = getSettlementLevelBonus(upgrade.nextLevel.level);
    const levelBuilding = LEVEL_BUILDINGS[upgrade.nextLevel.level];

    return (
        <section
            className={styles.panel}
            aria-label={`Krav för uppgradering från ${upgrade.currentLevel.name} till ${upgrade.nextLevel.name}`}
        >
            <header className={styles.header}>
                <div>
                    <span className={styles.eyebrow}>Upplåsningskrav</span>

                    <div className={styles.levelPath}>
                        <span className={styles.currentLevel}>
                            {upgrade.currentLevel.name}
                        </span>

                        <span className={styles.arrow} aria-hidden="true">
                            →
                        </span>

                        <Link
                            className={styles.nextLevel}
                            href={upgrade.nextLevel.href}
                        >
                            {upgrade.nextLevel.name}
                        </Link>
                    </div>
                </div>

                <span className={styles.levelBadge}>
                    Nivå {upgrade.nextLevel.level}
                </span>
            </header>

            <div className={styles.content}>
                <section className={styles.section}>
                    <div className={styles.sectionHeader}>
                        <h3>Krav för att låsa upp {upgrade.nextLevel.name}</h3>
                    </div>

                    <div className={styles.upgradeCost}>
                        <div className={styles.coinCost}>
                            <span className={styles.costType}>Coins</span>
                            <strong>{upgrade.upgradeCost.coins}</strong>
                        </div>

                        {hasMaterials && (
                            <div className={styles.materialCost}>
                                <div className={styles.materialHeader}>
                                    <span>Items</span>
                                </div>

                                <div className={styles.materialGrid}>
                                    {upgrade.upgradeCost.materials.map((material) => (
                                        <div
                                            className={styles.materialItem}
                                            key={material.id}
                                        >
                                            <div className={styles.materialIdentity}>
                                                {material.texture ? (
                                                    <span
                                                        className={styles.materialEmoji}
                                                        aria-hidden="true"
                                                    >
                                                        <img
                                                            className={styles.materialBlockIcon}
                                                            src={material.texture}
                                                            alt=""
                                                        />
                                                    </span>
                                                ) : (
                                                    <span
                                                        className={styles.materialEmoji}
                                                        aria-hidden="true"
                                                    >
                                                        {material.icon}
                                                    </span>
                                                )}

                                                <span className={styles.materialName}>
                                                    {material.name}
                                                </span>
                                            </div>

                                            <strong className={styles.materialAmount}>
                                                ×{material.amount}
                                            </strong>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                </section>

                {unlockedBonus && (
                    <section className={styles.section}>
                        <div className={styles.sectionHeader}>
                            <h3>{unlockedBonus.milestone ? "Stor milstolpe" : "Ny nivåbonus"}, level {upgrade.nextLevel.level}</h3>
                        </div>
                        <p>{unlockedBonus.description}</p>
                        {upgrade.nextLevel.level === 43 && <p>Den spelarunika Villager-rabatten är ännu inte verifierad som färdig Engine-funktion.</p>}
                    </section>
                )}
                {levelBuilding && (
                    <section className={`${styles.section} ${styles.buildingSection}`}>
                        <div className={styles.buildingHeading}>
                            <div>
                                <span className={styles.sectionLabel}>
                                    Byggnad på nivå {upgrade.nextLevel.level}
                                </span>
                                <h3>
                                    <Link href={`/wiki/buildings/${levelBuilding.slug}`}>
                                        {levelBuilding.name}
                                    </Link>
                                </h3>
                                <p>
                                    När settlementet når nivå {upgrade.nextLevel.level} kan byggnaden
                                    licensieras och uppföras. Byggnaden har egna fysiska byggnadskrav, men byggnader krävs aldrig
                                    för att avancera settlementnivå.
                                    {levelBuilding.requirementKey === "laboratorium" &&
                                        " Laboratorium gäller endast Alkemi och är inte ett generellt levelkrav."}
                                </p>
                            </div>

                            <Link
                                className={styles.buildingLink}
                                href={`/wiki/buildings/${levelBuilding.slug}`}
                            >
                                Öppna byggnadsguiden →
                            </Link>
                        </div>

                        <div className={styles.buildingFacts}>
                            <div>
                                <span>Licens</span>
                                <strong>{levelBuilding.license}</strong>
                            </div>
                            <div>
                                <span>Bonus</span>
                                <strong>{levelBuilding.bonus}</strong>
                            </div>
                        </div>

                        <BuildingRequirementsTable building={levelBuilding.requirementKey} />
                    </section>
                )}
            </div>
        </section>
    );
}
