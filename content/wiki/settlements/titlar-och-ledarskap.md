---
title: "Titlar och ledarskap"
description: "King, Lord, titelbonusar och hur invånare befordras inom ett settlement."
category: "Settlements"
order: 2
version: "1.0"
engineVersion: "Settlement Titles"
updatedAt: "2026-08-04"
infoboxTitle: "Titlar"
infobox:
  ansvariga: "King och Lord"
  högstaTitelbonus: "+20 %"
  betalning: "Stadskassan"
---

## King och Lord

Varje settlement har en **King**. Grundaren blir automatiskt King när settlementet skapas med `/settlement create <namn>`.

King kan utse en annan spelare till **Lord** med:

`/settlement lord <spelare>`

King och Lord kan hantera settlementets finanser, medlemmar och invånarnas titlar. De kan också använda settlementets gemensamma funktioner genom `/gz menu` eller `/settlement menu`.

> [!IMPORTANT]
> King och Lord får en produktionsbonus som baseras på settlementets nivå. Bonusen gäller bara produktion som redan är berättigad till Coins, alltså resurser inom settlementets valda kategori.

## Bonus för King och Lord

| Settlementnivå | Produktionsbonus |
|---:|---:|
| 1 | +3 % |
| 2 | +6 % |
| 3 | +9 % |
| 4 | +12 % |
| 5 | +15 % |
| 6 | +18 % |
| 7 | +21 % |
| 8 | +24 % |
| 9 | +27 % |
| 10 | +30 % |
| 11 | +33 % |
| 12 | +36 % |
| 13 | +39 % |
| 14 | +42 % |
| 15 | +45 % |

## Befordra invånare

King och Lord kan belöna aktiva invånare genom att ge dem högre titlar. Ju högre titel en spelare har, desto större produktionsbonus får spelaren på godkänd produktion inom settlementets kategori.

Det kostar Coins att befordra en spelare. Kostnaden dras från [stadskassan](/wiki/economy/stadskassan), inte från den befordrade spelarens privata saldo.

| Titelnivå | Produktionsbonus | Max antal spelare |
|---:|---:|---:|
| 1 | +0 % | Obegränsat |
| 2 | +5 % | 5 |
| 3 | +10 % | 3 |
| 4 | +15 % | 2 |
| 5 | +20 % | 1 |

> [!NOTE]
> Platsgränserna gäller samtidigt inom settlementet. Ett settlement kan alltså ha högst fem spelare på titelnivå 2, tre på nivå 3, två på nivå 4 och en på nivå 5.

## Titlar för Gruvdrift

| Nivå | Titel |
|---:|---|
| 1 | Gruvarbetare |
| 2 | Gruvman |
| 3 | Gruvmästare |
| 4 | Bergsherre |
| 5 | Bergskung |

## Titlar för Skogsbruk

| Nivå | Titel |
|---:|---|
| 1 | Vedhuggare |
| 2 | Skogshuggare |
| 3 | Skogsvaktare |
| 4 | Skogsmästare |
| 5 | Riksskogsmästare |

## Titlar för Lantbruk

| Nivå | Titel |
|---:|---|
| 1 | Dräng |
| 2 | Bonde |
| 3 | Lantbrukare |
| 4 | Godsförvaltare |
| 5 | Jordsherre |

## Titlar för Fiske

| Nivå | Titel |
|---:|---|
| 1 | Matros |
| 2 | Båtsman |
| 3 | Styrman |
| 4 | Sjökapten |
| 5 | Admiral |

## Titlar för Byggmaterial

| Nivå | Titel |
|---:|---|
| 1 | Lärling |
| 2 | Murare |
| 3 | Byggmästare |
| 4 | Arkitekt |
| 5 | Riksmästare |

## Titlar för Boskap

| Nivå | Titel |
|---:|---|
| 1 | Herde |
| 2 | Djurskötare |
| 3 | Boskapsmästare |
| 4 | Stallmästare |
| 5 | Storstallmästare |

## Titlar för Alkemi

| Nivå | Titel |
|---:|---|
| 1 | Lärling |
| 2 | Bryggare |
| 3 | Alkemist |
| 4 | Magiker |
| 5 | Ärkealkemist |

## Bra att veta

En titel ändrar inte vilka resurser som ger Coins. Den förstärker bara inkomsten från resurser som redan tillhör settlementets valda kategori.

Läs mer om hur valutan används på sidan [Coins](/wiki/economy/coins) och hur settlementets gemensamma pengar fungerar på sidan [Stadskassan och stadsskatt](/wiki/economy/stadskassan).
