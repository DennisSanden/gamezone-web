---
title: "Titlar och ledarskap"
description: "King, upp till två Lords, titelbonusar och hur invånare befordras inom ett settlement."
category: "Settlements"
order: 3
version: "1.1"
engineVersion: "Settlement Titles"
updatedAt: "2026-08-20"
infoboxTitle: "Titlar"
relatedArticles:
  - category: "settlements"
    article: "government"
    title: "Government"
    description: "Diktatur, demokrati och hur en ny King utses."
  - category: "settlements"
    article: "policies"
    title: "Policies"
    description: "Settlementets valbara bonusar och specialiseringar."
infobox:
  ansvariga: "King och upp till 2 Lords"
  högstaTitelbonus: "+50 %"
  betalning: "Stadskassan"
---

## King och Lords

Varje settlement har en **King**. Grundaren blir automatiskt King när settlementet skapas med `/settlement create <namn>`.

King kan utse upp till **två andra spelare till Lord** med:

`/settlement lord <spelare>`

Ett settlement kan alltså ha **1 King och maximalt 2 Lords samtidigt**. När båda Lord-platserna är upptagna måste en befintlig Lord lämna rollen innan en ny kan utses.

King och Lords kan hantera settlementets finanser, medlemmar och invånarnas titlar. De kan också använda settlementets gemensamma funktioner genom `/gz menu` eller `/settlement menu`.

> [!IMPORTANT]
> King och Lords får en produktionsbonus som baseras på settlementets nivå. Bonusen gäller bara produktion som redan är berättigad till Coins, alltså resurser inom settlementets valda kategori.

## Bonus för King och Lords

King och Lords får **+1 % produktionsbonus per settlementnivå**. Bonusen växer alltså tillsammans med settlementet och når maximalt **+50 % på settlementnivå 50**.

| Settlementnivå | Produktionsbonus |
|---:|---:|
| 1 | +1 % |
| 10 | +10 % |
| 15 | +15 % |
| 25 | +25 % |
| 30 | +30 % |
| 40 | +40 % |
| 50 | +50 % |

## Befordra invånare

King och Lords kan belöna aktiva invånare genom att ge dem högre titlar. Ju högre titel en spelare har, desto större produktionsbonus får spelaren på godkänd produktion inom settlementets kategori.

Det kostar Coins att befordra en spelare. Titelnivå 2 kostar **1 000 Coins**, nivå 3 kostar **5 000 Coins**, nivå 4 kostar **15 000 Coins** och nivå 5 kostar **50 000 Coins**. Kostnaden dras från [stadskassan](/wiki/economy/stadskassan), inte från den befordrade spelarens privata saldo.

| Titelnivå | Produktionsbonus | Max antal spelare |       Kostnad |
|---:|---:|---:|--------------:|
| 1 | +0 % | Obegränsat |       0 Coins |
| 2 | +5 % | 5 |  10 000 Coins |
| 3 | +10 % | 3 |  50 000 Coins |
| 4 | +15 % | 2 | 150 000 Coins |
| 5 | +20 % | 1 | 500 000 Coins |

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
