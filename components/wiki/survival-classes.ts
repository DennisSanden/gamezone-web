/** Klassernas grundvärden från GameZoneEngine SurvivalWaveService, före nivå- och lagbonusar. */
export type SurvivalClassInfo = {
  name: string;
  icon: string;
  role: string;
  health: string;
  hearts: string;
  damage: string;
  ability: string;
  description: string;
  limit: string;
  slug: string;
};

export const survivalClasses: SurvivalClassInfo[] = [
  { name: "Soldier", icon: "⚔️", role: "Frontlinje", health: "125%", hearts: "12,5 hjärtan", damage: "135%", ability: "Cleave + 15% mobskydd", description: "Var fjärde närstridsträff ger svepskada på upp till tre extra fiender. Stabil, uthållig närstrid.", limit: "Obegränsad", slug: "soldier" },
  { name: "Tank", icon: "🛡️", role: "Försvar", health: "225%", hearts: "22,5 hjärtan", damage: "90%", ability: "Guardian Aura + Thorn Shield", description: "Tar 25% mindre mobskada. Lagkamrater inom fem block får 10% skydd. Reflekterar skada vid träff.", limit: "Obegränsad", slug: "tank" },
  { name: "Bowman", icon: "🏹", role: "Distans", health: "100%", hearts: "10 hjärtan", damage: "Distans", ability: "Båge och pil", description: "Träffar mobs på avstånd med unbreakable-båge och ammunition. Utvecklar bågskada med klassnivåer.", limit: "1 per påbörjade 6 spelare", slug: "bowman" },
  { name: "Healer", icon: "💚", role: "Läkning", health: "100%", hearts: "10 hjärtan", damage: "Låg", ability: "Healing Totem + läkeaura", description: "Läker lagkamrater passivt. Healing Totem kan användas en gång per wave.", limit: "Max 2 per lag", slug: "healer" },
  { name: "Summoner", icon: "🐺", role: "Följeslagare", health: "100%", hearts: "10 hjärtan", damage: "Via summons", ability: "Bee, Wolf och Iron Golem", description: "Får ett nytt summonägg varje wave och låter allierade varelser kämpa åt laget.", limit: "Max 1 per lag", slug: "summoner" },
  { name: "Commander", icon: "📯", role: "Lagbuff", health: "120%", hearts: "12 hjärtan", damage: "Normal", ability: "Stridshorn", description: "Ger hela laget +100% skada under den aktuella waven. Kan aktiveras var tredje wave.", limit: "Max 1 per lag", slug: "commander" },
  { name: "Berserker", icon: "🪓", role: "Hög skada", health: "90%", hearts: "9 hjärtan", damage: "175%", ability: "Bloodlust + Blood Rage", description: "Bloodlust läker ett halvt hjärta var tredje närstridsträff (max var tredje sekund). Blood Rage ger +35% skada och +15% fart i 10 sekunder.", limit: "Obegränsad", slug: "berserker" },
  { name: "Resurrector", icon: "✨", role: "Återupplivning", health: "100%", hearts: "10 hjärtan", damage: "Normal", ability: "Soul Staff", description: "Kan återuppliva nedslagna spelare. Grundritualen tar fyra sekunder och kan bli snabbare med nivåer.", limit: "Max 1 per lag", slug: "resurrector" },
  { name: "Necromancer", icon: "💀", role: "Mörka summons", health: "100%", hearts: "10 hjärtan", damage: "Via summons", ability: "Kalla på monster", description: "Får ett summonägg per wave för Cave Spider, Vex och Ravager som slåss för laget.", limit: "Max 1 per lag", slug: "necromancer" },
  { name: "Juggernaut", icon: "🪨", role: "Extremt tålig", health: "200%", hearts: "20 hjärtan", damage: "Närstrid", ability: "Stålsätt", description: "90% mindre inkommande skada i 20 sekunder, en gång var tredje wave. Extra tålig men långsammare.", limit: "Max 1 per lag", slug: "juggernaut" },
];
