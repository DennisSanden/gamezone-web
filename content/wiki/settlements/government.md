---
title: "Government"
description: "Diktatur, demokrati, King-val och omröstningar om settlementets statsskick."
category: "Settlements"
order: 4
version: "1.0"
engineVersion: "Settlement Government"
updatedAt: "2026-08-14"
infoboxTitle: "Government"
infobox:
  standard: "Diktatur"
  valtid: "24 timmar"
  valCooldown: "7 dagar"
  diktaturOmrostning: "66 % JA"
relatedArticles:
  - category: "settlements"
    article: "policies"
    title: "Policies"
    description: "Välj bonusar och inriktning för settlementet."
  - category: "settlements"
    article: "titlar-och-ledarskap"
    title: "Titlar och ledarskap"
    description: "King, Lords och settlementets ledarskap."
---

## Två sätt att styra ett settlement

Varje settlement har ett statsskick: **Diktatur** eller **Demokrati**.

Alla settlements börjar som diktatur. Statsskicket avgör framför allt hur en ny King kan utses.

## Diktatur

Diktatur fungerar som det klassiska settlement-systemet.

King leder settlementet och sitter kvar tills rollen överförs eller settlementet på annat sätt får en ny King. Det finns inga automatiska val.

King kan när som helst ändra settlementet från diktatur till demokrati:

```text
/settlement government democracy
```

> [!IMPORTANT]
> När ett settlement väl har blivit demokratiskt kan King inte ensam ändra tillbaka till diktatur. Då krävs en omröstning bland invånarna.

## Demokrati

I en demokrati kan **vilken aktiv settlementmedlem som helst** starta ett King-val.

```text
/settlement government election start
```

Valet öppnas direkt och pågår i **24 timmar**. De spelare som är aktiva medlemmar när valet startar blir röstberättigade.

Rösta med:

```text
/settlement government election vote <spelare>
```

Kandidaten måste vara röstberättigad medlem i samma settlement. Du kan ändra din röst medan valet fortfarande är öppet.

Om en kandidat får absolut majoritet kan valet avgöras innan de 24 timmarna har gått. Annars vinner spelaren med flest röster när valet avslutas.

Efter ett avslutat King-val börjar **7 dagars cooldown** innan ett nytt King-val kan startas.

## Från demokrati tillbaka till diktatur

I en demokrati kan en aktiv medlem starta en omröstning om att återgå till diktatur:

```text
/settlement government referendum start
```

Rösta med:

```text
/settlement government referendum vote yes
/settlement government referendum vote no
```

Omröstningen är öppen i **24 timmar**.

För att diktatur ska införas måste minst **66 procent av alla röstberättigade** rösta JA. Det räcker alltså inte med 66 procent av de röster som råkar lämnas.

Efter en avslutad omröstning finns **24 timmars cooldown** innan en ny omröstning om diktatur kan startas.

## Se aktuell status

```text
/settlement government status
```

Visar settlementets nuvarande statsskick, aktiva policies, antal tillgängliga policyplatser och eventuell pågående omröstning.

## Policies påverkas inte av statsskicket

Både diktaturer och demokratier kan använda [Policies](/wiki/settlements/policies).

Det är alltid settlementets nuvarande **King** som aktiverar och byter policies.
