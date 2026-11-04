---
title: "Survival"
description: "Överlev 30 allt svårare PvE-waves tillsammans. Välj klass, bygg laget, uppgradera din utrustning och jaga Survival-rekord."
category: "Events"
order: 2
infoboxTitle: "Survival"
infobox:
  typ: "Kooperativt PvE-event"
  waves: "30"
  klassval: "Upp till 5 prioriteringar, 45 sekunder"
  mobkill: "Mynt till Survival-shoppen"
  slutbelöning: "Upp till 1 000 000 Coins"
relatedArticles:
  - category: "events"
    article: "events"
    title: "Events"
    description: "Så fungerar GameZones events och deltagande."
---

# Survival

**Survival** är GameZones stora kooperativa PvE-event. Alla deltagare spelar på samma sida och försöker tillsammans ta sig igenom **30 waves** som blir hårdare ju längre laget överlever.

Här finns ingen ensam vinnare. Ett bra Survival-lag behöver damage, tålighet, healing, summons och rätt buffs vid rätt tillfälle. Under eventet väljer du klass, förbättrar din utrustning mellan waves och röstar tillsammans med laget om permanenta välsignelser.

> [!IMPORTANT]
> Survival är ett lag-event. Målet är att få **hela gruppen** så långt som möjligt.

## Snabböversikt

| | |
| --- | --- |
| **Format** | Kooperativ PvE |
| **Längd** | 30 waves |
| **Klassval** | 5 prioriteringar under 45 sekunder |
| **Begränsade klasser** | Commander, Summoner, Necromancer, Resurrector, Juggernaut 1, Healer 2, Bowman 1/6 |
| **Mynt per kill** | Beror på mob och wave |
| **Maximal wave-belöning** | 1 000 000 Coins |
| **Lagbuffs** | Efter wave 5, 10 och 15 |
| **Statistik** | Damage, kills, healing och Summon damage |
| **Permanenta rekord** | Lagrekord och individuella mob-kills |

## Så börjar eventet

Anmälan öppnar före eventstart och servern påminner när starten närmar sig. Gå med med:

```text
/event join
```

När Survival börjar teleporteras deltagarna till arenan och **klassvalet öppnas i 45 sekunder**.

Klassmenyn hålls öppen under hela valperioden. Om du försöker stänga den öppnas den igen, så att ingen råkar missa sitt klassval genom att trycka Escape.

---

# Välj din klass

Du väljer inte bara en klass och hoppas på det bästa. I stället får du rangordna **upp till fem klasser**:

**Prio 1 → Prio 2 → Prio 3 → Prio 4 → Prio 5**

Dina klick läggs i den ordningen. Klickar du på en klass som redan finns i listan tas den bort och de lägre prioriteringarna flyttas upp.

När de 45 sekunderna är slut försöker Survival ge dig din högsta möjliga prioritet.

### Begränsade klasser

| Klass | Platser |
| --- | ---: |
| **Commander** | 1 |
| **Healer** | 2 |
| **Summoner** | 1 |
| **Necromancer** | 1 |
| **Resurrector** | 1 |
| **Juggernaut** | 1 |
| **Bowman** | 1 per påbörjade 6 deltagare |

Alla får välja dessa klasser i sin prioriteringslista. Platserna delas inte ut förrän klassvalet är avslutat.

Om flera spelare konkurrerar om samma begränsade klass gäller:

1. **Aktiv Patreon**
2. **Slumpad ordning mellan spelare med samma Patreonstatus**
3. **Dina återstående klassprioriteringar**

Patreon har förtur i tilldelningen. Mellan spelare med samma Patreonstatus används en slumpad ordning som bestäms vid klassvalet.

Om din Prio 1 är full försöker systemet med Prio 2, därefter Prio 3 och så vidare. Om ingen av dina valbara prioriteringar kan tilldelas finns **Soldier** som säker fallback.


---

# Klassnivåer och XP

Varje Survival-klass har en **egen permanent nivå från 1 till 5**. Du kan utveckla alla tio klasserna separat, och du behåller dina nivåer mellan event. Din vanliga Character Level och dina vanliga Coins påverkas inte.

Under Survival samlar du **klass-XP** på den klass du spelar. Progressionen sparas automatiskt. När du når en ny nivå blir dess bonus tillgänglig **nästa gång du spelar klassen**, så en pågående match ändrar inte balans mitt under en wave.

Skriv **`/survival levels`** för att öppna en översikt över alla klasser, deras nivåer, XP fram till nästa nivå och bonusar. Din aktuella nivå visas även i klassvalsmenyn.

## XP-krav

| Nivåövergång | XP som behövs | Totalt XP från level 1 |
| --- | ---: | ---: |
| Level 1 till 2 | 150 | 150 |
| Level 2 till 3 | 750 | 900 |
| Level 3 till 4 | 3 500 | 4 400 |
| Level 4 till 5 | **10 000** | **14 400** |

Alla nivåbonusar staplas på klassens ursprungliga egenskaper. Level 5 ger en exklusiv förmåga eller ett kraftfullt klassvapen.

## Bonusar per klass

| Klass | Level 2 | Level 3 | Level 4 | Level 5 |
| --- | --- | --- | --- | --- |
| **Soldier** | +5 % skada | 5 % mindre inkommande skada | +5 % max HP | **Soldier's Wrath**, Netherite Sword Sharpness V i shoppen |
| **Tank** | +5 % max HP | 5 % mindre skada | Sköldblockering läker 0,5 hjärta, max var 10:e sekund | **Provokation**, fiender inom 10 block fokuserar på dig i 8 sekunder |
| **Bowman** | +5 % bågskada | +10 % pilhastighet | 15 % chans att spara en pil | **Hawkeye Bow**, Power V och Punch I i shoppen |
| **Healer** | +10 % räckvidd för Healing Aura | +10 % läkande effekt från Healing Aura | Healing Totem läker 1 extra hjärta | **Global Health**, läker alla aktiva deltagare 2 hjärtan |
| **Summoner** | Summons +5 % skada | Summons +10 % max HP | Summons +10 % hastighet | **Pack Leader**, en extra Wolf från wave 9 |
| **Commander** | +5 % max HP | +5 % egen svärdskada | Stridshorn ger laget +10 % hastighet i 10 sekunder | **Rallying Cry**, stridshornet ger dessutom laget 15 % mindre skada i 10 sekunder |
| **Berserker** | +5 % skada | +5 % hastighet | Kill läker 0,5 hjärta, max var 6:e sekund | **Blood Rage**, under 35 % HP: +20 % skada och +10 % hastighet i 8 sekunder |
| **Necromancer** | Summons +5 % skada | Summons +10 % max HP | Summon-kill läker 0,5 hjärta, max var 8:e sekund | **Soul Reaper**, summon-kill ger alla egna summons +20 % skada i 5 sekunder |
| **Resurrector** | +5 % hastighet | Återupplivning tar 3,5 sekunder | +10 % max HP | **Master of Souls**, återupplivning tar 2,5 sekunder totalt |
| **Juggernaut** | +5 % max HP | Rörelsestraff minskar till 10 % | 5 % mindre skada | **Iron Fortress**, allierade inom 6 block tar 15 % mindre skada under Stålsätt |

## Level 5, så aktiverar du förmågorna

**Healers Global Health** används med den särskilda Nether Star som du får vid klassvalet. Högerklicka för att läka alla levande deltagare med upp till **2 hjärtan**, oavsett var de befinner sig i eventet. Förmågan är redo från wave 1 och kan användas **en gång var tredje wave**, exempelvis wave 1, 4 och 7. Nedslagna spelare måste fortfarande återupplivas av Resurrector.

**Tanks Provokation** aktiveras med en Bell som du får i startutrustningen. Högerklicka för att rikta fiendernas uppmärksamhet mot dig i **8 sekunder**. Även den kan användas en gång var tredje wave. Hunter Vexes behåller sitt särskilda målsystem.

**Soldier's Wrath** låses upp i Blacksmith på **wave 17 för 750 mynt**. **Hawkeye Bow** låses upp på **wave 16 för 650 mynt**. Vapnen kräver level 5 i rätt klass och måste köpas med matchens mynt.

**Commander** använder fortfarande sitt vanliga stridshorn. På level 4 och 5 förstärks dess lagbuffar automatiskt. **Berserker**, **Summoner**, **Necromancer** och **Juggernaut** får sina level 5-effekter automatiskt när villkoren uppfylls. Blood Rage kan utlösas högst en gång per wave. Necromancers Soul Reaper kan förnyas vid nya summon-kills, men skadan staplas inte.

> [!TIP]
> Resurrectors återupplivning på level 5 tar **2,5 sekunder totalt**, inte 3,5 minus ytterligare 1,5 sekunder.

---

# Klasser

## Soldier

**Soldier** är den balanserade närstridsklassen och ett stabilt val i alla delar av eventet.

**Startar med**
- Iron Sword
- Full Iron Armor

Soldier har normal HP och normal damage. Klassen har ingen spelargräns.

Looten fokuserar på bättre swords, shields och tung armor. Diamond Sword kan dyka upp från wave 4 och senare versioner kan få Sharpness II.

**Passar dig som:** vill stå i fronten utan att offra vare sig HP eller damage.

## Tank

**Tank** är byggd för att stå kvar när andra måste backa.

**Startar med**
- Stone Axe
- Shield
- Full Diamond Armor

Tank får **+75 % max-HP**, men gör **30 % mindre damage**.

Looten fokuserar på shields, axes, Golden Apples och tung armor. Diamond Axe låses upp senare och kan utvecklas med Sharpness II.

**Passar dig som:** vill hålla mobs upptagna och köpa tid åt resten av laget.

## Bowman

**Bowman** är lagets renodlade distansklass.

**Startar med**
- Unbreakable Bow med Power I
- 32 Arrows
- Stone Sword
- Full Leather Armor

Bowman har en betydligt större ammo-progression under eventet. Rewardpoolen innehåller bland annat vanliga pilar, stora Ammo Bundles, Spectral Arrows, bättre bows, crossbows, shields och lätt armor.

Ammo rewards skalar upp under eventet. Större bundles kan ge **48 till 80 pilar**, och senare kan Bowman få **24 Spectral Arrows** som ett eget val.

Crossbows kan utvecklas med bland annat Quick Charge och Piercing.

**Passar dig som:** vill göra säker damage på avstånd och kontrollera farliga mål.

## Healer

**Healer** håller laget vid liv och är begränsad till **max 2 spelare**.

**Startar med**
- Stone Sword
- Healing Totem
- Full Leather Armor

Healers har en **grön outline** så att laget snabbt kan hitta dem.

### Läkande aura

Healer har en passiv healing-aura inom **8 block**. Skadade lagkamrater i närheten läks kontinuerligt.

När du får healing visas både **att du blir läkt och hur mycket** direkt i actionbaren.

Healer får dessutom information om lagkamrater som faller till **40 % HP eller lägre**.

### Healing Totem

Högerklicka med Healing Totem för att läka spelare inom **10 block**.

- Allierade kan få upp till **4 hjärtan**
- Healern själv kan få upp till **2 hjärtan**
- Totemen förbrukas inte
- Den kan användas **en gång per wave**

När nästa wave börjar blir Healing Totem tillgänglig igen.

**Passar dig som:** gillar support och vill kunna rädda en wave när laget börjar falla isär.

## Summoner

**Summoner** slåss tillsammans med friendly summons och är begränsad till **max 1 spelare**.

**Startar med**
- Stone Sword
- Crossbow
- 16 Arrows
- Full Leather Armor

Summoners känns igen på sina allierade summons.

Varje wave får Summoner en ny summon-token:

| Waves | Summon |
| --- | --- |
| **1–3** | Bee |
| **4–8** | Wolf |
| **9–17** | Iron Golem |
| **18–30** | Iron Golem + 2 Wolves |

Summons söker själva efter Survival-mobs och är betydligt starkare än vanliga motsvarigheter. De får kraftigt förstärkt HP, extra attack och mer armor ju längre eventet går. HP-skalningen kan nå upp till **500 HP**.

Summoner har också fått en större ammo-pool. Vanliga arrow rewards kan ge **32 till 64 pilar**, och från senare waves kan **64 Summoner Ammo** dyka upp som ett separat rewardval.

All damage som dina summons gör registreras på dig som **Summon damage**.

**Passar dig som:** vill bidra med extra bodies på slagfältet och bygga upp en stark pet-armé genom eventet.

## Commander

**Commander** är lagets ledarklass. Det finns bara **1 Commander** per lag.

**Startar med**
- Iron Sword
- Stridshorn
- Full Iron Armor

Commander får **+20 % max-HP** och har en **blå outline**.

### Stridshorn

Högerklicka med Stridshornet för att ge hela laget:

**+20 % damage under den aktuella waven**

Alla levande deltagare får information om buffen i actionbaren när hornet används.

Stridshornet har en cooldown på **tre waves räknat från användningen**. Om hornet används på wave 2 kan det alltså användas igen på wave 5. Används det på wave 7 är nästa möjlighet wave 10.

Commander har dessutom en starkare lootpool än övriga klasser och behandlas alltid som minst högsta contribution tier när rewardalternativen skapas.

**Passar dig som:** vill tajma en kraftig lagbuff till de waves där gruppen behöver den som mest.

## Berserker

**Berserker** satsar allt på damage.

**Startar med**
- Iron Axe
- Full Leather Armor

Berserker har **30 % mindre max-HP**, men gör **+35 % damage**.

Klassen är obegränsad och lootpoolen fokuserar på offensiv melee-utrustning, axes, Golden Apples och lätt armor. Senare Berserker Axes kan få Sharpness II.

**Passar dig som:** hellre dödar hotet snabbt än står och tankar det.

---

# Waves och svårighetskurva

Survival består av **30 waves**. När en wave börjar visas den i bossbaren och deltagarna får tydlig information om vilken wave som är aktiv.

Var femte wave fungerar som en tydligare milstolpe. Samtidigt växer både fiendernas styrka och lagets möjligheter genom loot och välsignelser.

Healers får tillbaka sin Healing Totem-användning vid ny wave. Summoners får sin nya summon-token.

## Hur många mobs kommer?

Grundmängden påverkas både av aktuell wave och hur många spelare som deltar:

```text
4 + wave × 2 + ceil(antal spelare × 1,35)
```

Därefter justeras mängden beroende på vilken wave det är. Survival har en gräns på **50 mobs** i den normala wave-spawnen.

Svårigheten kommer alltså inte bara från fler mobs. Sena waves använder starkare kombinationer, mer HP, högre damage och farligare mobtyper.

## Om laget inte hinner rensa en wave

| Waves | Tid |
| --- | ---: |
| **1–5** | 75 sekunder |
| **6–10** | 90 sekunder |
| **11–15** | 105 sekunder |
| **16–29** | 135 sekunder |
| **30** | Ingen vanlig tidsgräns |

Om tiden tar slut kan nästa wave börja **även om fiender från den gamla waven fortfarande lever**.

De gamla mobsen försvinner inte. Ett lag som tappar tempo kan därför plötsligt behöva slåss mot flera waves samtidigt.

---

# Fienderna

Tidiga waves använder framför allt Zombies, Skeletons och Spiders. Därefter introduceras gradvis farligare fiender.

Pillagers börjar dyka upp från wave 6, Vindicators från wave 9 och senare blir Witches en större del av hotbilden.

Mobsen använder definierad Survival-utrustning. De ska inte slumpmässigt dyka upp med vanilla-enchantad utrustning som eventet inte har bestämt.

Skeletons använder bows, Pillagers crossbows och Vindicators Iron Axes. Sena waves kan ge vissa fiender förbättrad armor och definierade weapon enchants.

Survival-mobs brinner inte upp i solljus.

## Wave 18–20

Wave 18–20 är ett tufft steg på vägen mot slutstriden på wave 30.

### Wave 18
Laget möter blandade, farliga mobtyper, inklusive två Wardens.

### Wave 19
Svårigheten höjs och laget möter fyra Wardens.

### Wave 20
En stor milstolpe med sex Wardens. Därefter fortsätter Survival till wave 30 med nya kombinationer av farliga fiender och bossar.

---

# Loot mellan waves

Efter en klarad wave får varje överlevande spelare **tre konkreta rewardalternativ**.

Det finns inga hemliga "class rewards". Du ser vad du väljer innan du klickar.

Rewardpoolen anpassas efter din klass. En Bowman får exempelvis ranged weapons och ammo, Tank får tyngre defensiv utrustning och Summoner får utrustning som passar den klassens spelstil.

Menyn hålls kvar tills du gjort ditt rewardval.

## Din insats påverkar loot

Survival mäter din contribution under waven:

```text
score = damage + kills × 20
```

Din score jämförs med lagets genomsnitt. Högre contribution öppnar en större del av klassens rewardpool.

| Tier | Ungefärlig nivå |
| --- | --- |
| **0** | Ingen mätbar contribution |
| **1** | Under 55 % av lagets fair share |
| **2** | Minst 55 % |
| **3** | Minst 100 % |
| **4** | Minst 150 % |

Commander behandlas alltid som minst **tier 4**.

Systemet försöker också undvika att erbjuda uppenbara utrustningsnedgraderingar.

### Exempel på klassloot

**Soldier:** swords, shields och tung armor.

**Tank:** shields, axes, Golden Apples och tung armor.

**Bowman:** bows, crossbows, stora mängder arrows, Spectral Arrows, shields och lätt armor.

**Healer:** Golden Carrots, swords, Healer Shield, Golden Apples och lätt armor.

**Summoner:** stora mängder arrows, crossbow, Golden Apples, sword, Summoner Shield och lätt armor.

**Commander:** bättre Golden Apple rewards, Commander Shield, Diamond Sword, förbättrad Crossbow och tung armor.

**Berserker:** offensiva axes, mat, Golden Apples och lätt armor.

---

# Lagets välsignelser

Efter wave **5, 10 och 15** röstar laget om en gemensam permanent buff.

Röstningen är öppen i upp till **45 sekunder**. Om alla levande deltagare röstar kan resultatet avgöras tidigare. Vid lika resultat väljs en av de delade vinnarna slumpmässigt.

## Efter wave 5

### Krigets välsignelse
**+10 % damage** resten av eventet.

### Livets välsignelse
**+2 max hearts** resten av eventet.

### Smedens välsignelse
**50 % chans att förhindra durabilityförlust** på utrustning under eventet.

## Efter wave 10

### Stålsatt
**Resistance I** resten av eventet.

### Vapensmedens gåva
Uppgraderar lagets befintliga swords och axes med Sharpness och bows med Power.

### Fältproviant
Ger extra hunger och saturation efter varje klarad wave.

## Efter wave 15

### Berserk
**+20 % damage och +10 % attack speed** resten av eventet.

### Andra andningen
Efter varje klarad wave återställs **50 % av spelarens saknade HP**, plus full hunger och saturation.

### Sista rustningen
**+4 max hearts** resten av eventet.

> [!TIP]
> Buffar kan kombineras. Klassbonusar, välsignelser och Commanders Stridshorn kan därför göra mycket stor skillnad under de sista wavesen.

---

# Coins och belöningar

När laget besegrar mobs tjänar spelare **mynt** som används hos Blacksmith och Supplies. Beloppet varierar beroende på fiende och wave. Mynten gäller bara den aktuella matchen, och stödklasser kan också tjäna mynt genom sina insatser.

Separat från dessa mynt finns vanliga Coins som betalas ut via en wave-belöning. Den fungerar som en **checkpoint**, inte som en summa av alla tidigare waves.

Om du exempelvis klarar wave 10 är din checkpoint 187 500 Coins. Du får inte wave 1 + wave 2 + wave 3 och så vidare.

| Klarad wave | Checkpointbelöning |
| ---: | ---: |
| **1** | **25 000** |
| **5** | **62 500** |
| **10** | **187 500** |
| **15** | **312 500** |
| **20** | **500 000** |
| **25** | **750 000** |
| **30** | **1 000 000** |

Om du elimineras betalas värdet från din senaste klarade checkpoint ut. Mynt som tjänats under matchen växlas inte till vanliga Coins.

---

# Statistik och rekord

Survival följer mer än bara vem som landar sista slaget.

Efter eventet visas statistik för:

- **Damage**
- **Kills**
- **Healing**
- **Summon damage**

Det betyder att Healers och Summoners också får sin faktiska contribution synlig.

## Survival-rekord

Varje avslutat event kan registrera lagets:

- högsta nådda wave
- antal dödade mobs
- datum
- deltagare

Lagrekordet prioriterar först **högsta wave** och därefter **flest kills**.

## Flest mob-kills genom tiderna

Varje spelares Survival-kills sparas även som en permanent all-time statistik.

Den statistiken används till den individuella Survival-leaderboarden. Klassvalet avgörs dock av Patreonförtur och lottning, inte av tidigare kills.

Det finns alltså en extra anledning att fortsätta jaga kills även efter att du redan klarat Survival tidigare.

---

# När du elimineras

Dödligt damage eliminerar dig från den aktiva gruppen.

Din checkpoint-belöning baseras på den senaste wave som laget hann klara medan du fortfarande deltog. Survival fortsätter så länge minst en deltagare fortfarande är aktiv.

Om hela laget elimineras är eventet över.

Klarar gruppen **wave 30** har laget besegrat Survival.

---

# Bygg laget, inte bara din egen klass

Survival är som starkast när klasserna kompletterar varandra.

En Tank kan hålla fronten medan Bowman arbetar på avstånd. Healers kan hålla laget kvar i striden, Summoners fyller arenan med extra allierade och Commander kan spara Stridshornet till den wave där laget verkligen behöver 20 % extra damage. Berserkers kan samtidigt pressa upp lagets damage rejält, men behöver mer skydd eftersom deras HP är lägre.

Det är kombinationen av **klassval, loot, välsignelser och lagspel** som avgör hur långt gruppen kommer.

## Senare waves och bossar

Wave 15, 20, 25 och 30 är viktiga milstolpar. På wave 18, 19 och 20 möter laget två, fyra respektive sex Wardens. Efter wave 20 fortsätter nya bossar och fiendekombinationer, så spara resurser till den sista tredjedelen av eventet.
