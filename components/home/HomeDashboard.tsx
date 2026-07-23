import Link from "next/link";
import { Button } from "@/components/ui/Button";
import styles from "./HomeDashboard.module.css";

const statistics = [
    {
        icon: "♛",
        label: "Största donation",
        value: "Ingen ännu",
        detail: "0 GZC",
        accent: "donation",
    },
    {
        icon: "▣",
        label: "Största settlement",
        value: "Väntar på Alpha",
        detail: "Nivå 1",
        accent: "settlement",
    },
    {
        icon: "●",
        label: "Rikaste spelare",
        value: "Ingen ännu",
        detail: "0 GZC",
        accent: "wealth",
    },
    {
        icon: "♟",
        label: "Spelare online",
        value: "0 / 50",
        detail: "TPS 20.0",
        accent: "online",
    },
] as const;

const streams = [
    {
        name: "DennisSanden",
        title: "Bygger framtidens svenska Minecraft-värld",
        category: "Minecraft • GameZone",
        viewers: "1.2K",
        position: "20% center",
        href: "/live/dennissanden",
    },
    {
        name: "BlockBuilder",
        title: "Settlement-bygge och handel",
        category: "Minecraft • GameZone",
        viewers: "623",
        position: "52% center",
        href: "/live/blockbuilder",
    },
    {
        name: "MineExplorer",
        title: "Gruvdrift, ekonomi och äventyr",
        category: "Minecraft • GameZone",
        viewers: "411",
        position: "82% center",
        href: "/live/mineexplorer",
    },
];

export function HomeDashboard() {
    return (
        <div className={styles.page}>
            <section className={styles.hero}>
                <div
                    className={styles.heroBackground}
                    aria-hidden="true"
                />

                <div className={styles.heroContent}>
                    <span className={styles.badge}>
                        Svensk Minecraft-värld under utveckling
                    </span>

                    <h1>
                        Ditt äventyr.
                        <br />
                        Din <span>legacy.</span>
                    </h1>

                    <p className={styles.slogan}>
                        Varje spelare har en plats.
                        <br />
                        Varje stad har en historia.
                    </p>

                    <div className={styles.heroActions}>
                        <Button href="/spela" size="large">
                            Spela nu
                        </Button>

                        <Button
                            href="/whitelist"
                            variant="secondary"
                            size="large"
                        >
                            Ansök till whitelist
                        </Button>

                        <Button
                            href="/wiki"
                            variant="outline"
                            size="large"
                        >
                            Läs om GameZone
                        </Button>
                    </div>

                    <div
                        className={styles.serverStatus}
                        aria-label="GameZone serverstatus"
                    >
                        <div className={styles.statusMain}>
                            <div className={styles.onlineStatus}>
                                <span className={styles.onlineDot} />
                                <strong>Under utveckling</strong>
                            </div>

                            <span className={styles.statusVersion}>
                                Alpha 0.1
                            </span>
                        </div>

                        <div className={styles.statusDetails}>
                            <span>0 spelare online</span>
                            <span className={styles.statusDivider} />
                            <span>play.gamezone.se</span>
                        </div>
                    </div>
                </div>
            </section>

            <div className={styles.dashboard}>
                <div className={styles.leftColumn}>
                    <section
                        className={styles.stats}
                        aria-label="GameZone statistik"
                    >
                        {statistics.map((statistic) => (
                            <article
                                key={statistic.label}
                                className={`${styles.stat} ${styles[statistic.accent]}`}
                            >
                                <span
                                    className={styles.statIcon}
                                    aria-hidden="true"
                                >
                                    {statistic.icon}
                                </span>

                                <div>
                                    <span className={styles.statLabel}>
                                        {statistic.label}
                                    </span>

                                    <strong>
                                        {statistic.value}
                                    </strong>

                                    <small>
                                        {statistic.detail}
                                    </small>
                                </div>
                            </article>
                        ))}
                    </section>

                    <div className={styles.featureGrid}>
                        <Link
                            href="/wiki"
                            className={`${styles.feature} ${styles.wiki}`}
                            aria-label="Öppna GameZone Wiki"
                        >
                            <div className={styles.featureContent}>
                                <span className={styles.featureEyebrow}>
                                    GameZone Wiki
                                </span>

                                <h2>All kunskap på ett ställe</h2>

                                <p>
                                    Guider för Economy, Settlements,
                                    Companies och Production.
                                </p>

                                <span className={styles.featureLink}>
                                    Utforska Wikin →
                                </span>
                            </div>
                        </Link>

                        <Link
                            href="/leaderboards"
                            className={`${styles.feature} ${styles.leaderboards}`}
                            aria-label="Öppna GameZone Leaderboards"
                        >
                            <div className={styles.featureContent}>
                                <span className={styles.featureEyebrow}>
                                    Leaderboards
                                </span>

                                <h2>Se vilka som leder</h2>

                                <p>
                                    Rikaste spelare, största settlements
                                    och fler topplistor.
                                </p>

                                <span className={styles.featureLink}>
                                    Visa topplistor →
                                </span>
                            </div>
                        </Link>
                    </div>
                </div>

                <div className={styles.rightColumn}>
                    <section className={styles.livePanel}>
                        <header className={styles.panelHeader}>
                            <h2>
                                <span className={styles.liveDot} />
                                Live på GameZone
                            </h2>

                            <Link href="/live">
                                Visa alla →
                            </Link>
                        </header>

                        <div className={styles.streamGrid}>
                            {streams.map((stream) => (
                                <Link
                                    key={stream.name}
                                    href={stream.href}
                                    className={styles.stream}
                                    aria-label={`Se ${stream.name} live`}
                                >
                                    <div
                                        className={styles.streamImage}
                                        style={{
                                            backgroundPosition:
                                            stream.position,
                                        }}
                                    >
                                        <span className={styles.liveBadge}>
                                            Live
                                        </span>

                                        <span className={styles.viewers}>
                                            ◉ {stream.viewers}
                                        </span>
                                    </div>

                                    <div className={styles.streamInfo}>
                                        <strong>{stream.name}</strong>
                                        <span className={styles.streamTitle}>
                                            {stream.title}
                                        </span>
                                        <small>{stream.category}</small>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </section>

                </div>
            </div>

            <section
                className={styles.partners}
                aria-label="GameZone partners"
            >
                <span>Våra partners</span>
                <strong>BisectHosting</strong>
                <strong>Discord</strong>
                <strong>YouTube</strong>
                <strong>Twitch</strong>
            </section>
        </div>
    );
}