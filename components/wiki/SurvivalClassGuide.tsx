import { survivalClasses } from "./survival-classes";
import styles from "./SurvivalClassGuide.module.css";

export default function SurvivalClassGuide() {
  return (
    <section className={styles.guide} aria-label="Jämför Survival-klasser">
      <div className={styles.grid}>
        {survivalClasses.map((character) => (
          <article key={character.slug} className={styles.card}>
            <div className={styles.heading}>
              <span className={styles.icon} aria-hidden="true">{character.icon}</span>
              <div>
                <span className={styles.role}>{character.role}</span>
                <h3>{character.name}</h3>
              </div>
            </div>
            <div className={styles.stats}>
              <div><span>Hälsa</span><strong>{character.health}</strong><small>{character.hearts}</small></div>
              <div><span>Skada</span><strong>{character.damage}</strong><small>Mot mobs eller spelstil</small></div>
            </div>
            <div className={styles.ability}><span>Specialförmåga</span><strong>{character.ability}</strong></div>
            <p className={styles.description}>{character.description}</p>
            <p className={styles.limit}>{character.limit}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
