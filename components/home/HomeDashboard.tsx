import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { getApprovedLiveStreams } from "@/lib/twitch";
import { getFeaturedStreamer } from "@/lib/streamers";
import styles from "./HomeDashboard.module.css";

const statistics = [
    {
        icon: "♛",
        label: "Settlementutveckling",
        value: "15 nivåer",
        detail: "Från Enstöring till Imperium",
        accent: "donation",
    },
    {
        icon: "▣",
        label: "Produktion",
        value: "7 kategorier",
        detail: "Specialisera dig och bygg handel",
        accent: "settlement",
    },
    {
        icon: "●",
        label: "Levande ekonomi",
        value: "GZ Coins",
        detail: "Företag, skatter och stadskassor",
        accent: "wealth",
    },
    {
        icon: "♟",
        label: "Marknadssystem",
        value: "MarketWatch",
        detail: "Se vilka resurser världen behöver",
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
                        Svensk survival med settlements, företag och levande ekonomi
                    </span>

                    <h1>
                        Bygg mer än en bas.
                        <br />
                        Bygg ett <span>rike.</span>
                    </h1>

                    <p className={styles.slogan}>
                        Skapa ett settlement, forma en ekonomi och bygg något
                        <br />
                        som lämnar avtryck i hela världen.
                    </p>

                    <div className={styles.heroActions}>
                        <Button href="/kom-igang" size="large">
                            Kom igång
                        </Button>

                        <Button
                            href="/regler"
                            variant="secondary"
                            size="large"
                        >
                            Läs reglerna
                        </Button>

                        <Button
                            href="/wiki"
                            variant="outline"
                            size="large"
                        >
                            Utforska wikin
                        </Button>
                    </div>

                    <div
                        className={styles.serverStatus}
                        aria-label="GameZone serverstatus"
                    >
                        <div className={styles.statusMain}>
                            <div className={styles.onlineStatus}>
                                <span className={styles.onlineDot} />
                                <strong>Servern är live</strong>
                            </div>

                            <span className={styles.statusVersion}>
                                Open Alpha
                            </span>
                        </div>

                        <div className={styles.statusDetails}>
                            <span>Whitelist via Discord</span>
                            <span className={styles.statusDivider} />
                            <span>play.gamezonemc.se</span>
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
                                    Settlements
                                </span>

                                <h2>Från ensam spelare till imperium</h2>

                                <p>
                                    Utöka territoriet, bygg upp stadskassan, lås upp
                                    byggnader och styr tillsammans med dina invånare.
                                </p>

                                <span className={styles.featureLink}>
                                    Läs om settlements →
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
                                    Ekonomi och handel
                                </span>

                                <h2>En marknad som formas av spelarna</h2>

                                <p>
                                    Starta företag, öppna shopping chests och använd
                                    MarketWatch för att hitta världens största brister.
                                </p>

                                <span className={styles.featureLink}>
                                    Se världens topplistor →
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
                aria-label="GameZones kärnsystem"
            >
                <span>En värld byggd kring</span>
                <strong>Settlements</strong>
                <strong>Companies</strong>
                <strong>Production</strong>
                <strong>MarketWatch</strong>
            </section>
        </div>
    );
}