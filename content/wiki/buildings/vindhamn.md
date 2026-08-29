---
title: "Vindhamn"
description: "Nivåkrav, licenskostnad, byggkrav och funktion för Vindhamn."
category: "Byggnader"
order: 8
version: "4.0"
engineVersion: "Building System 1.0"
updatedAt: "2026-08-20"
infoboxTitle: "Vindhamn"
infobox:
  typ: "Settlementbyggnad"
  nivåkrav: "Settlementnivå 8"
  kostnad: "100 000 Coins"
  storlek: "21×21"
---

## Vad är Vindhamn?

**Vindhamn** är en fysisk settlementbyggnad. Att köpa licensen aktiverar inte bonusen direkt. Settlementet måste först placera byggytan, bygga byggnaden och få den godkänd.

![Vindhamn](/wiki/buildings/vindhamn.png)

## Bonus

- Låser upp Elytra för settlementets medlemmar.

## Krav

- Settlementnivå: **8 eller högre**
- Licens: **100 000 Coins**
- Fysisk storlek: **21×21**
- Minsta höjd: **18 block**
- Väggar: **minst 70 % täckning**
- Tak: **minst 75 % täckning**
- Hela byggnaden måste ligga inom settlementets territorium

### Specialkrav

<BuildingRequirementsTable building="vindhamn" />

Det finns inga krav på vilket byggmaterial väggar, golv eller tak består av. Settlementet får bygga i valfri stil.

## Köpa licensen

Bygglicensen köps i `/gz menu` → **Settlements** → **Byggnader**. Menyn visar om settlementet uppfyller nivåkravet och vilka licenser som går att köpa.

## Byggprocess

Efter att licensen köpts placeras byggytan i världen:

```text
/building place vindhamn
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
/building revalidate vindhamn
```

Licensen behöver inte köpas igen.

## Flytta byggnaden

```text
/building relocate vindhamn
/building relocate vindhamn confirm
```

Bonusen pausas under flytten. Flytten kan avbrytas med:

```text
/building relocate cancel vindhamn
```
