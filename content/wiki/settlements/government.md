---
title: "Government"
description: "Diktatur, demokrati, King-val och omröstningar om settlementets statsskick."
category: "Settlements"
order: 4
version: "1.1"
engineVersion: "Settlement Government"
updatedAt: "2026-09-14"
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


## Government-menyn för King och Lords

King och Lords har nu en särskild **Government**-vy i `/gz menu` → **Settlements**. Menyn visar settlementets King, aktuella Lords och den egna rollen.

För **King** fungerar menyn dessutom som kontrollpanel för Lord-behörigheter. Klicka på en Lord för att slå enskilda rättigheter på eller av. Behörigheterna omfattar bland annat medlemsansökningar, kick och befordran, produktionstitlar, plots och territorium, stadskassan, skatt, settlementuppgradering, kategori, byggnader, policies, allianser, krig, kistor och rikskontrakt.

Det betyder att en Lord inte längre behöver behandlas som en generell "nästan-King". King kan delegera exakt de delar av settlementet som den Lorden ska få sköta.

Government-menyn visar också King-transfer. En ny King måste vara Lord, och när kronan överförs blir den tidigare King själv Lord. I GUI:t visas även administrationsavgiften på **100 000 Coins**.

> [!IMPORTANT]
> Vissa beslut är fortfarande reserverade för King, bland annat att dela ut Lord-behörigheter och andra funktioner som uttryckligen kräver King i Engine.

## Policies påverkas inte av statsskicket

Både diktaturer och demokratier kan använda [Policies](/wiki/settlements/policies).

King kan alltid hantera policies och kan även delegera den behörigheten till en Lord genom Government-menyn.
