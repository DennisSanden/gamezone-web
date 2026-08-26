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
        bonus: "Grundbyggnad, krävs för nivå 2",
    },
    2: {
        name: "Kategoribyggnad",
        slug: "kategoribyggnad",
        requirementKey: "kategoribyggnad",
        license: "10 000 Coins",
        bonus: "Aktiverar Coins och +5 % i aktiv kategori",
    },
    3: {
        name: "Handelscentrum",
        slug: "handelscentrum",
        requirementKey: "handelscentrum",
        license: "20 000 Coins",
        bonus: "Låser upp företag och krävs för nivå 4",
    },
    5: {
        name: "Laboratorium",
        slug: "laboratorium",
        requirementKey: "laboratorium",
        license: "35 000 Coins",
        bonus: "Endast Alkemi, aktiverar Coins och +5 % Alkemi",
    },
    6: {
        name: "Bank",
        slug: "bank",
        requirementKey: "bank",
        license: "50 000 Coins",
        bonus: "Detaljerad statistik",
    },
    7: {
        name: "Reliktempel",
        slug: "reliktempel",
        requirementKey: "reliktempel",
        license: "50 000 Coins",
        bonus: "Relikbonusar",
    },
    8: {
        name: "Vindhamn",
        slug: "vindhamn",
        requirementKey: "vindhamn",
        license: "100 000 Coins",
        bonus: "Låser upp Elytra",
    },
    10: {
        name: "Gatukontor",
        slug: "gatukontor",
        requirementKey: "gatukontor",
        license: "200 000 Coins",
        bonus: "Riksvägsanslutning",
    },
    12: {
        name: "Turistbyrå",
        slug: "turistbyra",
        requirementKey: "turistbyra",
        license: "350 000 Coins",
        bonus: "Turism och unika besök",
    },
    14: {
        name: "Stall",
        slug: "stall",
        requirementKey: "stall",
        license: "500 000 Coins",
        bonus: "+25 % hästhastighet",
    },
    16: {
        name: "Kontor",
        slug: "kontor",
        requirementKey: "kontor",
        license: "750 000 Coins",
        bonus: "+3 Shopping Chests",
    },
    18: {
        name: "Kyrka",
        slug: "kyrka",
        requirementKey: "kyrka",
        license: "1 000 000 Coins",
        bonus: "+20 % produktion",
    },
    20: {
        name: "Marknadsplats",
        slug: "marknadsplats",
        requirementKey: "marknadsplats",
        license: "1 500 000 Coins",
        bonus: "−10 procentenheter Server TAX",
    },
    22: {
        name: "Myntförvaring",
        slug: "myntforvaring",
        requirementKey: "myntforvaring",
        license: "2 000 000 Coins",
        bonus: "7,5 % → 2,5 % stadskasseavgift",
    },
    25: {
        name: "Rådhus",
        slug: "radhus",
        requirementKey: "radhus",
        license: "2 500 000 Coins",
        bonus: "+2 Lord-platser",
    },
    30: {
        name: "Slott",
        slug: "slott",
        requirementKey: "slott",
        license: "5 000 000 Coins",
        bonus: "King kostar 6 tickets",
    },
    35: {
        name: "Museum",
        slug: "museum",
        requirementKey: "museum",
        license: "8 000 000 Coins",
        bonus: "100 000 Coins turistbonus",
    },
    40: {
        name: "Rustkammare",
        slug: "rustkammare",
        requirementKey: "rustkammare",
        license: "12 500 000 Coins",
        bonus: "110 grundtickets",
    },
    45: {
        name: "Myntverk",
        slug: "myntverk",
        requirementKey: "myntverk",
        license: "20 000 000 Coins",
        bonus: "50 000 Coins per dag",
    },
};

// Physical buildings that gate the upgrade FROM the keyed current level.
// This mirrors SettlementUpgradeBuildingRequirementRegistry in GameZoneEngine.
const UPGRADE_GATE_BUILDINGS: Record<number, LevelBuilding> = {
    1: LEVEL_BUILDINGS[1],
    2: LEVEL_BUILDINGS[2],
    3: LEVEL_BUILDINGS[3],
    6: LEVEL_BUILDINGS[6],
    7: LEVEL_BUILDINGS[7],
    8: LEVEL_BUILDINGS[8],
    10: LEVEL_BUILDINGS[10],
    12: LEVEL_BUILDINGS[12],
    14: LEVEL_BUILDINGS[14],
    16: LEVEL_BUILDINGS[16],
    18: LEVEL_BUILDINGS[18],
    20: LEVEL_BUILDINGS[20],
    22: LEVEL_BUILDINGS[22],
    25: LEVEL_BUILDINGS[25],
    30: LEVEL_BUILDINGS[30],
    35: LEVEL_BUILDINGS[35],
    40: LEVEL_BUILDINGS[40],
    45: LEVEL_BUILDINGS[45],
};

export default function SettlementUpgradePanel({
    upgradeKey,
}: SettlementUpgradePanelProps) {
    const upgrade = getSettlementUpgrade(upgradeKey);

    if (!upgrade) {
        return null;
    }

    const hasMaterials = upgrade.upgradeCost.materials.length > 0;
    const requiredBuilding = UPGRADE_GATE_BUILDINGS[upgrade.currentLevel.level];
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

                {requiredBuilding && (
                    <section className={`${styles.section} ${styles.buildingSection}`}>
                        <div className={styles.buildingHeading}>
                            <div>
                                <span className={styles.sectionLabel}>
                                    Krävs för nivå {upgrade.nextLevel.level}
                                </span>
                                <h3>
                                    <Link href={`/wiki/buildings/${requiredBuilding.slug}`}>
                                        {requiredBuilding.name}
                                    </Link>
                                </h3>
                                <p>
                                    Den här byggnaden måste vara fysiskt färdigställd och aktiv innan
                                    settlementet kan genomföra uppgraderingen.
                                    {requiredBuilding.requirementKey === "kategoribyggnad" &&
                                        " Det är alltid byggnaden för settlementets nuvarande produktionskategori som räknas."}
                                </p>
                            </div>

                            <Link
                                className={styles.buildingLink}
                                href={`/wiki/buildings/${requiredBuilding.slug}`}
                            >
                                Öppna byggnadsguiden →
                            </Link>
                        </div>

                        <div className={styles.buildingFacts}>
                            <div>
                                <span>Licens</span>
                                <strong>{requiredBuilding.license}</strong>
                            </div>
                            <div>
                                <span>Funktion</span>
                                <strong>{requiredBuilding.bonus}</strong>
                            </div>
                        </div>

                        <BuildingRequirementsTable building={requiredBuilding.requirementKey} />
                    </section>
                )}

                {levelBuilding && levelBuilding !== requiredBuilding && (
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
                                    licensieras och uppföras. Byggnaden har egna fysiska byggnadskrav
                                    utöver själva settlementuppgraderingen.
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
