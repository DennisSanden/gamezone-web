---
title: "Minecraft & Discord"
description: "Så blir du whitelistad, kopplar ditt Minecraftkonto till Discord och får rätt settlementkanaler."
category: "Discord"
order: 1
version: "1.0"
engineVersion: "GameZone Steve"
updatedAt: "2026-08-26"
infoboxTitle: "Snabbguide"
infobox:
  steg1: "/whitelist <Minecraftnamn>"
  steg2: "/discord i Minecraft"
  steg3: "/verify <kod> i Discord"
---

## Så fungerar det

GameZone Steve kopplar ihop Minecraftservern och GameZones Discord. Det finns två separata steg: först **whitelist**, så att du kan ansluta till servern, därefter **kontokoppling**, så att Steve vet vilket Discordkonto som tillhör din Minecraftspelare.

> [!IMPORTANT]
> Du behöver **inte** koppla Discord innan du blir whitelistad. Whitelist görs först direkt på Discord.

## Steg 1: Bli whitelistad

Gå till whitelistkanalen på GameZones Discord och skriv:

```text
/whitelist <ditt Minecraftnamn>
```

Exempel:

```text
/whitelist DennisSanden
```

GameZone Steve kontrollerar Minecraftnamnet och lägger till kontot på serverns whitelist. Därefter kan du ansluta till Minecraftservern.

Ett vanligt Discordkonto kan bara använda whitelistregistreringen för ett Minecraftkonto. Administratörer kan lägga till ytterligare spelare vid behov.

## Steg 2: Hämta en Discordkod i Minecraft

När du har kommit in på servern skriver du:

```text
/discord
```

Du får då en verifieringskod i Minecraft. Koden används för att bevisa att Minecraftspelaren faktiskt är din.

## Steg 3: Verifiera på Discord

Gå tillbaka till GameZones Discord och skriv:

```text
/verify <kod>
```

Exempel:

```text
/verify 483921
```

När Steve godkänner koden är ditt Minecraftkonto och Discordkonto kopplade.

## Vad händer efter verifieringen?

När kontona är kopplade kan Steve automatiskt ge dig rätt Discordroller och tillgång till ditt settlements privata kanaler.

Om du byter eller lämnar settlement uppdateras åtkomsten automatiskt när Steve synkroniserar servern med Discord.

## Kortversionen

```text
1. Discord:   /whitelist <Minecraftnamn>
2. Minecraft: /discord
3. Discord:   /verify <kod>
4. Klart
```

Whitelist och Discordkoppling är alltså **inte samma sak**. `/whitelist` släpper in ditt Minecraftkonto på servern. `/discord` och `/verify` kopplar därefter ihop Minecraftkontot med ditt Discordkonto.
