import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { MainLayout } from "@/components/layout/MainLayout";
import styles from "./page.module.css";
import relicImage from "../assets/winterhide.png";

export const metadata: Metadata = {
    title: "Winterhide | GameZone Wiki",
    description: "Winterhide, en Epic-relik från Andvari. En Diamond Chestplate med Protection IV och Thorns II.",
};

export default function WinterhideWikiPage() {
    return (
        <MainLayout>
            <main className={styles.page}>
                <div className={styles.shell}>
                    <nav className={styles.breadcrumbs} aria-label="Brödsmulor">
                        <Link href="/wiki">Wiki</Link><span>/</span>
                        <Link href="/wiki/relics/reliker">Reliker</Link><span>/</span>
                        <span>Winterhide</span>
                    </nav>
                    <section className={styles.hero}>
                        <div className={styles.heroCopy}>
                            <div className={styles.badges}><span className={styles.epic}>Epic</span><span>Andvari</span><span>GZR-0034</span></div>
                            <p className={styles.eyebrow}>GameZone Relic Archive</p>
                            <h1>Winterhide</h1>
                            <p className={styles.lead}>En diamantbröstplåt från Andvaris kalla nord, byggd för gruvarbetare och väktare som arbetade där vintern aldrig riktigt släppte taget.</p>
                            <div className={styles.actions}>
                                <Link href="/relics" className={styles.primaryAction}>Till Relikarkivet <span aria-hidden="true">→</span></Link>
                                <Link href="/wiki/relics/reliker" className={styles.secondaryAction}>Om reliksystemet</Link>
                            </div>
                        </div>
                        <div className={styles.art}>
                            <div className={styles.artGlow} aria-hidden="true" />
                            <Image src={relicImage} alt="Winterhide, en Epic-relik från Andvari" width={1408} height={1056} priority />
                            <div className={styles.artLabel}><span>Epic Relic</span><strong>Winterhide</strong></div>
                        </div>
                    </section>
                    <section className={styles.contentGrid}>
                        <article className={styles.article}>
                            <p className={styles.sectionEyebrow}>Lore</p><h2>Rustningen från norr</h2>
                            <p>Winterhide skapades för Andvaris nordliga gruvor, där arbetet fortsatte även när snöstormarna stängde bergspassen och temperaturen sjönk långt under fryspunkten.</p>
                            <p>Bröstplåten byggdes kring en kraftig diamantkärna och fodrades med tjock päls för att göra den användbar under långa arbetspass i kylan. De första bärarna var inte soldater, utan gruvarbetare och arbetsledare som ansvarade för Andvaris mest avlägsna gruvor.</p>
                            <p>När konflikterna i norr senare nådde gruvområdena började Winterhide även användas av Andvaris väktare. Kombinationen av tungt skydd och värme gjorde rustningen särskilt uppskattad under långa vakter långt från rikets större städer.</p>
                            <p>Den har reparerats flera gånger genom åren. Pälsen har bytts ut, metallbeslagen har förstärkts och nya runor har ristats in bredvid de gamla. Diamantplåten under allt detta är däremot fortfarande densamma.</p>
                            <blockquote>Winterhide byggdes för att hålla Andvaris folk kvar på berget när vintern försökte driva dem därifrån.</blockquote>
                        </article>
                        <aside className={styles.infoCard}>
                            <div className={styles.infoTitle}><span>Relikdata</span><strong>GZR-0034</strong></div>
                            <dl><div><dt>Kultur</dt><dd>Andvari</dd></div><div><dt>Item</dt><dd>Diamond Chestplate</dd></div><div><dt>Raritet</dt><dd>Epic</dd></div><div><dt>Enchants</dt><dd>Protection IV, Thorns II</dd></div></dl>
                            <p className={styles.infoNote}>Ägarskap, upptäckare och relikens levande serverhistorik visas i Relikarkivet när informationen blir offentlig.</p>
                        </aside>
                    </section>
                    <section className={styles.relicSystemCta}><div><p className={styles.sectionEyebrow}>Reliksystemet</p><h2>En relik är ett riktigt föremål.</h2><p>Den kan hittas, tappas, ges bort och byta ägare. Engine dokumenterar dess historia medan föremålet fortsätter leva i spelvärlden.</p></div><Link href="/wiki/relics/reliker">Läs hela relikwikin <span aria-hidden="true">→</span></Link></section>
                </div>
            </main>
        </MainLayout>
    );
}
