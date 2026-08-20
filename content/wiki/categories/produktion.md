---
title: "Produktion"
description: "Översikt över GameZones sju kategorier."
category: "Produktionskategorier"
order: 0
version: "1.3"
engineVersion: "Production Registry"
updatedAt: "2026-08-20"
infoboxTitle: "Produktion"
infobox:
  coinregel: "Endast vald kategori"
  automation: "Ger inga Coins"
---

## Välj en kategori

När ett settlement skapas med `/settlement create <namn>` öppnas en meny där ni väljer vilken typ av resurser settlementet ska specialisera sig på.

> [!IMPORTANT]
> Endast resurser inom den valda kategorin ger Coins från produktion. Resurser från andra kategorier kan fortfarande samlas in, användas och säljas, men de ger inga produktions-Coins.

## Kategorierna

- **Gruvdrift**, mineraler, malm och skatter
- **Jordbruk**, grödor och odling
- **Boskap**, djurhållning och resurser från djur, +100% spelardödade djurdrops och +15% hastighet på hästar
- **Skogsbruk**, stockar och träresurser
- **Byggmaterial**, förädlade block och byggresurser
- **Fiske**, fisk och resurser från fiske, +15% rörelsehastighet i vatten och +15% längre andetag under vatten
- **Alkemi**, bryggning och alkemiska resurser

Läs sidan för varje kategori innan ni väljer. Kategorin påverkar vilka aktiviteter som kan ge Coins.

## Produktion och stora mängder

GameZone är byggt för att belöna aktiv produktion, inte obegränsad massproduktion av samma resurs. Om en spelare producerar mycket stora mängder av samma resurs under kort tid minskar därför Coin-belöningen stegvis.

Det påverkar inte vilka items du får och stoppar inte vanliga farms. Systemet begränsar bara hur mycket Coins extrem produktion av samma resurs kan generera. Normal produktion är tänkt att kunna fortsätta utan märkbar påverkan.

> [!NOTE]
> Begränsningen räknas separat per spelare och resurs. Att en viss resurs produceras mycket påverkar alltså inte Coin-belöningen från andra resurser.
