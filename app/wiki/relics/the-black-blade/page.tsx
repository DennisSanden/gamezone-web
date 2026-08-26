import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { MainLayout } from "@/components/layout/MainLayout";
import styles from "./page.module.css";
import relicImage from "../assets/the-black-blade.png";

export const metadata: Metadata = {
    title: "The Black Blade | GameZone Wiki",
    description: "The Black Blade, en Epic-relik från Varkesh. Ett Netherite Sword med Sharpness V, Looting III och Fire Aspect I.",
};

export default function TheBlackBladeWikiPage() {
    return (
        <MainLayout>
            <main className={styles.page}>
                <div className={styles.shell}>
                    <nav className={styles.breadcrumbs} aria-label="Brödsmulor">
                        <Link href="/wiki">Wiki</Link><span>/</span>
                        <Link href="/wiki/relics/reliker">Reliker</Link><span>/</span>
                        <span>The Black Blade</span>
                    </nav>
                    <section className={styles.hero}>
                        <div className={styles.heroCopy}>
                            <div className={styles.badges}><span className={styles.epic}>Epic</span><span>Varkesh</span><span>GZR-0035</span></div>
                            <p className={styles.eyebrow}>GameZone Relic Archive</p>
                            <h1>The Black Blade</h1>
                            <p className={styles.lead}>Ett svart netheritesvärd från Varkesh, smitt för soldater som förväntades stå kvar när andra redan hade vänt om.</p>
                            <div className={styles.actions}>
                                <Link href="/relics" className={styles.primaryAction}>Till Relikarkivet <span aria-hidden="true">→</span></Link>
                                <Link href="/wiki/relics/reliker" className={styles.secondaryAction}>Om reliksystemet</Link>
                            </div>
                        </div>
                        <div className={styles.art}>
                            <div className={styles.artGlow} aria-hidden="true" />
                            <Image src={relicImage} alt="The Black Blade, en Epic-relik från Varkesh" width={1448} height={1086} priority />
                            <div className={styles.artLabel}><span>Epic Relic</span><strong>The Black Blade</strong></div>
                        </div>
                    </section>
                    <section className={styles.contentGrid}>
                        <article className={styles.article}>
                            <p className={styles.sectionEyebrow}>Lore</p><h2>Varkeshs svarta klinga</h2>
                            <p>The Black Blade smiddes i Varkesh under en period då rikets arméer växte snabbt och de bästa vapnen reserverades för befälhavare och veteraner. Klingan gjordes av netherite och härdades om flera gånger tills metallen fick sin nästan helt svarta yta.</p>
                            <p>Svärdet blev känt efter att ha burits genom flera av Varkeshs hårdaste fälttåg. Det var aldrig ett ceremoniellt vapen. Märkena längs klingan kommer från verklig användning, och varje senare bärare har låtit dem vara kvar.</p>
                            <p>De violetta runorna lades till först långt senare av Varkeshs vapensmeder. De skulle göra klingan lättare att känna igen på slagfältet och förstärka dess redan brutala hugg, inte förvandla den till något heligt.</p>
                            <p>Att få bära The Black Blade blev till slut en utmärkelse. Den gavs inte till den starkaste soldaten, utan till den som hade visat att order fortfarande betydde något när slaget började gå åt fel håll.</p>
                            <blockquote>Varkesh lär sina soldater att ett svärd inte behöver vara vackert. Det behöver bara vara kvar i handen när striden är över.</blockquote>
                        </article>
                        <aside className={styles.infoCard}>
                            <div className={styles.infoTitle}><span>Relikdata</span><strong>GZR-0035</strong></div>
                            <dl><div><dt>Kultur</dt><dd>Varkesh</dd></div><div><dt>Item</dt><dd>Netherite Sword</dd></div><div><dt>Raritet</dt><dd>Epic</dd></div><div><dt>Enchants</dt><dd>Sharpness V, Looting III, Fire Aspect I</dd></div></dl>
                            <p className={styles.infoNote}>Ägarskap, upptäckare och relikens levande serverhistorik visas i Relikarkivet när informationen blir offentlig.</p>
                        </aside>
                    </section>
                    <section className={styles.relicSystemCta}><div><p className={styles.sectionEyebrow}>Reliksystemet</p><h2>En relik är ett riktigt föremål.</h2><p>Den kan hittas, tappas, ges bort och byta ägare. Engine dokumenterar dess historia medan föremålet fortsätter leva i spelvärlden.</p></div><Link href="/wiki/relics/reliker">Läs hela relikwikin <span aria-hidden="true">→</span></Link></section>
                </div>
            </main>
        </MainLayout>
    );
}
