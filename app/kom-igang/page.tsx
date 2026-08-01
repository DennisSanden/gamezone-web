import type { Metadata } from "next";
import Link from "next/link";
import { MainLayout } from "@/components/layout/MainLayout";
import { PageContainer } from "@/components/layout/PageContainer";
import styles from "./page.module.css";

export const metadata: Metadata = {
    title: "Kom igång | GameZone",
    description:
        "Kom in på GameZone, bli whitelistad och ta dina första steg i världen.",
};

const discordUrl = "https://discord.gg/Uk9TzJh3DJ";
const serverAddress = "play.gamezonemc.se";

const connectionSteps = [
    {
        number: "01",
        title: "Gå med i Discord",
        text: "Discord är navet för whitelist, support, nyheter och kontakten med andra spelare.",
        action: "Öppna Discord",
        href: discordUrl,
        external: true,
    },
    {
        number: "02",
        title: "Bli whitelistad",
        text: "Skriv ditt Minecraft-namn i whitelistkanalen. GameZone Steve kontrollerar namnet och lägger till dig.",
        action: "Till whitelist",
        href: discordUrl,
        external: true,
    },
    {
        number: "03",
        title: "Anslut till servern",
        text: "Starta Minecraft Java Edition och lägg till serveradressen nedan i din serverlista.",
        value: serverAddress,
    },
];

const firstMoves = [
    {
        number: "01",
        title: "Öppna huvudmenyn",
        text: "Skriv kommandot för att nå settlements, företag, ekonomi och serverns viktigaste funktioner.",
        command: "/gz menu",
    },
    {
        number: "02",
        title: "Besök spawn",
        text: "Orientera dig, träffa andra spelare och se hur GameZones värld börjar ta form.",
        command: "/spawn",
    },
    {
        number: "03",
        title: "Hitta din väg",
        text: "Utforska själv, sök till ett settlement eller samla spelare för att på sikt bygga något eget.",
    },
    {
        number: "04",
        title: "Börja producera",
        text: "Samla resurser manuellt och bygg upp din ekonomi. Produktion ger GZ Coins och hjälper världen att växa.",
        command: "/marketwatch",
    },
];

const essentials = [
    {
        label: "Settlements",
        title: "Skyddade samhällen",
        text: "Settlements har eget territorium, stadskassa, roller, nivåer och produktionsbonusar.",
    },
    {
        label: "Vildmark",
        title: "Frihet med risk",
        text: "Utanför settlements kan du utforska och samla resurser, men du saknar stadens skydd.",
    },
    {
        label: "Ekonomi",
        title: "Coins genom aktivitet",
        text: "GameZones ekonomi bygger på aktiv produktion, handel och spelardrivna företag.",
    },
    {
        label: "Världen",
        title: "Allt lämnar avtryck",
        text: "Städer, företag, konflikter och stora projekt blir en del av serverns gemensamma historia.",
    },
];

export default function GettingStartedPage() {
    return (
        <MainLayout>
            <main className={styles.page}>
                <section className={styles.hero}>
                    <div className={styles.heroGlow} aria-hidden="true" />
                    <PageContainer className={styles.heroGrid}>
                        <div className={styles.heroCopy}>
                            <div className={styles.eyebrow}>
                                <span /> Ny på GameZone?
                            </div>
                            <h1>
                                Din första dag
                                <br />
                                börjar <em>här.</em>
                            </h1>
                            <p>
                                Från whitelist till dina första GZ Coins. Här finns allt du
                                behöver för att komma in i världen utan att drunkna i en
                                vägg av text.
                            </p>
                            <div className={styles.heroActions}>
                                <a
                                    href={discordUrl}
                                    target="_blank"
                                    rel="noreferrer"
                                    className={styles.primaryButton}
                                >
                                    Gå med i Discord
                                    <span aria-hidden="true">↗</span>
                                </a>
                                <Link href="/regler" className={styles.secondaryButton}>
                                    Läs spelreglerna
                                </Link>
                            </div>
                            <div className={styles.heroMeta}>
                                <div>
                                    <strong>Java Edition</strong>
                                    <span>Plattform</span>
                                </div>
                                <div>
                                    <strong>Whitelist</strong>
                                    <span>Tillträde</span>
                                </div>
                                <div>
                                    <strong>Svenska</strong>
                                    <span>Community</span>
                                </div>
                            </div>
                        </div>

                        <aside className={styles.connectPanel}>
                            <div className={styles.panelTop}>
                                <span className={styles.liveDot} />
                                <span>GameZone Server</span>
                                <small>Redo</small>
                            </div>
                            <div className={styles.addressBlock}>
                                <span>Serveradress</span>
                                <strong>{serverAddress}</strong>
                                <p>Minecraft Java Edition</p>
                            </div>
                            <div className={styles.panelDivider} />
                            <div className={styles.quickRoute}>
                                <span>Snabbaste vägen in</span>
                                <ol>
                                    <li><b>1</b> Discord</li>
                                    <li><b>2</b> Whitelist</li>
                                    <li><b>3</b> Anslut</li>
                                </ol>
                            </div>
                            <div className={styles.panelCommand}>
                                <span>Första kommandot</span>
                                <code>/gz menu</code>
                            </div>
                        </aside>
                    </PageContainer>
                </section>

                <section className={styles.connectionSection}>
                    <PageContainer>
                        <div className={styles.sectionIntro}>
                            <div>
                                <span className={styles.sectionNumber}>01</span>
                                <span className={styles.kicker}>Anslut</span>
                            </div>
                            <h2>Tre steg. Sedan är du inne.</h2>
                            <p>
                                Inga formulär och inget krångel. Discord, whitelist och rätt
                                serveradress. Svårare än så behöver vi inte göra det.
                            </p>
                        </div>

                        <div className={styles.connectionGrid}>
                            {connectionSteps.map((step) => (
                                <article key={step.number} className={styles.connectionCard}>
                                    <div className={styles.cardNumber}>{step.number}</div>
                                    <div>
                                        <h3>{step.title}</h3>
                                        <p>{step.text}</p>
                                    </div>
                                    {step.href && (
                                        <a
                                            href={step.href}
                                            target={step.external ? "_blank" : undefined}
                                            rel={step.external ? "noreferrer" : undefined}
                                        >
                                            {step.action} <span>↗</span>
                                        </a>
                                    )}
                                    {step.value && <code>{step.value}</code>}
                                </article>
                            ))}
                        </div>
                    </PageContainer>
                </section>

                <section className={styles.firstHourSection}>
                    <PageContainer className={styles.firstHourGrid}>
                        <div className={styles.firstHourIntro}>
                            <div className={styles.sectionIntroCompact}>
                                <div>
                                    <span className={styles.sectionNumber}>02</span>
                                    <span className={styles.kicker}>Första timmen</span>
                                </div>
                                <h2>Logga inte bara in. Kom in i spelet.</h2>
                                <p>
                                    Du behöver inte förstå hela servern direkt. Gör de här
                                    fyra sakerna först så faller resten på plats.
                                </p>
                            </div>
                            <div className={styles.ruleCallout}>
                                <span>Viktigt från start</span>
                                <strong>Aktiv produktion belönas.</strong>
                                <p>
                                    Automatiserad insamling ger inte Coins. GameZone är byggt
                                    kring spelare som faktiskt spelar, handlar och samarbetar.
                                </p>
                                <Link href="/regler">Se alla regler</Link>
                            </div>
                        </div>

                        <div className={styles.moveList}>
                            {firstMoves.map((move) => (
                                <article key={move.number}>
                                    <span>{move.number}</span>
                                    <div>
                                        <h3>{move.title}</h3>
                                        <p>{move.text}</p>
                                    </div>
                                    {move.command && <code>{move.command}</code>}
                                </article>
                            ))}
                        </div>
                    </PageContainer>
                </section>

                <section className={styles.essentialsSection}>
                    <PageContainer>
                        <div className={styles.sectionIntro}>
                            <div>
                                <span className={styles.sectionNumber}>03</span>
                                <span className={styles.kicker}>Förstå världen</span>
                            </div>
                            <h2>Fyra saker som gör GameZone annorlunda.</h2>
                            <p>
                                Det här är inte bara survival med ett coin-plugin ovanpå.
                                Världen är byggd för att spelare ska behöva varandra.
                            </p>
                        </div>

                        <div className={styles.essentialsGrid}>
                            {essentials.map((item, index) => (
                                <article key={item.label}>
                                    <div className={styles.essentialTop}>
                                        <span>{item.label}</span>
                                        <b>0{index + 1}</b>
                                    </div>
                                    <h3>{item.title}</h3>
                                    <p>{item.text}</p>
                                </article>
                            ))}
                        </div>

                        <div className={styles.exploreBar}>
                            <div>
                                <span>När du vill gå djupare</span>
                                <strong>Kommandon, nivåer, kostnader och full speldata finns i wikin.</strong>
                            </div>
                            <div>
                                <Link href="/wiki" className={styles.primaryButton}>
                                    Öppna wikin <span>→</span>
                                </Link>
                                <Link href="/map" className={styles.textLink}>
                                    Se världskartan
                                </Link>
                            </div>
                        </div>
                    </PageContainer>
                </section>

                <section className={styles.finalSection}>
                    <PageContainer className={styles.finalPanel}>
                        <span className={styles.finalEyebrow}>Din historia börjar nu</span>
                        <h2>Vem blir du i GameZone?</h2>
                        <p>
                            Invånare, företagare, byggare, kung eller något ingen hunnit bli
                            ännu. Första steget är fortfarande bara ett klick bort.
                        </p>
                        <a
                            href={discordUrl}
                            target="_blank"
                            rel="noreferrer"
                            className={styles.primaryButton}
                        >
                            Gå med i Discord <span>↗</span>
                        </a>
                    </PageContainer>
                </section>
            </main>
        </MainLayout>
    );
}
