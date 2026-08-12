---
title: "Företag"
description: "Så fungerar företag, medlemskap, företagslicenser och företagsskatt på GameZone."
category: "Företag"
order: 1
version: "1.2"
engineVersion: "Company"
updatedAt: "2026-08-12"
infoboxTitle: "Företag"
infobox:
  krav: "Settlement nivå 3 och Handelscentrum"
  startkostnad: "Gratis"
  medlemskap: "Ett företag per spelare"
  maxlicens: "Nivå 10"
---

## Översikt

När ett settlement har nått **nivå 3** och låst upp **Handelscentrum** kan invånarna skapa företag.

Det är gratis att starta ett företag. Varje spelare kan vara medlem i högst ett företag åt gången.

## Företagslicens

Företagets licens avgör hur många shopping chests företaget får registrera och hur mycket serverns försäljningsskatt sänks. Kostnaden betalas från företagsägarens personliga coin-saldo.

| Uppgradering | Kostnad | Shopping chests | Sänkt serverskatt |
| --- | ---: | ---: | ---: |
| Startnivå, licens 1 | Gratis | 1 | 0 procentenheter |
| Nivå 1 till 2 | 100 000 Coins | 2 | 2 procentenheter |
| Nivå 2 till 3 | 150 000 Coins | 3 | 3 procentenheter |
| Nivå 3 till 4 | 200 000 Coins | 4 | 4 procentenheter |
| Nivå 4 till 5 | 250 000 Coins | 5 | 5 procentenheter |
| Nivå 5 till 6 | 500 000 Coins | 6 | 6 procentenheter |
| Nivå 6 till 7 | 750 000 Coins | 7 | 7 procentenheter |
| Nivå 7 till 8 | 1 000 000 Coins | 8 | 8 procentenheter |
| Nivå 8 till 9 | 1 250 000 Coins | 9 | 9 procentenheter |
| Nivå 9 till 10 | 1 500 000 Coins | 10 | 10 procentenheter |

> [!INFO] Endast företagsägaren kan uppgradera licensen. Använd `/company license upgrade`.

## Företagsskatt och settlementets skatteöversikt

När företagets handel genererar skatt till settlementet registreras den som **företagsskatt**.

Om settlementet har låst upp byggnaden **Bank** kan King och andra behöriga spelare följa företagsskatten i settlementets [Skatteöversikt](/wiki/economy/stadskassan#skatteöversikt).

Där visas:

- settlementets totala företagsskatt
- en lista över registrerade företag
- hur mycket skatt varje företag har genererat
- statistik för 7 dagar, 30 dagar eller totalt

Det gör att settlementets ledning kan se vilka företag som faktiskt bidrar mest till stadskassan, utan att behöva sitta med ett Excel-ark som någon kommunal ekonomichef.

## Medlemmar och intäkter

Företagsägaren kan fördela en procentandel av företagets nettointäkter till aktiva företagsmedlemmar.

- Endast företagsägaren kan ändra andelarna.
- Tillåtna värden är 0 till 100 procent.
- Summan av alla individuella andelar får inte överstiga 100 procent.
- Skatter dras innan företagets netto fördelas.
- Det som återstår efter medlemsandelarna går till företagsägaren.
- En andel tas bort automatiskt när medlemmen lämnar eller blir kickad.

> [!INFO] Använd `/company salary <spelare> <procent>` för att ändra en medlems andel. Sätt andelen till 0 procent för att ta bort den.

## Byta företagsnamn

Företagsägaren kan byta namn på sitt befintliga företag utan att skapa ett nytt företag. Namnbytet ändrar bara företagets namn. Företagets medlemmar, licens, shopping chests, Shopping Plots, statistik och övriga kopplingar ligger kvar.

Använd `/company rename <nytt namn>`. Aliaset `/company namnbyte <nytt namn>` fungerar också.

- Endast företagsägaren kan byta namn.
- Det nya namnet måste vara mellan 3 och 32 tecken.
- Namnet får inte redan användas av ett annat företag.

> [!INFO] Ett namnbyte återställer inte företaget. Företagets identitet och befintliga kopplingar behålls.
