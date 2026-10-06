---
title: "Företagskontrakt"
description: "Företag kan finansiera egna inköpskontrakt som spelare fyller via Rikskistorna och får betalt för efter sin andel."
category: "Ekonomi"
order: 8
version: "1.0"
engineVersion: "Företagskontrakt"
updatedAt: "2026-10-06"
infoboxTitle: "Företagskontrakt"
infobox:
  skapare: "Företagsägare"
  max_aktiva: "1 per företag"
  leverans: "Rikskistor"
  betalning: "Efter bidragen andel"
  skatt: "Spelarens handelsskatt"
relatedArticles:
  - category: "economy"
    article: "rikskontrakt"
    title: "Rikskontrakt"
    description: "Settlementens veckokontrakt använder samma Rikskistor."
  - category: "economy"
    article: "trade"
    title: "Handel"
    description: "Företagskontrakt räknas som handel i serverstatistiken."
---

## Vad är ett företagskontrakt?

Ett företagskontrakt är en offentlig beställning som finansieras av ett företag. Företaget anger **vilket item som söks, hur många som behövs och hur mycket hela leveransen är värd**.

Exempel:

```text
/contract create 1000 mangrove_log 10000
```

Det betyder att företaget söker **1 000 mangrove logs** och reserverar **10 000 Coins** för hela kontraktet.

> [!IMPORTANT]
> Ett företag kan ha **max ett aktivt företagskontrakt åt gången**. Endast företagets ägare kan skapa och avbryta det.

## Pengarna reserveras direkt

När kontraktet skapas dras hela totalpriset direkt från företagets kassa och reserveras för kontraktet. Företaget kan därför inte publicera en beställning utan att ha råd att betala den.

Samtidigt annonseras kontraktet i serverchatten och i Discord-kanalen **Handel**.

## Leverera i Rikskistorna

Spelare levererar efterfrågade items i samma globala **Rikskistor** som används av Rikskontrakten.

Om ett företagskontrakt söker itemet kan Rikskistan ta emot det och registrera spelarens bidrag. Om flera företag samtidigt söker samma item prioriteras kontraktet med **högst betalning per item**. Överskott kan därefter gå vidare till spelarens vanliga Rikskontrakt om itemet behövs där.

Items som inte behövs tas inte emot.

## Betalning efter bidrag

Varje spelares bidrag sparas separat. När kontraktet avslutas delas den intjänade delen av kontraktspotten ut proportionellt.

Om kontraktet exempelvis är:

```text
1 000 logs
10 000 Coins totalt
```

och du har levererat **500 logs**, står du för **50 %** av kontraktet och får 50 % av den intjänade bruttoersättningen.

Levererar en spelare hela kontraktet själv får den spelaren hela kontraktets bruttopott.

## Skatt och handelsstatistik

Ersättningen beskattas som handel. **Spelarens gällande server-/handelsskatt** avgör hur mycket som faktiskt betalas ut netto.

Varje avslutad kontraktsaffär registreras också i GameZones handelsstatistik med bland annat:

- antal handlade items
- bruttohandelsvärde
- skatt
- säljare
- köpande företag
- settlementkoppling när sådan finns

Företagskontrakt är alltså riktig handel i statistiken, inte en fristående belöning.

## När kontraktet blir klart

När hela mängden har levererats avslutas kontraktet automatiskt. Bidragsgivarna betalas ut och de levererade itemsen blir tillgängliga för företagsägaren.

Företagsägaren tittar på en registrerad Rikskista och använder:

```text
/contract claim
```

Items läggs i spelarens inventory så långt det finns plats. Det som inte får plats ligger kvar för senare hämtning.

## Avbryta ett kontrakt

Företagsägaren kan använda:

```text
/contract cancel
```

De spelare som redan har bidragit får då betalt för den andel som faktiskt levererats. Den del av den reserverade potten som inte har tjänats in återgår till företaget. Redan levererade items blir tillgängliga för företagsägaren via `/contract claim`.

## Se aktiva kontrakt

```text
/contract list
```

visar serverns aktiva företagskontrakt.

`/contact` finns som alias till samma kontraktkommando, men dokumentationen använder `/contract` som standard.
