---
title: "Marknadsplats"
description: "Nivåkrav, licenskostnad, byggkrav och funktion för Marknadsplats."
category: "Byggnader"
order: 20
version: "5.0"
engineVersion: "Building System 1.0"
updatedAt: "2026-09-14"
infoboxTitle: "Marknadsplats"
infobox:
  typ: "Settlementbyggnad"
  nivåkrav: "Settlementnivå 20"
  kostnad: "1 500 000 Coins"
  referensyta: "25×25"
---

## Vad är Marknadsplats?

**Marknadsplats** är en fysisk settlementbyggnad. Att köpa licensen aktiverar inte bonusen direkt. Settlementet måste först placera byggytan, bygga byggnaden och få den godkänd.

![Marknadsplats](/wiki/buildings/marknadsplats.png)

## Bonus

- Sänker Server TAX med 10 procentenheter för företag i settlementet.

> [!NOTE]
> Reduktionen kombineras med företagslicensen och aktiva policies. Server TAX kan aldrig bli lägre än 0 %.

## Krav

- Settlementnivå: **20 eller högre**
- Licens: **1 500 000 Coins**
- Referensyta: **25×25**. Måttet är inte låst, spelaren markerar byggnadsytan själv.
- Väggar: **minst 40 % täckning**
- Tak: **minst 75 % täckning**
- Hela byggnaden måste ligga inom settlementets territorium

### Specialkrav

<BuildingRequirementsTable building="marknadsplats" />

Det finns inga krav på vilket byggmaterial väggar, golv eller tak består av. Settlementet får bygga i valfri stil.

## Köpa licensen

Bygglicensen köps i `/gz menu` → **Settlements** → **Byggnader**. Menyn visar om settlementet uppfyller nivåkravet och vilka licenser som går att köpa.

## Byggprocess

Efter att licensen köpts placeras byggytan i världen:

```text
/building place marknadsplats
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
/building revalidate marknadsplats
```

Licensen behöver inte köpas igen.

## Flytta byggnaden

```text
/building relocate marknadsplats
/building relocate marknadsplats confirm
```

Bonusen pausas under flytten. Flytten kan avbrytas med:

```text
/building relocate cancel marknadsplats
```
