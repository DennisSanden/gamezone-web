---
title: "Skapa ett settlement"
description: "Grunda ett nytt samhälle, välj kategori och börja utveckla en egen plats i GameZone-världen."
category: "Settlements"
order: 1
version: "1.2"
engineVersion: "Settlement Foundation"
updatedAt: "2026-08-04"
infoboxTitle: "Skapa settlement"
infobox:
  kommando: "/settlement create <namn>"
  startnivå: "1, Enstöring"
  kostnad: "0 Coins"
---

## Skapa ett settlement

Ett settlement är en spelarstyrd bosättning med medlemmar, gemensam ekonomi, skyddad mark och möjlighet att utvecklas genom 15 nivåer.

Skapa ett settlement genom att skriva:

`/settlement create <namn>`

Exempel: `/settlement create Röstånga`

När kommandot har godkänts öppnas en meny där du väljer settlementets produktionskategori. Stadens centrum placeras där du står när settlementet skapas, så välj platsen noggrant.

> [!IMPORTANT]
> Endast resurser inom settlementets valda kategori ger Coins från produktion. Läs mer under [Produktionskategorier](/wiki/categories/produktion).

## Innan du skapar settlementet

Kontrollera att:

- du inte redan tillhör ett settlement
- namnet är unikt och följer serverns regler
- platsen ligger tillräckligt långt från andra settlements
- platsen passar även när settlementet växer

Det kostar för närvarande inga Coins att skapa ett settlement.

## Efter att settlementet skapats

Grundaren blir automatiskt **King** och kan börja bjuda in eller godkänna medlemmar, registrera inventory och utveckla settlementet. Läs mer om King, Lord och befordringar på sidan [Titlar och ledarskap](/wiki/settlements/titlar-och-ledarskap).

Öppna settlementets funktioner genom `/gz menu` eller `/settlement menu`.

### Registrera settlement inventory

Titta på en kista och skriv:

`/settlement inventory register`

Material som krävs för nivåuppgraderingar dras från registrerade kistor. Du kan se registrerade kistor med `/settlement inventory list` och ta bort en registrering med `/settlement inventory remove` medan du tittar på kistan.

### Uppgradera settlementet

Öppna `/gz menu`, välj **Settlement** och sedan **Uppgradering**. En uppgradering kan genomföras när settlementet har rätt antal spelare, Coins, material och byggnadskrav.

### Köpa mer territorium

När settlementet behöver mer plats används:

1. `/territory mark`
2. `/territory preview`
3. `/territory buy`

Köpet betalas med Coins från stadskassan.
