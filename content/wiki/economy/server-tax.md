---
title: "Server TAX"
description: "Så beräknas skatten när företag säljer varor till andra spelare."
category: "Ekonomi"
order: 4
version: "1.1"
engineVersion: "Economy Engine"
updatedAt: "2026-08-04"
infoboxTitle: "Server TAX"
infobox:
  standard: "25 %"
  lägsta: "0 %"
  gäller: "Företagsförsäljning"
---

## Vad är Server TAX?

Server TAX är skatten som tas när ett företag säljer items till andra spelare genom en shopping chest.

Registrera en shopping chest genom att titta på kistan och skriva:

`/company chest register <pris>`

Priset gäller per item i kistan.

Grundnivån är **25 procent**. Settlementets nivå bestämmer grundskatten och företagets shopping license ger ett avdrag.

**Total TAX = settlementets TAX minus shopping license-avdraget.** Skatten kan aldrig bli lägre än 0 procent.

## TAX efter settlementnivå

| Nivå | Server TAX |
|---|---:|
| 1 till 2 | Företag ej möjligt |
| 3 | 25 % |
| 4 | 23 % |
| 5 | 21 % |
| 6 | 20 % |
| 7 | 18 % |
| 8 | 17 % |
| 9 | 16 % |
| 10 | 15 % |
| 11 | 14 % |
| 12 | 13 % |
| 13 | 12 % |
| 14 | 11 % |
| 15 | 10 % |

## Avdrag från shopping license

Företagets ägare kan öppna licensmenyn med `/company license`.

| Licensnivå | Avdrag |
|---|---:|
| 1 | 0 % |
| 2 | 2 % |
| 3 | 3 % |
| 4 | 4 % |
| 5 | 5 % |
| 6 | 6 % |
| 7 | 7 % |
| 8 | 8 % |
| 9 | 9 % |
| 10 | 10 % |

## Räkneexempel

Ett företag utan avdrag säljer för 1 000 Coins med 25 procent TAX. Servern tar 250 Coins och företaget får 750 Coins.

Ett företag med shopping license nivå 6 i ett settlement på nivå 11 betalar 14 minus 6, alltså 8 procent TAX. Servern tar 80 Coins och företaget får 920 Coins.

Ett företag med shopping license nivå 10 i ett settlement på nivå 15 betalar 10 minus 10, alltså 0 procent TAX. Företaget får hela försäljningsbeloppet.

> [!INFO]
> Server TAX är inte samma sak som [stadsskatt](/wiki/economy/stadskassan). Stadsskatt tas från invånarnas produktionsintäkter och går till settlementets stadskassa.
