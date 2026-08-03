"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { marketItems, marketShops } from "@/lib/marketwatch-data";
import { ItemIcon } from "./ItemIcon";
import styles from "./MarketWatchDashboard.module.css";

export function CompareDashboard() {
    const firstItemId = marketItems[0]?.id ?? "";
    const [itemId, setItemId] = useState(firstItemId);

    const item = useMemo(
        () => marketItems.find(candidate => candidate.id === itemId) ?? marketItems[0],
        [itemId],
    );

    if (!item) {
        return (
            <div className={styles.storePage}>
                <div className={styles.storeHero}>
                    <div>
                        <span>PRISJÄMFÖRELSE</span>
                        <h1>Jämför affärer</h1>
                        <p>
                            Prisjämförelsen visas när Engine har publicerat verkliga
                            butikserbjudanden. Ingen dummy-data används längre.
                        </p>
                    </div>
                    <Link href="/marketwatch">Till MarketWatch</Link>
                </div>
            </div>
        );
    }

    const offers = item.offers
        .map(offer => ({
            offer,
            shop: marketShops.find(shop => shop.id === offer.shopId),
        }))
        .filter((entry): entry is {
            offer: (typeof item.offers)[number];
            shop: (typeof marketShops)[number];
        } => Boolean(entry.shop))
        .sort((a, b) => a.offer.buyPrice - b.offer.buyPrice);

    return (
        <div className={styles.storePage}>
            <div className={styles.storeHero}>
                <div>
                    <span>PRISJÄMFÖRELSE</span>
                    <h1>Jämför affärer</h1>
                    <p>Välj en vara och jämför verkliga priser och lager mellan registrerade affärer.</p>
                </div>
                <Link href="/marketwatch">Till MarketWatch</Link>
            </div>

            <div className={styles.comparePicker}>
                <label>
                    Välj vara
                    <select value={item.id} onChange={event => setItemId(event.target.value)}>
                        {marketItems.map(candidate => (
                            <option key={candidate.id} value={candidate.id}>
                                {candidate.name}
                            </option>
                        ))}
                    </select>
                </label>

                <div className={styles.compareItem}>
                    <ItemIcon itemId={item.minecraftId} itemName={item.name} size={48} />
                    <div>
                        <small>{item.category}</small>
                        <h2>{item.name}</h2>
                        <span>{offers.length} affärer säljer varan</span>
                    </div>
                </div>
            </div>

            {offers.length === 0 ? (
                <div className={styles.storeHero}>
                    <div>
                        <span>INGA AKTIVA ERBJUDANDEN</span>
                        <h2>Ingen affär säljer varan just nu</h2>
                        <p>
                            MarketWatch har riktig efterfrågedata, men Engine har ännu inte
                            publicerat individuella butikserbjudanden för jämförelse.
                        </p>
                    </div>
                </div>
            ) : (
                <div className={styles.compareTable}>
                    <div className={styles.compareHead}>
                        <span>Affär</span>
                        <span>Settlement</span>
                        <span>Lager</span>
                        <span>Pris</span>
                        <span>Skillnad</span>
                        <span />
                    </div>

                    {offers.map(({ offer, shop }, index) => {
                        const bestPrice = offers[0]?.offer.buyPrice ?? offer.buyPrice;
                        const difference = offer.buyPrice - bestPrice;

                        return (
                            <div
                                className={`${styles.compareRow} ${index === 0 ? styles.bestOffer : ""}`}
                                key={`${shop.id}-${item.id}`}
                            >
                                <strong>
                                    {shop.name}
                                    {index === 0 && <small>BÄSTA PRIS</small>}
                                </strong>
                                <span>{shop.settlement}</span>
                                <span>{offer.stock} st</span>
                                <b>{offer.buyPrice} C</b>
                                <span>{difference === 0 ? "Billigast" : `+${difference} C`}</span>
                                <Link href={`/marketwatch/compare/stores/${shop.id}`}>Besök →</Link>
                            </div>
                        );
                    })}
                </div>
            )}
        </div>
    );
}
