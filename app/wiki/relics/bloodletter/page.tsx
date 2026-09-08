import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { MainLayout } from "@/components/layout/MainLayout";
import styles from "./page.module.css";
import relicImage from "../assets/bloodletter.png";

export const metadata: Metadata = {
    title: "Bloodletter | GameZone Wiki",
    description: "Bloodletter, en Rare-relik från Varkesh. Ett Diamond Sword med Sharpness IV och Looting II.",
};

export default function BloodletterWikiPage() {
    return (
        <MainLayout>
            <main className={styles.page}>
                <div className={styles.shell}>
                    <nav className={styles.breadcrumbs} aria-label="Brödsmulor">
                        <Link href="/wiki">Wiki</Link>
                        <span>/</span>
                        <Link href="/wiki/relics/reliker">Reliker</Link>
                        <span>/</span>
                        <span>Bloodletter</span>
                    </nav>

                    <section className={styles.hero}>
                        <div className={styles.heroCopy}>
                            <div className={styles.badges}>
                                <span className={styles.rare}>Rare</span>
                                <span>Varkesh</span>
                                <span>GZR-0023</span>
                            </div>

                            <p className={styles.eyebrow}>GameZone Relic Archive</p>
                            <h1>Bloodletter</h1>
                            <p className={styles.lead}>
                                Ett Varkesh-svärd vars klinga bar mörkröda märken som ingen smed lyckades slipa bort.
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
                                alt="Bloodletter, ett Diamond Sword från Varkesh"
                                width={1536}
                                height={1024}
                                priority
                            />
                            <div className={styles.artLabel}>
                                <span>Rare Relic</span>
                                <strong>Bloodletter</strong>
                            </div>
                        </div>
                    </section>

                    <section className={styles.contentGrid}>
                        <article className={styles.article}>
                            <p className={styles.sectionEyebrow}>Lore</p>
                            <h2>Varrek Sorns svärd</h2>

                            <p>
                                Bloodletter tillhörde <strong>Varrek Sorn</strong>, bödel och soldat i Varkeshs tjänst.
                            </p>

                            <p>
                                Varrek var inte känd för att vinna dueller. Han var känd för att avsluta dem.
                            </p>

                            <p>
                                Under Varkeshs blodigaste fälttåg red han tillsammans med arméns främsta styrkor.
                                När fiendens linjer bröts skickades Varrek fram för att se till att de aldrig formerades igen.
                            </p>

                            <p>
                                Efter varje slag rengjorde han sitt svärd omsorgsfullt. Men med åren började mörkröda
                                märken framträda längs klingan. De gick inte att slipa bort, och ingen smed lyckades
                                förklara varifrån de kom.
                            </p>

                            <p>Till slut slutade Varrek försöka.</p>

                            <p>
                                Vid slaget om Röda passet försvann han bland de retirerande fiendesoldaterna.
                                När Varkeshs styrkor nådde andra sidan hittade de hundratals kroppar.
                            </p>

                            <p>Varrek fanns inte bland dem.</p>

                            <p>Mitt på vägen låg bara hans svärd.</p>

                            <p>Klingan var fortfarande våt.</p>

                            <p>Sedan dess kallas det <strong>Bloodletter</strong>.</p>

                            <blockquote>Ett svärd räknar inte de döda.</blockquote>
                        </article>

                        <aside className={styles.infoCard}>
                            <div className={styles.infoTitle}>
                                <span>Relikdata</span>
                                <strong>GZR-0023</strong>
                            </div>

                            <dl>
                                <div><dt>Kultur</dt><dd>Varkesh</dd></div>
                                <div><dt>Item</dt><dd>Diamond Sword</dd></div>
                                <div><dt>Sharpness</dt><dd>IV</dd></div>
                                <div><dt>Looting</dt><dd>II</dd></div>
                                <div><dt>Settlementbonus</dt><dd>Ingen separat bonus</dd></div>
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
