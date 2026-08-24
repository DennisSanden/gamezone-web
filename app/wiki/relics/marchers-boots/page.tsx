import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { MainLayout } from "@/components/layout/MainLayout";
import styles from "./page.module.css";
import relicImage from "../assets/marchers-boots.png";

export const metadata: Metadata = {
    title: "Marcher's Boots | GameZone Wiki",
    description: "Marcher's Boots, en Common relik från Varkesh och ett par gamla stövlar från legionens marscher.",
};

export default function MarchersBootsWikiPage() {
    return (
        <MainLayout>
            <main className={styles.page}>
                <div className={styles.shell}>
                    <nav className={styles.breadcrumbs} aria-label="Brödsmulor">
                        <Link href="/wiki">Wiki</Link>
                        <span>/</span>
                        <Link href="/wiki/relics/reliker">Reliker</Link>
                        <span>/</span>
                        <span>Marcher's Boots</span>
                    </nav>

                    <section className={styles.hero}>
                        <div className={styles.heroCopy}>
                            <div className={styles.badges}>
                                <span className={styles.common}>Common</span>
                                <span>Varkesh</span>
                                <span>GZR-0008</span>
                            </div>

                            <p className={styles.eyebrow}>GameZone Relic Archive</p>
                            <h1>Marcher's Boots</h1>
                            <p className={styles.lead}>
                                Ett par slitna stövlar från Varkesh, burna av en budbärare som fortsatte gå där andra gav upp.
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
                                alt="Marcher's Boots, en gammal arbetshacka från Varkesh"
                                width={1536}
                                height={1136}
                                priority
                            />
                            <div className={styles.artLabel}>
                                <span>Common Relic</span>
                                <strong>Marcher's Boots</strong>
                            </div>
                        </div>
                    </section>

                    <section className={styles.contentGrid}>
                        <article className={styles.article}>
                            <p className={styles.sectionEyebrow}>Lore</p>
                            <h2>Stövlarna som aldrig stannade</h2>

                            <p>
                                Marcher's Boots sägs ha burits av en outtröttlig budbärare i <strong>Varkesh Legion</strong>,
                                en soldat som gick där andra gav upp.
                            </p>

                            <p>
                                I de långa marscherna mellan fästningar, bosättningar och slagfält bar han bud
                                som kunde avgöra liv och död. Varken regn, snö eller fiendens stål fick stoppa honom.
                            </p>

                            <p>
                                Ingen vet längre hans riktiga namn. Bland legionärerna kallades han helt enkelt
                                <strong>Marcher</strong>. Han rörde sig i skuggan av arméerna, men var aldrig en del
                                av deras ära. Hans lojalitet låg hos uppdraget.
                            </p>

                            <p>
                                Stövlarna bar honom över öknar, genom ruiner, över berg och genom mark där strider
                                nyligen hade tystnat. De blev slitna av vägen, men höll.
                            </p>

                            <p>
                                När berättelserna om Marcher upphörde försvann även stövlarna. Vad som hände med
                                honom finns inte längre nedtecknat.
                            </p>

                            <blockquote>
                                Vägen är lång och stegen är många. Men så länge plikten kallar, fortsätter marschen.
                            </blockquote>
                        </article>

                        <aside className={styles.infoCard}>
                            <div className={styles.infoTitle}>
                                <span>Relikdata</span>
                                <strong>GZR-0008</strong>
                            </div>

                            <dl>
                                <div>
                                    <dt>Rarity</dt>
                                    <dd className={styles.rareText}>Common</dd>
                                </div>
                                <div>
                                    <dt>Kultur</dt>
                                    <dd>Varkesh</dd>
                                </div>
                                <div>
                                    <dt>Item</dt>
                                    <dd>Iron Boots</dd>
                                </div>
                                <div>
                                    <dt>Hållbarhet</dt>
                                    <dd>Unbreakable</dd>
                                </div>
                                <div>
                                    <dt>Protection</dt>
                                    <dd>II</dd>
                                </div>
                                <div>
                                    <dt>Feather Falling</dt>
                                    <dd>III</dd>
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
