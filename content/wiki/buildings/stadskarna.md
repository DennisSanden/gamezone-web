---
title: "Stadskärna"
description: "Nivåkrav, licenskostnad, byggkrav och funktion för Stadskärna."
category: "Byggnader"
order: 2
version: "4.0"
engineVersion: "Building System 1.0"
updatedAt: "2026-08-20"
infoboxTitle: "Stadskärna"
infobox:
  typ: "Settlementbyggnad"
  nivåkrav: "Settlementnivå 2"
  kostnad: "5 000 Coins"
  storlek: "11×11"
---

## Vad är Stadskärna?

**Stadskärna** är en fysisk settlementbyggnad. Att köpa licensen aktiverar inte bonusen direkt. Settlementet måste först placera byggytan, bygga byggnaden och få den godkänd.

![Stadskärna](/wiki/buildings/stadskarna.png)

## Bonus

- Låser upp settlementets fortsatta byggsystem.

## Krav

- Settlementnivå: **2 eller högre**
- Licens: **5 000 Coins**
- Fysisk storlek: **11×11**
- Väggar: **minst 40 % täckning**
- Tak: **minst 75 % täckning**
- Hela byggnaden måste ligga inom settlementets territorium

### Specialkrav

<BuildingRequirementsTable building="stadskarna" />

Det finns inga krav på vilket byggmaterial väggar, golv eller tak består av. Settlementet får bygga i valfri stil.

## Köpa licensen

Bygglicensen köps i `/gz menu` → **Settlements** → **Byggnader**. Menyn visar om settlementet uppfyller nivåkravet och vilka licenser som går att köpa.

## Byggprocess

Efter att licensen köpts placeras byggytan i världen:

```text
/building place stadskarna
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
/building revalidate stadskarna
```

Licensen behöver inte köpas igen.

## Flytta byggnaden

```text
/building relocate stadskarna
/building relocate stadskarna confirm
```

Bonusen pausas under flytten. Flytten kan avbrytas med:

```text
/building relocate cancel stadskarna
```
