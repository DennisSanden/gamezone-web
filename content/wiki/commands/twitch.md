---
title: "Twitch"
description: "Koppla ditt Twitchkonto till GameZone, tjäna Coins genom att titta och bli synlig som godkänd GameZone Creator."
category: "Kommandon"
order: 2
version: "1.1"
engineVersion: "Twitch Integration"
updatedAt: "2026-08-24"
infoboxTitle: "Twitch"
infobox:
  koppla: "/twitch link"
  status: "/twitch status"
  creator: "/twitch creator"
  kopplaBort: "/twitch unlink"
  tittarbelöning: "1 000 Coins / 10 min"
  timtak: "6 000 Coins"
  dygnstak: "30 000 Coins"
  creatorAnnouncement: "Var 30:e minut"
---

## Koppla Twitch till GameZone

Du kan koppla ditt Twitchkonto direkt till ditt Minecraftkonto på GameZone. Samma koppling används oavsett om du är **spelare som vill tjäna Coins genom att titta** eller **kreatör som streamar från servern**.

Börja på Minecraftservern med:

`/twitch link`

Du får en personlig engångslänk. Öppna länken och logga in med det Twitchkonto du vill koppla till ditt Minecraftkonto.

När kopplingen är klar kan du kontrollera den med:

`/twitch status`

Vill du ta bort kopplingen använder du:

`/twitch unlink`

> [!IMPORTANT]
> Koppla det Twitchkonto du faktiskt använder. Ett Twitchkonto kan inte användas för att registrera tittartid åt flera Minecraftkonton.

## För spelare, tjäna Coins genom att titta

När ditt Twitchkonto är kopplat kan du få **1 000 Coins för varje 10 minuter** du tittar på en godkänd GameZone Creator som är live.

### 1. Hitta någon som är live

Gå till [Live](/live) på GameZoneMC.se. Där listas de godkända GameZone Creators som streamar just nu. Aktiva streams kan även visas på startsidan.

### 2. Titta med ditt kopplade Twitchkonto

Öppna streamen och se till att du är inloggad på **samma Twitchkonto som du kopplade med `/twitch link`**.

Du behöver också vara ansluten till streamens Twitchchatt för att GameZone ska kunna registrera din närvaro. Du behöver **inte skriva något i chatten**.

### 3. Få din belöning

När systemet har registrerat 10 minuters tittartid får du:

**1 000 Coins**

Tittartiden är global per spelare. Om du har flera GameZone-streams öppna samtidigt räknas tiden fortfarande bara en gång. Du kan få högst **6 000 Coins per timme** och **30 000 Coins per 24 timmar** från Twitchsystemet.

Du behöver inte vara online på Minecraftservern för att få dina Coins. Belöningen kopplas till ditt GameZonekonto genom Twitchkopplingen.

> [!IMPORTANT]
> Twitch ger inte GameZone information om exakt vem som har själva videospelaren öppen. Därför används närvaro i streamens Twitchchatt för att verifiera tittartiden. Det kan finnas en kort fördröjning när du ansluter till eller lämnar chatten.

## För kreatörer

Streamar du GameZone på Twitch kan du bli godkänd som **GameZone Creator**. Då upptäcker systemet automatiskt när du går live och kan marknadsföra streamen både på hemsidan och inne på servern.

### 1. Koppla kontot

Skriv:

`/twitch link`

Öppna länken och logga in med **Twitchkontot du streamar från**.

Kontrollera sedan att kopplingen lyckades:

`/twitch status`

### 2. Bli godkänd

Att koppla Twitchkontot gör dig **inte automatiskt** till GameZone Creator.

En GameZone-admin måste godkänna dig som creator. Detta gör att bara godkända GameZone-streamers kan visas och annonseras genom serverns officiella Twitchsystem.

### 3. Aktivera Creator-behörighet

När en admin har godkänt dig skriver du:

`/twitch creator`

Öppna länken och godkänn Twitchbehörigheten. Den här extra behörigheten ges bara till creators och används för att kontrollera vilka kopplade Twitchkonton som finns i din chat.

### 4. Gå live från GameZone

Starta din Twitchstream i kategorin **Minecraft** och var samtidigt online på GameZone med det Minecraftkonto som är kopplat till streamern.

GameZone räknar bara streamen som aktiv i vårt Live-system när både Twitchstreamen är live i Minecraft-kategorin och den kopplade creatorn är online på GameZone. Du behöver inte aktivera något kommando varje gång du går live.

## Vad händer när en GameZone Creator är live?

När systemet upptäcker streamen kan den:

- visas på GameZoneMC.se:s startsida
- visas under [Live](/live)
- visa streamtitel, tittarantal och direktlänk till Twitch
- annonseras på Minecraftservern var **30:e minut** med en klickbar Twitchlänk
- ge kopplade GameZone-spelare **1 000 Coins per 10 minuters registrerad tittartid**

Som streamer får du inte tittarbelöning från din egen stream.

## Snabbguide

### Jag vill tjäna Coins

`/twitch link` → koppla Twitch → öppna [Live](/live) → titta på en GameZone Creator med ditt kopplade konto → få **1 000 Coins per 10 minuter**.

### Jag vill streama GameZone

`/twitch link` → koppla ditt streamkonto → bli godkänd av en admin → `/twitch creator` → starta en Minecraftstream medan du är online på GameZone → streamen visas automatiskt.
