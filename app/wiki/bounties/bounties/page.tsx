import type { Metadata } from "next";
import WikiArticle from "@/components/wiki/WikiArticle";
import WikiSidebar from "@/components/wiki/WikiSidebar";
import { MainLayout } from "@/components/layout/MainLayout";
import { getWikiArticle, type WikiArticle as WikiArticleData } from "@/lib/wiki/wiki-content";
import styles from "../../[category]/[article]/page.module.css";

export const metadata: Metadata = {
    title: "Bounties | GameZone Wiki",
    description: "Jaga efterlysta monster i Skenien och inkassera Coin-belöningen när rätt varelse besegras.",
};

const fallbackArticle: WikiArticleData = {
    title: "Bounties",
    description: "Jaga efterlysta monster i Skenien och inkassera Coin-belöningen när rätt varelse besegras.",
    category: "Bounties",
    categorySlug: "bounties",
    articleSlug: "bounties",
    order: 1,
    version: "1.0",
    engineVersion: "Bounty System 1.0",
    updatedAt: "2026-08-28",
    readingTime: "2 min",
    content: `## Aktiva bounties

Bounties är **specifika efterlysta varelser** ute i Skenien. En bounty gäller inte alla mobs av samma typ. Om exempelvis en Warden vid namn **Gorgash** är efterlyst måste just Gorgash besegras för att belöningen ska betalas ut.

<ActiveBountiesPanel panel="active" />

## Så fungerar jakten

När en bounty publiceras annonseras den på servern och registreras i **Chronicles**. Bountyn får ett namn, en Coin-belöning och kan även ha en offentlig ledtråd som hjälper spelarna att hitta målet.

Bounty-varelsen har sitt namn i **rött ovanför huvudet** när bountyn är aktiv. Det gör att du kan skilja den riktiga bounty-targeten från vanliga mobs av samma typ.

> [!IMPORTANT]
> Det räcker inte att döda samma mobtyp. Bounty-systemet följer den exakta varelsen som bountyn publicerades på.

## Kommandon för spelare

Använd \`/bounty\` eller \`/bounty list\` för att se aktiva bounties på servern.

Använd \`/bounty info <namn>\` för mer information om en specifik bounty.

## Belöning

När bounty-targeten besegras av en spelare betalas den publicerade Coin-belöningen automatiskt ut till spelaren som tog killen.

Servern annonserar att bountyn har inkasserats och händelsen sparas i Chronicles.

## Tidsgräns

En bounty kan ha en bestämd giltighetstid eller sakna tidsgräns helt. Om tiden löper ut innan varelsen besegras kan belöningen inte längre inkasseras.

## Monsterjägare

Varje inkasserad bounty räknas till spelarens placering på leaderboarden **Monsterjägare**. Antal inkasserade bounties avgör placeringen. Om två spelare har lika många används den totala summan intjänade bounty-Coins som tie breaker.`,
    headings: [
        { id: "aktiva-bounties", title: "Aktiva bounties", level: 2 },
        { id: "sa-fungerar-jakten", title: "Så fungerar jakten", level: 2 },
        { id: "kommandon-for-spelare", title: "Kommandon för spelare", level: 2 },
        { id: "beloning", title: "Belöning", level: 2 },
        { id: "tidsgrans", title: "Tidsgräns", level: 2 },
        { id: "monsterjagare", title: "Monsterjägare", level: 2 },
    ],
    relatedArticles: [
        {
            category: "bounties",
            article: "monsterjagare",
            title: "Monsterjägare",
            description: "Så fungerar leaderboarden för inkasserade bounties.",
        },
        {
            category: "economy",
            article: "coins",
            title: "Coins",
            description: "GameZones valuta och ekonomisystem.",
        },
    ],
    infoboxTitle: "Bounties",
    infobox: [
        { label: "Typ", value: "PvE-jakt" },
        { label: "Belöning", value: "Coins" },
        { label: "Mål", value: "Unik entity" },
        { label: "Leaderboard", value: "Monsterjägare" },
    ],
};

export default function BountiesWikiPage() {
    const article = getWikiArticle("bounties", "bounties") ?? fallbackArticle;

    return (
        <MainLayout>
            <div className={styles.page}>
                <div className={styles.shell}>
                    <WikiSidebar
                        activeCategorySlug="bounties"
                        activeArticleSlug="bounties"
                    />
                    <WikiArticle article={article} />
                </div>
            </div>
        </MainLayout>
    );
}
