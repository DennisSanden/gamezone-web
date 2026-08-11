---
title: "Bank"
description: "Nivåkrav, Coin-kostnad och funktioner som låses upp av Bank."
category: "Byggnader"
order: 11
version: "3.0"
engineVersion: "GameZoneEngine 1.0.0-RC1"
updatedAt: "2026-08-11"
infoboxTitle: "Bank"
infobox:
  typ: "Permanent byggnadslicens"
  kategori: "Administration"
  nivåkrav: "Settlementnivå 4"
  kostnad: "25 000 Coins"
---

## Vad är Bank?

**Bank** är en permanent licens som låses upp genom settlementmenyn.

Öppna `/gz menu`, välj **Settlement** och därefter **Byggnader**. Endast **King eller Lord** kan bekräfta upplåsningen.

> [!IMPORTANT]
> Licensen ger inte längre bonusen direkt. Den fysiska byggnaden måste placeras och godkännas först.

## Krav

- Settlementnivå: **4 eller högre**
- Kostnad: **25 000 Coins**
- Behörighet: **King eller Lord**
- Fysisk storlek: **17×17**
- Väggar: **minst 70 %**
- Tak: **minst 75 %**

## Funktion

Banken låser upp settlementets utökade ekonomiska statistik, inklusive **Skatteöversikten** under Stadskassan.

Skatteöversikten visar:

- total skatt
- produktionsskatt
- företagsskatt
- vilka företag som genererat skatt
- hur mycket varje företag har genererat

Statistiken kan filtreras på:

- senaste 7 dagarna
- senaste 30 dagarna
- totalt

> [!NOTE]
> Skatteöversikten visas endast när Banken är upplåst och aktiv. Stadskassan och vanliga insättningar samt uttag finns fortfarande oberoende av översikten.

## Fysisk byggnad

Efter att licensen köpts ska **King eller Lord** placera byggytan i världen.

```text
/building place bank
```

Kommandot använder blocket du tittar på som byggnadens centrum. En partikelram visar hela byggytan. Ingen Lodestone eller annan permanent markör behöver finnas i byggnaden.

Byggnaden måste ligga helt inom settlementets territorium och uppfylla storlek, väggar, tak, eventuellt höjdkrav samt specialkraven nedan.

### Specialkrav

<BuildingRequirementsTable building="bank" />

Det finns inga krav på vilket material väggar, golv eller tak byggs av. Settlementet får välja stil fritt.

Kontrollera bygget med:

```text
/building status
```

När alla krav är uppfyllda:

```text
/building complete
```

Först då blir **Bank** färdigställd och dess bonus eller funktion aktiveras.

## Om byggnaden skadas

Färdigställda byggnader måste fortsätta uppfylla kraven. När block ändras i byggnaden väntar systemet en kort stund och kontrollerar sedan byggnaden igen.

Om kraven inte längre uppfylls blir byggnaden **skadad** och bonusen pausas. Settlementets onlinespelare får en varning med vad som behöver repareras.

Efter reparation kör King eller Lord:

```text
/building revalidate bank
```

En godkänd kontroll återaktiverar byggnaden utan ny licens eller Coin-kostnad.

## Flytta byggnaden

En färdigställd byggnad kan flyttas utan att licensen köps igen.

```text
/building relocate bank
/building relocate bank confirm
```

Bonusen pausas under flytten. Placera därefter den nya byggytan med `/building place bank` och färdigställ den som vanligt.

Flytten kan ångras med:

```text
/building relocate cancel bank
```

Den gamla byggnaden måste fortfarande uppfylla kraven för att kunna återaktiveras. Den gamla konstruktionen behöver inte rivas när flytten är klar, men räknas inte längre som settlementets officiella Bank.
