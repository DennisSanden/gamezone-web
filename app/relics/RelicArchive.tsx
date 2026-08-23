"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import styles from "./page.module.css";

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

function isSecret(relic: Relic) {
    return relic.name.toLocaleLowerCase("sv-SE") === "okänd relik";
}

function isDiscovered(relic: Relic) {
    return Boolean(relic.discoveredBy);
}

function statusLabel(relic: Relic) {
    if (isDiscovered(relic)) return "Upptäckt";
    if (isSecret(relic)) return "Okänd";
    if (relic.status === "HIDDEN") return "Finns någonstans i världen";
    if (relic.status === "UNRELEASED") return "Inte släppt ännu";
    return relic.status.replaceAll("_", " ").toLocaleLowerCase("sv-SE");
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

    const visibleRelics = useMemo(() => sortedRelics.filter((relic) => {
        if (filter === "DISCOVERED") return isDiscovered(relic);
        if (filter === "UNDISCOVERED") return !isDiscovered(relic);
        return true;
    }), [filter, sortedRelics]);

    const discovered = relics.filter(isDiscovered).length;
    const secret = relics.filter(isSecret).length;
    const released = relics.filter((relic) => relic.status !== "UNRELEASED").length;

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
                    <div><span>Registrerade</span><strong>{relics.length}</strong></div>
                    <div><span>Upptäckta</span><strong>{discovered}</strong></div>
                    <div><span>Utgivna</span><strong>{released}</strong></div>
                    <div><span>Fortfarande okända</span><strong>{secret}</strong></div>
                </div>

                <div className={styles.filterBar} aria-label="Filtrera reliker">
                    <button className={filter === "ALL" ? styles.filterActive : ""} onClick={() => setFilter("ALL")}>Alla <span>{relics.length}</span></button>
                    <button className={filter === "DISCOVERED" ? styles.filterActive : ""} onClick={() => setFilter("DISCOVERED")}>Upptäckta <span>{discovered}</span></button>
                    <button className={filter === "UNDISCOVERED" ? styles.filterActive : ""} onClick={() => setFilter("UNDISCOVERED")}>Ej upptäckta <span>{relics.length - discovered}</span></button>
                </div>
            </section>

            <section className={styles.dexIntro}>
                <div>
                    <span className={styles.eyebrow}>Relic Index</span>
                    <h2>{filter === "ALL" ? "Alla registrerade reliker" : filter === "DISCOVERED" ? "Upptäckta reliker" : "Reliker som återstår"}</h2>
                </div>
                <p>Upptäckta reliker fylls i med sin identitet och nuvarande historia. Hemliga reliker förblir maskerade tills världen avslöjar dem.</p>
            </section>

            <div className={styles.relicGrid}>
                {visibleRelics.map((relic) => {
                    const discoveredRelic = isDiscovered(relic);
                    const secretRelic = isSecret(relic);
                    const bonus = bonusSummary(relic);
                    const tier = relic.tier ? tierLabels[relic.tier] : null;

                    return (
                        <article
                            className={`${styles.relicCard} ${discoveredRelic ? styles.discoveredCard : styles.undiscoveredCard} ${secretRelic ? styles.secretCard : ""}`}
                            data-tier={relic.tier ?? "UNKNOWN"}
                            key={relic.serial}
                        >
                            <div className={styles.cardTopline}>
                                <span className={styles.serial}>{relic.serial}</span>
                                <span className={styles.dexNumber}>#{relic.serial.replace(/\D/g, "").padStart(4, "0")}</span>
                            </div>

                            <div className={styles.relicMark} aria-hidden="true">
                                {discoveredRelic ? "✦" : secretRelic ? "?" : "◇"}
                            </div>

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
                        </article>
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
