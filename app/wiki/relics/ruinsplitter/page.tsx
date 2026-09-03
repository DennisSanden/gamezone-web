import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { MainLayout } from "@/components/layout/MainLayout";
import styles from "./page.module.css";
import relicImage from "../assets/ruinsplitter.png";

export const metadata: Metadata = {
    title: "Ruinsplitter | GameZone Wiki",
    description: "Ruinsplitter, en Common-relik från Gondoria. En Iron Pickaxe med Efficiency III och Fortune II.",
};

export default function RuinsplitterWikiPage() {
    return (
        <MainLayout>
            <main className={styles.page}>
                <div className={styles.shell}>
                    <nav className={styles.breadcrumbs} aria-label="Brödsmulor">
                        <Link href="/wiki">Wiki</Link>
                        <span>/</span>
                        <Link href="/wiki/relics/reliker">Reliker</Link>
                        <span>/</span>
                        <span>Ruinsplitter</span>
                    </nav>

                    <section className={styles.hero}>
                        <div className={styles.heroCopy}>
                            <div className={styles.badges}>
                                <span className={styles.common}>Common</span>
                                <span>Gondoria</span>
                                <span>GZR-0012</span>
                            </div>

                            <p className={styles.eyebrow}>GameZone Relic Archive</p>
                            <h1>Ruinsplitter</h1>
                            <p className={styles.lead}>
                                En tung järnhacka från Gondorias storhetstid, smidd för att bryta sten, murar och ruiner som andra trodde skulle stå för evigt.
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
                                alt="Ruinsplitter, en järnhacka från Gondoria"
                                width={1536}
                                height={1024}
                                priority
                            />
                            <div className={styles.artLabel}>
                                <span>Common Relic</span>
                                <strong>Ruinsplitter</strong>
                            </div>
                        </div>
                    </section>

                    <section className={styles.contentGrid}>
                        <article className={styles.article}>
                            <p className={styles.sectionEyebrow}>Lore</p>
                            <h2>Garran Holts hacka</h2>

                            <p>
                                Ruinsplitter tillhörde <strong>Garran Holt</strong>, en av Gondorias kungliga stenbrytare.
                            </p>

                            <p>
                                När Gondoria växte räckte det inte längre att bygga nytt. Gamla fästningar, murar och tempel behövde rivas för att ge plats åt ett större rike. Garran fick uppdraget att leda arbetet.
                            </p>

                            <p>
                                Hans hacka smiddes helt i stål och byggdes för ett enda syfte, att bryta igenom det som tidigare generationer trodde skulle stå för evigt.
                            </p>

                            <p>
                                När Gondoria senare föll användes samma verktyg igen. Inte för att bygga ett nytt rike, utan för att gräva genom ruinerna efter de människor som begravts under dem.
                            </p>

                            <p>
                                Garran fortsatte långt efter att sökandet officiellt hade avslutats.
                            </p>

                            <p>En morgon var han borta.</p>

                            <p>
                                Hackan hittades stående i sprickan på en gammal stadsmur.
                            </p>

                            <p>
                                Sedan dess kallas den <strong>Ruinsplitter</strong>.
                            </p>

                            <blockquote>Allt som byggs kan brytas.</blockquote>
                        </article>

                        <aside className={styles.infoCard}>
                            <div className={styles.infoTitle}>
                                <span>Relikdata</span>
                                <strong>GZR-0012</strong>
                            </div>

                            <dl>
                                <div><dt>Kultur</dt><dd>Gondoria</dd></div>
                                <div><dt>Item</dt><dd>Iron Pickaxe</dd></div>
                                <div><dt>Efficiency</dt><dd>III</dd></div>
                                <div><dt>Fortune</dt><dd>II</dd></div>
                                <div><dt>Settlementbonus</dt><dd>Ingen separat bonus</dd></div>
                            </dl>

                            <p className={styles.infoNote}>
                                Ägarskap, upptäckare och relikens levande serverhistorik visas i Relikarkivet när informationen blir offentlig.
                            </p>
                        </aside>
                    </section>

                    <section className={styles.relicSystemCta}>
                        <div>
                            <p className={styles.sectionEyebrow}>Reliksystemet</p>
                            <h2>En relik är ett riktigt föremål.</h2>
                            <p>
                                Den kan hittas, tappas, ges bort och byta ägare. Engine dokumenterar dess historia medan föremålet fortsätter leva i spelvärlden.
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
