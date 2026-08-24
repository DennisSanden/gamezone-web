"use client";

import Link from "next/link";
import { Fragment, type ReactNode, useEffect, useState } from "react";
import styles from "./ChroniclesTimeline.module.css";

type Category = "ALL" | "WAR" | "POLITICS" | "RELIC" | "SETTLEMENT" | "ALLIANCE" | "PLAYER" | "TOURNAMENT" | "WORLD";
type Entry = {
  id: string; category: Exclude<Category,"ALL">; title: string; body: string; createdAt: string;
  primaryEntityType?: string | null; primaryEntityId?: string | null; primaryEntityName?: string | null;
  secondaryEntityType?: string | null; secondaryEntityId?: string | null; secondaryEntityName?: string | null;
  sourceType?: string | null; sourceKey?: string | null;
};
type Envelope = { status: string; result?: Entry[]; message?: string; errors?: Array<{message?:string}> };
type EntityRef = { key: string; name: string; href: string };

const filters: Array<{key:Category;label:string;mark:string}> = [
  {key:"ALL",label:"Alla",mark:"✦"},{key:"WAR",label:"Krig",mark:"⚔"},{key:"POLITICS",label:"Politik",mark:"♛"},
  {key:"RELIC",label:"Reliker",mark:"◆"},{key:"SETTLEMENT",label:"Settlements",mark:"♜"},{key:"ALLIANCE",label:"Allianser",mark:"◇"},
  {key:"PLAYER",label:"Spelare",mark:"♟"},{key:"TOURNAMENT",label:"Turneringar",mark:"▲"},{key:"WORLD",label:"Världen",mark:"◎"},
];
const categoryName: Record<Exclude<Category,"ALL">,string> = { WAR:"Krig", POLITICS:"Politik", RELIC:"Relik", SETTLEMENT:"Settlement", ALLIANCE:"Allians", PLAYER:"Spelare", TOURNAMENT:"Turnering", WORLD:"Världen" };

const relicWikiById: Record<string,string> = {
  "miners-companion":"/wiki/relics/miners-companion",
  "frostbite":"/wiki/relics/frostbite",
  "book-of-fortune":"/wiki/relics/book-of-fortune",
  "deepdelver":"/wiki/relics/deepdelver",
  "frostbrytaren":"/wiki/relics/frostbrytaren",
  "book-of-the-ancients":"/wiki/relics/book-of-the-ancients",
};

function hrefForEntity(type?: string|null,id?:string|null,name?:string|null) {
  if (!type || !name) return null;
  if (type === "SETTLEMENT" && id) return `/settlements?settlement=${encodeURIComponent(id)}`;
  if (type === "COMPANY" && id) return `/companies/${encodeURIComponent(id)}`;
  if (type === "PLAYER") return `/spelare/${encodeURIComponent(name)}`;
  return null;
}

function relicRef(entry: Entry): EntityRef | null {
  if (entry.sourceType !== "RELIC_FOUND" || !entry.sourceKey?.startsWith("relic-found:")) return null;
  const relicId = entry.sourceKey.slice("relic-found:".length).trim().toLowerCase();
  if (!relicId) return null;
  const marker = " har återfunnits";
  const relicName = entry.title.endsWith(marker) ? entry.title.slice(0,-marker.length).trim() : "Reliken";
  return { key:`RELIC:${relicId}`, name:relicName, href:relicWikiById[relicId] ?? "/relics" };
}

function refsForEntry(entry: Entry): EntityRef[] {
  const refs: EntityRef[] = [];
  const add = (type?:string|null,id?:string|null,name?:string|null) => {
    const href = hrefForEntity(type,id,name);
    if (href && name) refs.push({key:`${type}:${id ?? name}`,name,href});
  };
  add(entry.primaryEntityType,entry.primaryEntityId,entry.primaryEntityName);
  add(entry.secondaryEntityType,entry.secondaryEntityId,entry.secondaryEntityName);
  const relic = relicRef(entry);
  if (relic) refs.push(relic);
  return refs.sort((a,b) => b.name.length-a.name.length);
}

function linkedText(text: string, refs: EntityRef[]): ReactNode {
  if (!text || refs.length === 0) return text;
  const usable = refs.filter(ref => ref.name && text.includes(ref.name));
  if (usable.length === 0) return text;
  const escaped = usable.map(ref => ref.name.replace(/[.*+?^${}()|[\]\\]/g,"\\$&"));
  const regex = new RegExp(`(${escaped.join("|")})`,"g");
  const byName = new Map(usable.map(ref => [ref.name,ref]));
  return text.split(regex).map((part,index) => {
    const ref = byName.get(part);
    return ref ? <Link className={styles.inlineEntity} href={ref.href} key={`${ref.key}:${index}`}>{part}</Link> : <Fragment key={`text:${index}`}>{part}</Fragment>;
  });
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
        const refs = refsForEntry(entry);
        return <article className={styles.entry} key={entry.id}>
          <div className={styles.rail}><span className={styles.dot}/></div>
          <div className={styles.card}>
            <div className={styles.meta}><span className={styles.category}>{categoryName[entry.category]}</span><time dateTime={entry.createdAt}>{date.toLocaleDateString("sv-SE",{day:"numeric",month:"long",year:"numeric"})}</time></div>
            <h2>{linkedText(entry.title,refs)}</h2><p>{linkedText(entry.body,refs)}</p>
          </div>
        </article>
      })}
    </section>}
  </div>;
}
