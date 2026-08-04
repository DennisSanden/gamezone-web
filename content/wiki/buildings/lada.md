---
title: "Lada"
description: "En fysisk skyddsbyggnad för jordbruksinriktade settlements som ger produktionsbonus och en extra skyddszon."
category: "Byggnader"
order: 5
version: "1.0"
engineVersion: "Building Registry"
updatedAt: "2026-07-19"
infoboxTitle: "Lada"
infobox:
  typ: "Fysisk skyddsbyggnad"
  kategori: "Jordbruk"
  nivåkrav: "Läger – nivå 2"
  kostnad: "2 500 Coins"
  effekt: "+5 % Coins från Jordbruk"
---

## Översikt

**Lada** är den officiella produktionsbyggnaden för settlements med inriktningen **Jordbruk**.

Till skillnad från de logiska byggnaderna är Ladan en **fysisk skyddsbyggnad**. Den har därför både en permanent byggnadsupplåsning och en registrerad position i spelvärlden.

När Ladan är aktiv får settlementets aktiva medlemmar **+5 % Coins** från godkänd jordbruksproduktion. Den registrerade positionen fungerar dessutom som centrum för en extra Grief Protection-zon.

> [!IMPORTANT]
> Ladan kan endast användas av ett settlement med inriktningen Jordbruk.

## Effekt

Ladan ger:

- **+5 % Coins från Jordbruk**
- en extra **Grief Protection-zon** runt den registrerade positionen

Produktionsbonusen gäller endast:

- aktiva medlemmar i settlementet
- produktion inom kategorin Jordbruk
- registrerade produktionsmetoder
- aktiviteter som uppfyller Farming Registry
- produktion som är berättigad till Coin-belöning

Bonusen påverkar endast Coins. XP påverkas aldrig.

Automatiserad produktion ger ingen Coin-belöning och påverkas därför inte av Ladans bonus.

## Upplåsning

Ladan låses upp på:

- **Settlementnivå:** Läger
- **Nivå:** 2
- **Inriktning:** Jordbruk

För att låsa upp byggnaden krävs:

- rätt settlementnivå
- byggnadens Coin-kostnad
- tillräckligt saldo i stadskassan
- samtliga resurser i Settlement Inventory
- rätt behörighet

Endast settlementets **KING** eller **LORD** får genomföra upplåsningen.

## Byggkostnad

Ladan kostar:

- **2 500 Coins**

Kostnaden betalas från settlementets stadskassa.


## Placering

Efter att byggnaden har låsts upp måste Ladans skyddscentrum registreras av Settlement Engine.

Positionen måste:

- ligga inom settlementets territorium
- vara godkänd av Settlement Engine
- sakna otillåten överlappning
- registreras av KING eller LORD
- registreras först efter att byggnaden har låsts upp

Settlement Engine sparar:

- värld
- koordinater
- skyddszon
- placeringsstatus
- aktiveringsstatus

GameZone Engine verifierar inte Ladans blockstruktur. Den registrerade positionen representerar byggnadens skyddscentrum.

## Permanent registrering

När samtliga krav är uppfyllda sker upplåsningen atomärt:

1. Settlementnivån verifieras.
2. Byggnadens status verifieras.
3. Behörigheten verifieras.
4. Coin-kostnaden verifieras.
6. Coins dras från stadskassan.
7. Material förbrukas från Settlement Inventory.
8. Ladan registreras permanent.
9. Byggnadens funktion aktiveras.
10. Ett Building Event publiceras.

Byggnaden behöver aldrig låsas upp en andra gång.

## Nedgradering

Om settlementet faller under nivå 2:

- byggnadsregistreringen finns kvar
- Ladan betraktas fortfarande som färdigställd
- produktionsbonusen inaktiveras
- den extra skyddszonen inaktiveras

När settlementet åter når Läger aktiveras funktionerna automatiskt igen.

Coins och material behöver aldrig betalas en andra gång.

## Sammanfattning

Ladan är en fysisk skyddsbyggnad för Jordbruk.

Den kostar **2 500 Coins**, ger **+5 % Coins från Jordbruk** och skapar en extra Grief Protection-zon runt sin registrerade position.
