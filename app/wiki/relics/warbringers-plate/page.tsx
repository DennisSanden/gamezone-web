import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { MainLayout } from "@/components/layout/MainLayout";
import styles from "./page.module.css";
import relicImage from "../assets/warbringers-plate.png";

export const metadata: Metadata = {
    title: "Warbringer's Plate | GameZone Wiki",
    description: "Warbringer's Plate, en Rare-relik från Varkesh. En Diamond Chestplate med Protection IV och Projectile Protection III.",
};

export default function WarbringersPlateWikiPage() {
    return (
        <MainLayout>
            <main className={styles.page}>
                <div className={styles.shell}>
                    <nav className={styles.breadcrumbs} aria-label="Brödsmulor">
                        <Link href="/wiki">Wiki</Link>
                        <span>/</span>
                        <Link href="/wiki/relics/reliker">Reliker</Link>
                        <span>/</span>
                        <span>Warbringer&apos;s Plate</span>
                    </nav>

                    <section className={styles.hero}>
                        <div className={styles.heroCopy}>
                            <div className={styles.badges}>
                                <span className={styles.rare}>Rare</span>
                                <span>Varkesh</span>
                                <span>GZR-0025</span>
                            </div>

                            <p className={styles.eyebrow}>GameZone Relic Archive</p>
                            <h1>Warbringer&apos;s Plate</h1>
                            <p className={styles.lead}>
                                En stridsrustning från Varkesh, buren av fältherren Kharvek den Röde under hans sista fälttåg.
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
                                alt="Warbringer&apos;s Plate, en Diamond Chestplate från Varkesh"
                                width={1536}
                                height={1136}
                                priority
                            />
                            <div className={styles.artLabel}>
                                <span>Rare Relic</span>
                                <strong>Warbringer&apos;s Plate</strong>
                            </div>
                        </div>
                    </section>

                    <section className={styles.contentGrid}>
                        <article className={styles.article}>
                            <p className={styles.sectionEyebrow}>Lore</p>
                            <h2>Kharvek den Rödes rustning</h2>

                            <p>
                                Warbringer&apos;s Plate bars av <strong>Kharvek den Röde</strong>, en av Varkeshs mest fruktade fältherrar.
                            </p>

                            <p>
                                Kharvek ledde sina soldater längst fram i leden och vägrade använda sköld. Rustningen byggdes därför
                                för att tåla pilar och armborstskott när han marscherade mot fiendens linjer.
                            </p>

                            <p>
                                Under hans sista fälttåg belägrade Varkesh en befäst stad i fyrtio dagar. När portarna till slut föll
                                var Kharvek den första genom öppningen.
                            </p>

                            <p>Han kom aldrig ut igen.</p>

                            <p>
                                Efter slaget hittades hundratals döda innanför muren, men ingen kropp som kunde identifieras som Kharveks.
                                Rustningen var också borta.
                            </p>

                            <p>
                                I Varkesh blev hans öde en gammal soldatsaga. Vissa menade att han stupade och plundrades. Andra hävdade
                                att han överlevde och fortsatte österut med de soldater som fortfarande följde honom.
                            </p>

                            <p>Warbringer&apos;s Plate har inte burits öppet sedan dess.</p>

                            <p>På insidan av bröstplåten finns en kort inskription:</p>

                            <blockquote>Framåt är den enda vägen.</blockquote>
                        </article>

                        <aside className={styles.infoCard}>
                            <div className={styles.infoTitle}>
                                <span>Relikdata</span>
                                <strong>GZR-0025</strong>
                            </div>

                            <dl>
                                <div><dt>Kultur</dt><dd>Varkesh</dd></div>
                                <div><dt>Item</dt><dd>Diamond Chestplate</dd></div>
                                <div><dt>Protection</dt><dd>IV</dd></div>
                                <div><dt>Projectile Protection</dt><dd>III</dd></div>
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
