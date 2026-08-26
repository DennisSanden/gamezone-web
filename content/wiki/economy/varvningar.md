---
title: "Värvningar"
description: "Värva nya spelare till GameZone och få Coins när de blir aktiva på servern."
category: "Ekonomi"
order: 6
version: "1.0"
engineVersion: "Referral System"
updatedAt: "2026-08-26"
infoboxTitle: "Värvningar"
infobox:
  registrera: "/värvad <spelare>"
  statistik: "/värvningar [spelare]"
  nySpelare: "5 000 + 5 000 Coins"
  varvare: "10 000 Coins"
  kvalificering: "Level 10 + 3 timmars speltid"
---

## Så fungerar värvningar

GameZones värvningssystem belönar spelare som tar med nya personer till servern.

En ny spelare kan registrera vem som värvade dem med:

`/värvad <spelare>`

När värvningen registreras får den nya spelaren direkt **5 000 Coins**. Värvningen får då statusen **väntande** tills spelaren har blivit tillräckligt aktiv på servern.

> [!IMPORTANT]
> `/värvad` måste användas inom spelarens första **24 timmar** på servern och innan spelaren har nått **2 timmars total speltid**.

## När blir en värvning kvalificerad?

En väntande värvning blir automatiskt kvalificerad när den nya spelaren har uppnått båda kraven:

- **Level 10**
- Minst **3 timmars total speltid**

Systemet kontrollerar väntande värvningar automatiskt.

När värvningen kvalificeras får personen som värvade spelaren **10 000 Coins**. Den nya spelaren får samtidigt ytterligare **5 000 Coins**.

| Händelse | Ny spelare | Värvare |
| --- | ---: | ---: |
| Värvningen registreras | 5 000 Coins | - |
| Level 10 + 3 timmars speltid | 5 000 Coins | 10 000 Coins |
| **Totalt** | **10 000 Coins** | **10 000 Coins** |

## Regler

Du kan bara registrera **en** värvare. När en värvning väl har registrerats går det inte att registrera en annan spelare.

Du kan inte värva dig själv.

Spelaren du anger måste finnas som spelare på GameZone.

Om 24 timmar har passerat sedan din första anslutning, eller om du redan har spelat i 2 timmar, kan du inte längre använda `/värvad`.

## Värvningstopplistan

Skriv:

`/värvningar`

för att se serverns **10 bästa värvare**, baserat på antalet kvalificerade värvningar.

Du kan även kontrollera en specifik spelares statistik med:

`/värvningar <spelare>`

Där visas hur många värvningar spelaren har som är **kvalificerade** och hur många som fortfarande **väntar** på att den värvade spelaren ska nå kraven.

> [!NOTE]
> Bara kvalificerade värvningar räknas på topplistan. Att en spelare har registrerat ditt namn räcker alltså inte, personen måste också nå level 10 och 3 timmars speltid.
