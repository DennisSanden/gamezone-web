---
title: "Kommandon"
description: "De viktigaste spelar-, settlement-, företags- och territoriekommandona."
category: "Kommandon"
order: 1
version: "1.1"
engineVersion: "Commands"
updatedAt: "2026-08-04"
infoboxTitle: "Kommandon"
infobox:
  huvudmeny: "/gz menu"
  marketwatch: "/marketwatch"
---

## Huvudmeny

```text
/gz menu
```

## Settlement

### Översikt och medlemmar

```text
/settlements
/settlement menu
/settlement info
/settlement members
/settlement upgrade
/settlement treasury
```

### Skapa och hantera settlement

```text
/settlement create <namn>
/settlement join <settlement>
/settlement leave
/settlement kick <spelare>
/settlement lord <spelare>
/settlement transfer <spelare>
/settlement rename <nytt namn>
/settlement tax <procent>
```

### Stadskassan

```text
/settlement deposit <belopp>
/settlement withdraw <belopp>
/settlement send <spelare> <belopp>
```

`/settlement deposit <belopp>` sätter in Coins från ditt eget saldo i stadskassan. Alla aktiva settlementmedlemmar kan använda kommandot.

`/settlement withdraw <belopp>` tar ut Coins från stadskassan till Kings eget saldo. Endast King kan använda kommandot och en avgift på 2 procent tillkommer.

`/settlement send <spelare> <belopp>` skickar Coins från stadskassan till en aktiv invånare i samma settlement. Endast King kan använda kommandot och en avgift på 2 procent tillkommer.

Läs hela guiden på sidan [Stadskassan och stadsskatt](/wiki/economy/stadskassan).

### Settlement inventory

```text
/settlement inventory register
/settlement inventory remove
/settlement inventory list
```

## Företag

```text
/company
/company create <företagsnamn>
/company members
/company kick <spelare>
/company license
/company leave
/company salary <spelare> <procent>
/company salaries
/company chest register <pris>
/company chest info
/company chest pause
/company chest resume
/company chest remove
/company chests
/company add manager <spelare>
```

## Shopping Plot

```text
/shoppingplot buy
/shoppingplot sell
/shoppingplot info
```

## Territorium

```text
/territory mark
/territory preview
/territory buy
/territory clear
```

## Duell

```text
/duel <spelare>
/duel accept
/duel deny
```
