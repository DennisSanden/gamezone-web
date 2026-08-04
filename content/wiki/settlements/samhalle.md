---
title: "Samhälle"
description: "Den femte settlementnivån där alkemi blir en del av settlementets produktion."
category: "Settlements"
order: 6
version: "1.0"
engineVersion: "Settlement Registry"
updatedAt: "2026-07-18"


relatedArticles:
  - category: "settlements"
    article: "bosattning"
    title: "Bosättning"
    description: "Den fjärde settlementnivån och föregående steg i settlementets utveckling."
  - category: "settlements"
    article: "koping"
    title: "Köping"
    description: "Den sjätte settlementnivån och nästa steg i settlementets utveckling."
---

<SettlementInfoBox settlement="samhalle" />

# Samhälle

Ett **Samhälle** är den femte settlementnivån i GameZone.

På denna nivå utökas settlementets territorium och handelsrabatt samtidigt som produktionskategorin Alkemi får sin första tillhörande produktionsbyggnad.

Den nya byggnaden är **Laboratorium**, som ger settlementets aktiva medlemmar en permanent produktionsbonus från Alkemi.

## Territorium

Samhälle ger ett territorium med en radie på **50 block** från settlementets registrerade centrum.

Territoriet utökas automatiskt när settlementet når nivå 5.

Settlementets registrerade centrum är permanent och kan inte flyttas.

Det finns ingen fysisk Town Hall som kan förstöras, flyttas eller användas som ett vanligt Minecraft-block.

## Grundbonus

Samhälle behåller settlementets permanenta grundbonus på **+15 % Coins** från all reward-eligible produktion.

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

Företag som är registrerade i ett settlement på nivån Samhälle ger alla spelare en handelsrabatt på **20 %**.

Rabatten påverkar endast köparens slutpris.

Företaget får fortfarande hela sitt satta försäljningspris och mellanskillnaden finansieras av Economy Engine.

Settlementets ekonomi påverkas inte av handelsrabatten. Rabatten finansieras helt av Economy Engine.

## Veckounderhåll

Samhälle har ett veckounderhåll på **4 000 Coins**.

Underhållet dras från settlementets stadskassa.

Om stadskassan saknar tillräckligt med Coins kan settlementet nedgraderas. Permanenta byggnadsupplåsningar försvinner inte vid en nedgradering, men byggnader vars nivåkrav inte längre uppfylls blir inaktiva.

När settlementet åter når rätt nivå aktiveras byggnaderna igen utan att behöva betalas en andra gång.

## Byggnader

<SettlementBuildingsPanel group="samhalle" />

## Nästa nivå

<SettlementUpgradePanel upgradeKey="samhalle-till-koping" />
