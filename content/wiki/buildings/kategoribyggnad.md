---
title: "Kategoribyggnad"
description: "Settlementets första produktionsbyggnad och +5 % bonus inom vald kategori."
category: "Byggnader"
order: 3
version: "1.0"
engineVersion: "Building System 1.0"
updatedAt: "2026-08-26"
infoboxTitle: "Kategoribyggnad"
infobox:
  nivåkrav: "Settlementnivå 2"
  kostnad: "10 000 Coins"
  storlek: "11×11"
  bonus: "+5 % i vald kategori"
---

## Vad är Kategoribyggnaden?

På settlementnivå 2 kan settlementet bygga den **Kategoribyggnad** som hör till dess aktiva produktionskategori. Detta gäller alla produktionskategorier utom **Alkemi**.

Spelare börjar tjäna **Coins direkt när settlementet har skapats**. Kategoribyggnaden är alltså inte ett krav för att få Coins. När rätt byggnad är färdigställd ger den istället **+5 % produktionsbonus inom settlementets aktiva kategori**.

| Kategori | Byggnad |
|---|---|
| Gruvdrift | [Gruva](/wiki/buildings/gruva) |
| Jordbruk | [Lada](/wiki/buildings/lada) |
| Boskap | [Ladugård](/wiki/buildings/ladugard) |
| Fiske | [Fiskebrygga](/wiki/buildings/fiskebrygga) |
| Skogsbruk | [Sågverk](/wiki/buildings/sagverk) |
| Byggmaterial | [Stenhuggeri](/wiki/buildings/stenhuggeri) |

## Krav

- Settlementnivå: **2 eller högre**
- Licens: **10 000 Coins**
- Storlek: **11×11**
- Väggar: **minst 70 %**
- Tak: **minst 75 %**
- Hela byggnaden måste ligga inom settlementets territorium

### Specialkrav

<BuildingRequirementsTable building="kategoribyggnad" />

Den extra **+5 % produktionsbonusen** aktiveras först när den fysiska byggnaden har godkänts med `/building complete`.

> [!IMPORTANT]
> Kategoribyggnader ger bara sin **+5 % bonus** när byggnaden hör till settlementets aktiva kategori. Byter settlementet kategori fortsätter den nya kategorin att ge vanliga Coins direkt, även om den nya kategoribyggnaden inte är byggd. Den gamla byggnaden ligger kvar och blir aktiv igen om settlementet senare byter tillbaka.

> [!NOTE]
> **Alkemi har ingen kategoribyggnad på nivå 2.** Alkemi kan uppgradera från nivå 2 till 3 utan en kategoribyggnad. Kategorins byggnad är istället [Laboratorium](/wiki/buildings/laboratorium), som låses upp senare och ger +5 % Alkemi-produktion.
