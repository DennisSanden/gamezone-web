import type { Metadata } from "next";
import Link from "next/link";
import { MainLayout } from "@/components/layout/MainLayout";
import { PageContainer } from "@/components/layout/PageContainer";
import { Button } from "@/components/ui/Button";
import styles from "./page.module.css";

export const metadata: Metadata = {
    title: "Regler | GameZone",
    description:
        "Läs reglerna för GameZone, från settlements och vildmark till ekonomi, automation, PvP och fair play.",
};

type Rule = {
    title: string;
    text: string;
};

const conductRules: Rule[] = [
    {
        title: "Respektera andra",
        text: "Behandla andra med respekt. Trakasserier, hot, diskriminering eller annat olämpligt beteende accepteras inte.",
    },
    {
        title: "Namn och skins",
        text: "Spelarnamn och skins får inte innehålla stötande, diskriminerande eller olämpligt innehåll.",
    },
    {
        title: "Serverteamets beslut",
        text: "Serverteamets beslut är slutgiltiga. Regler kan uppdateras när det behövs för att skapa en rättvis och rolig spelupplevelse för alla.",
    },
];

const technicalRules: Rule[] = [
    {
        title: "Exploits och buggar",
        text: "Det är förbjudet att medvetet utnyttja buggar eller andra fel i spelet för att skaffa sig en fördel. Upptäcker du ett fel ska det rapporteras i 🐛│rapportera-bugg.",
    },
    {
        title: "Fusk",
        text: "Alla former av cheats, hacks, x-ray, autoclickers, makron eller annan otillåten programvara är förbjudna.",
    },
    {
        title: "Coinboosting",
        text: "All form av Coinboosting är förbjuden. Det gäller exempelvis att använda alternativa konton eller samarbeta för att skapa Coins på ett sätt som inte är avsett.",
    },
];

const quickAnswers = [
    {
        question: "Får jag bygga i vildmarken?",
        answer: "Ja. I vildmarken får du bygga, utforska och samla resurser. Området har däremot inget settlementskydd.",
    },
    {
        question: "Får jag ta saker från en död spelare?",
        answer: "Ja. Föremål som tappas vid död får plockas upp av andra spelare.",
    },
    {
        question: "Får jag bygga en automatisk farm?",
        answer: "Ja, men endast om farmen producerar resurser inom ditt settlements produktionskategori.",
    },
    {
        question: "Ger automatiska farmar GZ Coins?",
        answer: "Nej. Endast manuellt insamlade resurser kan ge GZ Coins.",
    },
    {
        question: "Får jag döda någon med lava eller en fälla?",
        answer: "Nej, inte utanför ditt eget settlement. Inom ditt eget settlement får du bygga fällor och försvar som kan döda, men inte fällor som fångar spelare eller hindrar dem från att ta sig ut.",
    },
    {
        question: "Vad gör jag om jag hittar en gråzon?",
        answer: "Fråga serverteamet innan du använder den. Utgå inte från att något är tillåtet bara för att det inte står ordagrant i reglerna.",
    },
];

function RuleList({ rules }: { rules: Rule[] }) {
    return (
        <div className={styles.ruleList}>
            {rules.map((rule) => (
                <article className={styles.ruleItem} key={rule.title}>
                    <h3>{rule.title}</h3>
                    <p>{rule.text}</p>
                </article>
            ))}
        </div>
    );
}

export default function RulesPage() {
    return (
        <MainLayout>
            <div className={styles.page}>
                <section className={styles.hero}>
                    <PageContainer className={styles.heroContainer}>
                        <div>
                            <span className={styles.eyebrow}>GameZone regler</span>
                            <h1>Spela schysst. Bygg långsiktigt.</h1>
                            <p className={styles.lead}>
                                GameZone är byggt kring samarbete, handel och en värld som
                                utvecklas över tid. Reglerna skyddar den idén och ser till
                                att planering, aktivitet och lagarbete belönas.
                            </p>

                            <div className={styles.heroActions}>
                                <Button href="#huvudregler" size="large">
                                    Läs reglerna
                                </Button>
                                <Button href="/wiki" variant="outline" size="large">
                                    Öppna wikin
                                </Button>
                            </div>
                        </div>

                        <aside className={styles.principleCard}>
                            <span>Grundprincip</span>
                            <strong>Använd sunt förnuft.</strong>
                            <p>
                                Alla situationer kan inte täckas ord för ord. Handlingar
                                som tydligt går emot serverns syfte eller förstör
                                upplevelsen för andra kan ändå leda till åtgärder.
                            </p>
                        </aside>
                    </PageContainer>
                </section>

                <section className={styles.noticeStrip}>
                    <PageContainer className={styles.noticeGrid}>
                        <article className={`${styles.notice} ${styles.info}`}>
                            <span>Bra att veta</span>
                            <p>Manuell insamling av resurser är alltid tillåten.</p>
                        </article>
                        <article className={`${styles.notice} ${styles.warning}`}>
                            <span>Viktigt</span>
                            <p>Varje död kostar 5 procent av dina GZ Coins.</p>
                        </article>
                        <article className={`${styles.notice} ${styles.danger}`}>
                            <span>Förbjudet</span>
                            <p>Fusk, exploits och coinboosting tolereras inte.</p>
                        </article>
                    </PageContainer>
                </section>

                <section className={styles.section} id="huvudregler">
                    <PageContainer>
                        <div className={styles.sectionHeading}>
                            <span className={styles.kicker}>Respekt och uppförande</span>
                            <h2>Servern börjar med hur vi behandlar varandra</h2>
                            <p>
                                Konkurrens och konflikter är en del av spelet. Personliga
                                påhopp, trakasserier och sabotage är det inte.
                            </p>
                        </div>

                        <RuleList rules={conductRules} />
                    </PageContainer>
                </section>

                <section className={`${styles.section} ${styles.worldSection}`}>
                    <PageContainer>
                        <div className={styles.sectionHeading}>
                            <span className={styles.kicker}>Settlements och vildmark</span>
                            <h2>Olika delar av världen har olika villkor</h2>
                        </div>

                        <div className={styles.compareGrid}>
                            <article className={styles.compareCard}>
                                <span className={styles.cardLabel}>Skyddat område</span>
                                <h3>Inom ett settlement</h3>
                                <ul>
                                    <li>Endast invånare får bygga och förstöra.</li>
                                    <li>Skyddade föremål kan inte öppnas av utomstående.</li>
                                    <li>Settlementet ansvarar för sitt eget område.</li>
                                    <li>Fällor och försvar får byggas inom det egna området.</li>
                                </ul>
                            </article>

                            <article className={styles.compareCard}>
                                <span className={styles.cardLabel}>Öppet område</span>
                                <h3>I vildmarken</h3>
                                <ul>
                                    <li>Det är fritt att bygga och utforska.</li>
                                    <li>Alla får samla resurser.</li>
                                    <li>Området saknar settlementskydd.</li>
                                    <li>Griefing och indirekt dödande är fortfarande förbjudet.</li>
                                </ul>
                            </article>
                        </div>

                        <div className={styles.reasonBox}>
                            <strong>Varför finns skillnaden?</strong>
                            <p>
                                Settlements ska kunna bygga upp trygga samhällen, medan
                                vildmarken ska vara fri att utforska och använda. Frihet i
                                vildmarken betyder däremot inte frihet att medvetet förstöra
                                andra spelares upplevelse.
                            </p>
                        </div>
                    </PageContainer>
                </section>

                <section className={styles.section}>
                    <PageContainer className={styles.splitSection}>
                        <div>
                            <span className={styles.kicker}>PvP och krig</span>
                            <h2>Konflikter sker genom spelets system</h2>
                            <p className={styles.bodyText}>
                                PvP är normalt avstängt. Det aktiveras först när två
                                settlements officiellt befinner sig i krig med varandra.
                                Under fredstid ska spelare kunna bygga och utvecklas utan
                                att riskera slumpmässiga attacker.
                            </p>
                        </div>

                        <div className={styles.rulePanel}>
                            <article>
                                <span>Tillåtet</span>
                                <p>PvP mellan parter i ett aktivt, officiellt krig.</p>
                            </article>
                            <article>
                                <span>Inte tillåtet</span>
                                <p>
                                    Att medvetet skada eller döda andra genom lava, vatten,
                                    fallgropar, redstone eller andra indirekta metoder.
                                </p>
                            </article>
                            <article>
                                <span>Undantag</span>
                                <p>
                                    Inom ditt eget settlement får du bygga fällor och
                                    försvar som kan döda spelare. Fällor som fångar spelare
                                    eller hindrar dem från att ta sig ut är inte tillåtna.
                                </p>
                            </article>
                        </div>
                    </PageContainer>
                </section>

                <section className={`${styles.section} ${styles.economySection}`}>
                    <PageContainer>
                        <div className={styles.sectionHeading}>
                            <span className={styles.kicker}>Ekonomi och Coins</span>
                            <h2>Ekonomin ska belöna aktivt spelande</h2>
                            <p>
                                GZ Coins är en del av ett slutet ekonomiskt system. Därför
                                är försök att manipulera hur Coins skapas ett direkt hot
                                mot hela spelupplevelsen.
                            </p>
                        </div>

                        <div className={styles.economyGrid}>
                            <article>
                                <span className={styles.metric}>5 %</span>
                                <h3>Dödsstraff</h3>
                                <p>Varje gång du dör förlorar du 5 procent av dina GZ Coins.</p>
                            </article>
                            <article>
                                <span className={styles.metric}>Aktivt</span>
                                <h3>Coins ska förtjänas</h3>
                                <p>
                                    Endast avsedd och aktiv produktion får skapa Coins.
                                    Automatiserad insamling ger aldrig GZ Coins.
                                </p>
                            </article>
                            <article>
                                <span className={styles.metric}>Noll</span>
                                <h3>Tolerans för boosting</h3>
                                <p>
                                    Alternativa konton, riggade samarbeten och exploits för
                                    att skapa Coins är förbjudna.
                                </p>
                            </article>
                        </div>

                        <div className={styles.reasonBox}>
                            <strong>Varför skyddas ekonomin så hårt?</strong>
                            <p>
                                Spelare, företag och settlements är beroende av att Coins
                                behåller sitt värde. När någon skapar Coins på ett otillåtet
                                sätt påverkas hela serverns ekonomi, inte bara den spelaren.
                            </p>
                        </div>
                    </PageContainer>
                </section>

                <section className={styles.section}>
                    <PageContainer>
                        <div className={styles.sectionHeading}>
                            <span className={styles.kicker}>Fabriker och automation</span>
                            <h2>Specialisering ska skapa handel</h2>
                            <p>
                                Automatiska farmar, fabriker och andra former av automation får
                                endast användas för resurser som tillhör ditt settlements
                                produktionskategori. Begränsningen gäller system som producerar
                                resurser utan eller med minimal spelarinsats.
                            </p>
                        </div>

                        <div className={styles.automationGrid}>
                            <article className={styles.allowedCard}>
                                <span>Tillåtet</span>
                                <h3>Produktion inom kategorin</h3>
                                <p>
                                    Ett settlement med Skogsbruk får bygga automatiska
                                    trädfarmar. Ett settlement med Gruvdrift får bygga
                                    stone-farms och annan gruvrelaterad automation.
                                </p>
                            </article>

                            <article className={styles.forbiddenCard}>
                                <span>Förbjudet</span>
                                <h3>Produktion utanför kategorin</h3>
                                <p>
                                    Ett Skogsbruks-settlement får inte bygga en stone-farm.
                                    Ett Gruvdrifts-settlement får inte bygga automatiska
                                    vete- eller trädfarmar.
                                </p>
                            </article>
                        </div>

                        <div className={styles.automationNotes}>
                            <article>
                                <strong>Manuell insamling</strong>
                                <p>Manuell insamling av resurser är alltid tillåten.</p>
                            </article>
                            <article>
                                <strong>Automatiska resurser</strong>
                                <p>Ger aldrig GZ Coins, även om farmen är tillåten enligt ditt settlements produktionskategori. Endast manuellt insamlade resurser ger GZ Coins.</p>
                            </article>
                            <article>
                                <strong>Syftet</strong>
                                <p>
                                    Om en automatisk konstruktion producerar resurser från en
                                    annan produktionskategori än ditt settlements kategori är
                                    den förbjuden, oavsett konstruktion eller teknik.
                                </p>
                            </article>
                        </div>
                    </PageContainer>
                </section>

                <section className={`${styles.section} ${styles.technicalSection}`}>
                    <PageContainer>
                        <div className={styles.sectionHeading}>
                            <span className={styles.kicker}>Fair play</span>
                            <h2>Buggar och programvara ska aldrig bli en genväg</h2>
                            <p>
                                Är du osäker på om en metod, klient eller konstruktion är
                                tillåten, fråga serverteamet innan du använder den.
                            </p>
                        </div>

                        <RuleList rules={technicalRules} />

                        <div className={styles.reportBox}>
                            <div>
                                <span>Hittat en bugg?</span>
                                <p>
                                    Rapportera den i Discordkanalen för buggrapporter. Att
                                    rapportera ett fel är alltid bättre än att testa hur långt
                                    det går att utnyttja.
                                </p>
                            </div>
                            <Button href="/discord" variant="secondary">
                                Öppna Discord
                            </Button>
                        </div>
                    </PageContainer>
                </section>

                <section className={styles.section}>
                    <PageContainer>
                        <div className={styles.sectionHeading}>
                            <span className={styles.kicker}>Griefing och föremål</span>
                            <h2>Frihet betyder inte sabotage</h2>
                        </div>

                        <div className={styles.twoColumnRules}>
                            <article>
                                <h3>Griefing</h3>
                                <p>
                                    Det är förbjudet att medvetet förstöra andra spelares
                                    upplevelse genom sabotage, trakasserier eller handlingar
                                    som går emot serverns syfte. Regeln gäller även där block
                                    tekniskt sett går att placera eller förstöra.
                                </p>
                            </article>
                            <article>
                                <h3>Dödade spelares föremål</h3>
                                <p>
                                    När en spelare dör är det tillåtet för andra spelare att
                                    plocka upp föremålen som tappas. Död och förlorad loot är
                                    en av världens risker.
                                </p>
                            </article>
                        </div>
                    </PageContainer>
                </section>

                <section className={styles.faqSection}>
                    <PageContainer>
                        <div className={styles.sectionHeading}>
                            <span className={styles.kicker}>Snabba svar</span>
                            <h2>Vanliga situationer</h2>
                        </div>

                        <div className={styles.faqGrid}>
                            {quickAnswers.map((item) => (
                                <article key={item.question}>
                                    <h3>{item.question}</h3>
                                    <p>{item.answer}</p>
                                </article>
                            ))}
                        </div>
                    </PageContainer>
                </section>

                <section className={styles.finalSection}>
                    <PageContainer className={styles.finalPanel}>
                        <div>
                            <span className={styles.kicker}>Reglerna kan utvecklas</span>
                            <h2>Målet förblir detsamma</h2>
                            <p>
                                GameZone förändras när nya funktioner införs. Regler kan
                                därför behöva uppdateras eller förtydligas, men målet är
                                alltid en rättvis, rolig och levande spelvärld.
                            </p>
                        </div>
                        <div className={styles.finalLinks}>
                            <Button href="/wiki" variant="secondary" size="large">
                                Läs speldata i wikin
                            </Button>
                            <Link href="/om-gamezone">Läs om grundidén →</Link>
                        </div>
                    </PageContainer>
                </section>
            </div>
        </MainLayout>
    );
}
