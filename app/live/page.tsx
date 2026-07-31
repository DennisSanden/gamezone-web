import type { Metadata } from "next";
import Link from "next/link";
import { MainLayout } from "@/components/layout/MainLayout";
import { PageContainer } from "@/components/layout/PageContainer";
import {
    APPROVED_TWITCH_CREATORS,
    getApprovedLiveStreams,
    type ApprovedTwitchStream,
} from "@/lib/twitch";
import { getFeaturedStreamer } from "@/lib/streamers";
import styles from "./page.module.css";

export const metadata: Metadata = {
    title: "GameZone Live | GameZone",
    description:
        "Se godkända GameZone-streamers live på Twitch och hitta alla creators som sänder från servern.",
};

function formatDuration(startedAt: string): string {
    const started = new Date(startedAt).getTime();

    if (!Number.isFinite(started)) {
        return "Live nu";
    }

    const totalMinutes = Math.max(0, Math.floor((Date.now() - started) / 60_000));
    const hours = Math.floor(totalMinutes / 60);
    const minutes = totalMinutes % 60;

    return hours > 0 ? `${hours} h ${minutes} min` : `${minutes} min`;
}

function LivePreview({ stream }: { stream: ApprovedTwitchStream }) {
    return (
        <Link
            href={stream.channelUrl}
            target="_blank"
            rel="noreferrer"
            className={styles.featuredPlayer}
            aria-label={`Se ${stream.displayName} live på Twitch`}
        >
            <div
                className={styles.featuredImage}
                style={{ backgroundImage: `url("${stream.thumbnailUrl}")` }}
            >
                <div className={styles.imageShade} />
                <span className={styles.liveBadge}>Live</span>
                <span className={styles.viewerBadge}>
                    {new Intl.NumberFormat("sv-SE").format(stream.viewerCount)} tittare
                </span>
                <span className={styles.playIcon}>▶</span>
            </div>

            <div className={styles.featuredInfo}>
                <div className={styles.avatar}>DS</div>
                <div className={styles.featuredText}>
                    <strong>{stream.displayName}</strong>
                    <h2>{stream.title}</h2>
                    <div className={styles.streamMeta}>
                        <span>{stream.gameName}</span>
                        <span>Live i {formatDuration(stream.startedAt)}</span>
                    </div>
                </div>
                <span className={styles.watchButton}>Titta på Twitch →</span>
            </div>
        </Link>
    );
}

export default async function LivePage() {
    const liveStreams = await getApprovedLiveStreams();
    const featuredCreator = getFeaturedStreamer();
    const featuredStream = liveStreams.find(
        (stream) => stream.login === featuredCreator.twitchLogin,
    ) ?? liveStreams[0];
    const liveByLogin = new Map(liveStreams.map((stream) => [stream.login, stream]));

    return (
        <MainLayout>
            <div className={styles.page}>
                <section className={styles.hero}>
                    <PageContainer className={styles.heroInner}>
                        <div>
                            <span className={styles.eyebrow}>GameZone Live</span>
                            <h1>Följ världen genom spelarnas ögon</h1>
                            <p>
                                Här samlas alla godkända GameZone-streamers. Se vem som
                                är live, öppna sändningen och följ berättelserna som
                                skapas på servern i realtid.
                            </p>
                        </div>

                        <div className={styles.liveSummary}>
                            <span className={liveStreams.length > 0 ? styles.summaryDotLive : styles.summaryDotOffline} />
                            <strong>
                                {liveStreams.length > 0
                                    ? `${liveStreams.length} live just nu`
                                    : "Ingen är live just nu"}
                            </strong>
                            <small>{APPROVED_TWITCH_CREATORS.length} creator listad</small>
                        </div>
                    </PageContainer>
                </section>

                <PageContainer className={styles.content}>
                    <section className={styles.featuredSection}>
                        <div className={styles.sectionHeading}>
                            <div>
                                <span>Live nu</span>
                                <h2>Pågående sändning</h2>
                            </div>
                            <Link
                                href="https://www.twitch.tv/directory/category/minecraft"
                                target="_blank"
                                rel="noreferrer"
                            >
                                Öppna Twitch →
                            </Link>
                        </div>

                        {featuredStream ? (
                            <LivePreview stream={featuredStream} />
                        ) : (
                            <div className={styles.offlinePlayer}>
                                <div className={styles.offlineScreen}>
                                    <div className={styles.offlineBackground} />
                                    <div className={styles.offlineShade} />
                                    <span className={styles.offlineBadge}>Offline</span>
                                    <div className={styles.offlineCenter}>
                                        <span className={styles.twitchWordmark}>twitch</span>
                                        <strong>Ingen sändning är live</strong>
                                        <p>Nästa GameZone-äventyr dyker upp här automatiskt.</p>
                                    </div>
                                    <div className={styles.playerControls} aria-hidden="true">
                                        <div className={styles.progress}><span /></div>
                                        <div className={styles.controlRow}>
                                            <span>▶</span>
                                            <span>▮◀</span>
                                            <small>00:00</small>
                                            <i />
                                            <span>⚙</span>
                                            <span>⛶</span>
                                        </div>
                                    </div>
                                </div>

                                <div className={styles.offlineInfo}>
                                    <div className={styles.avatar}>{featuredCreator.initials}</div>
                                    <div>
                                        <strong>{featuredCreator.displayName}</strong>
                                        <span>{featuredCreator.description}</span>
                                    </div>
                                    <Link
                                        href={featuredCreator.channelUrl}
                                        target="_blank"
                                        rel="noreferrer"
                                        className={styles.followButton}
                                    >
                                        Följ kanalen
                                    </Link>
                                </div>
                            </div>
                        )}
                    </section>

                    <section className={styles.creatorsSection}>
                        <div className={styles.sectionHeading}>
                            <div>
                                <span>Creators</span>
                                <h2>Alla GameZone-streamers</h2>
                            </div>
                            <p>Fler kanaler läggs till när nya creators godkänns.</p>
                        </div>

                        <div className={styles.creatorGrid}>
                            {APPROVED_TWITCH_CREATORS.map((creator) => {
                                const stream = liveByLogin.get(creator.login);

                                return (
                                    <Link
                                        key={creator.login}
                                        href={creator.channelUrl}
                                        target="_blank"
                                        rel="noreferrer"
                                        className={styles.creatorCard}
                                    >
                                        <div className={styles.creatorPreview}>
                                            {stream ? (
                                                <div
                                                    className={styles.creatorLiveImage}
                                                    style={{ backgroundImage: `url("${stream.thumbnailUrl}")` }}
                                                />
                                            ) : (
                                                <div className={styles.creatorOfflineImage} />
                                            )}
                                            <div className={styles.creatorShade} />
                                            <span className={stream ? styles.cardLiveBadge : styles.cardOfflineBadge}>
                                                {stream ? "Live" : "Offline"}
                                            </span>
                                            {stream && (
                                                <span className={styles.cardViewers}>
                                                    {new Intl.NumberFormat("sv-SE").format(stream.viewerCount)} tittare
                                                </span>
                                            )}
                                        </div>

                                        <div className={styles.creatorBody}>
                                            <div className={styles.avatar}>{creator.initials}</div>
                                            <div>
                                                <strong>{creator.displayName}</strong>
                                                <p>{stream?.title ?? creator.description}</p>
                                                <span>{stream ? stream.gameName : `twitch.tv/${creator.login}`}</span>
                                            </div>
                                            <b>→</b>
                                        </div>
                                    </Link>
                                );
                            })}
                        </div>
                    </section>
                </PageContainer>
            </div>
        </MainLayout>
    );
}
