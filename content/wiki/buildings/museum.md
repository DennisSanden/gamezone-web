---
title: "Museum"
description: "Nivåkrav, licenskostnad, byggkrav och funktion för Museum."
category: "Byggnader"
order: 35
version: "4.0"
engineVersion: "Building System 1.0"
updatedAt: "2026-08-20"
infoboxTitle: "Museum"
infobox:
  typ: "Settlementbyggnad"
  nivåkrav: "Settlementnivå 35"
  kostnad: "8 000 000 Coins"
  storlek: "31×31"
---

## Vad är Museum?

**Museum** är en fysisk settlementbyggnad. Att köpa licensen aktiverar inte bonusen direkt. Settlementet måste först placera byggytan, bygga byggnaden och få den godkänd.

![Museum](/wiki/buildings/museum.png)

## Bonus

- Höjer settlementets belöning för ett nytt unikt turistbesök från 10 000 till 100 000 Coins.

> [!NOTE]
> Besökaren får fortfarande sin vanliga turistbonus. Museum förstärker settlementets del av belöningen.

## Krav

- Settlementnivå: **35 eller högre**
- Licens: **8 000 000 Coins**
- Fysisk storlek: **31×31**
- Väggar: **minst 70 % täckning**
- Tak: **minst 75 % täckning**
- Hela byggnaden måste ligga inom settlementets territorium

### Specialkrav

<BuildingRequirementsTable building="museum" />

Det finns inga krav på vilket byggmaterial väggar, golv eller tak består av. Settlementet får bygga i valfri stil.

## Byggprocess

Efter att licensen köpts placeras byggytan i världen:

```text
/building place museum
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
/building revalidate museum
```

Licensen behöver inte köpas igen.

## Flytta byggnaden

```text
/building relocate museum
/building relocate museum confirm
```

Bonusen pausas under flytten. Flytten kan avbrytas med:

```text
/building relocate cancel museum
```
