import Link from "next/link";
import type { SettlementBuildingGroup } from "./settlement-buildings";
import styles from "./SettlementBuildingsPanel.module.css";

type SettlementBuildingsPanelProps = {
    group: SettlementBuildingGroup;
};

export default function SettlementBuildingsPanel({
    group: _group,
}: SettlementBuildingsPanelProps) {
    return (
        <section
            className={styles.panel}
            aria-label="Aktuell byggnadsprogression"
        >
            <header className={styles.header}>
                <div>
                    <span className={styles.eyebrow}>
                        Building System 1.0
                    </span>

                    <h3>Ny byggnadsprogression</h3>

                    <p>
                        Den äldre 15-level-mappningen för byggnader används inte längre.
                        Byggnader låses nu upp på specifika nivåer i settlementets
                        50-level-progression och måste byggas fysiskt innan bonusen aktiveras.
                    </p>
                </div>
            </header>

            <div className={styles.notice}>
                <span
                    className={styles.noticeMarker}
                    aria-hidden="true"
                />

                <p>
                    Bygglicenser köps i <strong>/gz menu</strong> → <strong>Settlements</strong> → <strong>Byggnader</strong>. Där ser du även vilka licenser som är upplåsta. Se hela listan med nivåkrav, kostnader, storlekar, specialkrav och bonusar på{" "}
                    <Link href="/wiki/buildings/fysiska-byggnader">
                        Fysiska byggnader
                    </Link>.
                </p>
            </div>
        </section>
    );
}
