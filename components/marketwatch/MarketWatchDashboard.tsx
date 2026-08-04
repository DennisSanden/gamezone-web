"use client";

import { useEffect, useMemo, useState } from "react";
import { parseCompanySales, parseMarketWatch, type MarketCompanySale, type MarketItem, type MarketWatchPayload } from "@/lib/marketwatch-data";
import { ItemIcon } from "./ItemIcon";
import styles from "./MarketWatchDashboard.module.css";

type SortKey = "shortage" | "projectedNeed" | "stock" | "latestUnitPrice" | "soldUnits" | "name";
const levelLabel = { critical: "Kritisk brist", high: "Mycket hög", rising: "Ökande", stable: "Stabil", surplus: "Överskott" };
const formatNumber = (value: number) => new Intl.NumberFormat("sv-SE").format(Math.round(value));
const formatCoins = (value: number) => value > 0 ? `${formatNumber(value)} C` : "Ingen data";

export function MarketWatchDashboard() {
    const [items, setItems] = useState<MarketItem[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [query, setQuery] = useState("");
    const [category, setCategory] = useState("Alla");
    const [sort, setSort] = useState<SortKey>("shortage");
    const [onlyShortage, setOnlyShortage] = useState(false);
    const [selectedItem, setSelectedItem] = useState<MarketItem | null>(null);
    const [companySales, setCompanySales] = useState<MarketCompanySale[]>([]);
    const [companySalesLoading, setCompanySalesLoading] = useState(false);

    useEffect(() => {
        let cancelled = false;
        async function load() {
            try {
                const response = await fetch("/api/marketwatch", { cache: "no-store" });
                const payload = await response.json() as MarketWatchPayload;
                if (!response.ok || payload.status === "FAILED" || payload.status === "INTERNAL_ERROR") {
                    throw new Error(payload.errors?.[0]?.message || "MarketWatch kunde inte laddas.");
                }
                if (!cancelled) setItems(parseMarketWatch(payload));
            } catch (cause) {
                if (!cancelled) setError(cause instanceof Error ? cause.message : "MarketWatch kunde inte laddas.");
            } finally {
                if (!cancelled) setLoading(false);
            }
        }
        void load();
        return () => { cancelled = true; };
    }, []);

    useEffect(() => {
        if (!selectedItem) { setCompanySales([]); return; }
        let cancelled = false;
        setCompanySalesLoading(true);
        fetch(`/api/marketwatch/item-companies?item=${encodeURIComponent(selectedItem.minecraftId.toUpperCase())}`, { cache: "no-store" })
            .then(async response => {
                const payload = await response.json() as MarketWatchPayload;
                if (!response.ok) throw new Error(payload.errors?.[0]?.message || "Kunde inte hämta företag.");
                if (!cancelled) setCompanySales(parseCompanySales(payload));
            })
            .catch(() => { if (!cancelled) setCompanySales([]); })
            .finally(() => { if (!cancelled) setCompanySalesLoading(false); });
        return () => { cancelled = true; };
    }, [selectedItem]);

    const categories = useMemo(() => ["Alla", ...Array.from(new Set(items.map(item => item.category))).sort((a, b) => a.localeCompare(b, "sv"))], [items]);
    const filteredItems = useMemo(() => {
        const normalized = query.trim().toLowerCase();
        return items
            .filter(item => category === "Alla" || item.category === category)
            .filter(item => !onlyShortage || item.shortage > 0)
            .filter(item => !normalized || `${item.name} ${item.category} ${item.minecraftId}`.toLowerCase().includes(normalized))
            .sort((a, b) => sort === "name" ? a.name.localeCompare(b.name, "sv") : b[sort] - a[sort]);
    }, [category, items, onlyShortage, query, sort]);

    if (loading) return <div className={styles.dashboard}><section className={styles.marketPulse}><h2>Läser riktig marknadsdata...</h2></section></div>;
    if (error) return <div className={styles.dashboard}><section className={styles.marketPulse}><h2>MarketWatch är tillfälligt offline</h2><p>{error}</p><p>Ingen dummy-data visas.</p></section></div>;
    if (items.length === 0) return <div className={styles.dashboard}><section className={styles.marketPulse}><h2>Ingen marknadsdata ännu</h2><p>Engine svarade korrekt, men det finns ännu inga behov, annonser eller köp att visa.</p></section></div>;

    const critical = items.filter(item => item.level === "critical").length;
    const totalShortage = items.reduce((sum, item) => sum + item.shortage, 0);
    const soldUnits = items.reduce((sum, item) => sum + item.soldUnits, 0);
    const activeListings = items.reduce((sum, item) => sum + item.activeListings, 0);
    const spotlight = [...items].sort((a, b) => b.shortage - a.shortage).slice(0, 3);

    return <div className={styles.dashboard}>
        <section className={styles.marketPulse}>
            <div className={styles.pulseHeader}><div><span className={styles.liveBadge}><i /> Data från GameZone Engine</span><h2>Serverns ekonomiska puls</h2><p>Behov, registrerat lager, annonser och genomförda köp. Inget låtsaslager, inga fejkpriser.</p></div></div>
            <div className={styles.statGrid}>
                <article><span>Kritiska resurser</span><strong>{critical}</strong><small>kräver omedelbar produktion</small></article>
                <article><span>Total brist</span><strong>{formatNumber(totalShortage)}</strong><small>behov minus registrerat lager</small></article>
                <article><span>Sålda enheter 24h</span><strong>{formatNumber(soldUnits)}</strong><small>verkliga genomförda köp</small></article>
                <article><span>Aktiva annonser</span><strong>{formatNumber(activeListings)}</strong><small>registrerade Shopping Chests</small></article>
            </div>
        </section>

        <section className={styles.spotlight}><div className={styles.sectionTitle}><div><span>MARKET INTELLIGENCE</span><h2>Största möjligheterna just nu</h2></div><p>Resurser där verkligt behov tydligast överstiger registrerat lager.</p></div><div className={styles.spotlightGrid}>{spotlight.map((item, index) => <button key={item.id} className={styles.spotlightCard} onClick={() => setSelectedItem(item)}><div className={styles.rank}>0{index + 1}</div><div className={styles.itemIcon}><ItemIcon itemId={item.minecraftId} itemName={item.name} size={48} /></div><div className={styles.spotlightCopy}><span>{item.category}</span><strong>{item.name}</strong><small>{formatNumber(item.shortage)} items i brist</small></div><div className={styles.spotlightPrice}><span>Senaste pris</span><strong>{formatCoins(item.latestUnitPrice)}</strong><small>{item.activeListings} annonser</small></div></button>)}</div></section>

        <section className={styles.exchange}><div className={styles.exchangeHeader}><div><span className={styles.kicker}>GAMEZONE MARKET EXCHANGE</span><h2>Alla marknadsvaror</h2><p>Data räknas av Engine från settlementkrav, registrerade inventory-kistor och handel.</p></div><div className={styles.formula}><span>Behov</span><b>−</b><span>Lager</span><b>=</b><strong>Brist</strong></div></div>
            <div className={styles.toolbar}><label className={styles.searchBox}><span>⌕</span><input value={query} onChange={event => setQuery(event.target.value)} placeholder="Sök item eller kategori..." />{query && <button type="button" onClick={() => setQuery("")}>×</button>}</label><select value={sort} onChange={event => setSort(event.target.value as SortKey)}><option value="shortage">Störst brist</option><option value="projectedNeed">Störst behov</option><option value="stock">Störst lager</option><option value="latestUnitPrice">Senaste pris</option><option value="soldUnits">Mest såld</option><option value="name">Namn A–Ö</option></select><button className={`${styles.shortageToggle} ${onlyShortage ? styles.active : ""}`} onClick={() => setOnlyShortage(value => !value)}><i /> Endast brist</button></div>
            <div className={styles.categoryBar}>{categories.map(item => <button key={item} className={category === item ? styles.activeCategory : ""} onClick={() => setCategory(item)}>{item}</button>)}</div>
            <div className={styles.resultMeta}><span><strong>{filteredItems.length}</strong> av {items.length} items</span><span>Uppgifterna kommer direkt från GameZone Engine</span></div>
            <div className={styles.tableWrap}><table><thead><tr><th>Item</th><th>Status</th><th>Senaste pris</th><th>Annonser</th><th>Sålt 24h</th><th>Behov / lager</th><th>Brist</th><th>Settlements</th></tr></thead><tbody>{filteredItems.map(item => { const fill = Math.min(100, item.stock / Math.max(1, item.projectedNeed) * 100); return <tr key={item.id} onClick={() => setSelectedItem(item)}><td><div className={styles.itemCell}><span className={styles.smallIcon}><ItemIcon itemId={item.minecraftId} itemName={item.name} /></span><div><strong>{item.name}</strong><small>minecraft:{item.minecraftId}</small></div></div></td><td><span className={`${styles.status} ${styles[item.level]}`}>{levelLabel[item.level]}</span></td><td className={styles.coin}>{formatCoins(item.latestUnitPrice)}</td><td><span className={styles.offerCount}>{item.activeListings} st</span></td><td>{formatNumber(item.soldUnits)}</td><td><div className={styles.supply}><span>{formatNumber(item.projectedNeed)} / {formatNumber(item.stock)}</span><div><i style={{ width: `${fill}%` }} /></div></div></td><td className={item.shortage > 0 ? styles.shortage : styles.muted}>{item.shortage > 0 ? `−${formatNumber(item.shortage)}` : "Täckt"}</td><td>{formatNumber(item.contributingSettlements)}</td></tr>; })}</tbody></table></div>
        </section>

        {selectedItem && <div className={styles.modalBackdrop} onMouseDown={() => setSelectedItem(null)}><article className={styles.modal} onMouseDown={event => event.stopPropagation()}><button className={styles.close} onClick={() => setSelectedItem(null)}>×</button><div className={styles.modalHero}><div className={styles.largeIcon}><ItemIcon itemId={selectedItem.minecraftId} itemName={selectedItem.name} size={48} /></div><div><span>{selectedItem.category}</span><h2>{selectedItem.name}</h2><div className={`${styles.status} ${styles[selectedItem.level]}`}>{levelLabel[selectedItem.level]}</div></div></div><div className={styles.modalPrice}><div><span>Beräknat behov</span><strong>{formatNumber(selectedItem.projectedNeed)}</strong></div><div><span>Registrerat lager</span><strong>{formatNumber(selectedItem.stock)}</strong></div><div><span>Beräknad brist</span><strong>{formatNumber(selectedItem.shortage)}</strong></div><div><span>Aktiva annonser</span><strong>{formatNumber(selectedItem.activeListings)}</strong></div><div><span>Snittpris 24h</span><strong>{formatCoins(selectedItem.averageUnitPrice)}</strong></div><div><span>Senaste pris</span><strong>{formatCoins(selectedItem.latestUnitPrice)}</strong></div><div><span>Sålda enheter 24h</span><strong>{formatNumber(selectedItem.soldUnits)}</strong></div><div><span>Genomförda köp</span><strong>{formatNumber(selectedItem.transactionCount)}</strong></div></div><section className={styles.companySales}><div className={styles.companySalesHeader}><div><span>SENASTE 7 DAGARNA</span><h3>Företag som sålt {selectedItem.name}</h3></div><small>Sorterat efter sålda enheter</small></div>{companySalesLoading ? <p className={styles.companySalesEmpty}>Hämtar försäljningar...</p> : companySales.length === 0 ? <p className={styles.companySalesEmpty}>Inget företag har sålt varan under den senaste veckan.</p> : <div className={styles.companySalesList}>{companySales.map((sale, index) => <a key={sale.companyId} href={`/companies/${sale.companyId}`} className={styles.companySaleRow}><span className={styles.companyRank}>{index + 1}</span><div><strong>{sale.companyName}</strong><small>{formatNumber(sale.transactionCount)} affärer · {formatCoins(sale.totalTurnover)} omsättning</small></div><div><strong>{formatNumber(sale.soldUnits)} st</strong><small>Senast {formatCoins(sale.latestUnitPrice)}</small></div></a>)}</div>}</section></article></div>}
    </div>;
}
