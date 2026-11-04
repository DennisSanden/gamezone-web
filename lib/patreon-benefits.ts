/** Public Patreon benefits verified against GameZoneEngine (November 2026). */
export const PATREON_JOIN_URL = "https://www.patreon.com/16532203/join";

export const patreonBenefits = [
  { icon: "🎟️", title: "Förtur i serverkön", category: "Spelupplevelse", description: "Supporters prioriteras när servern är full. Guldsupporters har en högre köprioritet än vanliga Supporters." },
  { icon: "🎁", title: "Extra belöning i /daily", category: "Belöningar", description: "Utöver den vanliga Daily-belöningen får aktiva Patreons ett extra föremål ur en egen belöningspool." },
  { icon: "⚒️", title: "Exklusiva Daily-överraskningar", category: "Belöningar", description: "20 % chans att Patreon-bonusen blir ett förtrollat verktyg. Det finns även chans på ett namngivet spelarhuvud från någon som varit inne senaste veckan." },
  { icon: "🎨", title: "Välj namnfärg", category: "Personligt", description: "Välj mellan 14 färger för namnet i chatten, TAB och ovanför huvudet med /patreon. Röd och mörkröd är reserverade för personalen." },
  { icon: "🏰", title: "Tillgång till klubbhuset", category: "Utforskning", description: "Patreons får tillträde till supporterklubbhuset, som är skyddat från vanliga spelare." },
  { icon: "⚔️", title: "Förtur till Survival-klasser", category: "Events", description: "Vid klassval i Survival går aktiva Patreons före i lottningen om begränsade klasser som Commander, Healer och Resurrector." },
  { icon: "✦", title: "Survival Level 6", category: "Events", description: "Alla kan samla den XP som krävs, men de tio kraftfulla level 6-bonusarna är bara aktiva med Patreon. 15 000 XP krävs efter level 5." },
  { icon: "🎪", title: "Patreon-exklusiva events", category: "Events", description: "Tillgång till särskilda events om serverteamet arrangerar ett Patreon-only-event. Sådana events är inte alltid igång." },
  { icon: "👑", title: "Synlig supporterstatus", category: "Community", description: "Supporter- eller Guldsupporter-rank, särskilt välkomstmeddelande vid inloggning och synlighet på supporter-väggen på hemsidan." },
] as const;

export const patreonLevelSix = [
  { className: "Soldier", material: "netherite_sword", name: "Veteran", effect: "+20 % skada mot Survival-mobs" },
  { className: "Tank", material: "iron_chestplate", name: "Fortress", effect: "Ytterligare 15 % mindre inkommande skada" },
  { className: "Bowman", material: "bow", name: "Deadeye", effect: "+30 % bågskada" },
  { className: "Healer", material: "ghast_tear", name: "Divine Health", effect: "Global Health läker 4 hjärtan i stället för 2" },
  { className: "Summoner", material: "wolf_spawn_egg", name: "Alpha Pack", effect: "+30 % skada från dina summons" },
  { className: "Commander", material: "goat_horn", name: "Royal Guard", effect: "20 % ytterligare skademinskning för laget under stridshornet" },
  { className: "Berserker", material: "netherite_axe", name: "Last Stand", effect: "+30 % skada när du är under 50 % HP" },
  { className: "Necromancer", material: "wither_skeleton_spawn_egg", name: "Dark Pact", effect: "+30 % skada från dina summons" },
  { className: "Resurrector", material: "totem_of_undying", name: "Soul Master", effect: "Återupplivning på 1,25 sekunder" },
  { className: "Juggernaut", material: "netherite_chestplate", name: "Unbreakable", effect: "Ytterligare 15 % mindre inkommande skada" },
] as const;
