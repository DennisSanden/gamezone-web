---
title: "Ladugård"
description: "Frivillig byggnad och aktuell bonus: Djur kan avlas igen 15 % snabbare efter föregående avel."
category: "Byggnader"
order: 3
updatedAt: "2026-10-21"
infobox:
  bonus: "Frivillig"
  aktivering: "Godkänd och aktiv byggnad"
---

## Ladugård, bonus och funktion

**Djur kan avlas igen 15 % snabbare efter föregående avel.**

Byggnaden är **frivillig**. Ingen fysisk byggnad behöver färdigställas för att settlementet ska kunna nå nästa nivå. Byggnadens bonus börjar gälla när Ladugård har färdigställts och godkänts.

## Krav

- Settlementnivå: **2 eller högre**
- Licens: **10 000 Coins**
- Referensyta: **11×11**. Måttet är inte låst, spelaren markerar byggnadsytan själv.
- Väggar: **minst 40 % täckning**
- Tak: **minst 40 % täckning**
- Hela byggnaden måste ligga inom settlementets territorium

### Specialkrav

<BuildingRequirementsTable building="ladugard" />

Det finns inga krav på vilket byggmaterial väggar, golv eller tak består av. Settlementet får bygga i valfri stil.

## Köpa licensen

Bygglicensen köps i `/gz menu` → **Settlements** → **Byggnader**. Menyn visar om settlementet uppfyller nivåkravet och vilka licenser som går att köpa.

## Byggprocess

Efter att licensen köpts placeras byggytan i världen:

```text
/building place ladugard
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
