import type { Metadata } from "next";
import Link from "next/link";
import { MainLayout } from "@/components/layout/MainLayout";
import { PageContainer } from "@/components/layout/PageContainer";
import { getTwitchCreators } from "@/lib/twitch";
import styles from "./page.module.css";

export const dynamic = "force-dynamic";
export const metadata: Metadata = {
    title: "Live | GameZone",
    description: "Se vilka GameZone-kreatörer som är live på Twitch och tjäna Coins medan du tittar.",
};

export default async function LivePage() {
    const twitch = await getTwitchCreators();
    const creators = [...twitch.creators].sort((a, b) => Number(b.live) - Number(a.live));
    const liveCount = creators.filter((creator) => creator.live).length;

    return <MainLayout><div className={styles.page}>
        <section className={styles.hero}><PageContainer className={styles.heroInner}>
            <div><span className={styles.eyebrow}>GameZone Live</span><h1>Titta på servern. Få Coins.</h1>
                <p>Koppla ditt Twitchkonto med <strong>/twitch link</strong>. När en godkänd GameZone Creator streamar Minecraft får du {new Intl.NumberFormat("sv-SE").format(twitch.rewardCoins)} Coins för varje {twitch.rewardMinutes} minuter du är närvarande i streamens Twitch-chat.</p>
            </div>
            <div className={styles.liveSummary}><span className={liveCount > 0 ? styles.summaryDotLive : styles.summaryDotOffline}/>
                <strong>{liveCount > 0 ? `${liveCount} live just nu` : "Ingen är live just nu"}</strong>
                <small>{creators.length} godkända creators</small></div>
        </PageContainer></section>
        <PageContainer className={styles.content}><section className={styles.creatorsSection}>
            <div className={styles.sectionHeading}><div><span>GameZone Creators</span><h2>Live och godkända kanaler</h2></div><p>Livekanaler visas först.</p></div>
            <div className={styles.creatorGrid}>
                {creators.map((creator) => <Link key={creator.login} href={creator.channelUrl} target="_blank" rel="noreferrer" className={styles.creatorCard}>
                    <div className={styles.creatorPreview}>
                        {creator.live && creator.thumbnailUrl ? <div className={styles.creatorLiveImage} style={{backgroundImage:`url("${creator.thumbnailUrl}")`}}/> : <div className={styles.creatorOfflineImage}/>}<div className={styles.creatorShade}/>
                        <span className={creator.live ? styles.cardLiveBadge : styles.cardOfflineBadge}>{creator.live ? "Live" : "Offline"}</span>
                        {creator.live && <span className={styles.cardViewers}>{new Intl.NumberFormat("sv-SE").format(creator.viewerCount)} tittare</span>}
                    </div>
                    <div className={styles.creatorBody}><div className={styles.avatar}>{creator.displayName.slice(0,2).toUpperCase()}</div><div><strong>{creator.displayName}</strong><p>{creator.live ? creator.title : `twitch.tv/${creator.login}`}</p><span>{creator.live ? creator.gameName : creator.minecraftName}</span></div><b aria-hidden="true">→</b></div>
                </Link>)}
            </div>
            {creators.length === 0 && <p>Inga creators är kopplade och godkända ännu.</p>}
        </section></PageContainer>
    </div></MainLayout>;
}
