import type { Metadata } from "next";
import { MainLayout } from "@/components/layout/MainLayout";
import { PageContainer } from "@/components/layout/PageContainer";
import { SurvivalLeaderboard } from "@/components/survival/SurvivalLeaderboard";
import { getSurvivalOverview, getSurvivalRanking } from "@/lib/survival-stats-server";
import styles from "./page.module.css";

export const dynamic = "force-dynamic";
export const metadata: Metadata = {
  title: "Survival, statistik | GameZone",
  description: "Survival-rekord och statistik för samtliga deltagare. Extra detaljer för GameZones Patreons.",
};

export default async function SurvivalPage() {
  const [overview, ranking] = await Promise.allSettled([getSurvivalOverview(), getSurvivalRanking()]);
  const number = new Intl.NumberFormat("sv-SE");
  return <MainLayout>
    <div className={styles.page}>
      <PageContainer>
        <header className={styles.hero}>
          <p className={styles.eyebrow}>GAMEZONE EVENTS</p>
          <h1>Survival <span>statistik</span></h1>
          <p>Här syns alla deltagare som har spelat en registrerad Survival-match. Patreon ger extra djup i statistiken, inte en exklusiv plats på listan.</p>
        </header>
        {overview.status === "fulfilled" ? <div className={styles.summary}>
          <div><span>Avslutade matcher</span><strong>{number.format(overview.value.matches)}</strong></div>
          <div><span>Högsta wave</span><strong>{number.format(overview.value.bestWave)}</strong></div>
          <div><span>Totalt antal kills</span><strong>{number.format(overview.value.totalKills)}</strong></div>
        </div> : null}
        {overview.status === "fulfilled" ? <section className={styles.recent}>
          <h2>De 5 senaste omgångarna</h2>
          {overview.value.recentMatches?.length ? <div className={styles.recentList}>
            {overview.value.recentMatches.slice(0, 5).map((match) => <details className={styles.matchDetail} key={match.id}>
              <summary><span>{new Date(match.at).toLocaleString("sv-SE", { timeZone: "Europe/Stockholm", dateStyle: "medium", timeStyle: "short" })}</span>
                <strong>Wave {match.wave}</strong><span>{number.format(match.kills)} kills</span>
                <span>{match.players?.length ?? 0} deltagare</span></summary>
              <div className={styles.matchPlayers}>
                {match.players?.length ? match.players.map((player, index) => <div className={styles.matchPlayer} key={`${player.username}-${index}`}>
                  <strong>{player.username}</strong><span>{player.role || "Okänd klass"}</span>
                  <span>Wave {player.wave}</span><b>{player.kills} kills</b>
                </div>) : <p>Spelarstatistik saknas för den här äldre omgången.</p>}
              </div>
            </details>)}
          </div> : <p>Inga avslutade omgångar finns registrerade ännu.</p>}
        </section> : null}
        {ranking.status === "fulfilled" ? <SurvivalLeaderboard players={ranking.value} />
          : <p className={styles.error}>Vi kunde inte hämta deltagarlistan just nu. Försök igen senare.</p>}
        {overview.status === "fulfilled" && overview.value.records.length > 0 ? <section className={styles.records}>
          <h2>Lagrekord</h2>
          <div className={styles.recordGrid}>{overview.value.records.map((record, index) => <article key={`${record.at}-${index}`}>
            <strong>Wave {record.wave}</strong><span>{number.format(record.kills)} kills</span><p>{record.participants || "Okända deltagare"}</p>
          </article>)}</div>
        </section> : null}
      </PageContainer>
    </div>
  </MainLayout>;
}
