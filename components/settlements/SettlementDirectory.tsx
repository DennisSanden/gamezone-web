"use client";

import { useEffect, useMemo, useState } from "react";
import { PlayerLink } from "@/components/player/PlayerLink";
import styles from "./SettlementDirectory.module.css";

type SettlementMember = {
    playerId: string;
    username: string;
    role: string;
    title: string | null;
    joinedAt: string;
};

type SettlementBuilding = {
    buildingId: string;
    buildingType: string;
    registeredAt: string;
    registeredSettlementLevel: number;
};

type SettlementPolicy = {
    key: string;
    displayName: string;
    category: string;
    description: string;
};

type SettlementAlliance = {
    settlementId: string;
    displayName: string;
    level: number;
    levelName: string;
};

type SettlementWarStatistics = {
    wins: number;
    losses: number;
    ticketDifferential: number;
};

type Settlement = {
    settlementId: string;
    displayName: string;
    normalizedName: string;
    category: string;
    status: string;
    level: number;
    levelName: string;
    territoryRadius: number;
    nextUpgradeCost: number;
    serverTaxBasisPoints: number | null;
    productionTaxBasisPoints: number;
    productionTaxPercentage: number;
    productionTaxUpdatedAt: string;
    productionTaxUpdatedBy: string | null;
    treasuryBalance: number | null;
    totalTaxCollected: number;
    memberCount: number;
    governmentType: string;
    maxPolicySlots: number;
    activePolicies: SettlementPolicy[];
    warStatistics: SettlementWarStatistics;
    outstandingWarDebt: number;
    companyCount: number;
    territoryChunkCount: number;
    alliances: SettlementAlliance[];
    currentVoteEndsAt: string | null;
    currentVoteType: string | null;
    currentVoteBallotsCast: number | null;
    currentVoteEligibleVoters: number | null;
    electionCooldownUntil: string | null;
    members: SettlementMember[];
    buildings: SettlementBuilding[];
    createdAt: string;
    updatedAt: string;
};

type ApiEnvelope = {
    status: string;
    result?: Settlement[];
    message?: string;
    errors?: Array<{ message?: string }>;
};

type SortMode = "level" | "members" | "treasury" | "name";

type CategoryVisual = {
    icon: string;
    accent: string;
    label: string;
};

const coinFormatter = new Intl.NumberFormat("sv-SE");

const categoryVisuals: Record<string, CategoryVisual> = {
    FARMING: { icon: "/minecraft/items/golden_hoe.png", accent: "gold", label: "Jordbruk" },
    AGRICULTURE: { icon: "/minecraft/items/golden_hoe.png", accent: "gold", label: "Jordbruk" },
    MINING: { icon: "/minecraft/items/diamond_pickaxe.png", accent: "blue", label: "Gruvdrift" },
    FORESTRY: { icon: "/minecraft/items/golden_axe.png", accent: "green", label: "Skogsbruk" },
    FISHING: { icon: "/minecraft/items/fishing_rod_cast.png", accent: "cyan", label: "Fiske" },
    HUNTING: { icon: "/minecraft/items/bow.png", accent: "red", label: "Jakt" },
    INDUSTRY: { icon: "/minecraft/items/copper_ingot.png", accent: "orange", label: "Industri" },
    TRADE: { icon: "/minecraft/items/emerald.png", accent: "emerald", label: "Handel" },
    COMMERCE: { icon: "/minecraft/items/emerald.png", accent: "emerald", label: "Handel" },
};

const fallbackVisual: CategoryVisual = {
    icon: "/minecraft/items/filled_map.png",
    accent: "green",
    label: "Settlement",
};

function formatCoins(value: number | null | undefined) {
    if (value === null || value === undefined) return "Dold";
    return `${coinFormatter.format(value)} coins`;
}

function formatCategory(category: string) {
    return categoryVisuals[category]?.label ?? category
        .toLowerCase()
        .replaceAll("_", " ")
        .replace(/^./, (letter) => letter.toUpperCase());
}

function visualFor(category: string) {
    return categoryVisuals[category] ?? fallbackVisual;
}

function artworkFor(category: string) {
    const normalized = category.toUpperCase();

    if (normalized === "FARMING" || normalized === "AGRICULTURE") {
        return ["/minecraft/items/wheat.png", "/minecraft/items/carrot.png", "/minecraft/items/golden_hoe.png"];
    }
    if (normalized === "MINING") {
        return ["/minecraft/items/diamond.png", "/minecraft/items/iron_ingot.png", "/minecraft/items/diamond_pickaxe.png"];
    }
    if (normalized === "FORESTRY") {
        return ["/minecraft/items/spruce_sapling.png", "/minecraft/items/stick.png", "/minecraft/items/golden_axe.png"];
    }
    if (normalized === "FISHING") {
        return ["/minecraft/items/cod.png", "/minecraft/items/salmon.png", "/minecraft/items/fishing_rod_cast.png"];
    }
    if (normalized === "HUNTING") {
        return ["/minecraft/items/arrow.png", "/minecraft/items/leather.png", "/minecraft/items/bow.png"];
    }
    if (normalized === "INDUSTRY") {
        return ["/minecraft/items/copper_ingot.png", "/minecraft/items/redstone.png", "/minecraft/items/iron_pickaxe.png"];
    }
    if (normalized === "TRADE" || normalized === "COMMERCE") {
        return ["/minecraft/items/emerald.png", "/minecraft/items/gold_ingot.png", "/minecraft/items/chest_minecart.png"];
    }
    return ["/minecraft/items/filled_map.png", "/minecraft/items/compass_20.png", "/minecraft/items/name_tag.png"];
}

function roleLabel(role: string) {
    if (role === "KING") return "Kung";
    if (role === "LORD") return "Lord";
    return "Invånare";
}


function governmentLabel(value: string) {
    return value === "DEMOCRACY" ? "Demokrati" : "Diktatur";
}

function formatDate(value: string | null | undefined) {
    if (!value) return "Ingen";
    return new Intl.DateTimeFormat("sv-SE", { year: "numeric", month: "short", day: "numeric" }).format(new Date(value));
}

function formatDateTime(value: string | null | undefined) {
    if (!value) return "Ingen";
    return new Intl.DateTimeFormat("sv-SE", { day: "numeric", month: "short", hour: "2-digit", minute: "2-digit" }).format(new Date(value));
}

function settlementIdentity(policies: SettlementPolicy[]) {
    if (policies.length === 0) return { title: "Ingen tydlig inriktning", text: "Settlementet har ännu inte valt några aktiva policies." };
    const scores = new Map<string, number>();
    policies.forEach((policy) => scores.set(policy.category, (scores.get(policy.category) ?? 0) + 1));
    const category = [...scores.entries()].sort((a, b) => b[1] - a[1])[0]?.[0] ?? "";
    const identities: Record<string, { title: string; text: string }> = {
        Krig: { title: "Militär inriktning", text: "Stadens politik prioriterar krig, försvar och uthållighet." },
        Ekonomi: { title: "Handelsstad", text: "Staden satsar på företag, handel och en starkare lokal ekonomi." },
        Produktion: { title: "Produktionscentrum", text: "Staden prioriterar produktion och effektivitet för sina invånare." },
        Infrastruktur: { title: "Rörligt rike", text: "Staden satsar på rörelse, transporter och snabbare resor." },
        Progression: { title: "Kunskapssamhälle", text: "Staden prioriterar invånarnas personliga progression." },
        Tävling: { title: "Tävlingsstad", text: "Staden belönar tävling och framgång i turneringar." },
        Turism: { title: "Besöksstad", text: "Staden prioriterar besökare, landmarks och turism." },
    };
    return identities[category] ?? { title: "Blandad inriktning", text: "Stadens policies är spridda över flera olika områden." };
}

function buildingLabel(value: string) {
    const labels: Record<string, string> = {
        GRUVA: "Gruva", LADUGARD: "Ladugård", LADA: "Lada", FISKEBRYGGA: "Fiskebrygga", SAGVERK: "Sågverk",
        STENHUGGERI: "Stenhuggeri", HANDELSCENTRUM: "Handelscentrum", BANK: "Bank", LABORATORIUM: "Laboratorium",
        KYRKA: "Kyrka", MARKNADSPLATS: "Marknadsplats", MONUMENT: "Monument", SLOTT: "Slott", UNDERVERK: "Underverk",
    };
    return labels[value] ?? formatCategory(value);
}

function kingOf(settlement: Settlement) {
    return settlement.members.find((member) => member.role === "KING")?.username ?? "Okänd";
}

function levelProgress(level: number) {
    return Math.max(4, Math.min(100, Math.round((level / 15) * 100)));
}

export function SettlementDirectory() {
    const [settlements, setSettlements] = useState<Settlement[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [query, setQuery] = useState("");
    const [category, setCategory] = useState("ALL");
    const [government, setGovernment] = useState("ALL");
    const [sortMode, setSortMode] = useState<SortMode>("level");
    const [selectedId, setSelectedId] = useState<string | null>(null);

    useEffect(() => {
        let cancelled = false;
        const directSettlementId = new URLSearchParams(window.location.search).get("settlement");
        if (directSettlementId) setSelectedId(directSettlementId);

        async function loadSettlements() {
            try {
                setLoading(true);
                setError(null);

                const response = await fetch("/api/settlements", { cache: "no-store" });
                const payload = (await response.json()) as ApiEnvelope;

                if (!response.ok || payload.status !== "SUCCESS" || !Array.isArray(payload.result)) {
                    const message = payload.message ?? payload.errors?.[0]?.message;
                    throw new Error(message ?? "Settlement-data kunde inte hämtas.");
                }

                const normalizedSettlements = payload.result.map((settlement) => ({
                    ...settlement,
                    governmentType: settlement.governmentType ?? "DICTATORSHIP",
                    maxPolicySlots: settlement.maxPolicySlots ?? 0,
                    activePolicies: Array.isArray(settlement.activePolicies) ? settlement.activePolicies : [],
                    warStatistics: settlement.warStatistics ?? { wins: 0, losses: 0, ticketDifferential: 0 },
                    outstandingWarDebt: settlement.outstandingWarDebt ?? 0,
                    companyCount: settlement.companyCount ?? 0,
                    territoryChunkCount: settlement.territoryChunkCount ?? 0,
                    alliances: Array.isArray(settlement.alliances) ? settlement.alliances : [],
                    members: Array.isArray(settlement.members) ? settlement.members : [],
                    buildings: Array.isArray(settlement.buildings) ? settlement.buildings : [],
                }));

                if (!cancelled) setSettlements(normalizedSettlements);
            } catch (loadError) {
                if (!cancelled) {
                    setError(loadError instanceof Error ? loadError.message : "Settlement-data kunde inte hämtas.");
                }
            } finally {
                if (!cancelled) setLoading(false);
            }
        }

        void loadSettlements();
        return () => {
            cancelled = true;
        };
    }, []);

    const categories = useMemo(
        () => [...new Set(settlements.map((settlement) => settlement.category))].sort(),
        [settlements],
    );

    const filteredSettlements = useMemo(() => {
        const normalizedQuery = query.trim().toLowerCase();
        const result = settlements.filter((settlement) => {
            const matchesCategory = category === "ALL" || settlement.category === category;
            const matchesGovernment = government === "ALL" || settlement.governmentType === government;
            const matchesQuery = normalizedQuery.length === 0
                || settlement.displayName.toLowerCase().includes(normalizedQuery)
                || kingOf(settlement).toLowerCase().includes(normalizedQuery)
                || settlement.members.some((member) => member.username.toLowerCase().includes(normalizedQuery));

            return matchesCategory && matchesGovernment && matchesQuery;
        });

        return result.sort((left, right) => {
            if (sortMode === "name") return left.displayName.localeCompare(right.displayName, "sv");
            if (sortMode === "members") return right.memberCount - left.memberCount;
            if (sortMode === "treasury") return (right.treasuryBalance ?? -1) - (left.treasuryBalance ?? -1);
            return right.level - left.level || right.memberCount - left.memberCount;
        });
    }, [settlements, query, category, government, sortMode]);

    const selectedSettlement = settlements.find((settlement) => settlement.settlementId === selectedId) ?? null;
    const featured = settlements.slice().sort((a, b) => b.level - a.level || b.memberCount - a.memberCount)[0] ?? null;

    const totals = useMemo(
        () => ({
            settlements: settlements.length,
            members: settlements.reduce((sum, settlement) => sum + settlement.memberCount, 0),
            buildings: settlements.reduce((sum, settlement) => sum + settlement.buildings.length, 0),
            highestLevel: settlements.reduce((highest, settlement) => Math.max(highest, settlement.level), 0),
        }),
        [settlements],
    );

    function closeSettlement() {
        setSelectedId(null);
        const url = new URL(window.location.href);
        if (url.searchParams.has("settlement")) {
            url.searchParams.delete("settlement");
            window.history.replaceState({}, "", `${url.pathname}${url.search}${url.hash}`);
        }
    }

    return (
        <div className={styles.page}>
            <section className={styles.hero}>
                <div className={styles.heroBackdrop} />
                <div className={styles.heroGlowOne} />
                <div className={styles.heroGlowTwo} />
                <img className={`${styles.floatingItem} ${styles.floatingPickaxe}`} src="/minecraft/items/diamond_pickaxe.png" alt="" />
                <img className={`${styles.floatingItem} ${styles.floatingEmerald}`} src="/minecraft/items/emerald.png" alt="" />
                <img className={`${styles.floatingItem} ${styles.floatingMap}`} src="/minecraft/items/filled_map.png" alt="" />

                <div className={styles.heroInner}>
                    <div className={styles.heroCopy}>
                        <span className={styles.eyebrow}>GAMEZONE WORLD</span>
                        <h1>Städer med <em>egen historia.</em></h1>
                        <p>Utforska serverns settlements, deras kungar, framsteg, invånare och växande territorier.</p>
                        <label className={styles.heroSearch}>
                            <span>⌕</span>
                            <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Sök settlement, kung eller spelare..." aria-label="Sök settlements" />
                            {query && <button type="button" onClick={() => setQuery("")} aria-label="Rensa sökning">×</button>}
                        </label>
                        <div className={styles.heroActions}>
                            <a href="#alla-settlements" className={styles.primaryAction}>Utforska städer</a>
                            <span className={styles.liveIndicator}><i /> Live från servern</span>
                        </div>
                    </div>

                    {!loading && !error && featured && (
                        <button type="button" className={styles.featuredCity} onClick={() => setSelectedId(featured.settlementId)}>
                            <div className={styles.featuredScene}>{artworkFor(featured.category).map((src, index) => <img key={src} src={src} alt="" data-position={index} />)}</div>
                            <div className={styles.featuredShade} />
                            <span className={styles.featuredLabel}>Ledande settlement</span>
                            <div className={styles.featuredBody}>
                                <img src={visualFor(featured.category).icon} alt="" />
                                <div>
                                    <span>{formatCategory(featured.category)}</span>
                                    <h2>{featured.displayName}</h2>
                                    <p>{featured.levelName}, nivå {featured.level}</p>
                                </div>
                            </div>
                            <div className={styles.featuredStats}>
                                <span><strong>{featured.memberCount}</strong> invånare</span>
                                <span><strong>{featured.buildings.length}</strong> byggnader</span>
                                <span><strong>{kingOf(featured)}</strong> kung</span>
                            </div>
                        </button>
                    )}
                </div>
            </section>

            {!loading && !error && (
                <section className={styles.worldStats}>
                    <div><img src="/minecraft/items/filled_map.png" alt="" /><span><strong>{totals.settlements}</strong> aktiva städer</span></div>
                    <div><img src="/minecraft/items/name_tag.png" alt="" /><span><strong>{totals.members}</strong> invånare</span></div>
                    <div><img src="/minecraft/items/brick.png" alt="" /><span><strong>{totals.buildings}</strong> byggnader</span></div>
                    <div><img src="/minecraft/items/golden_apple.png" alt="" /><span><strong>Nivå {totals.highestLevel}</strong> högsta stad</span></div>
                </section>
            )}

            <section className={styles.content} id="alla-settlements">
                <div className={styles.sectionIntro}>
                    <div>
                        <span className={styles.eyebrow}>VÄRLDENS STÄDER</span>
                        <h2>Hitta ditt nästa hem</h2>
                    </div>
                    <p>Varje settlement har sin egen kategori, ledning och väg mot att bli ett imperium.</p>
                </div>

                <div className={styles.toolbar}>
                    <label className={styles.searchField}>
                        <span>Sök</span>
                        <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Stad, kung eller spelare" />
                    </label>
                    <label className={styles.selectField}>
                        <span>Kategori</span>
                        <select value={category} onChange={(event) => setCategory(event.target.value)}>
                            <option value="ALL">Alla kategorier</option>
                            {categories.map((value) => <option key={value} value={value}>{formatCategory(value)}</option>)}
                        </select>
                    </label>
                    <label className={styles.selectField}>
                        <span>Statsskick</span>
                        <select value={government} onChange={(event) => setGovernment(event.target.value)}>
                            <option value="ALL">Alla statsskick</option>
                            <option value="DEMOCRACY">Demokrati</option>
                            <option value="DICTATORSHIP">Diktatur</option>
                        </select>
                    </label>
                    <label className={styles.selectField}>
                        <span>Sortera</span>
                        <select value={sortMode} onChange={(event) => setSortMode(event.target.value as SortMode)}>
                            <option value="level">Högsta nivå</option>
                            <option value="members">Flest invånare</option>
                            <option value="treasury">Störst stadskassa</option>
                            <option value="name">Namn</option>
                        </select>
                    </label>
                </div>

                {loading && <div className={styles.stateCard}>Hämtar settlements från servern...</div>}
                {error && <div className={styles.errorCard}><strong>Settlement-sidan är tillfälligt otillgänglig.</strong><span>{error}</span></div>}
                {!loading && !error && filteredSettlements.length === 0 && <div className={styles.stateCard}>Inga settlements matchar din sökning.</div>}

                {!loading && !error && filteredSettlements.length > 0 && (
                    <div className={styles.grid}>
                        {filteredSettlements.map((settlement, index) => {
                            const visual = visualFor(settlement.category);
                            return (
                                <button
                                    type="button"
                                    key={settlement.settlementId}
                                    className={styles.card}
                                    data-accent={visual.accent}
                                    onClick={() => setSelectedId(settlement.settlementId)}
                                >
                                    <div className={styles.cardArtwork}>
                                        <div className={styles.cardLandscape}>{artworkFor(settlement.category).map((src, artIndex) => <img key={src} src={src} alt="" data-position={artIndex} />)}</div>
                                        <img className={styles.cardIcon} src={visual.icon} alt="" />
                                        <span className={styles.rank}>#{index + 1}</span>
                                        <span className={styles.category}>{formatCategory(settlement.category)}</span>
                                        <div className={styles.levelBadge}><span>Nivå</span><strong>{settlement.level}</strong></div>
                                    </div>

                                    <div className={styles.cardContent}>
                                        <div className={styles.cardHeading}>
                                            <div><h3>{settlement.displayName}</h3><p>{settlement.levelName}</p></div>
                                            <span className={styles.arrow}>↗</span>
                                        </div>

                                        <div className={styles.kingRow}><span>Kung</span><strong>{kingOf(settlement)}</strong></div>
                                        <div className={styles.governmentRow} data-government={settlement.governmentType}>
                                            <span>Statsskick</span>
                                            <strong>{governmentLabel(settlement.governmentType)}</strong>
                                        </div>

                                        <div className={styles.cardPolicies}>
                                            <span>Policies</span>
                                            <div>
                                                {settlement.activePolicies.slice(0, 3).map((policy) => <b key={policy.key}>{policy.displayName}</b>)}
                                                {settlement.activePolicies.length === 0 && <em>Inga aktiva</em>}
                                            </div>
                                        </div>

                                        <div className={styles.progressBlock}>
                                            <div><span>Vägen mot Imperium</span><strong>{levelProgress(settlement.level)}%</strong></div>
                                            <div className={styles.progressTrack}><i style={{ width: `${levelProgress(settlement.level)}%` }} /></div>
                                        </div>

                                        <div className={styles.cardMetrics}>
                                            <div><img src="/minecraft/items/name_tag.png" alt="" /><span>Invånare</span><strong>{settlement.memberCount}</strong></div>
                                            <div><img src="/minecraft/items/brick.png" alt="" /><span>Byggnader</span><strong>{settlement.buildings.length}</strong></div>
                                            <div><img src="/minecraft/items/recovery_compass_22.png" alt="" /><span>Radie</span><strong>{settlement.territoryRadius}</strong></div>
                                        </div>
                                    </div>
                                </button>
                            );
                        })}
                    </div>
                )}
            </section>

            {selectedSettlement && (() => {
                const visual = visualFor(selectedSettlement.category);
                return (
                    <div className={styles.modalBackdrop} role="presentation" onMouseDown={closeSettlement}>
                        <section className={styles.modal} data-accent={visual.accent} role="dialog" aria-modal="true" aria-label={`${selectedSettlement.displayName} stadssida`} onMouseDown={(event) => event.stopPropagation()}>
                            <button type="button" className={styles.closeButton} onClick={closeSettlement} aria-label="Stäng">×</button>
                            <div className={styles.modalHero}>
                                <div className={styles.modalScene}>{artworkFor(selectedSettlement.category).map((src, index) => <img key={src} src={src} alt="" data-position={index} />)}</div>
                                <div className={styles.modalHeroShade} />
                                <img src={visual.icon} alt="" />
                                <div>
                                    <span>{formatCategory(selectedSettlement.category)}</span>
                                    <h2>{selectedSettlement.displayName}</h2>
                                    <p>Nivå {selectedSettlement.level}, {selectedSettlement.levelName}</p>
                                </div>
                            </div>

                            <div className={styles.identityStrip}>
                                <div>
                                    <span>Stadens inriktning</span>
                                    <strong>{settlementIdentity(selectedSettlement.activePolicies).title}</strong>
                                    <p>{settlementIdentity(selectedSettlement.activePolicies).text}</p>
                                </div>
                                <div className={styles.governmentBadge} data-government={selectedSettlement.governmentType}>
                                    <span>Statsskick</span>
                                    <strong>{governmentLabel(selectedSettlement.governmentType)}</strong>
                                </div>
                            </div>

                            <div className={styles.detailGrid}>
                                <div><img src="/minecraft/items/golden_helmet.png" alt="" /><span>Kung</span><PlayerLink username={kingOf(selectedSettlement)}>{kingOf(selectedSettlement)}</PlayerLink></div>
                                <div><img src="/minecraft/items/name_tag.png" alt="" /><span>Invånare</span><strong>{selectedSettlement.memberCount}</strong></div>
                                <div><img src="/minecraft/items/recovery_compass_22.png" alt="" /><span>Territorium</span><strong>{selectedSettlement.territoryChunkCount} chunks</strong></div>
                                <div><img src="/minecraft/items/emerald.png" alt="" /><span>Stadskassa</span><strong>{formatCoins(selectedSettlement.treasuryBalance)}</strong></div>
                                <div><img src="/minecraft/items/chest.png" alt="" /><span>Företag</span><strong>{selectedSettlement.companyCount}</strong></div>
                                <div><img src="/minecraft/items/clock_14.png" alt="" /><span>Grundat</span><strong>{formatDate(selectedSettlement.createdAt)}</strong></div>
                                <div><img src="/minecraft/items/brick.png" alt="" /><span>Byggnader</span><strong>{selectedSettlement.buildings.length}</strong></div>
                                <div><img src="/minecraft/items/golden_apple.png" alt="" /><span>Nästa uppgradering</span><strong>{selectedSettlement.nextUpgradeCost === 0 ? "Maxnivå" : formatCoins(selectedSettlement.nextUpgradeCost)}</strong></div>
                            </div>

                            <div className={styles.modalSection}>
                                <div className={styles.sectionHeading}><h3>Aktiva policies</h3><span>{selectedSettlement.activePolicies.length}/{selectedSettlement.maxPolicySlots}</span></div>
                                {selectedSettlement.activePolicies.length > 0 ? (
                                    <div className={styles.policyGrid}>
                                        {selectedSettlement.activePolicies.map((policy) => (
                                            <article key={policy.key} className={styles.policyCard} title={policy.description}>
                                                <span>{policy.category}</span>
                                                <strong>{policy.displayName}</strong>
                                                <p>{policy.description}</p>
                                            </article>
                                        ))}
                                    </div>
                                ) : <p className={styles.emptyText}>Inga aktiva policies.</p>}
                            </div>

                            {selectedSettlement.governmentType === "DEMOCRACY" && (
                                <div className={styles.modalSection}>
                                    <div className={styles.sectionHeading}><h3>Demokrati</h3><span>Politik</span></div>
                                    <div className={styles.governmentGrid}>
                                        <div><span>Pågående omröstning</span><strong>{selectedSettlement.currentVoteType ? (selectedSettlement.currentVoteType === "KING_ELECTION" ? "King-val" : "Folkomröstning") : "Ingen"}</strong></div>
                                        <div><span>Röster</span><strong>{selectedSettlement.currentVoteBallotsCast === null ? "-" : `${selectedSettlement.currentVoteBallotsCast}/${selectedSettlement.currentVoteEligibleVoters ?? 0}`}</strong></div>
                                        <div><span>Avslutas</span><strong>{selectedSettlement.currentVoteEndsAt ? formatDateTime(selectedSettlement.currentVoteEndsAt) : "-"}</strong></div>
                                        <div><span>Nytt King-val</span><strong>{selectedSettlement.electionCooldownUntil ? formatDateTime(selectedSettlement.electionCooldownUntil) : "Kan startas"}</strong></div>
                                    </div>
                                </div>
                            )}

                            <div className={styles.modalSection}>
                                <div className={styles.sectionHeading}><h3>Ledning</h3><span>{selectedSettlement.members.filter((member) => member.role === "KING" || member.role === "LORD").length}</span></div>
                                <div className={styles.memberList}>
                                    {selectedSettlement.members.filter((member) => member.role === "KING" || member.role === "LORD").map((member) => (
                                        <div key={member.playerId} className={styles.memberRow}>
                                            <span className={styles.avatar}>{member.username.slice(0, 1).toUpperCase()}</span>
                                            <PlayerLink username={member.username}>{member.username}</PlayerLink>
                                            <span data-role={member.role}>{roleLabel(member.role)}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className={styles.modalSection}>
                                <div className={styles.sectionHeading}><h3>Krig</h3><span>{selectedSettlement.warStatistics.wins + selectedSettlement.warStatistics.losses} avgjorda</span></div>
                                <div className={styles.warGrid}>
                                    <div><span>Vinster</span><strong>{selectedSettlement.warStatistics.wins}</strong></div>
                                    <div><span>Förluster</span><strong>{selectedSettlement.warStatistics.losses}</strong></div>
                                    <div><span>Winrate</span><strong>{selectedSettlement.warStatistics.wins + selectedSettlement.warStatistics.losses === 0 ? "-" : `${Math.round((selectedSettlement.warStatistics.wins / (selectedSettlement.warStatistics.wins + selectedSettlement.warStatistics.losses)) * 100)}%`}</strong></div>
                                    <div className={selectedSettlement.outstandingWarDebt > 0 ? styles.debtMetric : ""}><span>Krigsskuld</span><strong>{formatCoins(selectedSettlement.outstandingWarDebt)}</strong></div>
                                </div>
                            </div>

                            <div className={styles.modalSection}>
                                <div className={styles.sectionHeading}><h3>Allianser</h3><span>{selectedSettlement.alliances.length}</span></div>
                                {selectedSettlement.alliances.length > 0 ? (
                                    <div className={styles.allianceList}>
                                        {selectedSettlement.alliances.map((ally) => <span key={ally.settlementId}><strong>{ally.displayName}</strong><small>Nivå {ally.level}, {ally.levelName}</small></span>)}
                                    </div>
                                ) : <p className={styles.emptyText}>Settlementet har inga aktiva allianser.</p>}
                            </div>

                            <div className={styles.modalSection}>
                                <div className={styles.sectionHeading}><h3>Invånare</h3><span>{selectedSettlement.members.length}</span></div>
                                <div className={styles.memberList}>
                                    {selectedSettlement.members.map((member) => (
                                        <div key={member.playerId} className={styles.memberRow}>
                                            <span className={styles.avatar}>{member.username.slice(0, 1).toUpperCase()}</span>
                                            <PlayerLink username={member.username}>{member.username}</PlayerLink>
                                            <span data-role={member.role}>{member.title ?? roleLabel(member.role)}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className={styles.modalSection}>
                                <div className={styles.sectionHeading}><h3>Byggnader</h3><span>{selectedSettlement.buildings.length}</span></div>
                                {selectedSettlement.buildings.length > 0 ? (
                                    <div className={styles.buildingList}>
                                        {selectedSettlement.buildings.map((building) => (
                                            <span key={building.buildingId} data-notable={["BANK", "LABORATORIUM", "SLOTT", "UNDERVERK", "MONUMENT"].includes(building.buildingType) ? "true" : "false"}><img src="/minecraft/items/brick.png" alt="" />{buildingLabel(building.buildingType)}</span>
                                        ))}
                                    </div>
                                ) : <p className={styles.emptyText}>Inga registrerade byggnader ännu.</p>}
                            </div>
                        </section>
                    </div>
                );
            })()}
        </div>
    );
}
