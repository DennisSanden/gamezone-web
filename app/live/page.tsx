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

    return <MainLayout><div className={styles.page}>
        <section className={styles.hero}><PageContainer className={styles.heroInner}>
            <div><span className={styles.eyebrow}>GameZone Creators</span><h1>Titta på GameZone. Få Coins.</h1>
                <p>Länka ditt Twitchkonto inne på Minecraftservern med <strong>/twitch &lt;ditt Twitch-namn&gt;</strong>. När du tittar på en registrerad GameZone-stream kan du få <strong>1 000 Coins var 10:e minut</strong>.</p>
                <p>GameZoneEngine begränsar Twitch-belöningar till <strong>6 000 Coins per timme</strong> och <strong>30 000 Coins per 24 timmar</strong>.</p>
                <p>Twitchkopplingen och tittartiden hanteras direkt på servern via StreamingModule. Du behöver inte länka Twitch via hemsidan.</p>
            </div>
            <div className={styles.liveSummary}><span className={styles.summaryDotOffline}/>
                <strong>{creators.length} registrerade creators</strong>
                <small>Öppna en kanal för att se om den är live</small></div>
        </PageContainer></section>
        <PageContainer className={styles.content}><section className={styles.creatorsSection}>
            <div className={styles.sectionHeading}><div><span>GameZone Creators</span><h2>Registrerade Twitchkanaler</h2></div><p>Livestatus visas på Twitch.</p></div>
            <div className={styles.creatorGrid}>
                {creators.map((creator) => <Link key={creator.twitchLogin} href={creator.channelUrl} target="_blank" rel="noreferrer" className={styles.creatorCard}>
                    <div className={styles.creatorPreview}><div className={styles.creatorOfflineImage} style={(creator.offlineImageUrl || creator.profileImageUrl) ? { backgroundImage: `url(${creator.offlineImageUrl || creator.profileImageUrl})` } : undefined}/><div className={styles.creatorShade}/><span className={styles.cardOfflineBadge}>TWITCH</span></div>
                    <div className={styles.creatorBody}><div className={styles.avatar} style={creator.profileImageUrl ? { backgroundImage: `url(${creator.profileImageUrl})` } : undefined}>{creator.profileImageUrl ? "" : creator.initials}</div><div><strong>{creator.displayName}</strong><p>{creator.description || "GameZone Creator på Twitch"}</p><span>twitch.tv/{creator.twitchLogin}</span></div><b aria-hidden="true">→</b></div>
                </Link>)}
            </div>
            {creators.length === 0 && <p>Inga GameZone Creators är registrerade ännu.</p>}
        </section></PageContainer>
    </div></MainLayout>;
}
