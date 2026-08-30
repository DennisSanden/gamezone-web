import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { MainLayout } from "@/components/layout/MainLayout";
import styles from "./page.module.css";
import relicImage from "../assets/gravekeeper.png";

export const metadata: Metadata = {
    title: "Gravekeeper | GameZone Wiki",
    description: "Gravekeeper, en Rare-relik från Gondoria. En Diamond Shovel med Efficiency V, Unbreaking III och Fortune III.",
};

export default function GravekeeperWikiPage() {
    return (
        <MainLayout>
            <main className={styles.page}>
                <div className={styles.shell}>
                    <nav className={styles.breadcrumbs} aria-label="Brödsmulor">
                        <Link href="/wiki">Wiki</Link><span>/</span>
                        <Link href="/wiki/relics/reliker">Reliker</Link><span>/</span>
                        <span>Gravekeeper</span>
                    </nav>

                    <section className={styles.hero}>
                        <div className={styles.heroCopy}>
                            <div className={styles.badges}>
                                <span className={styles.rare}>Rare</span>
                                <span>Gondoria</span>
                                <span>GZR-0029</span>
                            </div>
                            <p className={styles.eyebrow}>GameZone Relic Archive</p>
                            <h1>Gravekeeper</h1>
                            <p className={styles.lead}>Gondorias sista grav grävdes av Edric Vahl, den siste gravmästaren i rikets tjänst.</p>
                            <div className={styles.actions}>
                                <Link href="/relics" className={styles.primaryAction}>Till Relikarkivet <span aria-hidden="true">→</span></Link>
                                <Link href="/wiki/relics/reliker" className={styles.secondaryAction}>Om reliksystemet</Link>
                            </div>
                        </div>
                        <div className={styles.art}>
                            <div className={styles.artGlow} aria-hidden="true" />
                            <Image src={relicImage} alt="Gravekeeper, en Diamond Shovel från Gondoria" width={1536} height={1024} priority />
                            <div className={styles.artLabel}><span>Rare Relic</span><strong>Gravekeeper</strong></div>
                        </div>
                    </section>

                    <section className={styles.contentGrid}>
                        <article className={styles.article}>
                            <p className={styles.sectionEyebrow}>Lore</p>
                            <h2>Gondorias sista grav</h2>
                            <p><strong>Gondorias sista grav grävdes av Edric Vahl</strong>, den siste gravmästaren i rikets tjänst.</p>
                            <p>När kriget nådde Gondorias murar fick Edric order att lämna kyrkogården och söka skydd. Han vägrade. De döda skulle begravas, oavsett hur många som föll.</p>
                            <p>I flera veckor arbetade han från gryning till natt. Soldater, bönder och adelsmän lades i samma jord. Till slut fanns ingen kvar som kunde hjälpa honom.</p>
                            <p>När striderna tystnade fann man en sista, öppen grav utanför stadsmuren.</p>
                            <p>Bredvid den stod Edric Vahls spade.</p>
                            <p>Ingen vet vem graven var avsedd för.</p>
                            <p>Sedan dess har spaden kallats <strong>Gravekeeper</strong>.</p>
                            <blockquote>Alla får till slut samma jord.</blockquote>
                        </article>

                        <aside className={styles.infoCard}>
                            <div className={styles.infoTitle}><span>Relikdata</span><strong>GZR-0029</strong></div>
                            <dl>
                                <div><dt>Kultur</dt><dd>Gondoria</dd></div>
                                <div><dt>Item</dt><dd>Diamond Shovel</dd></div>
                                <div><dt>Efficiency</dt><dd>V</dd></div>
                                <div><dt>Unbreaking</dt><dd>III</dd></div>
                                <div><dt>Fortune</dt><dd>III</dd></div>
                                <div><dt>Settlementbonus</dt><dd>Ingen separat bonus</dd></div>
                            </dl>
                            <p className={styles.infoNote}>Ägarskap, upptäckare och relikens levande serverhistorik visas i Relikarkivet när informationen blir offentlig.</p>
                        </aside>
                    </section>

                    <section className={styles.relicSystemCta}>
                        <div><p className={styles.sectionEyebrow}>Reliksystemet</p><h2>En relik är ett riktigt föremål.</h2><p>Den kan hittas, tappas, ges bort och byta ägare. Engine dokumenterar dess historia medan föremålet fortsätter leva i spelvärlden.</p></div>
                        <Link href="/wiki/relics/reliker">Läs hela relikwikin <span aria-hidden="true">→</span></Link>
                    </section>
                </div>
            </main>
        </MainLayout>
    );
}
