import Link from "next/link";
import { PATREON_SUPPORTERS, patreonTierLabel } from "@/lib/patreon-supporters";
import styles from "./page.module.css";

export default function PatreonPage() {
  const gold = PATREON_SUPPORTERS.filter((supporter) => supporter.tier === "gold");
  const supporters = PATREON_SUPPORTERS.filter((supporter) => supporter.tier === "supporter");

  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.heroPixels} aria-hidden="true">
          <span className={styles.pixelOne} />
          <span className={styles.pixelTwo} />
          <span className={styles.pixelThree} />
          <span className={styles.pixelFour} />
        </div>

        <div className={styles.heroInner}>
          <div className={styles.heroCopy}>
            <span className={styles.eyebrow}>GAMEZONE SUPPORTERS</span>
            <h1>Ni gör GameZone <em>större.</em></h1>
            <p>
              Servern är gratis att spela, men inte gratis att driva. Våra supporters hjälper till att hålla världen online,
              utvecklingen rullande och nästa stora idé möjlig.
            </p>
            <div className={styles.heroActions}>
              <a href="https://www.patreon.com/16532203/join" target="_blank" rel="noreferrer" className={styles.primary}>
                ♥ Bli supporter
              </a>
              <Link href="/kom-igang" className={styles.secondary}>Spela på GameZone</Link>
            </div>
          </div>

          <div className={styles.heroCard}>
            <div className={styles.heroBadge}>TACK!</div>
            <div className={styles.heroFaces}>
              {[...gold, ...supporters].slice(0, 8).map((supporter, index) => (
                <img
                  key={supporter.minecraftUsername}
                  src={`https://mc-heads.net/avatar/${encodeURIComponent(supporter.minecraftUsername)}/64`}
                  alt=""
                  style={{ zIndex: 10 - index }}
                />
              ))}
            </div>
            <strong>{PATREON_SUPPORTERS.length} personer stöttar GameZone</strong>
            <span>och får en permanent plats här på sidan.</span>
          </div>
        </div>
      </section>

      <main className={styles.content}>
        <section className={styles.thankYou}>
          <div className={styles.thankIcon}>♥</div>
          <div>
            <span className={styles.eyebrow}>TILL ER SOM STÖTTAR</span>
            <h2>På riktigt, tack.</h2>
            <p>
              Patreon ska inte köpa makt på servern. Det ska visa vilka som valt att hjälpa projektet framåt.
              Därför får supporters synlighet, status och lite extra kärlek, utan att gameplay blir pay to win.
            </p>
          </div>
          <div className={styles.miniStats}>
            <div><strong>{gold.length}</strong><span>Guldsupporters</span></div>
            <div><strong>{supporters.length}</strong><span>Supporters</span></div>
          </div>
        </section>

        <section className={styles.goldSection}>
          <div className={styles.sectionHeader}>
            <div>
              <span className={styles.goldEyebrow}>◆ GULDSUPPORTERS</span>
              <h2>Hall of Gold</h2>
              <p>De som gått ett steg längre och stöttar GameZone på högsta nivån.</p>
            </div>
            <div className={styles.goldCount}>{gold.length}</div>
          </div>

          <div className={styles.goldGrid}>
            {gold.map((supporter) => (
              <Link
                href={`/spelare/${encodeURIComponent(supporter.minecraftUsername)}`}
                className={styles.goldCard}
                key={supporter.minecraftUsername}
              >
                <div className={styles.crown}>◆</div>
                <img src={`https://mc-heads.net/avatar/${encodeURIComponent(supporter.minecraftUsername)}/96`} alt="" />
                <strong>{supporter.displayName ?? supporter.minecraftUsername}</strong>
                <span>{patreonTierLabel(supporter.tier)}</span>
              </Link>
            ))}
          </div>
        </section>

        <section className={styles.supporterSection}>
          <div className={styles.sectionHeader}>
            <div>
              <span className={styles.eyebrow}>♥ SUPPORTERS</span>
              <h2>Supporter Wall</h2>
              <p>Spelarna som hjälper oss fortsätta bygga servern månad efter månad.</p>
            </div>
            <div className={styles.supporterCount}>{supporters.length}</div>
          </div>

          <div className={styles.supporterGrid}>
            {supporters.map((supporter) => (
              <Link
                href={`/spelare/${encodeURIComponent(supporter.minecraftUsername)}`}
                className={styles.supporterCard}
                key={supporter.minecraftUsername}
              >
                <img src={`https://mc-heads.net/avatar/${encodeURIComponent(supporter.minecraftUsername)}/64`} alt="" />
                <div>
                  <strong>{supporter.displayName ?? supporter.minecraftUsername}</strong>
                  <span>{patreonTierLabel(supporter.tier)}</span>
                </div>
                <b>♥</b>
              </Link>
            ))}
          </div>
        </section>

        <section className={styles.perks}>
          <article>
            <div>★</div>
            <strong>Syns på profilen</strong>
            <span>Supporterstatus visas direkt på din spelarprofil.</span>
          </article>
          <article>
            <div>♥</div>
            <strong>Plats på väggen</strong>
            <span>Ditt namn blir en permanent del av supportersidan.</span>
          </article>
          <article>
            <div>◆</div>
            <strong>Utan pay to win</strong>
            <span>Status och uppskattning, inte köpta gameplayfördelar.</span>
          </article>
        </section>

        <section className={styles.supportNotice}>
          <div className={styles.noticeIcon}>?</div>
          <div>
            <strong>Är du supporter men saknas på listan eller saknar rättigheter?</strong>
            <span>Skapa ett supportärende i Discorden så hjälper vi dig.</span>
          </div>
        </section>
      </main>
    </div>
  );
}
