---
category: events
description: Komplett guide till Survival, 20 PvE-waves, klasser,
  klassval, loot, välsignelser, Summoner, Healer, Commander, Coins,
  statistik och leaderboards.
engineVersion: GameZoneEngine Survival
infobox:
  klassval: 45 sekunder
  mobkill: 5 000 Coins
  slutbelöning: Upp till 1 000 000 Coins
  typ: Kooperativt PvE-event
  waves: 20
infoboxTitle: Survival
order: 2
relatedArticles:
- article: events
  category: events
  description: Grundregler för GameZones events.
  title: Events
- article: kommandon
  category: commands
  description: Serverns kommandon.
  title: Kommandon
title: Survival
updatedAt: 2026-10-02
version: 2.0
---

# Survival

**Survival** är GameZones kooperativa PvE-event. Alla deltagare spelar i
samma lag och försöker tillsammans överleva **20 waves** med allt
starkare fiender.

Det finns ingen ensam vinnare. Survival handlar i stället om hur långt
hela gruppen kommer, hur mycket varje spelare bidrar och vilka klasser
laget lyckas kombinera.

Eventet har ett eget klassystem, individuella lootval mellan waves,
gemensamma välsignelser, statistik för damage, kills, healing och
Summoner-skada samt permanenta rekord.

> \[!IMPORTANT\] Survival använder inte den vanliga eventlogiken där
> sista överlevande spelare automatiskt vinner prispotten. Survival är
> ett lag-event.

## När startar Survival?

Det schemalagda Survival-eventet öppnar anmälan **5 minuter före
start**. Engine skickar dessutom påminnelser när det återstår 3, 2 och 1
minut.

Gå med med:

``` text
/event join
```

När eventet startar teleporteras registrerade onlinespelare till
Survival-arenan. Därefter öppnas klassvalet.

Survival använder serverns roterande eventschema. Den exakta starttiden
kan därför visas i eventschemat och i serverns automatiska
announcements.

## Grundregler

Survival består av **20 waves**.

Alla eventmobs har glowing så att de är lätta att hitta. Survival-mobs
och Summoner-mobs är dessutom skyddade mot att börja brinna genom
`EntityCombustEvent`.

Spelare kan inte bygga eller slå sönder block under Survival.

Mobs droppar inga vanliga items och ingen vanlig XP. Utrustning som mobs
får är definierad av eventet och har 0 procent drop chance.

Spelare får däremot kasta items till varandra. Items som en deltagare
själv droppar märks av Engine och kan plockas upp av andra deltagare.
Vanliga externa items på marken blockeras.

## Klassvalet

När Survival börjar öppnas ett klass-GUI i **45 sekunder**.

GUI:t stängs inte när du gör ditt val. Du kan ändra klassönskemål under
hela perioden. Det sista önskemålet när tiden går ut används.

Om du inte gör något val behandlas ditt önskemål som **Svärd**.

### Begränsade klasser

Tre klasser har platsbegränsning:

  Klass         Max
  ----------- -----
  Commander       1
  Healer          2
  Summoner        2

Alla andra klasser är obegränsade.

Alla får lov att önska en begränsad klass. Engine bestämmer först efter
att hela 45-sekundersfönstret har gått ut vilka spelare som faktiskt får
platserna.

### Prioritet för begränsade klasser

Om fler spelare önskar samma begränsade klass än det finns platser
används denna ordning:

1.  **Aktiv Patreon**
2.  **Flest historiska Survival mob-kills**
3.  **Tidigast registrerade klassval**

Patreon går alltså alltid före en icke-Patreon för en begränsad klass.
Om flera spelare har samma Patreonstatus jämförs deras permanenta
Survival-kills. Först därefter används tiden då klassönskemålet
registrerades.

Om du inte får den begränsade klass du önskat tilldelas du **Svärd**.

> \[!NOTE\] Historiska Survival-kills är individuell statistik som
> sparas permanent i databasen. Äldre lagrekord från tiden innan
> individuell killstatistik infördes kan inte automatiskt delas upp på
> enskilda spelare.

# Klasser

## Svärd

Svärd är den balanserade närstridsklassen.

**Startutrustning:**

-   Iron Sword
-   Full Iron Armor

Klassen har normal max-HP och normal damage multiplier.

Lootpoolen fokuserar på svärd, shield och tung armor. Diamond Sword blir
tillgängligt från wave 4. Från wave 12 kan Diamond Sword-belöningen få
Sharpness II.

Svärd är obegränsad.

## Tank

Tank är byggd för att absorbera betydligt mer skada än övriga klasser.

**Startutrustning:**

-   Stone Axe
-   Shield
-   Full Iron Armor

Tank får **+75 procent max-HP** jämfört med spelarens normala
grundvärde.

Nackdelen är att Tank bara gör **70 procent av normal outgoing damage**,
alltså 30 procent lägre grundskada.

Tankens loot fokuserar på shield, axe, Golden Apples och tung armor.
Diamond Axe blir tillgänglig från wave 7 och kan få Sharpness II från
wave 13.

Tank är obegränsad.

## Bågskytt

Bågskytt är Survival-lagets rena distansklass.

**Startutrustning:**

-   Unbreakable Bow
-   Power I
-   32 Arrows
-   Stone Sword
-   Full Leather Armor

Bågskyttens reward pool kan bland annat innehålla fler pilar, bättre
bows, crossbows, stora ammo bundles, Spectral Arrows, shield och lätt
armor.

Crossbow progressionen utvecklas under eventet. Från senare waves kan
den få Quick Charge och Piercing.

Bågskytt är obegränsad.

## Healer

Healer är lagets supportklass och är begränsad till **max 2 spelare**.

**Startutrustning:**

-   Stone Sword
-   Healing Totem
-   Full Leather Armor

Healers visas med **grön glowing outline**.

### Passiv healing

Healer har en passiv aura inom **8 block**.

Skadade lagkamrater inom räckvidden läks kontinuerligt med små mängder.
När en spelare faktiskt får healing visas mängden i spelarens actionbar.

Healer får dessutom information om lagkamrater som ligger på **40
procent HP eller lägre**.

### Healing Totem

Healing Totem är Healerns aktiva ability.

Högerklick används för att aktivera den. Effekten gäller inom **10
block**.

Totemen läker:

-   allierade med upp till **4 hjärtan**
-   Healern själv med upp till **2 hjärtan**

Spelaren som får healing ser exakt hur mycket HP som återställdes i
actionbaren.

Healing Totem kan bara användas **en gång per wave**. Den laddas
automatiskt om när nästa wave börjar.

Totemen förbrukas inte.

> \[!NOTE\] Itemets äldre lore kan fortfarande nämna en 20-sekunders
> cooldown, men den aktiva Engine-logiken begränsar användningen till en
> gång per wave. Det är den regeln som gäller.

## Summoner

Summoner är en support och pet-klass som får skapa friendly mobs under
varje wave.

Max **2 Summoners** kan tilldelas per lag.

**Startutrustning:**

-   Stone Sword
-   Crossbow
-   16 Arrows
-   Full Leather Armor

Summoner visas med **lila glowing outline**.

### Summon-token varje wave

Varje Summoner får en ny summon-token när en wave startar.

Vilken summon tokenen skapar beror på waven:

  Waves        Summon
  ------------ -----------------------
  1 till 3     Bee
  4 till 12    Wolf
  13 till 17   Iron Golem
  18 till 20   Iron Golem + 2 Wolves

Summons är friendly och söker automatiskt efter Survival-mobs i
närheten.

Summoner-mobs är kraftigt förstärkta. Deras HP skalas med waven och
multipliceras därefter med **2,0**. Maxgränsen är 500 HP. Deras attack
skalas också upp, inklusive ytterligare **25 procent** ovanpå
summon-tierns vanliga scaling, med maxgräns 55 attack damage.

De får dessutom ökande armor ju senare waven är.

Summons försvinner när Survival avslutas och räknas separat i
eventstatistiken som **Summon damage** för ägaren.

## Commander

Commander är lagets ledarklass och är begränsad till **max 1 spelare**.

**Startutrustning:**

-   Iron Sword
-   Stridshorn
-   Full Iron Armor

Commander har **+20 procent max-HP**.

Commander visas med **blå glowing outline**.

### Stridshorn

Commander kan högerklicka med sitt Goat Horn för att aktivera
**Stridshorn**.

När hornet används:

-   hela laget får **+20 procent outgoing damage**
-   buffen gäller under den wave där hornet används
-   alla levande deltagare får information i actionbaren
-   hela laget får en titel
-   servern spelar ett Goat Horn-ljud
-   aktiveringen annonseras

Cooldownen räknas från den wave där hornet faktiskt används.

Exempel: används hornet på wave 2 kan det användas igen på wave 5.
Används det på wave 7 kan det användas igen på wave 10.

Det är alltså **inte** låst till särskilda förutbestämda waves.

Commander har dessutom en förbättrad lootpool och får alltid minst
högsta contribution tier när reward-alternativen skapas.

## Berserker

Berserker är den aggressiva glass cannon-klassen.

**Startutrustning:**

-   Iron Axe
-   Full Leather Armor

Berserker har bara **70 procent av normal max-HP**, men gör **+35
procent outgoing damage**.

Lootpoolen fokuserar på aggressiv melee-utrustning, Diamond Axe, mat,
Golden Apples och lätt armor. Från wave 10 kan Berserker Axe få
Sharpness II.

Berserker är obegränsad.

# Hur waves fungerar

När en wave startar visas aktuell wave i bossbaren och deltagarna får en
titel.

Var femte wave markeras som **BOSSWAVE**.

Healers får tillbaka sin Healing Totem-användning. Summoners får sin
summon-token. Därefter spawnar fienderna.

## Antal mobs

Grundformeln innan wave-multipliers är:

``` text
4 + wave × 2 + ceil(antal spelare × 1,35)
```

Därefter används olika multipliers beroende på wave. Engine har en hård
maxgräns på **50 mobs** i den normala wave-spawnen.

Bosswaves minskar det rena antalet mobs ytterligare och flyttar i
stället mer av svårigheten till starkare fiender.

## Wave-timers

Om laget inte hinner döda alla mobs kommer nästa wave ändå.

  Waves          Tid innan nästa wave kan tvingas fram
  ------------ ---------------------------------------
  1 till 5                                 75 sekunder
  6 till 10                                90 sekunder
  11 till 15                              105 sekunder
  16 till 19                              135 sekunder
  20                                 Ingen sådan timer

Kvarvarande mobs försvinner inte när timern går ut. De ligger kvar
samtidigt som nästa wave spawnar.

Det betyder att ett lag som halkar efter kan få flera waves aktiva
samtidigt.

# Fiender och svårighetskurva

Alla eventmobs får explicit HP och attack scaling. Engine försöker
alltså inte bara göra sena waves svåra genom att ösa in enorma mängder
entities.

Vanliga typer under tidigare waves är Zombie, Skeleton och Spider.
Pillagers börjar dyka upp från wave 6 och Vindicators från wave 9.

Från wave 10 blir sammansättningen hårdare med fler Pillagers,
Vindicators och Witches.

## Wave 18

Wave 18 introducerar en betydligt aggressivare late-game mix med bland
annat:

-   Zombies
-   Skeletons
-   Pillagers
-   Vindicators
-   Witches

## Wave 19

Wave 19 innehåller dessutom en **Ravager** som första mob och fortsätter
med den hårda late-game mixen.

## Wave 20

Wave 20 är finalen.

Den innehåller bland annat:

-   en Ravager
-   **2 Wardens**
-   Witches
-   Vindicators
-   Pillagers
-   Skeletons
-   Zombies

Första fienden fungerar samtidigt som finalens boss och får kraftigt
förstärkt HP och damage.

Wardens får aldrig mindre än **500 HP** och har särskild damage-scaling.

Wave 18 till 20 är medvetet byggda för att vara eventets stora
svårighetsvägg.

# Mob-utrustning

Survival rensar mobbens vanliga slumpmässiga utrustning och bygger
därefter upp tillåten utrustning själv.

Det innebär att en Skeleton inte slumpmässigt ska dyka upp med
vanilla-enchantad superutrustning.

Skeletons får Bow. Pillagers får Crossbow. Vindicators får Iron Axe.

Från wave 15 kan vissa Skeleton-bows få Power I. Från wave 18 kan de få
Power II. Pillager-crossbows kan få Quick Charge I från wave 18.

Viss deterministic armor börjar också dyka upp sent. Från wave 15 kan
vissa Zombies och Skeletons få Chainmail Helmet. Från wave 18 kan vissa
få Iron Helmet och Iron Chestplate.

Mobutrustningen har **0 procent drop chance**.

# Coins

Survival har två separata sätt att tjäna Coins.

## 5 000 Coins per mobkill

Varje personlig kill på en Survival-mob ger direkt:

**5 000 Coins**

Detta är separat från wave-belöningen.

## Wave-belöning

Wave-belöningen är ett **checkpointvärde**, inte en staplande summa.

Om du klarar wave 8 är din aktuella slutbelöning värdet för wave 8. Du
får alltså inte wave 1 + wave 2 + wave 3 och så vidare.

    Klarad wave    Slutbelöning
  ------------- ---------------
              1          50 000
              2          62 500
              3          75 000
              4          87 500
              5         125 000
              6         150 000
              7         175 000
              8         200 000
              9         225 000
             10         375 000
             11         400 000
             12         450 000
             13         500 000
             14         550 000
             15         625 000
             16         700 000
             17         775 000
             18         850 000
             19         925 000
             20   **1 000 000**

Om du blir utslagen betalas värdet från din **senaste klarade wave** ut.

Mobkill-Coins som du redan tjänat är separata från detta.

# Loot mellan waves

Efter en klarad wave får varje överlevande spelare ett personligt
reward-GUI.

Tre konkreta items visas. Det finns inga hemliga `class reward`-lådor.
Det som visas är det du faktiskt väljer.

Reward-menyn kan inte bara stängas bort. Om du fortfarande väntar på ett
val öppnas den igen.

## Contribution tier

Vilken del av rewardpoolen du får tillgång till påverkas av din insats i
den senaste waven.

Engine räknar:

``` text
score = damage + kills × 20
```

Din score jämförs sedan med lagets genomsnittliga score.

Contribution tiers:

-   0, ingen mätbar contribution
-   1, under 55 procent av fair share
-   2, minst 55 procent av fair share
-   3, minst 100 procent av fair share
-   4, minst 150 procent av fair share

Högre tier gör att fler möjliga rewards kan komma med i den pool som de
tre alternativen slumpas från.

Commander behandlas alltid som minst **tier 4**.

Engine försöker också filtrera bort uppenbara utrustningsnedgraderingar
och identiska permanenta equipment-items som spelaren redan har.

## Gemensamma rewards

Alla klasser kan få mat och Golden Apples. Från wave 11 kan
`Survival Golden Apple` också finnas i poolen.

Utöver detta har varje klass sin egen rewardprofil.

### Svärd loot

Svärd kan få Iron Sword, Diamond Sword, Shield och tung
armorprogression.

Armorprogressionen går stegvis från Iron Boots på wave 2 till full
Diamond progression för de sena wavesen.

### Tank loot

Tank kan få Shield, Iron Axe, Diamond Axe, Golden Apples och tung armor.

Tankens Diamond Chestplate blir tillgänglig från wave 11.

### Bågskytt loot

Bågskytt kan få:

-   Arrows
-   Bow
-   Crossbow
-   stora Ammo Bundles
-   Spectral Arrows
-   Shield
-   Chainmail Armor

Bättre enchantments låses upp senare i eventet.

### Healer loot

Healer kan få:

-   Golden Carrots
-   Iron Sword
-   Diamond Sword
-   Healer Shield
-   Golden Apples
-   Chainmail Armor

### Summoner loot

Summoner kan få:

-   Arrows
-   Golden Apple
-   Quick Charge Crossbow
-   Iron Sword
-   Summoner Shield
-   Chainmail Armor

### Commander loot

Commander har en medvetet bättre rewardpool:

-   2 till 3 Golden Apples beroende på wave
-   Commander Shield
-   Diamond Commander Sword
-   Commander Crossbow med Quick Charge II
-   tung armorprogression upp till Diamond

Commander får dessutom minst contribution tier 4 när alternativen
skapas.

### Berserker loot

Berserker kan få:

-   extra mat
-   Diamond Berserker Axe
-   Golden Apple
-   Chainmail Armor

Från wave 10 kan Berserker Axe få Sharpness II.

# Lagets välsignelser

Efter wave **5, 10 och 15** får laget rösta om en gemensam buff.

Röstningen är öppen i **45 sekunder**. Om alla levande spelare röstar
kan den avslutas tidigare.

Flest röster vinner. Vid exakt lika resultat väljer Engine slumpmässigt
mellan de alternativ som delar förstaplatsen.

Efter röstningen öppnas det vanliga reward-GUI:t.

## Efter wave 5

**Krigets välsignelse**

+10 procent damage resten av eventet.

**Livets välsignelse**

+2 max hearts resten av eventet.

**Smedens välsignelse**

50 procent chans att förhindra durabilityförlust på utrustning under
eventet.

## Efter wave 10

**Stålsatt**

Resistance I resten av eventet.

**Vapensmedens gåva**

Uppgraderar lagets befintliga swords och axes med ytterligare Sharpness
och bows med ytterligare Power.

**Fältproviant**

Ger extra hunger och saturation efter varje klarad wave.

## Efter wave 15

**Berserk**

+20 procent damage och +10 procent attack speed resten av eventet.

**Andra andningen**

Efter varje klarad wave återställs 50 procent av spelarens saknade HP
samt full hunger och saturation.

**Sista rustningen**

+4 max hearts resten av eventet.

# Damage multipliers

Flera buffs kan kombineras multiplicativt.

Exempel på aktiva modifiers:

-   Krigets välsignelse, ×1,10
-   Berserk-välsignelsen, ×1,20
-   Berserker-klassen, ×1,35
-   Tank-klassen, ×0,70
-   aktivt Commander Stridshorn, ×1,20

Det gör att lagets klasskombinationer och välsignelser får stor
betydelse i sena waves.

# Healing och support-feedback

När en spelare får faktisk healing från en Healer visas mängden i
actionbaren.

Exempel:

``` text
❤ +4.0 hjärtan från Spelarnamn
```

Eventet mäter också Healerns totala faktiska healing. Overheal räknas
inte som utförd healing.

Summoners får på motsvarande sätt sin summons faktiska damage
registrerad på ägaren.

# Statistik efter eventet

När Survival avslutas publicerar Engine eventstatistik.

Topplistor visas för:

-   mest damage
-   flest kills
-   Summon damage, om någon sådan damage gjordes
-   mest healing, om healing registrerades

Därefter visas varje deltagares individuella rad med damage, kills och
eventuella supportvärden.

Detta gör att även spelare som inte har flest kills kan se sin faktiska
contribution.

# Permanenta rekord och leaderboards

Survival sparar både lagrekord och individuella kills i SQL.

## Lagrekord

Varje avslutat Survival sparar:

-   nådd wave
-   totalt antal kills
-   datum
-   deltagare

Lagrekord sorteras först på högsta wave, därefter flest kills och
därefter tidigaste datum vid lika resultat.

Det finns en spawn-leaderboard med id:

``` text
survival-record
```

## Flest Survival-mobs någonsin

Varje spelares kills läggs även till i en permanent all-time räknare.

Den används både till leaderboarden och som andra prioriteringsnivå vid
konkurrens om begränsade klasser.

Leaderboard-id:

``` text
survival-kills
```

Serveradministratör kan placera den med:

``` text
/gzleaderboard addhere survival-kills
```

# Eliminering

När en deltagare elimineras lämnar spelaren den aktiva gruppen.

Spelaren får då sin checkpoint-belöning från senaste klarade wave och
information om hur många mobs personen dödade.

Survival fortsätter så länge minst en deltagare fortfarande är aktiv.

Om inga deltagare återstår avslutas eventet som förlust.

Om laget klarar wave 20 avslutas eventet som seger.

# Väder och dagsljus

Survival-mobs och Summoner-mobs har ett särskilt skydd mot
`EntityCombustEvent` och ska därför inte brinna upp av solljus.

Den nuvarande schemaläggaren sätter samtidigt Survival-världen till dag
och **storm** medan det automatiska eventet körs och återställer
världens tidigare tid och väder efteråt.

Det betyder att solskyddet finns i moblogiken, men den schemalagda
eventmiljön använder fortfarande storm i den aktuella Engine-versionen.

# Admin

Survival har följande administrationskommandon:

``` text
/survival addspawn
/survival clearspawns
/survival start
/survival stop
/survival status
```

`addspawn` sparar platsen där administratören står som mobspawn för den
aktuella runtime-konfigurationen.

Det automatiska Survival-eventet använder spelspawn:

``` text
648 78 774
```

och två mobspawns:

``` text
648 74 810
648 74 794
```

Eventvärlden hämtas från `daily-survival.world`, med serverns vanliga
spawn-world som fallback.

# Kort sammanfattning

Survival är ett 20-wave lag-event där gruppen först väljer klasser och
därefter bygger sin styrka genom klasspecifik loot och gemensamma
välsignelser.

De begränsade klasserna fördelas först efter 45 sekunder enligt
**Patreon, historiska Survival-kills, valtid**.

Varje mobkill ger 5 000 Coins. Wave-belöningen är ett separat
checkpointvärde och når 1 000 000 Coins på wave 20.

Healer, Summoner och Commander har egna aktiva eller passiva
lagfunktioner. Tank och Berserker förändrar grundläggande HP och damage
kraftigt. Looten utvecklas under eventet och de sista wavesen är byggda
som eventets endgame.

Survival mäter dessutom damage, kills, healing och summon damage och
sparar permanenta lagrekord och individuella all-time kills.
