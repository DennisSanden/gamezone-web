---
title: "Spelarhandel"
description: "Byt items och Coins säkert direkt med andra spelare genom /trade."
category: "Ekonomi"
order: 3
version: "1.0"
engineVersion: "Player Trade"
updatedAt: "2026-09-21"
infoboxTitle: "Spelarhandel"
infobox:
  kommando: "/trade <spelare>"
  maxavstånd: "5 block"
  innehåll: "Items och Coins"
  säkerhet: "Dubbel bekräftelse"
  skatt: "Mottagarens Server TAX"
---

## Handla direkt med andra spelare

Med **Spelarhandel** kan två spelare byta items och Coins direkt med varandra utan en Shopping Chest.

Starta en handel med:

```text
/trade <spelare>
```

Den andra spelaren får en trade-förfrågan i chatten och kan **klicka på Acceptera eller Neka**. Kommandona fungerar också:

```text
/trade accept
/trade deny
```

Förfrågan gäller i 30 sekunder.

> [!IMPORTANT]
> Båda spelarna måste vara i samma värld och inom **5 block** från varandra för att handla.

## Trade-fönstret

När förfrågan accepteras öppnas ett gemensamt trade-fönster. Din sida och motpartens sida är tydligt separerade så att det går att se vem som erbjuder vad.

Du kan lägga till **items** från ditt inventory och **Coins** i samma handel. Du kan bara ändra ditt eget erbjudande.

För att lägga till Coins klickar du på Coin-knappen. Trade-fönstret stängs tillfälligt och du skriver beloppet direkt i chatten, exempelvis:

```text
1000
250k
1m
```

Därefter öppnas handeln igen med beloppet inlagt.

## Två bekräftelser

Spelarhandel använder två steg innan något faktiskt flyttas.

1. Båda spelarna accepterar erbjudandet i trade-fönstret.
2. En slutlig bekräftelse visar vad du ger och vad du får. Båda spelarna måste bekräfta igen.

När en spelare accepterar får båda parter ett tydligt meddelande om vem som har accepterat.

Om någon ändrar sitt erbjudande innan handeln är låst återställs accept-statusen. Det gör att en spelare inte kan acceptera ett erbjudande och sedan obemärkt byta innehållet precis före genomförandet.

> [!IMPORTANT]
> Items och Coins flyttas först när **båda spelarna har godkänt den slutliga bekräftelsen**.

## Coins och Server TAX

När Coins skickas i en spelarhandel används **Server TAX för spelaren som tar emot Coins**.

Om mottagaren saknar företag används **50 % Server TAX** på Coin-överföringen.

Exempel: Om du skickar 1 000 000 Coins till en spelare med 42 % Server TAX blir skatten 420 000 Coins och mottagaren får 580 000 Coins.

Den slutliga bekräftelsen visar skatten innan handeln genomförs. Läs mer om hur skatten räknas på sidan [Server TAX](/wiki/economy/server-tax).

## Statistik och historik

Genomförda spelartrades registreras av GameZoneEngine. Systemet loggar bland annat vilka spelare som handlade, Coins, skatt och de items som bytte ägare.

Items som handlas genom `/trade` räknas också in i serverns handelsstatistik och data. Spelarhandel är alltså en del av den riktiga serverekonomin, inte en separat väg vid sidan av statistiken.

## Skillnaden mot företagshandel

`/trade` är till för direkt handel mellan två spelare som står nära varandra. Företagens **Shopping Chests**, inköpskistor och MarketWatch finns fortfarande kvar för butiker, annonser och handel där köpare och säljare inte behöver mötas samtidigt.
