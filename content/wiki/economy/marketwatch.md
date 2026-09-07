---
title: "MarketWatch"
description: "Se vilka resurser som efterfrågas av serverns settlements."
category: "Ekonomi"
order: 5
version: "1.0"
engineVersion: "MarketWatch"
updatedAt: "2026-08-04"
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
