---
title: "Policies"
description: "Settlementets valbara bonusar för produktion, ekonomi, krig och infrastruktur."
category: "Settlements"
order: 5
version: "1.0"
engineVersion: "Settlement Policies"
updatedAt: "2026-08-14"
infoboxTitle: "Policies"
infobox:
  styrsAv: "King"
  level1: "1 aktiv policy"
  level5: "2 aktiva policies"
  level15: "3 aktiva policies"
  cooldown: "48 timmar"
relatedArticles:
  - category: "settlements"
    article: "government"
    title: "Government"
    description: "Diktatur, demokrati och King-val."
  - category: "war"
    article: "krigssystemet"
    title: "Krigssystemet"
    description: "Tickets, allianser och krigsskadestånd."
---

## Vad är Policies?

Policies låter King välja vilken riktning settlementet ska specialisera sig mot. Bonusarna kan påverka produktion, ekonomi, krig eller resor.

Antalet aktiva policies låses upp när settlementet växer:

| Settlement level | Aktiva policyplatser |
|---:|---:|
| 1–4 | 1 |
| 5–14 | 2 |
| 15 | 3 |

King kan se alla policies med:

```text
/settlement policy list
```

Aktiva policies visas med:

```text
/settlement policy active
```

## Aktivera och byta policy

Endast **King** kan aktivera eller avaktivera policies.

```text
/settlement policy activate <policy>
/settlement policy deactivate <policy>
```

När en policy aktiveras får dess policyplats **48 timmars cooldown**. Policyn kan inte tas bort innan cooldownen har gått ut.

När en ny King tar över nollställs befintliga policy-cooldowns.

## Produktion

### Hard Worker

Ger **+10 % generell produktion**.

### United People

Ger **+1 % produktion per settlementmedlem som är online**, upp till maximalt +10 %.

### Small but Mighty

Ger **+10 % produktion** så länge settlementet har högst 5 medlemmar.

> [!IMPORTANT]
> United People och Small but Mighty kan inte vara aktiva samtidigt.

## Ekonomi

### Merchant Republic

Minskar settlementets **Server Tax med 5 procentenheter**.

### Entrepreneurship

Ger **15 % lägre kostnad för företagslicenser** i settlementet.

## Krig

### War Monger

Sidan startar Settlement War med **110 tickets istället för 100**.

Bonusen kan inte staplas genom flera allierade settlements.

### Fortified Realm

Gör settlementets ledare billigare i tickets när de dör under krig:

- King kostar 5 tickets istället för 10.
- Lord kostar 2 tickets istället för 5.
- Vanliga medlemmar kostar fortfarande 1 ticket.

### Last Stand

När krigssidan når **10 tickets eller färre** får sidan +5 tickets en gång under kriget.

Last Stand kan inte staplas mellan allierade settlements.

## Infrastruktur

### Traveler

Ger settlementets medlemmar **25 % extra hastighetsbonus på Riksvägar**.

Detta läggs ovanpå Riksvägens vanliga hastighetsbonus.

## Policies som kommer senare

**Connected Realm** och **Open Borders** är förberedda för framtida byggnader och funktioner men ska inte räknas som aktiva gameplayfunktioner ännu.

Connected Realm är tänkt att kopplas till settlementets anslutning till Riksvägsnätet. Open Borders är tänkt att kopplas till turism och Landmark-systemet.
