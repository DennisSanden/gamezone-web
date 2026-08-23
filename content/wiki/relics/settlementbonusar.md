---
title: "Settlementbonusar från reliker"
description: "Så fungerar Production, XP, War Tickets, Shopping Chests och andra settlementeffekter från reliker."
category: "Reliker"
order: 2
version: "2.0"
engineVersion: "Relic System v2"
updatedAt: "2026-08-23"
infoboxTitle: "Relic Bonuses"
infobox:
  aktivering: "Giltig relik i Settlement Inventory"
  production: "Kan gälla all Production eller en specifik kategori"
  xp: "Gäller settlementets spelare"
  warTickets: "Läggs till settlementets krigsbonus"
  shoppingChests: "Vissa reliker höjer företagens chestgräns"
  giltighet: "Endast autentiska, aktuella relikgenerationer räknas"
relatedArticles:
  - category: "buildings"
    article: "reliktempel"
    title: "Reliktempel"
    description: "Byggnaden som hör ihop med settlementets reliksystem."
  - category: "categories"
    article: "produktion"
    title: "Produktion"
    description: "Så fungerar settlementets Production och kategorier."
  - category: "war"
    article: "krigssystemet"
    title: "Krigssystemet"
    description: "Tickets, krigsskadestånd och övriga krigsregler."
---

## Grundregeln

En settlementrelik ger inte sin settlementbonus bara för att någon i settlementet råkar bära den.

För att Engine ska räkna reliken som en settlementrelik ska den förvaras i ett **registrerat Settlement Inventory** och identifieras som en giltig relik för det settlementet.

Settlement Inventory registreras med:

```text
/settlement inventory register
```

Du kan se registrerade kistor med:

```text
/settlement inventory list
```

> [!IMPORTANT]
> Vanliga spelarkistor, Ender Chests, backpacks och företagets Shopping Chests räknas inte automatiskt som Settlement Inventory.

## Reliktempel

[Reliktempel](/wiki/buildings/reliktempel) är settlementbyggnaden som är kopplad till relikbonussystemet. Reliktemplet låser upp settlementets relikbonusfunktion när byggnaden är aktiv och godkänd.

Det räcker alltså inte att äga en relik som settlement. Reliksystemet är tänkt att höra ihop med settlementets utveckling och dess Reliktempel.

## Productionbonus

En del reliker ger **Production** till alla spelare i settlementet.

Exempel:

| Relik | Bonus |
|---|---:|
| The Book of Fortune | +2% Production |
| Book of the Ancients | +1% Production |
| The Book of Industry | +5% Production |
| The Royal Treasury | +5% Production |
| The Golden Testament | +8% Production |
| The Forbidden Knowledge | +5% Production |
| The Crown of Dominion | +5% Production |
| The Worldheart | +5% Production |

Productionbonusen läggs ovanpå andra Productionkomponenter som spelaren redan har rätt till.

### Specialiserad Production

Vissa reliker gäller bara en specifik produktionskategori.

**The Mason's Journal** ger:

```text
+3% Building Materials Production
```

**Heart of the Mountain** ger också:

```text
+3% Building Materials Production
```

**The Prospector's Codex** ger:

```text
+3% Mining Production
```

Det innebär att en specialrelik kan vara betydligt mer värdefull för ett settlement som faktiskt använder rätt produktionskategori.

## XP bonus

XP-reliker ökar Experience för spelare i settlementet.

| Relik | Bonus |
|---|---:|
| Vaelthor Secrets | +5% XP |
| Book of the Ancients | +3% XP |
| The Grimoire of Vaelthor | +7% XP |
| The Forbidden Knowledge | +5% XP |
| The Crown of Dominion | +5% XP |
| The Worldheart | +5% XP |

Exempel:

Om en spelare normalt skulle få 100 XP och settlementet har **Vaelthor Secrets**, ger reliken 5 extra XP från sin relikkomponent.

## War Tickets

Vissa Varkeshreliker och Mythicreliker ger extra War Tickets.

| Relik | Bonus |
|---|---:|
| The Red Standard | +2 War Tickets |
| The Art of War | +5 War Tickets |
| The Conqueror's Chronicle | +10 War Tickets |
| The Emperor's Doctrine | +10 War Tickets |
| The Crown of Dominion | +5 War Tickets |
| The Worldheart | +10 War Tickets |

Tickets läggs till de övriga ticketbonusar som gäller när ett krig startar.

Läs [Krigssystemet](/wiki/war/krigssystemet) för hur dödsfall och roller förbrukar tickets.

## Krigsskadestånd

**The Emperor's Doctrine** har en extra Legendaryeffekt:

```text
10% lägre krigsskadestånd
```

Effekten är kopplad till settlementet som har reliken aktiv som settlementrelik.

Det påverkar inte War Tickets. Boken har både sin ticketbonus och sin separata effekt på krigsskadestånd.

## Extra Shopping Chests

**The Merchant's Scale** ger:

```text
+1 Shopping Chest per företag
```

När reliken är aktiv för settlementet höjs chestgränsen för företag som hör till settlementet.

**The Worldheart** innehåller samma effekt utöver sina övriga Mythicbonusar.

Läs [Shopping Chests](/wiki/companies/shopping-chests) för företagets vanliga chestregler.

## Reliker med flera effekter

En relik kan ge flera olika effekter samtidigt.

### Book of the Ancients

```text
+1% Production
+3% XP
```

### The Forbidden Knowledge

```text
+5% Production
+5% XP
```

### The Emperor's Doctrine

```text
+10 War Tickets
10% lägre krigsskadestånd
```

### The Crown of Dominion

```text
+5% Production
+5% XP
+5 War Tickets
```

### The Worldheart

```text
+5% Production
+5% XP
+10 War Tickets
+1 Shopping Chest per företag
```

## Personliga effekter räknas inte som settlementbonus

Alla relikeffekter kräver inte Settlement Inventory.

Exempel:

**The Forgefather's Hammer** ger spelaren:

```text
+5% personlig Production när reliken hålls i handen
```

**The Hammer of Creation** ger:

```text
+10% personlig Production när reliken hålls i handen
```

Dessa är personliga effekter. De aktiveras av själva verktyget när spelaren använder rätt relik, inte genom att reliken ligger i en settlementkista.

## Endast giltiga reliker räknas

Relikbonusen använder inte bara itemets namn.

Engine verifierar relikens:

- Relic ID
- serienummer
- generation
- kryptografiska signatur
- aktuella status

En gammal kopia från en tidigare restoregeneration ska därför inte kunna ligga i Settlement Inventory och ge dubbel bonus.

## Om reliken tas bort

När en aktiv settlementrelik lämnar Settlement Inventory ska den inte längre räknas som en aktiv settlementrelik.

Det betyder att settlementets styrka faktiskt är knuten till de fysiska föremålen. Ett settlement kan samla många reliker, men måste också kunna behålla dem.
