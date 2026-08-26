import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { MainLayout } from "@/components/layout/MainLayout";
import styles from "./page.module.css";
import relicImage from "../assets/moonpiercer.png";

export const metadata: Metadata = {
    title: "Moonpiercer | GameZone Wiki",
    description: "Moonpiercer, en episk relik från Vaelthor. Bågen som tillhörde kvinnan som de gamla skrifterna endast kallar Månens dotter.",
};

export default function MoonpiercerWikiPage() {
    return (
        <MainLayout>
            <main className={styles.page}>
                <div className={styles.shell}>
                    <nav className={styles.breadcrumbs} aria-label="Brödsmulor">
                        <Link href="/wiki">Wiki</Link>
                        <span>/</span>
                        <Link href="/wiki/relics/reliker">Reliker</Link>
                        <span>/</span>
                        <span>Moonpiercer</span>
                    </nav>

                    <section className={styles.hero}>
                        <div className={styles.heroCopy}>
                            <div className={styles.badges}>
                                <span className={styles.epic}>Epic</span>
                                <span>Vaelthor</span>
                                <span>GZR-0039</span>
                            </div>

                            <p className={styles.eyebrow}>GameZone Relic Archive</p>
                            <h1>Moonpiercer</h1>
                            <p className={styles.lead}>
                                En båge från Vaelthors gamla skogar, förknippad med kvinnan som de äldsta skrifterna endast kallar Månens dotter.
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
                                alt="Moonpiercer, en episk båge från Vaelthor"
                                width={1536}
                                height={1024}
                                priority
                            />
                            <div className={styles.artLabel}>
                                <span>Epic Relic</span>
                                <strong>Moonpiercer</strong>
                            </div>
                        </div>
                    </section>

                    <section className={styles.contentGrid}>
                        <article className={styles.article}>
                            <p className={styles.sectionEyebrow}>Lore</p>
                            <h2>Månens dotter</h2>

                            <p>Ingen vet längre vad hon hette.</p>

                            <p>
                                De äldsta skrifterna från Vaelthor nämner henne bara som <strong>Månens dotter</strong>, en bågskytt som levde under en tid då skogarna fortfarande ansågs tillhöra de gamla makterna snarare än människorna.
                            </p>

                            <p>
                                Hon tjänade ingen kung och bar inget standar. I stället vandrade hon ensam längs Vaelthors gränser och jagade dem som tog sig för långt in bland de förbjudna träden. Det berättas att hon aldrig avlossade ett skott medan solen stod på himlen.
                            </p>

                            <p>Bågen hon bar kallades <strong>Moonpiercer</strong>.</p>

                            <p>
                                Den sägs ha tillverkats av svart trä från ett träd som endast blommade under fullmånen. I dess mitt fästes en blek sten vars ursprung aldrig kunnat fastställas. Vaelthors lärda hävdade senare att stenen inte reflekterade månens ljus.
                            </p>

                            <blockquote>Den samlade det.</blockquote>
                        </article>

                        <aside className={styles.infoCard}>
                            <div className={styles.infoTitle}>
                                <span>Relikdata</span>
                                <strong>GZR-0039</strong>
                            </div>

                            <dl>
                                <div><dt>Kultur</dt><dd>Vaelthor</dd></div>
                                <div><dt>Item</dt><dd>Bow</dd></div>
                                <div><dt>Power</dt><dd>V</dd></div>
                                <div><dt>Infinity</dt><dd>I</dd></div>
                                <div><dt>Flame</dt><dd>I</dd></div>
                                <div><dt>Punch</dt><dd>II</dd></div>
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
