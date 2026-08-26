import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { MainLayout } from "@/components/layout/MainLayout";
import styles from "./page.module.css";
import relicImage from "../assets/the-masons-journal.png";

export const metadata: Metadata = {
    title: "The Mason's Journal | GameZone Wiki",
    description: "The Mason's Journal, en relik från Gondoria. En gammal byggmästarjournal från rikets sista storhetstid.",
};

export default function TheMasonsJournalWikiPage() {
    return (
        <MainLayout>
            <main className={styles.page}>
                <div className={styles.shell}>
                    <nav className={styles.breadcrumbs} aria-label="Brödsmulor">
                        <Link href="/wiki">Wiki</Link>
                        <span>/</span>
                        <Link href="/wiki/relics/reliker">Reliker</Link>
                        <span>/</span>
                        <span>The Mason&apos;s Journal</span>
                    </nav>

                    <section className={styles.hero}>
                        <div className={styles.heroCopy}>
                            <div className={styles.badges}>
                                <span className={styles.common}>Common</span>
                                <span>Gondoria</span>
                                <span>GZR-0009</span>
                            </div>

                            <p className={styles.eyebrow}>GameZone Relic Archive</p>
                            <h1>The Mason&apos;s Journal</h1>
                            <p className={styles.lead}>
                                En gammal byggmästarjournal från Gondorias sista storhetstid, fylld av ritningar,
                                mått och tekniker som försvann tillsammans med riket.
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
                                alt="The Mason's Journal, en gammal byggmästarjournal från Gondoria"
                                width={1536}
                                height={1024}
                                priority
                            />
                            <div className={styles.artLabel}>
                                <span>Common Relic</span>
                                <strong>The Mason&apos;s Journal</strong>
                            </div>
                        </div>
                    </section>

                    <section className={styles.contentGrid}>
                        <article className={styles.article}>
                            <p className={styles.sectionEyebrow}>Lore</p>
                            <h2>Muraren</h2>

                            <p>Ingen vet vem som skrev den.</p>

                            <p>
                                Boken tros härstamma från Gondorias sista storhetstid, då rikets städer fortfarande
                                växte snabbare än kartograferna hann rita dem.
                            </p>

                            <p>
                                Författaren nämns aldrig vid namn. Genom hela journalen kallar han sig endast
                                <strong> Muraren</strong>.
                            </p>

                            <p>
                                Han skrev inte om kungar, krig eller rikedomar. Sidorna är fyllda av ritningar,
                                mått och anteckningar om byggnader som en gång stod över hela Gondoria. Valv som
                                kunde bära hela torn, murar som överlevde belägringar och salar vars byggnadsteknik
                                sedan länge gått förlorad.
                            </p>

                            <p>
                                Men mot slutet förändras anteckningarna. Ritningarna blir färre. Handskriften mer
                                stressad.
                            </p>

                            <p>På flera sidor återkommer samma mening:</p>

                            <blockquote>Sten glömmer inte.</blockquote>

                            <p>
                                När Gondoria föll försvann även Muraren. Journalen återfanns aldrig bland rikets
                                ruiner.
                            </p>

                            <p>
                                Ändå har berättelser om den överlevt. Det sägs att den som bär
                                <strong> The Mason&apos;s Journal</strong> kan se spåren efter det som en gång
                                byggts, även där endast ruiner återstår.
                            </p>
                        </article>

                        <aside className={styles.infoCard}>
                            <div className={styles.infoTitle}>
                                <span>Relikdata</span>
                                <strong>GZR-0009</strong>
                            </div>

                            <dl>
                                <div><dt>Kultur</dt><dd>Gondoria</dd></div>
                                <div><dt>Item</dt><dd>Written Book</dd></div>
                                <div><dt>Settlementbonus</dt><dd>+3% Building Materials Production</dd></div>
                            </dl>

                            <p className={styles.infoNote}>
                                Ägarskap, upptäckare och relikens levande serverhistorik visas i Relikarkivet
                                när informationen blir offentlig.
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
