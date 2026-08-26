import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { MainLayout } from "@/components/layout/MainLayout";
import styles from "./page.module.css";
import relicImage from "./kingsguard.png";

export const metadata: Metadata = {
    title: "Kingsguard | GameZone Wiki",
    description: "Kingsguard, ett Gondoriskt järnsvärd som en gång var standardvapen i rikets arméer.",
};

export default function KingsguardWikiPage() {
    return (
        <MainLayout>
            <main className={styles.page}>
                <div className={styles.shell}>
                    <nav className={styles.breadcrumbs} aria-label="Brödsmulor">
                        <Link href="/wiki">Wiki</Link>
                        <span>/</span>
                        <Link href="/wiki/relics/reliker">Reliker</Link>
                        <span>/</span>
                        <span>Kingsguard</span>
                    </nav>

                    <section className={styles.hero}>
                        <div className={styles.heroCopy}>
                            <div className={styles.badges}>
                                <span className={styles.common}>Common</span>
                                <span>Gondoria</span>
                                <span>GZR-0010</span>
                            </div>

                            <p className={styles.eyebrow}>GameZone Relic Archive</p>
                            <h1>Kingsguard</h1>
                            <p className={styles.lead}>
                                Ett standardiserat järnsvärd från Gondorias arméer, byggt för att vara pålitligt,
                                reparerbart och tillräckligt bra för att bära rikets kronmärke.
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
                                alt="Kingsguard, ett järnsvärd från Gondoria"
                                width={1536}
                                height={1152}
                                priority
                            />
                            <div className={styles.artLabel}>
                                <span>Common Relic</span>
                                <strong>Kingsguard</strong>
                            </div>
                        </div>
                    </section>

                    <section className={styles.contentGrid}>
                        <article className={styles.article}>
                            <p className={styles.sectionEyebrow}>Lore</p>
                            <h2>Gondorias armésvärd</h2>

                            <p>
                                Under Gondorias storhetstid var <strong>Kingsguard</strong> standardvapnet för
                                rikets kungliga arméer.
                            </p>

                            <p>
                                Svärden tillverkades i stora mängder och bars av soldater från Gondorias huvudstad
                                till rikets yttersta gränsfästen. Konstruktionen var medvetet enkel, ett välbalanserat
                                järnsvärd som kunde tillverkas snabbt, repareras i fält och användas av såväl
                                nyrekryterade soldater som erfarna officerare.
                            </p>

                            <p>
                                Det som skilde Kingsguard från vanliga järnsvärd var Gondorias krav på kvalitet.
                                Varje klinga inspekterades innan den lämnade smedjan och märktes med rikets krona
                                som bevis på att den godkänts för militärt bruk.
                            </p>

                            <p>Tusentals Kingsguard tros ha tillverkats.</p>

                            <p>
                                De flesta rostade bort på slagfält, begravdes tillsammans med sina ägare eller
                                smältes ner efter Gondorias fall.
                            </p>

                            <p>De få som fortfarande finns kvar är därför inte legendariska vapen.</p>

                            <p>De är något annat.</p>

                            <blockquote>
                                En kvarleva från en tid då Gondorias arméer fortfarande marscherade under samma fana.
                            </blockquote>
                        </article>

                        <aside className={styles.infoCard}>
                            <div className={styles.infoTitle}>
                                <span>Relikdata</span>
                                <strong>GZR-0010</strong>
                            </div>

                            <dl>
                                <div><dt>Kultur</dt><dd>Gondoria</dd></div>
                                <div><dt>Item</dt><dd>Iron Sword</dd></div>
                                <div><dt>Sharpness</dt><dd>III</dd></div>
                                <div><dt>Knockback</dt><dd>I</dd></div>
                                <div><dt>Settlementbonus</dt><dd>Ingen separat bonus</dd></div>
                            </dl>

                            <p className={styles.infoNote}>
                                Ägarskap, upptäckare och relikens levande serverhistorik visas i Relikarkivet när
                                informationen blir offentlig.
                            </p>
                        </aside>
                    </section>

                    <section className={styles.relicSystemCta}>
                        <div>
                            <p className={styles.sectionEyebrow}>Reliksystemet</p>
                            <h2>En relik är ett riktigt föremål.</h2>
                            <p>
                                Den kan hittas, tappas, ges bort och byta ägare. Engine dokumenterar dess historia
                                medan föremålet fortsätter leva i spelvärlden.
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
