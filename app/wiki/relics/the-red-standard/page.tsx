import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { MainLayout } from "@/components/layout/MainLayout";
import styles from "./page.module.css";
import relicImage from "../assets/the-red-standard.png";

export const metadata: Metadata = {
    title: "The Red Standard | GameZone Wiki",
    description: "The Red Standard, en Common settlementrelik från Varkesh som ger +2 War Tickets.",
};

export default function TheRedStandardWikiPage() {
    return (
        <MainLayout>
            <main className={styles.page}>
                <div className={styles.shell}>
                    <nav className={styles.breadcrumbs} aria-label="Brödsmulor">
                        <Link href="/wiki">Wiki</Link>
                        <span>/</span>
                        <Link href="/wiki/relics/reliker">Reliker</Link>
                        <span>/</span>
                        <span>The Red Standard</span>
                    </nav>

                    <section className={styles.hero}>
                        <div className={styles.heroCopy}>
                            <div className={styles.badges}>
                                <span className={styles.common}>Common</span>
                                <span>Varkesh</span>
                                <span>GZR-0006</span>
                            </div>

                            <p className={styles.eyebrow}>GameZone Relic Archive</p>
                            <h1>The Red Standard</h1>
                            <p className={styles.lead}>
                                En gammal krigsfana från Varkesh, buren framför legionerna under några av rikets blodigaste fälttåg.
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
                                alt="The Red Standard, en gammal arbetshacka från Varkesh"
                                width={1536}
                                height={1136}
                                priority
                            />
                            <div className={styles.artLabel}>
                                <span>Common Relic</span>
                                <strong>The Red Standard</strong>
                            </div>
                        </div>
                    </section>

                    <section className={styles.contentGrid}>
                        <article className={styles.article}>
                            <p className={styles.sectionEyebrow}>Lore</p>
                            <h2>Fanan som aldrig föll</h2>
                            <p>
                                The Red Standard är en gammal krigsfana från <strong>Varkesh</strong>,
                                buren framför legionerna under några av rikets blodigaste fälttåg.
                            </p>
                            <p>
                                Fanan sägs ha tillhört <strong>den Tredje Legionen</strong>, en styrka som blev
                                känd för en enkel princip. Så länge den röda fanan stod kvar hade slaget ännu
                                inte gått förlorat.
                            </p>
                            <p>
                                Under ett av legionens sista stora slag föll fanbäraren tidigt. En annan soldat
                                tog hans plats. När även han föll lyftes fanan av nästa. Vid dagens slut hade
                                elva legionärer burit den. Ingen av dem överlevde.
                            </p>
                            <p>Men fanan föll aldrig.</p>
                            <p>
                                När förstärkningar till slut nådde slagfältet fann de The Red Standard fortfarande
                                stående bland de stupade. Vem som hade rest den en sista gång vet ingen.
                            </p>
                            <p>
                                Efter det slutade Varkesh att betrakta den som en vanlig militär fana. Den blev
                                en symbol för något betydligt viktigare än seger, att leden aldrig får brytas
                                bara för att människorna i dem gör det.
                            </p>
                            <p>
                                Med tiden försvann den ur legionens ägo. Vissa gamla militära texter hävdar att
                                den fördes bort efter ett nederlag, andra säger bara att den aldrig återlämnades.
                            </p>
                            <p>
                                Än idag används ett gammalt uttryck bland Varkeshs soldater när ett slag verkar förlorat:
                            </p>
                            <blockquote>
                                Så länge det röda står, står Varkesh.
                            </blockquote>
                        </article>

                        <aside className={styles.infoCard}>
                            <div className={styles.infoTitle}>
                                <span>Relikdata</span>
                                <strong>GZR-0006</strong>
                            </div>

                            <dl>
                                <div><dt>Rarity</dt><dd className={styles.rareText}>Common</dd></div>
                                <div><dt>Kultur</dt><dd>Varkesh</dd></div>
                                <div><dt>Item</dt><dd>Red Banner</dd></div>
                                <div><dt>Hållbarhet</dt><dd>Unbreakable</dd></div>
                                <div><dt>Typ</dt><dd>Settlement Relic</dd></div>
                                <div><dt>Settlementbonus</dt><dd>+2 War Tickets</dd></div>
                                <div><dt>Aktivering</dt><dd>Settlement Inventory</dd></div>
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
