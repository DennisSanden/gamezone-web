---
title: "Rådhus"
description: "Nivåkrav, licenskostnad, byggkrav och funktion för Rådhus."
category: "Byggnader"
order: 25
version: "5.0"
engineVersion: "Building System 1.0"
updatedAt: "2026-09-14"
infoboxTitle: "Rådhus"
infobox:
  typ: "Settlementbyggnad"
  nivåkrav: "Settlementnivå 25"
  kostnad: "2 500 000 Coins"
  referensyta: "27×27"
---

## Vad är Rådhus?

**Rådhus** är en fysisk settlementbyggnad. Att köpa licensen aktiverar inte bonusen direkt. Settlementet måste först placera byggytan, bygga byggnaden och få den godkänd.

![Rådhus](/wiki/buildings/radhus.png)

## Bonus

- Låser upp två extra Lord-platser, från 2 till totalt 4 Lords.

## Krav

- Settlementnivå: **25 eller högre**
- Licens: **2 500 000 Coins**
- Referensyta: **27×27**. Måttet är inte låst, spelaren markerar byggnadsytan själv.
- Minsta höjd: **16 block**
- Väggar: **minst 40 % täckning**
- Tak: **minst 75 % täckning**
- Hela byggnaden måste ligga inom settlementets territorium

### Specialkrav

<BuildingRequirementsTable building="radhus" />

Det finns inga krav på vilket byggmaterial väggar, golv eller tak består av. Settlementet får bygga i valfri stil.

## Köpa licensen

Bygglicensen köps i `/gz menu` → **Settlements** → **Byggnader**. Menyn visar om settlementet uppfyller nivåkravet och vilka licenser som går att köpa.

## Byggprocess

Efter att licensen köpts placeras byggytan i världen:

```text
/building place radhus
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
/building revalidate radhus
```

Licensen behöver inte köpas igen.

## Flytta byggnaden

```text
/building relocate radhus
/building relocate radhus confirm
```

Bonusen pausas under flytten. Flytten kan avbrytas med:

```text
/building relocate cancel radhus
```
