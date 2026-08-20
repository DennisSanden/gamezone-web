---
title: "Marknadsplats"
description: "Nivåkrav, licenskostnad, byggkrav och funktion för Marknadsplats."
category: "Byggnader"
order: 20
version: "4.0"
engineVersion: "Building System 1.0"
updatedAt: "2026-08-20"
infoboxTitle: "Marknadsplats"
infobox:
  typ: "Settlementbyggnad"
  nivåkrav: "Settlementnivå 20"
  kostnad: "1 500 000 Coins"
  storlek: "25×25"
---

## Vad är Marknadsplats?

**Marknadsplats** är en fysisk settlementbyggnad. Att köpa licensen aktiverar inte bonusen direkt. Settlementet måste först placera byggytan, bygga byggnaden och få den godkänd.

![Marknadsplats](/wiki/buildings/marknadsplats.png)

## Bonus

- Sänker Server TAX med 10 procentenheter för företag i settlementet.

> [!NOTE]
> Reduktionen kombineras med företagslicensen och aktiva policies. Server TAX kan aldrig bli lägre än 0 %.

## Krav

- Settlementnivå: **20 eller högre**
- Licens: **1 500 000 Coins**
- Fysisk storlek: **25×25**
- Väggar: **minst 70 % täckning**
- Tak: **minst 75 % täckning**
- Hela byggnaden måste ligga inom settlementets territorium

### Specialkrav

<BuildingRequirementsTable building="marknadsplats" />

Det finns inga krav på vilket byggmaterial väggar, golv eller tak består av. Settlementet får bygga i valfri stil.

## Byggprocess

Efter att licensen köpts placeras byggytan i världen:

```text
/building place marknadsplats
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
/building revalidate marknadsplats
```

Licensen behöver inte köpas igen.

## Flytta byggnaden

```text
/building relocate marknadsplats
/building relocate marknadsplats confirm
```

Bonusen pausas under flytten. Flytten kan avbrytas med:

```text
/building relocate cancel marknadsplats
```
