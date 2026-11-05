"use client";
import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import type { SurvivalOverview, SurvivalPlayer } from "@/lib/survival-analytics";
import { survivalMetrics, survivalFormat, type SurvivalMetric } from "@/lib/survival-stat-labels";
import styles from "./page.module.css";

export function SurvivalDashboard() {
  const [overview, setOverview] = useState<SurvivalOverview | null>(null);
  const [supporters, setSupporters] = useState<SurvivalPlayer[]>([]);
  const [overviewError, setOverviewError] = useState(false);
  const [supporterError, setSupporterError] = useState(false);
  const [loading, setLoading] = useState(true);
  const [metric, setMetric] = useState<SurvivalMetric>("kills");
  const [query, setQuery] = useState("");
  useEffect(() => {
    let alive = true;
    Promise.allSettled([
      fetch("/api/survival/overview").then(async r => { if(!r.ok) throw Error(); return (await r.json()).data as SurvivalOverview; }),
      fetch("/api/survival/supporters").then(async r => { if(!r.ok) throw Error(); return (await r.json()).data as SurvivalPlayer[]; }),
    ]).then(([first, second]) => {
      if (!alive) return;
      if (first.status === "fulfilled") setOverview(first.value); else setOverviewError(true);
      if (second.status === "fulfilled") setSupporters(second.value); else setSupporterError(true);
      setLoading(false);
    });
    return () => {alive=false;};
  }, []);
  const top = useMemo(() => supporters.filter(p => p.username?.toLowerCase().includes(query.trim().toLowerCase()))
    .sort((a,b) => Number(b[metric] ?? 0)-Number(a[metric] ?? 0) || a.username.localeCompare(b.username,"sv")), [supporters,query,metric]);
  const label = survivalMetrics.find(item => item.key === metric)!;
  return <div className={styles.page}>
    <div className={styles.wrap}>
      <section className={styles.hero}>
        <span className={styles.eyebrow}>GAMEZONE · SURVIVAL COMMAND CENTER</span>
        <h1>30 waves.<br/><em>Oändligt med hjältar.</em></h1>
        <p>Varje framryckning, varje återupplivning, varje summon. Följ lagrekorden och djupdyk i de aktiva Patreon-supporternas Survival-historik.</p>
        <div className={styles.heroTags}><span>⚔️ PvE</span><span>♡ Fyra spelare</span><span>◆ Taktiska klasser</span></div>
      </section>
      <section className={styles.summary} aria-label="Sammanfattning">
        <article><span>Avslutade rekord</span><strong>{loading ? "…" : survivalFormat(overview?.matches ?? 0)}</strong></article>
        <article><span>Högsta wave</span><strong>{loading ? "…" : survivalFormat(overview?.bestWave ?? 0)}<small> / 30</small></strong></article>
        <article><span>Lagets totala kills</span><strong>{loading ? "…" : survivalFormat(overview?.totalKills ?? 0)}</strong></article>
        <article><span>Profiler med supporterstatistik</span><strong>{loading ? "…" : survivalFormat(supporters.length)}</strong></article>
      </section>
      {overviewError && <p className={styles.warning}>Lagrekorden kan inte hämtas just nu. Kontrollera att GameZone Engine är uppdaterad.</p>}
      <section className={styles.section}>
        <div className={styles.sectionHead}><div><span className={styles.eyebrow}>SURVIVAL HALL OF FAME</span><h2>Lagets bästa rundor</h2></div><p>Rekord från Survival-databasen, även tidigare matcher.</p></div>
        <div className={styles.records}>{(overview?.records ?? []).length ? overview!.records.map((r,i)=><article key={`${r.at}-${i}`}><div className={styles.rank}>{String(i+1).padStart(2,"0")}</div><div><strong>Wave {r.wave}</strong><span>{r.participants || "Okänt lag"}</span></div><div className={styles.recordSide}><strong>{survivalFormat(r.kills)} kills</strong><small>{new Date(r.at).toLocaleDateString("sv-SE")}</small></div></article>) : <p>{loading ? "Hämtar rekord..." : "Inga registrerade lagrekord ännu."}</p>}</div>
      </section>
      <section className={styles.section}>
        <div className={styles.sectionHead}><div><span className={styles.eyebrow}>♥ PATREON SURVIVAL ANALYTICS</span><h2>Statistikcentralen</h2></div><p>Alla kan läsa. Endast aktiva Patreon-spelare får avancerad profilerad statistik.</p></div>
        <div className={styles.controls}><label>Visa kategori<select value={metric} onChange={e=>setMetric(e.target.value as SurvivalMetric)}>{survivalMetrics.map(item=><option key={item.key} value={item.key}>{item.label}</option>)}</select></label><label>Sök spelare<input value={query} onChange={e=>setQuery(e.target.value)} placeholder="Minecraft-namn" /></label></div>
        <div className={styles.metricSpotlight}><span>AKTUELL TOPPLISTA</span><strong>{label.label}</strong><small>Sorterad på {label.label.toLowerCase()}</small></div>
        {supporterError && <p className={styles.warning}>Supporterstatistiken är tillfälligt otillgänglig. Kontrollera Patreon-listan och statistiknyckeln.</p>}
        <div className={styles.leaders}>{top.length ? top.slice(0,100).map((p,i)=><Link href={`/spelare/${encodeURIComponent(p.username)}`} key={p.playerUuid} className={styles.leader}><span className={styles.rank}>#{i+1}</span><img src={`https://mc-heads.net/avatar/${encodeURIComponent(p.username)}/56`} alt="" loading="lazy"/><div className={styles.leaderIdentity}><strong>{p.username}</strong><small>{p.tier==="gold" ? "◆ Guldsupporter" : "♥ Supporter"} · {p.matches} matcher</small></div><b>{survivalFormat(Number(p[metric] || 0))}{label.unit}</b></Link>) : <p className={styles.empty}>{loading ? "Laddar supporterprofiler..." : "Inga supporterprofiler med registrerade Survival-matcher ännu."}</p>}</div>
      </section>
      <div className={styles.bottom}>Vill du också ha avancerad Survival-statistik på din profil? <Link href="/patreon">Läs om Patreon-förmånerna</Link>.</div>
    </div>
  </div>;
}
