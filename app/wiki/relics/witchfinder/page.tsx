import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { MainLayout } from "@/components/layout/MainLayout";
import styles from "./page.module.css";
import relicImage from "../assets/witchfinder.png";

export const metadata: Metadata = {
    title: "Witchfinder | GameZone Wiki",
    description: "Witchfinder, en Common-relik från Vaelthor. Ett Crossbow med Quick Charge II och Multishot I.",
};

export default function WitchfinderWikiPage() {
    return (
        <MainLayout>
            <main className={styles.page}>
                <div className={styles.shell}>
                    <nav className={styles.breadcrumbs} aria-label="Brödsmulor">
                        <Link href="/wiki">Wiki</Link>
                        <span>/</span>
                        <Link href="/wiki/relics/reliker">Reliker</Link>
                        <span>/</span>
                        <span>Witchfinder</span>
                    </nav>

                    <section className={styles.hero}>
                        <div className={styles.heroCopy}>
                            <div className={styles.badges}>
                                <span className={styles.common}>Common</span>
                                <span>Vaelthor</span>
                                <span>GZR-0015</span>
                            </div>

                            <p className={styles.eyebrow}>GameZone Relic Archive</p>
                            <h1>Witchfinder</h1>
                            <p className={styles.lead}>
                                Ett ombyggt armborst från Vaelthor, använt av jägaren Edran Vale mot dem som utövade förbjuden magi.
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
                                alt="Witchfinder, ett gammalt armborst från Vaelthor"
                                width={1536}
                                height={1152}
                                priority
                            />
                            <div className={styles.artLabel}>
                                <span>Common Relic</span>
                                <strong>Witchfinder</strong>
                            </div>
                        </div>
                    </section>

                    <section className={styles.contentGrid}>
                        <article className={styles.article}>
                            <p className={styles.sectionEyebrow}>Lore</p>
                            <h2>Edran Vales armborst</h2>

                            <p>
                                Witchfinder tillhörde <strong>Edran Vale</strong>, en jägare i Vaelthor som anlitades när vanliga soldater inte räckte till.
                            </p>

                            <p>
                                Hans uppgift var enkel. Hitta dem som använde förbjuden magi, och se till att de inte hann använda den igen.
                            </p>

                            <p>
                                Edran föredrog armborst framför svärd. Han menade att den som behövde komma nära en magiker redan hade gjort sitt första misstag.
                            </p>

                            <p>
                                Witchfinder byggdes om under många år. Mekanismen gjordes snabbare, stocken förstärktes och bågen anpassades för att kunna avfyra flera skott samtidigt. På träet ristade Edran in märken för varje uppdrag han överlevde.
                            </p>

                            <p>Till slut slutade nya märken dyka upp.</p>

                            <p>
                                Edran hade skickats för att undersöka ett övergivet torn i norra Vaelthor. När hans följeslagare kom dit några dagar senare var tornet tomt.
                            </p>

                            <p>De hittade bara tre armborstpilar i en vägg.</p>

                            <p>Witchfinder var borta.</p>

                            <blockquote>Ge aldrig en magiker tid att tala.</blockquote>
                        </article>

                        <aside className={styles.infoCard}>
                            <div className={styles.infoTitle}>
                                <span>Relikdata</span>
                                <strong>GZR-0015</strong>
                            </div>

                            <dl>
                                <div><dt>Kultur</dt><dd>Vaelthor</dd></div>
                                <div><dt>Item</dt><dd>Crossbow</dd></div>
                                <div><dt>Quick Charge</dt><dd>II</dd></div>
                                <div><dt>Multishot</dt><dd>I</dd></div>
                                <div><dt>Settlementbonus</dt><dd>Ingen separat bonus</dd></div>
                            </dl>

                            <p className={styles.infoNote}>
                                Ägarskap, upptäckare och relikens levande serverhistorik visas i Relikarkivet när
                                informationen blir offentlig.
                            </p>
                        </aside>
                    </section>

                    <section className={styles.relicSystemCta}>
                        <div>
                            <p className={styles.sectionEyebrow}>Reliksystemet</p>
                            <h2>En relik är ett riktigt föremål.</h2>
                            <p>
                                Den kan hittas, tappas, ges bort och byta ägare. Engine dokumenterar dess historia
                                medan föremålet fortsätter leva i spelvärlden.
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
