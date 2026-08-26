import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { MainLayout } from "@/components/layout/MainLayout";
import styles from "./page.module.css";
import relicImage from "../assets/oathkeeper.png";

export const metadata: Metadata = {
    title: "Oathkeeper | GameZone Wiki",
    description: "Oathkeeper, en Epic-relik från Gondoria. Ett Diamond Sword med Sharpness IV och Sweeping Edge III.",
};

export default function OathkeeperWikiPage() {
    return (
        <MainLayout>
            <main className={styles.page}>
                <div className={styles.shell}>
                    <nav className={styles.breadcrumbs} aria-label="Brödsmulor">
                        <Link href="/wiki">Wiki</Link><span>/</span>
                        <Link href="/wiki/relics/reliker">Reliker</Link><span>/</span>
                        <span>Oathkeeper</span>
                    </nav>
                    <section className={styles.hero}>
                        <div className={styles.heroCopy}>
                            <div className={styles.badges}><span className={styles.epic}>Epic</span><span>Gondoria</span><span>GZR-0028</span></div>
                            <p className={styles.eyebrow}>GameZone Relic Archive</p>
                            <h1>Oathkeeper</h1>
                            <p className={styles.lead}>Ett diamantsvärd från Gondorias storhetstid, buret av väktare vars främsta uppgift var att hålla sina eder när riket behövde dem som mest.</p>
                            <div className={styles.actions}>
                                <Link href="/relics" className={styles.primaryAction}>Till Relikarkivet <span aria-hidden="true">→</span></Link>
                                <Link href="/wiki/relics/reliker" className={styles.secondaryAction}>Om reliksystemet</Link>
                            </div>
                        </div>
                        <div className={styles.art}>
                            <div className={styles.artGlow} aria-hidden="true" />
                            <Image src={relicImage} alt="Oathkeeper, en Epic-relik från Gondoria" width={1448} height={1086} priority />
                            <div className={styles.artLabel}><span>Epic Relic</span><strong>Oathkeeper</strong></div>
                        </div>
                    </section>
                    <section className={styles.contentGrid}>
                        <article className={styles.article}>
                            <p className={styles.sectionEyebrow}>Lore</p><h2>Eden som överlevde riket</h2>
                            <p>Oathkeeper smiddes under Gondorias storhetstid för en av rikets främsta väktarordnar. Svärdet bars inte som ett tecken på rang, utan som ett bevis på att bäraren hade svurit att försvara Gondoria och dess folk även när ordern innebar att stanna kvar när andra drog sig tillbaka.</p>
                            <p>Klingan tillverkades av diamant och förstärktes av Gondorias skickligaste vapensmeder. Längs stålet ristades eden som varje ny bärare fick avlägga innan svärdet lämnades över.</p>
                            <p>Oathkeeper överlevde flera generationer av väktare och användes både i rikets gränskrig och under försvaret av Gondorias egna städer. När riket började falla försvann svärdet tillsammans med den sista kända väktaren som bar det.</p>
                            <p>Det som gjorde Oathkeeper berömt var aldrig vem som ägde det. Det var hur många som höll sitt löfte medan de gjorde det.</p>
                            <blockquote>En ed är enkel att svära när murarna står. Den betyder något först när de börjar falla.</blockquote>
                        </article>
                        <aside className={styles.infoCard}>
                            <div className={styles.infoTitle}><span>Relikdata</span><strong>GZR-0028</strong></div>
                            <dl><div><dt>Kultur</dt><dd>Gondoria</dd></div><div><dt>Item</dt><dd>Diamond Sword</dd></div><div><dt>Raritet</dt><dd>Epic</dd></div><div><dt>Enchants</dt><dd>Sharpness IV, Sweeping Edge III</dd></div></dl>
                            <p className={styles.infoNote}>Ägarskap, upptäckare och relikens levande serverhistorik visas i Relikarkivet när informationen blir offentlig.</p>
                        </aside>
                    </section>
                    <section className={styles.relicSystemCta}><div><p className={styles.sectionEyebrow}>Reliksystemet</p><h2>En relik är ett riktigt föremål.</h2><p>Den kan hittas, tappas, ges bort och byta ägare. Engine dokumenterar dess historia medan föremålet fortsätter leva i spelvärlden.</p></div><Link href="/wiki/relics/reliker">Läs hela relikwikin <span aria-hidden="true">→</span></Link></section>
                </div>
            </main>
        </MainLayout>
    );
}
