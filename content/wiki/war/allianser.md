---
title: "Allianser"
description: "Så skapar settlements allianser och så påverkar de automatiskt Settlement War."
category: "Krig & Diplomati"
order: 2
version: "1.1"
engineVersion: "Settlement Alliances"
updatedAt: "2026-08-14"
infoboxTitle: "Settlement Alliances"
infobox:
  skapasAv: "King"
  typ: "Ömsesidig och direkt"
  krig: "Allierade dras in automatiskt"
  invitation: "Giltig i 24 timmar"
  kedjor: "Inte transitiva"
relatedArticles:
  - category: "war"
    article: "krigssystemet"
    title: "Krigssystemet"
    description: "Tickets, krigssidor, PvP, fred och krigsskadestånd."
---

## Vad är en allians?

En allians är ett ömsesidigt diplomatiskt avtal mellan **två settlements**.

När alliansen är aktiv räknas de två settlementen som direkta allierade. Den viktigaste konsekvensen är att en allierad stad automatiskt dras in om den andra staden går ut i ett accepterat Settlement War.

> [!WARNING]
> Acceptera inte en allians utan att förstå krigskonsekvensen. En aktiv allians kan automatiskt göra ert settlement till deltagare i någon annans konflikt.

## Skapa en allians

Endast settlementets **King** kan skicka och hantera alliansförfrågningar.

```text
/settlement alliance invite <settlement>
```

Det mottagande settlementets King kan sedan acceptera eller neka.

```text
/settlement alliance accept <settlement>
/settlement alliance decline <settlement>
```

En väntande alliansförfrågan gäller i **24 timmar** och löper därefter ut automatiskt.

Avsändaren kan dra tillbaka en väntande förfrågan med:

```text
/settlement alliance cancel <settlement>
```

## Se dina allianser

```text
/settlement alliance status
```

War-menyn visar dessutom direkta allianser för settlements du hovrar över när du väljer ett möjligt krigsmål.

## Lämna en allians

En aktiv allians kan avslutas med:

```text
/settlement alliance leave <settlement>
```

Allianser kan inte skapas, accepteras eller upplösas när ett berört settlement redan har en öppen eller aktiv krigskonflikt. Det förhindrar att en stad går med i eller lämnar en allians efter att den sett hur ett kommande krig utvecklas.

## Direkta allianser, inte allianskedjor

Allianser är **inte transitiva**.

Om:

```text
A är allierat med B
B är allierat med C
```

är A inte automatiskt allierat med C.

Om A går ut i krig dras B in eftersom B är direkt allierat med A. C dras inte in enbart därför att C är allierat med B.

Detta hindrar ett enskilt krig från att automatiskt spridas genom långa kedjor av relationer över hela servern.

## Vad händer när en allierad går i krig?

När ett huvudsettlement förklarar krig gör systemet en förhandskontroll av båda sidornas direkta allianser.

Exempel:

```text
A ↔ C
B ↔ D

A förklarar krig mot B
```

Om B accepterar blir kriget:

```text
Sida 1
A
C

Sida 2
B
D
```

Alla settlements på samma sida delar **100 tickets**. Alliansen skapar alltså fler deltagande spelare, men inte fler starttickets.

Alla deltagande settlements omfattas av krigets PvP-regler, bygglås och andra War-begränsningar.

## Varning före krigsförklaring

Om settlementet du vill förklara krig mot har allierade visas en varning innan declarationen genomförs.

Exempel:

```text
VARNING! Detta settlement har en allians med: Town X.
```

War-menyn visar dessutom hela den beräknade attacker- och försvarssidan innan King bekräftar declarationen.

Det betyder att du ska kunna se konsekvensen **innan** du startar konflikten.

## Om samma settlement är allierat med båda

Ett settlement får inte hamna på båda sidor i samma krig.

Om:

```text
A ↔ C
B ↔ C
```

och A försöker förklara krig mot B stoppas declarationen.

C är allierat med båda och skulle annars tvingas slåss mot sig självt. Systemet kräver därför att den diplomatiska konflikten löses innan ett krig mellan A och B kan startas.

## Allianser och fred

Allierade settlements deltar på samma sida, men de ursprungliga huvudsettlementens Kings styr själva krigsförhandlingen.

En allierad King kan alltså inte ensam kapitulera eller avsluta hela koalitionens krig genom fred.

## Allianser och krigsskadestånd

Om en allianssida förlorar får **varje settlement på förlorarsidan ett eget krigsskadestånd baserat på sin settlement level**. Det innebär att två settlements på samma förlorarsida kan få olika stora skadestånd.

Systemet tar först vad som finns tillgängligt i respektive stadskassa. Det som inte kan betalas direkt blir en persistent krigsskuld. Så länge skulden finns går 50 procent av framtida systemgenererade settlementintäkter till avbetalning.

Skadeståndet från förlorarsidan fördelas mellan settlementen på vinnarsidan. Läs hela modellen och nivåbeloppen på sidan [Krigssystemet](/wiki/war/krigssystemet).
