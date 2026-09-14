---
title: "Fysiska byggnader"
description: "Hela Building System 1.0, från Stadskärna till Myntverk."
category: "Byggnader"
order: 0
version: "3.0"
engineVersion: "Building System 1.0"
updatedAt: "2026-09-14"
infoboxTitle: "Building System 1.0"
infobox:
  process: "Licens → markera yta → bygg → godkänn"
  förstaByggnad: "Stadskärna, nivå 1"
  senasteAktivaByggnad: "Myntverk, nivå 45"
  territorium: "Hela byggnaden måste ligga inom settlementet"
---

## Så fungerar byggsystemet

Settlementbyggnader är riktiga konstruktioner i världen. Licensen är bara startpunkten, bonusen aktiveras först när byggnaden har byggts och godkänts.

> [!IMPORTANT]
> **Var köper man bygglicenser?** Öppna `/gz menu` och välj **Settlements** → **Byggnader**. Där ser du vilka byggnader settlementet har låst upp och kan köpa tillgängliga licenser.

1. Settlementet når byggnadens nivåkrav.
2. Licensen köps i `/gz menu` → **Settlements** → **Byggnader**.
3. Starta placeringen med `/building place <byggnad>`.
4. Vänsterklicka första hörnet och högerklicka motsatta hörnet.
5. Kontrollera partikelramen och kör `/building confirm`.
6. Settlementet bygger inom den registrerade ytan.
7. `/building status` visar vad som saknas.
8. `/building complete` gör slutkontrollen.
9. Bonusen aktiveras när kontrollen godkänns.

Byggnader får byggas i **valfri stil och valfria material**. Spelaren bestämmer numera själv den rektangulära byggnadsytan. De gamla måtten på respektive byggnad är **referensytor**, inte en låst form som bygget måste följa. Pluginet kontrollerar funktion, registrerad yta, väggar, tak, höjd och specialkrav, inte estetik.

> [!IMPORTANT]
> Specialkraven i byggnadstabellerna nedan följer **Engine-validatorn**. Bara block och entiteter som faktiskt kontrolleras av pluginet listas som krav.

## Markera byggnadsytan själv

När en byggnad placeras väljer spelaren själv dess footprint. Kör först:

```text
/building place <byggnad>
```

Markera sedan **två motsatta hörn på golvnivå**. Vänsterklick sätter hörn 1 och högerklick sätter hörn 2. Partiklar visar den valda ytan. När den ser rätt ut:

```text
/building confirm
```

Du kan avbryta en pågående markering med `/building cancel` och visa eller dölja den registrerade partikelgränsen med `/building outline`.

> [!IMPORTANT]
> De mått som visas på varje byggnadssida är **referensmått**, inte ett krav på exakt bredd och djup. Ett bygge får vara både mindre och större så länge storleksgränserna och övriga krav uppfylls.

### Storleksgränser

För alla byggnadstyper gäller samma grundmodell:

- minsta area är **60 % av byggnadens referensyta**, avrundat uppåt
- största area är **4 gånger referensytan**
- båda sidorna måste vara minst **7 block**
- formen ska vara en rektangel
- större byggnader kräver **inte fler specialblock** bara för att ytan är större

Exempel: en referensyta på 19×19 är 361 block. Minsta tillåtna area blir då 217 block. Ett bygge på 15×15, 19×27 eller 31×21 kan därför fungera, förutsatt att övriga krav klaras och maxytan inte överskrids.

## Grundregler

Alla byggnader måste:

- ligga helt innanför settlementets territorium
- hålla sig inom byggnadstypens tillåtna area
- vara minst 7 block breda och 7 block djupa
- inte överlappa en annan registrerad byggnad
- ha minst **40 % väggtäckning**
- ha minst **75 % taktäckning**
- uppfylla eventuellt höjdkrav
- innehålla byggnadens specialblock och entiteter inom den registrerade ytan

Kravblock och entities räknas över **hela den registrerade footprinten**. Ett större bygge straffas alltså inte genom att antalet tunnor, sängar, arbetsblock eller andra specialkrav automatiskt skalas upp.

## Byggnadsprogression

| Nivå | Byggnad | Licens | Huvudbonus |
|---:|---|---:|---|
| 1 | [Stadskärna](/wiki/buildings/stadskarna) | 5 000 | Krävs för nivå 2 |
| 2 | [Kategoribyggnad](/wiki/buildings/kategoribyggnad) | 10 000 | +5 % i aktiv kategori, gäller inte Alkemi |
| 3 | [Handelscentrum](/wiki/buildings/handelscentrum) | 20 000 | Företag, krävs för nivå 4 |
| 5 | [Laboratorium](/wiki/buildings/laboratorium) | 35 000 | Endast Alkemi, aktiverar Coins och +5 % Alkemi |
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
| 35 | [Museum](/wiki/buildings/museum) | 8 000 000 | 1 000 000 Coins turistbonus |
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

Bonusen pausas under flytten. Placera sedan byggnaden på nytt, markera dess nya footprint med två hörn och färdigställ den igen.

Flytten kan avbrytas med:

```text
/building relocate cancel <byggnad>
```
