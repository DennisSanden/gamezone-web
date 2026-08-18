import Link from "next/link";
import { PATREON_SUPPORTERS, patreonTierLabel } from "@/lib/patreon-supporters";
import styles from "./page.module.css";

export default function PatreonPage() {
  const gold = PATREON_SUPPORTERS.filter((supporter) => supporter.tier === "gold");
  const supporters = PATREON_SUPPORTERS.filter((supporter) => supporter.tier === "supporter");
  const marquee = PATREON_SUPPORTERS.length ? [...PATREON_SUPPORTERS, ...PATREON_SUPPORTERS] : [];

  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.glow} />
        <div className={styles.heroInner}>
          <span className={styles.eyebrow}>GAMEZONE SUPPORTERS</span>
          <h1>De bygger servern <em>med oss.</em></h1>
          <p>GameZone är gratis att spela. Våra Patreon-supporters hjälper oss att hålla servern igång, utveckla nya system och göra världen större.</p>
          <div className={styles.heroActions}>
            <a href="https://www.patreon.com/16532203/join" target="_blank" rel="noreferrer" className={styles.primary}>Bli supporter</a>
            <Link href="/kom-igang" className={styles.secondary}>Spela på GameZone</Link>
          </div>
        </div>
      </section>

      <section className={styles.ticker} aria-label="GameZone Patreon-supporters">
        {marquee.length ? (
          <div className={styles.tickerTrack}>
            {marquee.map((supporter, index) => (
              <span key={`${supporter.minecraftUsername}-${index}`} data-tier={supporter.tier}>
                <b>{supporter.tier === "gold" ? "◆" : "♥"}</b>
                {supporter.displayName ?? supporter.minecraftUsername}
                <small>{patreonTierLabel(supporter.tier)}</small>
              </span>
            ))}
          </div>
        ) : <p>Supporterlistan är redo. Lägg in spelarnamnen i Patreon-registret så visas de här automatiskt.</p>}
      </section>

      <main className={styles.content}>
        <section className={styles.introGrid}>
          <article className={styles.story}>
            <span className={styles.eyebrow}>TACK FÖR STÖDET</span>
            <h2>Ni håller projektet levande.</h2>
            <p>Patreon ska kännas som ett erkännande, inte som en genväg i spelet. Därför syns supporters tydligt på webben och på sina spelarprofiler, utan att köpa sig till starkare gameplay.</p>
          </article>
          <article className={styles.stats}>
            <div><strong>{PATREON_SUPPORTERS.length}</strong><span>supporters</span></div>
            <div><strong>{gold.length}</strong><span>guldsupporters</span></div>
            <div><strong>{supporters.length}</strong><span>supporters</span></div>
          </article>
        </section>

        <section className={styles.tiers}>
          <article className={styles.tierCard}>
            <div className={styles.tierIcon}>♥</div>
            <span>SUPPORTER</span>
            <h2>Synlig del av GameZone</h2>
            <p>Supporter-badge på spelarprofilen och plats på den officiella supporter-sidan.</p>
          </article>
          <article className={`${styles.tierCard} ${styles.goldCard}`}>
            <div className={styles.tierIcon}>◆</div>
            <span>GULDSUPPORTER</span>
            <h2>Extra tydligt erkännande</h2>
            <p>Guldfärgad profilbadge och framhävd placering bland våra supporters. Fortfarande kosmetiskt, fortfarande fair.</p>
          </article>
        </section>

        <section className={styles.wall}>
          <header><div><span className={styles.eyebrow}>SUPPORTER WALL</span><h2>De som stöttar GameZone</h2></div><small>{PATREON_SUPPORTERS.length} registrerade</small></header>
          {PATREON_SUPPORTERS.length ? (
            <div className={styles.supporterGrid}>
              {[...gold, ...supporters].map((supporter) => (
                <Link href={`/spelare/${encodeURIComponent(supporter.minecraftUsername)}`} className={styles.supporterCard} data-tier={supporter.tier} key={supporter.minecraftUsername}>
                  <img src={`https://mc-heads.net/avatar/${encodeURIComponent(supporter.minecraftUsername)}/64`} alt="" />
                  <div><strong>{supporter.displayName ?? supporter.minecraftUsername}</strong><span>{patreonTierLabel(supporter.tier)}</span></div>
                  <b>{supporter.tier === "gold" ? "◆" : "♥"}</b>
                </Link>
              ))}
            </div>
          ) : <div className={styles.empty}>Inga Patreon-spelare är inlagda i registret ännu.</div>}
          <div className={styles.supportNotice}>
            <strong>Saknas du på listan?</strong>
            <span>Är du supporter men saknas på listan eller saknar rättigheter? Skapa ett supportärende i Discorden.</span>
          </div>
        </section>
      </main>
    </div>
  );
}
