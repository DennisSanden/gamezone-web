---
title: "Dueller"
description: "Utmana andra spelare i 1 mot 1-dueller och spela om Coins."
category: "Events"
order: 2
version: "1.0"
engineVersion: "Duel System"
updatedAt: "2026-09-29"
infoboxTitle: "Dueller"
infobox:
  utmana: "/duel <spelare>"
  svarstid: "30 sekunder"
  insats: "5 % av förlorarens Coins"
---

## Så fungerar en duell

Utmana en onlinespelare med `/duel <spelare>`. Mottagaren kan acceptera eller neka med de klickbara alternativen i chatten eller med `/duel accept` och `/duel deny`. Utmaningen löper ut efter **30 sekunder**. Du kan inte utmana dig själv, ha flera utgående utmaningar samtidigt eller starta en ny duell medan någon av spelarna redan duellerar.

När utmaningen accepteras teleporteras båda spelarna till den konfigurerade duellarenan. Efter duellen skickas spelarna tillbaka till platsen där duellen började.

## Vinst och Coins

Dödligt damage i arenan gör spelaren **eliminerad** i stället för att genomföra en vanlig Bukkit-död. Vinnaren registreras med en duellvinst och förloraren med en duellförlust.

Förloraren betalar **5 % av sitt aktuella Coin-saldo** till vinnaren. Engine avrundar uppåt till närmaste hela Coin, med minst 1 Coin om spelaren har ett positivt saldo. Har förloraren 0 Coins sker ingen Coin-överföring.

Exempel: har förloraren 1 000 000 Coins får vinnaren **50 000 Coins**.

## Lämna arenan

Att lämna den konfigurerade duellarenan under en aktiv duell räknas som en förlust. Vinnaren får då samma 5 procent av förlorarens aktuella Coin-saldo. Systemet returnerar båda spelarna efter att duellen avslutats.
