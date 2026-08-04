---
title: "Shopping Chests"
description: "Registrera en kista som butik och sälj items till andra spelare."
category: "Företag"
order: 2
version: "1.0"
engineVersion: "Trade"
updatedAt: "2026-08-04"
infoboxTitle: "Shopping Chest"
infobox:
  pris: "Per item"
  åtkomst: "Alla spelare utanför företaget"
  betalning: "Automatisk"
---

## Så fungerar försäljningen

En shopping chest fungerar som en automatisk butik. Företaget lägger items i kistan och andra spelare köper genom att plocka ut dem.

När ett item tas ur kistan flyttas Coins automatiskt från köparen till företaget. En spelare kan aldrig ta ut fler items än vad saldot räcker till.

## Registrera en kista

Titta på kistan och skriv:

```text
/company chest register <pris>
```

Priset gäller **per item**. Alla items i samma shopping chest använder därför samma pris.

## Hantera kistor

```text
/company chest info
/company chest pause
/company chest resume
/company chest remove
/company chests
```

Om kistan förstörs avregistreras den automatiskt.
