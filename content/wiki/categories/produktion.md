---
title: "Produktion"
description: "Översikt över GameZones sju kategorier."
category: "Produktionskategorier"
order: 0
version: "1.4"
engineVersion: "Production Registry"
updatedAt: "2026-09-07"
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
> Skyddet räknas per resurs. Att en viss resurs produceras mycket påverkar alltså inte Coin-belöningen från andra resurser.

### Högre produktionstak genom progression

Grundgränserna är samma för alla nya settlements, men produktionstaket kan växa med progression:

- **+10 % produktionstak för varje settlement level efter Level 1**
- **Gondoria, +10 % produktionstak**
- **Character Level 60, +50 % produktionstak för spelaren**
- **Item Maniac, +30 % produktionstak**

Bonusarna kan kombineras. Ett Level 50-settlement med Item Maniac och en Level 60-spelare från Gondoria kan nå **+580 % produktionstak**, alltså **6,8 gånger grundtaket**.

Produktionstak ökar mängden du kan producera innan Coin-belöningen börjar trappas ned. Det är inte samma sak som en vanlig produktionsbonus som höjer Coins per item.

## Bonus baserad på kategorifördelning

Produktionen påverkas också av **hur många aktiva settlements som har valt samma produktionskategori**.

En ovanlig kategori får en större produktionsbonus. Ju fler settlements som väljer samma kategori, desto mindre blir bonusen. Systemet räknar på det totala antalet aktiva spelarsettlements och skalar därför automatiskt när servern växer.

En mycket ovanlig kategori kan få upp till ungefär **+50 % produktion**. Bonusen räknas in i settlementets vanliga produktionsbonus tillsammans med exempelvis policies, kultur, byggnader, titlar och andra produktionsbuffar.

Syftet är att göra underrepresenterade kategorier mer attraktiva och skapa större variation i vad olika settlements producerar. Det ger i sin tur fler anledningar att handla resurser mellan settlements i stället för att alla väljer samma inriktning.

I `/settlements` visas både antal och procent för varje produktionskategori. När ett settlement skapas eller byter kategori visas också den **aktuella produktionsbonusen** för alternativen direkt i menyn.

