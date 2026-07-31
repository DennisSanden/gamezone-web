import Link from "next/link";
import type { ReactNode } from "react";
import { getApprovedLiveStreams } from "@/lib/twitch";
import { getFeaturedStreamer } from "@/lib/streamers";
import { getLeaderboard, getServerStatus, type LeaderboardEntry } from "@/lib/home-data";
import styles from "./HomeDashboard.module.css";

type IconName = "compass" | "rules" | "discord" | "server" | "version" | "players" | "clock" | "crown" | "tools" | "coin" | "bank" | "chest" | "watch" | "sales";

function Icon({ name }: { name: IconName }) {
  const common = { width: 22, height: 22, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 1.8, strokeLinecap: "round" as const, strokeLinejoin: "round" as const, "aria-hidden": true };
  const icons: Record<IconName, ReactNode> = {
    compass: <svg {...common}><circle cx="12" cy="12" r="8"/><path d="m15.5 8.5-2.1 4.9-4.9 2.1 2.1-4.9 4.9-2.1Z"/></svg>,
    rules: <svg {...common}><path d="M6 3h9l3 3v15H6z"/><path d="M15 3v4h4M9 11h6M9 15h6"/></svg>,
    discord: <svg {...common}><path d="M8.2 7.2A10.8 10.8 0 0 1 12 6.5c1.4 0 2.7.2 3.8.7 1.5 2 2.2 4.2 2.2 6.6-1.6 1.2-3.2 1.8-4.8 2.1l-.8-1.1c.7-.2 1.3-.5 1.9-.9-1.8.8-3.8.8-5.6 0 .6.4 1.2.7 1.9.9l-.8 1.1c-1.6-.3-3.2-.9-4.8-2.1 0-2.4.7-4.6 2.2-6.6Z"/><circle cx="9.4" cy="12" r=".8" fill="currentColor" stroke="none"/><circle cx="14.6" cy="12" r=".8" fill="currentColor" stroke="none"/></svg>,
    server: <svg {...common}><rect x="4" y="4" width="16" height="6" rx="2"/><rect x="4" y="14" width="16" height="6" rx="2"/><path d="M8 7h.01M8 17h.01"/></svg>,
    version: <svg {...common}><path d="M12 3 4.5 7v10L12 21l7.5-4V7z"/><path d="m4.8 7.2 7.2 4 7.2-4M12 11v10"/></svg>,
    players: <svg {...common}><circle cx="9" cy="8" r="3"/><path d="M3.5 19c.5-3 2.2-5 5.5-5s5 2 5.5 5"/><path d="M15.5 6.5a2.5 2.5 0 0 1 0 5M16 14c2.5.3 3.8 2 4.2 4.5"/></svg>,
    clock: <svg {...common}><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>,
    crown: <svg {...common}><path d="m4 8 4 3 4-6 4 6 4-3-2 10H6z"/><path d="M6 18h12"/></svg>,
    tools: <svg {...common}><path d="M14.5 6.5a4 4 0 0 0-5 5L4 17l3 3 5.5-5.5a4 4 0 0 0 5-5l-2.5 2.5-2-2z"/></svg>,
    coin: <svg {...common}><circle cx="12" cy="12" r="8"/><path d="M14.5 9.5c-.5-.7-1.3-1-2.5-1-1.4 0-2.5.7-2.5 1.8 0 2.8 5 1.2 5 4 0 1.1-1 1.8-2.5 1.8-1.2 0-2.1-.4-2.7-1.2M12 7v10"/></svg>,
    bank: <svg {...common}><path d="m3 9 9-5 9 5M5 10h14M6 10v7M10 10v7M14 10v7M18 10v7M4 18h16M3 21h18"/></svg>,
    chest: <svg {...common}><path d="M4 8h16v11H4zM3 5h18v4H3z"/><path d="M10 12h4v3h-4z"/></svg>,
    watch: <svg {...common}><circle cx="10" cy="10" r="5"/><path d="m14 14 5 5M10 7v3l2 1"/></svg>,
    sales: <svg {...common}><path d="M5 19V9M10 19V5M15 19v-7M20 19V3"/><path d="M3 19h19"/></svg>,
  };
  return icons[name];
}

function formatValue(value: number) {
  return new Intl.NumberFormat("sv-SE").format(value);
}

function MiniBoard({ title, icon, entries, suffix }: { title: string; icon: IconName; entries: LeaderboardEntry[]; suffix: string }) {
  return <article className={styles.miniBoard}>
    <div className={styles.miniBoardHeader}>
      <span className={styles.boardIcon}><Icon name={icon}/></span>
      <h3>{title}</h3>
    </div>
    <ol>
      {[0,1,2].map((index) => {
        const entry = entries[index];
        return <li key={index} className={index === 0 ? styles.firstPlace : undefined}>
          <span className={`${styles.rank} ${styles[`rank${index + 1}`]}`}>
            {index === 0 ? <Icon name="crown"/> : index + 1}
          </span>
          <span className={styles.playerName}>
            <strong>{entry?.displayName ?? "Inväntar data"}</strong>
            {index === 0 && entry ? <small>Nuvarande ledare</small> : null}
          </span>
          <b>{entry ? `${formatValue(entry.value)} ${suffix}` : "–"}</b>
        </li>;
      })}
    </ol>
  </article>;
}

export async function HomeDashboard() {
  const [liveStreams, serverStatus, richest, residents, sales] = await Promise.all([
    getApprovedLiveStreams(),
    getServerStatus(),
    getLeaderboard("player-coins"),
    getLeaderboard("settlement-members"),
    getLeaderboard("company-sales"),
  ]);
  const creator = getFeaturedStreamer();
  const stream = liveStreams.find((item) => item.login === creator.twitchLogin);

  return <div className={styles.page}>
    <section className={styles.hero}>
      <div className={styles.heroOverlay}/>
      <div className={styles.heroInner}>
        <div className={styles.heroCopy}>
          <h1><span>Bygg mer än en bas.</span><span>Bygg ett <em>rike.</em></span></h1>
          <p className={styles.intro}>GameZone är en svensk Minecraft-server där spelare skapar städer, driver ekonomi och formar historien tillsammans.</p>
        </div>
      </div>
    </section>

    <section className={styles.playSection} aria-label="Spela på GameZone">
      <a href="https://discord.gg/Uk9TzJh3DJ" target="_blank" rel="noreferrer" className={styles.playButton}>
        <span className={styles.playButtonIcon}>▶</span>
        <span>Spela nu</span>
      </a>
      <div className={styles.playMeta}>
        <span className={serverStatus.online ? styles.playStatusOnline : styles.playStatusOffline}/>
        <strong>{serverStatus.online ? `${serverStatus.playersOnline} / ${serverStatus.playersMax || 40} online` : "Servern offline"}</strong>
        <span>•</span>
        <span>Java 26.1.2</span>
        <span>•</span>
        <span>play.gamezonemc.se</span>
      </div>
    </section>

    <section className={styles.quickGrid}>
      <Link href="/kom-igang" className={styles.quickCard}><Icon name="compass"/><strong>Kom igång</strong><small>Från Discord till första settlement</small></Link>
      <a href="https://discord.gg/Uk9TzJh3DJ" target="_blank" rel="noreferrer" className={`${styles.quickCard} ${styles.featuredCard}`}><Icon name="discord"/><strong>Bli whitelistad</strong><small>Gå med och ansök i Discord</small></a>
      <Link href="/wiki" className={styles.quickCard}><Icon name="rules"/><strong>Wiki</strong><small>Alla system på ett ställe</small></Link>
      <Link href="/regler" className={styles.quickCard}><Icon name="rules"/><strong>Regler</strong><small>Läs innan du börjar spela</small></Link>
    </section>

    <section className={styles.dashboardGrid}>
      <article className={styles.panel}>
        <div className={styles.panelHeader}><h2><span className={stream ? styles.liveDot : styles.offlineDot}/> Live på GameZone</h2><a href={creator.channelUrl}>Twitch →</a></div>
        <a className={styles.streamCard} href={creator.channelUrl} target="_blank" rel="noreferrer">
          <div className={styles.streamPreview} style={stream ? {backgroundImage:`url(${stream.thumbnailUrl})`} : undefined}>
            <span className={stream ? styles.liveBadge : styles.offlineBadge}>{stream ? "LIVE" : "OFFLINE"}</span>
            <div className={styles.streamOverlay}><strong>{stream ? stream.title : "Streamen är offline"}</strong><small>{stream ? `${stream.viewerCount} tittare · ${stream.gameName}` : "Nästa äventyr på GameZone väntar"}</small></div>
          </div>
          <div className={styles.streamFooter}><span className={styles.avatar}>{creator.initials}</span><span><strong>{creator.displayName}</strong><small>Nästa stream visas här</small></span><b>Följ</b></div>
        </a>
      </article>

      <article className={styles.panel}>
        <div className={styles.panelHeader}><h2>Serverinformation</h2></div>
        <div className={styles.serverList}>
          <div><span><Icon name="server"/> IP-adress</span><strong>play.gamezonemc.se</strong></div>
          <div><span><Icon name="version"/> Minecraft</span><strong>Java 26.1.2</strong></div>
          <div><span><Icon name="players"/> Spelare</span><strong>{serverStatus.online ? `${serverStatus.playersOnline} / ${serverStatus.playersMax || "?"}` : "0 / ?"}</strong></div>
          <div><span><Icon name="clock"/> Status</span><strong className={serverStatus.online ? styles.online : styles.offline}>{serverStatus.online ? "Online" : "Offline"}</strong></div>
        </div>
        <Link href="/status" className={styles.panelCta}>Detaljerad serverstatus <span>↗</span></Link>
      </article>
    </section>

    <section className={styles.leaderboardPanel}>
      <div className={styles.sectionHeader}><h2>Leaderboards</h2><Link href="/leaderboards">Se alla →</Link></div>
      <div className={styles.leaderboardGrid}>
        <MiniBoard title="Topp 3 rikaste spelare" icon="coin" entries={richest} suffix="Coins"/>
        <MiniBoard title="Topp 3 flest invånare" icon="players" entries={residents} suffix="inv."/>
        <MiniBoard title="Topp 3 mest försäljning" icon="sales" entries={sales} suffix="Coins"/>
      </div>
    </section>

  </div>;
}
