---
title: "Fysiska byggnader"
description: "Så fungerar bygglicenser, byggytor, validering, skador och flytt av settlementbyggnader."
category: "Byggnader"
order: 0
version: "1.0"
engineVersion: "GameZoneEngine 1.0.0-RC1"
updatedAt: "2026-08-11"
infoboxTitle: "Fysiska byggnader"
infobox:
  process: "Licens → bygg → godkänn"
  behörighet: "King eller Lord"
  territorium: "Hela byggnaden måste ligga inom settlementet"
---

## Så fungerar byggsystemet

Settlementbyggnader är inte längre bara licenser i en meny. Settlementet köper först licensen och bygger därefter byggnaden fysiskt i världen. Bonusen eller funktionen aktiveras när byggnaden har klarat pluginets kontroll.

1. Nå byggnadens nivåkrav.
2. Köp licensen via `/gz menu`.
3. Placera byggytan med `/building place <byggnad>`.
4. Bygg inom partikelramen.
5. Kontrollera med `/building status`.
6. Färdigställ med `/building complete`.

## Byggytan

`/building place <byggnad>` använder blocket King eller Lord tittar på som centrum. Pluginet sparar positionen och visar en partikelram runt hela footprinten.

Det finns ingen Lodestone eller fysisk markör som måste byggas in.

Hela footprinten måste ligga inom settlementets territorium. Byggnaden får byggas i valfri stil och med valfria material.

## Vad kontrolleras?

Varje byggnad har en bestämd minsta yta och en lista med specialblock. Systemet kontrollerar även:

- minst **70 % väggtäckning**
- minst **75 % taktäckning**
- särskilt höjdkrav där byggnaden har ett sådant
- att specialblocken faktiskt finns kvar vid kontrollen
- att hela byggytan ligger inom settlementet

Dörrar räknas som dörrar, inte som två separata block. Candleblock räknas efter faktiskt antal candles.

## Status och färdigställning

```text
/building status
/building complete
/building info
/building outline
```

`/building status` gör en färsk kontroll av världen och visar vad som saknas. `complete` gör en ny slutkontroll och aktiverar byggnaden först när alla krav är uppfyllda.

`/building outline` visar eller döljer partikelramen.

## Skadade byggnader

En färdigställd byggnad måste fortsätta existera. Om spelare river eller ändrar block i byggnaden kontrolleras den igen efter en kort fördröjning. Det gör att vanlig ombyggnad inte orsakar en kontroll för varje enskilt block.

Om byggnaden inte längre klarar kraven får den status **Skadad** och bonusen pausas. Onlinespelare i settlementet får veta vad som saknas.

Reparera byggnaden och kör:

```text
/building revalidate <byggnad>
```

Licensen försvinner aldrig och ingen ny avgift tas ut.

## Flytta en byggnad

King eller Lord kan flytta en färdigställd byggnad:

```text
/building relocate <byggnad>
/building relocate <byggnad> confirm
```

Bonusen pausas medan flytten pågår. Placera sedan den nya ytan med `/building place <byggnad>`, bygg och kör `/building complete`.

Vill ni ångra flytten:

```text
/building relocate cancel <byggnad>
```

Den gamla byggnaden kontrolleras på nytt innan den återaktiveras. Har den redan rivits måste den repareras eller den nya byggnaden färdigställas.

## Befintliga settlements

Bygglicenser som köptes innan det fysiska byggsystemet infördes behåller sina befintliga funktioner. Settlementet behöver alltså inte köpa samma licens igen.

Äldre obligatoriska byggnader måste däremot färdigställas fysiskt innan settlementet kan låsa upp nästa nya byggnad. På så sätt förlorar gamla settlements inget över en natt, samtidigt som alla settlements successivt går över till det nya systemet.

## Byggnadsstorlekar

| Byggnad | Storlek |
| --- | --- |
| Kategoribyggnad | 11×11 |
| Handelscentrum | 15×15 |
| Bank | 17×17 |
| Laboratorium | 17×17 |
| Kyrka | 21×15, minst 15 hög |
| Marknadsplats | 25×25 |
| Monument | 21×21, minst 15 hög |
| Slott | 35×35, minst 20 hög |
| Underverk | 51×51, minst 30 hög |

Se respektive byggnadssida för exakt materiallista och funktion.
