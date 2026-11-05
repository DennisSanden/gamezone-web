"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import type { SurvivalPlayer } from "@/lib/survival-analytics";
import { survivalMetrics, survivalFormat } from "@/lib/survival-stat-labels";
import styles from "./SurvivalPremiumStats.module.css";

export function SurvivalPremiumStats({ username }: { username: string }) {
  const [data, setData] = useState<SurvivalPlayer | null>(null);
  const [state, setState] = useState<"loading" | "empty" | "error" | "ready">("loading");
  useEffect(() => {
    const controller = new AbortController();
    setState("loading");
    fetch(`/api/survival/supporters/${encodeURIComponent(username)}`, { signal: controller.signal })
      .then(async res => {
        if (res.status === 404) { setState("empty"); return; }
        if (!res.ok) throw new Error("Kunde inte hämta statistik");
        const body = await res.json();
        if (body.data?.matches) { setData(body.data); setState("ready"); }
        else setState("empty");
      }).catch(() => { if (!controller.signal.aborted) setState("error"); });
    return () => controller.abort();
  }, [username]);
  return <section className={styles.panel}>
    <div className={styles.header}><div><span>♥ PATREON EXKLUSIV PROFILSTATISTIK</span><h2>Survival, på djupet</h2></div><Link href="/survival">Alla Survival-rekord</Link></div>
    {state === "loading" && <p>Hämtar spelarens matchhistorik...</p>}
    {state === "error" && <p>Statistiken kunde inte laddas. Försök igen senare.</p>}
    {state === "empty" && <p>Ingen sparad Survival-match ännu. Statistik samlas från och med denna uppdatering.</p>}
    {state === "ready" && data && <>
      <div className={styles.grid}>{survivalMetrics.map(metric => <div key={metric.key} className={styles.metric}><span>{metric.label}</span><strong>{survivalFormat(data[metric.key])}{metric.unit}</strong></div>)}</div>
      <h3>Personliga rekord i en match</h3>
      {data.personalBests && <div className={styles.grid}>{([
        ["kills","Kills"], ["damage","Skada"], ["summons","Summons"],
        ["summonDamage","Summon-skada"], ["healingHearts","Läkta hjärtan"],
        ["revives","Återupplivningar"], ["tanked","Tankad skada"],
      ] as const).map(([key,label])=><div className={styles.metric} key={key}><span>{label}</span><strong>{survivalFormat(data.personalBests![key])}</strong></div>)}</div>}
      <h3>Klasser du har spelat</h3>
      <div className={styles.history}>{(data.classes ?? []).map(item=><article key={item.role}>
        <div><strong>{item.role}</strong><small>{item.games} matcher</small></div>
        <span>Wave {item.bestWave}</span><span>{item.kills} kills</span>
        <span>{survivalFormat(item.healingHearts)} ❤ läkta</span><span>{item.summons} summons</span>
      </article>)}</div>
      <h3>Senaste 20 matcherna</h3>
      <div className={styles.history}>{(data.history ?? []).map((match, i) => <article key={`${match.endedAt}-${i}`}>
        <div><strong>{match.role}</strong><small>{new Date(match.endedAt).toLocaleDateString("sv-SE")}</small></div>
        <span>Wave {match.wave}</span><span>{survivalFormat(match.kills)} kills</span>
        <span>{survivalFormat(match.healingHearts)} ❤ läkta</span><span>{survivalFormat(match.summons)} summons</span>
      </article>)}</div>
    </>}
  </section>;
}
