"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import styles from "./ChroniclesTimeline.module.css";

type Category = "ALL" | "WAR" | "POLITICS" | "RELIC" | "SETTLEMENT" | "ALLIANCE" | "PLAYER" | "TOURNAMENT" | "WORLD";
type Entry = {
  id: string; category: Exclude<Category,"ALL">; title: string; body: string; createdAt: string;
  primaryEntityType?: string | null; primaryEntityId?: string | null; primaryEntityName?: string | null;
  secondaryEntityType?: string | null; secondaryEntityId?: string | null; secondaryEntityName?: string | null;
};
type Envelope = { status: string; result?: Entry[]; message?: string; errors?: Array<{message?:string}> };

const filters: Array<{key:Category;label:string;mark:string}> = [
  {key:"ALL",label:"Alla",mark:"✦"},{key:"WAR",label:"Krig",mark:"⚔"},{key:"POLITICS",label:"Politik",mark:"♛"},
  {key:"RELIC",label:"Reliker",mark:"◆"},{key:"SETTLEMENT",label:"Settlements",mark:"♜"},{key:"ALLIANCE",label:"Allianser",mark:"◇"},
  {key:"PLAYER",label:"Spelare",mark:"♟"},{key:"TOURNAMENT",label:"Turneringar",mark:"▲"},{key:"WORLD",label:"Världen",mark:"◎"},
];
const categoryName: Record<Exclude<Category,"ALL">,string> = { WAR:"Krig", POLITICS:"Politik", RELIC:"Relik", SETTLEMENT:"Settlement", ALLIANCE:"Allians", PLAYER:"Spelare", TOURNAMENT:"Turnering", WORLD:"Världen" };

function entityLink(type?: string|null,id?:string|null,name?:string|null) {
  if (!type || !id || !name) return null;
  if (type === "SETTLEMENT") return <Link href={`/settlements?settlement=${encodeURIComponent(id)}`}>{name}</Link>;
  if (type === "COMPANY") return <Link href={`/companies/${encodeURIComponent(id)}`}>{name}</Link>;
  if (type === "PLAYER") return <Link href={`/spelare/${encodeURIComponent(name)}`}>{name}</Link>;
  return null;
}

export function ChroniclesTimeline() {
  const [category,setCategory] = useState<Category>("ALL");
  const [entries,setEntries] = useState<Entry[]>([]);
  const [loading,setLoading] = useState(true);
  const [error,setError] = useState<string|null>(null);

  useEffect(() => {
    setLoading(true); setError(null);
    fetch(`/api/chronicles?category=${category}&limit=100`,{cache:"no-store"})
      .then(async response => ({response,payload: await response.json() as Envelope}))
      .then(({response,payload}) => {
        if (!response.ok || payload.status !== "SUCCESS") throw new Error(payload.message ?? payload.errors?.[0]?.message ?? "Chronicles kunde inte hämtas.");
        setEntries(payload.result ?? []);
      })
      .catch(value => setError(value instanceof Error ? value.message : "Chronicles kunde inte hämtas."))
      .finally(() => setLoading(false));
  },[category]);

  return <div className={styles.wrap}>
    <nav className={styles.filters} aria-label="Filtrera Chronicles">
      {filters.map(filter => <button key={filter.key} type="button" onClick={() => setCategory(filter.key)} className={category===filter.key?styles.activeFilter:styles.filter}><span>{filter.mark}</span>{filter.label}</button>)}
    </nav>
    {loading && <div className={styles.state}>Hämtar serverns historia...</div>}
    {error && <div className={styles.state}><strong>Chronicles kunde inte visas</strong><span>{error}</span></div>}
    {!loading && !error && entries.length===0 && <div className={styles.state}>Ingen händelse i den här kategorin ännu. Historien får väl skärpa sig.</div>}
    {!loading && !error && entries.length>0 && <section className={styles.timeline}>
      {entries.map(entry => {
        const date = new Date(entry.createdAt);
        return <article className={styles.entry} key={entry.id}>
          <div className={styles.rail}><span className={styles.dot}/></div>
          <div className={styles.card}>
            <div className={styles.meta}><span className={styles.category}>{categoryName[entry.category]}</span><time dateTime={entry.createdAt}>{date.toLocaleDateString("sv-SE",{day:"numeric",month:"long",year:"numeric"})}</time></div>
            <h2>{entry.title}</h2><p>{entry.body}</p>
            {(entry.primaryEntityName || entry.secondaryEntityName) && <div className={styles.entities}>{entityLink(entry.primaryEntityType,entry.primaryEntityId,entry.primaryEntityName)}{entityLink(entry.secondaryEntityType,entry.secondaryEntityId,entry.secondaryEntityName)}</div>}
          </div>
        </article>
      })}
    </section>}
  </div>;
}
