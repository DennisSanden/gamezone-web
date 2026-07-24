import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { MainLayout } from "@/components/layout/MainLayout";
import { PageContainer } from "@/components/layout/PageContainer";
import { Button } from "@/components/ui/Button";
import styles from "./page.module.css";

export const metadata: Metadata = {
    title: "Kom igång | GameZone",
    description:
        "Så börjar du spela på GameZone, från Discord och whitelist till ditt första settlement och dina första GZ Coins.",
};

const discordUrl = "https://discord.gg/Uk9TzJh3DJ";

const startSteps = [
    {
        number: "01",
        icon: "◆",
        title: "Gå med i Discord",
        text: "Discord är serverns samlingsplats. Där hittar du information, support, spelare att lära känna och kanaler för settlements.",
        href: discordUrl,
        linkLabel: "Öppna Discord",
        external: true,
    },
    {
        number: "02",
        icon: "✓",
        title: "Läs reglerna",
        text: "Lär dig skillnaden mellan settlements och vildmark, hur PvP fungerar och vilka regler som gäller för ekonomi och automation.",
        href: "/regler",
        linkLabel: "Läs reglerna",
    },
    {
        number: "03",
        icon: "✦",
        title: "Ansök om whitelist",
        text: "Följ instruktionerna i Discord och skicka in din whitelistansökan. När du är godkänd kan du ansluta till servern.",
        href: discordUrl,
        linkLabel: "Till Discord",
        external: true,
    },
    {
        number: "04",
        icon: "→",
        title: "Anslut till servern",
        text: "Starta Minecraft Java Edition och anslut med serveradressen play.gamezonemc.se.",
        value: "play.gamezonemc.se",
    },
];

const firstSession = [
    {
        time: "Första steget",
        title: "Öppna GameZone-menyn",
        text: "Skriv /gz menu. Där hittar du serverns viktigaste funktioner och kan se vilka möjligheter som är tillgängliga för dig.",
    },
    {
        time: "Utforska",
        title: "Lär känna världen",
        text: "Besök spawn, titta på kartan och se vilka settlements som redan finns. Vildmarken är öppen för utforskning och resursinsamling.",
    },
    {
        time: "Välj riktning",
        title: "Spela själv eller sök gemenskap",
        text: "Du kan börja på egen hand, ansöka till ett befintligt settlement eller på sikt bygga upp ett eget samhälle tillsammans med andra.",
    },
    {
        time: "Kom igång",
        title: "Producera och tjäna GZ Coins",
        text: "Aktiv, manuell produktion är grunden för din ekonomi. Coins ger dig möjligheten att utvecklas och bidra till större projekt.",
    },
];

const paths = [
    {
        label: "Självständig",
        symbol: "01",
        title: "Börja i din egen takt",
        text: "Utforska, samla resurser och lär dig systemen innan du bestämmer vart du hör hemma.",
    },
    {
        label: "Invånare",
        symbol: "02",
        title: "Ansök till ett settlement",
        text: "Få tillgång till gemenskap, skyddat territorium och produktionsbonusar genom att bli en del av ett växande samhälle.",
    },
    {
        label: "Grundare",
        symbol: "03",
        title: "Bygg något eget",
        text: "Samla andra spelare och skapa ett settlement med en egen inriktning, ekonomi och historia.",
    },
];

export default function GettingStartedPage() {
    return (
        <MainLayout>
            <div className={styles.page}>
                <section className={styles.hero}>
                    <PageContainer className={styles.heroContainer}>
                        <div className={styles.heroCopy}>
                            <span className={styles.eyebrow}>Kom igång</span>
                            <h1>Från ny spelare till en del av världen.</h1>
                            <p className={styles.lead}>
                                Här får du den korta vägen in på GameZone. Följ stegen,
                                anslut till servern och välj sedan själv vilken roll du vill
                                ta i världen.
                            </p>

                            <div className={styles.heroActions}>
                                <a
                                    href={discordUrl}
                                    target="_blank"
                                    rel="noreferrer"
                                    className={styles.primaryAction}
                                >
                                    Gå med i Discord
                                </a>
                                <Button href="/regler" variant="outline" size="large">
                                    Läs reglerna
                                </Button>
                            </div>
                        </div>

                        <div className={styles.heroVisual} aria-hidden="true">
                            <div className={styles.worldCard}>
                                <Image
                                    src="/images/hero-background.jpg"
                                    alt=""
                                    fill
                                    sizes="(max-width: 820px) 100vw, 42vw"
                                    priority
                                />
                                <div className={styles.worldOverlay} />
                                <div className={styles.worldLabel}>
                                    <span>Världen väntar</span>
                                    <strong>Din historia börjar vid spawn</strong>
                                </div>
                            </div>

                            <aside className={styles.serverCard}>
                                <span>Serveradress</span>
                                <strong>play.gamezonemc.se</strong>
                                <p>Minecraft Java Edition</p>
                                <div className={styles.serverPulse}>
                                    <i /> Redo för anslutning
                                </div>
                            </aside>
                        </div>
                    </PageContainer>
                </section>

                <section className={styles.stepsSection}>
                    <PageContainer>
                        <div className={styles.sectionHeading}>
                            <span className={styles.kicker}>Fyra enkla steg</span>
                            <h2>Din väg in i GameZone</h2>
                            <p>
                                Från Discord till första inloggningen. Följ linjen och du är
                                inne i världen på några minuter.
                            </p>
                        </div>

                        <div className={styles.journey}>
                            <div className={styles.journeyLine} aria-hidden="true" />
                            {startSteps.map((step) => (
                                <article className={styles.stepCard} key={step.number}>
                                    <div className={styles.stepTop}>
                                        <span className={styles.stepIcon}>{step.icon}</span>
                                        <span className={styles.stepNumber}>{step.number}</span>
                                    </div>
                                    <h3>{step.title}</h3>
                                    <p>{step.text}</p>
                                    {step.href && step.external && (
                                        <a href={step.href} target="_blank" rel="noreferrer">
                                            {step.linkLabel}
                                        </a>
                                    )}
                                    {step.href && !step.external && (
                                        <Link href={step.href}>{step.linkLabel}</Link>
                                    )}
                                    {step.value && (
                                        <code className={styles.serverValue}>{step.value}</code>
                                    )}
                                </article>
                            ))}
                        </div>
                    </PageContainer>
                </section>

                <section className={styles.firstSessionSection}>
                    <PageContainer className={styles.firstSessionLayout}>
                        <div className={styles.sessionVisual}>
                            <Image
                                src="/images/wiki.png"
                                alt="GameZone Wiki"
                                fill
                                sizes="(max-width: 820px) 100vw, 42vw"
                            />
                            <div className={styles.sessionShade} />
                            <div className={styles.commandCard}>
                                <span>Ditt viktigaste kommando</span>
                                <code>/gz menu</code>
                            </div>
                            <div className={styles.mapBadge}>Utforska • Välj • Bygg</div>
                        </div>

                        <div>
                            <div className={styles.sectionHeading}>
                                <span className={styles.kicker}>Din första stund</span>
                                <h2>Vad gör jag när jag har loggat in?</h2>
                                <p>
                                    Du behöver inte förstå hela GameZone direkt. Börja med
                                    grunderna och låt din roll växa fram medan du spelar.
                                </p>
                            </div>

                            <div className={styles.timeline}>
                                {firstSession.map((item, index) => (
                                    <article key={item.title}>
                                        <span className={styles.timelineIndex}>0{index + 1}</span>
                                        <div>
                                            <small>{item.time}</small>
                                            <h3>{item.title}</h3>
                                            <p>{item.text}</p>
                                        </div>
                                    </article>
                                ))}
                            </div>

                            <div className={styles.inlineActions}>
                                <Button href="/map" variant="outline">
                                    Öppna kartan
                                </Button>
                                <Button href="/wiki" variant="outline">
                                    Besök wikin
                                </Button>
                            </div>
                        </div>
                    </PageContainer>
                </section>

                <section className={styles.pathsSection}>
                    <PageContainer>
                        <div className={styles.sectionHeading}>
                            <span className={styles.kicker}>Hitta din plats</span>
                            <h2>Tre vägar. Samma levande värld.</h2>
                            <p>
                                Det finns ingen obligatorisk väg. GameZone blir bäst när
                                olika spelare väljer olika mål och behöver varandra.
                            </p>
                        </div>

                        <div className={styles.pathsGrid}>
                            {paths.map((path) => (
                                <article key={path.label}>
                                    <span className={styles.pathSymbol}>{path.symbol}</span>
                                    <div>
                                        <span className={styles.pathLabel}>{path.label}</span>
                                        <h3>{path.title}</h3>
                                        <p>{path.text}</p>
                                    </div>
                                </article>
                            ))}
                        </div>

                        <div className={styles.infoBox}>
                            <div>
                                <span>Introduktion eller speldata?</span>
                                <h3>Den här sidan hjälper dig att börja. Wikin förklarar systemen.</h3>
                            </div>
                            <p>
                                I wikin hittar du exakta kommandon, nivåer, bonusar,
                                kostnader, produktionskategorier och övrig speldata.
                            </p>
                            <Button href="/wiki">Öppna wikin</Button>
                        </div>
                    </PageContainer>
                </section>

                <section className={styles.finalSection}>
                    <PageContainer className={styles.finalPanel}>
                        <div>
                            <span className={styles.kicker}>Redo att börja?</span>
                            <h2>Din plats i GameZone är inte bestämd än.</h2>
                            <p>
                                Gå med i gemenskapen, anslut till servern och börja skriva
                                din del av världens historia.
                            </p>
                        </div>
                        <div className={styles.finalActions}>
                            <a
                                href={discordUrl}
                                target="_blank"
                                rel="noreferrer"
                                className={styles.primaryAction}
                            >
                                Gå med i Discord
                            </a>
                            <Button href="/om-gamezone" variant="outline" size="large">
                                Läs om GameZone
                            </Button>
                        </div>
                    </PageContainer>
                </section>
            </div>
        </MainLayout>
    );
}
