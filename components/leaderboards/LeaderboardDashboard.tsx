"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { ItemIcon } from "@/components/marketwatch/ItemIcon";
import type { LeaderboardBoard, LeaderboardEntry } from "@/lib/leaderboard-data";
import styles from "@/app/leaderboards/page.module.css";

type Category = "players" | "settlements" | "companies" | "server";
type Definition = { key: string; title: string; description: string; label: string; icon: string };

const categories: Record<Category, { label: string; eyebrow: string; description: string; icon: string }> = {
  players: { label: "Spelare", eyebrow: "Individuella prestationer", description: "Ekonomi, produktion, aktivitet och stridsstatistik för spelarna som satt störst avtryck på servern.", icon: "♟" },
  settlements: { label: "Settlements", eyebrow: "Städer och samhällen", description: "Jämför stadskassor, befolkning, utvecklingsnivå och hur mycket skatt varje settlement har samlat in.", icon: "♜" },
  companies: { label: "Företag", eyebrow: "Handel och tillväxt", description: "Följ företagen som leder ekonomin genom kapital, försäljning, transaktioner, licensnivå och medlemsantal.", icon: "◆" },
  server: { label: "Servern", eyebrow: "GameZone i siffror", description: "En samlad överblick över ekonomin, organisationerna och hur många unika spelare som varit aktiva.", icon: "◎" },
};

const definitions: Record<Category, Definition[]> = {
  players: [
    { key: "PLAYER_COINS", title: "Rikaste spelare", description: "Högst aktuellt personligt coin-saldo.", label: "Coins", icon: "◉" },
    { key: "PLAYER_PRODUCTION", title: "Mest producerat", description: "Flest registrerade producerade items totalt.", label: "Items", icon: "⚒" },
    { key: "PLAYER_PLAY_TIME", title: "Mest spelad tid", description: "Flest aktiva timmar registrerade på GameZone.", label: "Speltid", icon: "◷" },
    { key: "PLAYER_KILLS", title: "Flest kills", description: "Flest registrerade spelarkills.", label: "Kills", icon: "⚔" },
    { key: "PLAYER_DEATHS", title: "Flest deaths", description: "Flest registrerade dödsfall.", label: "Deaths", icon: "☠" },
    { key: "PLAYER_KD", title: "Högst K/D", description: "Bäst förhållande mellan kills och deaths.", label: "K/D", icon: "✦" },
  ],
  settlements: [
    { key: "SETTLEMENT_TREASURY", title: "Rikaste settlement", description: "Högst aktuellt saldo i stadskassan.", label: "Coins", icon: "◉" },
    { key: "SETTLEMENT_MEMBERS", title: "Flest invånare", description: "Störst registrerad befolkning.", label: "Invånare", icon: "♟" },
    { key: "SETTLEMENT_LEVEL", title: "Högst nivå", description: "Settlements som nått längst i utvecklingen.", label: "Nivå", icon: "▲" },
    { key: "SETTLEMENT_TAX_COLLECTED", title: "Mest skatt insamlad", description: "Störst totalt skatteinflöde till stadskassan.", label: "Coins", icon: "▣" },
  ],
  companies: [
    { key: "COMPANY_WEALTH", title: "Rikaste företag", description: "Högst aktuellt företagskapital.", label: "Coins", icon: "◉" },
    { key: "COMPANY_SALES", title: "Mest försäljning", description: "Högst total försäljning genom handelssystemet.", label: "Coins", icon: "↗" },
    { key: "COMPANY_TRANSACTIONS", title: "Flest transaktioner", description: "Flest slutförda köp och försäljningar.", label: "Transaktioner", icon: "⇄" },
    { key: "COMPANY_LICENSE", title: "Högsta licensnivå", description: "Företagen med mest utvecklad licens.", label: "Licens", icon: "◆" },
    { key: "COMPANY_MEMBERS", title: "Största företag", description: "Flest registrerade företagsmedlemmar.", label: "Medlemmar", icon: "♟" },
  ],
  server: [
    { key: "SERVER_COIN_ECONOMY", title: "Coin-ekonomi", description: "Totalt antal coins i den aktiva ekonomin.", label: "Coins", icon: "◉" },
    { key: "SERVER_ACTIVE_SETTLEMENTS", title: "Aktiva settlements", description: "Antal registrerade settlements.", label: "Settlements", icon: "♜" },
    { key: "SERVER_ACTIVE_COMPANIES", title: "Aktiva företag", description: "Antal registrerade företag.", label: "Företag", icon: "◆" },
    { key: "SERVER_ACTIVE_TODAY", title: "Aktiva idag", description: "Unika spelare som varit online idag.", label: "Spelare", icon: "●" },
    { key: "SERVER_ACTIVE_WEEK", title: "Aktiva denna vecka", description: "Unika spelare som varit online under veckan.", label: "Spelare", icon: "▥" },
  ],
};

const number = new Intl.NumberFormat("sv-SE");

export function formatLeaderboardValue(entry: LeaderboardEntry, board: LeaderboardBoard | undefined, label: string) {
  if (entry.detail) return entry.detail;
  if (board?.valueType === "SECONDS" || board?.valueType === "PLAY_TIME_SECONDS") {
    const days = Math.floor(entry.value / 86400);
    const hours = Math.floor((entry.value % 86400) / 3600);
    const minutes = Math.floor((entry.value % 3600) / 60);
    return days > 0 ? `${days} d ${hours} h` : `${hours} h ${minutes} min`;
  }
  if (board?.valueType === "RATIO_X100") return (entry.value / 100).toFixed(2);
  if (board?.valueType === "RATIO_BASIS_POINTS") return (entry.value / 10000).toFixed(2);
  const value = number.format(entry.value);
  return board?.valueType === "COINS" || label === "Coins" ? `${value} coins` : value;
}

function PlayerAvatar({ name }: { name: string }) {
  return <img className={styles.avatar} src={`https://mc-heads.net/avatar/${encodeURIComponent(name)}/48`} alt="" loading="lazy" />;
}

function EntityVisual({ board, name }: { board?: LeaderboardBoard; name: string }) {
  if (board?.entityType === "PLAYER") return <PlayerAvatar name={name} />;
  if (board?.entityType === "SETTLEMENT") return <span className={styles.minecraftIcon}><ItemIcon itemId="minecraft:bell" itemName="Settlement" size={38} /></span>;
  if (board?.entityType === "COMPANY") return <span className={styles.minecraftIcon}><ItemIcon itemId="minecraft:emerald" itemName="Företag" size={38} /></span>;
  return <span className={styles.entityIcon}>◎</span>;
}

function RankingCard({ board, definition, serverCard }: { board?: LeaderboardBoard; definition: Definition; serverCard: boolean }) {
  const entries = board?.entries ?? [];
  const shown = entries.length ? entries : Array.from({ length: serverCard ? 1 : 5 }, (_, index) => ({ rank: index + 1, entityId: `empty-${index}`, displayName: "Ingen data ännu", value: 0 }));
  return (
    <article className={`${styles.boardCard} ${serverCard ? styles.serverBoardCard : ""}`}>
      <header className={styles.boardHeader}>
        <div className={styles.boardIcon}>{definition.icon}</div>
        <div className={styles.boardHeading}>
          <div className={styles.boardTitleLine}><h3>{definition.title}</h3><span className={styles.liveBadge}>LIVE</span></div>
          <p>{definition.description}</p>
        </div>
      </header>
      <ol className={styles.rankingList}>
        {shown.map((entry) => {
          const empty = entries.length === 0;
          return (
            <li key={`${definition.key}-${entry.entityId}-${entry.rank}`} className={`${styles.rankingRow} ${entry.rank <= 3 && !serverCard ? styles.podiumRow : ""}`}>
              {!serverCard && <span className={`${styles.rank} ${styles[`rank${entry.rank}`] ?? ""}`}>{entry.rank}</span>}
              <div className={styles.identity}>
                {!empty && <EntityVisual board={board} name={entry.displayName} />}
                {empty && <span className={styles.entityIcon}>?</span>}
                <div><strong>{entry.displayName}</strong><small>{definition.label}</small></div>
              </div>
              <div className={styles.value}><strong>{empty ? "–" : formatLeaderboardValue(entry, board, definition.label)}</strong><small>{definition.label}</small></div>
            </li>
          );
        })}
      </ol>
      {!serverCard && entries.length > 0 && (
        <Link className={styles.fullTableLink} href={`/leaderboards/${definition.key.toLowerCase()}`}>Visa hela tabellen <span>→</span></Link>
      )}
    </article>
  );
}

function TitleOverview({ board }: { board?: LeaderboardBoard }) {
  const counts = useMemo(() => {
    const map = new Map<string, number>();
    for (const entry of board?.entries ?? []) map.set(entry.detail ?? "Okänd titel", (map.get(entry.detail ?? "Okänd titel") ?? 0) + 1);
    return [...map.entries()].sort((a, b) => b[1] - a[1]);
  }, [board]);
  const total = counts.reduce((sum, [, count]) => sum + count, 0);
  return (
    <article className={styles.titleOverview}>
      <div className={styles.titleArtwork}><span>♛</span><strong>Titlar på GameZone</strong><small>En överblick över hela titelstrukturen</small></div>
      <div className={styles.titleContent}>
        <span className={styles.eyebrowInline}>Titelstege</span>
        <h3>Mer än bara fem kungar</h3>
        <p>Här visas hur spelarna är fördelade mellan Kung, Lord och produktionssystemets titlar. Hela listan går att öppna separat.</p>
        <div className={styles.titleChips}>{counts.slice(0, 8).map(([title, count]) => <span key={title}><strong>{count}</strong>{title}</span>)}</div>
        <div className={styles.titleFooter}><span>{number.format(total)} spelare med aktiv titel</span><Link href="/leaderboards/player_titles">Visa alla titlar →</Link></div>
      </div>
    </article>
  );
}

export function LeaderboardDashboard({ leaderboards, titleBoard }: { leaderboards: LeaderboardBoard[]; titleBoard?: LeaderboardBoard | null }) {
  const [active, setActive] = useState<Category>("players");
  const map = useMemo(() => new Map(leaderboards.map((board) => [board.key.toUpperCase(), board])), [leaderboards]);
  const highlights = [
    { label: "Rikaste spelare", key: "PLAYER_COINS", icon: "◉", valueLabel: "Coins" },
    { label: "Största settlement", key: "SETTLEMENT_MEMBERS", icon: "♜", valueLabel: "Invånare" },
    { label: "Ledande företag", key: "COMPANY_SALES", icon: "◆", valueLabel: "Coins" },
    { label: "Aktiva denna vecka", key: "SERVER_ACTIVE_WEEK", icon: "●", valueLabel: "Spelare" },
  ];
  const category = categories[active];

  return (
    <div className={styles.dashboard}>
      <section className={styles.highlights} aria-label="Snabböversikt">
        {highlights.map((item) => {
          const board = map.get(item.key);
          const entry = board?.entries[0];
          return <article key={item.key} className={styles.highlightCard}><span className={styles.highlightIcon}>{item.icon}</span><div><small>{item.label}</small><strong>{entry?.displayName ?? "Ingen data"}</strong><span>{entry ? formatLeaderboardValue(entry, board, item.valueLabel) : "Väntar på Engine API"}</span></div></article>;
        })}
      </section>

      <nav className={styles.tabs} aria-label="Leaderboard-kategorier">
        {(Object.keys(categories) as Category[]).map((key) => <button key={key} type="button" className={active === key ? styles.activeTab : styles.tab} onClick={() => setActive(key)}><span>{categories[key].icon}</span><div><strong>{categories[key].label}</strong><small>{definitions[key].length} topplistor</small></div></button>)}
      </nav>

      <section className={styles.categoryIntro}>
        <div className={styles.categoryMark}>{category.icon}</div>
        <div><span>{category.eyebrow}</span><h2>{category.label}</h2><p>{category.description}</p></div>
        <div className={styles.categoryCount}><strong>{definitions[active].length}</strong><small>topplistor</small></div>
      </section>

      {active === "players" && <TitleOverview board={titleBoard ?? undefined} />}

      <section className={`${styles.boardGrid} ${active === "server" ? styles.serverGrid : ""}`}>
        {definitions[active].map((definition) => <RankingCard key={definition.key} definition={definition} board={map.get(definition.key)} serverCard={active === "server"} />)}
      </section>

      {leaderboards.length === 0 && <aside className={styles.notice}><strong>Ingen live-data kunde hämtas</strong><p>Kontrollera att ENGINE_API_URL är satt och att webbservern kan nå GameZone Engine.</p></aside>}
    </div>
  );
}
