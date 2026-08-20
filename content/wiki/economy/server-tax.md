---
title: "Server TAX"
description: "Så beräknas skatten när företag säljer varor till andra spelare."
category: "Ekonomi"
order: 4
version: "2.1"
engineVersion: "Economy Engine"
updatedAt: "2026-08-20"
infoboxTitle: "Server TAX"
infobox:
  startnivå: "45 %"
  grundnivåFrån23: "25 %"
  lägsta: "0 %"
  gäller: "Företagsförsäljning"
---

## Vad är Server TAX?

Server TAX är skatten som tas när ett företag säljer items till andra spelare genom en shopping chest.

Registrera en shopping chest genom att titta på kistan och skriva:

`/company chest register <pris>`

Priset gäller per item i kistan.

När företag blir tillgängliga genom **Handelscentrum på settlementnivå 4** börjar grundskatten på **45 procent**. Därefter sjunker grundskatten med **1 procentenhet per settlementnivå** fram till nivå 23.

Från **nivå 23 till nivå 50 är grundskatten 25 procent**.

Företagslicensen och vissa settlementpolicies kan sedan sänka den faktiska Server TAX som företaget betalar.

**Total TAX = settlementets grund-TAX minus företagslicensens avdrag minus andra aktiva TAX-reduktioner.**

Server TAX kan aldrig bli lägre än **0 procent**.

## TAX efter settlementnivå

| Settlementnivå | Grund-TAX |
|---|---:|
| 1 till 2 | Företag ej möjligt |
| 3 | 45 % |
| 4 | 44 % |
| 5 | 43 % |
| 6 | 42 % |
| 7 | 41 % |
| 8 | 40 % |
| 9 | 39 % |
| 10 | 38 % |
| 11 | 37 % |
| 12 | 36 % |
| 13 | 35 % |
| 14 | 34 % |
| 15 | 33 % |
| 16 | 32 % |
| 17 | 31 % |
| 18 | 30 % |
| 19 | 29 % |
| 20 | 28 % |
| 21 | 27 % |
| 22 | 26 % |
| 23 | 25 % |
| 24 till 50 | 25 % |

> [!INFO]
> Settlementets grund-TAX slutar sjunka efter nivå 23. Högre settlementnivåer behåller 25 procent i grund-TAX.

## Avdrag från företagslicens

Företagets ägare kan öppna licensmenyn med `/company license`.

| Licensnivå | Avdrag |
|---|---:|
| 1 | 0 procentenheter |
| 2 | 2 procentenheter |
| 3 | 3 procentenheter |
| 4 | 4 procentenheter |
| 5 | 5 procentenheter |
| 6 | 6 procentenheter |
| 7 | 7 procentenheter |
| 8 | 8 procentenheter |
| 9 | 9 procentenheter |
| 10 | 10 procentenheter |

En maxad företagslicens sänker alltså Server TAX med **10 procentenheter**.

## Marknadsplats

En aktiv [Marknadsplats](/wiki/buildings/marknadsplats) sänker Server TAX med **10 procentenheter** för företag i settlementet.

Reduktionen kombineras med företagslicensen och eventuella policies.

## Merchant Republic

Settlementpolicyn **Merchant Republic** sänker Server TAX med ytterligare **5 procentenheter**.

Reduktionen räknas tillsammans med företagslicensen. Skatten har alltid ett golv på 0 procent.

Läs mer på sidan [Policies](/wiki/settlements/policies).

## Räkneexempel

Ett företag med licensnivå 1 i ett settlement på nivå 3 har **45 procent Server TAX**. Vid en försäljning på 1 000 Coins går 450 Coins till servern och 550 Coins återstår efter Server TAX.

Ett företag med licensnivå 6 i ett settlement på nivå 11 har **37 procent grund-TAX** och **6 procentenheter licensavdrag**. Den faktiska Server TAX blir därför **31 procent**.

Ett företag med licensnivå 10 i ett settlement på nivå 23 har **25 procent grund-TAX** och **10 procentenheter licensavdrag**. Den faktiska Server TAX blir **15 procent**.

Om settlementet dessutom har en aktiv **Marknadsplats** blir skatten 5 procent. Med **Merchant Republic** ovanpå detta når den 0 procent. Server TAX kan aldrig bli negativ.

> [!IMPORTANT]
> Procentenheter dras från skattesatsen. En reduktion på 10 procentenheter från 25 procent Server TAX ger därför 15 procent Server TAX.

> [!INFO]
> Server TAX är inte samma sak som [stadsskatt](/wiki/economy/stadskassan). Stadsskatt tas från invånarnas produktionsintäkter och går till settlementets stadskassa.
