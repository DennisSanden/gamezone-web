---
title: "Tiers, statusar och säkerhet"
description: "Rarity, relikstatusar, serienummer, generationer och hur du känner igen en äkta relik."
category: "Reliker"
order: 5
updatedAt: "2026-08-26"
infoboxTitle: "Relic Identity"
infobox:
  tier: "Common till Mythic"
  serienummer: "GZR-0001 till GZR-0050"
  generation: "Senaste giltiga generationen"
  signatur: "Kryptografiskt verifierad"
  restore: "Ny generation gör äldre kopior ogiltiga"
relatedArticles:
  - category: "relics"
    article: "historik-och-agarskap"
    title: "Relikhistorik och ägarskap"
    description: "Hur status och innehavare förändras över tid."
---

## Fem tiers

GameZones ursprungliga 50 reliker använder fem raritynivåer.

| Tier | Färg i spelet | Antal i grundregistret |
|---|---|---:|
| Common | Grå | 18 |
| Rare | Blå | 14 |
| Epic | Lila | 9 |
| Legendary | Guld | 6 |
| Mythic | Mörkröd | 3 |

Det finns totalt **50 reliker** i grundregistret.

## Common betyder inte vanligt loot

Common är den vanligaste nivån **bland reliker**.

Det betyder inte att en Common ska behandlas som ett vanligt järnsvärd. Den är fortfarande registrerad i reliksystemet, Unbreakable och kan ha unik historia eller en specialfunktion.

Exempel är **The Book of Fortune**, som trots Common ger +2% Production när den används som settlementrelik.

## Serienummer

Varje av de 50 relikerna har ett serienummer.

Formatet är:

```text
GZR-0001
GZR-0002
...
GZR-0050
```

Serienumret hör till relikens identitet och ska inte ändras när reliken byter ägare.

## Generation

En relik har också en **generation**.

Den normala första instansen börjar som Generation 1.

Om en relik går förlorad och återställs får den ett nytt generationsnummer.

Exempel:

```text
GZR-0043
Generation 2
```

När Generation 2 blir den aktuella generationen ska Generation 1 inte längre räknas som den äkta reliken.

## Signerad identitet

En äkta relik har en unik identitet som inte går att återskapa genom att bara döpa om ett vanligt föremål.

Det innebär att någon inte kan skapa **The Worldheart** genom att döpa om en Nether Star och skriva samma lore.

## Vad händer med gamla generationer?

Om en gammal generation dyker upp efter att reliken har återställts är den inte längre en giltig relik.

Den räknas inte längre som en aktiv relik.

Den kan exempelvis visas som:

```text
Ogiltig kvarleva av Stormhoof
Denna relikinstans är inte längre giltig.
```

Det gör att en restore inte skapar två äkta exemplar med samma bonus.

## Relikstatusar

Reliker kan befinna sig i flera olika tillstånd.

### UNRELEASED

Reliken finns i registret men har inte släppts i världen.

### HIDDEN

Reliken har placerats ut men är ännu inte upptäckt.

### DISCOVERED

Reliken har hittats och discoveryflödet har påbörjats.

### OWNED

Reliken har en verifierad innehavare, exempelvis en spelare, ett settlement eller ett företag.

### DISPLAYED

Reliken är registrerad som utställd, exempelvis i en item frame.

### LOCATION_UNKNOWN

Reliken har funnits, men dess nuvarande plats är okänd.

### LOST

Reliken har administrativt bedömts som förlorad.

### RESTORED

En ny giltig generation har skapats efter att en tidigare instans gått förlorad.

### RETIRED

Reliken finns kvar i historiken men ska inte längre cirkulera som aktiv relik.

## Hemliga Mythicreliker

Alla reliker behöver inte avslöjas innan discovery.

I grundregistret är följande tre Mythicreliker avsedda att kunna vara hemliga före fynd:

- **The Hammer of Creation**
- **The Crown of Dominion**
- **The Worldheart**

Det gör att servern kan ha reliker som spelarna inte ens vet existerar förrän någon hittar dem.
