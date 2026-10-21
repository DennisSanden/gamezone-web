---
title: "Events och schema"
description: "Dagliga events klockan 20 och 21, Survival och roterande tävlingar."
category: "Events"
order: 1
version: "2026.10"
engineVersion: "GameZoneEngine 2026-10-21"
updatedAt: "2026-10-21"
infobox:
  kvällsschema: "20:00 och 21:00"
  survival: "Varje kväll"
  andra event: "Roterar"
---

## Så fungerar eventkvällarna

GameZoneMC har normalt **två schemalagda events per kväll**, ett klockan **20:00** och ett klockan **21:00**. **Survival spelas varje kväll**, men växlar mellan tiderna. Den andra platsen roterar mellan Archery Masters, Team Deathmatch, Hunger Games Solo och Hunger Games Duo.

Tiderna kommer från Engines schemaläggare. Om serverteamet ändrar något manuellt gäller informationen i spelet eller serverns aktuella eventinformation. Hunger Games Solo och Duo ligger inte samtidigt i det ordinarie två-eventschemat.

## Gå med

```text
/event join
```

Anmälan öppnar före start. Vissa event kräver lag, andra är individuella. Din vanliga utrustning hanteras separat i eventet, och normal survivalprogression ska inte gå förlorad på grund av en eventdöd.

## Eventtyper

- **Survival**, kooperativt PvE med upp till 20 waves, klasser och gemensamma förbättringar.
- **Hunger Games**, Solo eller Duo där du överlever längre än motståndarna.
- **Team Deathmatch**, två lag med gemensamma tickets.
- **Archery Masters**, bågskyttebaserad tävling.

Hunger Games, Team Deathmatch och Archery Masters har separata ELO-system. Se [Survivalguiden](/wiki/events/survival) för klasser, bonusar och bossar.

## Spelarstartade events

```text
/event start <Archery/Survival/TDM/HG>
```

I Engine finns stöd för spelardrivna event med minst åtta deltagare, en anmälningsperiod på fem minuter och begränsning till ett sådant event per timme. Spelarstart är inte tillåten tätt inpå ett schemalagt event. GUI och kommandots hjälptext visar vad som finns tillgängligt.
