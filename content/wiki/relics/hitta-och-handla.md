---
title: "Hitta, bära och handla reliker"
description: "Så kommer reliker in i världen och vad som händer när de hittas, tappas, säljs eller byter ägare."
category: "Reliker"
order: 3
version: "2.0"
engineVersion: "Relic System v2"
updatedAt: "2026-08-23"
infoboxTitle: "Relikens resa"
infobox:
  discovery: "Första riktiga fyndet registreras"
  handel: "Vanliga Minecraftöverföringar används"
  deathDrop: "Reliker kan tappas vid död"
  display: "Kan placeras i item frame"
  auction: "Kan delas ut manuellt genom event"
relatedArticles:
  - category: "relics"
    article: "historik-och-agarskap"
    title: "Relikhistorik och ägarskap"
    description: "Hur Engine dokumenterar vem som haft reliken och vad som hänt."
  - category: "relics"
    article: "relic-chests"
    title: "Relic Chests"
    description: "Dungeonkistor som spelare får öppna även i skyddade områden."
---

## Reliker kan släppas på olika sätt

Alla 50 reliker behöver inte finnas ute i världen samtidigt.

En relik kan exempelvis introduceras genom:

- ett gömställe
- en dungeon
- en ruin
- en ledtrådskedja
- en boss eller guardian
- ett stream-event
- en auktion
- en tävling
- ett framtida serverevent

Vissa reliker kan vara kända innan de släpps. Andra kan vara helt hemliga tills någon faktiskt hittar dem.

## Gömda reliker

När en relik placeras ut som ett fynd kan den ha statusen **HIDDEN**.

Det betyder att den finns någonstans i världen men ännu inte har fått sin första riktiga upptäckare.

Administrationen kan bygga hela expeditioner runt en relik. Det kan exempelvis finnas:

1. en skriven bok med första ledtråden
2. en ruin med nästa ledtråd
3. en farlig guardian
4. en Relic Chest längst in i området
5. den riktiga reliken som slutbelöning

## Första upptäckaren

När en HIDDEN-relik för första gången hamnar hos en riktig spelare kan Engine registrera vem som upptäckte den.

Den informationen är permanent historik.

Om Sanny hittar en relik och säljer den till Dennis samma kväll ska reliken fortfarande kunna visa:

```text
Första upptäckare: Sanny
Nuvarande innehavare: Dennis
```

Det är två olika saker.

## Reliker använder vanlig Minecraftlogik

När reliken väl är släppt är den ett riktigt item.

Du kan:

- bära den i inventory
- ge den direkt till en annan spelare
- kasta den på marken
- lägga den i en chest
- placera den i en item frame
- sälja den genom tillåtna handelssystem
- tappa den när du dör

Det finns inget vanligt `/relic transfer` som spelare måste använda för att byta ägare.

> [!IMPORTANT]
> Engine dokumenterar relikens resa, men reliken ska fortfarande kännas som ett riktigt Minecraftföremål.

## Shopping Chests och företag

En relik kan i princip hamna i ett företag eller flyttas genom handel. När Engine kan identifiera överföringen kan den offentliga innehavaren uppdateras.

Priset behöver däremot inte bli en del av relikens offentliga historia. Relikhistoriken handlar främst om **vad reliken varit med om**, inte exakt vad någon betalade för den.

## Dödsfall

Eftersom reliker inte är soulbound kan ett dödsfall få verkliga konsekvenser.

En spelare som bär en värdefull relik riskerar att tappa den om vanliga death drop-regler gäller. En annan spelare kan därefter plocka upp den och bli nästa innehavare.

Det är avsiktligt. En Legendary eller Mythic relik ska kunna skapa berättelser som inte hade kunnat hända om föremålet var låst i en databasmeny.

## Item Frames

Reliker kan ställas ut i item frames.

När Engine identifierar en giltig relik i en item frame kan den registreras som utställd. Det gör det möjligt att bygga museer, troférum och kungliga salar där riktiga reliker faktiskt visas upp.

Att ställa ut en relik är förstås också att visa hela servern var den finns. Väldigt stiligt. Väldigt smart. Förmodligen.

## Ledtrådsböcker

Ledtrådar till reliker behöver inte vara reliker själva.

Ett bra upplägg är att använda Written Books på Lecterns i handbyggda områden. Ledtrådarna kan vara kryptiska, dela upp en expedition i flera steg och peka mot nästa plats utan att avslöja slutmålet direkt.

Ledtrådar kan också släppas gradvis genom hemsidan, Discord eller stream.

## Guardians och dungeons

Relikjakt är tänkt att kunna byggas som dungeonliknande gameplay.

Det kan exempelvis innebära:

- Warden
- Ravager
- Wither Skeletons
- svåra terrängpartier
- fällor
- hemliga ingångar
- puzzle rooms
- flera ledtrådssteg

Själva reliksystemet kräver inte att alla reliker hittas på samma sätt. Det är en styrka. Varje relik kan ha sin egen expedition.
