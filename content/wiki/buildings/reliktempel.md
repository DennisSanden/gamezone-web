---
title: "Reliktempel"
description: "Nivåkrav, licenskostnad, byggkrav och funktion för Reliktempel."
category: "Byggnader"
order: 7
version: "4.0"
engineVersion: "Building System 1.0"
updatedAt: "2026-08-20"
infoboxTitle: "Reliktempel"
infobox:
  typ: "Settlementbyggnad"
  nivåkrav: "Settlementnivå 7"
  kostnad: "50 000 Coins"
  storlek: "9×9"
---

## Vad är Reliktempel?

**Reliktempel** är en fysisk settlementbyggnad. Att köpa licensen aktiverar inte bonusen direkt. Settlementet måste först placera byggytan, bygga byggnaden och få den godkänd.

## Bonus

- Låser upp settlementets relikbonusar för reliker som förvaras i settlementets inventory chests.

> [!NOTE]
> Reliktemplet är gaten för relikbonusarna. Själva bonusen bestäms av reliken som förvaras i settlementet.

## Krav

- Settlementnivå: **7 eller högre**
- Licens: **50 000 Coins**
- Fysisk storlek: **9×9**
- Väggar: **minst 70 % täckning**
- Tak: **minst 75 % täckning**
- Hela byggnaden måste ligga inom settlementets territorium

### Specialkrav

<BuildingRequirementsTable building="reliktempel" />

Det finns inga krav på vilket byggmaterial väggar, golv eller tak består av. Settlementet får bygga i valfri stil.

## Byggprocess

Efter att licensen köpts placeras byggytan i världen:

```text
/building place reliktempel
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
/building revalidate reliktempel
```

Licensen behöver inte köpas igen.

## Flytta byggnaden

```text
/building relocate reliktempel
/building relocate reliktempel confirm
```

Bonusen pausas under flytten. Flytten kan avbrytas med:

```text
/building relocate cancel reliktempel
```
