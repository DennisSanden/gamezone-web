"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import styles from "./PlayerProfile.module.css";
import { getPatreonSupporter, patreonTierLabel } from "@/lib/patreon-supporters";

type Title = { title: string; category: string; level: number; productionBonusPercent: number };
type Settlement = { settlementId: string; name: string; level: number; levelName: string; role: string };
type Company = { companyId: string; name: string; role: string; status: string };
type Statistic = { key: string; value: number };
type Membership = { settlementId: string; settlementName: string; settlementLevel: number; settlementLevelName: string; role: string; status: string; joinedAt: string; leftAt: string | null };
type Culture = { key: string; displayName: string; subtitle: string; bonus: string; symbol: string };
type Bonus = { origin: "PERSONAL" | "SETTLEMENT"; category: string; source: string; effect: string; scope: string };
type Character = {
  level: number;
  experience: number;
  levelExperience: number;
  nextLevelExperience: number;
  highestLevelEver: number;
  secondChanceAvailable: boolean;
  culture?: Culture | null;
  unlockedAbilities: string[];
  productionBonusBasisPoints: number;
  bonuses: Bonus[];
};
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
  character: Character;
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
  return days > 0 ? `${days} dagar, ${hours} timmar` : `${hours} timmar, ${minutes} minuter`;
}

function date(value?: string | null, withTime = true) {
  if (!value) return "Okänt";
  return new Intl.DateTimeFormat("sv-SE", withTime ? { dateStyle: "medium", timeStyle: "short" } : { dateStyle: "medium" }).format(new Date(value));
}

function statLabel(key: string) {
  return key.toLowerCase().replaceAll("_", " ").replace(/^./, (letter) => letter.toUpperCase());
}

function roleLabel(role?: string | null) {
  if (!role) return "Ingen roll";
  const labels: Record<string, string> = { KING: "Kung", LORD: "Lord", MEMBER: "Invånare", OWNER: "Ägare" };
  return labels[role.toUpperCase()] ?? statLabel(role);
}

function finiteNumber(value: unknown, fallback = 0) {
  return typeof value === "number" && Number.isFinite(value) ? value : fallback;
}

function percentFromBasisPoints(basisPoints: number) {
  const percent = basisPoints / 100;
  return `+${new Intl.NumberFormat("sv-SE", { maximumFractionDigits: 1 }).format(percent)}%`;
}

const bonusCategoryLabels: Record<string, string> = {
  PRODUCTION: "Produktion",
  MOVEMENT: "Rörelse",
  SURVIVAL: "Överlevnad",
  COMBAT: "Strid",
  ECONOMY: "Ekonomi",
  PROGRESSION: "Progression",
  WAR: "Krig",
};

function normalizeProfile(input: Profile): Profile {
  if (!input?.player || !input?.character) {
    throw new Error("Spelarprofilen saknar nödvändig data från GameZone Engine.");
  }

  const level = Math.max(1, Math.trunc(finiteNumber(input.character.level, 1)));
  const levelExperience = Math.max(0, finiteNumber(input.character.levelExperience));
  const experience = Math.max(levelExperience, finiteNumber(input.character.experience, levelExperience));
  const nextLevelExperience = Math.max(
    levelExperience + 1,
    finiteNumber(input.character.nextLevelExperience, levelExperience + 1),
  );

  return {
    ...input,
    totalProducedItems: Math.max(0, finiteNumber(input.totalProducedItems)),
    totalPlayTimeSeconds: Math.max(0, finiteNumber(input.totalPlayTimeSeconds)),
    economy: input.economy && typeof input.economy === "object" ? input.economy : {},
    statistics: Array.isArray(input.statistics) ? input.statistics : [],
    settlementHistory: Array.isArray(input.settlementHistory) ? input.settlementHistory : [],
    character: {
      ...input.character,
      level,
      experience,
      levelExperience,
      nextLevelExperience,
      highestLevelEver: Math.max(level, Math.trunc(finiteNumber(input.character.highestLevelEver, level))),
      secondChanceAvailable: Boolean(input.character.secondChanceAvailable),
      culture: input.character.culture ?? null,
      unlockedAbilities: Array.isArray(input.character.unlockedAbilities) ? input.character.unlockedAbilities : [],
      productionBonusBasisPoints: Math.max(0, finiteNumber(input.character.productionBonusBasisPoints)),
      bonuses: Array.isArray(input.character.bonuses)
        ? input.character.bonuses.map((bonus) => ({
            ...bonus,
            origin: bonus?.origin === "SETTLEMENT" ? "SETTLEMENT" : "PERSONAL",
          }))
        : [],
    },
  };
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
        if (!cancelled) setProfile(normalizeProfile(payload.result));
      })
      .catch((reason) => { if (!cancelled) setError(reason instanceof Error ? reason.message : "Spelaren kunde inte hittas."); })
      .finally(() => { if (!cancelled) setLoading(false); });
    return () => { cancelled = true; };
  }, [username]);

  const stats = useMemo(() => [...(profile?.statistics ?? [])].sort((a, b) => b.value - a.value), [profile]);
  const economy = useMemo(() => Object.entries(profile?.economy ?? {}).filter(([, value]) => Number.isFinite(value)), [profile]);
  const bonusGroups = useMemo(() => {
    const grouped = { PERSONAL: new Map<string, Bonus[]>(), SETTLEMENT: new Map<string, Bonus[]>() };
    for (const bonus of profile?.character.bonuses ?? []) {
      const origin = bonus.origin === "SETTLEMENT" ? "SETTLEMENT" : "PERSONAL";
      const key = bonus.category || "OTHER";
      grouped[origin].set(key, [...(grouped[origin].get(key) ?? []), bonus]);
    }
    return {
      personal: [...grouped.PERSONAL.entries()],
      settlement: [...grouped.SETTLEMENT.entries()],
    };
  }, [profile]);

  if (loading) return <main className={styles.state}><div className={styles.loader} /><span>GAMEZONE PROFILREGISTER</span><h1>Hämtar spelarprofil</h1><p>Samlar statistik, tillhörighet och historik.</p></main>;
  if (error || !profile) return <main className={styles.state}><b>404</b><span>OKÄND SPELARE</span><h1>Spelaren hittades inte</h1><p>{error}</p><Link href="/leaderboards">Till topplistorna</Link></main>;

  const { player, character } = profile;
  const title = player.productionTitle;
  const culture = character.culture;
  const patreon = getPatreonSupporter(player.username);
  const levelSpan = Math.max(1, character.nextLevelExperience - character.levelExperience);
  const levelProgress = Math.max(0, Math.min(100, ((character.experience - character.levelExperience) / levelSpan) * 100));

  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.heroPattern} />
        <div className={styles.heroInner}>
          <Link href="/leaderboards" className={styles.backLink}>← Till topplistorna</Link>
          <div className={styles.identity}>
            <div className={styles.avatarFrame}>
              <div className={styles.avatarGlow} />
              <img className={styles.skin} src={`https://mc-heads.net/body/${encodeURIComponent(player.username)}/left`} alt={`${player.username}s Minecraft-skin`} />
            </div>
            <div className={styles.heroCopy}>
              <div className={styles.status}><i data-online={player.online} />{player.online ? "Online på servern" : `Senast sedd ${date(player.lastSeenAt)}`}</div>
              <span className={styles.eyebrow}>Officiell spelarprofil</span>
              <div className={styles.nameLine}>
                <h1>{player.username}</h1>
                {patreon && <Link href="/patreon" className={styles.patreonBadge} data-tier={patreon.tier}>{patreon.tier === "gold" ? "◆" : "♥"} {patreonTierLabel(patreon.tier)}</Link>}
              </div>
              <p className={styles.subtitle}>{culture ? `${culture.symbol} ${culture.displayName}` : (title?.title ?? "Invånare i GameZone")}</p>
              <div className={styles.tags}>
                <span><small>Karaktär</small>Level {character.level}</span>
                {culture && <span><small>Kultur</small>{culture.displayName}</span>}
                {player.settlement && <span><small>Settlement</small>{player.settlement.name}</span>}
                {player.company && <span><small>Företag</small>{player.company.name}</span>}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.overview} aria-label="Spelaröversikt">
        <article><span>Level</span><strong>{character.level}</strong><small>{number.format(character.experience)} XP totalt</small></article>
        <article><span>Personligt rekord</span><strong>Level {character.highestLevelEver}</strong><small>högsta level någonsin</small></article>
        <article><span>Kultur</span><strong>{culture ? `${culture.symbol} ${culture.displayName}` : "Ej vald"}</strong><small>{culture?.bonus ?? "ingen kulturbonus"}</small></article>
        <article className={styles.productionOverview}><span>Produktionsbonus</span><strong>{percentFromBasisPoints(character.productionBonusBasisPoints)}</strong><small>nuvarande totala bonus</small></article>
        <article><span>Total speltid</span><strong>{duration(profile.totalPlayTimeSeconds)}</strong><small>sedan första besöket</small></article>
      </section>

      <div className={styles.content}>
        <div className={styles.mainColumn}>
          <section className={`${styles.panel} ${styles.characterPanel}`}>
            <header className={styles.panelHeader}><div><span className={styles.eyebrow}>KARAKTÄREN</span><h2>Level {character.level}</h2></div><p>{culture ? `${culture.symbol} ${culture.displayName}, ${culture.subtitle}` : "Ingen kultur har valts ännu."}</p></header>
            <div className={styles.levelProgressHeader}><span>{number.format(character.experience - character.levelExperience)} / {number.format(character.nextLevelExperience - character.levelExperience)} XP</span><strong>{Math.floor(levelProgress)}%</strong></div>
            <div className={styles.levelProgress}><i style={{ width: `${levelProgress}%` }} /></div>
            <div className={styles.characterMeta}>
              <div><small>Nästa level</small><strong>{number.format(character.nextLevelExperience - character.experience)} XP kvar</strong></div>
              <div><small>Kulturbonus</small><strong>{culture?.bonus ?? "Ingen"}</strong></div>
              <div><small>Rekord</small><strong>Level {character.highestLevelEver}</strong></div>
            </div>
            <div className={styles.abilities}>
              <span>Upplåsta levelbonusar</span>
              {character.unlockedAbilities.length ? <div>{character.unlockedAbilities.map((ability) => <b key={ability}>{ability}</b>)}</div> : <p>Första bonusen låses upp på Level 10.</p>}
            </div>
          </section>

          <section className={`${styles.panel} ${styles.bonusPanel}`}>
            <header className={styles.panelHeader}>
              <div><span className={styles.eyebrow}>ALLA BONUSAR</span><h2>Aktiva effekter</h2></div>
              <div className={styles.productionTotal}><small>Total produktion</small><strong>{percentFromBasisPoints(character.productionBonusBasisPoints)}</strong></div>
            </header>
            {(bonusGroups.personal.length || bonusGroups.settlement.length) ? (
              <div className={styles.bonusOrigins}>
                <div className={styles.bonusOrigin}>
                  <div className={styles.bonusOriginHeader}><span>PERSONLIGA BONUSAR</span><p>Kultur, level, titlar och andra effekter som följer spelaren.</p></div>
                  {bonusGroups.personal.length ? (
                    <div className={styles.bonusGroups}>
                      {bonusGroups.personal.map(([category, bonuses]) => (
                        <div className={styles.bonusGroup} key={`personal-${category}`}>
                          <h3>{bonusCategoryLabels[category] ?? statLabel(category)}</h3>
                          <div className={styles.bonusGrid}>
                            {bonuses.map((bonus, index) => (
                              <article className={styles.bonusCard} key={`personal-${category}-${bonus.source}-${bonus.effect}-${index}`}>
                                <div><strong>{bonus.source}</strong><span>{bonus.effect}</span></div>
                                <small>{bonus.scope}</small>
                              </article>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : <p className={styles.empty}>Inga personliga bonusar just nu.</p>}
                </div>

                <div className={styles.bonusOrigin}>
                  <div className={styles.bonusOriginHeader}><span>SETTLEMENTBONUSAR</span><p>Byggnader, policies och roller som spelaren får genom sitt Settlement.</p></div>
                  {bonusGroups.settlement.length ? (
                    <div className={styles.bonusGroups}>
                      {bonusGroups.settlement.map(([category, bonuses]) => (
                        <div className={styles.bonusGroup} key={`settlement-${category}`}>
                          <h3>{bonusCategoryLabels[category] ?? statLabel(category)}</h3>
                          <div className={styles.bonusGrid}>
                            {bonuses.map((bonus, index) => (
                              <article className={styles.bonusCard} key={`settlement-${category}-${bonus.source}-${bonus.effect}-${index}`}>
                                <div><strong>{bonus.source}</strong><span>{bonus.effect}</span></div>
                                <small>{bonus.scope}</small>
                              </article>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : <p className={styles.empty}>Inga aktiva Settlementbonusar just nu.</p>}
                </div>
              </div>
            ) : <p className={styles.empty}>Inga aktiva bonusar just nu.</p>}
          </section>

          <section className={styles.panel}>
            <header className={styles.panelHeader}><div><span className={styles.eyebrow}>PRESTATION</span><h2>Spelarens statistik</h2></div><p>Registrerade framsteg och aktivitet från GameZone.</p></header>
            {stats.length ? <div className={styles.statGrid}>{stats.map((stat, index) => <article key={stat.key} className={styles.statCard}><span className={styles.statRank}>{String(index + 1).padStart(2, "0")}</span><div><small>{statLabel(stat.key)}</small><strong>{number.format(stat.value)}</strong></div></article>)}</div> : <p className={styles.empty}>Ingen detaljerad statistik har registrerats ännu.</p>}
          </section>

          <section className={styles.panel}>
            <header className={styles.panelHeader}><div><span className={styles.eyebrow}>RESAN</span><h2>Settlementhistorik</h2></div><p>Spelarens tidigare och nuvarande hem i världen.</p></header>
            {profile.settlementHistory.length ? <div className={styles.timeline}>{profile.settlementHistory.map((entry) => <article key={`${entry.settlementId}-${entry.joinedAt}`} className={styles.timelineItem}><div className={styles.timelineDot} data-active={!entry.leftAt} /><div><div className={styles.timelineTitle}><strong>{entry.settlementName}</strong><span>{entry.leftAt ? "Tidigare" : "Nuvarande"}</span></div><p>{entry.settlementLevelName}, {roleLabel(entry.role)}</p><small>{date(entry.joinedAt)} till {entry.leftAt ? date(entry.leftAt) : "idag"}</small></div></article>)}</div> : <p className={styles.empty}>Ingen settlementhistorik ännu.</p>}
          </section>
        </div>

        <aside className={styles.sidebar}>
          <section className={styles.panel}>
            <header className={styles.compactHeader}><span className={styles.eyebrow}>IDENTITET</span><h2>Roller och tillhörighet</h2></header>
            <dl className={styles.facts}>
              <div><dt>Kultur</dt><dd>{culture ? `${culture.symbol} ${culture.displayName}` : "Ej vald"}</dd></div>
              <div><dt>Level</dt><dd>{character.level}</dd></div>
              <div><dt>Högsta level</dt><dd>{character.highestLevelEver}</dd></div>
              <div><dt>Aktiv titel</dt><dd>{title?.title ?? "Ingen"}</dd></div>
              <div><dt>Titelnivå</dt><dd>{title ? `Nivå ${title.level}` : "Ingen"}</dd></div>
              <div><dt>Produktionsbonus</dt><dd>{percentFromBasisPoints(character.productionBonusBasisPoints)}</dd></div>
              <div><dt>Settlement</dt><dd>{player.settlement?.name ?? "Fristående"}</dd></div>
              <div><dt>Roll</dt><dd>{roleLabel(player.settlement?.role)}</dd></div>
              <div><dt>Företag</dt><dd>{player.company?.name ?? "Inget"}</dd></div>
              {patreon && <div><dt>Patreon</dt><dd><Link href="/patreon" className={styles.supporterFact} data-tier={patreon.tier}>{patreonTierLabel(patreon.tier)}</Link></dd></div>}
            </dl>
          </section>

          {economy.length > 0 && <section className={styles.panel}>
            <header className={styles.compactHeader}><span className={styles.eyebrow}>EKONOMI</span><h2>Ekonomisk aktivitet</h2></header>
            <div className={styles.economyList}>{economy.map(([key, value]) => <div key={key}><span>{statLabel(key)}</span><strong>{number.format(value)}</strong></div>)}</div>
          </section>}

          <section className={styles.profileStamp}>
            <span>GAMEZONE CITIZEN</span>
            <strong>{player.username}</strong>
            <small>UUID {player.minecraftUuid.slice(0, 8).toUpperCase()}</small>
          </section>
        </aside>
      </div>
    </main>
  );
}
