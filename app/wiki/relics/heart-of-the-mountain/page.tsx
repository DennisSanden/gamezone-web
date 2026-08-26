import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { MainLayout } from "@/components/layout/MainLayout";
import styles from "./page.module.css";
import relicImage from "../assets/heart-of-the-mountain.png";

export const metadata: Metadata = {
    title: "Heart of the Mountain | GameZone Wiki",
    description: "Heart of the Mountain, en Rare-relik från Andvari. Ett Heart of the Sea som hittades djupt under Andvaris berg.",
};

export default function HeartOfTheMountainWikiPage() {
    return (
        <MainLayout>
            <main className={styles.page}>
                <div className={styles.shell}>
                    <nav className={styles.breadcrumbs} aria-label="Brödsmulor">
                        <Link href="/wiki">Wiki</Link><span>/</span>
                        <Link href="/wiki/relics/reliker">Reliker</Link><span>/</span>
                        <span>Heart of the Mountain</span>
                    </nav>

                    <section className={styles.hero}>
                        <div className={styles.heroCopy}>
                            <div className={styles.badges}>
                                <span className={styles.rare}>Rare</span><span>Andvari</span><span>GZR-0022</span>
                            </div>
                            <p className={styles.eyebrow}>GameZone Relic Archive</p>
                            <h1>Heart of the Mountain</h1>
                            <p className={styles.lead}>
                                Ett kristalliserat hjärta som hittades djupt under Andvaris berg och blev en symbol för rikedomarna som fortfarande väntar under marken.
                            </p>
                            <div className={styles.actions}>
                                <Link href="/relics" className={styles.primaryAction}>Till Relikarkivet <span aria-hidden="true">→</span></Link>
                                <Link href="/wiki/relics/reliker" className={styles.secondaryAction}>Om reliksystemet</Link>
                            </div>
                        </div>

                        <div className={styles.art}>
                            <div className={styles.artGlow} aria-hidden="true" />
                            <Image src={relicImage} alt="Heart of the Mountain, en relik från Andvari" width={1536} height={1536} priority />
                            <div className={styles.artLabel}><span>Rare Relic</span><strong>Heart of the Mountain</strong></div>
                        </div>
                    </section>

                    <section className={styles.contentGrid}>
                        <article className={styles.article}>
                            <p className={styles.sectionEyebrow}>Lore</p>
                            <h2>Bergets hjärta</h2>

                            <p>
                                Heart of the Mountain hittades av gruvarbetare djupt under <strong>Andvaris berg</strong>, i en gammal gruvgång som länge hade varit övergiven efter flera ras.
                            </p>
                            <p>
                                Reliken satt fastkilad i berget bakom en ovanligt rik diamantåder. När stenen runt den bröts bort upptäckte gruvarbetarna ett blått, kristalliserat hjärta, fortfarande helt oskadat trots århundraden under jord.
                            </p>
                            <p>
                                Fyndet blev snabbt känt i Andvari. Många såg det som ett bevis på de rikedomar som fortfarande väntade under bergen, och under flera generationer bars Heart of the Mountain av några av rikets mest framgångsrika gruvarbetare.
                            </p>
                            <p>
                                Namnet kom inte från någon gammal profetia eller legend. Det var helt enkelt vad gruvarbetarna började kalla det.
                            </p>
                            <blockquote>Bergets hjärta.</blockquote>
                        </article>

                        <aside className={styles.infoCard}>
                            <div className={styles.infoTitle}><span>Relikdata</span><strong>GZR-0022</strong></div>
                            <dl>
                                <div><dt>Kultur</dt><dd>Andvari</dd></div>
                                <div><dt>Item</dt><dd>Heart of the Sea</dd></div>
                                <div><dt>Raritet</dt><dd>Rare</dd></div>
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
                            <p>Den kan hittas, tappas, ges bort och byta ägare. Engine dokumenterar dess historia medan föremålet fortsätter leva i spelvärlden.</p>
                        </div>
                        <Link href="/wiki/relics/reliker">Läs hela relikwikin <span aria-hidden="true">→</span></Link>
                    </section>
                </div>
            </main>
        </MainLayout>
    );
}
