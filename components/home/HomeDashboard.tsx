import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { getApprovedLiveStreams } from "@/lib/twitch";
import { getFeaturedStreamer } from "@/lib/streamers";
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

function formatLiveDuration(startedAt: string): string {
    const started = new Date(startedAt).getTime();

    if (!Number.isFinite(started)) {
        return "Live nu";
    }

    const totalMinutes = Math.max(0, Math.floor((Date.now() - started) / 60_000));
    const hours = Math.floor(totalMinutes / 60);
    const minutes = totalMinutes % 60;

    if (hours === 0) {
        return `${minutes} min`;
    }

    return `${hours} h ${minutes} min`;
}

export async function HomeDashboard() {
    const liveStreams = await getApprovedLiveStreams();
    const featuredCreator = getFeaturedStreamer();
    const featuredStream = liveStreams.find(
        (stream) => stream.login === featuredCreator.twitchLogin,
    );

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
                                <span
                                    className={
                                        featuredStream
                                            ? styles.liveDot
                                            : styles.offlineDot
                                    }
                                />
                                Live på GameZone
                            </h2>

                            <a
                                href={featuredCreator.channelUrl}
                                target="_blank"
                                rel="noreferrer"
                            >
                                Twitch →
                            </a>
                        </header>

                        {featuredStream ? (
                            <a
                                href={featuredStream.channelUrl}
                                target="_blank"
                                rel="noreferrer"
                                className={styles.featuredStream}
                                aria-label={`Se ${featuredStream.displayName} live på Twitch`}
                            >
                                <div
                                    className={styles.featuredStreamImage}
                                    style={{
                                        backgroundImage: `url("${featuredStream.thumbnailUrl}")`,
                                    }}
                                >
                                    <span className={styles.liveBadge}>
                                        Live
                                    </span>

                                    <span className={styles.viewers}>
                                        ◉ {new Intl.NumberFormat("sv-SE").format(
                                            featuredStream.viewerCount,
                                        )} tittare
                                    </span>

                                    <span className={styles.playButton}>
                                        ▶
                                    </span>
                                </div>

                                <div className={styles.featuredStreamInfo}>
                                    <div className={styles.streamAvatar}>
                                        DS
                                    </div>

                                    <div className={styles.streamText}>
                                        <div className={styles.streamIdentity}>
                                            <strong>
                                                {featuredStream.displayName}
                                            </strong>
                                        </div>

                                        <span className={styles.streamTitle}>
                                            {featuredStream.title}
                                        </span>

                                        <div className={styles.streamMeta}>
                                            <span>🎮 {featuredStream.gameName}</span>
                                            <span>👥 {new Intl.NumberFormat("sv-SE").format(featuredStream.viewerCount)}</span>
                                            <span>⏱ {formatLiveDuration(featuredStream.startedAt)}</span>
                                        </div>
                                    </div>

                                    <span className={styles.watchNow}>
                                        Titta live →
                                    </span>
                                </div>
                            </a>
                        ) : (
                            <div className={styles.offlinePlayer}>
                                <a
                                    href={featuredCreator.channelUrl}
                                    target="_blank"
                                    rel="noreferrer"
                                    className={styles.offlinePreview}
                                    aria-label={`Öppna ${featuredCreator.displayName} på Twitch`}
                                >
                                    <div className={styles.offlinePreviewImage} aria-hidden="true" />
                                    <div className={styles.offlinePreviewShade} aria-hidden="true" />

                                    <span className={styles.offlineBadge}>Offline</span>

                                    <div className={styles.offlineBrand}>
                                        <span className={styles.twitchWordmark}>twitch</span>
                                        <strong>Streamen är offline</strong>
                                        <small>Nästa äventyr på GameZone väntar</small>
                                    </div>

                                    <div className={styles.fakePlayerControls} aria-hidden="true">
                                        <span className={styles.fakeProgress}>
                                            <i />
                                        </span>
                                        <div>
                                            <span>▶</span>
                                            <span>🔊</span>
                                        </div>
                                        <div>
                                            <span>⚙</span>
                                            <span>⛶</span>
                                        </div>
                                    </div>
                                </a>

                                <div className={styles.offlineChannelBar}>
                                    <div className={styles.offlineAvatar}>{featuredCreator.initials}</div>
                                    <div className={styles.offlineChannelText}>
                                        <strong>{featuredCreator.displayName}</strong>
                                        <span>Nästa stream från GameZone visas här.</span>
                                    </div>

                                    <a
                                        href={featuredCreator.channelUrl}
                                        target="_blank"
                                        rel="noreferrer"
                                        className={styles.followButton}
                                    >
                                        Följ på Twitch
                                    </a>
                                </div>
                            </div>
                        )}
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