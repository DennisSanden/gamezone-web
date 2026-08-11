---
title: "Underverk"
description: "Nivåkrav  Coin-kostnad och faktisk funktion för Underverk."
category: "Byggnader"
order: 17
version: "3.0"
engineVersion: "GameZoneEngine 1.0.0-RC1"
updatedAt: "2026-08-11"
infoboxTitle: "Underverk"
infobox:
  typ: "Permanent byggnadslicens"
  kategori: "Administration"
  nivåkrav: "Settlementnivå 15"
  kostnad: "5 000 000 Coins"
---

## Vad är Underverk?

**Underverk** är en permanent licens som låses upp genom settlementmenyn.

Öppna `/gz menu`  välj **Settlement** och därefter **Byggnader**. Endast **King eller Lord** kan bekräfta upplåsningen.

> [!IMPORTANT]
> Licensen ger inte längre bonusen direkt. Den fysiska byggnaden måste placeras och godkännas först.

## Krav

- Settlementnivå: **15 eller högre**
- Kostnad: **5 000 000 Coins**
- Behörighet: **King eller Lord**
- Fysisk storlek: **51×51, minst 30 block hög**
- Väggar: **minst 70 %**
- Tak: **minst 75 %**

## Funktion

Permanent licens. Ingen aktiv ränteutbetalning kunde bekräftas i den granskade koden.

> [!NOTE]
> Licensen blir permanent upplåst. Om settlementet senare ligger under nivåkravet visas byggnaden som inaktiv tills rätt nivå nås igen.

## Fysisk byggnad

Efter att licensen köpts ska **King eller Lord** placera byggytan i världen.

```text
/building place underverk
```

Kommandot använder blocket du tittar på som byggnadens centrum. En partikelram visar hela byggytan. Ingen Lodestone eller annan permanent markör behöver finnas i byggnaden.

Byggnaden måste ligga helt inom settlementets territorium och uppfylla storlek, väggar, tak, eventuellt höjdkrav samt specialkraven nedan.

### Specialkrav

- **8 Beacons**
- **6 Bells**
- **8 Vaults**
- **4 Ender Chests**

Det finns inga krav på vilket material väggar, golv eller tak byggs av. Settlementet får välja stil fritt.

Kontrollera bygget med:

```text
/building status
```

När alla krav är uppfyllda:

```text
/building complete
```

Först då blir **Underverk** färdigställd och dess bonus eller funktion aktiveras.

## Om byggnaden skadas

Färdigställda byggnader måste fortsätta uppfylla kraven. När block ändras i byggnaden väntar systemet en kort stund och kontrollerar sedan byggnaden igen.

Om kraven inte längre uppfylls blir byggnaden **skadad** och bonusen pausas. Settlementets onlinespelare får en varning med vad som behöver repareras.

Efter reparation kör King eller Lord:

```text
/building revalidate underverk
```

En godkänd kontroll återaktiverar byggnaden utan ny licens eller Coin-kostnad.

## Flytta byggnaden

En färdigställd byggnad kan flyttas utan att licensen köps igen.

```text
/building relocate underverk
/building relocate underverk confirm
```

Bonusen pausas under flytten. Placera därefter den nya byggytan med `/building place underverk` och färdigställ den som vanligt.

Flytten kan ångras med:

```text
/building relocate cancel underverk
```

Den gamla byggnaden måste fortfarande uppfylla kraven för att kunna återaktiveras. Den gamla konstruktionen behöver inte rivas när flytten är klar, men räknas inte längre som settlementets officiella Underverk.
