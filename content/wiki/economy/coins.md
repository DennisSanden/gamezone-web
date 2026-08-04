---
title: "Coins"
description: "GameZones valuta, hur du tjänar Coins och vad de används till."
category: "Ekonomi"
order: 1
version: "1.2"
engineVersion: "Economy Engine"
updatedAt: "2026-08-04"
infoboxTitle: "Coins"
infobox:
  typ: "Servervaluta"
  tjänasGenom: "Godkänd kategoriproduktion"
  användsTill: "Handel och utveckling"
---

## Vad är Coins?

**Coins** är GameZones gemensamma valuta. De används av spelare, företag och settlements för att handla och utvecklas i världen.

Du tjänar Coins genom att samla in eller skapa resurser som tillhör kategorin som ditt settlement har valt. Resurser utanför den valda kategorin kan fortfarande användas, säljas och byggas med, men de ger inga Coins från produktionen.

> [!IMPORTANT]
> När ett settlement skapas med `/settlement create <namn>` väljer ni en produktionskategori. Det är bara resurser inom den kategorin som kan ge Coins.

## Vad används Coins till?

Coins kan bland annat användas för att:

- köpa items från andra spelare genom företagens shopping chests
- köpa items och tjänster från servern
- uppgradera företagets shopping license
- befordra invånare till högre titlar
- uppgradera settlementets nivå
- låsa upp byggnadslicenser och funktioner
- köpa mer mark till settlementet
- byta settlementets namn för 50 000 Coins
- byta settlementets produktionskategori för 50 000 Coins
- sätta in egna Coins i settlementets stadskassa
- göra utbetalningar från stadskassan till settlementets invånare

Läs mer om namnbyte och kategoribyte på sidan [Ändra namn och kategori](/wiki/settlements/andra-namn-och-kategori).

## Köpa från andra spelare

Företag kan registrera en shopping chest genom att titta på kistan och skriva:

`/company chest register <pris>`

Priset gäller per item. När en köpare tar ett item ur kistan dras Coins automatiskt från köparens konto.

## Stadskassan

Alla aktiva settlementmedlemmar kan sätta in egna Coins med:

`/settlement deposit <belopp>`

King kan ta ut Coins till sig själv med:

`/settlement withdraw <belopp>`

King kan skicka Coins till en annan aktiv invånare i samma settlement med:

`/settlement send <spelare> <belopp>`

Uttag och utbetalningar från stadskassan har en transaktionsavgift på 2 procent. Läs mer på sidan [Stadskassan och stadsskatt](/wiki/economy/stadskassan).

## Uppgradera settlementet

Öppna GameZone-menyn med `/gz menu` och välj **Settlement**, sedan **Uppgradering**. Coins för uppgraderingen dras från stadskassan när alla krav är uppfyllda.

Materialen måste finnas i registrerade settlementkistor. Titta på en kista och skriv:

`/settlement inventory register`

## Köpa mer mark

Endast behöriga ledare kan köpa mer territorium åt settlementet.

1. Markera området med `/territory mark`.
2. Kontrollera köpet med `/territory preview`.
3. Genomför köpet med `/territory buy`.

Coins dras från stadskassan när marken köps.

## Skatter

När du tjänar Coins genom produktion kan en del gå till settlementets stadskassa. Läs mer på sidan [Stadskassan och stadsskatt](/wiki/economy/stadskassan).

När ett företag säljer items kan servern ta en separat skatt på försäljningen. Läs mer på sidan [Server TAX](/wiki/economy/server-tax).
