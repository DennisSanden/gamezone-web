---
title: "Ladugård"
description: "Nivåkrav, licenskostnad, byggkrav och funktion för Ladugård."
category: "Byggnader"
order: 3
version: "4.0"
engineVersion: "Building System 1.0"
updatedAt: "2026-08-26"
infoboxTitle: "Ladugård"
infobox:
  typ: "Settlementbyggnad"
  nivåkrav: "Settlementnivå 2"
  kostnad: "10 000 Coins"
  storlek: "11×11"
---

## Vad är Ladugård?

**Ladugård** är en fysisk settlementbyggnad. Att köpa licensen aktiverar inte bonusen direkt. Settlementet måste först placera byggytan, bygga byggnaden och få den godkänd.

![Ladugård](/wiki/buildings/ladugard.png)

## Bonus

- Ger +5 % produktionsbonus inom settlementets valda kategori, **Boskap**.

> [!IMPORTANT]
> Den här byggnadens **+5 % bonus** gäller bara kategorin **Boskap**. Settlementet kan tjäna vanliga Coins i sin aktiva kategori även utan byggnaden. Vid kategoribyte ligger byggnaden kvar och bonusen blir aktiv igen om settlementet senare återgår till **Boskap**.

## Krav

- Settlementnivå: **2 eller högre**
- Licens: **10 000 Coins**
- Fysisk storlek: **11×11**
- Väggar: **minst 70 % täckning**
- Tak: **minst 75 % täckning**
- Hela byggnaden måste ligga inom settlementets territorium

### Specialkrav

<BuildingRequirementsTable building="ladugard" />

Det finns inga krav på vilket byggmaterial väggar, golv eller tak består av. Settlementet får bygga i valfri stil.

## Byggprocess

Efter att licensen köpts placeras byggytan i världen:

```text
/building place ladugard
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
/building revalidate ladugard
```

Licensen behöver inte köpas igen.

## Flytta byggnaden

```text
/building relocate ladugard
/building relocate ladugard confirm
```

Bonusen pausas under flytten. Flytten kan avbrytas med:

```text
/building relocate cancel ladugard
```
