---
title: "Laboratorium"
description: "Nivåkrav, licenskostnad, byggkrav och funktion för Laboratorium."
category: "Byggnader"
order: 5
version: "4.0"
engineVersion: "Building System 1.0"
updatedAt: "2026-08-26"
infoboxTitle: "Laboratorium"
infobox:
  typ: "Settlementbyggnad"
  nivåkrav: "Settlementnivå 5"
  kostnad: "35 000 Coins"
  storlek: "17×17"
---

## Vad är Laboratorium?

**Laboratorium** är en fysisk settlementbyggnad. Att köpa licensen aktiverar inte bonusen direkt. Settlementet måste först placera byggytan, bygga byggnaden och få den godkänd.

![Laboratorium](/wiki/buildings/laboratorium.png)

## Funktion

- Gäller **endast settlements med kategorin Alkemi**.
- Ett aktivt Laboratorium ger dessutom **+5 % produktionsbonus från Alkemi**.

> [!IMPORTANT]
> Laboratorium är inte ett krav för att få Coins och blockerar inte settlementets progression. Det är en **Alkemi-specifik bonusbyggnad**. Byter settlementet bort från Alkemi ligger byggnaden kvar men bonusen är inaktiv. Byter settlementet tillbaka aktiveras bonusen igen.

## Krav

- Settlementnivå: **5 eller högre**
- Aktiv settlementkategori: **Alkemi**
- Licens: **35 000 Coins**
- Fysisk storlek: **17×17**
- Väggar: **minst 70 % täckning**
- Tak: **minst 75 % täckning**
- Hela byggnaden måste ligga inom settlementets territorium

### Specialkrav

<BuildingRequirementsTable building="laboratorium" />

Det finns inga krav på vilket byggmaterial väggar, golv eller tak består av. Settlementet får bygga i valfri stil.

## Byggprocess

Efter att licensen köpts placeras byggytan i världen:

```text
/building place laboratorium
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
/building revalidate laboratorium
```

Licensen behöver inte köpas igen.

## Flytta byggnaden

```text
/building relocate laboratorium
/building relocate laboratorium confirm
```

Bonusen pausas under flytten. Flytten kan avbrytas med:

```text
/building relocate cancel laboratorium
```
