---
title: "Fysiska byggnader"
description: "Frivilliga byggnader med specialbonusar. Ingen byggnad krävs för settlementlevel."
category: "Byggnader"
order: 0
version: "2026.10"
engineVersion: "GameZoneEngine 2026-10-21"
updatedAt: "2026-10-21"
infobox:
  antal: "24 bonusbyggnader"
  byggnadskrav: "Frivilliga"
---

## Frivilliga byggnader, nya grundregeln

Settlements kan gå från level 1 till 50 utan att registrera en enda byggnad. Alla viktiga upplåsningar kommer i stället från settlementnivåerna. **Byggnader är frivilliga specialiseringar**, och kan ge ytterligare nytta till staden.

Byggnadens licens, nivågräns och fysiska krav gäller fortfarande om ni vill aktivera byggnadens bonus. Öppna `/gz menu` → Settlement → Byggnader för den aktuella statusen.

## Alla byggnader och deras bonusar

| Byggnad | Nivå för licens | Licens | Bonus |
|---|---:|---:|---|
| [Stadskärna](/wiki/buildings/stadskarna) | 1 | 5 000 Coins | Alla framtida settlementuppgraderingar kostar 5 % mindre Coins. |
| [Gruva](/wiki/buildings/gruva) | 2 | 10 000 Coins | Blast Furnaces smälter malm 15 % snabbare inom settlementet. |
| [Ladugård](/wiki/buildings/ladugard) | 2 | 10 000 Coins | Djur kan avlas igen 15 % snabbare efter föregående avel. |
| [Lada](/wiki/buildings/lada) | 2 | 10 000 Coins | 15 % chans att en skördad gröda automatiskt återplanteras utan att förbruka ett frö. |
| [Fiskebrygga](/wiki/buildings/fiskebrygga) | 2 | 10 000 Coins | 15 % snabbare napp vid fiske inom settlementet. |
| [Sågverk](/wiki/buildings/sagverk) | 2 | 10 000 Coins | 10 % chans att få extra plankor när man tillverkar plankor av stockar. |
| [Stenhuggeri](/wiki/buildings/stenhuggeri) | 2 | 10 000 Coins | 10 % chans att få ett extra trappblock eller en extra slab från en Stonecutter. |
| [Handelscentrum](/wiki/buildings/handelscentrum) | 3 | 20 000 Coins | Företag i settlementet får ha 2 aktiva företagskontrakt samtidigt i stället för 1. |
| [Laboratorium](/wiki/buildings/laboratorium) | 5 | 35 000 Coins | 15 % chans att bryggning inte förbrukar Blaze Powder. |
| [Bank](/wiki/buildings/bank) | 6 | 50 000 Coins | Tillgång till bankfunktionerna i GUI, ekonomisk historik och 10 % billigare företagslicenser. |
| [Reliktempel](/wiki/buildings/reliktempel) | 7 | 50 000 Coins | Aktiva settlementrelikers produktions- och XP-bonusar blir 10 % starkare. |
| [Vindhamn](/wiki/buildings/vindhamn) | 8 | 100 000 Coins | 20 % chans att en fyrverkeriraket inte förbrukas vid Elytraflygning inom settlementet. Kräver fortfarande level 10 för att använda Elytra. |
| [Gatukontor](/wiki/buildings/gatukontor) | 10 | 5 000 000 Coins | 10 % snabbare gånghastighet på vägar byggda av exempelvis Cobblestone, Stone Bricks och Packed Mud inom settlementet. |
| [Turistbyrå](/wiki/buildings/turistbyra) | 12 | 350 000 Coins | Settlementet får Coins för unika förstagångsbesökare, med dagligt utbetalningstak. |
| [Stall](/wiki/buildings/stall) | 14 | 500 000 Coins | Ytterligare 10 % hastighet för hästar, åsnor och mulor, med gemensamt hastighetstak. |
| [Kontor](/wiki/buildings/kontor) | 16 | 750 000 Coins | Alla företag i settlementet får 3 extra Shopping Chests. |
| [Kyrka](/wiki/buildings/kyrka) | 18 | 1 000 000 Coins | Alla invånare får 5 % mer Character XP från yrkesaktiviteter. |
| [Marknadsplats](/wiki/buildings/marknadsplats) | 20 | 1 500 000 Coins | Behåller sin nuvarande skatterabatt på 10 procentenheter vid handel. |
| [Myntförvaring](/wiki/buildings/myntforvaring) | 22 | 2 000 000 Coins | Stadskasseavgiften sänks från 7,5 % till 2,5 %. |
| [Rådhus](/wiki/buildings/radhus) | 25 | 2 500 000 Coins | Settlementet får använda en extra aktiv policy. De två extra Lords får man redan på level 12. |
| [Slott](/wiki/buildings/slott) | 30 | 5 000 000 Coins | Invånarna får genomföra 6 rikskontrakt per vecka i stället för 5. |
| [Museum](/wiki/buildings/museum) | 35 | 8 000 000 Coins | 25 % högre turistintäkter, inom ett gemensamt dagligt tak. |
| [Rustkammare](/wiki/buildings/rustkammare) | 40 | 12 500 000 Coins | Rustningar förlorar 15 % mindre durability när invånare tar skada av vanliga mobs. Gäller inte events. |
| [Myntverk](/wiki/buildings/myntverk) | 45 | 20 000 000 Coins | Dagliga intäkter från byggnaden, med bonus utifrån faktiskt intjänad stadsskatt. Maximalt 150 000 Coins per dag. |

## Bygga och aktivera

1. Köp valfri tillgänglig byggnadslicens i menyn.
2. Kör `/building place <byggnad>` och markera två motsatta hörn på golvnivå.
3. Bekräfta med `/building confirm`.
4. Bygg enligt statusen som visas med `/building status`.
5. Slutför med `/building complete` för att aktivera bonusen.

Vanliga konstruktionskrav gäller fortfarande för valfria bonusbyggnader, bland annat territorium, area, väggar, tak och specifika specialblock. Den registrerade byggytan måste ligga inom settlementet. Vid skador kan bonusen pausas till dess att byggnaden godkänns igen med `/building revalidate <byggnad>`.

> [!IMPORTANT]
> Stadskärna är inte längre en förutsättning för att höja settlementets nivå. Vindhamn krävs inte för Elytra, Rådhus krävs inte för extra Lords och Reliktempel krävs inte för relikupplåsningen.
