---
title: "Död & Second Chance"
description: "Så fungerar liv, death reset, serverannonsering och Second Chance på Level 100."
category: "Level & XP"
order: 4
version: "1.0"
engineVersion: "Character Progression"
updatedAt: "2026-08-13"
infoboxTitle: "Död"
infobox:
  normal_dod: "Reset till Level 1"
  xp_efter_reset: "0"
  second_chance: "Level 100"
  second_chance_anvandning: "1 gång per liv"
relatedArticles:
  - category: "experience"
    article: "experience"
    title: "Level & XP"
    description: "Översikt över progressionssystemet."
  - category: "experience"
    article: "levels-och-formagor"
    title: "Levels & förmågor"
    description: "Alla förmågor och levelkrav."
---

## Ditt liv är din progression

Character Level är byggd runt **ett liv i taget**.

När du börjar ett nytt liv har du 0 Character XP och är Level 1. All XP du tjänar bygger vidare på det livet tills du dör.

Det gör hög level till mer än bara total speltid. För att nå de högsta nivåerna måste du både spela mycket och lyckas hålla karaktären vid liv.

## Vad händer när du dör?

Vid en vanlig spelardöd:

1. Servern räknar din riktiga Character XP, även XP som precis har tjänats och ännu inte hunnit sparas i databasen.
2. Din level vid dödsögonblicket bestäms.
3. Servern annonserar att du dog och vilken level du nådde.
4. Ditt nuvarande liv avslutas.
5. Din Character XP återställs till **0**.
6. Du börjar ett nytt liv på **Level 1**.
7. Levelbaserade förmågor försvinner tills du låser upp dem igen.

Exempel:

> Alex dog på Level 47. Alex börjar ett nytt liv på Level 1.

## Vad förlorar jag?

Death reset gäller **Character Progression**.

Du förlorar:

- Character XP från det aktuella livet
- Din nuvarande Character Level
- Levelbaserade förmågor

Vanliga Minecraft-items, vanilla XP och andra system följer sina egna regler. Character death reset är inte ett separat system för att radera inventory eller settlementprogression.

## Second Chance

När du når **Level 100**, alltså **1 200 000 Character XP**, låser du upp Second Chance.

Om du dör medan Second Chance fortfarande är tillgänglig:

1. Minecraft-döden sker fortfarande.
2. Du respawnar som vanligt.
3. Second Chance förbrukas.
4. Din Character XP behålls.
5. Din Character Level behålls.
6. Dina levelbaserade förmågor behålls.

Servern annonserar att du undkom progressionens reset och att Second Chance har förbrukats.

> [!IMPORTANT]
> Second Chance är inte ett extra Minecraft-hjärta och stoppar inte själva death screen eller respawn. Den skyddar din Character Progression från den döden.

## Bara en gång per liv

Second Chance kan användas **en gång under samma liv**.

Om du når Level 100, använder Second Chance och sedan fortsätter spela på Level 100 eller högre får du inte automatiskt en ny Second Chance bara för att du fortfarande uppfyller levelkravet.

Nästa död avslutar livet och återställer dig till Level 1.

För att få en ny Second Chance måste du därefter bygga upp ett nytt liv och nå Level 100 igen.

## Exempel

### Död på Level 36

Du har ingen Second Chance.

Resultat, Character XP blir 0 och du börjar om på Level 1.

### Första döden på Level 103

Du har nått Level 100 och har inte använt Second Chance.

Resultat, Second Chance förbrukas och du behåller Level 103 och din XP.

### Nästa död på Level 108

Second Chance är redan förbrukad i samma liv.

Resultat, livet avslutas. Character XP blir 0 och du börjar om på Level 1.

## Varför är systemet så hårt?

Levelsystemet är tänkt att skapa ett riktigt värde i att överleva.

En hög level ska synas som ett resultat av både aktivitet och överlevnad. Därför är de starkaste förmågorna små nog att inte förstöra vanilla Minecraft, samtidigt som en lång livsprogression fortfarande känns värdefull att skydda.
