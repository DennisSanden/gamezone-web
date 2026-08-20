---
title: "Gatukontor"
description: "Nivåkrav, licenskostnad, byggkrav och funktion för Gatukontor."
category: "Byggnader"
order: 10
version: "4.0"
engineVersion: "Building System 1.0"
updatedAt: "2026-08-20"
infoboxTitle: "Gatukontor"
infobox:
  typ: "Settlementbyggnad"
  nivåkrav: "Settlementnivå 10"
  kostnad: "200 000 Coins"
  storlek: "15×15"
---

## Vad är Gatukontor?

**Gatukontor** är en fysisk settlementbyggnad. Att köpa licensen aktiverar inte bonusen direkt. Settlementet måste först placera byggytan, bygga byggnaden och få den godkänd.

![Gatukontor](/wiki/buildings/gatukontor.png)

## Bonus

- Låser upp settlementets riksvägsanslutning.
- Ger settlementet 1 000 000 Coins när det för första gången ansluts till det officiella riksvägsnätet.

> [!NOTE]
> Anslutningsbelöningen betalas bara ut en gång per settlement.

## Krav

- Settlementnivå: **10 eller högre**
- Licens: **200 000 Coins**
- Fysisk storlek: **15×15**
- Väggar: **minst 70 % täckning**
- Tak: **minst 75 % täckning**
- Hela byggnaden måste ligga inom settlementets territorium

### Specialkrav

<BuildingRequirementsTable building="gatukontor" />

Det finns inga krav på vilket byggmaterial väggar, golv eller tak består av. Settlementet får bygga i valfri stil.

## Byggprocess

Efter att licensen köpts placeras byggytan i världen:

```text
/building place gatukontor
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
/building revalidate gatukontor
```

Licensen behöver inte köpas igen.

## Flytta byggnaden

```text
/building relocate gatukontor
/building relocate gatukontor confirm
```

Bonusen pausas under flytten. Flytten kan avbrytas med:

```text
/building relocate cancel gatukontor
```
