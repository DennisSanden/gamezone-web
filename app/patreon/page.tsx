import Link from "next/link";
import { getLivePatreonSupporters, patreonTierLabel } from "@/lib/patreon-supporters";
import styles from "./page.module.css";

const gamezoneImages = [
  { src: "/images/hero-background.jpg", alt: "GameZone-världen", label: "Världen växer" },
  { src: "/images/wiki.png", alt: "GameZone Wiki", label: "Nya system & guider" },
  { src: "/images/leaderboard.png", alt: "GameZone Leaderboards", label: "Tävling & historia" },
];

export default async function PatreonPage({ searchParams }: { searchParams: Promise<Record<string, string | string[] | undefined>> }) {
  const params = await searchParams;
  const allPatreonSupporters = await getLivePatreonSupporters();
  const gold = allPatreonSupporters.filter((supporter) => supporter.tier === "gold");
  const supporters = allPatreonSupporters.filter((supporter) => supporter.tier === "supporter");
  const allSupporters = [...gold, ...supporters];

  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <img className={styles.heroBackground} src="/images/hero-background.jpg" alt="" />
        <div className={styles.heroShade} />
        <div className={styles.heroInner}>
          <div className={styles.heroCopy}>
            <span className={styles.eyebrow}>GAMEZONE SUPPORTERS</span>
            <h1>Ni håller <span>världen</span> vid liv.</h1>
            <p>
              GameZone är gratis att spela. Supporters hjälper oss att betala servern, utveckla nya system
              och fortsätta bygga vidare på världen tillsammans.
            </p>
            <div className={styles.heroActions}>
              <a href="https://www.patreon.com/16532203/join" target="_blank" rel="noreferrer" className={styles.primary}>
                ♥ Bli supporter
              </a>
              <Link href="/kom-igang" className={styles.secondary}>Spela på GameZone</Link>
            </div>
          </div>

          <div className={styles.heroVisual}>
            <div className={styles.worldFrame}>
              <img src="/images/hero-background.jpg" alt="GameZone Minecraft-värld" />
              <div className={styles.worldLabel}>BYGGT AV COMMUNITYN</div>
            </div>
            <div className={styles.faceCloud}>
              {allSupporters.slice(0, 10).map((supporter, index) => (
                <img
                  key={supporter.minecraftUsername}
                  src={`https://mc-heads.net/avatar/${encodeURIComponent(supporter.minecraftUsername)}/80`}
                  alt={supporter.minecraftUsername}
                  style={{ transform: `rotate(${index % 2 === 0 ? -4 : 4}deg)` }}
                />
              ))}
            </div>
            <div className={styles.totalBadge}>
              <strong>{allPatreonSupporters.length}</strong>
              <span>supporters</span>
            </div>
          </div>
        </div>
      </section>

      <main className={styles.content}>
        {params.linked === "success" && (
          <section className={styles.linkStatus}><strong>Patreon kopplad.</strong><span>Dina GameZone-förmåner har aktiverats automatiskt.</span></section>
        )}
        {params.linked === "failed" && (
          <section className={styles.linkStatusError}><strong>Kopplingen misslyckades.</strong><span>Gå tillbaka till #koppla-patreon i Discord och skapa en ny länk.</span></section>
        )}
        <section className={styles.introStrip}>
          <div>
            <img src="/minecraft/items/nether_star.png" alt="" />
            <strong>Ni gör mer möjligt</strong>
            <span>Serverkostnader, utveckling, events och nya idéer.</span>
          </div>
          <div>
            <img src="/minecraft/items/diamond.png" alt="" />
            <strong>Status, inte makt</strong>
            <span>Supporterstatus syns, men gameplay förblir rättvist.</span>
          </div>
          <div>
            <img src="/minecraft/items/golden_apple.png" alt="" />
            <strong>En del av historien</strong>
            <span>Ditt namn och din profil får en permanent plats här.</span>
          </div>
        </section>

        <section className={styles.visualSection}>
          <div className={styles.visualHeading}>
            <div>
              <span className={styles.eyebrow}>DET HÄR HJÄLPER NI OSS BYGGA</span>
              <h2>Mer än bara en server.</h2>
            </div>
            <p>Världen, systemen och tävlingen växer hela tiden. Supporten gör att vi kan fortsätta trycka framåt.</p>
          </div>
          <div className={styles.imageGrid}>
            {gamezoneImages.map((image, index) => (
              <figure className={index === 0 ? styles.imageCardLarge : styles.imageCard} key={image.src}>
                <img src={image.src} alt={image.alt} />
                <figcaption>{image.label}</figcaption>
              </figure>
            ))}
          </div>
        </section>

        <section className={styles.goldSection}>
          <div className={styles.sectionHeader}>
            <div>
              <span className={styles.goldEyebrow}>◆ GULDSUPPORTERS</span>
              <h2>Hall of Gold</h2>
              <p>De som gått ett steg längre och stöttar GameZone på högsta nivån.</p>
            </div>
            <div className={styles.sectionIcon}><img src="/minecraft/items/golden_apple.png" alt="" /></div>
          </div>

          <div className={styles.goldGrid}>
            {gold.map((supporter) => (
              <Link href={`/spelare/${encodeURIComponent(supporter.minecraftUsername)}`} className={styles.goldCard} key={supporter.minecraftUsername}>
                <div className={styles.avatarWrap}>
                  <img src={`https://mc-heads.net/avatar/${encodeURIComponent(supporter.minecraftUsername)}/112`} alt={supporter.minecraftUsername} />
                  <span>◆</span>
                </div>
                <strong>{supporter.displayName ?? supporter.minecraftUsername}</strong>
                <small>{patreonTierLabel(supporter.tier)}</small>
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
            <div className={styles.sectionIcon}><img src="/minecraft/items/emerald.png" alt="" /></div>
          </div>

          <div className={styles.supporterGrid}>
            {supporters.map((supporter) => (
              <Link href={`/spelare/${encodeURIComponent(supporter.minecraftUsername)}`} className={styles.supporterCard} key={supporter.minecraftUsername}>
                <img src={`https://mc-heads.net/avatar/${encodeURIComponent(supporter.minecraftUsername)}/80`} alt={supporter.minecraftUsername} />
                <div>
                  <strong>{supporter.displayName ?? supporter.minecraftUsername}</strong>
                  <span>{patreonTierLabel(supporter.tier)}</span>
                </div>
                <b>♥</b>
              </Link>
            ))}
          </div>
        </section>

        <section className={styles.finalCta}>
          <div className={styles.ctaArt}>
            <img src="/brand/gamezonelogo.png" alt="GameZone" />
            <div className={styles.ctaHeads}>
              {allSupporters.slice(0, 7).map((supporter) => (
                <img key={supporter.minecraftUsername} src={`https://mc-heads.net/avatar/${encodeURIComponent(supporter.minecraftUsername)}/64`} alt="" />
              ))}
            </div>
          </div>
          <div>
            <span className={styles.eyebrow}>VILL DU VARA MED?</span>
            <h2>Hjälp oss bygga nästa kapitel.</h2>
            <p>Du behöver inte stötta för att spela. Men de som gör det får vårt väldigt synliga tack.</p>
            <a href="https://www.patreon.com/16532203/join" target="_blank" rel="noreferrer" className={styles.primary}>♥ Bli supporter</a>
          </div>
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
