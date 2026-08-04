---
title: "Läger"
description: "Den andra settlementnivån där flera spelare börjar utveckla ett gemensamt samhälle."
category: "Settlements"
order: 3
version: "1.0"
engineVersion: "Settlement Registry"
updatedAt: "2026-07-18"
infoboxTitle: "Läger"
infobox:
  nivå: "2"
  territorieradie: "20 block"
  veckounderhåll: "500 Coins"
  grundbonus: "+15 % Coins"
  handelsrabatt: "5 %"
  nästaNivå: "By"
relatedArticles:
  - category: "settlements"
    article: "enstoring"
    title: "Enstöring"
    description: "Den första settlementnivån och starten på ett nytt samhälle."
  - category: "settlements"
    article: "by"
    title: "By"
    description: "Den tredje settlementnivån och nästa steg i settlementets utveckling."
---

<SettlementInfoBox settlement="lager" />

## Översikt

**Läger** är den andra av GameZones femton settlementnivåer.

På denna nivå har settlementet börjat utvecklas från en ensam etablering till ett gemensamt samhälle. Territoriet blir större, handelsrabatten aktiveras och settlementets första produktionsbyggnader blir tillgängliga.

> [!INFO] Settlementnivån avgör territoriets storlek, handelsrabatten, veckounderhållet och vilka byggnader och funktioner som är tillgängliga.

## Territorium

Ett settlement på nivån Läger kontrollerar ett cirkulärt territorium med en radie på **20 block** från settlementets registrerade centrum.

Territoriet utökas automatiskt när settlementet når nivå 2.

Settlementets registrerade centrum är permanent och kan inte flyttas.

Det finns ingen fysisk Town Hall som kan förstöras, flyttas eller användas som ett vanligt Minecraft-block.

## Grundbonus

Alla aktiva invånare får settlementets permanenta grundbonus på **+15 % Coins** från all reward-eligible produktion.

Grundbonusen gäller:

- Gruvdrift
- Jordbruk
- Skogsbruk
- Boskap
- Fiske
- Byggmaterial
- Alkemi

Bonusar från upplåsta byggnader läggs ovanpå grundbonusen.

> [!IMPORTANT] Grundbonusen gäller endast settlementets aktiva medlemmar och endast manuell produktion som är reward-eligible.

## Handelsrabatt

Företag som är registrerade i ett settlement på nivån Läger ger alla spelare en handelsrabatt på **5 %**.

Rabatten påverkar endast köparens slutpris.

Företaget får fortfarande hela sitt satta försäljningspris och mellanskillnaden finansieras av Economy Engine.

Settlementets stadskassa påverkas inte av handelsrabatten.

## Veckounderhåll

Läger har ett veckounderhåll på **500 Coins**.

Underhållet dras från settlementets stadskassa.

Om stadskassan saknar tillräckligt med Coins kan settlementet nedgraderas. Permanenta byggnadsupplåsningar försvinner inte vid en nedgradering, men byggnader vars nivåkrav inte längre uppfylls blir inaktiva.

När settlementet åter når rätt nivå aktiveras byggnaderna igen utan att behöva betalas en andra gång.

## Byggnader

<SettlementBuildingsPanel group="lager" />

## Nästa nivå

<SettlementUpgradePanel upgradeKey="lager-till-by" />
