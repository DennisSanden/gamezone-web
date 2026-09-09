---
title: "Policies"
description: "Settlementets valbara bonusar för produktion, ekonomi, krig, turism och infrastruktur."
category: "Settlements"
order: 5
version: "1.4"
engineVersion: "Settlement Policies"
updatedAt: "2026-09-09"
infoboxTitle: "Policies"
infobox:
  styrsAv: "King"
  level1: "1 aktiv policy"
  level5: "2 aktiva policies"
  level15: "3 aktiva policies"
  cooldown: "48 timmar"
relatedArticles:
  - category: "settlements"
    article: "government"
    title: "Government"
    description: "Diktatur, demokrati och King-val."
  - category: "settlements"
    article: "rikskontrakt"
    title: "Rikskontrakt"
    description: "Veckokontrakt och Rikskistor i The Capitol."
---

## Vad är Policies?

Policies låter King välja vilken riktning settlementet ska specialisera sig mot. Bonusarna kan påverka produktion, ekonomi, krig, resor, turism, progression och tävlingar.

Antalet aktiva policies låses upp när settlementet växer:

| Settlement level | Aktiva policyplatser |
|---:|---:|
| 1-4 | 1 |
| 5-14 | 2 |
| 15+ | 3 |

Policies hanteras normalt direkt från settlementets **Government-meny**. Där kan alla invånare se vilka policies som är aktiva, vilka slots som är upplåsta och hur lång cooldown som återstår.

Endast **King** kan ändra policies. Vanliga medlemmar kan öppna menyn och läsa, men inte aktivera eller avaktivera något.

## Aktivera och byta policy

King väljer policy direkt i GUI-menyn. Commands finns kvar som fallback:

```text
/settlement policy list
/settlement policy active
/settlement policy activate <policy>
/settlement policy deactivate <policy>
```

Policykommandona accepterar både policyns visningsnamn och vanliga skrivsätt. Du behöver alltså inte memorera ett exakt internt policy-id. Använd `/settlement policy list` eller tab completion om du är osäker på namnet.

När en policy aktiveras får dess policyplats **48 timmars cooldown**. Policyn kan inte tas bort innan cooldownen har gått ut. När en ny King tar över nollställs befintliga policy-cooldowns.

## Produktion

### Hard Worker
Ger **+10 % generell produktion**.

### United People
Ger **+1 % produktion per settlementmedlem som är online**, upp till maximalt +10 %.

### Small but Mighty
Ger **+10 % produktion** så länge settlementet har högst 5 medlemmar.

### Big and Mighty
Ger **+10 % produktion** när settlementet har minst 10 invånare.

### Item Maniac
Ger **+30 % produktionstak**. Det gör att settlementets spelare kan producera större mängder innan överproduktionsskyddet börjar sänka Coin-belöningen.

> [!IMPORTANT]
> United People och Small but Mighty kan inte vara aktiva samtidigt.

## Ekonomi

### Merchant Republic
Minskar settlementets **Server TAX med 5 procentenheter**. Reduktionen kan kombineras med företagets licensavdrag och Server TAX kan aldrig bli lägre än 0 procent.

### Entrepreneurship
Ger **15 % lägre kostnad för företagslicenser** i settlementet. Det rabatterade priset visas direkt när licensen ska köpas.

### Commercial District
Ger **2 extra Shopping Chests per företag** i settlementet.

### Supplier
Ger settlementet **2 % extra Coins när ett Rikskontrakt slutförs**.

### Banking Management
Tar bort den normala **5 % transaktionsavgiften vid uttag från företagskontot** för företag som tillhör settlementet.

### Trading Empire
Ger **+2 handelspartnerplatser per företag** i settlementet. Grundtaket är 2, så företag i settlementet kan ha upp till **4 aktiva handelspartners**.

Policyn kan inte avaktiveras medan något företag fortfarande använder fler än 2 aktiva partnerplatser.

## Krig

### War Monger
Sidan startar Settlement War med **110 tickets istället för 100**.

### Fortified Realm
Gör settlementets ledare billigare i tickets när de dör under krig:

- King kostar 5 tickets istället för 10.
- Lord kostar 2 tickets istället för 5.
- Vanliga medlemmar kostar fortfarande 1 ticket.

### Last Stand
När krigssidan når **10 tickets eller färre** får sidan +5 tickets en gång under kriget.

### Peace Treaty
Minskar settlementets krigsskadestånd med **20 % vid förlust**.

## Infrastruktur

### Traveler
Ger settlementets medlemmar **25 % extra hastighetsbonus på Riksvägar** utöver Riksvägens vanliga bonus.

### Horse Lords
Ger settlementets medlemmar **10 % extra hästhastighet**.

## Turism

### Open Borders
Ger **5 % extra turistbelöning till settlementet** vid ett unikt turistbesök.

Med Turistbyrå blir settlementets belöning 105 000 Coins istället för 100 000. Med Museum blir den 1 050 000 Coins istället för 1 000 000.

## Progression

### Educated Society
Ger settlementets medlemmar **5 % extra Character XP**.

## Tävling

### Competitive Spirit
Ger **10 % extra Coins från turneringsvinster**.

## Borttagen policy

**Connected Realm** är borttagen och kan inte längre väljas eller ligga aktiv i ett settlement.
