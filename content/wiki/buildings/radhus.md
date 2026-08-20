---
title: "Rådhus"
description: "Nivåkrav, licenskostnad, byggkrav och funktion för Rådhus."
category: "Byggnader"
order: 25
version: "4.0"
engineVersion: "Building System 1.0"
updatedAt: "2026-08-20"
infoboxTitle: "Rådhus"
infobox:
  typ: "Settlementbyggnad"
  nivåkrav: "Settlementnivå 25"
  kostnad: "2 500 000 Coins"
  storlek: "27×27"
---

## Vad är Rådhus?

**Rådhus** är en fysisk settlementbyggnad. Att köpa licensen aktiverar inte bonusen direkt. Settlementet måste först placera byggytan, bygga byggnaden och få den godkänd.

## Bonus

- Låser upp två extra Lord-platser, från 2 till totalt 4 Lords.

## Krav

- Settlementnivå: **25 eller högre**
- Licens: **2 500 000 Coins**
- Fysisk storlek: **27×27**
- Minsta höjd: **16 block**
- Väggar: **minst 70 % täckning**
- Tak: **minst 75 % täckning**
- Hela byggnaden måste ligga inom settlementets territorium

### Specialkrav

<BuildingRequirementsTable building="radhus" />

Det finns inga krav på vilket byggmaterial väggar, golv eller tak består av. Settlementet får bygga i valfri stil.

## Byggprocess

Efter att licensen köpts placeras byggytan i världen:

```text
/building place radhus
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
/building revalidate radhus
```

Licensen behöver inte köpas igen.

## Flytta byggnaden

```text
/building relocate radhus
/building relocate radhus confirm
```

Bonusen pausas under flytten. Flytten kan avbrytas med:

```text
/building relocate cancel radhus
```
