---
title: "Dungeons och Dungeon Credits"
description: "Starta eller anslut till en dungeon med en Dungeon Credit och lobbykod."
category: "Dungeons"
order: 1
updatedAt: "2026-11-23"
---

## Vad är en dungeon?

Dungeons är separata instanser som hanteras av **InstancedDungeons** tillsammans med GameZoneEngine. Vilka mallar som faktiskt går att spela beror på de definitioner som finns inlästa på servern. GameZone visar de upptäckta mallarna i sin meny, men InstancedDungeons avgör om en mall är spelbar.

## Starta en dungeon

1. Skaffa en **Dungeon Credit**. En sådan kan bland annat förekomma i den viktade belöningspoolen för `/daily`.
2. Öppna `/gzdungeon menu` eller prata med serverns Dungeon Master, om NPC:n är aktiverad.
3. Välj en tillgänglig dungeon. En lobby kostar **1 Dungeon Credit** för den som leder. Krediten dras först när instansen faktiskt startar.
4. Dela den **lobbykod** som InstancedDungeons visar med deltagarna.
5. Andra spelare ansluter med `/dg join <kod>` eller `/gzdungeon join <kod>`. Det kostar ingen egen credit att ansluta.
6. Lobbyledaren startar instansen med InstancedDungeons startkommando `/dg start`.

> [!IMPORTANT]
> GameZoneEngine begränsar vanligtvis varje spelare till **en genomförd omgång per dungeonmall och kalenderdag**. Det gäller både ledaren och deltagarna. OP kan administrera och återställa begränsningar. En misslyckad lobbyöppning ska inte förbruka krediten.

## Under äventyret

Du går in med din vanliga utrustning. Om du dör kan du förlora de föremål du bär. Förbered därför din utrustning innan du går in.

Det går inte för vanliga spelare att hoppa ut ur en pågående dungeon med `/dg exit`. **Endast OP kan avbryta en aktiv omgång**, så att spelare inte kan gå in, plundra och lämna före bossen.

Bossar kan ha förstärkt hälsa och en synlig hälsomätare. Det exakta innehållet och bossen beror på dungeonmallen och serverns konfiguration.

## Användbara kommandon

| Kommando | Funktion |
| --- | --- |
| `/gzdungeon menu` | Öppnar dungeonmenyn |
| `/gzdungeon join <kod>` | Gå med via lobbykod |
| `/dg join <kod>` | Gå med genom InstancedDungeons |
| `/gzdungeon status` | Visar vilka dungeons du spelat idag |
| `/gzdungeon leaderboard` | Statistik för dungeonkartor |
| `/gzdungeon clear` | Rensar gammalt GameZone-lobbyläge, inte aktiva omgångar |

### För administratörer

| Kommando | Funktion |
| --- | --- |
| `/gzdungeon reset` | Administrativ återställning, se hjälptext i spelet |
| `/gzdungeon abort <ledare>` | Avbryter pågående omgång som OP |
| `/gzdungeon spectate <ledare>` | Följ en aktiv omgång som OP |
| `/gzdungeon diagnose` | Diagnostik av mallar och världar |
| `/gzdungeon icon list` | Visa aktuella dungeonikoner |
| `/gzdungeon icon <dungeon> <material>` | Ändra ikon i menyn |
| `/gzdungeon icon <dungeon> reset` | Återställ ikon |

Dungeon Credits och GameZone-nycklar är **olika föremål**, de är inte utbytbara. Se även [Låsbara kistor och GameZone-nycklar](/wiki/dungeons/nyckelkistor).
