---
title: "Museum"
description: "Nivåkrav, licenskostnad, byggkrav och funktion för Museum."
category: "Byggnader"
order: 35
version: "5.0"
engineVersion: "Building System 1.0"
updatedAt: "2026-09-16"
infoboxTitle: "Museum"
infobox:
  typ: "Settlementbyggnad"
  nivåkrav: "Settlementnivå 35"
  kostnad: "8 000 000 Coins"
  referensyta: "31×31"
---

## Vad är Museum?

**Museum** är en fysisk settlementbyggnad. Att köpa licensen aktiverar inte bonusen direkt. Settlementet måste först placera byggytan, bygga byggnaden och få den godkänd.

![Museum](/wiki/buildings/museum.png)

## Bonus

- Höjer settlementets belöning för ett nytt unikt turistbesök från **100 000 till 1 000 000 Coins**.
- Med policyn **Open Borders** höjs Museum-belöningen till **1 050 000 Coins**.

> [!NOTE]
> Besökaren får fortfarande sin vanliga turistbonus. Museum förstärker settlementets del av belöningen.

## Krav

- Settlementnivå: **35 eller högre**
- Licens: **8 000 000 Coins**
- Referensyta: **31×31**. Måttet är inte låst, spelaren markerar byggnadsytan själv.
- Väggar: **minst 40 % täckning**
- Tak: **minst 40 % täckning**
- Hela byggnaden måste ligga inom settlementets territorium

### Specialkrav

<BuildingRequirementsTable building="museum" />

Det finns inga krav på vilket byggmaterial väggar, golv eller tak består av. Settlementet får bygga i valfri stil.

## Köpa licensen

Bygglicensen köps i `/gz menu` → **Settlements** → **Byggnader**. Menyn visar om settlementet uppfyller nivåkravet och vilka licenser som går att köpa.

## Byggprocess

Efter att licensen köpts placeras byggytan i världen:

```text
/building place museum
```

Markera därefter byggnaden med två hörn. **Vänsterklicka** på golvblocket i första hörnet och **högerklicka** på golvblocket i motsatta hörnet. Partiklar visar den yta som kommer att registreras.

Bekräfta området med:

```text
/building confirm
```

Den gamla referensytan är bara utgångspunkt för storleksgränserna. Den markerade ytan måste vara minst **60 % av referensytan**, högst **4 gånger referensytan** och minst **7 block bred och 7 block djup**. Kravblock och entities får placeras var som helst inom den registrerade ytan. Hela ytan måste ligga inom settlementet och får inte överlappa en annan registrerad byggnad.

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
/building revalidate museum
```

Licensen behöver inte köpas igen.

## Flytta byggnaden

```text
/building relocate museum
/building relocate museum confirm
```

Bonusen pausas under flytten. Flytten kan avbrytas med:

```text
/building relocate cancel museum
```
