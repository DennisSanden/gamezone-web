import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { MainLayout } from "@/components/layout/MainLayout";
import styles from "./page.module.css";
import relicImage from "../assets/book-of-the-ancients.png";

export const metadata: Metadata = {
    title: "Book of the Ancients | GameZone Wiki",
    description: "Book of the Ancients, en Rare settlementrelik från Vaelthor som ger +1% Production och +3% XP.",
};

export default function BookOfTheAncientsWikiPage() {
    return (
        <MainLayout>
            <main className={styles.page}>
                <div className={styles.shell}>
                    <nav className={styles.breadcrumbs} aria-label="Brödsmulor">
                        <Link href="/wiki">Wiki</Link>
                        <span>/</span>
                        <Link href="/wiki/relics/reliker">Reliker</Link>
                        <span>/</span>
                        <span>Book of the Ancients</span>
                    </nav>

                    <section className={styles.hero}>
                        <div className={styles.heroCopy}>
                            <div className={styles.badges}>
                                <span className={styles.rare}>Rare</span>
                                <span>Vaelthor</span>
                                <span>GZR-0030</span>
                            </div>

                            <p className={styles.eyebrow}>GameZone Relic Archive</p>
                            <h1>Book of the Ancients</h1>
                            <p className={styles.lead}>
                                En uråldrig bok från Vaelthor, fylld med övermagikern Elarions läror om magi, natur och kunskap.
                            </p>

                            <div className={styles.actions}>
                                <Link href="/relics" className={styles.primaryAction}>
                                    Till Relikarkivet <span aria-hidden="true">→</span>
                                </Link>
                                <Link href="/wiki/relics/reliker" className={styles.secondaryAction}>
                                    Om reliksystemet
                                </Link>
                            </div>
                        </div>

                        <div className={styles.art}>
                            <div className={styles.artGlow} aria-hidden="true" />
                            <Image
                                src={relicImage}
                                alt="Book of the Ancients, en uråldrig magisk bok från Vaelthor"
                                width={1536}
                                height={1136}
                                priority
                            />
                            <div className={styles.artLabel}>
                                <span>Rare Relic</span>
                                <strong>Book of the Ancients</strong>
                            </div>
                        </div>
                    </section>

                    <section className={styles.contentGrid}>
                        <article className={styles.article}>
                            <p className={styles.sectionEyebrow}>Lore</p>
                            <h2>Övermagiker Elarions förlorade verk</h2>

                            <p>
                                Book of the Ancients sägs en gång ha tillhört <strong>övermagikern Elarion</strong>,
                                en av Vaelthors mest framstående lärda under rikets äldre historia.
                            </p>

                            <p>
                                Elarion ägnade större delen av sitt liv åt att studera sambandet mellan magi,
                                natur och de människor som levde omkring den. Till skillnad från många andra
                                magiker samlade han inte sin kunskap för egen makt. Han menade att verklig
                                styrka uppstod när kunskap kunde användas av ett helt samhälle.
                            </p>

                            <p>
                                Under årtionden fyllde han boken med sina upptäckter. Beskrivningar av gamla
                                ritualer blandades med anteckningar om odling, hantverk, naturens kretslopp
                                och metoder för att föra kunskap vidare mellan generationer.
                            </p>

                            <p>
                                När Elarion försvann upphörde också alla kända spår av boken.
                            </p>

                            <p>
                                Delar av hans läror överlevde i Vaelthor, men originalet blev med tiden något
                                mellan historia och legend. Det sägs att ingen av de senare avskrifterna
                                lyckades återskapa allt som övermagikern hade samlat.
                            </p>

                            <p>
                                Book of the Ancients skapades aldrig för en ensam bärare. Dess kunskap var
                                tänkt att delas.
                            </p>

                            <p>
                                Därför kan ett settlement som återfår boken dra nytta av Elarions gamla lärdomar,
                                <strong> +1% Production och +3% XP</strong> till hela settlementet.
                            </p>

                            <blockquote>
                                “Kunskap som stannar hos en människa dör med henne. Kunskap som delas kan överleva ett rike.”
                                <br />— Övermagiker Elarion
                            </blockquote>
                        </article>

                        <aside className={styles.infoCard}>
                            <div className={styles.infoTitle}>
                                <span>Relikdata</span>
                                <strong>GZR-0030</strong>
                            </div>

                            <dl>
                                <div>
                                    <dt>Rarity</dt>
                                    <dd className={styles.rareText}>Rare</dd>
                                </div>
                                <div>
                                    <dt>Kultur</dt>
                                    <dd>Vaelthor</dd>
                                </div>
                                <div>
                                    <dt>Item</dt>
                                    <dd>Written Book</dd>
                                </div>
                                <div>
                                    <dt>Hållbarhet</dt>
                                    <dd>Unbreakable</dd>
                                </div>
                                <div>
                                    <dt>Typ</dt>
                                    <dd>Settlement Relic</dd>
                                </div>
                                <div>
                                    <dt>Production</dt>
                                    <dd>+1%</dd>
                                </div>
                                <div>
                                    <dt>XP</dt>
                                    <dd>+3%</dd>
                                </div>
                                <div>
                                    <dt>Aktivering</dt>
                                    <dd>Settlement Inventory</dd>
                                </div>
                            </dl>

                            <p className={styles.infoNote}>
                                Ägarskap, upptäckare och relikens levande serverhistorik visas i
                                Relikarkivet när informationen blir offentlig.
                            </p>
                        </aside>
                    </section>

                    <section className={styles.relicSystemCta}>
                        <div>
                            <p className={styles.sectionEyebrow}>Reliksystemet</p>
                            <h2>En relik är ett riktigt föremål.</h2>
                            <p>
                                Den kan hittas, tappas, ges bort och byta ägare. Engine dokumenterar
                                dess historia medan föremålet fortsätter leva i spelvärlden.
                            </p>
                        </div>
                        <Link href="/wiki/relics/reliker">
                            Läs hela relikwikin <span aria-hidden="true">→</span>
                        </Link>
                    </section>
                </div>
            </main>
        </MainLayout>
    );
}
