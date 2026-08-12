---
title: "Krigssystemet"
description: "Så fungerar Settlement War med tickets, PvP, kapitulation och vapenvila."
category: "Krig"
order: 1
version: "2.0"
engineVersion: "Settlement War"
updatedAt: "2026-08-12"
infoboxTitle: "Settlement War"
infobox:
  starttickets: "100 per settlement"
  startasAv: "King"
  griefProtection: "Alltid aktiv"
  vinst: "Motståndaren når 0 tickets"
  krigsskadestand: "5 % av förlorarens stadskassa"
  vapenvila: "48 timmar"
---

## Hur ett krig startar

Endast settlementets **King** får skicka en krigsförklaring. Det försvarande settlementets King kan acceptera eller neka.

Kriget börjar först när krigsförklaringen accepteras. Båda settlements startar då med **100 tickets**.

```text
/settlement war declare <settlement>
/settlement war accept
/settlement war decline
```

Ett settlement kan inte ha flera öppna eller aktiva krig samtidigt.

## Tickets

Kriget avgörs genom tickets. När en spelare i ett krigande settlement dör förlorar spelarens settlement tickets beroende på spelarens roll.

| Roll | Förlorade tickets |
|---|---:|
| Member | 1 |
| Lord | 5 |
| King | 10 |

Om en spelare **loggar ut under ett aktivt krig** räknas det som en död och settlementet förlorar samma antal tickets som spelarens roll är värd.

När ett settlement når **0 tickets** förlorar det kriget.

Du kan kontrollera krigets aktuella ställning med:

```text
/settlement war status
```

## PvP under krig

PvP aktiveras endast mellan invånarna i de två settlements som deltar i det aktiva kriget.

Neutrala spelare och andra settlements påverkas inte. Det vanliga PvP-skyddet fortsätter alltså att gälla för alla andra spelare.

## Byggande och Grief Protection

Spelare som tillhör ett settlement i aktivt krig kan inte bygga eller riva block under kriget. Det gäller även utanför settlementets territorium.

Grief Protection fortsätter samtidigt att gälla. Kriget ger aldrig rätt att förstöra motståndarens stad, öppna deras skyddade kistor eller kringgå settlementskyddet.

## Låsta funktioner

Under ett aktivt krig:

- kan inga nya invånare gå med
- kan ingen medlem lämna settlementet
- kan ingen medlem kickas
- kan roller inte ändras
- kan King-rollen inte överföras
- låses stadskassan för uttag och utbetalningar

Rollerna fryses eftersom King, Lord och Member har olika ticketvärden.

## Seger och krigsskadestånd

När ett settlement vinner genom att motståndaren når 0 tickets överförs **5 procent av det förlorande settlementets aktuella stadskassa** till vinnaren.

Samma regel gäller om motståndarens King kapitulerar.

```text
/settlement war surrender
```

Överföringen registreras som en separat Settlement War-transaktion.

## Fred

En King kan föreslå fred med:

```text
/settlement war peace
```

Kriget avslutas genom gemensam fred först när även motståndarens King accepterar genom samma kommando.

Vid gemensam fred finns ingen vinnare och därför överförs **inga Coins** mellan stadskassorna.

## Vapenvila

Efter att ett krig har avslutats gäller **48 timmars vapenvila** mellan samma två settlements. Under vapenvilan kan de inte starta ett nytt krig mot varandra.
## Leaderboards

Settlement War räknas även in på serverns settlement-leaderboards. Där visas:

- **Flest krigsvinster** – antal krig där settlementet står som vinnare
- **Flest krigsförluster** – antal krig där settlementet står som förlorare
- **Bäst ticket-differens** – settlementets återstående tickets minus motståndarens återstående tickets, summerat över avslutade krig

Gemensam fred räknas inte som vinst eller förlust. Ticket-differensen räknas däremot även när kriget avslutas genom gemensam fred.

