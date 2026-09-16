---
title: "Turistbyrå"
description: "Nivåkrav, licenskostnad, byggkrav och funktion för Turistbyrå."
category: "Byggnader"
order: 12
version: "5.0"
engineVersion: "Building System 1.0"
updatedAt: "2026-09-16"
infoboxTitle: "Turistbyrå"
infobox:
  typ: "Settlementbyggnad"
  nivåkrav: "Settlementnivå 12"
  kostnad: "350 000 Coins"
  referensyta: "17×17"
---

## Vad är Turistbyrå?

**Turistbyrå** är en fysisk settlementbyggnad. Att köpa licensen aktiverar inte bonusen direkt. Settlementet måste först placera byggytan, bygga byggnaden och få den godkänd.

![Turistbyrå](/wiki/buildings/turistbyra.png)

## Bonus

- Första besöket i en ny stad med aktiv Turistbyrå ger besökaren **50 000 Coins**.
- Settlementet får **100 000 Coins** när en spelare besöker staden för första gången.
- Låser upp statistik över unika besökare.
- Med policyn **Open Borders** höjs settlementets belöning till **105 000 Coins**.

> [!NOTE]
> Belöningarna bygger på unika förstabesök. Samma besökare kan inte generera samma förstabesöksbelöning om och om igen.

## Krav

- Settlementnivå: **12 eller högre**
- Licens: **350 000 Coins**
- Referensyta: **17×17**. Måttet är inte låst, spelaren markerar byggnadsytan själv.
- Väggar: **minst 40 % täckning**
- Tak: **minst 40 % täckning**
- Hela byggnaden måste ligga inom settlementets territorium

### Specialkrav

<BuildingRequirementsTable building="turistbyra" />

Det finns inga krav på vilket byggmaterial väggar, golv eller tak består av. Settlementet får bygga i valfri stil.

## Köpa licensen

Bygglicensen köps i `/gz menu` → **Settlements** → **Byggnader**. Menyn visar om settlementet uppfyller nivåkravet och vilka licenser som går att köpa.

## Byggprocess

Efter att licensen köpts placeras byggytan i världen:

```text
/building place turistbyra
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
/building revalidate turistbyra
```

Licensen behöver inte köpas igen.

## Flytta byggnaden

```text
/building relocate turistbyra
/building relocate turistbyra confirm
```

Bonusen pausas under flytten. Flytten kan avbrytas med:

```text
/building relocate cancel turistbyra
```
