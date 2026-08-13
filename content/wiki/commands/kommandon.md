---
title: "Kommandon"
description: "De viktigaste spelar-, settlement-, företags- och territoriekommandona."
category: "Kommandon"
order: 1
version: "1.5"
engineVersion: "Commands"
updatedAt: "2026-08-12"
infoboxTitle: "Kommandon"
infobox:
  huvudmeny: "/gz menu"
  marketwatch: "/marketwatch"
---

## Huvudmeny

```text
/gz menu
```

## Level & XP

```text
/level
```

Visar din nuvarande Character Level, total Character XP, progress mot nästa level och nästa förmåga som går att låsa upp.

Läs hela guiden på sidan [Level & XP](/wiki/experience/experience).

## Daily Rewards

```text
/daily
/gz daily
```

Öppnar Daily Rewards där du kan hämta dagens Coins och ett slumpmässigt item. Belöningarna ökar från dag 1 till den stora jackpot-belöningen på dag 7. Läs hela guiden på sidan [Daily Rewards](/wiki/economy/daily-rewards).

## Teleport

```text
/spawn
```

`/spawn` teleporterar dig till serverns spawn när du befinner dig i ditt eget settlement.

När du är vid spawn kan du ringa i **klockan på kyrkan** för att teleporteras hem till ditt settlement igen. Om settlementet har satt en egen hemteleport med `/settlement setspawn` används den platsen. Annars används settlementets registrerade centrum.

## Settlement

### Översikt och medlemmar

```text
/settlements
/settlement menu
/settlement info
/settlement members
/settlement upgrade
/settlement treasury
```

### Skapa och hantera settlement

```text
/settlement create <namn>
/settlement join <settlement>
/settlement leave
/settlement kick <spelare>
/settlement lord <spelare>
/settlement transfer <spelare>
/settlement rename <nytt namn>
/settlement tax <procent>
/settlement setspawn
```

`/settlement lord <spelare>` utser en medlem till Lord. Ett settlement kan ha **maximalt två Lords samtidigt**, utöver settlementets King.

`/settlement transfer <spelare>` överför King-rollen till en av settlementets Lords.

### Settlement spawn

```text
/settlement setspawn
```

`/settlement setspawn` sparar platsen där du står som settlementets hemteleport. När en medlem använder klockan vid spawn teleporteras spelaren till den sparade platsen.

Endast settlementets **King** kan använda kommandot. Platsen måste ligga inom settlementets eget territorium. Om ingen egen spawn har satts används settlementets registrerade centrum.

Läs hela guiden på sidan [Settlement spawn](/wiki/settlements/settlement-spawn).

### Stadskassan

```text
/settlement deposit <belopp>
/settlement withdraw <belopp>
/settlement send <spelare> <belopp>
```

`/settlement deposit <belopp>` sätter in Coins från ditt eget saldo i stadskassan. Alla aktiva settlementmedlemmar kan använda kommandot.

`/settlement withdraw <belopp>` tar ut Coins från stadskassan till Kings eget saldo. Endast King kan använda kommandot och en avgift på 2 procent tillkommer.

`/settlement send <spelare> <belopp>` skickar Coins från stadskassan till en aktiv invånare i samma settlement. Endast King kan använda kommandot och en avgift på 2 procent tillkommer.

Läs hela guiden på sidan [Stadskassan och stadsskatt](/wiki/economy/stadskassan).

### Krig & Diplomati

Krig och allianser kan hanteras från settlementets **Krig & Diplomati-meny** eller med commands. Endast King kan skicka krigsförklaringar och hantera allianser.

#### Settlement War

```text
/settlement war declare <settlement>
/settlement war declare <settlement> confirm
/settlement war accept
/settlement war decline
/settlement war cancel
/settlement war status
/settlement war peace
/settlement war peace cancel
/settlement war surrender
```

Om allianser påverkar en declaration visar systemet först vilka settlements som kommer att dras in. Läs hela guiden på sidan [Krigssystemet](/wiki/war/krigssystemet).

#### Allianser

```text
/settlement alliance invite <settlement>
/settlement alliance accept <settlement>
/settlement alliance decline <settlement>
/settlement alliance cancel <settlement>
/settlement alliance leave <settlement>
/settlement alliance status
```

Direkta allierade dras automatiskt in på samma sida när ett krig accepteras. Läs mer på sidan [Allianser](/wiki/war/allianser).

### Settlement inventory

```text
/settlement inventory register
/settlement inventory remove
/settlement inventory list
```

## Byggnader

```text
/building info
/building place <byggnad>
/building status
/building complete
/building cancel
/building outline
/building revalidate <byggnad>
/building relocate <byggnad>
/building relocate <byggnad> confirm
/building relocate cancel <byggnad>
```

King och Lord använder byggkommandona för att placera, kontrollera, färdigställa, reparera och flytta settlementets fysiska byggnader. Läs hela guiden på sidan [Fysiska byggnader](/wiki/buildings/fysiska-byggnader).

## Företag

```text
/company
/company create <företagsnamn>
/company rename <nytt namn>
/company namnbyte <nytt namn>
/company members
/company kick <spelare>
/company license
/company leave
/company salary <spelare> <procent>
/company salaries
/company chest register <pris>
/company chest info
/company chest pause
/company chest resume
/company chest remove
/company chests
/company add manager <spelare>
```

## Shopping Plot

```text
/shoppingplot buy
/shoppingplot sell
/shoppingplot info
```

## Territorium

```text
/territory mark
/territory preview
/territory buy
/territory clear
```

## Riksvägar, admin

Riksvägar markeras och färdigställs av serverns admins. Vanliga spelare behöver inte använda dessa kommandon.

```text
/road create <namn>
/road setpoint
/road complete
/road cancel
/road list
```

`/road setpoint` kan användas flera gånger för att låta vägen följa svängar. När vägen är färdig registreras sträckan med `/road complete`.

Läs reglerna och hur hastighetsbonusen fungerar på sidan [Riksvägar](/wiki/settlements/riksvagar).

## Duell

```text
/duel <spelare>
/duel accept
/duel deny
```
