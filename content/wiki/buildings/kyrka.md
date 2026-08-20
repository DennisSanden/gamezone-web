---
title: "Kyrka"
description: "Nivåkrav, licenskostnad, byggkrav och funktion för Kyrka."
category: "Byggnader"
order: 18
version: "4.0"
engineVersion: "Building System 1.0"
updatedAt: "2026-08-20"
infoboxTitle: "Kyrka"
infobox:
  typ: "Settlementbyggnad"
  nivåkrav: "Settlementnivå 18"
  kostnad: "1 000 000 Coins"
  storlek: "21×15"
---

## Vad är Kyrka?

**Kyrka** är en fysisk settlementbyggnad. Att köpa licensen aktiverar inte bonusen direkt. Settlementet måste först placera byggytan, bygga byggnaden och få den godkänd.

![Kyrka](/wiki/buildings/kyrka.png)

## Bonus

- Ger +20 % produktionsbonus.

## Krav

- Settlementnivå: **18 eller högre**
- Licens: **1 000 000 Coins**
- Fysisk storlek: **21×15**
- Minsta höjd: **15 block**
- Väggar: **minst 70 % täckning**
- Tak: **minst 75 % täckning**
- Hela byggnaden måste ligga inom settlementets territorium

### Specialkrav

<BuildingRequirementsTable building="kyrka" />

Det finns inga krav på vilket byggmaterial väggar, golv eller tak består av. Settlementet får bygga i valfri stil.

## Byggprocess

Efter att licensen köpts placeras byggytan i världen:

```text
/building place kyrka
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
/building revalidate kyrka
```

Licensen behöver inte köpas igen.

## Flytta byggnaden

```text
/building relocate kyrka
/building relocate kyrka confirm
```

Bonusen pausas under flytten. Flytten kan avbrytas med:

```text
/building relocate cancel kyrka
```
