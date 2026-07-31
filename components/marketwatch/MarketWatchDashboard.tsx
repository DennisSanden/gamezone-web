"use client";

import { useMemo, useState } from "react";
import { marketCategories, marketItems, type MarketItem } from "@/lib/marketwatch-data";
import styles from "./MarketWatchDashboard.module.css";

type SortKey = "shortage" | "sellPrice" | "change24h" | "volume24h" | "name";

const levelLabel = {
    critical: "Kritisk brist",
    high: "Mycket hög",
    rising: "Ökande",
    stable: "Stabil",
    surplus: "Överskott",
};

const formatNumber = (value: number) => new Intl.NumberFormat("sv-SE").format(value);

function Sparkline({ item }: { item: MarketItem }) {
    const min = Math.min(...item.history);
    const max = Math.max(...item.history);
    const range = Math.max(1, max - min);
    const points = item.history
        .map((value, index) => `${(index / (item.history.length - 1)) * 100},${26 - ((value - min) / range) * 22}`)
        .join(" ");

    return (
        <svg className={`${styles.sparkline} ${styles[item.trend]}`} viewBox="0 0 100 28" preserveAspectRatio="none" aria-label={`Prisutveckling för ${item.name}`}>
            <polyline points={points} fill="none" vectorEffect="non-scaling-stroke" />
        </svg>
    );
}

export function MarketWatchDashboard() {
    const [query, setQuery] = useState("");
    const [category, setCategory] = useState("Alla");
    const [sort, setSort] = useState<SortKey>("shortage");
    const [onlyShortage, setOnlyShortage] = useState(false);
    const [selectedItem, setSelectedItem] = useState<MarketItem | null>(null);

    const filteredItems = useMemo(() => {
        const normalized = query.trim().toLowerCase();
        return marketItems
            .filter((item) => category === "Alla" || item.category === category)
            .filter((item) => !onlyShortage || item.shortage > 0)
            .filter((item) => !normalized || `${item.name} ${item.category}`.toLowerCase().includes(normalized))
            .sort((a, b) => {
                if (sort === "name") return a.name.localeCompare(b.name, "sv");
                return b[sort] - a[sort];
            });
    }, [category, onlyShortage, query, sort]);

    const critical = marketItems.filter((item) => item.level === "critical").length;
    const totalShortage = marketItems.reduce((sum, item) => sum + item.shortage, 0);
    const volume = marketItems.reduce((sum, item) => sum + item.volume24h, 0);
    const hottest = [...marketItems].sort((a, b) => b.change24h - a.change24h)[0];
    const spotlight = [...marketItems].sort((a, b) => b.shortage - a.shortage).slice(0, 3);

    return (
        <div className={styles.dashboard}>
            <section className={styles.marketPulse}>
                <div className={styles.pulseHeader}>
                    <div>
                        <span className={styles.liveBadge}><i /> Marknaden live</span>
                        <h2>Serverns ekonomiska puls</h2>
                        <p>Behov minus lager visar exakt vad GameZone behöver just nu.</p>
                    </div>
                    <div className={styles.sync}>Senast synkad <strong>nu</strong></div>
                </div>

                <div className={styles.statGrid}>
                    <article><span>Kritiska resurser</span><strong>{critical}</strong><small>kräver omedelbar produktion</small></article>
                    <article><span>Total brist</span><strong>{formatNumber(totalShortage)}</strong><small>items saknas i settlements</small></article>
                    <article><span>Handelsvolym 24h</span><strong>{formatNumber(volume)}</strong><small>registrerade items</small></article>
                    <article><span>Hetast just nu</span><strong>{hottest.name}</strong><small className={styles.positive}>+{hottest.change24h}% pris</small></article>
                </div>
            </section>

            <section className={styles.spotlight}>
                <div className={styles.sectionTitle}>
                    <div><span>MARKET INTELLIGENCE</span><h2>Största möjligheterna just nu</h2></div>
                    <p>Resurser där efterfrågan tydligast överstiger serverns lager.</p>
                </div>
                <div className={styles.spotlightGrid}>
                    {spotlight.map((item, index) => (
                        <button key={item.id} className={styles.spotlightCard} onClick={() => setSelectedItem(item)}>
                            <div className={styles.rank}>0{index + 1}</div>
                            <div className={styles.itemIcon}>{item.icon}</div>
                            <div className={styles.spotlightCopy}>
                                <span>{item.category}</span>
                                <strong>{item.name}</strong>
                                <small>{formatNumber(item.shortage)} items i brist</small>
                            </div>
                            <div className={styles.spotlightPrice}>
                                <span>Säljpris</span>
                                <strong>{item.sellPrice} C</strong>
                                <small className={item.change24h >= 0 ? styles.positive : styles.negative}>{item.change24h >= 0 ? "+" : ""}{item.change24h}%</small>
                            </div>
                        </button>
                    ))}
                </div>
            </section>

            <section className={styles.exchange}>
                <div className={styles.exchangeHeader}>
                    <div>
                        <span className={styles.kicker}>GAMEZONE MARKET EXCHANGE</span>
                        <h2>Alla marknadsvaror</h2>
                        <p>Sök, jämför priser och hitta vad som är mest lönsamt att producera.</p>
                    </div>
                    <div className={styles.formula}><span>Behov</span><b>−</b><span>Lager</span><b>=</b><strong>Brist</strong></div>
                </div>

                <div className={styles.toolbar}>
                    <label className={styles.searchBox}>
                        <span>⌕</span>
                        <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Sök item, kategori eller resurs..." />
                        {query && <button type="button" onClick={() => setQuery("")}>×</button>}
                    </label>
                    <select value={sort} onChange={(event) => setSort(event.target.value as SortKey)} aria-label="Sortera marknaden">
                        <option value="shortage">Störst brist</option>
                        <option value="sellPrice">Högst pris</option>
                        <option value="change24h">Störst prisökning</option>
                        <option value="volume24h">Mest handlad</option>
                        <option value="name">Namn A–Ö</option>
                    </select>
                    <button className={`${styles.shortageToggle} ${onlyShortage ? styles.active : ""}`} onClick={() => setOnlyShortage((value) => !value)}>
                        <i /> Endast brist
                    </button>
                </div>

                <div className={styles.categoryBar}>
                    {marketCategories.map((item) => (
                        <button key={item} className={category === item ? styles.activeCategory : ""} onClick={() => setCategory(item)}>
                            {item}
                        </button>
                    ))}
                </div>

                <div className={styles.resultMeta}>
                    <span><strong>{filteredItems.length}</strong> av {marketItems.length} items</span>
                    <span>Priser anges i Coins per item</span>
                </div>

                <div className={styles.tableWrap}>
                    <table>
                        <thead><tr><th>Item</th><th>Status</th><th>Säljpris</th><th>Köppris</th><th>24h</th><th>Behov / lager</th><th>Brist</th><th>Trend</th></tr></thead>
                        <tbody>
                            {filteredItems.map((item) => {
                                const fill = Math.min(100, (item.stock / Math.max(1, item.demand)) * 100);
                                return (
                                    <tr key={item.id} onClick={() => setSelectedItem(item)}>
                                        <td><div className={styles.itemCell}><span className={styles.smallIcon}>{item.icon}</span><div><strong>{item.name}</strong><small>{item.category}</small></div></div></td>
                                        <td><span className={`${styles.status} ${styles[item.level]}`}>{levelLabel[item.level]}</span></td>
                                        <td className={styles.coin}>{item.sellPrice} C</td>
                                        <td>{item.buyPrice} C</td>
                                        <td><span className={item.change24h >= 0 ? styles.positive : styles.negative}>{item.change24h >= 0 ? "▲" : "▼"} {Math.abs(item.change24h)}%</span></td>
                                        <td><div className={styles.supply}><span>{formatNumber(item.demand)} / {formatNumber(item.stock)}</span><div><i style={{ width: `${fill}%` }} /></div></div></td>
                                        <td className={item.shortage > 0 ? styles.shortage : styles.muted}>{item.shortage > 0 ? `−${formatNumber(item.shortage)}` : "Täckt"}</td>
                                        <td><Sparkline item={item} /></td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                    {filteredItems.length === 0 && <div className={styles.empty}>Ingen resurs matchade din sökning. Marknaden är hård, men inte magisk.</div>}
                </div>
            </section>

            {selectedItem && (
                <div className={styles.modalBackdrop} onMouseDown={() => setSelectedItem(null)}>
                    <article className={styles.modal} onMouseDown={(event) => event.stopPropagation()}>
                        <button className={styles.close} onClick={() => setSelectedItem(null)}>×</button>
                        <div className={styles.modalHero}>
                            <div className={styles.largeIcon}>{selectedItem.icon}</div>
                            <div><span>{selectedItem.category}</span><h2>{selectedItem.name}</h2><div className={`${styles.status} ${styles[selectedItem.level]}`}>{levelLabel[selectedItem.level]}</div></div>
                        </div>
                        <div className={styles.modalPrice}><div><span>Aktuellt säljpris</span><strong>{selectedItem.sellPrice} Coins</strong></div><div><span>Förändring 24h</span><strong className={selectedItem.change24h >= 0 ? styles.positive : styles.negative}>{selectedItem.change24h >= 0 ? "+" : ""}{selectedItem.change24h}%</strong></div></div>
                        <div className={styles.bigChart}><Sparkline item={selectedItem} /></div>
                        <div className={styles.modalStats}>
                            <div><span>Behov</span><strong>{formatNumber(selectedItem.demand)}</strong></div>
                            <div><span>Lager</span><strong>{formatNumber(selectedItem.stock)}</strong></div>
                            <div><span>Brist</span><strong>{formatNumber(selectedItem.shortage)}</strong></div>
                            <div><span>Volym 24h</span><strong>{formatNumber(selectedItem.volume24h)}</strong></div>
                        </div>
                        <div className={styles.opportunity}><span>Marknadssignal</span><p>{selectedItem.shortage > 0 ? `Servern saknar ${formatNumber(selectedItem.shortage)} ${selectedItem.name}. Det här är en tydlig produktionsmöjlighet.` : "Lagret täcker det nuvarande behovet. Priset kan pressas om produktionen fortsätter."}</p></div>
                    </article>
                </div>
            )}
        </div>
    );
}
