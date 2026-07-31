import Link from "next/link";
import type { ReactNode } from "react";
import { getApprovedLiveStreams } from "@/lib/twitch";
import { getFeaturedStreamer } from "@/lib/streamers";
import styles from "./HomeDashboard.module.css";

type IconName = "compass" | "rules" | "discord" | "server" | "version" | "players" | "clock" | "economy" | "map" | "news" | "crown" | "tools" | "coin" | "bank" | "chest" | "watch";

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
        economy: <svg {...common}><path d="M5 19V9M10 19V5M15 19v-7M20 19V3"/><path d="M3 19h19"/></svg>,
        map: <svg {...common}><path d="m4 6 5-2 6 2 5-2v14l-5 2-6-2-5 2z"/><path d="M9 4v14M15 6v14"/></svg>,
        news: <svg {...common}><path d="M5 4h14v16H5z"/><path d="M8 8h8M8 12h8M8 16h5"/></svg>,
        crown: <svg {...common}><path d="m4 8 4 3 4-6 4 6 4-3-2 10H6z"/><path d="M6 18h12"/></svg>,
        tools: <svg {...common}><path d="M14.5 6.5a4 4 0 0 0-5 5L4 17l3 3 5.5-5.5a4 4 0 0 0 5-5l-2.5 2.5-2-2z"/></svg>,
        coin: <svg {...common}><circle cx="12" cy="12" r="8"/><path d="M14.5 9.5c-.5-.7-1.3-1-2.5-1-1.4 0-2.5.7-2.5 1.8 0 2.8 5 1.2 5 4 0 1.1-1 1.8-2.5 1.8-1.2 0-2.1-.4-2.7-1.2M12 7v10"/></svg>,
        bank: <svg {...common}><path d="m3 9 9-5 9 5M5 10h14M6 10v7M10 10v7M14 10v7M18 10v7M4 18h16M3 21h18"/></svg>,
        chest: <svg {...common}><path d="M4 8h16v11H4zM3 5h18v4H3z"/><path d="M10 12h4v3h-4z"/></svg>,
        watch: <svg {...common}><circle cx="10" cy="10" r="5"/><path d="m14 14 5 5M10 7v3l2 1"/></svg>,
    };
    return icons[name];
}

const systems: Array<{ icon: IconName; title: string; text: string }> = [
    { icon: "crown", title: "15 nivåer", text: "Från Enstöring till Imperium" },
    { icon: "tools", title: "7 kategorier", text: "Specialisera din produktion" },
    { icon: "coin", title: "GZ Coins", text: "Tjäna, investera och väx" },
    { icon: "bank", title: "Stadskassor", text: "Skatter, bonusar och underhåll" },
    { icon: "chest", title: "Shopping Chests", text: "Handel mellan spelare" },
    { icon: "watch", title: "MarketWatch", text: "Se vad servern behöver" },
];

export async function HomeDashboard() {
    const liveStreams = await getApprovedLiveStreams();
    const creator = getFeaturedStreamer();
    const stream = liveStreams.find((item) => item.login === creator.twitchLogin);

    return (
        <div className={styles.page}>
            <section className={styles.hero}>
                <div className={styles.heroOverlay} />
                <div className={styles.heroGlow} />
                <div className={styles.heroInner}>
                    <div className={styles.heroCopy}>
                        <p className={styles.eyebrow}>EN SVENSK MINECRAFT-VÄRLD</p>
                        <h1>Bygg mer än en bas.<br /><span>Bygg ett rike.</span></h1>
                        <p className={styles.intro}>GameZone är en svensk Minecraft-server där spelare bygger settlements, skapar företag, driver handel och formar serverns historia tillsammans.</p>
                        <div className={styles.heroMeta}>
                            <span><i className={styles.statusDot} /> Servern är online</span>
                            <span>play.gamezonemc.se</span>
                        </div>
                    </div>
                </div>
            </section>

            <section className={styles.primaryActions} aria-label="Kom igång">
                <Link href="/kom-igang" className={styles.actionCard}>
                    <span className={styles.actionIcon}><Icon name="compass" /></span>
                    <span><strong>Kom igång</strong><small>Allt du behöver för att börja spela</small></span>
                    <b>→</b>
                </Link>
                <Link href="/regler" className={styles.actionCard}>
                    <span className={styles.actionIcon}><Icon name="rules" /></span>
                    <span><strong>Läs reglerna</strong><small>Så fungerar GameZones värld</small></span>
                    <b>→</b>
                </Link>
                <a href="https://discord.gg/Uk9TzJh3DJ" target="_blank" rel="noreferrer" className={`${styles.actionCard} ${styles.whitelistCard}`}>
                    <span className={styles.actionIcon}><Icon name="discord" /></span>
                    <span><strong>Bli whitelistad</strong><small>Anslut Discord och få tillgång till servern</small></span>
                    <b>→</b>
                </a>
            </section>

            <section className={styles.dashboardGrid}>
                <article className={styles.panel}>
                    <div className={styles.panelHeader}>
                        <h2><span className={stream ? styles.liveDot : styles.offlineDot} /> Live på GameZone</h2>
                        <a href={creator.channelUrl} target="_blank" rel="noreferrer">Öppna Twitch ↗</a>
                    </div>
                    <a className={styles.streamCard} href={creator.channelUrl} target="_blank" rel="noreferrer">
                        <div className={styles.streamPreview} style={stream ? { backgroundImage: `url(${stream.thumbnailUrl})` } : undefined}>
                            <span className={stream ? styles.liveBadge : styles.offlineBadge}>{stream ? "LIVE" : "OFFLINE"}</span>
                            <div className={styles.streamOverlay}>
                                <strong>{stream ? stream.title : "Streamen är offline"}</strong>
                                <small>{stream ? `${stream.viewerCount} tittare · ${stream.gameName}` : "Nästa äventyr på GameZone väntar"}</small>
                            </div>
                        </div>
                        <div className={styles.streamFooter}>
                            <span className={styles.avatar}>{creator.initials}</span>
                            <span><strong>{creator.displayName}</strong><small>GameZone på Twitch</small></span>
                            <b>Följ</b>
                        </div>
                    </a>
                </article>

                <article className={styles.panel}>
                    <div className={styles.panelHeader}><h2>Serverinformation</h2></div>
                    <div className={styles.serverList}>
                        <div><span><Icon name="server" /> IP-adress</span><strong>play.gamezonemc.se</strong></div>
                        <div><span><Icon name="version" /> Version</span><strong>Java Edition</strong></div>
                        <div><span><Icon name="players" /> Tillgång</span><strong>Whitelist</strong></div>
                        <div><span><Icon name="clock" /> Status</span><strong className={styles.online}>Online</strong></div>
                    </div>
                    <Link href="/kom-igang" className={styles.panelCta}>Så ansluter du <span>↗</span></Link>
                </article>

                <article className={styles.panel}>
                    <div className={styles.panelHeader}><h2>Upptäck GameZone</h2><Link href="/wiki">Öppna wikin ↗</Link></div>
                    <div className={styles.newsList}>
                        <Link href="/wiki"><span><Icon name="economy" /></span><div><strong>Ekonomi och produktion</strong><small>GZ Coins, bonusar och stadskassor</small></div><b>›</b></Link>
                        <Link href="/wiki"><span><Icon name="watch" /></span><div><strong>MarketWatch</strong><small>Se vilka resurser servern behöver</small></div><b>›</b></Link>
                        <Link href="/wiki"><span><Icon name="map" /></span><div><strong>Settlements</strong><small>Territorier, byggnader och 15 nivåer</small></div><b>›</b></Link>
                    </div>
                    <Link href="/leaderboards" className={styles.panelCta}>Se leaderboards <span>↗</span></Link>
                </article>
            </section>

            <section className={styles.systemPanel}>
                <div className={styles.systemHeading}><span>GAMEZONE ENGINE</span><h2>Ekonomi & spelsystem</h2></div>
                <div className={styles.systemGrid}>
                    {systems.map((system) => (
                        <div className={styles.systemItem} key={system.title}>
                            <span className={styles.systemIcon}><Icon name={system.icon} /></span>
                            <span><strong>{system.title}</strong><small>{system.text}</small></span>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}
