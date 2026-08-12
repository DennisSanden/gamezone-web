import Link from "next/link";
import styles from "./HomeFeatures.module.css";

const features = [
    {
        eyebrow: "Kunskapsbanken",
        title: "Wiki",
        description:
            "Lär dig allt om GameZones ekonomi, produktion, settlements, företag, allianser, krig och världen omkring dig.",
        href: "/wiki",
        linkLabel: "Utforska Wiki",
        icon: "W",
        className: styles.wiki,
    },
    {
        eyebrow: "Tävla och jämför",
        title: "Leaderboards",
        description:
            "Följ rikaste spelarna, största städerna, produktion, krigsvinster, ticket-differens och andra topplistor.",
        href: "/leaderboards",
        linkLabel: "Visa topplistor",
        icon: "L",
        className: styles.leaderboards,
    },
    {
        eyebrow: "Världen i realtid",
        title: "Interaktiv karta",
        description:
            "Utforska settlements, byggnader, områden och viktiga platser direkt på GameZones världskarta.",
        href: "/map",
        linkLabel: "Öppna kartan",
        icon: "K",
        className: styles.map,
    },
];

export function HomeFeatures() {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <header className={styles.heading}>
                    <div>
                        <span className={styles.kicker}>
                            Utforska GameZone
                        </span>

                        <h2>
                            En hel värld bakom servern
                        </h2>
                    </div>

                    <p>
                        Webbplattformen samlar all information, statistik och
                        aktivitet från GameZone på ett och samma ställe.
                    </p>
                </header>

                <div className={styles.grid}>
                    {features.map((feature) => (
                        <article
                            key={feature.title}
                            className={`${styles.card} ${feature.className}`}
                        >
                            <div
                                className={styles.background}
                                aria-hidden="true"
                            />

                            <div
                                className={styles.pattern}
                                aria-hidden="true"
                            />

                            <div className={styles.cardContent}>
                                <div className={styles.icon}>
                                    {feature.icon}
                                </div>

                                <span className={styles.eyebrow}>
                                    {feature.eyebrow}
                                </span>

                                <h3>{feature.title}</h3>

                                <p>{feature.description}</p>

                                <Link
                                    href={feature.href}
                                    className={styles.link}
                                >
                                    {feature.linkLabel}
                                    <span aria-hidden="true">→</span>
                                </Link>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}