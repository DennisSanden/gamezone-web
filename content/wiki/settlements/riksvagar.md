---
title: "Riksvägar"
description: "Officiella vägar mellan settlements och Spawn som ger högre färdhastighet och visas på BlueMap."
category: "Settlements"
order: 9
version: "1.2"
engineVersion: "GameZoneEngine 1.0.0-RC1"
updatedAt: "2026-09-06"
infoboxTitle: "Riksvägar"
infobox:
  hastighet: "+100 %"
  bredd: "Minst 4 blocks"
  elytra: "Ingen bonus"
  karta: "Visas på BlueMap"
relatedArticles:
  - category: "buildings"
    article: "gatukontor"
    title: "Gatukontor"
    description: "Krävs för settlementets riksvägsanslutningsbelöning."
  - category: "settlements"
    article: "teleport"
    title: "Teleport"
    description: "Andra sätt att resa mellan Spawn och settlements."
---

## Vad är en riksväg?

En **riksväg** är en officiellt registrerad väg som har godkänts av serverns admins. Riksvägar används för resor mellan settlements och mellan Spawn och settlements.

När du färdas på en registrerad riksväg får du **+100 % färdhastighet**. Bonusen gäller färd på marken och ridbara mounts, till exempel hästar.

**Elytra får ingen riksvägsbonus**, även om du flyger längs eller ovanför en registrerad väg.

## När du kör på och av vägen

När du kommer in på en riksväg visas vägstatusen i din actionbar tillsammans med vägens namn. När du lämnar vägen visas även detta i actionbar.

Meddelandena visas bara när din vägstatus förändras, inte hela tiden medan du färdas på vägen.

## Regler för riksvägar

En officiell riksväg ska följa dessa regler:

- Vägen ska gå mellan två settlements, eller mellan Spawn och ett settlement.
- Den körbara delen ska vara minst **4 blocks bred** längs hela sträckan.
- Vägen ska vara sammanhängande och tydlig att följa.
- Vägen får svänga och följa terrängen. Broar och tunnlar är tillåtna.
- Broar och andra smalare passager ska fortfarande uppfylla breddkravet.
- En officiell förgrening ska leda vidare till ett settlement eller Spawn.
- Riksvägen ska vara framkomlig och får inte byggas med avsiktliga hinder som stoppar normal trafik.
- Riksvägar är offentlig infrastruktur och får användas av alla spelare.

> [!NOTE]
> Reglerna ovan är ett bygg- och administrationsregelverk. Admin ansvarar för att bara godkända sträckor registreras som riksvägar.

## Hur registreras en riksväg?

Riksvägar registreras av admins. Spelare behöver inte och kan inte själva markera en väg.

Admin markerar vägen med flera punkter. Varje rak sträcka går från en punkt till nästa, så vägen kan följa kurvor, berg, broar och andra naturliga svängar.

```text
/road create <namn>
/road setpoint
/road setpoint
/road complete
```

Fler `/road setpoint` kan användas om vägen behöver fler svängar.

## Gatukontor och anslutningsbelöning

För att ett settlement ska få sin officiella riksvägsanslutningsbonus måste det ha ett aktivt **Gatukontor**.

När en färdig riksväg för första gången ansluter settlementet till riksvägsnätet får settlementets stadskassa:

**5 000 000 Coins**

> [!IMPORTANT]
> Anslutningsbelöningen betalas bara ut en gång per settlement. Att bygga om vägen eller starta om servern skapar ingen ny belöning.

## BlueMap

Färdiga riksvägar visas på BlueMap som ett separat lager. Linjen följer de registrerade punkterna så att spelare kan se vägsträckningen på världskartan.

Det gör BlueMap till det enklaste sättet att planera längre resor och se hur serverns officiella vägnät hänger ihop.

## Riksväg eller teleport?

Teleport och riksvägar fyller olika funktioner.

`/spawn` används för att resa från ditt eget settlement till Spawn. Från Spawn kan klockan på fontänen ta dig tillbaka till ditt settlement.

Riksvägar används i stället när du vill resa fysiskt genom världen, till exempel mellan två settlements.
