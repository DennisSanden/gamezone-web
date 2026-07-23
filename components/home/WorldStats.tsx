import styles from "./WorldStats.module.css";

const statistics = [
    {
        icon: "♛",
        label: "Största donation",
        value: "Ingen ännu",
        detail: "GameZone Coins",
    },
    {
        icon: "🏰",
        label: "Största settlement",
        value: "Väntar på Alpha",
        detail: "Nivå 1",
    },
    {
        icon: "◉",
        label: "Rikaste spelare",
        value: "Ingen ännu",
        detail: "0 GZC",
    },
    {
        icon: "▥",
        label: "Registrerade spelare",
        value: "0",
        detail: "Inför Alpha",
    },
];

export function WorldStats() {
    return (
        <section
            className={styles.section}
            aria-label="GameZone statistik"
        >
            <div className={styles.container}>
                <div className={styles.grid}>
                    {statistics.map((statistic) => (
                        <article
                            key={statistic.label}
                            className={styles.statistic}
                        >
                            <div
                                className={styles.icon}
                                aria-hidden="true"
                            >
                                {statistic.icon}
                            </div>

                            <div className={styles.content}>
                                <span className={styles.label}>
                                    {statistic.label}
                                </span>

                                <strong className={styles.value}>
                                    {statistic.value}
                                </strong>

                                <span className={styles.detail}>
                                    {statistic.detail}
                                </span>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}