import BuildingCard from "./BuildingCard";
import {
    getSettlementBuildings,
    type SettlementBuildingGroup,
} from "./settlement-buildings";
import styles from "./SettlementBuildingsPanel.module.css";

type SettlementBuildingsPanelProps = {
    group: SettlementBuildingGroup;
};

const levelNames: Record<SettlementBuildingGroup, string> = {
    lager: "Läger",
    by: "By",
    bosattning: "Bosättning",
    samhalle: "Samhälle",
    koping: "Köping",
    stad: "Stad",
    handelsstad: "Handelsstad",
    fastning: "Fästning",
    huvudstad: "Huvudstad",
    grevskap: "Grevskap",
    hertigdome: "Hertigdöme",
    nation: "Nation",
    kungadome: "Kungadöme",
    imperium: "Imperium",
};

export default function SettlementBuildingsPanel({
    group,
}: SettlementBuildingsPanelProps) {
    const buildings = getSettlementBuildings(group);
    const levelName = levelNames[group];

    return (
        <section
            className={styles.panel}
            aria-label={`Byggnader som låses upp på ${levelName}`}
        >
            <header className={styles.header}>
                <div>
                    <span className={styles.eyebrow}>
                        Byggnadsupplåsningar
                    </span>

                    <h3>Byggnader på {levelName}</h3>

                    <p>
                        Byggnadernas kostnader och materialkrav är
                        separata från settlementuppgraderingen.
                    </p>
                </div>

                <span className={styles.countBadge}>
                    {buildings.length === 1
                        ? "1 byggnad"
                        : `${buildings.length} byggnader`}
                </span>
            </header>

            {buildings.length > 0 ? (
                <>
                    <div className={styles.grid}>
                        {buildings.map((building) => (
                            <BuildingCard
                                building={building}
                                key={building.id}
                            />
                        ))}
                    </div>

                    <div className={styles.notice}>
                        <span
                            className={styles.noticeMarker}
                            aria-hidden="true"
                        />

                        <p>
                            Varje byggnad måste låsas upp permanent
                            innan dess bonus eller funktion blir aktiv.
                            Samtliga byggnader på den aktuella nivån
                            måste vara upplåsta innan settlementet kan
                            avancera vidare.
                        </p>
                    </div>
                </>
            ) : (
                <div className={styles.emptyState}>
                    <span
                        className={styles.emptyIcon}
                        aria-hidden="true"
                    >
                        —
                    </span>

                    <div>
                        <strong>Inga nya byggnader</strong>

                        <p>
                            {levelName} låser inte upp någon ny unik
                            byggnad. Tidigare permanenta
                            byggnadsupplåsningar behålls så länge deras
                            nivåkrav är uppfyllda.
                        </p>
                    </div>
                </div>
            )}
        </section>
    );
}
