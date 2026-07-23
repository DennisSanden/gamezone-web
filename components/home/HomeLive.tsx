import Link from "next/link";
import styles from "./HomeLive.module.css";

const streamers = [
    {
        name: "DennisSanden",
        title: "Bygger framtidens huvudstad",
        viewers: "1 284 tittare",
        category: "Minecraft",
        initials: "DS",
    },
    {
        name: "BlockBuilder",
        title: "Settlement-projekt och handel",
        viewers: "623 tittare",
        category: "Minecraft",
        initials: "BB",
    },
    {
        name: "MineExplorer",
        title: "Utforskar GameZones värld",
        viewers: "411 tittare",
        category: "Minecraft",
        initials: "ME",
    },
];

export function HomeLive() {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <header className={styles.heading}>
                    <div>
                        <span className={styles.kicker}>
                            Live från världen
                        </span>

                        <h2>
                            Följ äventyret direkt
                        </h2>
                    </div>

                    <div className={styles.liveStatus}>
                        <span className={styles.liveDot} />
                        Streamers live just nu
                    </div>
                </header>

                <div className={styles.layout}>
                    <article className={styles.featured}>
                        <div className={styles.featuredImage}>
                            <div className={styles.imageOverlay} />

                            <div className={styles.liveBadge}>
                                <span className={styles.badgeDot} />
                                Live
                            </div>

                            <div className={styles.viewerBadge}>
                                1 284 tittare
                            </div>
                        </div>

                        <div className={styles.featuredContent}>
                            <div className={styles.avatar}>
                                DS
                            </div>

                            <div className={styles.streamInfo}>
                                <span className={styles.streamerName}>
                                    DennisSanden
                                </span>

                                <h3>
                                    Bygger framtidens huvudstad i GameZone
                                </h3>

                                <p>
                                    Följ utvecklingen av servern, nya system,
                                    settlements och allt som händer bakom kulisserna.
                                </p>

                                <div className={styles.meta}>
                                    <span>Minecraft</span>
                                    <span>GameZone</span>
                                    <span>Svenska</span>
                                </div>
                            </div>

                            <Link
                                href="/live"
                                className={styles.watchButton}
                            >
                                Titta live
                                <span aria-hidden="true">→</span>
                            </Link>
                        </div>
                    </article>

                    <div className={styles.streamList}>
                        {streamers.map((streamer, index) => (
                            <article
                                key={streamer.name}
                                className={styles.streamCard}
                            >
                                <div className={styles.thumbnail}>
                                    <div className={styles.thumbnailOverlay} />

                                    <span className={styles.smallLiveBadge}>
                                        Live
                                    </span>

                                    <span className={styles.smallViewerBadge}>
                                        {streamer.viewers}
                                    </span>
                                </div>

                                <div className={styles.streamCardContent}>
                                    <div className={styles.smallAvatar}>
                                        {streamer.initials}
                                    </div>

                                    <div className={styles.smallInfo}>
                                        <strong>{streamer.name}</strong>
                                        <span>{streamer.title}</span>
                                        <small>{streamer.category}</small>
                                    </div>

                                    <span
                                        className={styles.cardNumber}
                                        aria-hidden="true"
                                    >
                                        0{index + 1}
                                    </span>
                                </div>
                            </article>
                        ))}

                        <Link
                            href="/live"
                            className={styles.allStreams}
                        >
                            Visa alla streams
                            <span aria-hidden="true">→</span>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}