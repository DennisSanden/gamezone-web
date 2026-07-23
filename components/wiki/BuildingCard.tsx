import Link from "next/link";
import WikiIcon from "./WikiIcon";
import type { SettlementBuilding } from "./settlement-buildings";
import styles from "./BuildingCard.module.css";

type BuildingCardProps = {
    building: SettlementBuilding;
};

export default function BuildingCard({
                                         building,
                                     }: BuildingCardProps) {
    const content = (
        <>
            <div className={styles.header}>
                <div className={styles.icon}>
                    <WikiIcon
                        name="production"
                        size={23}
                    />
                </div>

                <div className={styles.heading}>
                    <span className={styles.category}>
                        {building.category}
                    </span>

                    <h3>{building.name}</h3>
                </div>

                <span className={styles.level}>
                    Nivå {building.unlockLevel}
                </span>
            </div>

            <p className={styles.description}>
                {building.description}
            </p>

            <div className={styles.details}>
                <div className={styles.detail}>
                    <span>Effekt</span>
                    <strong>{building.effect}</strong>
                </div>

                <div className={styles.detail}>
                    <span>Kostnad</span>
                    <strong>{building.cost}</strong>
                </div>
            </div>

            {building.materials.length > 0 && (
                <div className={styles.materialSection}>
                    <div className={styles.materialHeader}>
                        <span>Material</span>
                        <span>Settlement Inventory</span>
                    </div>

                    <div className={styles.materialGrid}>
                        {building.materials.map((material) => (
                            <div
                                key={material.id}
                                className={styles.materialItem}
                            >
                                <div className={styles.materialIdentity}>
                                    <span
                                        className={styles.materialEmoji}
                                        aria-hidden="true"
                                    >
                                        {material.icon}
                                    </span>

                                    <span
                                        className={styles.materialName}
                                    >
                                        {material.name}
                                    </span>
                                </div>

                                <strong
                                    className={styles.materialAmount}
                                >
                                    ×{material.amount}
                                </strong>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {building.materialNote && (
                <div className={styles.materialNote}>
                    {building.materialNote}
                </div>
            )}

            {building.href && (
                <div className={styles.footer}>
                    <span>Läs mer om byggnaden</span>
                    <span aria-hidden="true">→</span>
                </div>
            )}
        </>
    );

    if (building.href) {
        return (
            <Link
                className={styles.card}
                href={building.href}
            >
                {content}
            </Link>
        );
    }

    return (
        <article className={styles.card}>
            {content}
        </article>
    );
}