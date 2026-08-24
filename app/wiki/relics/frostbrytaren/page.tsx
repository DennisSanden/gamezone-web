import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { MainLayout } from "@/components/layout/MainLayout";
import styles from "./page.module.css";

export const metadata: Metadata = {
    title: "Frostbrytaren | GameZone Wiki",
    description: "Frostbrytaren, en Rare relik från Andvari och en av GameZones unika serverreliker.",
};

export default function FrostbrytarenWikiPage() {
    return (
        <MainLayout>
            <main className={styles.page}>
                <div className={styles.shell}>
                    <nav className={styles.breadcrumbs} aria-label="Brödsmulor">
                        <Link href="/wiki">Wiki</Link>
                        <span>/</span>
                        <Link href="/wiki/relics/reliker">Reliker</Link>
                        <span>/</span>
                        <span>Frostbrytaren</span>
                    </nav>

                    <section className={styles.hero}>
                        <div className={styles.heroCopy}>
                            <div className={styles.badges}>
                                <span className={styles.rare}>Rare</span>
                                <span>Andvari</span>
                                <span>GZR-0019</span>
                            </div>

                            <p className={styles.eyebrow}>GameZone Relic Archive</p>
                            <h1>Frostbrytaren</h1>
                            <p className={styles.lead}>
                                En förlorad hacka från Andvari, smidd för gruvarbetare som arbetade
                                i rikets kallaste och hårdaste miljöer.
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
                                src="/relics/frostbrytaren.png"
                                alt="Frostbrytaren, en isblå hacka från Andvari"
                                width={1536}
                                height={1136}
                                priority
                            />
                            <div className={styles.artLabel}>
                                <span>Rare Relic</span>
                                <strong>Frostbrytaren</strong>
                            </div>
                        </div>
                    </section>

                    <section className={styles.contentGrid}>
                        <article className={styles.article}>
                            <p className={styles.sectionEyebrow}>Lore</p>
                            <h2>En förlorad hacka från Andvari</h2>

                            <p>
                                Frostbrytaren är en gammal hacka från <strong>Andvari</strong>, smidd
                                för gruvarbetare som arbetade i rikets kallaste och hårdaste miljöer.
                            </p>

                            <p>
                                Den sägs ha tillhört en av Andvaris främsta bergsmästare och användes
                                under många år för att bryta sig genom sten och frusen berggrund där
                                vanliga verktyg snabbt gav upp.
                            </p>

                            <p>
                                Hackan blev med tiden en symbol för den envishet som Andvaris
                                gruvarbetare blivit kända för.
                            </p>

                            <p>Sedan försvann den.</p>

                            <p>
                                Ingen nedtecknad berättelse förklarar hur, och ingen vet vem som bar
                                den sist. Under generationer har historier om Frostbrytaren därför
                                vandrat mellan gruvarbetare, handelsmän och äventyrare.
                            </p>

                            <p>Många har letat. Ingen har hittat den.</p>

                            <blockquote>
                                Frostbrytaren väntar fortfarande på att återvända till världen.
                            </blockquote>
                        </article>

                        <aside className={styles.infoCard}>
                            <div className={styles.infoTitle}>
                                <span>Relikdata</span>
                                <strong>GZR-0019</strong>
                            </div>

                            <dl>
                                <div>
                                    <dt>Rarity</dt>
                                    <dd className={styles.rareText}>Rare</dd>
                                </div>
                                <div>
                                    <dt>Kultur</dt>
                                    <dd>Andvari</dd>
                                </div>
                                <div>
                                    <dt>Item</dt>
                                    <dd>Diamond Pickaxe</dd>
                                </div>
                                <div>
                                    <dt>Hållbarhet</dt>
                                    <dd>Unbreakable</dd>
                                </div>
                                <div>
                                    <dt>Efficiency</dt>
                                    <dd>IV</dd>
                                </div>
                                <div>
                                    <dt>Fortune</dt>
                                    <dd>II</dd>
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
