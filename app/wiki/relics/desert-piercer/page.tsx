import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { MainLayout } from "@/components/layout/MainLayout";
import styles from "./page.module.css";
import relicImage from "../assets/desert-piercer.png";

export const metadata: Metadata = {
    title: "Desert Piercer | GameZone Wiki",
    description: "Desert Piercer, en relik från Varkesh. Ett armborst byggt för rikets hårda ökenpatruller.",
};

export default function DesertPiercerWikiPage() {
    return (
        <MainLayout>
            <main className={styles.page}>
                <div className={styles.shell}>
                    <nav className={styles.breadcrumbs} aria-label="Brödsmulor">
                        <Link href="/wiki">Wiki</Link>
                        <span>/</span>
                        <Link href="/wiki/relics/reliker">Reliker</Link>
                        <span>/</span>
                        <span>Desert Piercer</span>
                    </nav>

                    <section className={styles.hero}>
                        <div className={styles.heroCopy}>
                            <div className={styles.badges}>
                                <span className={styles.common}>Common</span>
                                <span>Varkesh</span>
                                <span>GZR-0007</span>
                            </div>

                            <p className={styles.eyebrow}>GameZone Relic Archive</p>
                            <h1>Desert Piercer</h1>
                            <p className={styles.lead}>
                                Ett armborst från Varkesh, byggt för långa patruller genom hetta, sand och öppna vidder.
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
                                alt="Desert Piercer, ett armborst från Varkesh"
                                width={1536}
                                height={1136}
                                priority
                            />
                            <div className={styles.artLabel}>
                                <span>Common Relic</span>
                                <strong>Desert Piercer</strong>
                            </div>
                        </div>
                    </section>

                    <section className={styles.contentGrid}>
                        <article className={styles.article}>
                            <p className={styles.sectionEyebrow}>Lore</p>
                            <h2>Sahir Vekrans armborst</h2>

                            <p>
                                Desert Piercer skapades för <strong>Varkeshs ökenpatruller</strong>, soldater som
                                kunde tillbringa veckor långt från rikets murar, där strider ofta avgjordes på
                                avstånd innan fienden ens hunnit nära.
                            </p>

                            <p>
                                Armborstet sägs ha tillhört <strong>Sahir Vekran</strong>, en spanare vars uppgift
                                var att bevaka de gamla handelsvägarna genom öknen. Han var känd för att bära så
                                lite utrustning som möjligt, vatten, några få bolts och Desert Piercer.
                            </p>

                            <p>
                                Sahir lärde sig snabbt att ute i öknen fanns sällan tid för ett andra försök.
                                Sandstormar kunde dölja fiender på några sekunder och avstånden mellan skydd
                                kunde vara enorma.
                            </p>

                            <p>
                                Därför modifierade han sitt vapen gång på gång. Mekanismen gjordes snabbare,
                                stocken lättare och konstruktionen förstärktes för att överleva sand, hetta
                                och långa marscher.
                            </p>

                            <p>
                                Det sägs att Sahir under sitt sista uppdrag lämnade Varkesh ensam och red långt
                                ut över sanden. Hästen återvände. Sahir gjorde det aldrig.
                            </p>

                            <p>
                                Desert Piercer försvann tillsammans med honom och blev med tiden en del av
                                berättelserna från rikets yttersta gränser. Ingen vet var Sahir slutligen hamnade.
                            </p>

                            <blockquote>
                                Öknen ger dig sällan ett andra skott.
                            </blockquote>
                        </article>

                        <aside className={styles.infoCard}>
                            <div className={styles.infoTitle}>
                                <span>Relikdata</span>
                                <strong>GZR-0007</strong>
                            </div>

                            <dl>
                                <div>
                                    <dt>Kultur</dt>
                                    <dd>Varkesh</dd>
                                </div>
                                <div>
                                    <dt>Item</dt>
                                    <dd>Crossbow</dd>
                                </div>
                                <div>
                                    <dt>Quick Charge</dt>
                                    <dd>II</dd>
                                </div>
                                <div>
                                    <dt>Piercing</dt>
                                    <dd>III</dd>
                                </div>
                                <div>
                                    <dt>Settlementbonus</dt>
                                    <dd>Ingen separat bonus</dd>
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
