import type { Metadata } from "next";
import Link from "next/link";
import { MainLayout } from "@/components/layout/MainLayout";
import { PageContainer } from "@/components/layout/PageContainer";
import {
    APPROVED_TWITCH_CREATORS,
    getApprovedLiveStreams,
} from "@/lib/twitch";
import styles from "./page.module.css";

export const metadata: Metadata = {
    title: "GameZone Creators | GameZone",
    description:
        "Hitta alla godkända GameZone-kreatörer och se direkt när någon sänder live på Twitch.",
};

export default async function LivePage() {
    const liveStreams = await getApprovedLiveStreams();
    const liveByLogin = new Map(liveStreams.map((stream) => [stream.login, stream]));
    const creatorCount = APPROVED_TWITCH_CREATORS.length;

    return (
        <MainLayout>
            <div className={styles.page}>
                <section className={styles.hero}>
                    <PageContainer className={styles.heroInner}>
                        <div>
                            <span className={styles.eyebrow}>GameZone Creators</span>
                            <h1>Följ servern genom våra kreatörer</h1>
                            <p>
                                Här hittar du alla godkända GameZone-kreatörer. Besök
                                deras kanaler, följ deras projekt och se direkt när
                                någon sänder live från servern.
                            </p>
                        </div>

                        <div className={styles.liveSummary}>
                            <span
                                className={
                                    liveStreams.length > 0
                                        ? styles.summaryDotLive
                                        : styles.summaryDotOffline
                                }
                            />
                            <strong>
                                {liveStreams.length > 0
                                    ? `${liveStreams.length} live just nu`
                                    : "Ingen är live just nu"}
                            </strong>
                            <small>
                                {creatorCount} {creatorCount === 1 ? "godkänd kreatör" : "godkända kreatörer"}
                            </small>
                        </div>
                    </PageContainer>
                </section>

                <PageContainer className={styles.content}>
                    <section className={styles.creatorsSection}>
                        <div className={styles.sectionHeading}>
                            <div>
                                <span>Godkända kreatörer</span>
                                <h2>Alla GameZone-kreatörer</h2>
                            </div>
                            <p>
                                Listan uppdateras när nya kreatörer godkänns.
                            </p>
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
                                                    style={{
                                                        backgroundImage: `url("${stream.thumbnailUrl}")`,
                                                    }}
                                                />
                                            ) : (
                                                <div className={styles.creatorOfflineImage} />
                                            )}

                                            <div className={styles.creatorShade} />

                                            <span
                                                className={
                                                    stream
                                                        ? styles.cardLiveBadge
                                                        : styles.cardOfflineBadge
                                                }
                                            >
                                                {stream ? "Live" : "Offline"}
                                            </span>

                                            {stream && (
                                                <span className={styles.cardViewers}>
                                                    {new Intl.NumberFormat("sv-SE").format(
                                                        stream.viewerCount,
                                                    )} {" "}
                                                    tittare
                                                </span>
                                            )}
                                        </div>

                                        <div className={styles.creatorBody}>
                                            <div className={styles.avatar}>
                                                {creator.initials}
                                            </div>

                                            <div>
                                                <strong>{creator.displayName}</strong>
                                                <p>
                                                    {stream?.title ?? creator.description}
                                                </p>
                                                <span>
                                                    {stream
                                                        ? stream.gameName
                                                        : `twitch.tv/${creator.login}`}
                                                </span>
                                            </div>

                                            <b aria-hidden="true">→</b>
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
