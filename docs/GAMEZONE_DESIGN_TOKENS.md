# GameZone Design Tokens

## Syfte
Detta dokument är den visuella sanningskällan för GameZone Web. Nya komponenter ska använda dessa tokens och får inte skapa lokala avvikelser utan arkitekturbeslut.

## Spacing
All spacing utgår från 8 px.

- 8 px, mycket tät intern spacing
- 16 px, standardgap och kortpadding
- 24 px, rymlig kortpadding
- 32 px, sektionsspacing
- 40 px, större layoutavstånd
- 48 px, stora sektioner
- 64 px, hero och huvudlayout

## Radier
- Small, 6 px, badges, knappar och små element
- Medium, 10 px, standardkort och paneler
- Large, 16 px, större fristående ytor

## Borders
Standardkort använder 1 px vit kant med låg opacitet. Grön kant används endast vid fokus, hover eller aktiv status.

## Skuggor
- Small, låg elevation för små kontroller
- Medium, hover och upphöjda paneler

Skuggor ska vara mörka och diskreta. Gröna glow-effekter reserveras för status, live och aktiva system.

## Typografi
- Rubriker, hög vikt, kompakt radavstånd
- Brödtext, hög läsbarhet och dämpad kontrast
- Eyebrows och metadata, versaler och ökad teckenbredd
- Startsidan ska prioritera korta texter framför förklarande stycken

## Bilder
- En huvudbild får inte återanvändas i flera startsidessektioner
- Hero, världsvy
- Wiki, kunskapsmiljö
- Leaderboards, elit eller prestation
- Live, Twitch-thumbnails
- Settlements, stadsmiljö
- Companies, handel eller produktion

Alla previewbilder ska använda konsekvent overlay, beskärning och hover.

## Rörelse
- Fast, 160 ms, färg, kant och små interaktioner
- Medium, 260 ms, bildzoom och större visuella övergångar
- Förflyttning ska normalt begränsas till 1 till 2 px

## Startsida
På 1920 × 1080 vid 100 procent zoom ska startsidan fungera som en kompakt dashboard utan onödig vertikal scroll.

Wiki och Leaderboards är teasers. Live får större visuell vikt. Startsidan visar GameZone, den försöker inte ersätta undersidorna.

## Design Pass 2, premium finish

- Premium effects may improve depth, contrast and focus, but may not change the established dashboard layout.
- Default card shadow: `0 12px 30px rgb(0 0 0 / 16%)` with a very subtle inset highlight.
- Hover elevation: maximum `translateY(-2px)`.
- Hover border: GameZone green at approximately 50 percent opacity.
- Hero imagery uses restrained saturation and a left-to-right readability gradient.
- Live indicators may pulse subtly, and must respect `prefers-reduced-motion`.
- Motion must never be required to understand content.
