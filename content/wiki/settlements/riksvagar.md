---
title: "Riksvägar"
description: "Officiella vägar mellan settlements och Spawn som ger högre färdhastighet och visas på BlueMap."
category: "Settlements"
order: 6
version: "1.0"
engineVersion: "GameZoneEngine 1.0.0-RC1"
updatedAt: "2026-08-10"
infoboxTitle: "Riksvägar"
infobox:
  hastighetsbonus: "+100 %"
  minsta_bredd: "4 blocks"
  elytra: "Ingen bonus"
  karta: "Visas på BlueMap"
relatedArticles:
  - category: "settlements"
    article: "teleport"
    title: "Teleport"
    description: "Så fungerar resor mellan ditt settlement och Spawn."
---

## Vad är en riksväg?

En **riksväg** är en officiell väg som har registrerats av serverns admins. Riksvägar är till för resor mellan settlements och mellan Spawn och settlements.

När du färdas på en registrerad riksväg får du **+100 % färdhastighet**. Det motsvarar dubbla den normala hastigheten som riksvägssystemet utgår från.

Bonusen gäller färd på marken och ridbara mounts, till exempel hästar. **Elytra får aldrig riksvägsbonus**, även om du flyger längs eller ovanför en registrerad väg.

## När du kör på och av vägen

När du kommer in på en riksväg visas vägstatusen i din **actionbar** tillsammans med vägens namn.

När du lämnar riksvägen visas även detta i actionbar. Meddelandena visas bara när din vägstatus förändras, inte hela tiden medan du färdas på vägen.

## Regler för riksvägar

En officiell riksväg ska följa dessa regler:

- Vägen ska gå mellan två settlements, eller mellan Spawn och ett settlement.
- Vägen ska vara ordentligt byggd och den körbara delen ska vara minst **4 blocks bred** längs hela sträckan.
- Vägen ska vara sammanhängande och tydligt gå att följa.
- Vägen får svänga och följa terrängen. Broar och tunnlar är tillåtna.
- Broar och andra smalare passager ska fortfarande uppfylla breddkravet.
- En officiell förgrening ska leda vidare till ett settlement eller Spawn.
- Riksvägen ska vara framkomlig och får inte byggas med avsiktliga hinder som stoppar normal trafik.
- Riksvägar är offentlig infrastruktur och får användas av alla spelare.

> [!NOTE]
> Reglerna ovan är ett bygg- och administrationsregelverk. Systemet kräver inte tekniskt att vägens första eller sista punkt ligger i ett settlement. Admin ansvarar för att bara godkända sträckor registreras som riksvägar.

## Hur registreras en riksväg?

Riksvägar registreras av admins. Spelare behöver inte och kan inte själva markera en väg.

Admin markerar vägen med flera punkter. Varje rak sträcka går från en punkt till nästa, vilket gör att vägen kan följa kurvor, berg, broar och andra naturliga svängar.

```text
/road create <namn>
/road setpoint
/road setpoint
/road complete
```

Fler `/road setpoint` kan användas om vägen behöver fler svängar.

## BlueMap

Färdiga riksvägar visas på **BlueMap** som ett separat lager för riksvägar. Linjen följer de registrerade punkterna så att spelare kan se vägsträckningen på världskartan.

Det gör BlueMap till det enklaste sättet att planera längre resor och se hur serverns officiella vägnät hänger ihop.

## Riksväg eller teleport?

Teleport och riksvägar fyller olika funktioner.

`/spawn` används för att resa från ditt eget settlement till Spawn. Från Spawn kan kyrkklockan ta dig tillbaka till ditt settlement. Riksvägar används i stället när du vill resa fysiskt genom världen, till exempel mellan två settlements.

Läs mer på sidan [Teleport](/wiki/settlements/teleport).
