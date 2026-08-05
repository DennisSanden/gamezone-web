---
title: "Inköpskistor"
description: "Låt andra spelare sälja items direkt till ditt företag genom en automatisk köpchest."
category: "Företag"
order: 3
version: "1.0"
engineVersion: "Trade"
updatedAt: "2026-08-05"
infoboxTitle: "Inköpskista"
infobox:
  kommando: "/company chest buy <pris>"
  pris: "Per item"
  betalning: "Företagsledarens Coins"
  lagring: "Den fysiska kistan"
---

## Vad är en inköpskista?

En inköpskista är motsatsen till en vanlig [Shopping Chest](/wiki/companies/shopping-chests).

I en vanlig Shopping Chest säljer företaget items till besökare. I en inköpskista köper företaget istället items från besökare.

Företaget väljer vilket item som ska köpas och hur mycket det är värt per styck. Andra spelare kan sedan sälja matchande items direkt till kistan och få Coins omedelbart.

## Skapa en inköpskista

1. Placera en kista på en Shopping Plot där ditt företag har rätt att använda kistor.
2. Håll itemet du vill köpa i handen.
3. Titta på kistan.
4. Skriv:

```text
/company chest buy <pris>
```

Exempel:

```text
/company chest buy 75
```

Om du håller en järntacka i handen skapas en inköpskista som köper järntackor för **75 Coins per styck**.

Ovanför kistan visas blå information med item och pris, så besökare direkt ser vad företaget köper.

> [!IMPORTANT]
> Priset gäller per item. Kommandot `/company chest buy 75` betyder därför 75 Coins för varje item som säljs till kistan.

## Vem betalar?

Företag har ingen separat företagskassa. Företagsledarens personliga coin-saldo fungerar som företagets kassa.

När någon säljer till en inköpskista:

- Coins dras från den aktuella företagsledarens personliga saldo.
- Coins betalas direkt till spelaren som säljer.
- Itemsen placeras i den fysiska kistan.

Om företaget byter ledare används den nya företagsledarens saldo vid framtida köp.

## Inköpskistor för hyresgäster

Både Shopping Plot-ägaren och registrerade hyresgäster kan skapa inköpskistor.

En hyresgästs inköpskista tillhör hyresgästens eget företag. Betalningen dras därför från ledaren för hyresgästens företag, aldrig från Shopping Plot-ägarens konto.

Ingen provision betalas till Shopping Plot-ägaren när en hyresgäst köper in items. Provision gäller endast när hyresgästen säljer items till andra spelare.

## Sälja items till en inköpskista

Öppna inköpskistan och klicka på matchande items i ditt inventory.

Systemet kontrollerar automatiskt:

- Att itemet är rätt sort.
- Att itemets metadata matchar.
- Att kistan har ledigt utrymme.
- Att företagsledaren har tillräckligt med Coins.

Du säljer bara det antal som både får plats i kistan och kan betalas av företagsledaren.

När affären går igenom får du Coins direkt och hör samma pling som vid andra intäkter.

## Exakt itemmatchning

Inköpskistan köper endast det item som valdes när kistan registrerades.

Customnamn, lore, enchantments och annan itemdata måste matcha. Ett vanligt svärd kan alltså inte säljas till en kista som registrerats för ett särskilt namngivet eller enchantat svärd.

## När kistan är full

När kistan inte längre har plats slutar den automatiskt köpa items.

Företagsledaren eller behöriga företagsmedlemmar måste då gå till butiken och tömma kistan. Så snart det finns ledigt utrymme kan spelare sälja till den igen.

Kistan slutar också köpa om företagsledaren saknar Coins. Den börjar fungera igen när saldot räcker till minst ett item.

## Regler och begränsningar

- Endast företaget som kontrollerar kistan får tömma den.
- Besökare kan sälja till kistan men får inte ta ut innehållet.
- Plotägaren kan inte finansiera en hyresgästs inköpskista av misstag.
- Ingen shoppingplot-provision tas ut vid inköp.
- Kistan köper aldrig fler items än den kan lagra eller betala för.
- Om kistan avregistreras eller förstörs slutar den fungera som inköpskista.

## Hantera inköpskistan

Titta på kistan och använd samma hanteringskommandon som för andra företagskistor:

```text
/company chest info
/company chest pause
/company chest resume
/company chest remove
/company chests
```

`pause` stoppar nya köp utan att avregistrera kistan. `resume` aktiverar den igen.
