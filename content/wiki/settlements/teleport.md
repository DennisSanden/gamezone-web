---
title: "Teleport"
description: "Så tar du dig mellan ditt settlement och serverns spawn."
category: "Settlements"
order: 5
version: "1.0"
updatedAt: "2026-08-09"
infoboxTitle: "Teleport"
infobox:
  till_spawn: "/spawn"
  hem: "Klockan på kyrkan vid spawn"
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

När du befinner dig vid serverns spawn går du till **kyrkan** och ringer i **klockan**.

Klockan teleporterar dig tillbaka till ditt settlement.

Om ditt settlement har satt en egen spawnpunkt med `/settlement setspawn` kommer du dit. Om ingen egen spawnpunkt har satts används settlementets vanliga centrum.

## Kort sagt

- **Settlement → Spawn:** använd `/spawn` medan du är i ditt eget settlement.
- **Spawn → Settlement:** ring i klockan på kyrkan vid spawn.

Det här gör spawn till serverns naturliga knutpunkt samtidigt som resor ute i världen fortfarande behöver ske på vanligt sätt.

Läs mer om hur settlementets King väljer hemkomstplats på sidan [Settlement spawn](/wiki/settlements/settlement-spawn).
