---
title: "Monument"
description: "Nivåkrav  Coin-kostnad och faktisk funktion för Monument."
category: "Byggnader"
order: 15
version: "3.0"
engineVersion: "GameZoneEngine 1.0.0-RC1"
updatedAt: "2026-08-11"
infoboxTitle: "Monument"
infobox:
  typ: "Permanent byggnadslicens"
  kategori: "Administration"
  nivåkrav: "Settlementnivå 10"
  kostnad: "400 000 Coins"
---

## Vad är Monument?

**Monument** är en permanent licens som låses upp genom settlementmenyn.

Öppna `/gz menu`  välj **Settlement** och därefter **Byggnader**. Endast **King eller Lord** kan bekräfta upplåsningen.

> [!IMPORTANT]
> Licensen ger inte längre bonusen direkt. Den fysiska byggnaden måste placeras och godkännas först.

## Krav

- Settlementnivå: **10 eller högre**
- Kostnad: **400 000 Coins**
- Behörighet: **King eller Lord**
- Fysisk storlek: **21×21, minst 15 block hög**
- Väggar: **minst 70 %**
- Tak: **minst 75 %**

## Funktion

Ger +20 % Coins från all godkänd produktion inom settlementets kategori.

> [!NOTE]
> Licensen blir permanent upplåst. Om settlementet senare ligger under nivåkravet visas byggnaden som inaktiv tills rätt nivå nås igen.

## Fysisk byggnad

Efter att licensen köpts ska **King eller Lord** placera byggytan i världen.

```text
/building place monument
```

Kommandot använder blocket du tittar på som byggnadens centrum. En partikelram visar hela byggytan. Ingen Lodestone eller annan permanent markör behöver finnas i byggnaden.

Byggnaden måste ligga helt inom settlementets territorium och uppfylla storlek, väggar, tak, eventuellt höjdkrav samt specialkraven nedan.

### Specialkrav

<BuildingRequirementsTable building="monument" />

Det finns inga krav på vilket material väggar, golv eller tak byggs av. Settlementet får välja stil fritt.

Kontrollera bygget med:

```text
/building status
```

När alla krav är uppfyllda:

```text
/building complete
```

Först då blir **Monument** färdigställd och dess bonus eller funktion aktiveras.

## Om byggnaden skadas

Färdigställda byggnader måste fortsätta uppfylla kraven. När block ändras i byggnaden väntar systemet en kort stund och kontrollerar sedan byggnaden igen.

Om kraven inte längre uppfylls blir byggnaden **skadad** och bonusen pausas. Settlementets onlinespelare får en varning med vad som behöver repareras.

Efter reparation kör King eller Lord:

```text
/building revalidate monument
```

En godkänd kontroll återaktiverar byggnaden utan ny licens eller Coin-kostnad.

## Flytta byggnaden

En färdigställd byggnad kan flyttas utan att licensen köps igen.

```text
/building relocate monument
/building relocate monument confirm
```

Bonusen pausas under flytten. Placera därefter den nya byggytan med `/building place monument` och färdigställ den som vanligt.

Flytten kan ångras med:

```text
/building relocate cancel monument
```

Den gamla byggnaden måste fortfarande uppfylla kraven för att kunna återaktiveras. Den gamla konstruktionen behöver inte rivas när flytten är klar, men räknas inte längre som settlementets officiella Monument.
