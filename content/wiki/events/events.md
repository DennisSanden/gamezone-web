---
title: "Events"
description: "Så fungerar GameZones events, eventområden, deltagande och de särskilda regler som gäller under ett event."
category: "Events"
order: 1
version: "1.0"
engineVersion: "Event System"
updatedAt: "2026-08-28"
infoboxTitle: "Events"
infobox:
  typ: "Serveraktiviteter"
  anslutning: "/event join"
  pvp: "Styrs per event"
  progression: "Skyddad under event"
relatedArticles:
  - category: "experience"
    article: "dod-och-second-chance"
    title: "Död & Second Chance"
    description: "Hur vanlig död och progression fungerar utanför events."
  - category: "commands"
    article: "kommandon"
    title: "Kommandon"
    description: "Översikt över vanliga kommandon på GameZone."
---

## Vad är ett event?

**Events** är tillfälliga aktiviteter som serverteamet kan starta för hela eller delar av servern. Det kan vara turneringar, tävlingar, PvP-event, specialmatcher eller andra aktiviteter med egna regler och ett eget eventområde.

När ett event är aktivt kan spelare ansluta med:

```text
/event join
```

## Eventområdet

När du går med i ett event flyttas du till det eventområde som serverteamet har förberett. Eventsystemet håller eventet separerat från vanligt survivalspel så att tävlingen inte ska påverka din normala progression på ett orimligt sätt.

> [!IMPORTANT]
> Följ alltid informationen som visas när eventet startar. Regler, PvP och vinstvillkor kan skilja sig mellan olika event.

## Inventarie och progression

Event kan använda ett separat upplägg där ditt vanliga inventory inte ska ge dig en fördel i tävlingen. Eventsystemet kan därför rensa eller styra inventory när du ansluter till eventet.

Död under ett aktivt event ska inte fungera som en vanlig survivaldöd. **Coin-loss och Character Level-loss ska inte appliceras på eventdödsfall.**

## PvP

PvP är inte automatiskt aktivt i alla events. Serverteamet kan slå på eller av PvP beroende på vilken typ av event som körs.

Det betyder att två event kan använda samma område men ha helt olika regler.

## Vinnare

Eventsystemet kan registrera en vinnare så att resultatet kan användas av andra GameZone-system och visas på webben när ett event använder den funktionen.

## När körs events?

Aktuella event annonseras av serverteamet. Håll koll på servermeddelanden, Discord och GameZones övriga informationskanaler för tid och regler inför nästa event.
