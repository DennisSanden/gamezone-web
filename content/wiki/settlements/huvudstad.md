---
title: "Huvudstad"
description: "Den tionde settlementnivån där Monument låses upp och settlementets ekonomiska styrka fortsätter att växa."
category: "Settlements"
order: 11
version: "1.0"
engineVersion: "Settlement Registry"
updatedAt: "2026-07-19"

relatedArticles:
  - category: "settlements"
    article: "fastning"
    title: "Fästning"
    description: "Den nionde settlementnivån och föregående steg i settlementets utveckling."
  - category: "settlements"
    article: "grevskap"
    title: "Grevskap"
    description: "Den elfte settlementnivån och nästa steg i settlementets utveckling."
---

<SettlementInfoBox settlement="huvudstad" />

# Huvudstad

En **Huvudstad** är den tionde settlementnivån i GameZone.

På denna nivå har settlementet utvecklats till ett omfattande ekonomiskt och administrativt centrum med ett territorium på 225 block och en handelsrabatt på 45 procent.

Huvudstad låser även upp **Monument**, en permanent specialbyggnad som ger settlementets aktiva medlemmar en produktionsbonus.

## Territorium

Huvudstad ger ett territorium med en radie på **113 block** från settlementets registrerade centrum.

Territoriet utökas automatiskt när settlementet når nivå 10.

Settlementets registrerade centrum är permanent och kan inte flyttas.

Det finns ingen fysisk Town Hall som kan förstöras, flyttas eller användas som ett vanligt Minecraft-block.

## Grundbonus

Huvudstad behåller settlementets permanenta grundbonus på **+15 % Coins** från all reward-eligible produktion.

Grundbonusen gäller:

- Gruvdrift
- Jordbruk
- Skogsbruk
- Boskap
- Fiske
- Byggmaterial
- Alkemi

Bonusar från upplåsta byggnader läggs ovanpå grundbonusen.

Om Monument har färdigställts får settlementets aktiva medlemmar ytterligare **+10 % Coins** från all registrerad manuell produktion.

> [!IMPORTANT]
> Grundbonusen och Monumentets bonus gäller endast settlementets aktiva medlemmar och endast manuell produktion som är reward-eligible.

## Handelsrabatt

Företag som är registrerade i ett settlement på nivån Huvudstad ger alla spelare en handelsrabatt på **45 %**.

Rabatten påverkar endast köparens slutpris.

Företaget får fortfarande hela sitt satta försäljningspris och mellanskillnaden finansieras av Economy Engine.

Settlementets stadskassa påverkas inte av handelsrabatten.

## Veckounderhåll

Huvudstad har ett ordinarie veckounderhåll på **45 000 Coins**.

Underhållet dras automatiskt från settlementets stadskassa.

Om settlementet har färdigställt Marknadsplats minskas veckounderhållet med 10 procent.

Det innebär att det faktiska veckounderhållet efter Marknadsplatsens bonus blir:

- Ordinarie veckounderhåll: **45 000 Coins**
- Marknadsplatsens minskning: **4 500 Coins**
- Faktiskt veckounderhåll: **40 500 Coins**

Om stadskassan saknar tillräckligt med Coins nedgraderas settlementet automatiskt.

Vid en nedgradering:

- territoriet minskar
- handelsrabatten uppdateras
- nivåbundna funktioner inaktiveras
- byggnader med högre nivåkrav blir inaktiva

Permanenta byggnadsupplåsningar försvinner inte.

När settlementet åter når byggnadens nivåkrav aktiveras byggnaden automatiskt igen utan en ny betalning.

## Byggnader

<SettlementBuildingsPanel group="huvudstad" />

## Vägen mot Grevskap

Nästa nivå är **Grevskap**.

Grevskap utökar territoriet till 250 block och höjer handelsrabatten till 50 procent.

Det ordinarie veckounderhållet höjs samtidigt till 65 000 Coins.

Grevskap låser inte upp någon ny unik specialbyggnad. För att avancera från Huvudstad måste settlementet däremot ha färdigställt Monument.

För att avancera måste settlementet bland annat:

- ha färdigställt Monument
- betala 2 000 000 Coins
- uppfylla samtliga materialkrav för nivå 11

## Nästa nivå

<SettlementUpgradePanel upgradeKey="huvudstad-till-grevskap" />