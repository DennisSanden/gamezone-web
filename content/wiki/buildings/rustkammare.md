---
title: "Rustkammare"
description: "Nivåkrav, licenskostnad, byggkrav och funktion för Rustkammare."
category: "Byggnader"
order: 40
version: "4.0"
engineVersion: "Building System 1.0"
updatedAt: "2026-08-20"
infoboxTitle: "Rustkammare"
infobox:
  typ: "Settlementbyggnad"
  nivåkrav: "Settlementnivå 40"
  kostnad: "12 500 000 Coins"
  storlek: "35×35"
---

## Vad är Rustkammare?

**Rustkammare** är en fysisk settlementbyggnad. Att köpa licensen aktiverar inte bonusen direkt. Settlementet måste först placera byggytan, bygga byggnaden och få den godkänd.

![Rustkammare](/wiki/buildings/rustkammare.png)

## Bonus

- Höjer settlementets grundtickets i krig från 100 till 110.

## Krav

- Settlementnivå: **40 eller högre**
- Licens: **12 500 000 Coins**
- Fysisk storlek: **35×35**
- Väggar: **minst 70 % täckning**
- Tak: **minst 75 % täckning**
- Hela byggnaden måste ligga inom settlementets territorium

### Specialkrav

<BuildingRequirementsTable building="rustkammare" />

Det finns inga krav på vilket byggmaterial väggar, golv eller tak består av. Settlementet får bygga i valfri stil.

## Köpa licensen

Bygglicensen köps i `/gz menu` → **Settlements** → **Byggnader**. Menyn visar om settlementet uppfyller nivåkravet och vilka licenser som går att köpa.

## Byggprocess

Efter att licensen köpts placeras byggytan i världen:

```text
/building place rustkammare
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
/building revalidate rustkammare
```

Licensen behöver inte köpas igen.

## Flytta byggnaden

```text
/building relocate rustkammare
/building relocate rustkammare confirm
```

Bonusen pausas under flytten. Flytten kan avbrytas med:

```text
/building relocate cancel rustkammare
```
