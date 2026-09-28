import type { Metadata } from "next";
import Image from "next/image";
import { MainLayout } from "@/components/layout/MainLayout";
import { PageContainer } from "@/components/layout/PageContainer";
import { LeaderboardDashboard } from "@/components/leaderboards/LeaderboardDashboard";
import { getLeaderboard, getLeaderboards } from "@/lib/leaderboard-data";
import styles from "./page.module.css";

export const revalidate = 30;

export const metadata: Metadata = {
  title: "Leaderboards | GameZone",
  description: "Se topplistor för spelare, settlements, företag och serverstatistik på GameZone.",
};

export default async function LeaderboardsPage({ searchParams }: { searchParams: Promise<{ tab?: string }> }) {
  const params = await searchParams;
  const initialCategory = (["players", "events", "settlements", "companies", "server"] as const).includes(params.tab as any) ? params.tab as "players" | "events" | "settlements" | "companies" | "server" : "players";
  const [leaderboards, titleBoard, tdmBoard, archeryBoard, hungerGamesBoard] = await Promise.all([
    getLeaderboards(5),
    getLeaderboard("player_titles", 100, 0),
    getLeaderboard("PLAYER_EVENT_RATING_TDM", 5, 0),
    getLeaderboard("PLAYER_EVENT_RATING_ARCHERY_MASTERS", 5, 0),
    getLeaderboard("PLAYER_EVENT_RATING_HUNGER_GAMES", 5, 0),
  ]);

  // Event-ELO boards are fetched explicitly. They are newer than some Engine
  // leaderboard index responses and must not disappear just because the generic
  // /leaderboards endpoint omitted them.
  const mergedLeaderboards = [...leaderboards];
  for (const board of [tdmBoard, archeryBoard, hungerGamesBoard]) {
    if (board && !mergedLeaderboards.some((existing) => existing.key.toUpperCase() === board.key.toUpperCase())) {
      mergedLeaderboards.push(board);
    }
  }

  return (
      <MainLayout>
        <div className={styles.page}>
          <section className={styles.hero}>
            <Image className={styles.heroImage} src="/images/leaderboard.png" alt="GameZone leaderboardhall med trofé och topplista" fill priority sizes="100vw" />
            <div className={styles.heroOverlay} />
            <PageContainer>
              <div className={styles.heroInner}>
                <div className={styles.heroCopy}>
                  <span className={styles.eyebrow}>GameZone-statistik</span>
                  <h1>Legender skrivs i siffror.</h1>
                  <p>Följ serverns främsta spelare, mäktigaste settlements och mest framgångsrika företag. Varje topplista hämtas direkt från GameZone Engine.</p>
                  <div className={styles.heroBadges}><span>Live-data</span><span>Alla spelare</span><span>Sidvisning</span><span>Uppdateras automatiskt</span></div>
                </div>
              </div>
            </PageContainer>
          </section>
          <PageContainer><LeaderboardDashboard leaderboards={mergedLeaderboards} titleBoard={titleBoard} initialCategory={initialCategory} /></PageContainer>
        </div>
      </MainLayout>
  );
}