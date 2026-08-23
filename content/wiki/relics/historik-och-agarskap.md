---
title: "Relikhistorik och ägarskap"
description: "Så dokumenterar Engine upptäckare, innehavare, utställningar, förlust, restore och relikens fortsatta serverhistoria."
category: "Reliker"
order: 6
version: "2.0"
engineVersion: "Relic System v2"
updatedAt: "2026-08-23"
infoboxTitle: "Relic History"
infobox:
  upptackare: "Första upptäckaren sparas separat"
  innehavare: "Spelare, settlement eller företag"
  position: "Visas offentligt utan exakta koordinater"
  restore: "Skapar ny generation och historikhändelse"
  pris: "Behöver inte ingå i offentlig relikhistorik"
relatedArticles:
  - category: "relics"
    article: "tiers-statusar-och-sakerhet"
    title: "Tiers, statusar och säkerhet"
    description: "Generationer, signaturer och relikstatusar."
  - category: "relics"
    article: "hitta-och-handla"
    title: "Hitta och handla reliker"
    description: "Hur reliker flyttas genom vanlig gameplay."
---

## Reliker får en egen serverhistoria

En viktig del av reliksystemet är att föremålet fortsätter samla historia efter att det hittats.

GameZone kan skriva den ursprungliga loren, men spelarna skapar nästa kapitel genom vad de faktiskt gör med reliken.

Exempel:

```text
2 september
The Book of Fortune upptäcktes av Sanny.

6 september
Reliken övergick till Dennis.

9 september
Reliken placerades i Röstångas Settlement Inventory.

18 september
Relikens plats blev okänd.

21 september
Reliken återfanns av Kalle.
```

## Upptäckare och innehavare är olika saker

**Första upptäckare** är den spelare som hittade reliken första gången.

**Nuvarande innehavare** är den person eller organisation som Engine senast har identifierat som innehavare.

Det betyder att första upptäckaren kan behålla sin historiska status även om reliken har bytt händer tio gånger.

## Möjliga innehavare

Engine kan registrera olika typer av innehavare.

### Spelare

Reliken finns hos en spelare och kan exempelvis visas offentligt som:

```text
Bärs av Dennis
```

### Settlement

Reliken förvaras som en settlementrelik.

Offentligt kan den visas som:

```text
Förvaras inom Röstånga
```

Exakta chestkoordinater ska inte behöva visas.

### Företag

Om reliken finns i ett företagssystem kan företaget registreras som innehavare.

### Utställd

Reliken kan vara registrerad som DISPLAYED, exempelvis i en item frame.

## Offentlig plats är medvetet vag

Reliksystemet ska inte bli en gratis radar för rånare.

Hemsidan kan visa formuleringar som:

- Bärs av spelare
- Förvaras inom ett settlement
- Finns i ett företag
- Utställd
- Okänd plats
- Förlorad
- Ännu inte upptäckt

Hemsidan ska inte behöva visa:

- exakta koordinater
- chestposition
- inventoryslot
- annan information som avslöjar var föremålet kan stjälas

## Händelser som är värda att spara

Varje liten inventoryförflyttning behöver inte bli en offentlig historikrader.

Viktiga händelser är exempelvis:

- första discovery
- ny spelare blir innehavare
- nytt settlement blir innehavare
- nytt företag blir innehavare
- reliken ställs ut
- platsen blir okänd
- reliken rapporteras förlorad
- reliken återfinns
- reliken återställs
- reliken pensioneras

## Kanonisk lore och serverhistorik

Relikens berättelse består egentligen av två lager.

### Kanonisk lore

Det här är historien GameZone har skrivit om relikens ursprung.

Det kan vara:

- vem som skapade den
- vilket rike den tillhörde
- vem som bar den förr
- hur den försvann
- varför den är betydelsefull

### Serverhistorik

Det här är det spelarna faktiskt gör efter release.

Exempel:

- vem som hittade den
- vem som köpte den
- vilket settlement som aktiverade den
- när den ställdes ut
- när den förlorades
- vem som återfann den

De två lagren ska inte blandas ihop. Den skrivna loren är bakgrunden. Serverhistoriken är den levande fortsättningen.

## Restore

Om en relik verkligen försvinner genom exempelvis tekniskt fel kan administrationen återställa den.

Restore skapar en ny generation och gör äldre generationer ogiltiga.

Restore ska också kunna bli en del av historiken. Exempel:

```text
Reliken återställdes efter att den tidigare instansen försvann vid ett tekniskt fel.
```

Detta är en säkerhetsfunktion, inte ett sätt att skapa fler exemplar.
