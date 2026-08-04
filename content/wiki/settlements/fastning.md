---
title: "Fästning"
description: "Den nionde settlementnivån med ett större territorium och fortsatt expansion mot Huvudstad."
category: "Settlements"
order: 10
version: "1.0"
engineVersion: "Settlement Registry"
updatedAt: "2026-07-19"

relatedArticles:
  - category: "settlements"
    article: "handelsstad"
    title: "Handelsstad"
    description: "Den åttonde settlementnivån och föregående steg i settlementets utveckling."
  - category: "settlements"
    article: "huvudstad"
    title: "Huvudstad"
    description: "Den tionde settlementnivån och nästa steg i settlementets utveckling."
---

<SettlementInfoBox settlement="fastning" />

# Fästning

En **Fästning** är den nionde settlementnivån i GameZone.

På denna nivå har settlementet vuxit till ett omfattande och välutvecklat samhälle med ett territorium på 200 block och en handelsrabatt på 40 procent.

Fästning låser inte upp någon ny unik specialbyggnad. Nivån fungerar i stället som ett större expansionssteg inför Huvudstad och den kommande byggnaden Monument.

## Territorium

Fästning ger ett territorium med en radie på **100 block** från settlementets registrerade centrum.

Territoriet utökas automatiskt när settlementet når nivå 9.

Settlementets registrerade centrum är permanent och kan inte flyttas.

Det finns ingen fysisk Town Hall som kan förstöras, flyttas eller användas som ett vanligt Minecraft-block.

## Grundbonus

Fästning behåller settlementets permanenta grundbonus på **+15 % Coins** från all reward-eligible produktion.

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

Företag som är registrerade i ett settlement på nivån Fästning ger alla spelare en handelsrabatt på **40 %**.

Rabatten påverkar endast köparens slutpris.

Företaget får fortfarande hela sitt satta försäljningspris och mellanskillnaden finansieras av Economy Engine.

Settlementets stadskassa påverkas inte av handelsrabatten.

## Veckounderhåll

Fästning har ett ordinarie veckounderhåll på **30 000 Coins**.

Underhållet dras automatiskt från settlementets stadskassa.

Om settlementet har färdigställt Marknadsplats minskas veckounderhållet med 10 procent.

Det innebär att det faktiska veckounderhållet efter Marknadsplatsens bonus blir:

- Ordinarie veckounderhåll: **30 000 Coins**
- Marknadsplatsens minskning: **3 000 Coins**
- Faktiskt veckounderhåll: **27 000 Coins**

Om stadskassan saknar tillräckligt med Coins nedgraderas settlementet automatiskt.

Vid en nedgradering:

- territoriet minskar
- handelsrabatten uppdateras
- nivåbundna funktioner inaktiveras
- byggnader med högre nivåkrav blir inaktiva

Permanenta byggnadsupplåsningar försvinner inte.

När settlementet åter når byggnadens nivåkrav aktiveras byggnaden automatiskt igen utan en ny betalning.

## Byggnader

<SettlementBuildingsPanel group="fastning" />

## Vägen mot Huvudstad

Nästa nivå är **Huvudstad**.

Huvudstad utökar territoriet till 225 block och höjer handelsrabatten till 45 procent.

Det ordinarie veckounderhållet höjs samtidigt till 45 000 Coins.

Huvudstad låser även upp **Monument**, en permanent specialbyggnad som ger settlementet:

- **+10 % Coins från all reward-eligible produktion**

Monument är ett separat byggprojekt efter att Huvudstad har låsts upp. Byggnaden ingår inte i kostnaden för själva settlementuppgraderingen.

För att avancera måste settlementet bland annat:

- betala 1 000 000 Coins
- uppfylla samtliga materialkrav för nivå 10

## Nästa nivå

<SettlementUpgradePanel upgradeKey="fastning-till-huvudstad" />