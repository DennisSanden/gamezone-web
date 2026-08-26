import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { MainLayout } from "@/components/layout/MainLayout";
import styles from "./page.module.css";
import relicImage from "../assets/forgefathers-gauntlet.png";

export const metadata: Metadata = {
    title: "Forgefather's Gauntlet | GameZone Wiki",
    description: "Forgefather's Gauntlet, en Legendary-relik från Andvari. En Netherite Chestplate med Protection IV, Fire Protection IV och Thorns III.",
};

export default function ForgefathersGauntletWikiPage() {
    return (
        <MainLayout>
            <main className={styles.page}>
                <div className={styles.shell}>
                    <nav className={styles.breadcrumbs} aria-label="Brödsmulor">
                        <Link href="/wiki">Wiki</Link>
                        <span>/</span>
                        <Link href="/wiki/relics/reliker">Reliker</Link>
                        <span>/</span>
                        <span>Forgefather&apos;s Gauntlet</span>
                    </nav>

                    <section className={styles.hero}>
                        <div className={styles.heroCopy}>
                            <div className={styles.badges}>
                                <span className={styles.legendary}>Legendary</span>
                                <span>Andvari</span>
                                <span>GZR-0042</span>
                            </div>

                            <p className={styles.eyebrow}>GameZone Relic Archive</p>
                            <h1>Forgefather&apos;s Gauntlet</h1>
                            <p className={styles.lead}>
                                En uråldrig rustning från Andvari, skapad av mästersmeden Bjorik Eldfader för arbetet vid rikets hetaste ugnar.
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
                                alt="Forgefather&apos;s Gauntlet, en uråldrig Netherite Chestplate från Andvari"
                                width={1536}
                                height={1136}
                                priority
                            />
                            <div className={styles.artLabel}>
                                <span>Legendary Relic</span>
                                <strong>Forgefather&apos;s Gauntlet</strong>
                            </div>
                        </div>
                    </section>

                    <section className={styles.contentGrid}>
                        <article className={styles.article}>
                            <p className={styles.sectionEyebrow}>Lore</p>
                            <h2>Bjorik Eldfaders rustning</h2>

                            <p>
                                Forgefather&apos;s Gauntlet tillhörde <strong>Bjorik Eldfader</strong>, en av Andvaris mest omtalade smeder.
                            </p>

                            <p>
                                Bjorik arbetade i en smedja djupt under bergen, byggd där hettan från berget kunde ledas
                                direkt in i ugnarna. Där smiddes några av Andvaris främsta vapen och verktyg.
                            </p>

                            <p>Rustningen skapade han åt sig själv.</p>

                            <p>
                                Den gjorde det möjligt för honom att arbeta närmare ugnarna och under längre tid än någon
                                annan smed. Under årens gång reparerade och förstärkte han den ständigt. Nya plåtar lades
                                ovanpå gamla och varje större arbete fick en ny runa ristad i metallen.
                            </p>

                            <p>Bjorik bar rustningen resten av sitt liv.</p>

                            <p>
                                En morgon hittades hans smedja tom. Ugnen brann fortfarande, men både Bjorik och rustningen
                                var borta.
                            </p>

                            <p>Ingen vet vart han tog vägen.</p>

                            <p>Forgefather&apos;s Gauntlet har inte setts sedan dess.</p>

                            <blockquote>
                                Bra stål kräver en het ugn. Det gör en bra smed också.
                            </blockquote>
                        </article>

                        <aside className={styles.infoCard}>
                            <div className={styles.infoTitle}>
                                <span>Relikdata</span>
                                <strong>GZR-0042</strong>
                            </div>

                            <dl>
                                <div><dt>Kultur</dt><dd>Andvari</dd></div>
                                <div><dt>Item</dt><dd>Netherite Chestplate</dd></div>
                                <div><dt>Protection</dt><dd>IV</dd></div>
                                <div><dt>Fire Protection</dt><dd>IV</dd></div>
                                <div><dt>Thorns</dt><dd>III</dd></div>
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
