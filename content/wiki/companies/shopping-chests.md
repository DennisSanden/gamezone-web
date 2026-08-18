---
title: "Shopping Chests"
description: "Registrera kistor där företaget säljer till eller köper från andra spelare."
category: "Företag"
order: 2
version: "1.2"
engineVersion: "Trade"
updatedAt: "2026-08-18"
infoboxTitle: "Shopping Chest"
infobox:
  typer: "Försäljning och inköp"
  pris: "Per item"
  betalning: "Automatisk"
---

## Två typer av företagskistor

Företag kan använda två typer av automatiska handelskistor:

- **Försäljningskista**, företaget säljer items till andra spelare.
- **Inköpskista**, företaget köper items från andra spelare.

Den här sidan beskriver försäljningskistor. Läs den fullständiga guiden om köp-funktionen på sidan [Inköpskistor](/wiki/companies/inkopskistor).

## Så fungerar försäljningen

En Shopping Chest fungerar som en automatisk butik. Företaget lägger items i kistan och andra spelare köper genom att plocka ut dem.

När ett item tas ur kistan flyttas Coins automatiskt från köparen till företagets ledare. En spelare kan aldrig ta ut fler items än vad saldot räcker till.

## Registrera en försäljningskista

Titta på kistan och skriv:

```text
/company chest register <pris>
```

Priset gäller **per item**. Alla items i samma Shopping Chest använder därför samma pris.

## Registrera en inköpskista

Håll itemet företaget vill köpa i handen, titta på kistan och skriv:

```text
/company chest buy <pris>
```

Andra spelare kan därefter sälja matchande items direkt till kistan. Coins dras från företagsledarens personliga saldo och itemsen lagras i den fysiska kistan.

Läs alla regler och detaljer på sidan [Inköpskistor](/wiki/companies/inkopskistor).

## Ändra pris

Du behöver inte längre slå sönder och registrera om en Shopping Chest för att byta pris. Titta på din registrerade försäljningskista och skriv:

```text
/company chest price <nytt pris>
```

Exempel:

```text
/company chest price 500
```

Priset ändras direkt och kistans innehåll samt registrering påverkas inte. Bara spelaren som registrerade kistan kan ändra priset.

## Hantera kistor

```text
/company chest info
/company chest price <pris>
/company chest pause
/company chest resume
/company chest remove
/company chests
```

Om kistan förstörs avregistreras den automatiskt.
