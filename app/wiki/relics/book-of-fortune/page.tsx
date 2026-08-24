import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { MainLayout } from "@/components/layout/MainLayout";
import styles from "./page.module.css";
import relicImage from "../assets/book-of-fortune.png";

export const metadata: Metadata = {
    title: "The Book of Fortune | GameZone Wiki",
    description: "The Book of Fortune, en Common settlementrelik från Andvari som ger +2% Production.",
};

export default function BookOfFortuneWikiPage() {
    return (
        <MainLayout>
            <main className={styles.page}>
                <div className={styles.shell}>
                    <nav className={styles.breadcrumbs} aria-label="Brödsmulor">
                        <Link href="/wiki">Wiki</Link>
                        <span>/</span>
                        <Link href="/wiki/relics/reliker">Reliker</Link>
                        <span>/</span>
                        <span>The Book of Fortune</span>
                    </nav>

                    <section className={styles.hero}>
                        <div className={styles.heroCopy}>
                            <div className={styles.badges}>
                                <span className={styles.common}>Common</span>
                                <span>Andvari</span>
                                <span>GZR-0003</span>
                            </div>

                            <p className={styles.eyebrow}>GameZone Relic Archive</p>
                            <h1>The Book of Fortune</h1>
                            <p className={styles.lead}>
                                En gammal bok från Andvari vars nedtecknade metoder kan ge ett helt settlement +2% Production.
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
                                alt="The Book of Fortune, en gammal arbetshacka från Andvari"
                                width={1536}
                                height={1136}
                                priority
                            />
                            <div className={styles.artLabel}>
                                <span>Common Relic</span>
                                <strong>The Book of Fortune</strong>
                            </div>
                        </div>
                    </section>

                    <section className={styles.contentGrid}>
                        <article className={styles.article}>
                            <p className={styles.sectionEyebrow}>Lore</p>
                            <h2>Kunskapen bakom välståndet</h2>

                            <p>
                                The Book of Fortune är en gammal bok från <strong>Andvari</strong>,
                                sammanställd under en tid då rikets lärda började dokumentera hur gruvor,
                                gårdar och verkstäder kunde organiseras mer effektivt.
                            </p>

                            <p>
                                Trots namnet handlar boken inte om gömda skatter eller magiska sätt att bli rik.
                                Dess sidor är fyllda med anteckningar om handel, arbetsmetoder, resursfördelning
                                och små förbättringar som tillsammans kunde få ett samhälle att producera mer.
                            </p>

                            <p>
                                Boken kopierades aldrig i någon större omfattning. Med tiden försvann originalet
                                och mycket av kunskapen med den.
                            </p>

                            <p>
                                Det sägs att flera av Andvaris mest framgångsrika bosättningar en gång byggdes
                                efter principerna som finns nedtecknade i boken.
                            </p>

                            <p>I dag återstår bara berättelserna om den.</p>

                            <p>För den som hittar The Book of Fortune väntar ingen hög med guld.</p>

                            <blockquote>
                                Men kanske kunskapen om hur man skapar en.
                            </blockquote>
                        </article>

                        <aside className={styles.infoCard}>
                            <div className={styles.infoTitle}>
                                <span>Relikdata</span>
                                <strong>GZR-0003</strong>
                            </div>

                            <dl>
                                <div>
                                    <dt>Rarity</dt>
                                    <dd className={styles.rareText}>Common</dd>
                                </div>
                                <div>
                                    <dt>Kultur</dt>
                                    <dd>Andvari</dd>
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
                                    <dt>Settlementbonus</dt>
                                    <dd>+2% Production</dd>
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
