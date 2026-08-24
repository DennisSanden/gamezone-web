import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { MainLayout } from "@/components/layout/MainLayout";
import styles from "./page.module.css";
import relicImage from "../assets/legionnaires-blade.png";

export const metadata: Metadata = {
    title: "Legionnaire's Blade | GameZone Wiki",
    description: "Legionnaire's Blade, en Common relik från Varkesh och ett gammalt svärd från legionens historia.",
};

export default function LegionnairesBladeWikiPage() {
    return (
        <MainLayout>
            <main className={styles.page}>
                <div className={styles.shell}>
                    <nav className={styles.breadcrumbs} aria-label="Brödsmulor">
                        <Link href="/wiki">Wiki</Link>
                        <span>/</span>
                        <Link href="/wiki/relics/reliker">Reliker</Link>
                        <span>/</span>
                        <span>Legionnaire's Blade</span>
                    </nav>

                    <section className={styles.hero}>
                        <div className={styles.heroCopy}>
                            <div className={styles.badges}>
                                <span className={styles.common}>Common</span>
                                <span>Varkesh</span>
                                <span>GZR-0005</span>
                            </div>

                            <p className={styles.eyebrow}>GameZone Relic Archive</p>
                            <h1>Legionnaire's Blade</h1>
                            <p className={styles.lead}>
                                Ett gammalt legionärssvärd från Varkesh, format av disciplin, plikt och många års strider.
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
                                alt="Legionnaire's Blade, en gammal arbetshacka från Varkesh"
                                width={1536}
                                height={1136}
                                priority
                            />
                            <div className={styles.artLabel}>
                                <span>Common Relic</span>
                                <strong>Legionnaire's Blade</strong>
                            </div>
                        </div>
                    </section>

                    <section className={styles.contentGrid}>
                        <article className={styles.article}>
                            <p className={styles.sectionEyebrow}>Lore</p>
                            <h2>Kael Varuns svärd</h2>

                            <p>
                                Legionnaire's Blade sägs ha burits av <strong>Kael Varun</strong>,
                                en officer i Varkesh Legion under en av rikets mest oroliga perioder.
                            </p>

                            <p>
                                Kael var inte född till adel och hans namn förekommer sällan bland kungar
                                och generaler. Han steg i leden genom disciplin, uthållighet och en nästan
                                obeveklig lojalitet till männen som stod bredvid honom.
                            </p>

                            <p>
                                Svärdet följde honom genom fler fälttåg än någon nedteckning längre kan
                                bekräfta. Det var aldrig ett ceremoniellt vapen. Klingan slipades om,
                                greppet lindades om och stålet fick bära spåren av varje strid.
                            </p>

                            <p>
                                Berättelserna om Kael blir osäkra mot slutet av hans liv. Vissa säger
                                att han lämnade legionen efter sitt sista fälttåg. Andra menar att hans
                                namn helt enkelt försvann ur rullorna tillsammans med många andra soldaters.
                            </p>

                            <p>
                                Legionnaire's Blade blev kvar i berättelserna som något typiskt Varkesh.
                                Inte ett vapen för ära, utan för plikt.
                            </p>

                            <blockquote>
                                En krigare mäts inte av hur högt hans namn ropas, utan av vem som fortfarande står kvar bredvid honom när striden är över.
                            </blockquote>
                        </article>

                        <aside className={styles.infoCard}>
                            <div className={styles.infoTitle}>
                                <span>Relikdata</span>
                                <strong>GZR-0005</strong>
                            </div>

                            <dl>
                                <div>
                                    <dt>Rarity</dt>
                                    <dd className={styles.rareText}>Common</dd>
                                </div>
                                <div>
                                    <dt>Kultur</dt>
                                    <dd>Varkesh</dd>
                                </div>
                                <div>
                                    <dt>Item</dt>
                                    <dd>Iron Sword</dd>
                                </div>
                                <div>
                                    <dt>Hållbarhet</dt>
                                    <dd>Unbreakable</dd>
                                </div>
                                <div>
                                    <dt>Sharpness</dt>
                                    <dd>III</dd>
                                </div>
                                <div>
                                    <dt>Looting</dt>
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
