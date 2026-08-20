---
title: "Fysiska byggnader"
description: "Hela Building System 1.0, från Stadskärna till Myntverk."
category: "Byggnader"
order: 0
version: "2.0"
engineVersion: "Building System 1.0"
updatedAt: "2026-08-20"
infoboxTitle: "Building System 1.0"
infobox:
  process: "Licens → bygg → godkänn"
  förstaByggnad: "Stadskärna, nivå 2"
  senasteAktivaByggnad: "Myntverk, nivå 45"
  territorium: "Hela byggnaden måste ligga inom settlementet"
---

## Så fungerar byggsystemet

Settlementbyggnader är riktiga konstruktioner i världen. Licensen är bara startpunkten, bonusen aktiveras först när byggnaden har byggts och godkänts.

1. Settlementet når byggnadens nivåkrav.
2. Licensen köps.
3. Byggytan placeras med `/building place <byggnad>`.
4. Settlementet bygger inom den markerade ytan.
5. `/building status` visar vad som saknas.
6. `/building complete` gör slutkontrollen.
7. Bonusen aktiveras när kontrollen godkänns.

Byggnader får byggas i **valfri stil och valfria material**. Pluginet kontrollerar funktion, yta, väggar, tak, höjd och specialkrav, inte estetik.

## Grundregler

Alla byggnader måste:

- ligga helt innanför settlementets territorium
- uppfylla sin minsta storlek
- ha minst **70 % väggtäckning**
- ha minst **75 % taktäckning**
- uppfylla eventuellt höjdkrav
- innehålla byggnadens specialblock och entiteter

## Byggnadsprogression

| Nivå | Byggnad | Licens | Huvudbonus |
|---:|---|---:|---|
| 2 | [Stadskärna](/wiki/buildings/stadskarna) | 5 000 | Låser upp byggsystemet |
| 3 | [Kategoribyggnad](/wiki/buildings/kategoribyggnad) | 10 000 | +5 % i vald kategori |
| 4 | [Handelscentrum](/wiki/buildings/handelscentrum) | 20 000 | Företag |
| 5 | [Laboratorium](/wiki/buildings/laboratorium) | 35 000 | Alkemi och +5 % produktion |
| 6 | [Bank](/wiki/buildings/bank) | 50 000 | Detaljerad statistik |
| 7 | [Reliktempel](/wiki/buildings/reliktempel) | 50 000 | Relikbonusar |
| 8 | [Vindhamn](/wiki/buildings/vindhamn) | 100 000 | Elytra |
| 10 | [Gatukontor](/wiki/buildings/gatukontor) | 200 000 | Riksvägsanslutning |
| 12 | [Turistbyrå](/wiki/buildings/turistbyra) | 350 000 | Turism och unika besök |
| 14 | [Stall](/wiki/buildings/stall) | 500 000 | +25 % hästhastighet |
| 16 | [Kontor](/wiki/buildings/kontor) | 750 000 | +3 Shopping Chests |
| 18 | [Kyrka](/wiki/buildings/kyrka) | 1 000 000 | +20 % produktion |
| 20 | [Marknadsplats](/wiki/buildings/marknadsplats) | 1 500 000 | −10 procentenheter Server TAX |
| 22 | [Myntförvaring](/wiki/buildings/myntforvaring) | 2 000 000 | 7,5 % → 2,5 % stadskasseavgift |
| 25 | [Rådhus](/wiki/buildings/radhus) | 2 500 000 | +2 Lord-platser |
| 30 | [Slott](/wiki/buildings/slott) | 5 000 000 | King kostar 6 tickets |
| 35 | [Museum](/wiki/buildings/museum) | 8 000 000 | 100 000 Coins turistbonus |
| 40 | [Rustkammare](/wiki/buildings/rustkammare) | 12 500 000 | 110 grundtickets |
| 45 | [Myntverk](/wiki/buildings/myntverk) | 20 000 000 | 50 000 Coins per dag |

> [!NOTE]
> Underverk på nivå 50 görs om separat och ingår därför inte i den aktiva byggnadsprogressionen ännu.

## Skadade byggnader

Färdigställda byggnader kontrolleras när de förändras. Om en byggnad inte längre klarar kraven blir den **skadad** och bonusen pausas.

Efter reparation:

```text
/building revalidate <byggnad>
```

Licensen finns kvar och behöver inte köpas igen.

## Flytta en byggnad

```text
/building relocate <byggnad>
/building relocate <byggnad> confirm
```

Bonusen pausas under flytten. Placera sedan byggnaden på nytt och färdigställ den igen.

Flytten kan avbrytas med:

```text
/building relocate cancel <byggnad>
```
