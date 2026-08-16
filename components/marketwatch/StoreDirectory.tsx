"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { getShopItems, marketShops } from "@/lib/marketwatch-data";
import styles from "./MarketWatchDashboard.module.css";

export function StoreDirectory() {
    const [query, setQuery] = useState("");
    const shops = useMemo(() => {
        const normalized = query.trim().toLocaleLowerCase("sv-SE");
        if (!normalized) return marketShops;
        return marketShops.filter((shop) =>
            shop.name.toLocaleLowerCase("sv-SE").includes(normalized)
            || shop.settlement.toLocaleLowerCase("sv-SE").includes(normalized)
            || shop.owner.toLocaleLowerCase("sv-SE").includes(normalized)
            || shop.description.toLocaleLowerCase("sv-SE").includes(normalized)
        );
    }, [query]);

    return (
        <div className={styles.storePage}>
            <div className={styles.storeHero}>
                <div><span>GAMEZONE SHOPPING DISTRICT</span><h1>Alla affärer</h1><p>Se sortiment, lager, priser och vilket settlement varje butik tillhör.</p></div>
                <Link href="/marketwatch/compare">Jämför affärer</Link>
            </div>
            <label className={styles.storeSearch}>
                <span>⌕</span>
                <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Sök affär, ägare eller settlement..." aria-label="Sök affärer" />
                {query && <button type="button" onClick={() => setQuery("")} aria-label="Rensa sökning">×</button>}
            </label>
            <div className={styles.storeResultCount}>{query ? `${shops.length} träffar` : `${shops.length} affärer`}</div>
            <div className={styles.storeGrid}>{shops.map(shop=>{const products=getShopItems(shop.id); const cheapest=[...products].sort((a,b)=>a.offer.buyPrice-b.offer.buyPrice)[0]; return <Link href={`/marketwatch/stores/${shop.id}`} className={styles.storeCard} key={shop.id}><div className={styles.storeTop}><span className={shop.open?styles.open:styles.closed}>{shop.open?"ÖPPET":"STÄNGT"}</span><b>★ {shop.rating}</b></div><h2>{shop.name}</h2><p>{shop.description}</p><div className={styles.storeMeta}><span>Settlement<strong>{shop.settlement}</strong></span><span>Ägare<strong>{shop.owner}</strong></span><span>Sortiment<strong>{products.length} items</strong></span></div><div className={styles.storeFooter}><span>{cheapest?`Från ${cheapest.offer.buyPrice} C`:"Inga varor"}</span><b>Besök affär →</b></div></Link>})}</div>
            {shops.length === 0 && <div className={styles.storeEmpty}>Ingen affär matchar din sökning.</div>}
        </div>
    );
}
