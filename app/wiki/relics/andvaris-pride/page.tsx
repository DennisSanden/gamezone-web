import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { MainLayout } from "@/components/layout/MainLayout";
import styles from "./page.module.css";
import relicImage from "../assets/andvaris-pride.png";

export const metadata: Metadata = {
    title: "Andvari's Pride | GameZone Wiki",
    description: "Andvari's Pride, en Epic-relik från Andvari. En Netherite Pickaxe med Efficiency V och Fortune III.",
};

export default function AndvarisPrideWikiPage() {
    return (
        <MainLayout>
            <main className={styles.page}>
                <div className={styles.shell}>
                    <nav className={styles.breadcrumbs} aria-label="Brödsmulor">
                        <Link href="/wiki">Wiki</Link><span>/</span>
                        <Link href="/wiki/relics/reliker">Reliker</Link><span>/</span>
                        <span>Andvari&apos;s Pride</span>
                    </nav>
                    <section className={styles.hero}>
                        <div className={styles.heroCopy}>
                            <div className={styles.badges}><span className={styles.epic}>Epic</span><span>Andvari</span><span>GZR-0033</span></div>
                            <p className={styles.eyebrow}>GameZone Relic Archive</p>
                            <h1>Andvari&apos;s Pride</h1>
                            <p className={styles.lead}>En netheritehacka skapad för Andvaris gruvarbetare, byggd för att hålla längre än den som bär den.</p>
                            <div className={styles.actions}>
                                <Link href="/relics" className={styles.primaryAction}>Till Relikarkivet <span aria-hidden="true">→</span></Link>
                                <Link href="/wiki/relics/reliker" className={styles.secondaryAction}>Om reliksystemet</Link>
                            </div>
                        </div>
                        <div className={styles.art}>
                            <div className={styles.artGlow} aria-hidden="true" />
                            <Image src={relicImage} alt="Andvari's Pride, en Epic-relik från Andvari" width={1536} height={1152} priority />
                            <div className={styles.artLabel}><span>Epic Relic</span><strong>Andvari&apos;s Pride</strong></div>
                        </div>
                    </section>
                    <section className={styles.contentGrid}>
                        <article className={styles.article}>
                            <p className={styles.sectionEyebrow}>Lore</p><h2>Rikets hacka</h2>
                            <p>Andvari&apos;s Pride smiddes under en tid då Andvaris gruvor växte snabbare än rikets smedjor kunde förse dem med verktyg. Rikets främsta smeder fick därför ett enkelt uppdrag, skapa en hacka som kunde överleva gruvarbetaren som bar den.</p>
                            <p>Resultatet blev ett verktyg av netherite, förstärkt med metall från Andvaris egna smedjor och märkt med rikets runor. Den användes under årtionden i några av de djupaste gruvorna under Andvari och blev känd för att fortsätta hugga långt efter att vanliga hackor hade gått sönder.</p>
                            <p>Med tiden slutade den att behandlas som ett vanligt verktyg. När en gruvarbetare lade ner sitt arbete gick Andvari&apos;s Pride vidare till nästa. Att få bära den blev en hedersbetygelse, reserverad för gruvarbetare som hade gjort sig förtjänta av Andvaris förtroende.</p>
                            <p>Spåren efter dess tidigare bärare finns fortfarande kvar. Sliten metall, gamla lagningar och märken efter tusentals timmar under jord.</p>
                            <p>Andvari&apos;s Pride skapades aldrig för en kung eller en hjälte.</p>
                            <blockquote>Den skapades för dem som byggde riket underifrån.</blockquote>
                        </article>
                        <aside className={styles.infoCard}>
                            <div className={styles.infoTitle}><span>Relikdata</span><strong>GZR-0033</strong></div>
                            <dl><div><dt>Kultur</dt><dd>Andvari</dd></div><div><dt>Item</dt><dd>Netherite Pickaxe</dd></div><div><dt>Raritet</dt><dd>Epic</dd></div><div><dt>Enchants</dt><dd>Efficiency V, Fortune III</dd></div></dl>
                            <p className={styles.infoNote}>Ägarskap, upptäckare och relikens levande serverhistorik visas i Relikarkivet när informationen blir offentlig.</p>
                        </aside>
                    </section>
                    <section className={styles.relicSystemCta}><div><p className={styles.sectionEyebrow}>Reliksystemet</p><h2>En relik är ett riktigt föremål.</h2><p>Den kan hittas, tappas, ges bort och byta ägare. Engine dokumenterar dess historia medan föremålet fortsätter leva i spelvärlden.</p></div><Link href="/wiki/relics/reliker">Läs hela relikwikin <span aria-hidden="true">→</span></Link></section>
                </div>
            </main>
        </MainLayout>
    );
}
