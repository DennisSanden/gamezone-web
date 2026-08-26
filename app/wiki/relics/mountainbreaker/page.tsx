import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { MainLayout } from "@/components/layout/MainLayout";
import styles from "./page.module.css";
import relicImage from "../assets/mountainbreaker.png";

export const metadata: Metadata = {
    title: "Mountainbreaker | GameZone Wiki",
    description: "Mountainbreaker, en relik från Andvari. En Diamond Axe med Efficiency V och Sharpness III.",
};

export default function MountainbreakerWikiPage() {
    return (
        <MainLayout>
            <main className={styles.page}>
                <div className={styles.shell}>
                    <nav className={styles.breadcrumbs} aria-label="Brödsmulor">
                        <Link href="/wiki">Wiki</Link>
                        <span>/</span>
                        <Link href="/wiki/relics/reliker">Reliker</Link>
                        <span>/</span>
                        <span>Mountainbreaker</span>
                    </nav>

                    <section className={styles.hero}>
                        <div className={styles.heroCopy}>
                            <div className={styles.badges}>
                                <span className={styles.rare}>Rare</span>
                                <span>Andvari</span>
                                <span>GZR-0020</span>
                            </div>

                            <p className={styles.eyebrow}>GameZone Relic Archive</p>
                            <h1>Mountainbreaker</h1>
                            <p className={styles.lead}>
                                En gammal yxa från Andvari, skapad för timmermän som öppnade vägar genom de kalla skogarna vid bergens fot.
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
                                alt="Mountainbreaker, en gammal yxa från Andvari"
                                width={1536}
                                height={1136}
                                priority
                            />
                            <div className={styles.artLabel}>
                                <span>Rare Relic</span>
                                <strong>Mountainbreaker</strong>
                            </div>
                        </div>
                    </section>

                    <section className={styles.contentGrid}>
                        <article className={styles.article}>
                            <p className={styles.sectionEyebrow}>Lore</p>
                            <h2>Hroldan Bergsklyvares yxa</h2>

                            <p>
                                Mountainbreaker är en gammal yxa från <strong>Andvari</strong>, skapad under en tid då
                                rikets bosättningar växte långt in i de kalla skogarna vid bergens fot.
                            </p>

                            <p>
                                Den sägs ha tillhört <strong>Hroldan Bergsklyvare</strong>, en timmerman vars arbete
                                var att öppna vägar genom skogarna och förse Andvaris byar med virke inför de långa vintrarna.
                            </p>

                            <p>
                                Hroldan blev känd för att söka sig efter de största träden. Inte för att deras virke
                                var bättre, utan för att han ansåg att ett träd som hade överlevt hundra vintrar
                                förtjänade att fällas av någon som visste vad han gjorde.
                            </p>

                            <p>
                                Mountainbreaker tillverkades åt honom efter att flera vanliga yxor hade gått sönder
                                i arbetet. Den tunga klingan kunde drivas djupt genom gamla stammar, medan Hroldan
                                själv lärde sig att läsa träden, var de skulle träffas och åt vilket håll de skulle falla.
                            </p>

                            <p>
                                Med tiden började andra skogshuggare använda hans namn som ett mått på om ett träd
                                ens var värt besväret.
                            </p>

                            <blockquote>
                                Är den för stor för Hroldan, låt den stå.
                            </blockquote>

                            <p>
                                En vinter återvände Hroldan aldrig från skogen. Mountainbreaker försvann tillsammans
                                med honom.
                            </p>

                            <p>
                                Ingen vet vad som hände där ute, men yxan blev kvar i berättelserna som ett verktyg
                                från en tid då Andvaris skogar inte bara gav rikedom. De behövde besegras, ett träd i taget.
                            </p>
                        </article>

                        <aside className={styles.infoCard}>
                            <div className={styles.infoTitle}>
                                <span>Relikdata</span>
                                <strong>GZR-0020</strong>
                            </div>

                            <dl>
                                <div><dt>Kultur</dt><dd>Andvari</dd></div>
                                <div><dt>Item</dt><dd>Diamond Axe</dd></div>
                                <div><dt>Efficiency</dt><dd>V</dd></div>
                                <div><dt>Sharpness</dt><dd>III</dd></div>
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
