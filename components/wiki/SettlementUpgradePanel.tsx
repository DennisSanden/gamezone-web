import Link from "next/link";

import BuildingCard from "./BuildingCard";
import {
    getSettlementUpgrade,
    type SettlementUpgradeKey,
} from "./settlement-upgrades";

import styles from "./SettlementUpgradePanel.module.css";

type SettlementUpgradePanelProps = {
    upgradeKey: SettlementUpgradeKey;
};

export default function SettlementUpgradePanel({
                                                   upgradeKey,
                                               }: SettlementUpgradePanelProps) {
    const upgrade = getSettlementUpgrade(upgradeKey);

    if (!upgrade) {
        return null;
    }

    const hasMaterials =
        upgrade.upgradeCost.materials.length > 0;

    const hasBuildings =
        upgrade.buildings.length > 0;

    const hasRequiredCurrentBuildings =
        upgrade.requiredCurrentBuildings.length > 0;

    return (
        <section
            className={styles.panel}
            aria-label={`Uppgradering från ${upgrade.currentLevel.name} till ${upgrade.nextLevel.name}`}
        >
            <header className={styles.header}>
                <div>
                    <span className={styles.eyebrow}>
                        Nästa settlementnivå
                    </span>

                    <div className={styles.levelPath}>
                        <span className={styles.currentLevel}>
                            {upgrade.currentLevel.name}
                        </span>

                        <span
                            className={styles.arrow}
                            aria-hidden="true"
                        >
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
                        <span className={styles.sectionLabel}>
                            Det här förändras
                        </span>

                        <h3>
                            Fördelar med{" "}
                            {upgrade.nextLevel.name}
                        </h3>
                    </div>

                    <div className={styles.comparisonTable}>
                        <div className={styles.comparisonHeader}>
                            <span>Egenskap</span>

                            <span>
                                {upgrade.currentLevel.name}
                            </span>

                            <span />

                            <span>
                                {upgrade.nextLevel.name}
                            </span>
                        </div>

                        {upgrade.changes.map((change) => (
                            <div
                                className={styles.comparisonRow}
                                key={change.label}
                            >
                                <span
                                    className={styles.changeLabel}
                                >
                                    {change.label}
                                </span>

                                <span
                                    className={styles.oldValue}
                                >
                                    {change.from}
                                </span>

                                <span
                                    className={
                                        styles.changeArrow
                                    }
                                    aria-hidden="true"
                                >
                                    →
                                </span>

                                <strong
                                    className={styles.newValue}
                                >
                                    {change.to}
                                </strong>
                            </div>
                        ))}
                    </div>
                </section>

                <section className={styles.section}>
                    <div className={styles.sectionHeader}>
                        <span className={styles.sectionLabel}>
                            Settlementuppgradering
                        </span>

                        <h3>
                            Kostnad för att nå{" "}
                            {upgrade.nextLevel.name}
                        </h3>

                        <p>
                            Coins tas från stadskassan och
                            materialen hämtas från Settlement
                            Inventory.
                        </p>
                    </div>

                    <div className={styles.upgradeCost}>
                        <div className={styles.coinCost}>
                            <span className={styles.costType}>
                                GZ Coins
                            </span>

                            <strong>
                                {upgrade.upgradeCost.coins}
                            </strong>

                            <span className={styles.costSource}>
                                Tas från stadskassan
                            </span>
                        </div>

                        {hasMaterials && (
                            <div className={styles.materialCost}>
                                <div
                                    className={
                                        styles.materialHeader
                                    }
                                >
                                    <span>Material</span>

                                    <span>
                                        Settlement Inventory
                                    </span>
                                </div>

                                <div
                                    className={
                                        styles.materialGrid
                                    }
                                >
                                    {upgrade.upgradeCost.materials.map(
                                        (material) => (
                                            <div
                                                className={
                                                    styles.materialItem
                                                }
                                                key={material.id}
                                            >
                                                <div
                                                    className={
                                                        styles.materialIdentity
                                                    }
                                                >
                                                    <span
                                                        className={
                                                            styles.materialEmoji
                                                        }
                                                        aria-hidden="true"
                                                    >
                                                        {
                                                            material.icon
                                                        }
                                                    </span>

                                                    <span
                                                        className={
                                                            styles.materialName
                                                        }
                                                    >
                                                        {
                                                            material.name
                                                        }
                                                    </span>
                                                </div>

                                                <strong
                                                    className={
                                                        styles.materialAmount
                                                    }
                                                >
                                                    ×
                                                    {
                                                        material.amount
                                                    }
                                                </strong>
                                            </div>
                                        ),
                                    )}
                                </div>
                            </div>
                        )}
                    </div>

                    <div className={styles.atomicNotice}>
                        <span
                            className={styles.atomicMarker}
                            aria-hidden="true"
                        />

                        <div>
                            <strong>
                                Uppgraderingen genomförs i ett
                                steg
                            </strong>

                            <p>
                                Alla Coins och material måste
                                finnas tillgängliga samtidigt. Om
                                något krav saknas genomförs ingen
                                del av settlementuppgraderingen.
                            </p>
                        </div>
                    </div>
                </section>

                {hasBuildings && (
                    <section className={styles.section}>
                        <div className={styles.sectionHeader}>
                            <span className={styles.sectionLabel}>
                                Nya byggnader
                            </span>

                            <h3>
                                Låses upp på{" "}
                                {upgrade.nextLevel.name}
                            </h3>

                            <p>
                                Följande byggnader blir
                                tillgängliga när settlementet når
                                nivå {upgrade.nextLevel.level}.
                                Byggnadernas kostnader är separata
                                från settlementuppgraderingen.
                            </p>
                        </div>

                        <div className={styles.buildingGrid}>
                            {upgrade.buildings.map(
                                (building) => (
                                    <BuildingCard
                                        building={building}
                                        key={building.id}
                                    />
                                ),
                            )}
                        </div>
                    </section>
                )}

                <section
                    className={
                        styles.progressionRequirement
                    }
                >
                    <div
                        className={styles.progressionIcon}
                        aria-hidden="true"
                    >
                        <span className={styles.lockBody} />

                        <span
                            className={styles.lockShackle}
                        />
                    </div>

                    <div>
                        <span
                            className={
                                styles.progressionEyebrow
                            }
                        >
                            Progressionskrav
                        </span>

                        <h3>
                            Byggnaderna på{" "}
                            {upgrade.currentLevel.name} måste
                            vara upplåsta
                        </h3>

                        <p>
                            Innan settlementet kan uppgraderas
                            till{" "}
                            <strong>
                                {upgrade.nextLevel.name}
                            </strong>{" "}
                            måste samtliga byggnader som låses
                            upp på nivån{" "}
                            <strong>
                                {upgrade.currentLevel.name}
                            </strong>{" "}
                            först vara permanent upplåsta.
                        </p>

                        {hasRequiredCurrentBuildings && (
                            <div
                                className={
                                    styles.requiredBuildingList
                                }
                            >
                                {upgrade.requiredCurrentBuildings.map(
                                    (building) => (
                                        <span
                                            className={
                                                styles.requiredBuilding
                                            }
                                            key={building}
                                        >
                                            {building}
                                        </span>
                                    ),
                                )}
                            </div>
                        )}

                        {!hasRequiredCurrentBuildings && (
                            <p>
                                Den nuvarande nivån har inga
                                byggnader som måste låsas upp
                                innan settlementet kan avancera.
                            </p>
                        )}
                    </div>
                </section>
            </div>

            <footer className={styles.footer}>
                <span
                    className={styles.footerMarker}
                    aria-hidden="true"
                />

                <p>{upgrade.footerText}</p>
            </footer>
        </section>
    );
}