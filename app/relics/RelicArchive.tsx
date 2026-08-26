"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import styles from "./page.module.css";
import marchersBootsImage from "../wiki/relics/assets/marchers-boots.png";
import minersCompanionImage from "../wiki/relics/assets/miners-companion.png";
import frostbrytarenImage from "../wiki/relics/assets/frostbrytaren.png";
import frostbiteImage from "../wiki/relics/assets/frostbite.png";
import bookOfFortuneImage from "../wiki/relics/assets/book-of-fortune.png";
import deepdelverImage from "../wiki/relics/assets/deepdelver.png";
import legionnairesBladeImage from "../wiki/relics/assets/legionnaires-blade.png";
import theRedStandardImage from "../wiki/relics/assets/the-red-standard.png";
import desertPiercerImage from "../wiki/relics/assets/desert-piercer.png";

type RelicTier = "COMMON" | "RARE" | "EPIC" | "LEGENDARY" | "MYTHIC" | null;

type Relic = {
    id: string;
    serial: string;
    name: string;
    tier: RelicTier;
    culture: string | null;
    material: string | null;
    status: string;
    generation: number;
    holderType: string | null;
    holderName: string | null;
    publicLocation: string | null;
    discoveredBy: string | null;
    productionBonusBasisPoints: number;
    xpBonusBasisPoints: number;
    warTickets: number;
};

type ApiResponse = {
    status: string;
    data?: Relic[];
};

const tierOrder: Record<string, number> = {
    MYTHIC: 0,
    LEGENDARY: 1,
    EPIC: 2,
    RARE: 3,
    COMMON: 4,
};

const tierLabels: Record<string, string> = {
    COMMON: "Common",
    RARE: "Rare",
    EPIC: "Epic",
    LEGENDARY: "Legendary",
    MYTHIC: "Mythic",
};

// Reliker som är offentligt kända innan discovery. Upptäckta reliker avslöjas alltid.
// Fördelning: 10 Common, 4 Rare, 3 Epic, 1 Legendary.
const publicBeforeDiscovery = new Set([
    "GZR-0001", "GZR-0002", "GZR-0003", "GZR-0004", "GZR-0005",
    "GZR-0006", "GZR-0007", "GZR-0008", "GZR-0009", "GZR-0010",
    "GZR-0019", "GZR-0020", "GZR-0021", "GZR-0022",
    "GZR-0033", "GZR-0034", "GZR-0035", "GZR-0039",
    "GZR-0042",
]);

function maskRelic(relic: Relic): Relic {
    if (isDiscovered(relic) || publicBeforeDiscovery.has(relic.serial)) return relic;
    return {
        ...relic,
        name: "Okänd relik",
        tier: null,
        culture: null,
        material: null,
        productionBonusBasisPoints: 0,
        xpBonusBasisPoints: 0,
        warTickets: 0,
    };
}

function isSecret(relic: Relic) {
    return relic.name.toLocaleLowerCase("sv-SE") === "okänd relik";
}

function isDiscovered(relic: Relic) {
    return Boolean(relic.discoveredBy);
}


function relicGlyph(relic: Relic) {
    const material = (relic.material ?? "").toUpperCase();
    if (material.includes("PICKAXE")) return "⛏";
    if (material.includes("AXE")) return "🪓";
    if (material.includes("SWORD")) return "⚔";
    if (material.includes("BOW") || material.includes("CROSSBOW")) return "➶";
    if (material.includes("BOOK")) return "▤";
    if (material.includes("HELMET") || material.includes("CROWN")) return "♛";
    if (material.includes("BOOTS")) return "♟";
    if (material.includes("SHIELD")) return "◈";
    if (material.includes("TRIDENT")) return "Ψ";
    if (material.includes("COMPASS")) return "✥";
    if (material.includes("SPYGLASS")) return "◉";
    if (material.includes("FISHING")) return "⌁";
    if (material.includes("STAR")) return "✦";
    return "◆";
}

function relicWikiHref(relic: Relic) {
    if (relic.serial === "GZR-0001") return "/wiki/relics/miners-companion";
    if (relic.serial === "GZR-0002") return "/wiki/relics/frostbite";
    if (relic.serial === "GZR-0003") return "/wiki/relics/book-of-fortune";
    if (relic.serial === "GZR-0004") return "/wiki/relics/deepdelver";
    if (relic.serial === "GZR-0005") return "/wiki/relics/legionnaires-blade";
    if (relic.serial === "GZR-0006") return "/wiki/relics/the-red-standard";
    if (relic.serial === "GZR-0007") return "/wiki/relics/desert-piercer";
    if (relic.serial === "GZR-0019") return "/wiki/relics/frostbrytaren";
    if (relic.serial === "GZR-0008") return "/wiki/relics/marchers-boots";
    if (relic.serial === "GZR-0039") return "/wiki/relics/moonpiercer";
    return null;
}

function statusLabel(relic: Relic) {
    if (isDiscovered(relic)) return "Upptäckt";
    if (isSecret(relic)) return "Okänd";
    return "Känd relik";
}

function bonusSummary(relic: Relic) {
    const bonuses: string[] = [];
    if (relic.productionBonusBasisPoints > 0) bonuses.push(`+${relic.productionBonusBasisPoints / 100}% Production`);
    if (relic.xpBonusBasisPoints > 0) bonuses.push(`+${relic.xpBonusBasisPoints / 100}% XP`);
    if (relic.warTickets > 0) bonuses.push(`+${relic.warTickets} War Tickets`);
    return bonuses.join(" · ");
}

export default function RelicArchive() {
    const [relics, setRelics] = useState<Relic[]>([]);
    const [loading, setLoading] = useState(true);
    const [failed, setFailed] = useState(false);
    const [filter, setFilter] = useState<"ALL" | "DISCOVERED" | "UNDISCOVERED">("ALL");

    useEffect(() => {
        let mounted = true;

        fetch("/api/relics", { cache: "no-store" })
            .then(async (response) => {
                if (!response.ok) throw new Error("Relics unavailable");
                return (await response.json()) as ApiResponse;
            })
            .then((response) => {
                if (!mounted) return;
                const data = Array.isArray(response.data) ? response.data : [];
                setRelics(data);
                setFailed(data.length === 0);
            })
            .catch(() => mounted && setFailed(true))
            .finally(() => mounted && setLoading(false));

        return () => {
            mounted = false;
        };
    }, []);

    const sortedRelics = useMemo(() => [...relics].sort((a, b) => {
        const aSerial = Number.parseInt(a.serial.replace(/\D/g, ""), 10) || 9999;
        const bSerial = Number.parseInt(b.serial.replace(/\D/g, ""), 10) || 9999;
        return aSerial - bSerial;
    }), [relics]);

    const publicRelics = useMemo(() => sortedRelics.map(maskRelic), [sortedRelics]);

    const visibleRelics = useMemo(() => publicRelics.filter((relic) => {
        if (filter === "DISCOVERED") return isDiscovered(relic);
        if (filter === "UNDISCOVERED") return !isDiscovered(relic);
        return true;
    }), [filter, publicRelics]);

    const discovered = relics.filter(isDiscovered).length;
    const secret = publicRelics.filter(isSecret).length;

    if (loading) {
        return <section className={styles.loadingState}><span className={styles.loader} /><strong>Öppnar relikarkivet</strong><p>Hämtar serverns registrerade reliker.</p></section>;
    }

    if (failed) {
        return <section className={styles.errorState}><span>ARKIVET ÄR TILLFÄLLIGT STÄNGT</span><h2>Relikdata kunde inte hämtas</h2><p>GameZone Engine svarar inte just nu. Ingen relikdata har gissats eller fyllts i lokalt.</p><Link href="/wiki/relics/reliker">Läs om reliksystemet i wikin →</Link></section>;
    }

    return (
        <>
            <section className={styles.archiveHeader}>
                <div className={styles.stats}>
                    <div><span>Reliker i arkivet</span><strong>{relics.length}</strong></div>
                    <div><span>Upptäckta</span><strong>{discovered}</strong></div>
                    <div><span>Okända</span><strong>{secret}</strong></div>
                </div>

                <div className={styles.filterBar} aria-label="Filtrera reliker">
                    <button className={filter === "ALL" ? styles.filterActive : ""} onClick={() => setFilter("ALL")}>Alla <span>{relics.length}</span></button>
                    <button className={filter === "DISCOVERED" ? styles.filterActive : ""} onClick={() => setFilter("DISCOVERED")}>Upptäckta <span>{discovered}</span></button>
                    <button className={filter === "UNDISCOVERED" ? styles.filterActive : ""} onClick={() => setFilter("UNDISCOVERED")}>Ej upptäckta <span>{relics.length - discovered}</span></button>
                </div>

                <div className={styles.rarityLegend} aria-label="Relikrariteter">
                    <span data-tier="COMMON"><i />Common</span>
                    <span data-tier="RARE"><i />Rare</span>
                    <span data-tier="EPIC"><i />Epic</span>
                    <span data-tier="LEGENDARY"><i />Legendary</span>
                    <span data-tier="MYTHIC"><i />Mythic</span>
                </div>
            </section>

            <section className={styles.dexIntro}>
                <div>
                    <span className={styles.eyebrow}>Relic Index</span>
                    <h2>{filter === "ALL" ? "Alla registrerade reliker" : filter === "DISCOVERED" ? "Upptäckta reliker" : "Reliker som återstår"}</h2>
                </div>
                <p>En liten del av arkivet är känt från början. Resten avslöjas först när spelarna faktiskt hittar dem i världen.</p>
            </section>

            <div className={styles.relicGrid}>
                {visibleRelics.map((relic) => {
                    const discoveredRelic = isDiscovered(relic);
                    const secretRelic = isSecret(relic);
                    const bonus = bonusSummary(relic);
                    const tier = relic.tier ? tierLabels[relic.tier] : null;

                    const wikiHref = relicWikiHref(relic);

                    const card = (
                        <article
                            className={`${styles.relicCard} ${discoveredRelic ? styles.discoveredCard : styles.undiscoveredCard} ${secretRelic ? styles.secretCard : ""} ${wikiHref ? styles.clickableCard : ""}`}
                            data-tier={relic.tier ?? "UNKNOWN"}
                        >
                            <div className={styles.cardTopline}>
                                <span className={styles.serial}>{relic.serial}</span>
                                <span className={styles.dexNumber}>#{relic.serial.replace(/\D/g, "").padStart(4, "0")}</span>
                            </div>

                            {secretRelic ? (
                                <div className={`${styles.relicArt} ${styles.secretArt}`} aria-hidden="true">
                                    <span className={styles.secretGlyph}>?</span>
                                </div>
                            ) : relic.serial === "GZR-0001" ? (
                                <div className={`${styles.relicArt} ${styles.relicImagePreview}`} aria-hidden="true">
                                    <img src={minersCompanionImage.src} alt="" />
                                    <span className={styles.artCaption}>IRON PICKAXE</span>
                                </div>
                            ) : relic.serial === "GZR-0002" ? (
                                <div className={`${styles.relicArt} ${styles.relicImagePreview}`} aria-hidden="true">
                                    <img src={frostbiteImage.src} alt="" />
                                    <span className={styles.artCaption}>IRON AXE</span>
                                </div>
                            ) : relic.serial === "GZR-0003" ? (
                                <div className={`${styles.relicArt} ${styles.relicImagePreview}`} aria-hidden="true">
                                    <img src={bookOfFortuneImage.src} alt="" />
                                    <span className={styles.artCaption}>WRITTEN BOOK</span>
                                </div>
                            ) : relic.serial === "GZR-0004" ? (
                                <div className={`${styles.relicArt} ${styles.relicImagePreview}`} aria-hidden="true">
                                    <img src={deepdelverImage.src} alt="" />
                                    <span className={styles.artCaption}>GOLDEN PICKAXE</span>
                                </div>
                            ) : relic.serial === "GZR-0019" ? (
                                <div className={`${styles.relicArt} ${styles.relicImagePreview}`} aria-hidden="true">
                                    <img src={frostbrytarenImage.src} alt="" />
                                    <span className={styles.artCaption}>DIAMOND PICKAXE</span>
                                </div>
                            ) : relic.serial === "GZR-0005" ? (
                                <div className={`${styles.relicArt} ${styles.relicImagePreview}`} aria-hidden="true">
                                    <img src={legionnairesBladeImage.src} alt="" />
                                    <span className={styles.artCaption}>IRON SWORD</span>
                                </div>
                            ) : relic.serial === "GZR-0006" ? (
                                <div className={`${styles.relicArt} ${styles.relicImagePreview}`} aria-hidden="true">
                                    <img src={theRedStandardImage.src} alt="" />
                                    <span className={styles.artCaption}>RED BANNER</span>
                                </div>
                            ) : relic.serial === "GZR-0007" ? (
                                <div className={`${styles.relicArt} ${styles.relicImagePreview}`} aria-hidden="true">
                                    <img src={desertPiercerImage.src} alt="" />
                                    <span className={styles.artCaption}>CROSSBOW</span>
                                </div>
                            ) : relic.serial === "GZR-0008" ? (
                                <div className={`${styles.relicArt} ${styles.relicImagePreview}`} aria-hidden="true">
                                    <img src={marchersBootsImage.src} alt="" />
                                    <span className={styles.artCaption}>IRON BOOTS</span>
                                </div>
                            ) : (
                                <div className={styles.relicArt} aria-hidden="true">
                                    <span className={styles.artGlow} />
                                    <span className={styles.itemGlyph}>{relicGlyph(relic)}</span>
                                    <span className={styles.artCaption}>{relic.material?.replaceAll("_", " ") ?? "RELIC"}</span>
                                </div>
                            )}

                            <div className={styles.cardContent}>
                                <div className={styles.badges}>
                                    {tier && <span className={styles.tierBadge}>{tier}</span>}
                                    {relic.culture && <span className={styles.cultureBadge}>{relic.culture}</span>}
                                </div>
                                <h3>{relic.name}</h3>
                                <p className={styles.status}>{statusLabel(relic)}</p>

                                {discoveredRelic ? (
                                    <dl className={styles.cardFacts}>
                                        <div><dt>Upptäcktes av</dt><dd>{relic.discoveredBy}</dd></div>
                                        <div><dt>Innehavare</dt><dd>{relic.holderName ?? "Okänd"}</dd></div>
                                        {relic.publicLocation && <div><dt>Senast sedd</dt><dd>{relic.publicLocation}</dd></div>}
                                    </dl>
                                ) : (
                                    <p className={styles.mysteryText}>{secretRelic ? "Identiteten är fortfarande dold i GameZones arkiv." : "Reliken är känd, men ingen spelare har ännu registrerats som dess upptäckare."}</p>
                                )}

                                {bonus && !secretRelic && <p className={styles.bonus}>{bonus}</p>}
                            </div>
                            {wikiHref && (
                                <span className={styles.cardLinkHint}>
                                    Öppna reliksidan <span aria-hidden="true">→</span>
                                </span>
                            )}
                        </article>
                    );

                    return wikiHref ? (
                        <Link className={styles.cardLink} href={wikiHref} key={relic.serial}>
                            {card}
                        </Link>
                    ) : (
                        <div className={styles.cardShell} key={relic.serial}>
                            {card}
                        </div>
                    );
                })}
            </div>

            <section className={styles.wikiCta}>
                <div><span className={styles.eyebrow}>Hur fungerar det?</span><h2>Reliker är mer än samlarobjekt.</h2><p>De kan vara Unbreakable verktyg, vapen och böcker, och vissa ger hela settlements bonusar när de förvaras korrekt.</p></div>
                <Link href="/wiki/relics/reliker">Öppna relikwikin <span aria-hidden="true">→</span></Link>
            </section>
        </>
    );
}
