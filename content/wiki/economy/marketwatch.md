---
title: "MarketWatch"
description: "Se vilka resurser som efterfrågas av serverns settlements."
category: "Ekonomi"
order: 5
version: "1.1"
engineVersion: "MarketWatch"
updatedAt: "2026-09-09"
infoboxTitle: "MarketWatch"
infobox:
  kommando: "/marketwatch"
  kategorier: "7"
---


## Prisjakt direkt i spelet

Du kan söka efter ett item direkt från servern:

```text
/market <item>
```

Exempel:

```text
/market beef
/market oak_log
/market diamond
```

Sökningen visar upp till **tre billigaste aktiva butiker** som faktiskt har itemet i lager. Resultatet visar **pris per styck, företag, lagerstatus och butikens registrerade adress**. Om butiken saknar registrerad adress visas koordinater i stället.

> [!INFO]
> Kommandot använder Minecrafts materialnamn. Rått nötkött heter exempelvis `beef`, inte `raw_beef`.

`/market` utan item öppnar fortfarande den vanliga MarketWatch-menyn.

## Översikt

MarketWatch hjälper spelare och företag att se vilka resurser som behövs för kommande settlementuppgraderingar.

Systemet jämför settlementens sammanlagda behov med material som redan finns i registrerade settlement inventories.

## Användning

```text
/marketwatch
```

Välj en kategori för att se efterfrågan på resurser inom den kategorin.

## Köpannonser

Företag kan lägga ut en offentlig annons när de söker en större mängd av ett item.

```text
/market köp <antal> <item> <maxpris per styck>
```

Exempel:

```text
/market köp 5000 beef 1400
```

Det betyder att företaget söker **5 000 Beef** och är villigt att betala upp till **1 400 Coins per styck**. När annonsen skapas skickas den även ut i serverchatten.

Aktiva annonser visas med:

```text
/market annonser
```

En annons gäller i **6 timmar**. Företaget kan skapa högst **en annons var sjätte timme**. Om företaget köper det efterfrågade itemet genom serverns handel räknas den köpta mängden av från annonsen. När hela mängden har köpts försvinner annonsen automatiskt.

> [!INFO]
> Annonsen reserverar inte Coins och genomför inte köpet automatiskt. Den visar vad företaget söker och vilket högsta styckpris företaget annonserar. Själva handeln sker fortfarande genom serverns vanliga handelssystem.
