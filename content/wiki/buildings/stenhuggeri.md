---
title: "Stenhuggeri"
description: "Nivåkrav, licenskostnad, byggkrav och funktion för Stenhuggeri."
category: "Byggnader"
order: 3
version: "4.0"
engineVersion: "Building System 1.0"
updatedAt: "2026-08-26"
infoboxTitle: "Stenhuggeri"
infobox:
  typ: "Settlementbyggnad"
  nivåkrav: "Settlementnivå 2"
  kostnad: "10 000 Coins"
  storlek: "11×11"
---

## Vad är Stenhuggeri?

**Stenhuggeri** är en fysisk settlementbyggnad. Att köpa licensen aktiverar inte bonusen direkt. Settlementet måste först placera byggytan, bygga byggnaden och få den godkänd.

![Stenhuggeri](/wiki/buildings/stenhuggeri.png)

## Bonus

- Ger +5 % produktionsbonus inom settlementets valda kategori, **Byggmaterial**.

> [!IMPORTANT]
> Den här byggnadens **+5 % bonus** gäller bara kategorin **Byggmaterial**. Settlementet kan tjäna vanliga Coins i sin aktiva kategori även utan byggnaden. Vid kategoribyte ligger byggnaden kvar och bonusen blir aktiv igen om settlementet senare återgår till **Byggmaterial**.

## Krav

- Settlementnivå: **2 eller högre**
- Licens: **10 000 Coins**
- Fysisk storlek: **11×11**
- Väggar: **minst 40 % täckning**
- Tak: **minst 75 % täckning**
- Hela byggnaden måste ligga inom settlementets territorium

### Specialkrav

<BuildingRequirementsTable building="stenhuggeri" />

Det finns inga krav på vilket byggmaterial väggar, golv eller tak består av. Settlementet får bygga i valfri stil.

## Köpa licensen

Bygglicensen köps i `/gz menu` → **Settlements** → **Byggnader**. Menyn visar om settlementet uppfyller nivåkravet och vilka licenser som går att köpa.

## Byggprocess

Efter att licensen köpts placeras byggytan i världen:

```text
/building place stenhuggeri
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
/building revalidate stenhuggeri
```

Licensen behöver inte köpas igen.

## Flytta byggnaden

```text
/building relocate stenhuggeri
/building relocate stenhuggeri confirm
```

Bonusen pausas under flytten. Flytten kan avbrytas med:

```text
/building relocate cancel stenhuggeri
```
