"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import type { ApiEnvelope, Company } from "./company-types";
import styles from "./Companies.module.css";

const number = new Intl.NumberFormat("sv-SE");
const companyName = (company: Company) => company.displayName ?? company.name;
const sales = (company: Company) => company.totalRevenue ?? company.totalSales ?? 0;

export function CompanyDirectory() {
  const [companies, setCompanies] = useState<Company[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [query, setQuery] = useState("");

  useEffect(() => {
    fetch("/api/companies", { cache: "no-store" })
      .then(async response => ({ response, payload: await response.json() as ApiEnvelope<Company[]> }))
      .then(({ response, payload }) => {
        if (!response.ok || payload.status !== "SUCCESS" || !Array.isArray(payload.result)) throw new Error(payload.message ?? "Företagen kunde inte hämtas.");
        setCompanies(payload.result);
      })
      .catch(errorValue => setError(errorValue instanceof Error ? errorValue.message : "Företagen kunde inte hämtas."))
      .finally(() => setLoading(false));
  }, []);

  const filtered = useMemo(() => companies
    .filter(company => [companyName(company), company.ownerName, company.settlementName, company.category].some(value => value?.toLowerCase().includes(query.trim().toLowerCase())))
    .sort((a, b) => sales(b) - sales(a)), [companies, query]);

  const totals = useMemo(() => ({
    companies: companies.length,
    sales: companies.reduce((sum, company) => sum + sales(company), 0),
    listings: companies.reduce((sum, company) => sum + (company.productsForSale?.length ?? company.activeListings?.length ?? 0), 0),
  }), [companies]);

  return <div className={styles.page}>
    <section className={styles.hero}>
      <div className={styles.heroInner}>
        <span className={styles.eyebrow}>GAMEZONE HANDEL</span>
        <h1>Företagen som driver <em>världens ekonomi.</em></h1>
        <p>Se vad företagen säljer nu, vilka varor de byggt sin historia på och vilka aktörer som dominerar marknaden.</p>
        <a href="#foretag" className={styles.primaryButton}>Utforska företag</a>
      </div>
    </section>

    <section className={styles.stats}>
      <div><strong>{totals.companies}</strong><span>aktiva företag</span></div>
      <div><strong>{number.format(totals.sales)}</strong><span>coins i försäljning</span></div>
      <div><strong>{totals.listings}</strong><span>aktuella erbjudanden</span></div>
    </section>

    <main className={styles.content} id="foretag">
      <div className={styles.sectionHeader}><div><span className={styles.eyebrow}>MARKNADSPLATSEN</span><h2>Hitta rätt företag</h2></div><input value={query} onChange={event => setQuery(event.target.value)} placeholder="Sök företag, ägare eller stad" aria-label="Sök företag" /></div>
      {loading && <div className={styles.notice}>Hämtar företagens marknadsdata...</div>}
      {error && <div className={styles.notice}><strong>Företagsdata kunde inte laddas</strong><span>{error}</span></div>}
      {!loading && !error && filtered.length === 0 && <div className={styles.notice}>Inga företag matchar din sökning.</div>}
      <div className={styles.grid}>{filtered.map((company, index) => {
        const products = company.productsForSale ?? company.activeListings ?? [];
        return <Link href={`/companies/${encodeURIComponent(company.companyId)}`} className={styles.card} key={company.companyId}>
          <div className={styles.cardTop}><span className={styles.rank}>#{index + 1}</span><span className={styles.status}>{company.status === "ACTIVE" || !company.status ? "Öppet" : company.status}</span></div>
          <div className={styles.logo}>{companyName(company).slice(0, 2).toUpperCase()}</div>
          <h3>{companyName(company)}</h3>
          <p>{company.description || `${company.ownerName ? `Drivs av ${company.ownerName}` : "Ett GameZone-företag"}${company.settlementName ? ` från ${company.settlementName}` : ""}.`}</p>
          <div className={styles.metrics}><span><strong>{number.format(sales(company))}</strong> sålt</span><span><strong>{products.length}</strong> till salu</span><span><strong>{company.memberCount ?? company.members?.length ?? 0}</strong> medlemmar</span></div>
          <div className={styles.products}>{products.slice(0, 3).map((product, productIndex) => <span key={`${product.itemKey ?? product.itemName}-${productIndex}`}>{product.displayName ?? product.itemName ?? product.itemKey ?? "Vara"}</span>)}{products.length === 0 && <span>Sortiment publiceras snart</span>}</div>
          <b className={styles.cardLink}>Besök företaget →</b>
        </Link>;
      })}</div>
    </main>
  </div>;
}
