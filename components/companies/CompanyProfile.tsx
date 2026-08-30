"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import type { ApiEnvelope, Company, CompanyProduct } from "./company-types";
import styles from "./Companies.module.css";

const number = new Intl.NumberFormat("sv-SE");
const nameOf = (company: Company) => company.displayName ?? company.name;
const itemName = (item: CompanyProduct) => item.displayName ?? item.itemName ?? item.itemKey ?? "Okänd vara";

export function CompanyProfile({ companyId }: { companyId: string }) {
  const [company, setCompany] = useState<Company | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch(`/api/companies/${encodeURIComponent(companyId)}`)
      .then(async response => ({ response, payload: await response.json() as ApiEnvelope<Company> }))
      .then(({ response, payload }) => {
        if (!response.ok || payload.status !== "SUCCESS" || !payload.result) throw new Error(payload.message ?? "Företaget kunde inte hämtas.");
        setCompany(payload.result);
      })
      .catch(value => setError(value instanceof Error ? value.message : "Företaget kunde inte hämtas."));
  }, [companyId]);

  const sortedActive = useMemo(() => [...(company?.productsForSale ?? company?.activeListings ?? [])]
    .sort((a, b) => (a.unitPrice ?? 0) - (b.unitPrice ?? 0)), [company]);

  if (error) return <div className={styles.profileState}><strong>Företaget kunde inte visas</strong><span>{error}</span><Link href="/companies">Till alla företag</Link></div>;
  if (!company) return <div className={styles.profileState}>Hämtar företagets marknadsprofil...</div>;

  const history = company.salesHistory ?? company.topProducts ?? [];
  const salesRevenue = company.totalSales ?? 0;
  const rentalRevenue = company.rentalRevenue ?? 0;
  const revenue = company.totalRevenue ?? (salesRevenue + rentalRevenue);
  const created = company.createdAt ? new Date(company.createdAt).toLocaleDateString("sv-SE") : "Okänt";

  return <div className={styles.profilePage}>
    <section className={styles.profileHero}>
      <div className={styles.profileHeroInner}>
        <Link href="/companies" className={styles.backLink}>← Till företagsmarknaden</Link>
        <div className={styles.profileIdentity}>
          <div className={styles.bigLogo}>{nameOf(company).slice(0, 2).toUpperCase()}</div>
          <div><span className={styles.eyebrow}>{company.category ?? "GAMEZONE FÖRETAG"}</span><h1>{nameOf(company)}</h1><p>{company.description || "Handel, entreprenörskap och tillväxt i GameZones levande ekonomi."}</p></div>
        </div>
        <div className={styles.profileMetrics}><div><strong>{number.format(salesRevenue)}</strong><span>försäljning</span></div><div><strong>{number.format(rentalRevenue)}</strong><span>hyresintäkter</span></div><div><strong>{number.format(revenue)}</strong><span>total omsättning</span></div><div><strong>{company.transactionCount ?? 0}</strong><span>genomförda köp</span></div></div>
      </div>
    </section>

    <main className={styles.profileContent}>
      <section className={styles.marketSection}>
        <div className={styles.sectionHeading}><div><span className={styles.eyebrow}>BUTIKEN</span><h2>Aktuellt sortiment</h2></div><span>{sortedActive.length} varor</span></div>
        <div className={styles.productGrid}>{sortedActive.map((item, index) => <article className={styles.productCard} key={`${item.itemKey}-${index}`}><div className={styles.productIcon}>◆</div><div><h3>{itemName(item)}</h3><p>{number.format(item.stockItems ?? 0)} i lager</p></div><strong>{number.format(item.unitPrice ?? 0)} Coins</strong></article>)}{sortedActive.length === 0 && <div className={styles.emptyBlock}>Företaget har inget publicerat sortiment just nu.</div>}</div>
      </section>

      <section className={styles.marketSection}>
        <div className={styles.sectionHeading}><div><span className={styles.eyebrow}>HANDELSHISTORIK</span><h2>Vad företaget har sålt</h2></div></div>
        <div className={styles.historyTable}><div className={styles.historyHead}><span>Vara</span><span>Antal</span><span>Omsättning</span><span>Senast såld</span></div>{history.map((item, index) => <div className={styles.historyRow} key={`${item.itemKey}-${index}`}><strong>{itemName(item)}</strong><span>{number.format(item.soldQuantity ?? item.quantity ?? 0)}</span><span>{number.format(item.totalRevenue ?? 0)} Coins</span><span>{item.lastSoldAt ? new Date(item.lastSoldAt).toLocaleDateString("sv-SE") : "Okänt"}</span></div>)}{history.length === 0 && <div className={styles.emptyBlock}>Ingen detaljerad försäljningshistorik har publicerats ännu.</div>}</div>
      </section>

      <aside className={styles.companyInfo}>
        <span className={styles.eyebrow}>FÖRETAGSPROFIL</span><h2>Om företaget</h2>
        <dl><div><dt>Ägare</dt><dd>{company.ownerName ?? "Okänd"}</dd></div><div><dt>Settlement</dt><dd>{company.settlementName ?? "Fristående"}</dd></div><div><dt>Medlemmar</dt><dd>{company.memberCount ?? company.members?.length ?? 0}</dd></div><div><dt>Status</dt><dd>{company.status ?? "Aktivt"}</dd></div><div><dt>Startat</dt><dd>{created}</dd></div></dl>
        {company.members && company.members.length > 0 && <div className={styles.memberList}><h3>Teamet</h3>{company.members.map(member => <div key={`${member.playerId}-${member.username}`}><span>{member.username}</span><small>{member.role ?? "Medlem"}</small></div>)}</div>}
      </aside>
    </main>
  </div>;
}
