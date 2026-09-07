---
title: "Företag"
description: "Så fungerar företag, medlemskap, företagslicenser och företagsskatt på GameZone."
category: "Företag"
order: 1
version: "1.7"
engineVersion: "Company"
updatedAt: "2026-09-07"
infoboxTitle: "Företag"
infobox:
  krav: "Settlement nivå 4 och aktivt Handelscentrum"
  startkostnad: "Gratis"
  medlemskap: "Ett företag per spelare"
  maxlicens: "Nivå 10"
---

## Översikt

När ett settlement har nått **nivå 4** och färdigställt **Handelscentrum** kan invånarna skapa företag.

Det är gratis att starta ett företag. Varje spelare kan vara medlem i högst ett företag åt gången.


## Företagsroller

Ett företag har tre roller: **Owner**, **Manager** och **Member**.

### Owner

Owner är företagets ägare och har kontroll över företagets ägarbeslut, bland annat företagslicensen och funktioner som uttryckligen kräver ägarbehörighet. Företagets köp, hyror och handel använder företagets eget företagskonto, inte Ownerns privata saldo.

### Manager

Manager är företagets operativa butiksroll. Rollen är tänkt som en **butikschef**, inte som delägare.

En Manager får bland annat:

- bygga och riva inom företagets Shopping Plot
- placera och hantera företagets Shopping Chests
- registrera nya Shopping Chests
- pausa och återuppta försäljning
- ta bort företagets Shopping Chests
- sköta den praktiska driften av företagets butik

En Manager får däremot **inte automatiskt företagets ägarbehörigheter**. Ägarbeslut som kräver Owner ligger fortfarande hos företagsägaren. Shopping Plotens dygnshyra dras från företagskontot och är därför inte kopplad till Manager eller Owners privata saldo.

Företagsägaren utser en Manager med:

```text
/company add manager <spelare>
```

### Member

Member är en vanlig företagsmedlem. Rollen ger inte samma bygg- och administrationsrättigheter på företagets Shopping Plot som Manager eller Owner.

## Företagslicens

Företagets licens avgör hur många shopping chests företaget får registrera och hur mycket serverns försäljningsskatt sänks. Kostnaden betalas från **företagskontot**.

| Uppgradering | Kostnad | Shopping chests | Sänkt serverskatt |
| --- | ---: | ---: | ---: |
| Startnivå, licens 1 | Gratis | 1 | 0 procentenheter |
| Nivå 1 till 2 | 1 000 000 Coins | 2 | 2 procentenheter |
| Nivå 2 till 3 | 1 500 000 Coins | 3 | 3 procentenheter |
| Nivå 3 till 4 | 2 000 000 Coins | 4 | 4 procentenheter |
| Nivå 4 till 5 | 2 500 000 Coins | 5 | 5 procentenheter |
| Nivå 5 till 6 | 5 000 000 Coins | 6 | 6 procentenheter |
| Nivå 6 till 7 | 7 500 000 Coins | 7 | 7 procentenheter |
| Nivå 7 till 8 | 10 000 000 Coins | 8 | 8 procentenheter |
| Nivå 8 till 9 | 12 500 000 Coins | 9 | 9 procentenheter |
| Nivå 9 till 10 | 15 000 000 Coins | 10 | 10 procentenheter |

> [!INFO] Endast företagsägaren kan uppgradera licensen. Använd `/company license upgrade`.


### Så påverkar licensen Server TAX

Settlementets nivå bestämmer företagets **grund-TAX**. På settlementnivå 3 är den **45 procent**, därefter sjunker den med 1 procentenhet per nivå tills den når **25 procent på nivå 23**. Från nivå 23 till 50 ligger grundskatten kvar på 25 procent.

Företagslicensen dras sedan från denna grundskatt. En licens på nivå 10 ger **10 procentenheters avdrag**.

Exempel: ett företag med licensnivå 10 i ett settlement på nivå 23 betalar **15 procent Server TAX** innan eventuella ytterligare reduktioner från settlementpolicies.

Läs hela skattetrappan på sidan [Server TAX](/wiki/economy/server-tax).

## Kontor och extra Shopping Chests

När settlementet färdigställer [Kontor](/wiki/buildings/kontor) får varje företag **3 extra Shopping Chests**.

Bonusen läggs ovanpå företagets vanliga licensgräns och andra aktiva bonusar.

## Företagsskatt och settlementets skatteöversikt

När företagets handel genererar skatt till settlementet registreras den som **företagsskatt**.

Om settlementet har låst upp byggnaden **Bank** kan King och andra behöriga spelare följa företagsskatten i settlementets [Skatteöversikt](/wiki/economy/stadskassan#skatteöversikt).

Där visas:

- settlementets totala företagsskatt
- en lista över registrerade företag
- hur mycket skatt varje företag har genererat
- statistik för 7 dagar, 30 dagar eller totalt

Det gör att settlementets ledning kan se vilka företag som faktiskt bidrar mest till stadskassan, utan att behöva sitta med ett Excel-ark som någon kommunal ekonomichef.


## Handelspartners

Företag kan ingå officiella handelsavtal med andra företag. Ett företag kan normalt ha **2 aktiva handelspartners** samtidigt.

Handelsavtal är ömsesidiga. Ett företag skickar en förfrågan och det andra företaget accepterar den innan relationen blir aktiv. När ett aktivt handelsavtal avslutas får företagen **24 timmars cooldown** innan de kan skaffa en ny handelspartner.

```text
/company trade list
/company trade request <företag>
/company trade accept <företag>
/company trade remove <företag>
```

**Owner och Manager** kan hantera handelsavtal. Övriga företagsmedlemmar kan inte skapa eller avsluta relationer.

Handelspartner kan även hanteras via:

```text
/gz menu → Company → Handelspartners
```

### Lägre Server TAX mellan partners

När ett företag handlar med ett aktivt partnerföretag får affären **15 % rabatt på den Server TAX som annars hade tagits ut**.

Det är en relativ rabatt, inte 15 procentenheter. Om den normala Server TAX för affären är 30 % blir den:

```text
30 % × 0,85 = 25,5 %
```

### Trading Empire

Settlementpolicyn **Trading Empire** ger **+2 handelspartnerplatser per företag** i settlementet. Ett företag går därför från normalt 2 till maximalt **4 aktiva handelspartners**.

Trading Empire kan inte avaktiveras medan något företag i settlementet fortfarande har fler än 2 aktiva handelspartners. Överskjutande handelsavtal måste först tas bort.


## Företagskonto

Varje företag har ett eget Coin-konto. Företagets ekonomi är separerad från företagets Owner och övriga medlemmars privata saldon.

Alla aktiva företagsmedlemmar kan se saldot, sätta in Coins och ta ut Coins:

```text
/company balance
/company deposit <belopp>
/company withdraw <belopp>
```

`/company saldo` och `/company konto` fungerar också för att visa saldot.

Företagskontot används automatiskt för bland annat:

- intäkter från företagets Shopping Chests
- inköp genom företagets inköpskistor
- köp och försäljning av Shopping Plot
- Shopping Plotens dygnshyra
- uppgradering av företagslicensen

### Uttagsavgift

Ett normalt uttag från företagskontot har **5 % transaktionsavgift**. Om du tar ut 100 000 Coins får spelaren 100 000 Coins och företagskontot debiteras totalt 105 000 Coins.

Om settlementet har policyn **Banking Management** aktiv är uttagsavgiften **0 %**.

> [!IMPORTANT]
> Ett företag kan inte upplösas medan det fortfarande finns Coins kvar på företagskontot. Töm kontot först.

## Byta företagsnamn

Företagsägaren kan byta namn på sitt befintliga företag utan att skapa ett nytt företag. Namnbytet ändrar bara företagets namn. Företagets medlemmar, licens, shopping chests, Shopping Plots, statistik och övriga kopplingar ligger kvar.

Använd `/company rename <nytt namn>`. Aliaset `/company namnbyte <nytt namn>` fungerar också.

- Endast företagsägaren kan byta namn.
- Det nya namnet måste vara mellan 3 och 32 tecken.
- Namnet får inte redan användas av ett annat företag.

> [!INFO] Ett namnbyte återställer inte företaget. Företagets identitet och befintliga kopplingar behålls.
