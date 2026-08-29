---
title: "Kommandon"
description: "De viktigaste spelar-, settlement-, företags- och territoriekommandona."
category: "Kommandon"
order: 1
version: "2.0"
engineVersion: "Commands"
updatedAt: "2026-08-26"
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

## Discordkoppling

```text
/discord
```

Ger dig en verifieringskod som används för att koppla ditt Minecraftkonto till Discord. När du fått koden skriver du `/verify <kod>` på GameZones Discord. Kopplingen används bland annat för settlementroller och privata settlementkanaler.

Whitelist görs separat på Discord med `/whitelist <Minecraftnamn>` innan du ansluter till servern. Läs hela guiden på sidan [Minecraft & Discord](/wiki/discord/kom-igang).

## Twitch

```text
/twitch <Twitch-namn>
```

Länkar ditt Twitchkonto till din Minecraftspelare. Titta sedan på en registrerad GameZone-streamer för att få **1 000 GZ Coins per 10 minuter**, upp till **6 000 per timme** och **30 000 per dygn**. Läs hela guiden på sidan [Twitch](/wiki/commands/twitch).

## Teleport

```text
/spawn
```

`/spawn` teleporterar dig till serverns spawn när du befinner dig i ditt eget settlement.

När du är vid spawn kan du ringa i **klockan på fontänen** för att teleporteras hem till ditt settlement igen. Om settlementet har satt en egen hemteleport med `/settlement setspawn` används den platsen. Annars används settlementets registrerade centrum.

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

### Invånarplots

```text
/settlement pos1
/settlement pos2
/settlement assign <spelare>
```

King och Lord kan markera två hörn inom settlementets territorium och tilldela området till en invånare. Den tilldelade invånaren får ensamrätt att bygga, riva och hantera kistor inom plotten.

Läs hela guiden på sidan [Invånarplots](/wiki/settlements/invanarplots).

### Government & Policies

```text
/settlement government status
/settlement government democracy
/settlement government election start
/settlement government election vote <spelare>
/settlement government referendum start
/settlement government referendum vote yes
/settlement government referendum vote no
/settlement policy list
/settlement policy active
/settlement policy activate <policy>
/settlement policy deactivate <policy>
```

Alla settlements börjar som diktatur. King kan ändra till demokrati, där aktiva invånare kan starta King-val. Ett val pågår i 24 timmar och följs av 7 dagars cooldown.

Policies hanteras normalt från settlementets **Government-meny**. Alla invånare kan se aktiva policies och upplåsta slots, medan endast King kan ändra dem. Commands ovan finns kvar som fallback. Fler policyplatser låses upp vid settlement level 5 och 15.

Connected Realm och Open Borders är framtida policies och kan inte aktiveras ännu.

Läs mer på [Government](/wiki/settlements/government) och [Policies](/wiki/settlements/policies).

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

**Bygglicenser köps i `/gz menu` → Settlements → Byggnader.** Byggkommandona nedan används efter köpet för att placera och hantera den fysiska byggnaden.

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
/shoppingplot rent <företagsägare> <procent>
/shoppingplot unrent <spelare>
/shoppingplot tenants
```

Shopping Plots kan ha en separat dygnshyra som dras från företagets Owners privata coin-konto varje dag klockan 18:00. Om betalningen misslyckas försöker systemet dra dubbel hyra nästa dag. Misslyckas även den betalningen sägs plotten upp.

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
