import Link from "next/link";
import { getApprovedLiveStreams } from "@/lib/twitch";
import { getFeaturedStreamer } from "@/lib/streamers";
import styles from "./HomeDashboard.module.css";

type QuickLink = {
    icon: string;
    title: string;
    text: string;
    href: string;
    featured?: boolean;
    external?: boolean;
};

const quickLinks: QuickLink[] = [
    { icon: "◈", title: "Kom igång", text: "Så här börjar du ditt äventyr", href: "/kom-igang" },
    { icon: "▤", title: "Regler", text: "Läs våra regler och riktlinjer", href: "/regler" },
    { icon: "☻", title: "Bli whitelistad", text: "Få tillgång till servern via Discord", href: "https://discord.gg/Uk9TzJh3DJ", featured: true, external: true },
    { icon: "◇", title: "Wiki", text: "Lär dig systemen och funktionerna", href: "/wiki" },
    { icon: "▥", title: "Serverstatus", text: "Se status och spelare online", href: "/status" },
];

const systems = [
    { icon: "♛", title: "15 nivåer", text: "Från Enstöring till Imperium" },
    { icon: "⚒", title: "7 kategorier", text: "Specialisera ditt centrum" },
    { icon: "◉", title: "GZ Coins", text: "Tjäna, investera och väx" },
    { icon: "▣", title: "Stadskassor", text: "Skatter och underhåll" },
    { icon: "▰", title: "Shopping Chests", text: "Handel mellan spelare" },
    { icon: "▥", title: "MarketWatch", text: "Se vad servern behöver" },
] as const;

export async function HomeDashboard() {
    const liveStreams = await getApprovedLiveStreams();
    const creator = getFeaturedStreamer();
    const stream = liveStreams.find((item) => item.login === creator.twitchLogin);

    return (
        <div className={styles.page}>
            <section className={styles.hero}>
                <div className={styles.heroShade} />
                <div className={styles.heroContent}>
                    <h1>Bygg mer än en bas.<br />Bygg ett <span>rike.</span></h1>
                    <p>GameZone är en svensk Minecraft-server där spelare skapar städer, driver ekonomi och formar historien tillsammans.</p>
                </div>
            </section>

            <section className={styles.quickGrid} aria-label="Snabblänkar">
                {quickLinks.map((item) => {
                    const className = `${styles.quickCard} ${item.featured ? styles.featuredCard : ""}`;
                    return item.external ? (
                        <a key={item.title} href={item.href} target="_blank" rel="noreferrer" className={className}>
                            <span className={styles.quickIcon}>{item.icon}</span><strong>{item.title}</strong><small>{item.text}</small>
                        </a>
                    ) : (
                        <Link key={item.title} href={item.href} className={className}>
                            <span className={styles.quickIcon}>{item.icon}</span><strong>{item.title}</strong><small>{item.text}</small>
                        </Link>
                    );
                })}
            </section>

            <section className={styles.infoGrid}>
                <article className={styles.panel}>
                    <header><h2><span className={stream ? styles.liveDot : styles.offlineDot} />Live på GameZone</h2><a href={creator.channelUrl} target="_blank" rel="noreferrer">Twitch →</a></header>
                    <a className={styles.streamBox} href={creator.channelUrl} target="_blank" rel="noreferrer">
                        <div className={styles.streamImage} style={stream ? { backgroundImage: `url(${stream.thumbnailUrl})` } : undefined}>
                            <span className={stream ? styles.liveBadge : styles.offlineBadge}>{stream ? "LIVE" : "OFFLINE"}</span>
                            <div className={styles.streamCenter}><b>{stream ? stream.displayName : "Streamen är offline"}</b><small>{stream ? stream.title : "Nästa äventyr på GameZone väntar"}</small></div>
                        </div>
                        <div className={styles.channelRow}><span className={styles.avatar}>{creator.initials}</span><div><strong>{creator.displayName}</strong><small>{stream ? "Live på GameZone just nu" : "Nästa stream visas här"}</small></div><span className={styles.follow}>Följ</span></div>
                    </a>
                </article>

                <article className={styles.panel}>
                    <header><h2>Serverinformation</h2></header>
                    <div className={styles.serverRows}>
                        <div><span>◉ IP-adress</span><strong>play.gamezonemc.se</strong></div>
                        <div><span>◇ Version</span><strong>Java Edition</strong></div>
                        <div><span>♟ Spelare</span><strong>Whitelist-server</strong></div>
                        <div><span>◷ Status</span><strong className={styles.onlineText}>Online</strong></div>
                    </div>
                    <Link href="/status" className={styles.panelButton}>Se full status ↗</Link>
                </article>

                <article className={styles.panel}>
                    <header><h2>Senaste nytt</h2></header>
                    <div className={styles.newsList}>
                        <Link href="/wiki"><span>⚙</span><div><strong>Ekonomi och produktion</strong><small>GZ Coins, bonusar och stadskassor</small></div></Link>
                        <Link href="/wiki"><span>▥</span><div><strong>MarketWatch</strong><small>Hitta brist på resurser</small></div></Link>
                        <Link href="/wiki"><span>♛</span><div><strong>Settlements</strong><small>15 nivåer och nya territorier</small></div></Link>
                    </div>
                    <Link href="/wiki" className={styles.panelButton}>Öppna wikin ↗</Link>
                </article>
            </section>

            <section className={styles.systemPanel}>
                <h2>Ekonomi & spelsystem</h2>
                <div className={styles.systemGrid}>{systems.map((system) => <div key={system.title}><span>{system.icon}</span><p><strong>{system.title}</strong><small>{system.text}</small></p></div>)}</div>
            </section>
        </div>
    );
}
