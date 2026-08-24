import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { MainLayout } from "@/components/layout/MainLayout";
import styles from "./page.module.css";
import relicImage from "../assets/deepdelver.png";

export const metadata: Metadata = {
    title: "Deepdelver | GameZone Wiki",
    description: "Deepdelver, en Common relik från Andvari som en gång tillhörde Brannak Stenvråk.",
};

export default function DeepdelverWikiPage() {
    return (
        <MainLayout>
            <main className={styles.page}>
                <div className={styles.shell}>
                    <nav className={styles.breadcrumbs} aria-label="Brödsmulor">
                        <Link href="/wiki">Wiki</Link>
                        <span>/</span>
                        <Link href="/wiki/relics/reliker">Reliker</Link>
                        <span>/</span>
                        <span>Deepdelver</span>
                    </nav>

                    <section className={styles.hero}>
                        <div className={styles.heroCopy}>
                            <div className={styles.badges}>
                                <span className={styles.common}>Common</span>
                                <span>Andvari</span>
                                <span>GZR-0004</span>
                            </div>

                            <p className={styles.eyebrow}>GameZone Relic Archive</p>
                            <h1>Deepdelver</h1>
                            <p className={styles.lead}>
                                En gammal Andvari-hacka som en gång tillhörde gruvarbetaren och upptäcktsmannen Brannak Stenvråk.
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
                                alt="Deepdelver, en gammal arbetshacka från Andvari"
                                width={1536}
                                height={1136}
                                priority
                            />
                            <div className={styles.artLabel}>
                                <span>Common Relic</span>
                                <strong>Deepdelver</strong>
                            </div>
                        </div>
                    </section>

                    <section className={styles.contentGrid}>
                        <article className={styles.article}>
                            <p className={styles.sectionEyebrow}>Lore</p>
                            <h2>Brannak Stenvråks gamla hacka</h2>

                            <p>
                                Deepdelver är en gammal hacka från <strong>Andvari</strong>, mest känd
                                för att ha tillhört gruvarbetaren och upptäcktsmannen <strong>Brannak Stenvråk</strong>.
                            </p>
                            <p>
                                Brannak föddes i ett litet gruvsamhälle djupt inne i Andvaris berg.
                                Han var varken den starkaste eller snabbaste gruvarbetaren, men han hade
                                ett tålamod som få kunde mäta sig med och en envis nyfikenhet på vad som
                                fanns bakom nästa bergvägg.
                            </p>
                            <p>
                                Med Deepdelver i händerna arbetade han sig längre ner än de flesta vågade.
                                Han letade inte efter ära. För Brannak var själva upptäckten viktigare än
                                vad som kunde bäras tillbaka.
                            </p>
                            <p>
                                Under åren blev både mannen och hackan välkända bland Andvaris gruvarbetare.
                                När Brannak till slut försvann ur de nedtecknade berättelserna gjorde även
                                Deepdelver det.
                            </p>
                            <p>
                                Vad som hände med Brannak finns det inget säkert svar på. Kvar finns berättelserna
                                om en envis gruvarbetare som alltid ville se vad som fanns lite längre ner.
                            </p>
                            <blockquote>
                                Deepdelver är allt som finns kvar av Brannak Stenvråks arbete under bergen.
                            </blockquote>
                        </article>

                        <aside className={styles.infoCard}>
                            <div className={styles.infoTitle}>
                                <span>Relikdata</span>
                                <strong>GZR-0004</strong>
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
                                    <dd>Golden Pickaxe</dd>
                                </div>
                                <div>
                                    <dt>Hållbarhet</dt>
                                    <dd>Unbreakable</dd>
                                </div>
                                <div>
                                    <dt>Efficiency</dt>
                                    <dd>V</dd>
                                </div>
                                <div>
                                    <dt>Fortune</dt>
                                    <dd>I</dd>
                                </div>
                                <div>
                                    <dt>Settlementbonus</dt>
                                    <dd>Ingen</dd>
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
