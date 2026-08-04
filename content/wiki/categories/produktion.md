---
title: "Produktion"
description: "Så fungerar kategoribaserad produktion och Coin-intäkter på GameZone."
category: "Produktionskategorier"
order: 0
version: "2.0"
engineVersion: "Production Registry"
updatedAt: "2026-08-04"
infoboxTitle: "Produktion"
infobox:
  kategorier: "7"
  coinregel: "Endast vald kategori"
  tax: "Stadsskatt gäller"
---

## Översikt

När ett settlement skapas väljer det en produktionskategori. Valet avgör vilka resurser som kan ge Coins till settlementets invånare.

> [!IMPORTANT]
> Spelare får endast Coins från resurser som tillhör settlementets valda kategori. Resurser utanför kategorin kan fortfarande samlas in, användas och säljas, men själva produktionen ger inga Coins.

## Produktionskategorier

- Gruvdrift
- Jordbruk
- Boskap
- Fiske
- Skogsbruk
- Byggmaterial
- Alkemi

## Stadsskatt på produktion

När en spelare tjänar Coins genom produktion går en andel automatiskt till settlementets stadskassa. Standardnivån är 25 procent, men settlementets King kan sätta skatten mellan 0 och 100 procent.

Detta är inte samma sak som Server TAX på företagshandel.

## Registrering

Production Engine kontrollerar att resursen tillhör spelarens settlementkategori, att spelaren är berättigad till Coins och att produktionen följer serverns regler.

## Sammanfattning

Vald kategori avgör vilka resurser som ger Coins. Produktion utanför kategorin ger inga Coins.
