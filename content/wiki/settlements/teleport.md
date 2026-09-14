---
title: "Teleport"
description: "Så tar du dig mellan ditt settlement och serverns spawn."
category: "Settlements"
order: 5
version: "1.2"
updatedAt: "2026-09-14"
infoboxTitle: "Teleport"
infobox:
  till_spawn: "/spawn"
  hem: "Klockan på fontänen vid spawn"
  vildmark: "Random Teleporter i spawn"
---

## Teleport mellan settlement och spawn

På GameZone är teleportering mellan ditt settlement och serverns spawn medvetet enkel. Du kan inte använda `/spawn` var som helst i världen.

### Från ditt settlement till spawn

När du befinner dig **inne i ditt eget settlement** kan du skriva:

```text
/spawn
```

Du teleporteras då till serverns spawn.

> [!IMPORTANT]
> `/spawn` fungerar endast när du befinner dig inom ditt eget settlements område.

### Från spawn tillbaka till ditt settlement

När du befinner dig vid serverns spawn går du till **fontänen** och ringer i **klockan**.

Klockan teleporterar dig tillbaka till ditt settlement.

Om ditt settlement har satt en egen spawnpunkt med `/settlement setspawn` kommer du dit. Om ingen egen spawnpunkt har satts används settlementets vanliga centrum.


## Random Teleporter i spawn

I spawn finns nu en **Random Teleporter** för spelare som vill ut i vildmarken. Kliv in i vattnet i teleportern så söker servern efter en säker slumpmässig plats.

Teleportern väljer inte bara ett slumpmässigt block. Platsen måste:

- ligga inom world border
- vara torr och säker att stå på
- vara giltig enligt samma placeringsregler som används när ett nytt settlement skapas
- ligga inom serverns konfigurerade avstånd för vildmarksteleporten

När en plats hittats teleporteras spelaren dit. Random Teleporter **skapar inte ett settlement åt dig**, den tar dig bara till en lämplig plats i vildmarken.

> [!IMPORTANT]
> Har du inget settlement kan du inte använda `/spawn` ute i vildmarken, eftersom `/spawn` bara fungerar när du står inne i ditt eget settlement. För en helt ny spelare är Random Teleporter därför i praktiken en enkelresa tills ett settlement har skapats eller spelaren tar sig tillbaka på vanligt sätt.

## Kort sagt

- **Settlement → Spawn:** använd `/spawn` medan du är i ditt eget settlement.
- **Spawn → Settlement:** ring i klockan på fontänen vid spawn.
- **Spawn → Vildmark:** använd Random Teleporter i spawn.

Det här gör spawn till serverns naturliga knutpunkt samtidigt som resor ute i världen fortfarande behöver ske på vanligt sätt.

För längre resor på marken finns också **riksvägar**. Registrerade riksvägar ger **+100 % färdhastighet** på marken och med ridbara mounts, men ingen bonus med elytra. Vägarna visas även på BlueMap.

Läs hela guiden på sidan [Riksvägar](/wiki/settlements/riksvagar).

Läs mer om hur settlementets King väljer hemkomstplats på sidan [Settlement spawn](/wiki/settlements/settlement-spawn).
