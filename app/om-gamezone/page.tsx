import type { Metadata } from "next";
import { MainLayout } from "@/components/layout/MainLayout";
import { PageContainer } from "@/components/layout/PageContainer";
import { Button } from "@/components/ui/Button";
import styles from "./page.module.css";

export const metadata: Metadata = {
    title: "Om GameZone | GameZone",
    description:
        "Upptäck GameZone, en Minecraft-värld där spelarna bygger samhällen, driver företag och formar serverns historia tillsammans.",
};

const roles = [
    {
        number: "01",
        title: "Hitta din plats",
        text: "Spela på egen hand, bli invånare i ett settlement, bygg upp ett företag eller hjälp till att leda ett helt samhälle.",
    },
    {
        number: "02",
        title: "Specialisera dig",
        text: "Olika produktionsområden gör att spelare och settlements blir bra på olika saker. Ingen behöver göra allt själv.",
    },
    {
        number: "03",
        title: "Bygg något större",
        text: "Resurser, handel och samarbete låter små läger växa till betydelsefulla maktcentrum med en egen identitet.",
    },
];

const economySteps = [
    {
        label: "Spelaren",
        text: "Producerar råvaror, tjänar coins och stärker sitt settlement genom sin aktivitet.",
    },
    {
        label: "Företaget",
        text: "Specialiserar produktionen och säljer sådant som andra spelare och städer behöver.",
    },
    {
        label: "Staden",
        text: "Använder sina inkomster för att utvecklas och skapa bättre möjligheter för invånare och företag.",
    },
    {
        label: "Servern",
        text: "Tar skatt och underhåll för att hålla ekonomin i rörelse och motverka att coins tappar sitt värde.",
    },
];

export default function AboutGameZonePage() {
    return (
        <MainLayout>
            <div className={styles.page}>
                <section className={styles.hero}>
                    <PageContainer className={styles.heroContainer}>
                        <div className={styles.heroContent}>
                            <span className={styles.eyebrow}>Om GameZone</span>
                            <h1>En Minecraft-värld som formas av spelarna</h1>
                            <p className={styles.lead}>
                                GameZone är en survivalserver där samhällen, handel,
                                politik och konflikter växer fram genom spelarnas egna
                                beslut. Det finns ingen färdig berättelse. Ni skriver den
                                tillsammans.
                            </p>

                            <div className={styles.heroActions}>
                                <Button href="/play" size="large">
                                    Börja spela
                                </Button>
                                <Button href="/wiki" variant="outline" size="large">
                                    Utforska wikin
                                </Button>
                            </div>
                        </div>

                        <aside className={styles.manifesto}>
                            <span className={styles.manifestoLabel}>Grundidén</span>
                            <p>
                                En Minecraft-värld blir som mest levande när spelarna
                                behöver varandra.
                            </p>
                            <span>
                                Specialisering skapar handel. Samarbete bygger städer.
                                Konkurrens formar historien.
                            </span>
                        </aside>
                    </PageContainer>
                </section>

                <section className={styles.section}>
                    <PageContainer>
                        <div className={styles.sectionHeading}>
                            <span className={styles.kicker}>Din väg genom världen</span>
                            <h2>Alla har en plats</h2>
                            <p>
                                GameZone bestämmer inte vem du ska vara. Systemen finns
                                för att ge olika spelstilar ett värde och knyta ihop dem
                                till en gemensam värld.
                            </p>
                        </div>

                        <div className={styles.roleGrid}>
                            {roles.map((role) => (
                                <article className={styles.roleCard} key={role.number}>
                                    <span className={styles.roleNumber}>{role.number}</span>
                                    <h3>{role.title}</h3>
                                    <p>{role.text}</p>
                                </article>
                            ))}
                        </div>
                    </PageContainer>
                </section>

                <section className={`${styles.section} ${styles.economySection}`}>
                    <PageContainer>
                        <div className={styles.economyIntro}>
                            <div className={styles.sectionHeading}>
                                <span className={styles.kicker}>Ett slutet kretslopp</span>
                                <h2>En ekonomi som skapar spel</h2>
                            </div>

                            <p>
                                Ekonomin är inte bara en butik med siffror. Den är en
                                simulering där spelare, företag och settlements behöver
                                varandra. Framgång i en del av världen skapar möjligheter
                                i nästa.
                            </p>
                        </div>

                        <div className={styles.economyFlow}>
                            {economySteps.map((step, index) => (
                                <article className={styles.economyStep} key={step.label}>
                                    <div className={styles.stepTopline}>
                                        <span className={styles.stepIndex}>0{index + 1}</span>
                                        <span className={styles.stepArrow} aria-hidden="true">
                                            {index < economySteps.length - 1 ? "→" : "↺"}
                                        </span>
                                    </div>
                                    <h3>{step.label}</h3>
                                    <p>{step.text}</p>
                                </article>
                            ))}
                        </div>

                        <div className={styles.economyResult}>
                            <strong>Resultatet</strong>
                            <span>
                                Spelare tjänar på att tillhöra ett settlement. Företag
                                söker sig till starka städer. Städer vill behålla de
                                företag och invånare som driver utvecklingen framåt.
                            </span>
                        </div>
                    </PageContainer>
                </section>

                <section className={styles.section}>
                    <PageContainer className={styles.worldGrid}>
                        <div className={styles.worldStory}>
                            <span className={styles.kicker}>Mer än survival</span>
                            <h2>Världen lever vidare när du loggar ut</h2>
                            <p>
                                Andra spelare producerar, handlar, bygger och fattar
                                beslut. Ett settlement kan växa. En ny handelsväg kan
                                uppstå. En allians kan förändra balansen mellan världens
                                maktcentrum.
                            </p>
                            <p>
                                När du återvänder finns samma värld kvar, men historien
                                kan ha tagit en ny riktning.
                            </p>
                        </div>

                        <div className={styles.worldPoints}>
                            <article>
                                <span>Territorier</span>
                                <p>
                                    Settlements skapar skyddade hemområden, medan
                                    vildmarken förblir fri och oförutsägbar.
                                </p>
                            </article>
                            <article>
                                <span>Politik</span>
                                <p>
                                    Ledare hanterar invånare, resurser och stadens väg
                                    framåt.
                                </p>
                            </article>
                            <article>
                                <span>Konflikter</span>
                                <p>
                                    Konkurrens, allianser och krig kan rita om kartan och
                                    skapa nya kapitel i serverns historia.
                                </p>
                            </article>
                        </div>
                    </PageContainer>
                </section>

                <section className={styles.wikiSection}>
                    <PageContainer className={styles.wikiPanel}>
                        <div>
                            <span className={styles.kicker}>Söker du speldata?</span>
                            <h2>Visionen bor här. Detaljerna finns i wikin.</h2>
                            <p>
                                Där hittar du nivåer, kostnader, bonusar, byggnader,
                                items, kommandon och fullständiga beskrivningar av
                                systemen.
                            </p>
                        </div>

                        <Button href="/wiki" variant="secondary" size="large">
                            Öppna wikin
                        </Button>
                    </PageContainer>
                </section>
            </div>
        </MainLayout>
    );
}
