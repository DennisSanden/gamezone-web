---
title: "Bounties"
description: "Jaga efterlysta monster i Skenien och inkassera Coin-belöningen när rätt varelse besegras."
category: "Bounties"
order: 1
version: "1.0"
engineVersion: "Bounty System 1.0"
updatedAt: "2026-08-28"
infoboxTitle: "Bounties"
infobox:
  typ: "PvE-jakt"
  belöning: "Coins"
  mål: "Unik entity"
  leaderboard: "Monsterjägare"
relatedArticles:
  - category: "bounties"
    article: "monsterjagare"
    title: "Monsterjägare"
    description: "Så fungerar leaderboarden för inkasserade bounties."
  - category: "economy"
    article: "coins"
    title: "Coins"
    description: "GameZones valuta och ekonomisystem."
---

## Aktiva bounties

Bounties är **specifika efterlysta varelser** ute i Skenien. En bounty gäller inte alla mobs av samma typ. Om exempelvis en Warden vid namn **Gorgash** är efterlyst måste just Gorgash besegras för att belöningen ska betalas ut.

<ActiveBountiesPanel panel="active" />

## Så fungerar jakten

När en bounty publiceras annonseras den på servern och registreras i **Chronicles**. Bountyn får ett namn, en Coin-belöning och kan även ha en offentlig ledtråd som hjälper spelarna att hitta målet.

Bounty-varelsen har sitt namn i **rött ovanför huvudet** när bountyn är aktiv. Det gör att du kan skilja den riktiga bounty-targeten från vanliga mobs av samma typ.

> [!IMPORTANT]
> Det räcker inte att döda samma mobtyp. Bounty-systemet följer den exakta varelsen som bountyn publicerades på.

## Kommandon för spelare

Använd `/bounty` eller `/bounty list` för att se aktiva bounties på servern.

Använd `/bounty info <namn>` för mer information om en specifik bounty.

Exempel: `/bounty info Gorgash`.

## Belöning

När bounty-targeten besegras av en spelare betalas den publicerade Coin-belöningen automatiskt ut till spelaren som tog killen.

Servern annonserar att bountyn har inkasserats och händelsen sparas i Chronicles.

## Tidsgräns

En bounty kan ha en bestämd giltighetstid eller sakna tidsgräns helt. Om tiden löper ut innan varelsen besegras kan belöningen inte längre inkasseras.

Den återstående tiden visas i bountyregistret ovan när bountyn har en tidsgräns.

## Monsterjägare

Varje inkasserad bounty räknas till spelarens placering på leaderboarden **Monsterjägare**. Antal inkasserade bounties avgör placeringen. Om två spelare har lika många används den totala summan intjänade bounty-Coins som tie breaker.
