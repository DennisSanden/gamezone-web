import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { MainLayout } from "@/components/layout/MainLayout";
import styles from "./page.module.css";
import relicImage from "../assets/sunpiercer.png";

export const metadata: Metadata = {
    title: "Sunpiercer | GameZone Wiki",
    description: "Sunpiercer, en Rare relik från Varkesh. Ett gammalt kastspjut som alltid söker sig tillbaka till sin bärare.",
};

export default function SunpiercerWikiPage() {
    return (
        <MainLayout>
            <main className={styles.page}>
                <div className={styles.shell}>
                    <nav className={styles.breadcrumbs} aria-label="Brödsmulor">
                        <Link href="/wiki">Wiki</Link>
                        <span>/</span>
                        <Link href="/wiki/relics/reliker">Reliker</Link>
                        <span>/</span>
                        <span>Sunpiercer</span>
                    </nav>

                    <section className={styles.hero}>
                        <div className={styles.heroCopy}>
                            <div className={styles.badges}>
                                <span className={styles.rare}>Rare</span>
                                <span>Varkesh</span>
                                <span>GZR-0024</span>
                            </div>

                            <p className={styles.eyebrow}>GameZone Relic Archive</p>
                            <h1>Sunpiercer</h1>
                            <p className={styles.lead}>
                                Ett gammalt Varkesh-spjut som sägs ha tillhört Karesh Solspjut och som alltid fann vägen tillbaka efter ett kast.
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
                                alt="Sunpiercer, ett Varkesh-spjut omgivet av lava"
                                width={1402}
                                height={1122}
                                priority
                            />
                            <div className={styles.artLabel}>
                                <span>Rare Relic</span>
                                <strong>Sunpiercer</strong>
                            </div>
                        </div>
                    </section>

                    <section className={styles.contentGrid}>
                        <article className={styles.article}>
                            <p className={styles.sectionEyebrow}>Lore</p>
                            <h2>Karesh Solspjuts vapen</h2>

                            <p>
                                Sunpiercer är ett gammalt Varkesh-spjut som tros ha tillhört <strong>Karesh Solspjut</strong>, en soldat som levde under de tidiga striderna om Varkeshs södra gräns.
                            </p>

                            <p>
                                Vapnet var ovanligt redan på sin tid. Karesh använde det både i närstrid och som kastvapen, eftersom spjutet på något sätt alltid återvände till honom efter att det kastats.
                            </p>

                            <p>
                                Det finns flera berättelser om hur Sunpiercer fick sitt namn. Den vanligaste kommer från ett slag där Karesh ska ha träffat samma motståndare flera gånger med spjutet utan att lämna sin position. Soldaterna började därefter kalla vapnet Sunpiercer.
                            </p>

                            <p>
                                Karesh försvann många år senare under en expedition till ett vulkaniskt område söder om Varkesh. Gruppen skulle undersöka nya sprickor som hade öppnats i marken och gjort delar av området obeboeligt.
                            </p>

                            <p>
                                När en andra grupp skickades dit hittades delar av deras utrustning, men inga kroppar.
                            </p>

                            <p>Sunpiercer hittades aldrig.</p>

                            <p>
                                En gammal Varkesh-berättelse säger att Karesh kastade spjutet strax innan expeditionen försvann. Om det stämmer finns det en ganska enkel anledning till att ingen hittade vapnet tillsammans med resten av utrustningen.
                            </p>

                            <p>Det ligger fortfarande där det landade.</p>

                            <blockquote>Det som kastas kan återvända.</blockquote>
                        </article>

                        <aside className={styles.infoCard}>
                            <div className={styles.infoTitle}>
                                <span>Relikdata</span>
                                <strong>GZR-0024</strong>
                            </div>

                            <dl>
                                <div>
                                    <dt>Rarity</dt>
                                    <dd className={styles.rareText}>Rare</dd>
                                </div>
                                <div>
                                    <dt>Kultur</dt>
                                    <dd>Varkesh</dd>
                                </div>
                                <div>
                                    <dt>Item</dt>
                                    <dd>Trident</dd>
                                </div>
                                <div>
                                    <dt>Hållbarhet</dt>
                                    <dd>Unbreakable</dd>
                                </div>
                                <div>
                                    <dt>Loyalty</dt>
                                    <dd>III</dd>
                                </div>
                                <div>
                                    <dt>Impaling</dt>
                                    <dd>IV</dd>
                                </div>
                                <div>
                                    <dt>Settlementbonus</dt>
                                    <dd>Ingen</dd>
                                </div>
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
