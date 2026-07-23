---
title: "Stad"
description: "Den sjunde settlementnivån med ett större territorium, högre handelsrabatt och fortsatt ekonomisk expansion."
category: "Settlements"
order: 8
version: "1.0"
engineVersion: "Settlement Registry"
updatedAt: "2026-07-18"


relatedArticles:
  - category: "settlements"
    article: "koping"
    title: "Köping"
    description: "Den sjätte settlementnivån och föregående steg i settlementets utveckling."
  - category: "settlements"
    article: "handelsstad"
    title: "Handelsstad"
    description: "Den åttonde settlementnivån och nästa steg i settlementets utveckling."
---

<SettlementInfoBox settlement="stad" />

# Stad

En **Stad** är den sjunde settlementnivån i GameZone.

På denna nivå har settlementet vuxit till ett större organiserat samhälle med ett territorium på 150 block och en handelsrabatt på 30 procent.

Stad låser inte upp någon ny unik specialbyggnad. Nivån fungerar i stället som ett betydande expansionssteg inför Handelsstad och den kommande Marknadsplatsen.

## Territorium

Stad ger ett territorium med en radie på **150 block** från settlementets registrerade centrum.

Territoriet utökas automatiskt när settlementet når nivå 7.

Settlementets registrerade centrum är permanent och kan inte flyttas.

Det finns ingen fysisk Town Hall som kan förstöras, flyttas eller användas som ett vanligt Minecraft-block.

## Grundbonus

Stad behåller settlementets permanenta grundbonus på **+15 % Coins** från all reward-eligible produktion.

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

Företag som är registrerade i ett settlement på nivån Stad ger alla spelare en handelsrabatt på **30 %**.

Rabatten påverkar endast köparens slutpris.

Företaget får fortfarande hela sitt satta försäljningspris och mellanskillnaden finansieras av Economy Engine.

Settlementets stadskassa påverkas inte av handelsrabatten.

## Veckounderhåll

Stad har ett veckounderhåll på **12 500 Coins**.

Underhållet dras automatiskt från settlementets stadskassa.

Om stadskassan saknar tillräckligt med Coins nedgraderas settlementet automatiskt.

Vid en nedgradering:

- territoriet minskar
- handelsrabatten uppdateras
- nivåbundna funktioner inaktiveras
- byggnader med högre nivåkrav blir inaktiva

Permanenta byggnadsupplåsningar försvinner inte.

När settlementet åter når byggnadens nivåkrav aktiveras byggnaden automatiskt igen utan en ny betalning.

## Byggnader

<SettlementBuildingsPanel group="stad" />

## Vägen mot Handelsstad

Nästa nivå är **Handelsstad**.

Handelsstad utökar territoriet till 175 block och höjer handelsrabatten till 35 procent.

Nivån introducerar även **Marknadsplats**, som ger settlementet:

- **10 % lägre veckounderhåll**

Marknadsplatsen är en permanent logisk byggnad och har ingen fysisk position eller blockstruktur som behöver verifieras av GameZone Engine.

## Nästa nivå

<SettlementUpgradePanel upgradeKey="stad-till-handelsstad" />
