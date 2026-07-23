---
title: "Handelsstad"
description: "Den åttonde settlementnivån där handel och ekonomisk infrastruktur får en större roll."
category: "Settlements"
order: 9
version: "1.0"
engineVersion: "Settlement Registry"
updatedAt: "2026-07-18"


relatedArticles:
  - category: "settlements"
    article: "stad"
    title: "Stad"
    description: "Den sjunde settlementnivån och föregående steg i settlementets utveckling."
  - category: "settlements"
    article: "fastning"
    title: "Fästning"
    description: "Den nionde settlementnivån och nästa steg i settlementets utveckling."
---

<SettlementInfoBox settlement="handelsstad" />

# Handelsstad

En **Handelsstad** är den åttonde settlementnivån i GameZone.

På denna nivå har settlementet utvecklats till ett större ekonomiskt centrum med ett territorium på 175 block och en handelsrabatt på 35 procent.

Handelsstad låser även upp **Marknadsplats**, en permanent specialbyggnad som minskar settlementets veckounderhåll.

## Territorium

Handelsstad ger ett territorium med en radie på **175 block** från settlementets registrerade centrum.

Territoriet utökas automatiskt när settlementet når nivå 8.

Settlementets registrerade centrum är permanent och kan inte flyttas.

Det finns ingen fysisk Town Hall som kan förstöras, flyttas eller användas som ett vanligt Minecraft-block.

## Grundbonus

Handelsstad behåller settlementets permanenta grundbonus på **+15 % Coins** från all reward-eligible produktion.

Grundbonusen gäller:

- Gruvdrift
- Jordbruk
- Skogsbruk
- Boskap
- Fiske
- Byggmaterial
- Alkemi

Bonusar från upplåsta byggnader läggs ovanpå grundbonusen.

> [!IMPORTANT]
> Grundbonusen gäller endast settlementets aktiva medlemmar och endast manuell produktion som är reward-eligible.

## Handelsrabatt

Företag som är registrerade i ett settlement på nivån Handelsstad ger alla spelare en handelsrabatt på **35 %**.

Rabatten påverkar endast köparens slutpris.

Företaget får fortfarande hela sitt satta försäljningspris och mellanskillnaden finansieras av Economy Engine.

Settlementets stadskassa påverkas inte av handelsrabatten.

## Veckounderhåll

Handelsstad har ett ordinarie veckounderhåll på **20 000 Coins**.

Underhållet dras automatiskt från settlementets stadskassa.

Om settlementet har färdigställt Marknadsplats minskas veckounderhållet med 10 procent.

Det innebär att det faktiska veckounderhållet efter Marknadsplatsens bonus blir:

- Ordinarie veckounderhåll: **20 000 Coins**
- Marknadsplatsens minskning: **2 000 Coins**
- Faktiskt veckounderhåll: **18 000 Coins**

Om stadskassan saknar tillräckligt med Coins nedgraderas settlementet automatiskt.

Vid en nedgradering:

- territoriet minskar
- handelsrabatten uppdateras
- nivåbundna funktioner inaktiveras
- byggnader med högre nivåkrav blir inaktiva

Permanenta byggnadsupplåsningar försvinner inte.

När settlementet åter når byggnadens nivåkrav aktiveras byggnaden automatiskt igen utan en ny betalning.

## Byggnader

<SettlementBuildingsPanel group="handelsstad" />

## Vägen mot Fästning

Nästa nivå är **Fästning**.

Fästning utökar territoriet till 200 block och höjer handelsrabatten till 40 procent.

Det ordinarie veckounderhållet höjs samtidigt till 30 000 Coins.

Fästning låser inte upp någon ny unik specialbyggnad, men fungerar som nästa stora expansionssteg på vägen mot Huvudstad.

För att avancera måste settlementet bland annat:

- ha färdigställt Marknadsplats
- betala 500 000 Coins
- uppfylla samtliga materialkrav för nivå 9

## Nästa nivå

<SettlementUpgradePanel upgradeKey="handelsstad-till-fastning" />
