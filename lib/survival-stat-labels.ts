export const survivalMetrics = [
  { key: "kills", label: "Dödade mobs", short: "Kills", unit: "" },
  { key: "damage", label: "Total skada", short: "Skada", unit: " dmg" },
  { key: "summons", label: "Framkallade allierade", short: "Summons", unit: "" },
  { key: "summonDamage", label: "Summon-skada", short: "Summon dmg", unit: " dmg" },
  { key: "healingHearts", label: "Läkta hjärtan", short: "Healing", unit: " ❤" },
  { key: "revives", label: "Återupplivningar", short: "Revives", unit: "" },
  { key: "damageTaken", label: "Mottagen skada", short: "Mottaget", unit: " dmg" },
  { key: "shieldBlocked", label: "Blockerat med sköld", short: "Sköld", unit: " dmg" },
  { key: "ironBlocked", label: "Blockerat med Stålsätt", short: "Stålsätt", unit: " dmg" },
  { key: "damageTanked", label: "Totalt tankad skada", short: "Tankat", unit: " dmg" },
  { key: "killsPerMatch", label: "Kills per match", short: "Kills/match", unit: "" },
  { key: "summonsPerMatch", label: "Summons per match", short: "Summons/match", unit: "" },
  { key: "healingPerMatch", label: "Läkta hjärtan per match", short: "Hearts/match", unit: " ❤" },
  { key: "matches", label: "Spelade matcher", short: "Matcher", unit: "" },
  { key: "bestWave", label: "Högsta wave", short: "Rekordwave", unit: "" },
  { key: "averageWave", label: "Snittwave", short: "Snittwave", unit: "" },
  { key: "earnedCoins", label: "Förtjänade eventmynt", short: "Eventmynt", unit: "" },
] as const;
export type SurvivalMetric = typeof survivalMetrics[number]["key"];
export const survivalFormat = (value: number) => new Intl.NumberFormat("sv-SE", { maximumFractionDigits: 1 }).format(Number(value) || 0);
