import type { Metadata } from "next";
import { MainLayout } from "@/components/layout/MainLayout";
import { PageContainer } from "@/components/layout/PageContainer";
import { MarketWatchDashboard } from "@/components/marketwatch/MarketWatchDashboard";
import styles from "./page.module.css";

export const metadata: Metadata = {
    title: "MarketWatch | GameZone",
    description: "Följ priser, efterfrågan, lager och resursbrist på GameZone-marknaden.",
};

export default function MarketWatchPage() {
    return (
        <MainLayout>
            <section className={styles.hero}>
                <PageContainer>
                    <div className={styles.heroInner}>
                        <div className={styles.copy}>
                            <span className={styles.eyebrow}>GAMEZONE ECONOMY NETWORK</span>
                            <h1>MARKET<span>WATCH</span></h1>
                            <p>Se vad servern behöver, vad marknaden betalar och var nästa stora affär finns.</p>
                            <div className={styles.badges}><span>Livepriser</span><span>Resursbrist</span><span>Prisrörelser</span><span>Alla items</span></div>
                        </div>
                        <div className={styles.visual} aria-hidden="true">
                            <div className={styles.orbit}><i /><i /><i /></div>
                            <div className={styles.chart}><span /><span /><span /><span /><span /><span /><span /></div>
                            <div className={styles.ticker}><span>IRON</span><strong>14 C</strong><b>+6.4%</b></div>
                        </div>
                    </div>
                </PageContainer>
            </section>
            <PageContainer><MarketWatchDashboard /></PageContainer>
        </MainLayout>
    );
}
