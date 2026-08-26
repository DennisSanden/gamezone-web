import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { MainLayout } from "@/components/layout/MainLayout";
import styles from "./page.module.css";
import relicImage from "../assets/prospectors-helm.png";

export const metadata: Metadata = {
    title: "Prospector's Helm | GameZone Wiki",
    description: "Prospector's Helm, en Rare-relik från Andvari. En Diamond Helmet med Protection III och Respiration II.",
};

export default function ProspectorsHelmWikiPage() {
    return (
        <MainLayout>
            <main className={styles.page}>
                <div className={styles.shell}>
                    <nav className={styles.breadcrumbs} aria-label="Brödsmulor">
                        <Link href="/wiki">Wiki</Link>
                        <span>/</span>
                        <Link href="/wiki/relics/reliker">Reliker</Link>
                        <span>/</span>
                        <span>Prospector&apos;s Helm</span>
                    </nav>

                    <section className={styles.hero}>
                        <div className={styles.heroCopy}>
                            <div className={styles.badges}>
                                <span className={styles.rare}>Rare</span>
                                <span>Andvari</span>
                                <span>GZR-0021</span>
                            </div>

                            <p className={styles.eyebrow}>GameZone Relic Archive</p>
                            <h1>Prospector&apos;s Helm</h1>
                            <p className={styles.lead}>
                                En gammal prospektörshjälm från Andvari, buren av dem som sökte rikedom djupare ner i bergen än förnuftet tillät.
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
                                alt="Prospector's Helm, en gammal prospektörshjälm från Andvari"
                                width={1536}
                                height={1536}
                                priority
                            />
                            <div className={styles.artLabel}>
                                <span>Rare Relic</span>
                                <strong>Prospector&apos;s Helm</strong>
                            </div>
                        </div>
                    </section>

                    <section className={styles.contentGrid}>
                        <article className={styles.article}>
                            <p className={styles.sectionEyebrow}>Lore</p>
                            <h2>Bergets hemligheter</h2>

                            <p>
                                Smidd för <strong>Andvaris främsta prospektörer</strong>, de som skickades djupare ner i bergen än vanliga gruvarbetare någonsin vågade färdas. Hjälmen bars genom övergivna gruvgångar, rasade schakt och grottor där inget dagsljus någonsin nått.
                            </p>

                            <p>
                                Det sägs att dess kristall fortfarande bär ett svagt sken från de rikedomar den en gång hjälpte sin bärare att finna. Guld, diamanter och uråldriga malmådror hittades där berget verkade helt tomt.
                            </p>

                            <p>
                                Men bland gruvarbetarna finns en gammal varning.
                            </p>

                            <blockquote>
                                När Prospector&apos;s Helm börjar lysa som starkast betyder det inte alltid att rikedom finns nära.
                            </blockquote>

                            <p>
                                Ibland betyder det att någonting annat har hittat dig.
                            </p>
                        </article>

                        <aside className={styles.infoCard}>
                            <div className={styles.infoTitle}>
                                <span>Relikdata</span>
                                <strong>GZR-0021</strong>
                            </div>

                            <dl>
                                <div><dt>Kultur</dt><dd>Andvari</dd></div>
                                <div><dt>Item</dt><dd>Diamond Helmet</dd></div>
                                <div><dt>Protection</dt><dd>III</dd></div>
                                <div><dt>Respiration</dt><dd>II</dd></div>
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
