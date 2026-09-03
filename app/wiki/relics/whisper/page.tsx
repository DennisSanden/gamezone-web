import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { MainLayout } from "@/components/layout/MainLayout";
import styles from "./page.module.css";
import relicImage from "../assets/whisper.png";

export const metadata: Metadata = {
    title: "Whisper | GameZone Wiki",
    description: "Whisper, en Common-relik från Vaelthor. En Bow med Power III och Infinity.",
};

export default function WhisperWikiPage() {
    return (
        <MainLayout>
            <main className={styles.page}>
                <div className={styles.shell}>
                    <nav className={styles.breadcrumbs} aria-label="Brödsmulor">
                        <Link href="/wiki">Wiki</Link>
                        <span>/</span>
                        <Link href="/wiki/relics/reliker">Reliker</Link>
                        <span>/</span>
                        <span>Whisper</span>
                    </nav>

                    <section className={styles.hero}>
                        <div className={styles.heroCopy}>
                            <div className={styles.badges}>
                                <span className={styles.common}>Common</span>
                                <span>Vaelthor</span>
                                <span>GZR-0014</span>
                            </div>

                            <p className={styles.eyebrow}>GameZone Relic Archive</p>
                            <h1>Whisper</h1>
                            <p className={styles.lead}>
                                En nästan ljudlös båge från Vaelthor, buren av spejaren Selwyn Arcael på uppdrag där ingen fick veta att han hade varit där.
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
                                alt="Whisper, en nästan ljudlös båge från Vaelthor"
                                width={1536}
                                height={1024}
                                priority
                            />
                            <div className={styles.artLabel}>
                                <span>Common Relic</span>
                                <strong>Whisper</strong>
                            </div>
                        </div>
                    </section>

                    <section className={styles.contentGrid}>
                        <article className={styles.article}>
                            <p className={styles.sectionEyebrow}>Lore</p>
                            <h2>Selwyn Arcaels båge</h2>

                            <p>
                                Whisper tillhörde <strong>Selwyn Arcael</strong>, en spejare i Vaelthors tjänst som sällan sågs och ännu mer sällan hördes.
                            </p>

                            <p>
                                Selwyn skickades dit vanliga soldater inte kunde färdas. Genom mörka skogar, övergivna ruiner och fientliga läger följde han sina mål i dagar utan att avslöja sin närvaro.
                            </p>

                            <p>
                                Hans båge saknade de utsmyckningar som Vaelthors finaste vapen ofta bar. Selwyn påstod att den hade ett viktigare kännetecken.
                            </p>

                            <p>Den var nästan helt ljudlös.</p>

                            <p>
                                Under ett uppdrag i skogarna norr om Vaelthor försvann Selwyn. Gruppen som skickades för att leta efter honom hittade inga spår av strid, inga fotsteg och ingen kropp.
                            </p>

                            <p>Endast bågen stod lutad mot ett träd.</p>

                            <p>Strängen vibrerade fortfarande.</p>

                            <p>Sedan dess kallas den <strong>Whisper</strong>.</p>

                            <blockquote>Du hör aldrig pilen som träffar dig.</blockquote>
                        </article>

                        <aside className={styles.infoCard}>
                            <div className={styles.infoTitle}>
                                <span>Relikdata</span>
                                <strong>GZR-0014</strong>
                            </div>

                            <dl>
                                <div><dt>Kultur</dt><dd>Vaelthor</dd></div>
                                <div><dt>Item</dt><dd>Bow</dd></div>
                                <div><dt>Power</dt><dd>III</dd></div>
                                <div><dt>Infinity</dt><dd>I</dd></div>
                                <div><dt>Settlementbonus</dt><dd>Ingen separat bonus</dd></div>
                            </dl>

                            <p className={styles.infoNote}>
                                Ägarskap, upptäckare och relikens levande serverhistorik visas i Relikarkivet när
                                informationen blir offentlig.
                            </p>
                        </aside>
                    </section>

                    <section className={styles.relicSystemCta}>
                        <div>
                            <p className={styles.sectionEyebrow}>Reliksystemet</p>
                            <h2>En relik är ett riktigt föremål.</h2>
                            <p>
                                Den kan hittas, tappas, ges bort och byta ägare. Engine dokumenterar dess historia
                                medan föremålet fortsätter leva i spelvärlden.
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
