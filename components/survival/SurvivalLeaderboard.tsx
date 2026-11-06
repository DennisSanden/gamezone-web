"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import type { SurvivalPlayerRow } from "@/lib/survival-stats-server";
import styles from "./SurvivalLeaderboard.module.css";

const number = new Intl.NumberFormat("sv-SE", { maximumFractionDigits: 1 });

type SortField = "matches" | "bestWave" | "kills";

export function SurvivalLeaderboard({ players }: { players: SurvivalPlayerRow[] }) {
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState<SortField>("matches");
  const [visible, setVisible] = useState(50);
  const filtered = useMemo(() => players
    .filter((player) => player.username.toLocaleLowerCase("sv-SE").includes(search.trim().toLocaleLowerCase("sv-SE")))
    .sort((a, b) => b[sort] - a[sort] || b.bestWave - a.bestWave || a.username.localeCompare(b.username, "sv-SE")), [players, search, sort]);
  return <section className={styles.section} aria-label="Survival deltagarlista">
    <div className={styles.heading}>
      <div><span>ALLA DELTAGARE</span><h2>Spelarstatistik</h2><p>{number.format(players.length)} registrerade spelare. Alla är med, oavsett Patreon.</p></div>
      <div className={styles.controls}>
        <input aria-label="Sök spelare" placeholder="Sök spelare..." value={search} onChange={(event) => { setSearch(event.target.value); setVisible(50); }} />
        <select aria-label="Sortera spelare" value={sort} onChange={(event) => { setSort(event.target.value as SortField); setVisible(50); }}>
          <option value="matches">Flest matcher</option><option value="bestWave">Högst wave</option><option value="kills">Flest kills</option>
        </select>
      </div>
    </div>
    {filtered.length === 0 ? <p className={styles.empty}>Ingen spelare matchar sökningen.</p> : <>
      <div className={styles.tableScroll}><table className={styles.table}>
        <thead><tr><th>#</th><th>Spelare</th><th>Matcher</th><th>Bästa wave</th><th>Kills</th><th>Senast spelat</th></tr></thead>
        <tbody>{filtered.slice(0, visible).map((player, index) => <tr key={player.playerUuid || player.username}>
          <td className={styles.rank}>{index + 1}</td>
          <td><Link className={styles.playerLink} href={`/spelare/${encodeURIComponent(player.username)}`}>{player.username}</Link>
            {player.isPatreon && <span className={styles.patreonBadge}>♥ Patreon</span>}
            {player.premium && <div className={styles.extra}>Skada {number.format(player.premium.damage)} · Läkta hjärtan {number.format(player.premium.healingHearts)} · Summons {number.format(player.premium.summons)}</div>}
          </td>
          <td>{number.format(player.matches)}</td><td>{number.format(player.bestWave)}</td><td>{number.format(player.kills)}</td>
          <td className={styles.last}>{player.lastPlayed ? new Date(player.lastPlayed).toLocaleDateString("sv-SE") : "Okänt"}</td>
        </tr>)}</tbody>
      </table></div>
      {visible < filtered.length && <button className={styles.more} type="button" onClick={() => setVisible((count) => count + 50)}>Visa fler deltagare ({filtered.length - visible} kvar)</button>}
    </>}
  </section>;
}
