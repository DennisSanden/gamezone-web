---
title: "Myntverk"
description: "Nivåkrav, licenskostnad, byggkrav och funktion för Myntverk."
category: "Byggnader"
order: 45
version: "4.0"
engineVersion: "Building System 1.0"
updatedAt: "2026-08-20"
infoboxTitle: "Myntverk"
infobox:
  typ: "Settlementbyggnad"
  nivåkrav: "Settlementnivå 45"
  kostnad: "20 000 000 Coins"
  storlek: "39×39"
---

## Vad är Myntverk?

**Myntverk** är en fysisk settlementbyggnad. Att köpa licensen aktiverar inte bonusen direkt. Settlementet måste först placera byggytan, bygga byggnaden och få den godkänd.

![Myntverk](/wiki/buildings/myntverk.png)

## Bonus

- Betalar 50 000 Coins per dag direkt till settlementets stadskassa.

> [!NOTE]
> Utbetalningen sparas per datum så att en serverrestart inte kan ge flera dagsutbetalningar.

## Krav

- Settlementnivå: **45 eller högre**
- Licens: **20 000 000 Coins**
- Fysisk storlek: **39×39**
- Väggar: **minst 70 % täckning**
- Tak: **minst 75 % täckning**
- Hela byggnaden måste ligga inom settlementets territorium

### Specialkrav

<BuildingRequirementsTable building="myntverk" />

Det finns inga krav på vilket byggmaterial väggar, golv eller tak består av. Settlementet får bygga i valfri stil.

## Byggprocess

Efter att licensen köpts placeras byggytan i världen:

```text
/building place myntverk
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
/building revalidate myntverk
```

Licensen behöver inte köpas igen.

## Flytta byggnaden

```text
/building relocate myntverk
/building relocate myntverk confirm
```

Bonusen pausas under flytten. Flytten kan avbrytas med:

```text
/building relocate cancel myntverk
```
