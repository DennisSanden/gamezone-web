---
title: "Låsbara kistor och GameZone-nycklar"
description: "Så hittar och använder du universella GameZone-nycklar."
category: "Dungeons"
order: 3
updatedAt: "2026-11-23"
---

## Två olika saker: GameZone-nyckel och Dungeon Credit

**GameZone-nyckeln** är en särskild nyckel som kan öppna serverns nyckellåsta kistor eller tunnor. **Dungeon Credit** används i stället för att starta en dungeonlobby. De går inte att använda i varandras system.

## Hitta GameZone-nycklar

- `/daily` har en **viktad chans** att ge en GameZone-nyckel som dagens slumpföremål. Den är inte garanterad.
- Fiskare som lyckas fånga fisk kan ha chans per giltig fångst att hitta en nyckel, om de tillhör ett settlement med kategorin **Fiske**.
- Spelare som föder upp djur kan ha chans per giltig avelshändelse om de tillhör ett settlement med kategorin **Boskap**.

- Skogsbrukare kan hitta en nyckel vid giltig återplantering.
- Hela partyt kan få varsin nyckel när en dungeon klaras.

Nycklar är särskilda signerade föremål, inte vanliga omdöpta tripwire hooks. Du kan inte tillverka en giltig GameZone-nyckel med ett städ.

## Öppna en låst kista

1. Hitta en kista eller tunna som kräver GameZone-nyckel. Låsta behållare visar partiklar.
2. Ha en giltig **GameZone-nyckel** i ditt inventory.
3. Högerklicka. En nyckel förbrukas när behållaren låses upp, och ett ljud spelas lokalt.
4. När låset väl är öppnat **låses det inte igen** bara för att du stänger inventoryt.
5. Den spelare som låst upp behållaren har **10 sekunders exklusiv åtkomst**. Därefter kan även andra ta kvarvarande föremål.
6. När den upplåsta behållaren är helt tömd tas den bort automatiskt.

> [!IMPORTANT]
> Det här är **nyckellåsta lootkistor**. De ska inte förväxlas med vanliga settlementkistlås eller företagens shoppingkistor, som har helt andra regler.

## Adminfunktioner

Endast spelare med administratörsbehörighet för nyckelsystemet kan låsa och hantera kistor:

| Kommando | Funktion |
| --- | --- |
| `/nyckel give <spelare> [antal]` | Ger signerade universella nycklar, 1 till 64 |
| `/nyckel lock` | Lås kistan eller tunnan som du tittar på |
| `/nyckel unlock` | Ta bort ett befintligt lås |
| `/nyckel info` | Kontrollera om en behållare kräver nyckel |

`/nyckel lock` fungerar på **enkelkistor och tunnor**, inte dubbelkistor. Sikta på behållaren inom sex block. Låsta behållare skyddas även mot vanliga explosions- och kolvförflyttningar.
