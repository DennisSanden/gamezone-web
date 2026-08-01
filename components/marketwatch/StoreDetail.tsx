import Link from "next/link";
import { getShop, getShopItems } from "@/lib/marketwatch-data";
import { ItemIcon } from "./ItemIcon";
import styles from "./MarketWatchDashboard.module.css";

export function StoreDetail({ storeId }: { storeId: string }) {
 const shop=getShop(storeId); if(!shop) return <div className={styles.storePage}><h1>Affären finns inte.</h1><Link href="/marketwatch/stores">Till alla affärer</Link></div>;
 const products=getShopItems(storeId).sort((a,b)=>a.offer.buyPrice-b.offer.buyPrice);
 return <div className={styles.storePage}><div className={styles.storeHero}><div><Link className={styles.backLink} href="/marketwatch/stores">← Alla affärer</Link><span>{shop.settlement}</span><h1>{shop.name}</h1><p>{shop.description}</p></div><Link href={`/marketwatch/compare?shop=${shop.id}`}>Jämför denna affär</Link></div><div className={styles.storeProfile}><div><span>Status</span><strong className={shop.open?styles.openText:styles.closedText}>{shop.open?"Öppen nu":"Stängd"}</strong></div><div><span>Ägare</span><strong>{shop.owner}</strong></div><div><span>Betyg</span><strong>★ {shop.rating}</strong></div><div><span>Försäljning 24h</span><strong>{shop.sales24h.toLocaleString("sv-SE")} C</strong></div></div><div className={styles.inventoryHeader}><div><span>BUTIKSSORTIMENT</span><h2>{products.length} varor till salu</h2></div><Link href="/marketwatch">Till MarketWatch</Link></div><div className={styles.inventoryGrid}>{products.map(({item,offer})=><article className={styles.productCard} key={item.id}><ItemIcon itemId={item.minecraftId} itemName={item.name} size={48} /><div><small>{item.category}</small><h3>{item.name}</h3><span>{offer.stock} i lager</span></div><div className={styles.productPrice}><strong>{offer.buyPrice} C</strong><small>Marknad {item.buyPrice} C</small></div><Link href={`/marketwatch/compare?item=${item.id}`}>Jämför</Link></article>)}</div></div>;
}
