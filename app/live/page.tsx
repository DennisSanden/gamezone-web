import type { Metadata } from "next";
import Link from "next/link";
import { MainLayout } from "@/components/layout/MainLayout";
import { PageContainer } from "@/components/layout/PageContainer";
import { getStreamers } from "@/lib/streamers";
import styles from "./page.module.css";

export const metadata: Metadata = {
    title: "Creators | GameZone",
    description: "Se GameZones creators på Twitch och lär dig hur Twitch-belöningar fungerar på servern.",
};

export default async function LivePage() {
    const creators = await getStreamers();
    const liveCreators = creators.filter((creator) => creator.live);
    const liveCount = liveCreators.length;

    return <MainLayout><div className={styles.page}>
        <section className={styles.hero}><PageContainer className={styles.heroInner}>
            <div><span className={styles.eyebrow}>GameZone Creators</span><h1>Titta på GameZone. Få Coins.</h1>
                <p>Länka ditt Twitchkonto inne på Minecraftservern med <strong>/twitch &lt;ditt Twitch-namn&gt;</strong>. När du tittar på en registrerad GameZone-stream kan du få <strong>1 000 Coins var 10:e minut</strong>.</p>
                <p>GameZoneEngine begränsar Twitch-belöningar till <strong>6 000 Coins per timme</strong> och <strong>30 000 Coins per 24 timmar</strong>.</p>
                <p>Twitchkopplingen och tittartiden hanteras direkt på servern via StreamingModule. Du behöver inte länka Twitch via hemsidan.</p>
                <div className={styles.heroActions}><a href="https://discord.gg/Uk9TzJh3DJ" target="_blank" rel="noreferrer">Bli GameZone Creator →</a></div>
            </div>
            <div className={styles.liveSummary}><span className={liveCount > 0 ? styles.summaryDotLive : styles.summaryDotOffline}/>
                <strong>{liveCount > 0 ? `${liveCount} live på servern just nu` : `${creators.length} registrerade creators`}</strong>
                <small>{liveCount > 0 ? "Streams spelas upp utan ljud" : "Ingen creator är live just nu"}</small></div>
        </PageContainer></section>
        <PageContainer className={styles.content}>
            {liveCount > 0 && <section className={styles.liveStreamsSection}>
                <div className={styles.sectionHeading}><div><span>Live på servern just nu</span><h2>{liveCount === 1 ? "1 creator är live" : `${liveCount} creators är live`}</h2></div><p>Alla streams startar automatiskt utan ljud.</p></div>
                <div className={styles.liveStreamsGrid}>
                    {liveCreators.map((creator) => <article key={`live-${creator.twitchLogin}`} className={styles.liveStreamCard}>
                        <div className={styles.livePlayerWrap}>
                            <iframe
                                className={styles.livePlayerFrame}
                                src={`https://player.twitch.tv/?channel=${encodeURIComponent(creator.twitchLogin)}&parent=gamezonemc.se&parent=www.gamezonemc.se&autoplay=true&muted=true`}
                                title={`${creator.displayName} live på Twitch`}
                                allow="autoplay; fullscreen; picture-in-picture"
                                allowFullScreen
                            />
                        </div>
                        <div className={styles.liveStreamInfo}>
                            <div><strong><i/> LIVE · {creator.displayName}</strong><p>{creator.streamTitle || "Live från GameZone"}</p></div>
                            <div className={styles.liveStreamMeta}><span>{creator.gameName || "Twitch"}</span><span>{creator.viewers.toLocaleString("sv-SE")} tittare</span><a href={creator.channelUrl} target="_blank" rel="noreferrer">Öppna Twitch →</a></div>
                        </div>
                    </article>)}
                </div>
            </section>}

            <section className={styles.creatorsSection}>
                <div className={styles.sectionHeading}><div><span>GameZone Creators</span><h2>Registrerade Twitchkanaler</h2></div><div className={styles.sectionHeadingActions}><p>{liveCount > 0 ? "Live creators visas först." : "Ingen är live just nu."}</p><a href="https://discord.gg/Uk9TzJh3DJ" target="_blank" rel="noreferrer">Bli Creator →</a></div></div>
                <div className={styles.creatorGrid}>
                    {creators.map((creator) => <Link key={creator.twitchLogin} href={creator.channelUrl} target="_blank" rel="noreferrer" className={styles.creatorCard}>
                        <div className={styles.creatorPreview}><div className={styles.creatorOfflineImage} style={(creator.offlineImageUrl || creator.profileImageUrl) ? { backgroundImage: `url(${creator.offlineImageUrl || creator.profileImageUrl})` } : undefined}/><div className={styles.creatorShade}/><span className={creator.live ? styles.cardLiveBadge : styles.cardOfflineBadge}>{creator.live ? "LIVE" : "TWITCH"}</span>{creator.live && <span className={styles.cardViewers}>{creator.viewers.toLocaleString("sv-SE")} tittare</span>}</div>
                        <div className={styles.creatorBody}><div className={styles.avatar} style={creator.profileImageUrl ? { backgroundImage: `url(${creator.profileImageUrl})` } : undefined}>{creator.profileImageUrl ? "" : creator.initials}</div><div><strong>{creator.displayName}</strong><p>{creator.live ? (creator.streamTitle || "Live på GameZone") : (creator.description || "GameZone Creator på Twitch")}</p><span>{creator.live ? (creator.gameName || "Twitch") : `twitch.tv/${creator.twitchLogin}`}</span></div><b aria-hidden="true">→</b></div>
                    </Link>)}
                </div>
                {creators.length === 0 && <p>Inga GameZone Creators är registrerade ännu.</p>}
            </section>
        </PageContainer>
    </div></MainLayout>;
}
