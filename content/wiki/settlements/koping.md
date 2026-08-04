---
title: "Köping"
description: "Den sjätte settlementnivån där Kyrkan ger en permanent bonus till all registrerad produktion."
category: "Settlements"
order: 7
version: "1.0"
engineVersion: "Settlement Registry"
updatedAt: "2026-07-18"


relatedArticles:
  - category: "settlements"
    article: "samhalle"
    title: "Samhälle"
    description: "Den femte settlementnivån och föregående steg i settlementets utveckling."
  - category: "settlements"
    article: "stad"
    title: "Stad"
    description: "Den sjunde settlementnivån och nästa steg i settlementets utveckling."
---

<SettlementInfoBox settlement="koping" />

# Köping

En **Köping** är den sjätte settlementnivån i GameZone.

På denna nivå växer settlementets territorium och handelsrabatt ytterligare. Köping låser även upp **Kyrka**, en permanent specialbyggnad som förstärker all registrerad produktion för settlementets aktiva medlemmar.

## Territorium

Köping ger ett territorium med en radie på **63 block** från settlementets registrerade centrum.

Territoriet utökas automatiskt när settlementet når nivå 6.

Settlementets registrerade centrum är permanent och kan inte flyttas.

Det finns ingen fysisk Town Hall som kan förstöras, flyttas eller användas som ett vanligt Minecraft-block.

## Grundbonus

Köping behåller settlementets permanenta grundbonus på **+15 % Coins** från all reward-eligible produktion.

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

Företag som är registrerade i ett settlement på nivån Köping ger alla spelare en handelsrabatt på **25 %**.

Rabatten påverkar endast köparens slutpris.

Företaget får fortfarande hela sitt satta försäljningspris och mellanskillnaden finansieras av Economy Engine.

Settlementets ekonomi påverkas inte av handelsrabatten. Rabatten finansieras helt av Economy Engine.

## Veckounderhåll

Köping har ett veckounderhåll på **7 500 Coins**.

Underhållet dras automatiskt från settlementets stadskassa.

Om stadskassan saknar tillräckligt med Coins nedgraderas settlementet automatiskt.

Permanenta byggnadsupplåsningar försvinner inte vid en nedgradering, men byggnader vars nivåkrav inte längre uppfylls blir inaktiva.

När settlementet åter når rätt nivå aktiveras byggnaderna igen utan att behöva betalas en andra gång.

## Byggnader

<SettlementBuildingsPanel group="koping" />

## Nästa nivå

<SettlementUpgradePanel upgradeKey="koping-till-stad" />
