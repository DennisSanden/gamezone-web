---
title: "Vindhamn"
description: "Frivillig byggnad och aktuell bonus: 20 % chans att en fyrverkeriraket inte förbrukas vid Elytraflygning inom settlementet. Kräver fortfarande level 10 för att använda Elytra."
category: "Byggnader"
order: 8
version: "2026.10"
engineVersion: "GameZoneEngine 2026-10-21"
updatedAt: "2026-10-21"
infobox:
  bonus: "Frivillig"
  aktivering: "Godkänd och aktiv byggnad"
---

## Vindhamn, bonus och funktion

**20 % chans att en fyrverkeriraket inte förbrukas vid Elytraflygning inom settlementet. Kräver fortfarande level 10 för att använda Elytra.**

Byggnaden är **frivillig**. Ingen fysisk byggnad behöver färdigställas för att settlementet ska kunna nå nästa nivå. Om staden väljer att bygga Vindhamn börjar specialbonusen gälla först när byggnaden har registrerats och godkänts av byggsystemet.

> [!IMPORTANT]
> Elytra låses upp på **settlementnivå 10**, även utan Vindhamn. Vindhamn ger en separat raketbesparing.

## Krav

- Settlementnivå: **8 eller högre**
- Licens: **100 000 Coins**
- Referensyta: **21×21**. Måttet är inte låst, spelaren markerar byggnadsytan själv.
- Minsta höjd: **18 block**
- Väggar: **minst 40 % täckning**
- Tak: **minst 40 % täckning**
- Hela byggnaden måste ligga inom settlementets territorium

### Specialkrav

<BuildingRequirementsTable building="vindhamn" />

> Lightning Rods fortsätter räknas mot byggnadskravet även när kopparen oxiderar. Exposed, Weathered, Oxidized och waxade varianter är giltiga.

Det finns inga krav på vilket byggmaterial väggar, golv eller tak består av. Settlementet får bygga i valfri stil.

## Köpa licensen

Bygglicensen köps i `/gz menu` → **Settlements** → **Byggnader**. Menyn visar om settlementet uppfyller nivåkravet och vilka licenser som går att köpa.

## Byggprocess

Efter att licensen köpts placeras byggytan i världen:

```text
/building place vindhamn
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
/building revalidate vindhamn
```

Licensen behöver inte köpas igen.

## Flytta byggnaden

```text
/building relocate vindhamn
/building relocate vindhamn confirm
```

Bonusen pausas under flytten. Flytten kan avbrytas med:

```text
/building relocate cancel vindhamn
```
