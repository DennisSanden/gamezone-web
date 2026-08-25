---
title: "Twitch"
description: "Länka ditt Twitchkonto till GameZone och få Coins när du tittar på godkända GameZone-streamers."
category: "Kommandon"
order: 2
version: "2.0"
engineVersion: "StreamingModule + GameZoneEngine"
updatedAt: "2026-08-25"
infoboxTitle: "Twitch"
infobox:
  koppla: "/twitch <Twitch-namn>"
  tittarbelöning: "1 000 Coins / 10 min"
  timtak: "6 000 Coins"
  dygnstak: "30 000 Coins"
  system: "StreamingModule"
---

## Twitch på GameZone

GameZone använder **StreamingModule** för att koppla Twitchkonton, registrera tittande och hantera Twitch drops. **GameZoneEngine** tar därefter hand om själva Coin-belöningen och ser till att tim- och dygnstaken följs.

Du behöver alltså inte längre öppna någon extern GameZone-länk eller godkänna Twitch via hemsidan.

## Koppla ditt Twitchkonto

Skriv på Minecraftservern:

`/twitch <ditt Twitch-namn>`

Exempel:

`/twitch DennisPåTwitch`

När kopplingen lyckas får du en bekräftelse i Minecraftchatten.

> [!IMPORTANT]
> Ange Twitchkontot som du faktiskt använder när du tittar på GameZone-streams. Kopplingen mellan Minecraftspelaren och Twitchkontot används för att avgöra vem som ska få belöningen.

## Tjäna Coins genom att titta

När ditt konto är länkat kan du få **1 000 Coins per 10 minuters registrerad tittartid** hos en streamer som är registrerad i GameZones Twitchsystem.

### 1. Länka Twitch

Använd `/twitch <ditt Twitch-namn>` på servern.

### 2. Titta på en registrerad GameZone-streamer

Öppna streamen på Twitch med det konto du har länkat till din Minecraftspelare.

StreamingModule sköter registreringen av tittartid och drops. Du behöver därför inte använda GameZones gamla `/twitch link`, `/twitch status` eller `/twitch creator`.

### 3. Få Coins

När ett giltigt 10-minutersintervall ger en reward skickar StreamingModule belöningen vidare till GameZoneEngine.

GameZoneEngine ger då:

**1 000 Coins**

GameZoneEngine har dessutom två hårda gränser:

- **6 000 Coins per timme**
- **30 000 Coins per 24 timmar**

Om en ny Twitch reward skulle ta dig över någon av gränserna betalas den inte ut.

## Om du är offline på Minecraft

StreamingModule har stöd för offline drops. Du behöver därför inte sitta inne på Minecraftservern hela tiden bara för att titta på en stream. Väntande drops hanteras av StreamingModule när de kan levereras till spelaren.

## För streamers

Att länka ditt Twitchkonto med `/twitch <Twitch-namn>` gör inte automatiskt kanalen till en officiell GameZone-stream.

En streamer måste först läggas till i StreamingModules streamerlista av GameZone-administrationen. Det är den listan som avgör vilka streams Twitchsystemet ska arbeta med.

När streamern är registrerad sköter StreamingModule Twitchanslutningen och viewer drops. Den gamla GameZone-lösningen med egen OAuth, `/twitch creator`, Vercel callback och GameZone Creator-token används inte längre.

## Så fungerar systemen tillsammans

Flödet är:

`Twitch → StreamingModule → GameZoneEngine → Coins`

**StreamingModule ansvarar för:**

- kopplingen mellan Twitchnamn och Minecraftspelare
- registrerade streamers
- tittartid
- Twitch drops
- offline drops

**GameZoneEngine ansvarar för:**

- 1 000 Coins per godkänd reward
- timtaket på 6 000 Coins
- dygnstaket på 30 000 Coins
- att Coin-utbetalningen registreras i GameZones ekonomi

## Gamla Twitchkommandon

Följande kommandon från GameZones tidigare egenutvecklade Twitchsystem används **inte längre**:

`/twitch link`

`/twitch status`

`/twitch creator`

`/twitch unlink`

Twitchkommandot ägs nu av StreamingModule.

## Snabbguide

### Jag vill få Coins när jag tittar

`/twitch <ditt Twitch-namn>` → titta på en registrerad GameZone-streamer → StreamingModule registrerar tittartiden → GameZoneEngine betalar ut **1 000 Coins per godkänd 10-minutersreward**.

### Jag vill streama GameZone

Länka ditt Twitchkonto på servern och kontakta GameZone-administrationen för att få kanalen tillagd som streamer i StreamingModule.
