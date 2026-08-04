---
title: "Stadskassan och stadsskatt"
description: "Så fungerar settlementets gemensamma Coins, stadsskatt, insättningar, uttag och utbetalningar till invånare."
category: "Ekonomi"
order: 2
version: "1.2"
engineVersion: "Economy Engine"
updatedAt: "2026-08-04"
infoboxTitle: "Stadskassan"
infobox:
  standardSkatt: "25 %"
  minstaSkatt: "0 %"
  högstaSkatt: "100 %"
  bestämsAv: "King"
---

## Vad är stadskassan?

Stadskassan är settlementets gemensamma Coin-saldo. Pengarna används bland annat till:

- settlementuppgraderingar
- byggnadslicenser
- spelartitlar
- namnbyte och kategoribyte
- köp av mer territorium
- utbetalningar till settlementets invånare

Du öppnar översikten med:

`/settlement treasury`

Menyn visar saldo, statistik och transaktionshistorik. Det går inte att sätta in eller ta ut Coins genom menyn. Alla överföringar görs med kommandon.

## Sätta in Coins

Alla aktiva invånare kan sätta in Coins från sitt eget saldo i stadskassan med:

`/settlement deposit <belopp>`

Exempel:

`/settlement deposit 50000`

Då flyttas 50 000 Coins från spelarens saldo till settlementets stadskassa.

## Ta ut Coins till King

Endast settlementets King kan ta ut Coins från stadskassan till sitt eget spelarsaldo:

`/settlement withdraw <belopp>`

Exempel:

`/settlement withdraw 50000`

En transaktionsavgift på **2 procent** tillkommer och tas också från stadskassan.

Om King tar ut 50 000 Coins kostar det därför stadskassan totalt 51 000 Coins:

- 50 000 Coins går till King
- 1 000 Coins går i transaktionsavgift

## Skicka Coins till en invånare

King kan skicka Coins från stadskassan direkt till en aktiv invånare i samma settlement med:

`/settlement send <spelare> <belopp>`

Exempel:

`/settlement send Petter 50000`

En transaktionsavgift på **2 procent** tillkommer även här.

I exemplet kostar utbetalningen stadskassan totalt 51 000 Coins:

- 50 000 Coins går till Petter
- 1 000 Coins går i transaktionsavgift

Mottagaren behöver inte vara online, men måste vara registrerad som aktiv invånare i samma settlement. King kan inte skicka till sig själv med detta kommando. För ett eget uttag används `/settlement withdraw <belopp>`.

## Stadsskatt på produktion

När en spelare är medlem i ett settlement och tjänar Coins genom godkänd kategoriproduktion går en andel direkt till stadskassan.

Standardnivån är **25 procent**. Settlementets King kan ändra stadsskatten mellan **0 och 100 procent** med:

`/settlement tax <procent>`

Exempel:

`/settlement tax 20`

En låg stadsskatt låter invånarna behålla mer av sina produktionsintäkter och kan göra settlementet mer attraktivt för nya medlemmar. En hög stadsskatt fyller stadskassan snabbare när settlementet sparar till en större investering.

## Skillnaden mot Server TAX

Stadsskatt tas från invånarnas produktionsintäkter och går till stadskassan.

Detta är inte samma sak som [Server TAX på företagshandel](/wiki/economy/server-tax). Server TAX tas när företag säljer items till andra spelare och går till servern.
