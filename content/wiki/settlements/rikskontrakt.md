---
title: "Rikskontrakt"
description: "Fem veckokontrakt per settlement, Rikskistor i The Capitol och stora Coinsbelöningar för gemensamma leveranser."
category: "Settlements"
order: 7
version: "1.0"
engineVersion: "Rikskontrakt"
updatedAt: "2026-09-07"
infoboxTitle: "Rikskontrakt"
infobox:
  antal: "5 per vecka"
  aktiva: "1 åt gången"
  byte: "Fredag 06:00"
  leverans: "Rikskistor i The Capitol"
  belöning: "Ca 7-10 miljoner Coins"
relatedArticles:
  - category: "settlements"
    article: "policies"
    title: "Policies"
    description: "Supplier ger +2 % kontraktsbelöning."
  - category: "economy"
    article: "stadskassan"
    title: "Stadskassan"
    description: "Settlementets gemensamma Coins."
---

## Vad är Rikskontrakt?

Rikskontrakt är gemensamma veckouppdrag för settlements. Varje settlement får **fem kontrakt per kontraktsvecka**. The Capitol får också fem Rikskontrakt.

Kontrakten innehåller stora leveranser av resurser från flera produktionskategorier och belönar settlementet med ungefär **7 till 10 miljoner Coins** beroende på kontraktets svårighet.

Öppna kontrakten med:

```text
/contracts
```

Alias som `/contract` och `/kontrakt` fungerar också.

> [!IMPORTANT]
> Settlementet måste vara minst **Level 3** för att använda Rikskontrakt.

## Fem kontrakt, ett aktivt åt gången

Alla fem kontrakt kan slutföras under samma vecka, men settlementet kan bara ha **ett ACTIVE-kontrakt åt gången**.

Ett nytt kontrakt börjar som **OFFERED**. När settlementet aktiverar ett av dem blir det ACTIVE. När det är slutfört kan nästa OFFERED-kontrakt aktiveras.

Exempel:

```text
1 ACTIVE
2 OFFERED
3 OFFERED
```

Efter att kontrakt 1 slutförts kan settlementet aktivera kontrakt 2 eller 3.

## Vad kräver ett kontrakt?

Varje kontrakt använder **fyra olika resurser från fyra olika produktionskategorier**. Mängderna varierar mellan kontrakten och skalas försiktigt efter settlementets storlek.

Resurserna hämtas från GameZones riktiga produktionssystem. Kontrakten försöker också variera både material och kategorikombinationer mellan veckorna.

## Leverera i Rikskistan

Leveranser görs i de globala **Rikskistorna i The Capitol**. Alla registrerade Rikskistor fungerar för alla settlements.

När en medlem i ett settlement lägger in ett item som behövs av settlementets aktiva kontrakt:

- itemet försvinner direkt ur kistan
- leveransen krediteras spelarens settlement
- progressen på kontraktet uppdateras
- fel items tas inte emot
- items utöver det som återstår i kontraktet tas inte emot

Hoppers kan inte användas för att automatisera Rikskistorna.

> [!IMPORTANT]
> Levererade resurser är förbrukade. Om ett kontrakt hinner löpa ut innan det slutförs får settlementet inte tillbaka redan levererade items.

## Veckobyte

Rikskontrakten byts **varje fredag klockan 06:00 svensk tid**.

Vid veckobytet:

- alla ofärdiga OFFERED och ACTIVE-kontrakt löper ut
- fem nya kontrakt skapas för settlementet
- färdiga kontrakt ligger kvar som historik för den avslutade veckan

Ett settlement behöver alltså inte vänta till nästa fredag när systemet tas i bruk. Om den aktuella veckan saknar kontrakt skapas de för den pågående kontraktsveckan.

## Belöningar

Grundbelöningen ligger normalt runt **7 000 000 till 10 000 000 Coins** och varierar med kontraktets svårighet.

Har settlementet policyn **Supplier** aktiv får slutbelöningen **+2 %**.

Exempel:

```text
Grundbelöning: 8 000 000 Coins
Supplier:      +160 000 Coins
Totalt:        8 160 000 Coins
```

Belöningen betalas när hela kontraktet är slutfört.
