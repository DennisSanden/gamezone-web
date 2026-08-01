import type { Metadata } from "next";
import { MainLayout } from "@/components/layout/MainLayout";
import { PageContainer } from "@/components/layout/PageContainer";
import { LeaderboardDashboard } from "@/components/leaderboards/LeaderboardDashboard";
import { getLeaderboards } from "@/lib/leaderboard-data";
import styles from "./page.module.css";

export const metadata: Metadata = {
    title: "Leaderboards | GameZone",
    description:
        "Se topplistor för spelare, settlements, företag och serverstatistik på GameZone.",
};

export default async function LeaderboardsPage() {
    const leaderboards = await getLeaderboards(5);

    return (
        <MainLayout>
            <div className={styles.page}>
                <section className={styles.hero}>
                    <PageContainer>
                        <div className={styles.heroInner}>
                            <div className={styles.heroCopy}>
                                <span className={styles.eyebrow}>GameZone-statistik</span>
                                <h1>Leaderboards</h1>
                                <p>
                                    Följ serverns främsta spelare, mäktigaste settlements
                                    och mest framgångsrika företag på en samlad plats.
                                </p>

                                <div className={styles.heroBadges}>
                                    <span>Spelare</span>
                                    <span>Settlements</span>
                                    <span>Företag</span>
                                    <span>Server</span>
                                </div>
                            </div>

                            <div className={styles.heroVisual} aria-hidden="true">
                                <div className={styles.heroVisualShade} />
                                <div className={styles.heroTrophy}>🏆</div>
                                <div className={styles.heroVisualText}>
                                    <span>Topplistor</span>
                                    <strong>Vem leder GameZone?</strong>
                                </div>
                            </div>
                        </div>
                    </PageContainer>
                </section>

                <PageContainer>
                    <LeaderboardDashboard leaderboards={leaderboards} />
                </PageContainer>
            </div>
        </MainLayout>
    );
}
