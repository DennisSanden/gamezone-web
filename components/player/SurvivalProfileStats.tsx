"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import type { SurvivalClassLevel, SurvivalPlayerRow } from "@/lib/survival-stats-server";
import styles from "./SurvivalProfileStats.module.css";

const number = new Intl.NumberFormat("sv-SE", { maximumFractionDigits: 1 });
const premiumMetrics: Array<{ key: keyof NonNullable<SurvivalPlayerRow["premium"]>; name: string }> = [
  { key: "damage", name: "Total skada" }, { key: "summonDamage", name: "Summon-skada" },
  { key: "summons", name: "Framkallade enheter" }, { key: "healingHearts", name: "Läkta hjärtan" },
  { key: "revives", name: "Återupplivningar" }, { key: "damageTanked", name: "Tankad skada" },
  { key: "shieldBlocked", name: "Blockerat med sköld" }, { key: "ironBlocked", name: "Blockerat med Stålsätt" },
  { key: "earnedCoins", name: "Intjänade mynt" }, { key: "averageWave", name: "Snittwave" },
  { key: "killsPerMatch", name: "Kills per match" },
];

export function SurvivalProfileStats({ username }: { username: string }) {
  const [player, setPlayer] = useState<SurvivalPlayerRow | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [classLevels, setClassLevels] = useState<SurvivalClassLevel[]>([]);
  useEffect(() => {
    let cancelled = false;
    setLoading(true);
    setError(false);
    setClassLevels([]);
    fetch(`/api/survival/classes/${encodeURIComponent(username)}`, { cache: "no-store" })
      .then(async r => r.ok ? (await r.json()) as {data: SurvivalClassLevel[]} : { data: [] })
      .then(result => { if (!cancelled) setClassLevels(result.data ?? []); })
      .catch(() => {});
    fetch(`/api/survival/players/${encodeURIComponent(username)}`, { cache: "no-store" })
      .then(async (response) => {
        if (!response.ok) throw new Error("API-fel");
        return response.json() as Promise<{ data: SurvivalPlayerRow | null }>;
      })
      .then((response) => { if (!cancelled) setPlayer(response.data); })
      .catch(() => { if (!cancelled) setError(true); })
      .finally(() => { if (!cancelled) setLoading(false); });
    return () => { cancelled = true; };
  }, [username]);

  return <section className={styles.panel} aria-label="Survivalstatistik">
    <header className={styles.header}><div><span className={styles.eyebrow}>SURVIVAL</span><h2>Eventstatistik</h2></div><Link href="/survival">Se alla deltagare</Link></header>
    {loading ? <p className={styles.muted}>Hämtar statistik...</p>
      : error ? <p className={styles.muted}>Survival-statistiken kunde inte hämtas.</p>
      : !player ? <p className={styles.muted}>Inga avslutade Survival-matcher registrerade för den här spelaren ännu.</p>
      : <>
        <div className={styles.grid}>
          <div><small>Matcher</small><strong>{number.format(player.matches)}</strong></div>
          <div><small>Bästa wave</small><strong>{number.format(player.bestWave)}</strong></div>
          <div><small>Kills</small><strong>{number.format(player.kills)}</strong></div>
        </div>
        {classLevels.length > 0 && <div className={styles.classLevels}>
          <h3>Klassnivåer</h3>
          <div className={styles.classGrid}>{classLevels.map(cls => <div className={styles.classLevel} key={cls.role}>
            <div className={styles.classHeading}><b>{cls.role}</b><strong>Level {cls.level}</strong></div>
            <div className={styles.xpTrack} role="progressbar" aria-label={`${cls.role} XP till nästa nivå`} aria-valuemin={0} aria-valuemax={cls.needed || 1} aria-valuenow={cls.needed ? Math.min(cls.needed, cls.progress) : 1}>
              <div style={{ width: `${cls.needed ? Math.min(100, 100 * cls.progress / cls.needed) : 100}%` }} />
            </div>
            <small>{cls.needed ? `${number.format(cls.progress)} / ${number.format(cls.needed)} XP till nästa nivå` : "Maxnivå uppnådd"}</small>
          </div>)}</div>
        </div>}
        {player.premium ? <>
          <p className={styles.premiumTitle}>♥ Patreon-statistik</p>
          <div className={styles.grid}>{premiumMetrics.map(({ key, name }) => {
            const value = player.premium?.[key];
            return typeof value === "number" ? <div key={key}><small>{name}</small><strong>{number.format(value)}</strong></div> : null;
          })}</div>
          {player.premium.personalBests && <div className={styles.history}><h3>Personliga rekord</h3>
            {Object.entries(player.premium.personalBests).map(([key, value]) => <p key={key}>
              <b>{{ kills: "Kills", damage: "Skada", summons: "Summons", summonDamage: "Summon-skada", healingHearts: "Läkta hjärtan", revives: "Återupplivningar", tanked: "Tankad skada" }[key] ?? key}</b>
              <span>{number.format(value)}</span>
            </p>)}
          </div>}
          {player.premium.classes?.length ? <div className={styles.history}><h3>Klasser</h3>{player.premium.classes.map((item) => <p key={item.role}><b>{item.role}</b><span>{item.games} matcher, wave {item.bestWave}, {item.kills} kills</span></p>)}</div> : null}
          {player.premium.history?.length ? <div className={styles.history}><h3>Senaste 20 matcher</h3>{player.premium.history.map((item, i) => <p key={`${item.endedAt}-${i}`}><b>{item.role}</b><span>Wave {item.wave}, {item.kills} kills, {number.format(item.damage)} skada</span></p>)}</div> : null}
        </> : <p className={styles.muted}>{player.isPatreon ? "Avancerad statistik kräver anslutning till GameZones statistik-API." : "Grundstatistiken visas för alla. Aktiva Patreons får fler detaljer på sina profiler."}</p>}
      </>}
  </section>;
}
