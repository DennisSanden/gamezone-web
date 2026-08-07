---
title: "Settlement spawn"
description: "Låt King välja var settlementets medlemmar hamnar när de använder klockan vid spawn."
category: "Settlements"
order: 4
version: "1.0"
engineVersion: "Settlement Custom Spawn"
updatedAt: "2026-08-06"
infoboxTitle: "Settlement spawn"
infobox:
  kommando: "/settlement setspawn"
  behörighet: "King"
  område: "Inom settlementets territorium"
---

## Vad är settlement spawn?

Varje settlement kan ha en egen hemteleport. Det är platsen där settlementets medlemmar hamnar när de använder klockan vid serverns spawn.

Tidigare gick teleporten alltid till settlementets registrerade centrum. King kan nu välja en mer praktisk plats, exempelvis ett torg, ett stadshus eller en entré.

> [!NOTE]
> Settlementets registrerade centrum flyttas inte. Den egna spawnpunkten påverkar bara vart klockan teleporterar medlemmarna.

## Sätt en egen spawnpunkt

Settlementets **King** ställer sig på den önskade platsen och skriver:

```text
/settlement setspawn
```

Spelarens exakta position och riktning sparas. Nästa gång en medlem använder klockan teleporteras spelaren dit.

## Krav

- Endast settlementets King kan sätta spawnpunkten.
- King måste stå inom settlementets eget territorium.
- Kommandot måste användas i en giltig värld och på en säker plats.

## Om ingen spawn har satts

Om settlementets King aldrig har använt `/settlement setspawn` fungerar klockan precis som tidigare och teleporterar medlemmarna till settlementets registrerade centrum.

Det gör att äldre settlements fortsätter fungera utan att någon inställning behöver ändras.

## Bra att veta

King kan flytta hemteleporten genom att ställa sig på en ny plats och använda `/settlement setspawn` igen. Den senaste sparade platsen ersätter den tidigare.

Den egna spawnpunkten ändrar inte:

- settlementets centrum
- territoriets placering eller storlek
- byggnadskrav
- produktionsområde

Se fler kommandon på sidan [Kommandon](/wiki/commands/kommandon).
