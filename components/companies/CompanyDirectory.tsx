"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import type { ApiEnvelope, Company, CompanyProduct } from "./company-types";
import styles from "./Companies.module.css";

const number = new Intl.NumberFormat("sv-SE");
const companyName = (company: Company) => company.displayName ?? company.name;
const sales = (company: Company) => company.totalRevenue ?? company.totalSales ?? 0;
const listings = (company: Company) => company.productsForSale ?? company.activeListings ?? [];
const members = (company: Company) => company.memberCount ?? company.members?.length ?? 0;
const itemName = (item: CompanyProduct) => item.displayName ?? item.itemName ?? item.itemKey ?? "Okänd vara";
const categoryName = (value?: string | null) => value?.trim() || "Övrigt";

function statusLabel(status?: string) {
  if (!status || status === "ACTIVE") return "Öppet";
  if (status === "PAUSED") return "Pausat";
  return status;
}

export function CompanyDirectory() {
  const [companies, setCompanies] = useState<Company[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("ALL");
  const [sort, setSort] = useState<"SALES" | "LISTINGS" | "LICENSE" | "NAME">("SALES");

  useEffect(() => {
    fetch("/api/companies")
      .then(async response => ({ response, payload: await response.json() as ApiEnvelope<Company[]> }))
      .then(({ response, payload }) => {
        if (!response.ok || payload.status !== "SUCCESS" || !Array.isArray(payload.result)) {
          throw new Error(payload.message ?? "Företagen kunde inte hämtas.");
        }
        setCompanies(payload.result);
      })
      .catch(errorValue => setError(errorValue instanceof Error ? errorValue.message : "Företagen kunde inte hämtas."))
      .finally(() => setLoading(false));
  }, []);

  const categories = useMemo(() => Array.from(new Set(companies.map(company => categoryName(company.category))))
    .sort((a, b) => a.localeCompare(b, "sv")), [companies]);

  const filtered = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();
    return companies
      .filter(company => category === "ALL" || categoryName(company.category) === category)
      .filter(company => [companyName(company), company.ownerName, company.settlementName, company.category]
        .some(value => value?.toLowerCase().includes(normalizedQuery)))
      .sort((a, b) => {
        if (sort === "LISTINGS") return listings(b).length - listings(a).length;
        if (sort === "LICENSE") return (b.licenseLevel ?? 1) - (a.licenseLevel ?? 1);
        if (sort === "NAME") return companyName(a).localeCompare(companyName(b), "sv");
        return sales(b) - sales(a);
      });
  }, [companies, query, category, sort]);

  const totals = useMemo(() => ({
    companies: companies.length,
    sales: companies.reduce((sum, company) => sum + sales(company), 0),
    listings: companies.reduce((sum, company) => sum + listings(company).length, 0),
    transactions: companies.reduce((sum, company) => sum + (company.transactionCount ?? 0), 0),
  }), [companies]);

  const leaders = useMemo(() => [...companies].sort((a, b) => sales(b) - sales(a)).slice(0, 3), [companies]);

  const productMarket = useMemo(() => {
    const products = new Map<string, { name: string; sold: number; revenue: number; companies: Set<string> }>();

    companies.forEach(company => {
      const history = company.salesHistory ?? company.topProducts ?? [];
      history.forEach(item => {
        const key = (item.itemKey ?? item.itemName ?? item.displayName ?? "unknown").toLowerCase();
        const current = products.get(key) ?? {
          name: itemName(item),
          sold: 0,
          revenue: 0,
          companies: new Set<string>(),
        };
        current.sold += item.soldQuantity ?? 0;
        current.revenue += item.totalRevenue ?? 0;
        current.companies.add(company.companyId);
        products.set(key, current);
      });
    });

    return Array.from(products.entries())
      .map(([itemKey, value]) => ({ itemKey, ...value, sellers: value.companies.size }))
      .filter(product => product.sold > 0)
      .sort((a, b) => b.sold - a.sold || b.revenue - a.revenue)
      .slice(0, 6);
  }, [companies]);

  const categoryShare = useMemo(() => {
    const counts = new Map<string, number>();
    companies.forEach(company => counts.set(categoryName(company.category), (counts.get(categoryName(company.category)) ?? 0) + 1));
    const max = Math.max(...counts.values(), 1);
    return Array.from(counts.entries())
      .sort((a, b) => b[1] - a[1])
      .slice(0, 6)
      .map(([name, count]) => ({ name, count, width: `${Math.max(14, (count / max) * 100)}%` }));
  }, [companies]);

  const marketPulse = useMemo(() => companies
    .flatMap(company => (company.salesHistory ?? company.topProducts ?? []).map(item => ({ company, item })))
    .filter(entry => entry.item.lastSoldAt)
    .sort((a, b) => new Date(b.item.lastSoldAt ?? 0).getTime() - new Date(a.item.lastSoldAt ?? 0).getTime())
    .slice(0, 5), [companies]);

  return <div className={styles.page}>
    <section className={styles.hero}>
      <div className={styles.heroInner}>
        <div className={styles.heroCopy}>
          <span className={styles.eyebrow}>GAMEZONE MARKNAD</span>
          <h1>Företagen som bygger <em>världens ekonomi.</em></h1>
          <p>Upptäck butiker, jämför sortiment och följ företagen som växer snabbast på GameZone.</p>
          <div className={styles.heroActions}>
            <a href="#marknad" className={styles.primaryButton}>Utforska marknaden</a>
            <Link href="/wiki/foretag" className={styles.secondaryButton}>Så startar du företag</Link>
          </div>
        </div>
        <div className={styles.heroPanel}>
          <span>Marknaden just nu</span>
          <strong>{number.format(totals.sales)}</strong>
          <small>Coins i registrerad försäljning</small>
          <div className={styles.heroPanelGrid}>
            <div><b>{totals.companies}</b><span>företag</span></div>
            <div><b>{totals.listings}</b><span>varor</span></div>
            <div><b>{totals.transactions}</b><span>köp</span></div>
          </div>
        </div>
      </div>
    </section>

    <main className={styles.content} id="marknad">
      {loading && <div className={styles.notice}>Hämtar företagens marknadsdata...</div>}
      {error && <div className={styles.notice}><strong>Företagsdata kunde inte laddas</strong><span>{error}</span></div>}

      {!loading && !error && <>
        <section className={styles.leaderSection}>
          <div className={styles.sectionHeading}>
            <div><span className={styles.eyebrow}>TOPPLISTAN</span><h2>Marknadsledarna</h2></div>
            <Link href="/leaderboards/company_sales">Visa hela topplistan</Link>
          </div>
          <div className={styles.leaderGrid}>
            {leaders.map((company, index) => <Link href={`/companies/${encodeURIComponent(company.companyId)}`} className={styles.leaderCard} key={company.companyId}>
              <span className={styles.podium}>#{index + 1}</span>
              <div className={styles.leaderLogo}>{companyName(company).slice(0, 2).toUpperCase()}</div>
              <div className={styles.leaderText}><small>{categoryName(company.category)}</small><h3>{companyName(company)}</h3><p>{company.settlementName ?? "Fristående företag"}</p></div>
              <div className={styles.leaderValue}><strong>{number.format(sales(company))}</strong><span>Coins</span></div>
            </Link>)}
          </div>
        </section>

        <section className={styles.marketDashboard}>
          <div className={styles.dashboardCard}>
            <div className={styles.compactHeading}><div><span className={styles.eyebrow}>MEST SÅLDA</span><h2>Populärt på marknaden</h2></div></div>
            <div className={styles.productMarketList}>
              {productMarket.map(product => <Link href={`/marketwatch?item=${encodeURIComponent(product.itemKey)}`} key={product.itemKey}>
                <div className={styles.marketIcon}>◆</div>
                <div><strong>{product.name}</strong><span>{number.format(product.sold)} sålda · {product.sellers} företag</span></div>
                <div className={styles.marketPrice}><small>omsättning</small><b>{number.format(product.revenue)} Coins</b><span>Visa i MarketWatch</span></div>
              </Link>)}
              {productMarket.length === 0 && <div className={styles.emptyInline}>Inga aktiva varor har publicerats ännu.</div>}
            </div>
          </div>

          <div className={styles.dashboardCard}>
            <div className={styles.compactHeading}><div><span className={styles.eyebrow}>BRANSCHER</span><h2>Företagens inriktning</h2></div></div>
            <div className={styles.shareList}>
              {categoryShare.map(item => <div key={item.name}><div><strong>{item.name}</strong><span>{item.count} företag</span></div><i><b style={{ width: item.width }} /></i></div>)}
              {categoryShare.length === 0 && <div className={styles.emptyInline}>Branschdata saknas ännu.</div>}
            </div>
          </div>

          <div className={styles.dashboardCard}>
            <div className={styles.compactHeading}><div><span className={styles.eyebrow}>MARKNADSPULS</span><h2>Senaste handeln</h2></div></div>
            <div className={styles.pulseList}>
              {marketPulse.map(({ company, item }, index) => <Link href={`/companies/${encodeURIComponent(company.companyId)}`} key={`${company.companyId}-${item.itemKey}-${index}`}>
                <span className={styles.pulseDot} />
                <div><strong>{companyName(company)}</strong><span>sålde {item.latestSaleQuantity ? `${number.format(item.latestSaleQuantity)} × ` : ""}{itemName(item)}</span></div>
                <div className={styles.marketPrice}>
                  <b>{number.format(item.latestSaleValue ?? 0)} Coins</b>
                  <time>{item.lastSoldAt ? new Date(item.lastSoldAt).toLocaleString("sv-SE", { dateStyle: "short", timeStyle: "short" }) : ""}</time>
                </div>
              </Link>)}
              {marketPulse.length === 0 && <div className={styles.emptyInline}>Ingen försäljningspuls är tillgänglig ännu.</div>}
            </div>
          </div>
        </section>

        <section className={styles.directorySection}>
          <div className={styles.sectionHeading}><div><span className={styles.eyebrow}>FÖRETAGSKATALOG</span><h2>Hitta rätt företag</h2></div><span>{filtered.length} träffar</span></div>
          <div className={styles.filters}>
            <label className={styles.searchField}><span>Sök</span><input value={query} onChange={event => setQuery(event.target.value)} placeholder="Företag, ägare eller settlement" aria-label="Sök företag" /></label>
            <label><span>Inriktning</span><select value={category} onChange={event => setCategory(event.target.value)}><option value="ALL">Alla inriktningar</option>{categories.map(value => <option key={value} value={value}>{value}</option>)}</select></label>
            <label><span>Sortera</span><select value={sort} onChange={event => setSort(event.target.value as typeof sort)}><option value="SALES">Mest försäljning</option><option value="LISTINGS">Störst sortiment</option><option value="LICENSE">Högst licens</option><option value="NAME">Namn A–Ö</option></select></label>
          </div>

          {filtered.length === 0 && <div className={styles.notice}>Inga företag matchar din sökning.</div>}
          <div className={styles.grid}>{filtered.map((company, index) => {
            const products = listings(company);
            return <Link href={`/companies/${encodeURIComponent(company.companyId)}`} className={styles.card} key={company.companyId}>
              <div className={styles.cardTop}><span className={styles.rank}>#{index + 1}</span><span className={styles.status}>{statusLabel(company.status)}</span></div>
              <div className={styles.cardIdentity}><div className={styles.logo}>{companyName(company).slice(0, 2).toUpperCase()}</div><div><small>{categoryName(company.category)}</small><h3>{companyName(company)}</h3><span>{company.settlementName ?? "Fristående"}</span></div></div>
              <p>{company.description || `${company.ownerName ? `Drivs av ${company.ownerName}` : "Ett GameZone-företag"}.`}</p>
              <div className={styles.metrics}><span><strong>{number.format(sales(company))}</strong> omsättning</span><span><strong>{products.length}</strong> varor</span><span><strong>{members(company)}</strong> medlemmar</span><span><strong>{company.licenseLevel ?? 1}</strong> licens</span></div>
              <div className={styles.products}>{products.slice(0, 4).map((product, productIndex) => <span key={`${product.itemKey ?? product.itemName}-${productIndex}`}>{itemName(product)}</span>)}{products.length === 0 && <span>Sortiment publiceras snart</span>}</div>
              <b className={styles.cardLink}>Öppna företagsprofilen <span>→</span></b>
            </Link>;
          })}</div>
        </section>
      </>}
    </main>
  </div>;
}
