---
title: "Events"
description: "Så fungerar GameZones events, eventområden, deltagande och de särskilda regler som gäller under ett event."
category: "Events"
order: 1
version: "1.1"
engineVersion: "Event System"
updatedAt: "2026-09-07"
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

## Eventtyper och vinnare

Events kan köras som **Solo**, **Settlement** eller **Random Teams**. Vinnaren utses automatiskt när inget motstånd återstår.

- **Solo**, sista kvarvarande spelaren vinner.
- **Settlement**, sista kvarvarande settlementet vinner.
- **Random Teams**, sista kvarvarande laget vinner. Laget visas tydligt vid spelarnas namn under eventet.

När en spelare elimineras hörs ett svagt kanonljud.

## Prispengar

Ett event kan ha en prispott.

- I **Solo** går prispotten till vinnaren.
- I **Settlement** går prispotten till vinnande settlements stadskassa.
- I **Random Teams** delas prispotten mellan **alla spelare i vinnarlaget**, även lagmedlemmar som eliminerats tidigare under eventet. En spelare som frivilligt lämnar eventet räknas inte längre till lagets prispott.

## När körs events?

Aktuella event annonseras av serverteamet. Håll koll på servermeddelanden, Discord och GameZones övriga informationskanaler för tid och regler inför nästa event.
