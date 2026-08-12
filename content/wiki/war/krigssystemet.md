---
title: "Krigssystemet"
description: "Så fungerar Settlement War med allianser, gemensamma tickets, PvP, fred, kapitulation och krigsskadestånd."
category: "Krig & Diplomati"
order: 1
version: "3.0"
engineVersion: "Settlement War + Alliances"
updatedAt: "2026-08-12"
infoboxTitle: "Settlement War"
infobox:
  starttickets: "100 per sida"
  startasAv: "King"
  allianser: "Direkta allierade dras in automatiskt"
  griefProtection: "Alltid aktiv"
  vinst: "Motståndarsidan når 0 tickets"
  krigsskadestand: "5 % från varje förlorande stadskassa"
  vapenvila: "48 timmar"
relatedArticles:
  - category: "war"
    article: "allianser"
    title: "Allianser"
    description: "Så skapas allianser och så påverkar de krig."
---

## Översikt

Settlement War är ett organiserat krigssystem mellan **två sidor**. En sida kan bestå av ett enda settlement eller av flera settlements som dragits in genom direkta allianser.

Krig avgörs med **100 gemensamma tickets per sida**. Det betyder att en allians inte får fler tickets bara för att fler settlements deltar. Alla dödsfall på samma sida belastar samma gemensamma ticketpool.

> [!IMPORTANT]
> Allianser kan förändra vilka som deltar i ett krig. Kontrollera alltid hela krigsförklaringen innan du bekräftar den.

## Krig & Diplomati-menyn

Krigssystemet finns i settlementets meny under **Krig & Diplomati**.

I War-menyn kan du se andra aktiva settlements och, när du hovrar över ett settlement, se vilka **direkta allianser** settlementet har.

För settlementets King visar menyn även en förhandsvisning av vilka settlements som skulle hamna på respektive sida om kriget deklareras.

Exempel:

```text
Din sida
Winterfell
Ravenholm

Motståndarsidan
Nordhamn
Frostvik
```

Om ett krig inte kan deklareras visas settlementet fortfarande i menyn, men orsaken markeras tydligt. Ett exempel är när samma settlement genom sina allianser skulle hamna på båda sidor.

När King väljer ett giltigt mål öppnas en separat bekräftelseskärm. Där visas bland annat båda sidorna, 100 mot 100 tickets, krigsskadeståndet och vapenvilan innan declarationen skickas.

## Hur ett krig startar

Endast settlementets **King** får skicka en krigsförklaring.

Det går att göra genom War-menyn eller med:

```text
/settlement war declare <settlement>
```

Om allianser påverkar konflikten får King först en tydlig varning. Exempel:

```text
VARNING! Detta settlement har en allians med: Town X.
```

Systemet visar samtidigt vilka egna allierade som kommer att dras in.

Vid command-baserad declaration krävs en extra bekräftelse när allianser påverkar kriget:

```text
/settlement war declare <settlement> confirm
```

Bekräftelsen måste ske inom en kort tidsperiod efter varningen.

Det försvarande huvudsettlementets King kan därefter acceptera eller neka krigsförklaringen:

```text
/settlement war accept
/settlement war decline
```

En väntande krigsförklaring gäller i **24 timmar**. Om den inte accepteras eller nekas inom den tiden löper den ut automatiskt.

Den attackerande King kan dra tillbaka en väntande declaration med:

```text
/settlement war cancel
```

Efter att en declaration har nekats gäller en kortare cooldown innan samma settlement kan skicka en ny declaration mot samma mål.

## Allianser och automatiskt deltagande

När ett krig accepteras går huvudsettlementens **direkta allierade** automatiskt in på respektive sida.

Exempel:

```text
Settlement A är allierat med Settlement C.
Settlement B är allierat med Settlement D.

A förklarar krig mot B.

Sida 1: A + C
Sida 2: B + D
```

Allianser är **inte transitiva**. Om A är allierat med B och B är allierat med C betyder det inte att A automatiskt är allierat med C. C dras därför inte in i A:s krig enbart genom sin allians med B.

### Överlappande allianser

Ett settlement får aldrig hamna på båda sidor av samma konflikt.

Om:

```text
A är allierat med C
B är allierat med C
A försöker förklara krig mot B
```

stoppas krigsförklaringen. C skulle annars hamna på både A:s och B:s sida.

Det innebär i praktiken att ett settlement som är allierat med båda parter kan fungera som en diplomatisk spärr mellan dem så länge båda allianserna är aktiva.

Läs mer på sidan [Allianser](/wiki/war/allianser).

## Tickets

Varje **krigssida** startar med 100 tickets, oavsett hur många settlements som deltar på sidan.

När en deltagande spelare dör förlorar spelarens sida tickets beroende på spelarens settlementroll.

| Roll | Förlorade tickets |
|---|---:|
| Member | 1 |
| Lord | 5 |
| King | 10 |

Om en spelare loggar ut under ett aktivt krig räknas det som en död och sidan förlorar samma antal tickets som spelarens roll är värd. Systemet skyddar samtidigt mot att samma death och direkt efterföljande logout räknas dubbelt.

När en sida når **0 tickets** förlorar hela sidan kriget.

Aktuell ställning kan ses i War-menyn eller med:

```text
/settlement war status
```

## PvP under krig

PvP aktiveras mellan spelare som tillhör **motsatta sidor i samma aktiva krig**.

Det innebär exempelvis:

- spelare i settlements på samma sida kan inte skada varandra genom War-systemet
- spelare på motsatta sidor kan strida mot varandra
- neutrala spelare påverkas inte
- settlements utanför kriget påverkas inte

Det vanliga PvP-skyddet fortsätter alltså att gälla utanför den aktiva konflikten.

## Byggande och Grief Protection

Deltagare i ett aktivt krig får inte använda kriget för att bygga stridskonstruktioner eller förändra världen medan konflikten pågår.

Byggande, blockrivning och andra relevanta former av spelarinitierad världsförändring blockeras för deltagarna även utanför det egna settlementterritoriet.

**Grief Protection gäller alltid.** Ett krig ger aldrig rätt att förstöra motståndarens settlement, öppna skyddade kistor eller kringgå settlementskyddet.

## Vad låses under en väntande declaration?

Redan när ett settlement har en öppen krigsförklaring fryses flera strategiska funktioner. Syftet är att hindra att en sida ändrar sin bemanning eller struktur efter att krigets deltagare har bestämts.

Under en öppen declaration kan berörda settlements bland annat inte:

- ta in eller släppa medlemmar
- kicka medlemmar
- ändra King, Lord eller Member-roller
- överföra King-rollen
- byta kategori
- byta settlementnamn
- genomföra strategiska settlementuppgraderingar eller byggnadslicenser som omfattas av krigslåset

Stadskassan låses däremot först när kriget faktiskt blir **aktivt**.

## Vad låses under aktivt krig?

När kriget är aktivt fortsätter de strategiska låsen och dessutom låses utflöden från stadskassan.

Coins får fortfarande komma **in** i stadskassan, men vanliga uttag, utbetalningar och andra kostnader stoppas medan kriget pågår. War-systemets egen krigsskadeståndstransaktion är undantaget.

Rollerna fryses särskilt eftersom King, Lord och Member har olika ticketvärden.

## Huvudsettlements och allierade

Allierade settlements deltar fullt ut i striden, delar sida och tickets och omfattas av War-systemets lås.

Det är däremot de **två ursprungliga huvudsettlementens Kings** som hanterar själva krigsförhandlingen.

Det betyder att en allierad King inte ensam kan:

- acceptera eller neka den ursprungliga declarationen
- kapitulera för hela sidan
- avsluta hela kriget genom fred

## Seger och krigsskadestånd

En sida vinner när motståndarsidan når 0 tickets eller när motståndarsidans huvud-King kapitulerar.

```text
/settlement war surrender
```

Vid en faktisk seger betalar **varje settlement på förlorarsidan 5 procent av sin egen aktuella stadskassa**.

Den sammanlagda summan delas lika mellan settlementen på vinnarsidan.

Exempel:

```text
Förlorarsida
Town B betalar 5 % av sin stadskassa
Town C betalar 5 % av sin stadskassa

Vinnarsida
Town A och Town D delar den sammanlagda summan lika
```

Ett settlement betalar alltså inte 5 procent flera gånger bara för att flera fiender deltog.

Krigsskadeståndet registreras som en separat Settlement War-transaktion.

## Fred

Huvudsettlementets King kan föreslå fred med:

```text
/settlement war peace
```

Ett fredsförslag är tidsbegränsat. Om motståndarens huvud-King accepterar innan förslaget löper ut avslutas kriget genom gemensam fred.

Den King som skickade förslaget kan dra tillbaka det med:

```text
/settlement war peace cancel
```

Vid gemensam fred finns ingen vinnarsida och därför överförs **inga Coins** mellan settlements.

## Vapenvila

Efter ett avslutat krig gäller **48 timmars vapenvila** mellan settlements som stod på motsatta sidor i konflikten.

När en ny krigsförklaring förhandsgranskas kontrolleras vapenvilan för alla settlements som skulle hamna på motsatta sidor. En allians kan alltså inte användas för att kringgå en aktiv vapenvila.

## Leaderboards

Settlement War räknas in på serverns settlement-leaderboards.

Där visas:

- **Flest krigsvinster**, alla deltagande settlements på vinnarsidan får en vinst
- **Flest krigsförluster**, alla deltagande settlements på förlorarsidan får en förlust
- **Bäst ticket-differens**, sidans återstående tickets jämfört med motståndarsidans tickets över avslutade krig

Gemensam fred räknas inte som vinst eller förlust. Resultatdata från kriget kan fortfarande påverka ticket-differensen.

## Kommandon i korthet

```text
/settlement war declare <settlement>
/settlement war declare <settlement> confirm
/settlement war accept
/settlement war decline
/settlement war cancel
/settlement war status
/settlement war peace
/settlement war peace cancel
/settlement war surrender
```

För de flesta spelare är **Krig & Diplomati-menyn** det enklaste sättet att förstå vilka allianser som påverkar ett krig och vilka settlements som faktiskt kommer att hamna på respektive sida.
