import Link from "next/link";
import { getShopItems, marketShops } from "@/lib/marketwatch-data";
import styles from "./MarketWatchDashboard.module.css";

export function StoreDirectory() {
    return <div className={styles.storePage}><div className={styles.storeHero}><div><span>GAMEZONE SHOPPING DISTRICT</span><h1>Alla affärer</h1><p>Se sortiment, lager, priser och vilket settlement varje butik tillhör.</p></div><Link href="/marketwatch/compare">Jämför affärer</Link></div><div className={styles.storeGrid}>{marketShops.map(shop=>{const products=getShopItems(shop.id); const cheapest=[...products].sort((a,b)=>a.offer.buyPrice-b.offer.buyPrice)[0]; return <Link href={`/marketwatch/stores/${shop.id}`} className={styles.storeCard} key={shop.id}><div className={styles.storeTop}><span className={shop.open?styles.open:styles.closed}>{shop.open?"ÖPPET":"STÄNGT"}</span><b>★ {shop.rating}</b></div><h2>{shop.name}</h2><p>{shop.description}</p><div className={styles.storeMeta}><span>Settlement<strong>{shop.settlement}</strong></span><span>Ägare<strong>{shop.owner}</strong></span><span>Sortiment<strong>{products.length} items</strong></span></div><div className={styles.storeFooter}><span>{cheapest?`Från ${cheapest.offer.buyPrice} C`:"Inga varor"}</span><b>Besök affär →</b></div></Link>})}</div></div>;
}
