---
title: "Myntförvaring"
description: "Nivåkrav, licenskostnad, byggkrav och funktion för Myntförvaring."
category: "Byggnader"
order: 22
version: "4.0"
engineVersion: "Building System 1.0"
updatedAt: "2026-08-20"
infoboxTitle: "Myntförvaring"
infobox:
  typ: "Settlementbyggnad"
  nivåkrav: "Settlementnivå 22"
  kostnad: "2 000 000 Coins"
  storlek: "25×25"
---

## Vad är Myntförvaring?

**Myntförvaring** är en fysisk settlementbyggnad. Att köpa licensen aktiverar inte bonusen direkt. Settlementet måste först placera byggytan, bygga byggnaden och få den godkänd.

## Bonus

- Sänker stadskassans transaktionsavgift från 7,5 % till 2,5 %.

> [!NOTE]
> Den lägre avgiften gäller stadskassans insättningar och utbetalningar så länge byggnaden är aktiv.

## Krav

- Settlementnivå: **22 eller högre**
- Licens: **2 000 000 Coins**
- Fysisk storlek: **25×25**
- Väggar: **minst 70 % täckning**
- Tak: **minst 75 % täckning**
- Hela byggnaden måste ligga inom settlementets territorium

### Specialkrav

<BuildingRequirementsTable building="myntforvaring" />

Det finns inga krav på vilket byggmaterial väggar, golv eller tak består av. Settlementet får bygga i valfri stil.

## Byggprocess

Efter att licensen köpts placeras byggytan i världen:

```text
/building place myntforvaring
```

Kontrollera bygget när det börjar bli färdigt:

```text
/building status
```

När alla krav är uppfyllda:

```text
/building complete
```

Bonusen aktiveras först efter en godkänd slutkontroll.

## Om byggnaden skadas

En färdig byggnad måste fortsätta uppfylla kraven. Om den skadas pausas bonusen tills byggnaden reparerats och validerats på nytt:

```text
/building revalidate myntforvaring
```

Licensen behöver inte köpas igen.

## Flytta byggnaden

```text
/building relocate myntforvaring
/building relocate myntforvaring confirm
```

Bonusen pausas under flytten. Flytten kan avbrytas med:

```text
/building relocate cancel myntforvaring
```
