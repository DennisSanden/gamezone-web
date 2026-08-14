---
title: "Invånarplots"
description: "Så delar King och Lord ut privata byggområden till invånare inne i settlementets skyddade territorium."
category: "Settlements"
order: 8
version: "1.0"
engineVersion: "Settlement Resident Plots"
updatedAt: "2026-08-14"
infoboxTitle: "Invånarplots"
infobox:
  skapasAv: "King eller Lord"
  tilldelasTill: "Invånare i samma settlement"
  skydd: "Endast tilldelad invånare"
  höjd: "Hela världshöjden"
relatedArticles:
  - category: "settlements"
    article: "skapa-ett-settlement"
    title: "Skapa ett settlement"
    description: "Grunderna för settlements och skyddat territorium."
  - category: "settlements"
    article: "government"
    title: "Government"
    description: "Så styrs settlementets ledarskap och policies."
---

## Vad är en invånarplot?

En invånarplot är ett **privat område inne i settlementets eget skyddade territorium**. Den fungerar som ett extra skyddslager ovanpå settlementets vanliga Grief Protection.

King eller Lord markerar området och tilldelar det till en invånare. Därefter är det den invånaren som har ensamrätt att bygga, riva och hantera kistor inom området.

Det gör det möjligt att dela upp en stad i privata bostäder och tomter utan att ge alla settlementmedlemmar tillgång till varandras byggnader och förvaring.

> [!IMPORTANT]
> Även King och Lord omfattas av plottskyddet efter att området har tilldelats. Plotten är den tilldelade invånarens privata område.

## Skapa en plot

Endast settlementets **King och Lords** kan skapa invånarplots.

Ställ dig vid det första hörnet och använd:

```text
/settlement pos1
```

Gå sedan till det motsatta hörnet och använd:

```text
/settlement pos2
```

Tilldela därefter området till en invånare:

```text
/settlement assign <spelare>
```

Exempel:

```text
/settlement assign Dennis
```

Spelaren måste vara aktiv medlem i samma settlement.

## Hur området räknas

De två positionerna bestämmer plottens gränser i **X och Z**. Skyddet gäller sedan genom hela världshöjden inom det markerade området.

Det innebär att du inte behöver markera både golv och tak. Två motsatta hörn räcker för att definiera hela tomten.

Hela plotten måste ligga inom settlementets eget territorium och båda positionerna måste vara i samma värld.

## Vad skyddas?

När plotten har tilldelats får den tilldelade invånaren ensam tillgång till de skyddade handlingarna inom området. Det omfattar bland annat:

- placering av block
- förstöring av block
- användning av kistor och andra skyddade förvaringar
- relevanta interaktioner som omfattas av settlementets Grief Protection

Övriga settlementmedlemmar behåller sina normala rättigheter utanför privata invånarplots.

## Plots får inte överlappa

En ny invånarplot får inte överlappa en redan aktiv plot. Om det markerade området krockar med en befintlig plot stoppas skapandet.

Det förhindrar att två invånare får motstridiga rättigheter till samma mark.

## Om invånaren lämnar settlementet

Om den tilldelade invånaren lämnar eller kickas från settlementet frigörs spelarens invånarplots automatiskt. Området återgår då till settlementets vanliga skyddsregler.

## Kommandon

```text
/settlement pos1
/settlement pos2
/settlement assign <spelare>
```
