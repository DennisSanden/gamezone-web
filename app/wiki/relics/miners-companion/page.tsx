import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { MainLayout } from "@/components/layout/MainLayout";
import styles from "./page.module.css";
import relicImage from "../../_assets/miners-companion.png";

export const metadata: Metadata = {
    title: "Miner's Companion | GameZone Wiki",
    description: "Miner's Companion, en Common relik från Andvari och en av GameZones unika serverreliker.",
};

export default function MinersCompanionWikiPage() {
    return (
        <MainLayout>
            <main className={styles.page}>
                <div className={styles.shell}>
                    <nav className={styles.breadcrumbs} aria-label="Brödsmulor">
                        <Link href="/wiki">Wiki</Link>
                        <span>/</span>
                        <Link href="/wiki/relics/reliker">Reliker</Link>
                        <span>/</span>
                        <span>Miner's Companion</span>
                    </nav>

                    <section className={styles.hero}>
                        <div className={styles.heroCopy}>
                            <div className={styles.badges}>
                                <span className={styles.common}>Common</span>
                                <span>Andvari</span>
                                <span>GZR-0001</span>
                            </div>

                            <p className={styles.eyebrow}>GameZone Relic Archive</p>
                            <h1>Miner's Companion</h1>
                            <p className={styles.lead}>
                                En gammal arbetshacka från Andvari, skapad för gruvarbetare som
                                tillbringade större delen av sina liv under bergen.
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
                                alt="Miner's Companion, en gammal arbetshacka från Andvari"
                                width={1536}
                                height={1136}
                                priority
                            />
                            <div className={styles.artLabel}>
                                <span>Common Relic</span>
                                <strong>Miner's Companion</strong>
                            </div>
                        </div>
                    </section>

                    <section className={styles.contentGrid}>
                        <article className={styles.article}>
                            <p className={styles.sectionEyebrow}>Lore</p>
                            <h2>Ett verktyg byggt för arbete</h2>

                            <p>
                                Miner's Companion är en gammal arbetshacka från <strong>Andvari</strong>,
                                skapad för gruvarbetare som tillbringade större delen av sina liv under bergen.
                            </p>

                            <p>
                                Den var aldrig avsedd för kungar, hjältar eller stora äventyrare. Den byggdes
                                för arbete. Ett pålitligt verktyg som kunde följa sin ägare genom tusentals
                                block av sten utan att ge vika.
                            </p>

                            <p>
                                Det sägs att hackan bytte ägare många gånger genom åren. När en gruvarbetare
                                blev för gammal för gruvorna gick den vidare till nästa. Med tiden försvann
                                namnen på dem som burit den, men hackan bestod.
                            </p>

                            <p>Ingen vet vem som hade den sist eller hur den försvann.</p>

                            <p>
                                För Andvaris gruvarbetare representerar Miner's Companion något betydligt
                                enklare än ära och rikedom.
                            </p>

                            <blockquote>
                                Ett bra verktyg. Ett hårt dagsverke. Och ännu ett block att bryta.
                            </blockquote>
                        </article>

                        <aside className={styles.infoCard}>
                            <div className={styles.infoTitle}>
                                <span>Relikdata</span>
                                <strong>GZR-0001</strong>
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
                                    <dd>Iron Pickaxe</dd>
                                </div>
                                <div>
                                    <dt>Hållbarhet</dt>
                                    <dd>Unbreakable</dd>
                                </div>
                                <div>
                                    <dt>Efficiency</dt>
                                    <dd>III</dd>
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
