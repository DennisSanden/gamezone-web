import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { MainLayout } from "@/components/layout/MainLayout";
import styles from "./page.module.css";
import relicImage from "../assets/wayfinder.png";

export const metadata: Metadata = {
    title: "Wayfinder | GameZone Wiki",
    description: "Wayfinder, en Common neutral relik och en av GameZones unika serverreliker.",
};

export default function WayfinderWikiPage() {
    return (
        <MainLayout>
            <main className={styles.page}>
                <div className={styles.shell}>
                    <nav className={styles.breadcrumbs} aria-label="Brödsmulor">
                        <Link href="/wiki">Wiki</Link>
                        <span>/</span>
                        <Link href="/wiki/relics/reliker">Reliker</Link>
                        <span>/</span>
                        <span>Wayfinder</span>
                    </nav>

                    <section className={styles.hero}>
                        <div className={styles.heroCopy}>
                            <div className={styles.badges}>
                                <span className={styles.common}>Common</span>
                                <span>Neutral</span>
                                <span>GZR-0018</span>
                            </div>

                            <p className={styles.eyebrow}>GameZone Relic Archive</p>
                            <h1>Wayfinder</h1>
                            <p className={styles.lead}>
                                En gammal kompass som inte bryr sig om norr. Wayfinder pekar alltid hem.
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
                                alt="Wayfinder, en gammal kompass som alltid pekar hem"
                                width={1402}
                                height={1122}
                                priority
                            />
                            <div className={styles.artLabel}>
                                <span>Common Relic</span>
                                <strong>Wayfinder</strong>
                            </div>
                        </div>
                    </section>

                    <section className={styles.contentGrid}>
                        <article className={styles.article}>
                            <p className={styles.sectionEyebrow}>Lore</p>
                            <h2>Kompassen som aldrig pekar norrut</h2>

                            <p>
                                Ingen vet vem som tillverkade <strong>Wayfinder</strong>. De äldsta
                                uppgifterna om kompassen kommer från resande handelsmän, som beskrev den
                                som ett användbart men opålitligt navigationsverktyg.
                            </p>

                            <p>
                                Problemet var att den aldrig pekade norrut.
                            </p>

                            <p>
                                Oavsett var ägaren befann sig pekade nålen envist åt ett annat håll.
                                Flera försökte reparera kompassen, byta ut nålen eller öppna höljet för
                                att förstå vad som var fel. Ingenting förändrade dess riktning.
                            </p>

                            <p>
                                Det dröjde länge innan någon förstod vad den faktiskt visade.
                            </p>

                            <p>
                                <strong>Wayfinder pekar hem.</strong>
                            </p>

                            <p>
                                Inte mot platsen där den tillverkades eller där den hittades, utan mot
                                den plats som bäraren själv betraktar som sitt hem.
                            </p>

                            <p>
                                Kompassen har därför bytt riktning många gånger genom åren. För vissa
                                har den pekat mot en stad. För andra mot en liten gård långt från
                                närmaste väg.
                            </p>

                            <p>
                                Det finns även berättelser om ägare som sett nålen ändra riktning utan
                                att de själva flyttat sig.
                            </p>

                            <p>
                                Och om några där den inte pekat någonstans alls.
                            </p>

                            <blockquote>
                                Du behöver inte veta var du är, så länge du vet var du hör hemma.
                            </blockquote>
                        </article>

                        <aside className={styles.infoCard}>
                            <div className={styles.infoTitle}>
                                <span>Relikdata</span>
                                <strong>GZR-0018</strong>
                            </div>

                            <dl>
                                <div>
                                    <dt>Rarity</dt>
                                    <dd className={styles.rareText}>Common</dd>
                                </div>
                                <div>
                                    <dt>Kultur</dt>
                                    <dd>Neutral</dd>
                                </div>
                                <div>
                                    <dt>Item</dt>
                                    <dd>Compass</dd>
                                </div>
                                <div>
                                    <dt>Specialeffekt</dt>
                                    <dd>Pekar hem</dd>
                                </div>
                                <div>
                                    <dt>I spel</dt>
                                    <dd>Högerklick för att peka mot ditt settlements registrerade spawn</dd>
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
