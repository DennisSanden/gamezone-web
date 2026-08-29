---
title: "Slott"
description: "Nivåkrav, licenskostnad, byggkrav och funktion för Slott."
category: "Byggnader"
order: 30
version: "4.0"
engineVersion: "Building System 1.0"
updatedAt: "2026-08-20"
infoboxTitle: "Slott"
infobox:
  typ: "Settlementbyggnad"
  nivåkrav: "Settlementnivå 30"
  kostnad: "5 000 000 Coins"
  storlek: "35×35"
---

## Vad är Slott?

**Slott** är en fysisk settlementbyggnad. Att köpa licensen aktiverar inte bonusen direkt. Settlementet måste först placera byggytan, bygga byggnaden och få den godkänd.

![Slott](/wiki/buildings/slott.png)

## Bonus

- Sänker Kingens ticketvärde i krig med 4, från 10 till 6 tickets.

## Krav

- Settlementnivå: **30 eller högre**
- Licens: **5 000 000 Coins**
- Fysisk storlek: **35×35**
- Minsta höjd: **20 block**
- Väggar: **minst 70 % täckning**
- Tak: **minst 75 % täckning**
- Hela byggnaden måste ligga inom settlementets territorium

### Specialkrav

<BuildingRequirementsTable building="slott" />

Det finns inga krav på vilket byggmaterial väggar, golv eller tak består av. Settlementet får bygga i valfri stil.

## Köpa licensen

Bygglicensen köps i `/gz menu` → **Settlements** → **Byggnader**. Menyn visar om settlementet uppfyller nivåkravet och vilka licenser som går att köpa.

## Byggprocess

Efter att licensen köpts placeras byggytan i världen:

```text
/building place slott
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
/building revalidate slott
```

Licensen behöver inte köpas igen.

## Flytta byggnaden

```text
/building relocate slott
/building relocate slott confirm
```

Bonusen pausas under flytten. Flytten kan avbrytas med:

```text
/building relocate cancel slott
```
