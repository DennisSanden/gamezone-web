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

const coinFormatter = new Intl.NumberFormat("sv-SE");

function formatCoins(value: number | null | undefined) {
    if (value === null || value === undefined) return "Dold";
    return `${coinFormatter.format(value)} coins`;
}

function formatCategory(category: string) {
    return category
        .toLowerCase()
        .replaceAll("_", " ")
        .replace(/^./, (letter) => letter.toUpperCase());
}

function roleLabel(role: string) {
    if (role === "KING") return "Kung";
    if (role === "LORD") return "Lord";
    return "Medlem";
}

function kingOf(settlement: Settlement) {
    return settlement.members.find((member) => member.role === "KING")?.username ?? "Okänd";
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

                if (!cancelled) {
                    setSettlements(payload.result);
                }
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
            const matchesQuery =
                normalizedQuery.length === 0 ||
                settlement.displayName.toLowerCase().includes(normalizedQuery) ||
                kingOf(settlement).toLowerCase().includes(normalizedQuery) ||
                settlement.members.some((member) => member.username.toLowerCase().includes(normalizedQuery));

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

    const totals = useMemo(
        () => ({
            settlements: settlements.length,
            members: settlements.reduce((sum, settlement) => sum + settlement.memberCount, 0),
            buildings: settlements.reduce((sum, settlement) => sum + settlement.buildings.length, 0),
        }),
        [settlements],
    );

    return (
        <div className={styles.page}>
            <section className={styles.hero}>
                <div className={styles.heroInner}>
                    <span className={styles.eyebrow}>GAMEZONE WORLD</span>
                    <h1>Settlements</h1>
                    <p>Utforska serverns städer, deras ledare, utveckling, ekonomi och byggnader.</p>

                    {!loading && !error && (
                        <div className={styles.stats}>
                            <div><strong>{totals.settlements}</strong><span>städer</span></div>
                            <div><strong>{totals.members}</strong><span>invånare</span></div>
                            <div><strong>{totals.buildings}</strong><span>byggnader</span></div>
                        </div>
                    )}
                </div>
            </section>

            <section className={styles.content}>
                <div className={styles.toolbar}>
                    <label className={styles.searchField}>
                        <span>Sök</span>
                        <input
                            value={query}
                            onChange={(event) => setQuery(event.target.value)}
                            placeholder="Stad, kung eller spelare"
                        />
                    </label>

                    <label className={styles.selectField}>
                        <span>Kategori</span>
                        <select value={category} onChange={(event) => setCategory(event.target.value)}>
                            <option value="ALL">Alla kategorier</option>
                            {categories.map((value) => (
                                <option key={value} value={value}>{formatCategory(value)}</option>
                            ))}
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

                {error && (
                    <div className={styles.errorCard}>
                        <strong>Settlement-sidan är tillfälligt otillgänglig.</strong>
                        <span>{error}</span>
                    </div>
                )}

                {!loading && !error && filteredSettlements.length === 0 && (
                    <div className={styles.stateCard}>Inga settlements matchar din sökning.</div>
                )}

                {!loading && !error && filteredSettlements.length > 0 && (
                    <div className={styles.grid}>
                        {filteredSettlements.map((settlement, index) => (
                            <button
                                type="button"
                                key={settlement.settlementId}
                                className={styles.card}
                                onClick={() => setSelectedId(settlement.settlementId)}
                            >
                                <div className={styles.cardTopline}>
                                    <span className={styles.rank}>#{index + 1}</span>
                                    <span className={styles.category}>{formatCategory(settlement.category)}</span>
                                </div>

                                <div className={styles.cardHeading}>
                                    <div>
                                        <h2>{settlement.displayName}</h2>
                                        <p>{settlement.levelName}</p>
                                    </div>
                                    <div className={styles.levelBadge}>
                                        <span>Nivå</span>
                                        <strong>{settlement.level}</strong>
                                    </div>
                                </div>

                                <div className={styles.kingRow}>
                                    <span>Kung</span>
                                    <strong>{kingOf(settlement)}</strong>
                                </div>

                                <div className={styles.cardMetrics}>
                                    <div><span>Invånare</span><strong>{settlement.memberCount}</strong></div>
                                    <div><span>Byggnader</span><strong>{settlement.buildings.length}</strong></div>
                                    <div><span>Radie</span><strong>{settlement.territoryRadius}</strong></div>
                                </div>

                                <div className={styles.treasuryRow}>
                                    <span>Stadskassa</span>
                                    <strong>{formatCoins(settlement.treasuryBalance)}</strong>
                                </div>

                                <span className={styles.detailsLink}>Visa stadssida</span>
                            </button>
                        ))}
                    </div>
                )}
            </section>

            {selectedSettlement && (
                <div className={styles.modalBackdrop} role="presentation" onMouseDown={() => setSelectedId(null)}>
                    <section
                        className={styles.modal}
                        role="dialog"
                        aria-modal="true"
                        aria-label={`${selectedSettlement.displayName} stadssida`}
                        onMouseDown={(event) => event.stopPropagation()}
                    >
                        <button type="button" className={styles.closeButton} onClick={() => setSelectedId(null)} aria-label="Stäng">
                            ×
                        </button>

                        <div className={styles.modalHeader}>
                            <span>{formatCategory(selectedSettlement.category)}</span>
                            <h2>{selectedSettlement.displayName}</h2>
                            <p>Nivå {selectedSettlement.level}, {selectedSettlement.levelName}</p>
                        </div>

                        <div className={styles.detailGrid}>
                            <div><span>Kung</span><strong>{kingOf(selectedSettlement)}</strong></div>
                            <div><span>Invånare</span><strong>{selectedSettlement.memberCount}</strong></div>
                            <div><span>Territorieradie</span><strong>{selectedSettlement.territoryRadius}</strong></div>
                            <div><span>Veckounderhåll</span><strong>{formatCoins(selectedSettlement.weeklyMaintenanceCost)}</strong></div>
                            <div><span>Nästa uppgradering</span><strong>{selectedSettlement.nextUpgradeCost === 0 ? "Maxnivå" : formatCoins(selectedSettlement.nextUpgradeCost)}</strong></div>
                            <div><span>Produktionsskatt</span><strong>{selectedSettlement.productionTaxPercentage} %</strong></div>
                            <div><span>Stadskassa</span><strong>{formatCoins(selectedSettlement.treasuryBalance)}</strong></div>
                        </div>

                        <div className={styles.modalSection}>
                            <div className={styles.sectionHeading}>
                                <h3>Invånare</h3>
                                <span>{selectedSettlement.members.length}</span>
                            </div>
                            <div className={styles.memberList}>
                                {selectedSettlement.members.map((member) => (
                                    <div key={member.playerId} className={styles.memberRow}>
                                        <strong>{member.username}</strong>
                                        <span data-role={member.role}>{roleLabel(member.role)}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className={styles.modalSection}>
                            <div className={styles.sectionHeading}>
                                <h3>Byggnader</h3>
                                <span>{selectedSettlement.buildings.length}</span>
                            </div>
                            {selectedSettlement.buildings.length > 0 ? (
                                <div className={styles.buildingList}>
                                    {selectedSettlement.buildings.map((building) => (
                                        <span key={building.buildingId}>{formatCategory(building.buildingType)}</span>
                                    ))}
                                </div>
                            ) : (
                                <p className={styles.emptyText}>Inga registrerade byggnader ännu.</p>
                            )}
                        </div>
                    </section>
                </div>
            )}
        </div>
    );
}
