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
    enstoring: "Enstöring",
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
                        När en byggnad blir tillgänglig köper settlementet först bygglicensen med Coins från stadskassan. Därefter måste byggnaden uppföras fysiskt och godkännas innan dess bonus eller funktion blir aktiv.
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
                            Licensen är permanent när den väl har köpts, men bonusen är knuten till den fysiska byggnaden. Byggnaden måste uppfylla storlek, väggar, tak och specialkrav. Om den senare skadas pausas bonusen tills byggnaden repareras och valideras igen.
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
                            byggnad. Tidigare köpta bygglicenser behålls. En fysisk byggnad måste däremot vara färdigställd och aktiv för att dess bonus eller funktion ska räknas.
                        </p>
                    </div>
                </div>
            )}
        </section>
    );
}
