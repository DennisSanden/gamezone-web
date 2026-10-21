---
title: "Myntverk"
description: "Frivillig byggnad och aktuell bonus: Dagliga intäkter från byggnaden, med bonus utifrån faktiskt intjänad stadsskatt. Maximalt 150 000 Coins per dag."
category: "Byggnader"
order: 45
version: "2026.10"
engineVersion: "GameZoneEngine 2026-10-21"
updatedAt: "2026-10-21"
infobox:
  bonus: "Frivillig"
  aktivering: "Godkänd och aktiv byggnad"
---

## Myntverk, bonus och funktion

**Dagliga intäkter från byggnaden, med bonus utifrån faktiskt intjänad stadsskatt. Maximalt 150 000 Coins per dag.**

Byggnaden är **frivillig**. Ingen fysisk byggnad behöver färdigställas för att settlementet ska kunna nå nästa nivå. Om staden väljer att bygga Myntverk börjar specialbonusen gälla först när byggnaden har registrerats och godkänts av byggsystemet.

## Krav

- Settlementnivå: **45 eller högre**
- Licens: **20 000 000 Coins**
- Referensyta: **39×39**. Måttet är inte låst, spelaren markerar byggnadsytan själv.
- Väggar: **minst 40 % täckning**
- Tak: **minst 40 % täckning**
- Hela byggnaden måste ligga inom settlementets territorium

### Specialkrav

<BuildingRequirementsTable building="myntverk" />

Det finns inga krav på vilket byggmaterial väggar, golv eller tak består av. Settlementet får bygga i valfri stil.

## Köpa licensen

Bygglicensen köps i `/gz menu` → **Settlements** → **Byggnader**. Menyn visar om settlementet uppfyller nivåkravet och vilka licenser som går att köpa.

## Byggprocess

Efter att licensen köpts placeras byggytan i världen:

```text
/building place myntverk
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
/building revalidate myntverk
```

Licensen behöver inte köpas igen.

## Flytta byggnaden

```text
/building relocate myntverk
/building relocate myntverk confirm
```

Bonusen pausas under flytten. Flytten kan avbrytas med:

```text
/building relocate cancel myntverk
```
