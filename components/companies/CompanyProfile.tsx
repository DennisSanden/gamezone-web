"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import type { ApiEnvelope, Company, CompanyProduct } from "./company-types";
import styles from "./Companies.module.css";

const number = new Intl.NumberFormat("sv-SE");
const nameOf = (company: Company) => company.displayName ?? company.name;
const itemName = (item: CompanyProduct) => item.displayName ?? item.itemName ?? item.itemKey ?? "Okänd vara";

export function CompanyProfile({ companyId }: { companyId: string }) {
  const [company, setCompany] = useState<Company | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch(`/api/companies/${encodeURIComponent(companyId)}`, { cache: "no-store" })
      .then(async response => ({ response, payload: await response.json() as ApiEnvelope<Company> }))
      .then(({ response, payload }) => {
        if (!response.ok || payload.status !== "SUCCESS" || !payload.result) throw new Error(payload.message ?? "Företaget kunde inte hämtas.");
        setCompany(payload.result);
      })
      .catch(value => setError(value instanceof Error ? value.message : "Företaget kunde inte hämtas."));
  }, [companyId]);

  if (error) return <div className={styles.profileState}><strong>Företaget kunde inte visas</strong><span>{error}</span><Link href="/companies">Till alla företag</Link></div>;
  if (!company) return <div className={styles.profileState}>Hämtar företagets marknadsprofil...</div>;

  const active = company.productsForSale ?? company.activeListings ?? [];
  const history = company.salesHistory ?? company.topProducts ?? [];
  const revenue = company.totalRevenue ?? company.totalSales ?? 0;

  return <div className={styles.profilePage}>
    <section className={styles.profileHero}>
      <div className={styles.profileHeroInner}>
        <Link href="/companies" className={styles.backLink}>← Alla företag</Link>
        <div className={styles.profileIdentity}><div className={styles.bigLogo}>{nameOf(company).slice(0, 2).toUpperCase()}</div><div><span className={styles.eyebrow}>{company.category ?? "GAMEZONE FÖRETAG"}</span><h1>{nameOf(company)}</h1><p>{company.description || "Handel, entreprenörskap och tillväxt i GameZones levande ekonomi."}</p></div></div>
        <div className={styles.profileMetrics}><div><strong>{number.format(revenue)}</strong><span>coins sålt totalt</span></div><div><strong>{company.transactionCount ?? 0}</strong><span>genomförda köp</span></div><div><strong>{active.length}</strong><span>varor till salu</span></div><div><strong>{company.licenseLevel ?? 1}</strong><span>licensnivå</span></div></div>
      </div>
    </section>

    <main className={styles.profileContent}>
      <section className={styles.marketSection}><div className={styles.sectionHeader}><div><span className={styles.eyebrow}>KÖP JUST NU</span><h2>Aktuellt sortiment</h2></div></div><div className={styles.productGrid}>{active.map((item, index) => <article className={styles.productCard} key={`${item.itemKey}-${index}`}><div className={styles.productIcon}>◆</div><div><h3>{itemName(item)}</h3><p>{number.format(item.quantity ?? 0)} i lager</p></div><strong>{number.format(item.unitPrice ?? 0)} coins</strong></article>)}{active.length === 0 && <div className={styles.emptyBlock}>Företaget har inget publicerat sortiment just nu.</div>}</div></section>

      <section className={styles.marketSection}><div className={styles.sectionHeader}><div><span className={styles.eyebrow}>HANDELSHISTORIK</span><h2>Vad företaget sålt tidigare</h2></div></div><div className={styles.historyTable}><div className={styles.historyHead}><span>Vara</span><span>Antal</span><span>Omsättning</span><span>Senast såld</span></div>{history.map((item, index) => <div className={styles.historyRow} key={`${item.itemKey}-${index}`}><strong>{itemName(item)}</strong><span>{number.format(item.soldQuantity ?? item.quantity ?? 0)}</span><span>{number.format(item.totalRevenue ?? 0)} coins</span><span>{item.lastSoldAt ? new Date(item.lastSoldAt).toLocaleDateString("sv-SE") : "Okänt"}</span></div>)}{history.length === 0 && <div className={styles.emptyBlock}>Ingen detaljerad försäljningshistorik har publicerats ännu.</div>}</div></section>

      <aside className={styles.companyInfo}><h2>Om företaget</h2><dl><div><dt>Ägare</dt><dd>{company.ownerName ?? "Okänd"}</dd></div><div><dt>Settlement</dt><dd>{company.settlementName ?? "Fristående"}</dd></div><div><dt>Medlemmar</dt><dd>{company.memberCount ?? company.members?.length ?? 0}</dd></div><div><dt>Status</dt><dd>{company.status ?? "Aktivt"}</dd></div></dl></aside>
    </main>
  </div>;
}
