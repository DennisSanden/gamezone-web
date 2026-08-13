---
title: "Så tjänar du XP"
description: "Alla sätt att tjäna Character XP, exakta XP-värden, Variation Bonus, combatbegränsning och Daily Rewards."
category: "Level & XP"
order: 2
version: "1.0"
engineVersion: "Character Progression"
updatedAt: "2026-08-13"
infoboxTitle: "Character XP"
infobox:
  variation: "Upp till +15 %"
  variation_fonster: "60 minuter"
  combat_fonster: "10 minuter"
  daily_max: "1 000 XP"
relatedArticles:
  - category: "experience"
    article: "experience"
    title: "Level & XP"
    description: "Översikt över hela progressionssystemet."
  - category: "experience"
    article: "levels-och-formagor"
    title: "Levels & förmågor"
    description: "Se vad din XP låser upp."
  - category: "economy"
    article: "daily-rewards"
    title: "Daily Rewards"
    description: "Dagliga Coins, items och Character XP."
---

## Character XP

Character XP tjänas genom godkända aktiviteter i GameZones egna system. XP:n läggs på din personliga Character Level och är helt separat från vanilla Minecraft XP.

Du behöver inte tillhöra ett settlement med rätt produktionskategori för att Character XP ska räknas. Coinregler och Character XP är separata. En aktivitet kan därför ge Character XP även när den inte ger Coins, så länge aktiviteten är godkänd av produktionssystemet.

> [!NOTE]
> XP registreras i bakgrunden för att hålla servern snabb. `/level` räknar även med XP som ännu väntar på att sparas, så värdet du ser ska ändå vara aktuellt.

## XP-källor

Du kan tjäna XP genom:

- Gruvdrift
- Jordbruk
- Skogsbruk
- Boskap
- Fiske
- Alkemi
- Combat mot hostile mobs
- Daily Rewards

**Byggmaterial ger för närvarande 0 Character XP**, även om byggmaterial finns i produktionssystemet. Crafting av byggmaterial höjer alltså inte Character Level i den nuvarande balansen.

## Variation Bonus

Systemet belönar spelare som varierar vad de gör.

När du har varit aktiv inom flera olika XP-kategorier under de senaste **60 minuterna** ökar XP:n från aktiva aktiviteter:

| Aktiva kategorier | XP-bonus |
| ---: | ---: |
| 1 | 0 % |
| 2 | +5 % |
| 3 | +10 % |
| 4 eller fler | **+15 %** |

Kategorierna som kan räknas är Gruvdrift, Jordbruk, Skogsbruk, Boskap, Fiske, Alkemi och Combat. Byggmaterial finns tekniskt som en kategori, men ger just nu 0 Character XP och kan därför inte normalt aktivera bonusen.

Bonusen räknas på XP du tjänar efter att den nya kategorin har blivit aktiv. Små decimalbonusar sparas internt och förs vidare, så aktiviteter som bara ger 1 XP förlorar inte bonusen över tid.

> [!IMPORTANT]
> Variation Bonus gäller inte Daily Rewards. Daily XP är alltid det fasta värdet för dagen.

Din aktiva variationshistorik rensas när du lämnar servern. Combatens anti-grindfönster gör däremot inte det.

## Combat XP

När du dödar hostile mobs får du Character XP. För att en mobfarm inte ska bli den överlägset bästa vägen till hög level minskar XP:n när du gör många kills under samma tiominutersperiod.

| Kill inom 10 minuter | XP per kill |
| ---: | ---: |
| 1 till 20 | 15 XP |
| 21 till 50 | 5 XP |
| 51 till 100 | 1 XP |
| 101 och uppåt | 0 XP |

Det innebär maximalt **500 bas-XP per tiominutersfönster** från combat innan Variation Bonus.

Att logga ut och in nollställer inte combatfönstret. Det gamla fönstret fortsätter tills dess ursprungliga tio minuter har passerat.

## Daily Rewards

Daily Rewards ger också Character XP:

| Dag | Character XP |
| ---: | ---: |
| 1 | 100 |
| 2 | 150 |
| 3 | 200 |
| 4 | 300 |
| 5 | 400 |
| 6 | 500 |
| 7 | **1 000** |

En full serie ger totalt **2 650 Character XP**.

Daily XP påverkas inte av Variation Bonus.

## Exakta XP-värden för produktion

Tabellerna nedan visar de produktionsresurser som faktiskt ger Character XP i den nuvarande balansen. Ett item som finns i produktionsregistret men inte i tabellerna nedan ger **0 Character XP**.

### Gruvdrift

| Aktivitet eller item | XP |
| --- | ---: |
| Kolmalm | 1 |
| Deepslate Kolmalm | 1 |
| Järnmalm | 3 |
| Deepslate Järnmalm | 3 |
| Kopparmalm | 1 |
| Deepslate Kopparmalm | 1 |
| Guldmalm | 5 |
| Deepslate Guldmalm | 5 |
| Redstonemalm | 2 |
| Deepslate Redstonemalm | 2 |
| Lapis Lazuli-malm | 3 |
| Deepslate Lapis Lazuli-malm | 3 |
| Smaragdmalm | 10 |
| Deepslate Smaragdmalm | 10 |
| Diamantmalm | 20 |
| Deepslate Diamantmalm | 20 |
| Ancient Debris | 40 |

### Jordbruk

| Aktivitet eller item | XP |
| --- | ---: |
| Vete | 1 |
| Rödbeta | 1 |
| Morot | 1 |
| Potatis | 1 |
| Melonskiva | 1 |
| Pumpa | 1 |
| Söta bär | 1 |
| Lysbär | 1 |
| Kakaobönor | 1 |
| Sockerrör | 1 |
| Bambu | 1 |
| Kaktus | 1 |
| Kelp | 1 |
| Sjögurka | 2 |
| Chorus Fruit | 3 |

### Skogsbruk

| Aktivitet eller item | XP |
| --- | ---: |
| Oak Log | 1 |
| Spruce Log | 1 |
| Birch Log | 1 |
| Jungle Log | 1 |
| Acacia Log | 1 |
| Dark Oak Log | 1 |
| Mangrove Log | 2 |
| Cherry Log | 2 |
| Pale Oak Log | 2 |
| Crimson Stem | 2 |
| Warped Stem | 2 |

### Boskap

| Aktivitet eller item | XP |
| --- | ---: |
| Beef | 2 |
| Leather | 2 |
| Porkchop | 2 |
| Chicken | 2 |
| Feather | 1 |
| White Wool | 2 |
| Any Dyed Wool | 2 |
| Mutton | 2 |
| Rabbit | 2 |
| Rabbit Hide | 2 |
| Rabbit Foot | 4 |
| Honey Bottle | 4 |
| Honeycomb | 4 |

### Fiske

| Aktivitet eller item | XP |
| --- | ---: |
| Cod | 4 |
| Salmon | 5 |
| Tropical Fish | 8 |
| Pufferfish | 10 |
| Name Tag | 15 |
| Nautilus Shell | 20 |
| Saddle | 20 |
| Fishing Rod | 15 |
| Bow | 15 |
| Enchanted Book | 30 |
| Ink Sac | 2 |

### Alkemi

| Aktivitet eller item | XP |
| --- | ---: |
| Nether Wart | 1 |
| Blaze Rod | 3 |
| Ghast Tear | 5 |
| Phantom Membrane | 4 |
| Magma Cream | 3 |
| Spider Eye | 2 |
| Potion of Healing | 3 |
| Potion of Strong Healing | 4 |
| Potion of Regeneration | 3 |
| Potion of Strong Regeneration | 4 |
| Potion of Swiftness | 3 |
| Potion of Strong Swiftness | 4 |
| Potion of Long Swiftness | 4 |
| Potion of Strength | 3 |
| Potion of Strong Strength | 4 |
| Potion of Long Strength | 4 |
| Potion of Fire Resistance | 3 |
| Potion of Long Fire Resistance | 4 |
| Potion of Water Breathing | 3 |
| Potion of Long Water Breathing | 4 |
| Potion of Night Vision | 3 |
| Potion of Long Night Vision | 4 |
| Potion of Invisibility | 3 |
| Potion of Long Invisibility | 4 |
| Potion of Slow Falling | 3 |
| Potion of Long Slow Falling | 4 |
| Potion of Leaping | 3 |
| Potion of Strong Leaping | 4 |
| Potion of Long Leaping | 4 |
| Potion of Luck | 3 |
| Potion of Poison | 3 |
| Potion of Strong Poison | 4 |
| Potion of Long Poison | 4 |
| Potion of Weakness | 3 |
| Potion of Long Weakness | 4 |
| Potion of Slowness | 3 |
| Potion of Long Slowness | 4 |
| Potion of Strong Slowness | 4 |
| Potion of Harming | 3 |
| Potion of Strong Harming | 4 |
| Splash Potion of Healing | 5 |
| Splash Potion of Strong Healing | 6 |
| Splash Potion of Regeneration | 5 |
| Splash Potion of Strong Regeneration | 6 |
| Splash Potion of Swiftness | 5 |
| Splash Potion of Strong Swiftness | 6 |
| Splash Potion of Strength | 5 |
| Splash Potion of Strong Strength | 6 |
| Splash Potion of Fire Resistance | 5 |
| Splash Potion of Water Breathing | 5 |
| Splash Potion of Night Vision | 5 |
| Splash Potion of Invisibility | 5 |
| Splash Potion of Slow Falling | 5 |
| Splash Potion of Poison | 5 |
| Splash Potion of Strong Poison | 6 |
| Splash Potion of Weakness | 5 |
| Splash Potion of Slowness | 5 |
| Splash Potion of Harming | 5 |
| Splash Potion of Strong Harming | 6 |
| Lingering Potion of Healing | 7 |
| Lingering Potion of Strong Healing | 8 |
| Lingering Potion of Regeneration | 7 |
| Lingering Potion of Strong Regeneration | 8 |
| Lingering Potion of Swiftness | 7 |
| Lingering Potion of Strength | 7 |
| Lingering Potion of Fire Resistance | 7 |
| Lingering Potion of Water Breathing | 7 |
| Lingering Potion of Night Vision | 7 |
| Lingering Potion of Invisibility | 7 |
| Lingering Potion of Slow Falling | 7 |
| Lingering Potion of Poison | 7 |
| Lingering Potion of Weakness | 7 |
| Lingering Potion of Slowness | 7 |
| Lingering Potion of Harming | 7 |


## Viktigt om automation

Character XP är byggd runt aktivt spel. Produktionssystemets vanliga eligibilityregler gäller fortfarande. Om en aktivitet inte räknas som en godkänd produktion får den inte Character XP bara för att samma item finns i tabellen.

Det betyder bland annat att systemet inte är tänkt att belöna spelare för att placera och bryta samma resurs om och om igen eller för att låta automatisering skapa obegränsad Character XP.

## Vad ger inte Character XP?

Följande ska inte blandas ihop med Character XP:

- Vanilla Experience Orbs
- XP Bottles
- Enchanting
- Vanliga Minecraft levels
- Coins
- Settlement level
- Att bara vara online eller AFK

Character XP kommer från GameZones egna godkända aktiviteter och belöningar.
