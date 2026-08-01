"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import styles from "./PlayerProfile.module.css";

type Title = { title: string; category: string; level: number; productionBonusPercent: number };
type Settlement = { settlementId: string; name: string; level: number; levelName: string; role: string };
type Company = { companyId: string; name: string; role: string; status: string };
type Statistic = { key: string; value: number };
type Membership = { settlementId: string; settlementName: string; settlementLevel: number; settlementLevelName: string; role: string; status: string; joinedAt: string; leftAt: string | null };
type Profile = {
  player: {
    playerId: string;
    minecraftUuid: string;
    username: string;
    coins: number;
    online: boolean;
    firstJoinAt: string;
    lastJoinAt: string;
    lastSeenAt: string;
    settlement?: Settlement | null;
    company?: Company | null;
    productionTitle?: Title | null;
  };
  totalProducedItems: number;
  totalPlayTimeSeconds: number;
  economy: Record<string, number>;
  statistics: Statistic[];
  settlementHistory: Membership[];
};

type Envelope = { status: string; result?: Profile; message?: string; errors?: Array<{ message?: string }> };
const number = new Intl.NumberFormat("sv-SE");

function duration(seconds: number) {
  const days = Math.floor(seconds / 86400);
  const hours = Math.floor((seconds % 86400) / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  return days > 0 ? `${days} d ${hours} h` : `${hours} h ${minutes} min`;
}

function date(value?: string | null) {
  if (!value) return "Okänt";
  return new Intl.DateTimeFormat("sv-SE", { dateStyle: "medium", timeStyle: "short" }).format(new Date(value));
}

function statLabel(key: string) {
  return key.toLowerCase().replaceAll("_", " ").replace(/^./, (letter) => letter.toUpperCase());
}

export function PlayerProfile({ username }: { username: string }) {
  const [profile, setProfile] = useState<Profile | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;
    fetch(`/api/players/${encodeURIComponent(username)}`, { cache: "no-store" })
      .then(async (response) => {
        const payload = await response.json() as Envelope;
        if (!response.ok || payload.status !== "SUCCESS" || !payload.result) {
          throw new Error(payload.message ?? payload.errors?.[0]?.message ?? "Spelaren kunde inte hittas.");
        }
        if (!cancelled) setProfile(payload.result);
      })
      .catch((reason) => { if (!cancelled) setError(reason instanceof Error ? reason.message : "Spelaren kunde inte hittas."); })
      .finally(() => { if (!cancelled) setLoading(false); });
    return () => { cancelled = true; };
  }, [username]);

  const stats = useMemo(() => profile?.statistics ?? [], [profile]);

  if (loading) return <main className={styles.state}><div className={styles.loader} /><h1>Hämtar spelarprofil</h1></main>;
  if (error || !profile) return <main className={styles.state}><span>404</span><h1>Spelaren hittades inte</h1><p>{error}</p><Link href="/leaderboards">Till topplistorna</Link></main>;

  const { player } = profile;
  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.grid} />
        <img className={styles.skin} src={`https://mc-heads.net/body/${encodeURIComponent(player.username)}/left`} alt={`${player.username}s Minecraft-skin`} />
        <div className={styles.heroCopy}>
          <div className={styles.status}><i data-online={player.online} />{player.online ? "Online nu" : `Senast sedd ${date(player.lastSeenAt)}`}</div>
          <span className={styles.eyebrow}>GameZone spelarprofil</span>
          <h1>{player.username}</h1>
          <p className={styles.title}>{player.productionTitle?.title ?? "Ingen aktiv titel"}</p>
          <div className={styles.badges}>
            {player.settlement && <Link href="/settlements">{player.settlement.name}, {player.settlement.levelName}</Link>}
            {player.company && <span>{player.company.name}</span>}
            <span>{number.format(player.coins)} coins</span>
          </div>
        </div>
      </section>

      <section className={styles.summary}>
        <article><span>Speltid</span><strong>{duration(profile.totalPlayTimeSeconds)}</strong></article>
        <article><span>Producerade items</span><strong>{number.format(profile.totalProducedItems)}</strong></article>
        <article><span>Coins</span><strong>{number.format(player.coins)}</strong></article>
        <article><span>Första besök</span><strong>{date(player.firstJoinAt)}</strong></article>
      </section>

      <div className={styles.columns}>
        <section className={styles.card}>
          <header><span>Statistik</span><h2>Spelarens siffror</h2></header>
          {stats.length ? <div className={styles.stats}>{stats.map((stat) => <div key={stat.key}><span>{statLabel(stat.key)}</span><strong>{number.format(stat.value)}</strong></div>)}</div> : <p className={styles.empty}>Ingen detaljerad statistik registrerad ännu.</p>}
        </section>

        <aside className={styles.stack}>
          <section className={styles.card}>
            <header><span>Identitet</span><h2>Roller och tillhörighet</h2></header>
            <dl className={styles.facts}>
              <div><dt>Titel</dt><dd>{player.productionTitle?.title ?? "Ingen"}</dd></div>
              <div><dt>Settlement</dt><dd>{player.settlement?.displayName ?? "Inget"}</dd></div>
              <div><dt>Settlement-roll</dt><dd>{player.settlement?.role ?? "Ingen"}</dd></div>
              <div><dt>Företag</dt><dd>{player.company?.displayName ?? "Inget"}</dd></div>
            </dl>
          </section>
          <section className={styles.card}>
            <header><span>Historik</span><h2>Settlements</h2></header>
            {profile.settlementHistory.length ? <div className={styles.history}>{profile.settlementHistory.map((entry) => <div key={`${entry.settlementId}-${entry.joinedAt}`}><strong>{entry.settlementName}</strong><span>{entry.settlementLevelName}, {entry.role}</span><small>{date(entry.joinedAt)}{entry.leftAt ? ` till ${date(entry.leftAt)}` : " till idag"}</small></div>)}</div> : <p className={styles.empty}>Ingen settlementhistorik ännu.</p>}
          </section>
        </aside>
      </div>
    </main>
  );
}
