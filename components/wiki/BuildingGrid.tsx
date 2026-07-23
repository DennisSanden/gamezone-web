import BuildingCard from "./BuildingCard";
import {
    getSettlementBuildings,
    type SettlementBuildingGroup,
} from "./settlement-buildings";
import styles from "./BuildingGrid.module.css";

type BuildingGridProps = {
    group: SettlementBuildingGroup;
};

export default function BuildingGrid({
                                         group,
                                     }: BuildingGridProps) {
    const buildings = getSettlementBuildings(group);

    if (buildings.length === 0) {
        return null;
    }

    return (
        <section
            className={styles.wrapper}
            aria-label="Specialbyggnader"
        >
            <div className={styles.grid}>
                {buildings.map((building) => (
                    <BuildingCard
                        building={building}
                        key={building.id}
                    />
                ))}
            </div>

            <div className={styles.notice}>
                <span className={styles.noticeMarker} />

                <p>
                    Varje byggnad måste låsas upp och
                    registreras enligt settlementets
                    byggnadsregler innan bonusen blir aktiv.
                </p>
            </div>
        </section>
    );
}