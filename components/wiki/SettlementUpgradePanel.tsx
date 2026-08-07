import Link from "next/link";

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

    const hasMaterials = upgrade.upgradeCost.materials.length > 0;
    const hasRequiredBuildings = upgrade.requiredCurrentBuildings.length > 0;

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
                                                <span
                                                    className={styles.materialEmoji}
                                                    aria-hidden="true"
                                                >
                                                    {material.icon}
                                                </span>

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

                        <div className={styles.materialCost}>
                            <div className={styles.materialHeader}>
                                <span>Byggnader</span>
                            </div>

                            {hasRequiredBuildings ? (
                                <div className={styles.requiredBuildingList}>
                                    {upgrade.requiredCurrentBuildings.map((building) => (
                                        <span
                                            className={styles.requiredBuilding}
                                            key={building}
                                        >
                                            {building}
                                        </span>
                                    ))}
                                </div>
                            ) : (
                                <p>Inga byggnader krävs.</p>
                            )}
                        </div>
                    </div>
                </section>
            </div>
        </section>
    );
}
