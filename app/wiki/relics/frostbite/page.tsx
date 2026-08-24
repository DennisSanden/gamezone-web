import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { MainLayout } from "@/components/layout/MainLayout";
import styles from "./page.module.css";
import relicImage from "../assets/frostbite.png";

export const metadata: Metadata = {
    title: "Frostbite | GameZone Wiki",
    description: "Frostbite, en Common relik från Andvari och en av GameZones unika serverreliker.",
};

export default function FrostbiteWikiPage() {
    return (
        <MainLayout>
            <main className={styles.page}>
                <div className={styles.shell}>
                    <nav className={styles.breadcrumbs} aria-label="Brödsmulor">
                        <Link href="/wiki">Wiki</Link>
                        <span>/</span>
                        <Link href="/wiki/relics/reliker">Reliker</Link>
                        <span>/</span>
                        <span>Frostbite</span>
                    </nav>

                    <section className={styles.hero}>
                        <div className={styles.heroCopy}>
                            <div className={styles.badges}>
                                <span className={styles.common}>Common</span>
                                <span>Andvari</span>
                                <span>GZR-0002</span>
                            </div>

                            <p className={styles.eyebrow}>GameZone Relic Archive</p>
                            <h1>Frostbite</h1>
                            <p className={styles.lead}>
                                En gammal arbetsyxa från Andvari, skapad för de skogshuggare som arbetade längs rikets frusna skogar och bergssluttningar.
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
                                alt="Frostbite, en gammal arbetsyxa från Andvari"
                                width={1536}
                                height={1136}
                                priority
                            />
                            <div className={styles.artLabel}>
                                <span>Common Relic</span>
                                <strong>Frostbite</strong>
                            </div>
                        </div>
                    </section>

                    <section className={styles.contentGrid}>
                        <article className={styles.article}>
                            <p className={styles.sectionEyebrow}>Lore</p>
                            <h2>Byggd för de frusna skogarna</h2>

                            <p>
                                Frostbite är en gammal arbetsyxa från <strong>Andvari</strong>, skapad
                                för de skogshuggare som arbetade längs rikets frusna skogar och bergssluttningar.
                            </p>

                            <p>
                                Den var aldrig något praktvapen. Yxan byggdes för att användas, dag efter dag,
                                i snö, is och bitande kyla. Med tiden fick stålet sina märken och skaftet sina
                                sprickor, men Frostbite fortsatte att göra sitt jobb.
                            </p>

                            <p>
                                Namnet sägs ha kommit från arbetarna själva. Inte för att yxan besatt någon
                                särskild kraft, utan för att den nästan alltid var så kall att hålla i att
                                handskarna blev lika viktiga som själva verktyget.
                            </p>

                            <p>
                                Precis som många av Andvaris gamla arbetsredskap försvann Frostbite någonstans
                                mellan generationerna. Vem som bar den sist finns inte längre nedtecknat.
                            </p>

                            <p>
                                För de flesta är det bara en gammal yxa. För Andvari är den ett minne av
                                människorna som byggde riket innan någon började skriva deras namn i historieböckerna.
                            </p>

                            <blockquote>
                                Hugget behöver inte vara vackert. Det behöver bara fälla trädet.
                            </blockquote>
                        </article>

                        <aside className={styles.infoCard}>
                            <div className={styles.infoTitle}>
                                <span>Relikdata</span>
                                <strong>GZR-0002</strong>
                            </div>

                            <dl>
                                <div>
                                    <dt>Rarity</dt>
                                    <dd className={styles.rareText}>Common</dd>
                                </div>
                                <div>
                                    <dt>Kultur</dt>
                                    <dd>Andvari</dd>
                                </div>
                                <div>
                                    <dt>Item</dt>
                                    <dd>Iron Axe</dd>
                                </div>
                                <div>
                                    <dt>Hållbarhet</dt>
                                    <dd>Unbreakable</dd>
                                </div>
                                <div>
                                    <dt>Efficiency</dt>
                                    <dd>III</dd>
                                </div>
                                <div>
                                    <dt>Sharpness</dt>
                                    <dd>II</dd>
                                </div>
                                <div>
                                    <dt>Settlementbonus</dt>
                                    <dd>Ingen</dd>
                                </div>
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
