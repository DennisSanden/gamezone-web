---
title: "Shopping Plots"
description: "Företagstomter vid spawn där företag kan bygga butik."
category: "Företag"
order: 4
version: "1.4"
engineVersion: "Shopping Plot"
updatedAt: "2026-09-07"
infoboxTitle: "Shopping Plot"
infobox:
  maxantal: "En per företag"
  byggrätt: "Owner och Managers"
  dygnshyra: "Dras 18:00 från företagskontot"
---

## Översikt

Vid spawn finns shopping plots som företag kan köpa och använda som butikstomter. När företaget köper en plot får det byggrättigheter inom området.

Varje företag kan äga högst en shopping plot.

## Köppris och dygnshyra

Varje Shopping Plot har ett **köppris** och kan dessutom ha en **dygnshyra**. Köppriset betalas när företaget köper plotten. Dygnshyran är en separat löpande kostnad.

Dygnshyran dras varje kväll klockan **18:00** från **företagskontot**. Köppriset dras också från företagskontot när plotten köps.

Om det saknas Coins vid debiteringen får företaget **24 timmar på sig att komma i fas**. Plotten sägs inte upp direkt. Vid nästa debitering klockan 18:00 försöker systemet i stället dra både den obetalda hyran och den nya dygnshyran, alltså **dubbel hyra**.

Exempel: Om dygnshyran är 2 500 Coins och betalningen misslyckas på måndagen försöker systemet dra 5 000 Coins på tisdagen. Finns pengarna återgår hyran därefter till ordinarie 2 500 Coins per dygn. Finns fortfarande inte tillräckligt med Coins sägs Shopping Ploten upp och blir ledig igen.

> [!WARNING] Företaget måste ha tillräckligt med Coins på företagskontot inför debiteringen klockan 18:00.

En Shopping Plot-ägare kan dessutom hyra ut försäljningsplatser till andra företagsägare mot en valfri provisionsavgift. På så sätt kan flera företag bedriva försäljning från samma butik.

Den som hyr måste äga ett aktivt företag. Ett företag kan bara hyra en plats på en Shopping Plot åt gången.

## Managers

Företagsägaren kan utse en **Manager** med:

```text
/company add manager <spelare>
```

Manager fungerar som företagets butikschef. Rollen får bygga och riva på företagets Shopping Plot samt administrera företagets Shopping Chests, men får inte automatiskt de ägarbehörigheter som är reserverade för Owner. Dygnshyran är kopplad till företagskontot och inte till någon enskild medlems privata saldo.

Läs mer om rollfördelningen på sidan [Företag](/wiki/companies/foretag#företagsroller).

## Item Frames

Item Frames på en Shopping Plot skyddas på samma sätt som resten av butiken. Utomstående spelare kan varken lägga in items i eller ta items från Item Frames på någon annans plot.

## Hyresgäster

En Shopping Plot-ägare kan hyra ut en plats till ägaren av ett annat aktivt företag. Vanliga spelare och vanliga företagsmedlemmar kan inte registreras som hyresgäster.

Hyresgästens företag får inte redan hyra en plats på en annan Shopping Plot.

```text
/shoppingplot rent <företagsägare> <procent>
```

Exempel:

```text
/shoppingplot rent Dennis 5
```

Det innebär att Dennis företag får en hyrd försäljningsplats och att 5 % av Dennis försäljningar automatiskt betalas till Shopping Plot-ägaren. Dennis måste vara registrerad ägare till ett aktivt företag.

### Provision

Vid varje försäljning:

- Vanliga skatter dras först.
- Den överenskomna provisionen betalas till Shopping Plot-ägaren.
- Resterande coins går till säljaren.

**Undantag**

Ingen provision betalas ut om köparen är Shopping Plot-ägaren.

## Hyresgästens rättigheter

En hyresgäst får:

- Placera ut egna kistor.
- Ta bort sina egna kistor.
- Registrera sina kistor med:

```text
/company chest register
```

- Använda sina egna registrerade försäljningskistor.
- Sälja sina egna produkter.

En hyresgäst får inte:

- Placera eller ta bort vanliga byggblock.
- Ändra byggnaden.
- Ändra Shopping Plot-inställningar.
- Hyra ut platser vidare.
- Öppna eller ta bort andra spelares kistor.

## Uppsägning

```text
/shoppingplot unrent <spelare>
```

En hyresgäst kan inte sägas upp så länge någon av dennes registrerade kistor fortfarande innehåller föremål.

## Kommandon

```text
/shoppingplot buy
/shoppingplot sell
/shoppingplot info
/shoppingplot rent <företagsägare> <procent>
/shoppingplot unrent <spelare>
/shoppingplot tenants
```

När Owner säljer en Shopping Plot går återbetalningen tillbaka till **företagskontot**. Om företaget upplöses nollställs plotten och läggs ut till försäljning igen.
