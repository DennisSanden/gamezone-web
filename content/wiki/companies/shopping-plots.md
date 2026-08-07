---
title: "Shopping Plots"
description: "Företagstomter vid spawn där företag kan bygga butik."
category: "Företag"
order: 4
version: "1.1"
engineVersion: "Shopping Plot"
updatedAt: "2026-08-04"
infoboxTitle: "Shopping Plot"
infobox:
  maxantal: "En per företag"
  byggrätt: "Företaget och utsedda managers"
---

## Översikt

Vid spawn finns shopping plots som företag kan köpa och använda som butikstomter. När företaget köper en plot får det byggrättigheter inom området.

Varje företag kan äga högst en shopping plot.

En Shopping Plot-ägare kan dessutom hyra ut försäljningsplatser till andra företagsägare mot en valfri provisionsavgift. På så sätt kan flera företag bedriva försäljning från samma butik.

Den som hyr måste äga ett aktivt företag. Ett företag kan bara hyra en plats på en Shopping Plot åt gången.

## Managers

Företagsägaren kan ge en annan spelare byggrättigheter med:

```text
/company add manager <spelare>
```

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

Om företaget upplöses nollställs plotten och läggs ut till försäljning igen. Ingen återbetalning ges när företaget upplöses.
