---
title: "Handelscentrum"
description: "Nivåkrav, licenskostnad, byggkrav och funktion för Handelscentrum."
category: "Byggnader"
order: 4
version: "4.0"
engineVersion: "Building System 1.0"
updatedAt: "2026-08-20"
infoboxTitle: "Handelscentrum"
infobox:
  typ: "Settlementbyggnad"
  nivåkrav: "Settlementnivå 4"
  kostnad: "20 000 Coins"
  storlek: "15×15"
---

## Vad är Handelscentrum?

**Handelscentrum** är en fysisk settlementbyggnad. Att köpa licensen aktiverar inte bonusen direkt. Settlementet måste först placera byggytan, bygga byggnaden och få den godkänd.

![Handelscentrum](/wiki/buildings/handelscentrum.png)

## Bonus

- Låser upp företag, företagslicenser och företagshandel för settlementets invånare.

## Krav

- Settlementnivå: **4 eller högre**
- Licens: **20 000 Coins**
- Fysisk storlek: **15×15**
- Väggar: **minst 70 % täckning**
- Tak: **minst 75 % täckning**
- Hela byggnaden måste ligga inom settlementets territorium

### Specialkrav

<BuildingRequirementsTable building="handelscentrum" />

Det finns inga krav på vilket byggmaterial väggar, golv eller tak består av. Settlementet får bygga i valfri stil.

## Byggprocess

Efter att licensen köpts placeras byggytan i världen:

```text
/building place handelscentrum
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
/building revalidate handelscentrum
```

Licensen behöver inte köpas igen.

## Flytta byggnaden

```text
/building relocate handelscentrum
/building relocate handelscentrum confirm
```

Bonusen pausas under flytten. Flytten kan avbrytas med:

```text
/building relocate cancel handelscentrum
```
