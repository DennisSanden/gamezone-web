---
title: "Kontor"
description: "Nivåkrav, licenskostnad, byggkrav och funktion för Kontor."
category: "Byggnader"
order: 16
version: "4.0"
engineVersion: "Building System 1.0"
updatedAt: "2026-08-20"
infoboxTitle: "Kontor"
infobox:
  typ: "Settlementbyggnad"
  nivåkrav: "Settlementnivå 16"
  kostnad: "750 000 Coins"
  storlek: "19×19"
---

## Vad är Kontor?

**Kontor** är en fysisk settlementbyggnad. Att köpa licensen aktiverar inte bonusen direkt. Settlementet måste först placera byggytan, bygga byggnaden och få den godkänd.

![Kontor](/wiki/buildings/kontor.png)

## Bonus

- Varje företag i settlementet får 3 extra Shopping Chests.

> [!NOTE]
> De tre extra kistorna läggs ovanpå företagets vanliga licensgräns och andra aktiva bonusar.

## Krav

- Settlementnivå: **16 eller högre**
- Licens: **750 000 Coins**
- Fysisk storlek: **19×19**
- Väggar: **minst 70 % täckning**
- Tak: **minst 75 % täckning**
- Hela byggnaden måste ligga inom settlementets territorium

### Specialkrav

<BuildingRequirementsTable building="kontor" />

Det finns inga krav på vilket byggmaterial väggar, golv eller tak består av. Settlementet får bygga i valfri stil.

## Byggprocess

Efter att licensen köpts placeras byggytan i världen:

```text
/building place kontor
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
/building revalidate kontor
```

Licensen behöver inte köpas igen.

## Flytta byggnaden

```text
/building relocate kontor
/building relocate kontor confirm
```

Bonusen pausas under flytten. Flytten kan avbrytas med:

```text
/building relocate cancel kontor
```
