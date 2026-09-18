import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { MainLayout } from "@/components/layout/MainLayout";
import styles from "./page.module.css";
import relicImage from "../assets/the-kings-ledger.png";

export const metadata: Metadata = {
    title: "The King's Ledger | GameZone Wiki",
    description: "The King's Ledger, en Rare settlementrelik från Gondoria som ger +3% Production.",
};

export default function TheKingsLedgerWikiPage() {
    return (
        <MainLayout>
            <main className={styles.page}>
                <div className={styles.shell}>
                    <nav className={styles.breadcrumbs} aria-label="Brödsmulor">
                        <Link href="/wiki">Wiki</Link>
                        <span>/</span>
                        <Link href="/wiki/relics/reliker">Reliker</Link>
                        <span>/</span>
                        <span>The King's Ledger</span>
                    </nav>

                    <section className={styles.hero}>
                        <div className={styles.heroCopy}>
                            <div className={styles.badges}>
                                <span className={styles.rare}>Rare</span>
                                <span>Gondoria</span>
                                <span>GZR-0027</span>
                            </div>

                            <p className={styles.eyebrow}>GameZone Relic Archive</p>
                            <h1>The King's Ledger</h1>
                            <p className={styles.lead}>
                                Gondorias kungliga liggare, fylld med generationer av beslut, resurser och planer för ett rike som skulle bestå.
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
                                alt="The King's Ledger, Gondorias gamla kungliga liggare"
                                width={595}
                                height={570}
                                priority
                            />
                            <div className={styles.artLabel}>
                                <span>Rare Relic</span>
                                <strong>The King's Ledger</strong>
                            </div>
                        </div>
                    </section>

                    <section className={styles.contentGrid}>
                        <article className={styles.article}>
                            <p className={styles.sectionEyebrow}>Lore</p>
                            <h2>Gondorias kungliga räkenskaper</h2>

                            <p>
                                <strong>The King's Ledger</strong> fördes under generationer av Gondorias kungliga skrivare.
                                I dess sidor bokfördes inte bara rikets inkomster och utgifter, utan även skördar,
                                stenbrott, verkstäder och de resurser som krävdes för att hålla Gondoria levande.
                            </p>

                            <p>
                                Det sägs att <strong>kung Alaric I</strong> själv började använda liggaren när Gondoria
                                fortfarande var ett ungt rike. Han ansåg att ett kungadöme inte byggdes genom stora tal
                                eller tillfälliga segrar, utan genom att varje säck spannmål, varje stenblock och varje
                                arbetstimme användes där den gjorde störst nytta.
                            </p>

                            <p>
                                Med tiden fylldes boken av nya händer. Marginalerna täcktes av anteckningar från fogdar,
                                byggmästare och skattmästare. När en metod fungerade skrevs den ner. När något misslyckades
                                skrevs även det ner, så att nästa generation inte behövde göra samma misstag.
                            </p>

                            <p>
                                Under Gondorias sista dagar försvann liggaren från det kungliga arkivet. Ingen vet vem som
                                tog den, eller om den räddades för att bevara rikets kunskap när murarna föll.
                            </p>

                            <p>
                                Ett settlement som återfår <strong>The King's Ledger</strong> kan använda Gondorias samlade
                                erfarenhet för att organisera sitt arbete effektivare och får därför
                                <strong> +3% Production</strong>.
                            </p>

                            <blockquote>
                                “Ett välorganiserat rike lämnar inte framgången åt slumpen.”
                                <br />— Kung Alaric I av Gondoria
                            </blockquote>
                        </article>

                        <aside className={styles.infoCard}>
                            <div className={styles.infoTitle}>
                                <span>Relikdata</span>
                                <strong>GZR-0027</strong>
                            </div>

                            <dl>
                                <div><dt>Rarity</dt><dd className={styles.rareText}>Rare</dd></div>
                                <div><dt>Kultur</dt><dd>Gondoria</dd></div>
                                <div><dt>Item</dt><dd>Written Book</dd></div>
                                <div><dt>Hållbarhet</dt><dd>Unbreakable</dd></div>
                                <div><dt>Typ</dt><dd>Settlement Relic</dd></div>
                                <div><dt>Production</dt><dd>+3%</dd></div>
                                <div><dt>Aktivering</dt><dd>Settlement Inventory</dd></div>
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
