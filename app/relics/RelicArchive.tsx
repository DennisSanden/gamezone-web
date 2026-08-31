"use client";

import gravekeeperImage from "../wiki/relics/assets/gravekeeper.png";
import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import styles from "./page.module.css";
import Image from "next/image";

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


type RelicArtwork = {
    src: string;
    caption: string;
};

const relicArtwork: Record<string, RelicArtwork> = {
    "GZR-0001": { src: "/images/relics/archive/miners-companion.webp", caption: "IRON PICKAXE" },
    "GZR-0002": { src: "/images/relics/archive/frostbite.webp", caption: "IRON AXE" },
    "GZR-0003": { src: "/images/relics/archive/book-of-fortune.webp", caption: "WRITTEN BOOK" },
    "GZR-0004": { src: "/images/relics/archive/deepdelver.webp", caption: "GOLDEN PICKAXE" },
    "GZR-0005": { src: "/images/relics/archive/legionnaires-blade.webp", caption: "IRON SWORD" },
    "GZR-0006": { src: "/images/relics/archive/the-red-standard.webp", caption: "RED BANNER" },
    "GZR-0007": { src: "/images/relics/archive/desert-piercer.webp", caption: "CROSSBOW" },
    "GZR-0008": { src: "/images/relics/archive/marchers-boots.webp", caption: "IRON BOOTS" },
    "GZR-0009": { src: "/images/relics/archive/the-masons-journal.webp", caption: "WRITTEN BOOK" },
    "GZR-0010": { src: "/images/relics/archive/kingsguard.webp", caption: "IRON SWORD" },
    "GZR-0015": { src: "/images/relics/archive/witchfinder.webp", caption: "CROSSBOW" },
    "GZR-0019": { src: "/images/relics/archive/frostbrytaren.webp", caption: "DIAMOND PICKAXE" },
    "GZR-0020": { src: "/images/relics/archive/mountainbreaker.webp", caption: "DIAMOND AXE" },
    "GZR-0021": { src: "/images/relics/archive/prospectors-helm.webp", caption: "DIAMOND HELMET" },
    "GZR-0022": { src: "/images/relics/archive/heart-of-the-mountain.webp", caption: "HEART OF THE SEA" },
    "GZR-0025": { src: "/images/relics/archive/warbringers-plate.webp", caption: "DIAMOND CHESTPLATE" },
    "GZR-0028": { src: "/images/relics/archive/oathkeeper.webp", caption: "DIAMOND SWORD" },
    "GZR-0029": { src: gravekeeperImage.src, caption: "DIAMOND SHOVEL" },
    "GZR-0030": { src: "/images/relics/archive/book-of-the-ancients.webp", caption: "WRITTEN BOOK" },
    "GZR-0033": { src: "/images/relics/archive/andvaris-pride.webp", caption: "NETHERITE PICKAXE" },
    "GZR-0034": { src: "/images/relics/archive/winterhide.webp", caption: "DIAMOND CHESTPLATE" },
    "GZR-0035": { src: "/images/relics/archive/the-black-blade.webp", caption: "NETHERITE SWORD" },
    "GZR-0039": { src: "/images/relics/archive/moonpiercer.webp", caption: "BOW" },
    "GZR-0042": { src: "/images/relics/archive/forgefathers-gauntlet.webp", caption: "NETHERITE CHESTPLATE" },
};

// Reliker som är offentligt kända innan discovery. Upptäckta reliker avslöjas alltid.
// Fördelning: 10 Common, 5 Rare, 3 Epic, 1 Legendary.
const publicBeforeDiscovery = new Set([
    "GZR-0001", "GZR-0002", "GZR-0003", "GZR-0004", "GZR-0005",
    "GZR-0006", "GZR-0007", "GZR-0008", "GZR-0009", "GZR-0010",
    "GZR-0015", "GZR-0019", "GZR-0020", "GZR-0021", "GZR-0022",
    "GZR-0025", "GZR-0028", "GZR-0029", "GZR-0030", "GZR-0033", "GZR-0034",
    "GZR-0035", "GZR-0039", "GZR-0042",
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
    if (relic.serial === "GZR-0008") return "/wiki/relics/marchers-boots";
    if (relic.serial === "GZR-0009") return "/wiki/relics/the-masons-journal";
    if (relic.serial === "GZR-0010") return "/wiki/relics/kingsguard";
    if (relic.serial === "GZR-0015") return "/wiki/relics/witchfinder";
    if (relic.serial === "GZR-0019") return "/wiki/relics/frostbrytaren";
    if (relic.serial === "GZR-0020") return "/wiki/relics/mountainbreaker";
    if (relic.serial === "GZR-0021") return "/wiki/relics/prospectors-helm";
    if (relic.serial === "GZR-0022") return "/wiki/relics/heart-of-the-mountain";
    if (relic.serial === "GZR-0025") return "/wiki/relics/warbringers-plate";
    if (relic.serial === "GZR-0028") return "/wiki/relics/oathkeeper";
    if (relic.serial === "GZR-0029") return "/wiki/relics/gravekeeper";
    if (relic.serial === "GZR-0030") return "/wiki/relics/book-of-the-ancients";
    if (relic.serial === "GZR-0033") return "/wiki/relics/andvaris-pride";
    if (relic.serial === "GZR-0034") return "/wiki/relics/winterhide";
    if (relic.serial === "GZR-0035") return "/wiki/relics/the-black-blade";
    if (relic.serial === "GZR-0039") return "/wiki/relics/moonpiercer";
    if (relic.serial === "GZR-0042") return "/wiki/relics/forgefathers-gauntlet";
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

        fetch("/api/relics")
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
                    const artwork = relicArtwork[relic.serial];

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
                            ) : artwork ? (
                                <div className={`${styles.relicArt} ${styles.relicImagePreview}`} aria-hidden="true">
                                    <Image
                                        src={artwork.src}
                                        alt=""
                                        fill
                                        sizes="(max-width: 600px) 100vw, (max-width: 1000px) 50vw, 33vw"
                                        quality={80}
                                    />
                                    <span className={styles.artCaption}>{artwork.caption}</span>
                                </div>
                            ) : relic.serial === "GZR-0029" ? (
                                <div className={`${styles.relicArt} ${styles.relicImagePreview}`} aria-hidden="true">
                                    <img src={gravekeeperImage.src} alt="" />
                                    <span className={styles.artCaption}>DIAMOND SHOVEL</span>
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
