import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MainLayout } from "@/components/layout/MainLayout";
import { PageContainer } from "@/components/layout/PageContainer";
import { ItemIcon } from "@/components/marketwatch/ItemIcon";
import { getAllLeaderboardEntries, type LeaderboardEntry } from "@/lib/leaderboard-data";
import styles from "../page.module.css";

const labels: Record<string, string> = {
  COINS: "Coins", ITEMS: "Items", SECONDS: "Speltid", KILLS: "Kills", DEATHS: "Deaths", RATIO_X100: "K/D", TITLE_RANK: "Titel", MEMBERS: "Medlemmar", LEVEL: "Nivå", TRANSACTIONS: "Transaktioner", COUNT: "Antal", PLAYERS: "Spelare", WINS: "Vinster", LOSSES: "Förluster", REFERRALS: "Värvningar", TICKET_DIFFERENTIAL: "Ticket-differens",
};
const number = new Intl.NumberFormat("sv-SE");

export const dynamic = "force-dynamic";

function format(entry: LeaderboardEntry, valueType: string) {
  if (entry.detail) return entry.detail;
  if (valueType === "SECONDS") {
    const days = Math.floor(entry.value / 86400); const hours = Math.floor((entry.value % 86400) / 3600); const minutes = Math.floor((entry.value % 3600) / 60);
    return days > 0 ? `${days} dagar, ${hours} timmar` : `${hours} timmar, ${minutes} minuter`;
  }
  if (valueType === "RATIO_X100") return (entry.value / 100).toFixed(2);
  return valueType === "COINS" ? `${number.format(entry.value)} coins` : number.format(entry.value);
}

function entityHref(entityType: string, entry: LeaderboardEntry) {
  if (entityType === "PLAYER") return `/spelare/${encodeURIComponent(entry.displayName)}`;
  if (entityType === "SETTLEMENT") return `/settlements?settlement=${encodeURIComponent(entry.entityId)}`;
  if (entityType === "COMPANY") return `/companies/${encodeURIComponent(entry.entityId)}`;
  return null;
}

export async function generateMetadata({ params }: { params: Promise<{ key: string }> }): Promise<Metadata> {
  const { key } = await params;
  const board = await getAllLeaderboardEntries(key);
  return { title: board ? `${board.displayName} | GameZone` : "Leaderboard | GameZone" };
}

export default async function LeaderboardDetailPage({ params, searchParams }: { params: Promise<{ key: string }>; searchParams: Promise<{ page?: string; q?: string }> }) {
  const { key } = await params;
  const { page: rawPage, q: rawQuery } = await searchParams;
  const board = await getAllLeaderboardEntries(key);
  if (!board) notFound();

  const resultLabel = board.key.toUpperCase() === "PLAYER_DUEL_WINS"
      ? "Vunna dueller"
      : labels[board.valueType] ?? "Resultat";

  const pageSize = 25;
  const query = (rawQuery ?? "").trim();
  const normalizedQuery = query.toLocaleLowerCase("sv-SE");
  const searchedEntries = normalizedQuery
      ? board.entries.filter((entry) => entry.displayName.toLocaleLowerCase("sv-SE").includes(normalizedQuery) || (entry.detail ?? "").toLocaleLowerCase("sv-SE").includes(normalizedQuery))
      : board.entries;
  const isTitleBoard = board.key.toLowerCase() === "player_titles";
  const regularTitles = searchedEntries.filter((entry) => {
    const title = (entry.detail ?? "").toLocaleLowerCase("sv-SE");
    return title !== "kung" && title !== "lord";
  });
  const kings = searchedEntries.filter((entry) => (entry.detail ?? "").toLocaleLowerCase("sv-SE") === "kung");
  const lords = searchedEntries.filter((entry) => (entry.detail ?? "").toLocaleLowerCase("sv-SE") === "lord");
  const pagedSource = isTitleBoard ? regularTitles : searchedEntries;
  const totalPages = Math.max(1, Math.ceil(pagedSource.length / pageSize));
  const page = Math.min(totalPages, Math.max(1, Number.parseInt(rawPage ?? "1", 10) || 1));
  const entries = pagedSource.slice((page - 1) * pageSize, page * pageSize);
  const pages = Array.from({ length: totalPages }, (_, index) => index + 1).filter(value => value === 1 || value === totalPages || Math.abs(value - page) <= 2);

  const renderRows = (rows: LeaderboardEntry[], showRank = true) => rows.map((entry, index) => (
      <div className={styles.tableRow} key={`${entry.entityId}-${entry.rank}`}>
        <span className={`${styles.tableRank} ${(showRank ? entry.rank : index + 1) <= 3 ? styles[`rank${showRank ? entry.rank : index + 1}`] : ""}`}>#{showRank ? entry.rank : index + 1}</span>
        <span className={styles.tableIdentity}>
        <img src={`https://mc-heads.net/avatar/${encodeURIComponent(entry.displayName)}/40`} alt="" />
        <Link className={styles.entityLink} href={`/spelare/${encodeURIComponent(entry.displayName)}`}>{entry.displayName}</Link>
      </span>
        <strong className={styles.tableValue}>{format(entry, board.valueType)}</strong>
      </div>
  ));

  return (
      <MainLayout>
        <div className={styles.page}>
          <section className={styles.detailHero}><PageContainer><Link className={styles.backLink} href="/leaderboards">← Alla leaderboards</Link><span className={styles.eyebrow}>{board.entityType}</span><h1>{board.displayName}</h1><p>Hela tabellen, sida {page} av {totalPages}. Data hämtas direkt från GameZone Engine.</p></PageContainer></section>
          <PageContainer>
            <div className={styles.detailShell}>
              <form className={styles.detailSearch} method="get">
                <span>⌕</span>
                <input name="q" defaultValue={query} placeholder={`Sök ${board.entityType === "PLAYER" ? "spelare" : board.entityType === "SETTLEMENT" ? "settlement" : board.entityType === "COMPANY" ? "företag" : "i tabellen"}...`} aria-label="Sök i leaderboard" />
                <button type="submit">Sök</button>
                {query && <Link href="?">Rensa</Link>}
              </form>
              <div className={styles.detailStats}><span><strong>{number.format(searchedEntries.length)}</strong> {query ? "träffar" : "poster"}</span><span><strong>{isTitleBoard ? number.format(regularTitles.length) : pageSize}</strong> {isTitleBoard ? "vanliga titlar" : "per sida"}</span><span><strong>60 sek</strong> uppdatering</span></div>
              {isTitleBoard ? (
                  <div className={styles.titleSections}>
                    <section className={`${styles.titleSection} ${styles.titleSectionPrimary}`}>
                      <header className={styles.titleSectionHeader}><div><h2>Vanliga titlar</h2><p>Produktions- och progressionstitlar. Det här är huvudrankingen.</p></div><span>{number.format(regularTitles.length)}</span></header>
                      <div className={styles.tableHead}><span>Placering</span><span>Spelare</span><span>Titel</span></div>
                      {renderRows(entries)}
                    </section>
                    <section className={styles.titleSection}>
                      <header className={styles.titleSectionHeader}><div><h2>Kungar</h2><p>Spelare som leder ett settlement.</p></div><span>{number.format(kings.length)}</span></header>
                      <div className={styles.tableHead}><span>#</span><span>Spelare</span><span>Roll</span></div>
                      {renderRows(kings, false)}
                    </section>
                    <section className={styles.titleSection}>
                      <header className={styles.titleSectionHeader}><div><h2>Lords</h2><p>Spelare med ledningsroll i ett settlement.</p></div><span>{number.format(lords.length)}</span></header>
                      <div className={styles.tableHead}><span>#</span><span>Spelare</span><span>Roll</span></div>
                      {renderRows(lords, false)}
                    </section>
                  </div>
              ) : (
                  <div className={styles.fullTable}>
                    <div className={styles.tableHead}><span>Placering</span><span>Namn</span><span>{resultLabel}</span></div>
                    {entries.map(entry => (
                        <div className={styles.tableRow} key={`${entry.entityId}-${entry.rank}`}>
                          <span className={`${styles.tableRank} ${entry.rank <= 3 ? styles[`rank${entry.rank}`] : ""}`}>#{entry.rank}</span>
                          <span className={styles.tableIdentity}>
                      {board.entityType === "PLAYER" && <img src={`https://mc-heads.net/avatar/${encodeURIComponent(entry.displayName)}/40`} alt="" />}
                            {board.entityType === "SETTLEMENT" && <ItemIcon itemId="minecraft:bell" itemName="Settlement" size={40} />}
                            {board.entityType === "COMPANY" && <ItemIcon itemId="minecraft:emerald" itemName="Företag" size={40} />}
                            {entityHref(board.entityType, entry)
                              ? <Link className={styles.entityLink} href={entityHref(board.entityType, entry)!}>{entry.displayName}</Link>
                              : <strong>{entry.displayName}</strong>}
                    </span>
                          <strong className={styles.tableValue}>{format(entry, board.valueType)}</strong>
                        </div>
                    ))}
                  </div>
              )}
              {pagedSource.length === 0 && <div className={styles.searchEmpty}>Ingen matchade {query ? `“${query}”` : "sökningen"}.</div>}
              {pagedSource.length > 0 && <nav className={styles.pagination} aria-label="Sidnavigering">
                <Link className={page === 1 ? styles.disabledPage : styles.pageButton} href={`?page=${Math.max(1, page - 1)}${query ? `&q=${encodeURIComponent(query)}` : ""}`}>← Föregående</Link>
                <div>{pages.map((value, index) => <span key={value}>{index > 0 && value - pages[index - 1] > 1 ? <i>…</i> : null}<Link className={value === page ? styles.activePage : styles.pageNumber} href={`?page=${value}${query ? `&q=${encodeURIComponent(query)}` : ""}`}>{value}</Link></span>)}</div>
                <Link className={page === totalPages ? styles.disabledPage : styles.pageButton} href={`?page=${Math.min(totalPages, page + 1)}${query ? `&q=${encodeURIComponent(query)}` : ""}`}>Nästa →</Link>
              </nav>}
            </div>
          </PageContainer>
        </div>
      </MainLayout>
  );
}