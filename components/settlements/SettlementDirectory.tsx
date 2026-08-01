"use client";

import { useEffect, useMemo, useState } from "react";
import styles from "./SettlementDirectory.module.css";

type SettlementMember = {
    playerId: string;
    username: string;
    role: string;
    joinedAt: string;
};

type SettlementBuilding = {
    buildingId: string;
    buildingType: string;
    registeredAt: string;
    registeredSettlementLevel: number;
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
    weeklyMaintenanceCost: number;
    serverTaxBasisPoints: number | null;
    productionTaxBasisPoints: number;
    productionTaxPercentage: number;
    productionTaxUpdatedAt: string;
    productionTaxUpdatedBy: string | null;
    treasuryBalance: number | null;
    totalTaxCollected: number;
    memberCount: number;
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

function sceneFor(category: string) {
    const normalized = category.toUpperCase();
    if (normalized === "FARMING" || normalized === "AGRICULTURE") return "farming";
    if (normalized === "MINING") return "mining";
    if (normalized === "FORESTRY") return "forestry";
    if (normalized === "FISHING") return "fishing";
    if (normalized === "HUNTING") return "hunting";
    if (normalized === "INDUSTRY") return "industry";
    if (normalized === "TRADE" || normalized === "COMMERCE") return "trade";
    return "settlement";
}

function roleLabel(role: string) {
    if (role === "KING") return "Kung";
    if (role === "LORD") return "Lord";
    return "Medlem";
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
    const [sortMode, setSortMode] = useState<SortMode>("level");
    const [selectedId, setSelectedId] = useState<string | null>(null);

    useEffect(() => {
        let cancelled = false;

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

                if (!cancelled) setSettlements(payload.result);
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
            const matchesQuery = normalizedQuery.length === 0
                || settlement.displayName.toLowerCase().includes(normalizedQuery)
                || kingOf(settlement).toLowerCase().includes(normalizedQuery)
                || settlement.members.some((member) => member.username.toLowerCase().includes(normalizedQuery));

            return matchesCategory && matchesQuery;
        });

        return result.sort((left, right) => {
            if (sortMode === "name") return left.displayName.localeCompare(right.displayName, "sv");
            if (sortMode === "members") return right.memberCount - left.memberCount;
            if (sortMode === "treasury") return (right.treasuryBalance ?? -1) - (left.treasuryBalance ?? -1);
            return right.level - left.level || right.memberCount - left.memberCount;
        });
    }, [settlements, query, category, sortMode]);

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
                        <div className={styles.heroActions}>
                            <a href="#alla-settlements" className={styles.primaryAction}>Utforska städer</a>
                            <span className={styles.liveIndicator}><i /> Live från servern</span>
                        </div>
                    </div>

                    {!loading && !error && featured && (
                        <button type="button" className={styles.featuredCity} data-scene={sceneFor(featured.category)} onClick={() => setSelectedId(featured.settlementId)}>
                            <div className={styles.featuredScene}><i /><b /><em /></div>
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
                                    data-scene={sceneFor(settlement.category)}
                                    onClick={() => setSelectedId(settlement.settlementId)}
                                >
                                    <div className={styles.cardArtwork}>
                                        <div className={styles.cardLandscape}><i /><b /><em /></div>
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
                    <div className={styles.modalBackdrop} role="presentation" onMouseDown={() => setSelectedId(null)}>
                        <section className={styles.modal} data-accent={visual.accent} data-scene={sceneFor(selectedSettlement.category)} role="dialog" aria-modal="true" aria-label={`${selectedSettlement.displayName} stadssida`} onMouseDown={(event) => event.stopPropagation()}>
                            <button type="button" className={styles.closeButton} onClick={() => setSelectedId(null)} aria-label="Stäng">×</button>
                            <div className={styles.modalHero}>
                                <div className={styles.modalScene}><i /><b /><em /></div>
                                <div className={styles.modalHeroShade} />
                                <img src={visual.icon} alt="" />
                                <div>
                                    <span>{formatCategory(selectedSettlement.category)}</span>
                                    <h2>{selectedSettlement.displayName}</h2>
                                    <p>Nivå {selectedSettlement.level}, {selectedSettlement.levelName}</p>
                                </div>
                            </div>

                            <div className={styles.detailGrid}>
                                <div><img src="/minecraft/items/golden_helmet.png" alt="" /><span>Kung</span><strong>{kingOf(selectedSettlement)}</strong></div>
                                <div><img src="/minecraft/items/name_tag.png" alt="" /><span>Invånare</span><strong>{selectedSettlement.memberCount}</strong></div>
                                <div><img src="/minecraft/items/recovery_compass_22.png" alt="" /><span>Territorieradie</span><strong>{selectedSettlement.territoryRadius}</strong></div>
                                <div><img src="/minecraft/items/emerald.png" alt="" /><span>Stadskassa</span><strong>{formatCoins(selectedSettlement.treasuryBalance)}</strong></div>
                                <div><img src="/minecraft/items/clock_14.png" alt="" /><span>Veckounderhåll</span><strong>{formatCoins(selectedSettlement.weeklyMaintenanceCost)}</strong></div>
                                <div><img src="/minecraft/items/golden_apple.png" alt="" /><span>Nästa uppgradering</span><strong>{selectedSettlement.nextUpgradeCost === 0 ? "Maxnivå" : formatCoins(selectedSettlement.nextUpgradeCost)}</strong></div>
                            </div>

                            <div className={styles.modalSection}>
                                <div className={styles.sectionHeading}><h3>Invånare</h3><span>{selectedSettlement.members.length}</span></div>
                                <div className={styles.memberList}>
                                    {selectedSettlement.members.map((member) => (
                                        <div key={member.playerId} className={styles.memberRow}>
                                            <span className={styles.avatar}>{member.username.slice(0, 1).toUpperCase()}</span>
                                            <strong>{member.username}</strong>
                                            <span data-role={member.role}>{roleLabel(member.role)}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className={styles.modalSection}>
                                <div className={styles.sectionHeading}><h3>Byggnader</h3><span>{selectedSettlement.buildings.length}</span></div>
                                {selectedSettlement.buildings.length > 0 ? (
                                    <div className={styles.buildingList}>
                                        {selectedSettlement.buildings.map((building) => (
                                            <span key={building.buildingId}><img src="/minecraft/items/brick.png" alt="" />{formatCategory(building.buildingType)}</span>
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
