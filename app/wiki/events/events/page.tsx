import type { Metadata } from "next";
import WikiArticle from "@/components/wiki/WikiArticle";
import WikiSidebar from "@/components/wiki/WikiSidebar";
import { MainLayout } from "@/components/layout/MainLayout";
import { getWikiArticle, type WikiArticle as WikiArticleData } from "@/lib/wiki/wiki-content";
import styles from "../../[category]/[article]/page.module.css";

export const metadata: Metadata = {
    title: "Events | GameZone Wiki",
    description: "Så fungerar GameZones events, eventområden, deltagande och särskilda eventregler.",
};

const fallbackArticle: WikiArticleData = {
    title: "Events",
    description: "Så fungerar GameZones events, eventområden, deltagande och särskilda eventregler.",
    category: "Events",
    categorySlug: "events",
    articleSlug: "events",
    order: 1,
    version: "1.0",
    engineVersion: "Event System",
    updatedAt: "2026-08-28",
    readingTime: "2 min",
    content: `## Vad är ett event?\n\n**Events** är tillfälliga aktiviteter som serverteamet kan starta för hela eller delar av servern. Det kan vara turneringar, tävlingar, PvP-event, specialmatcher eller andra aktiviteter.\n\nNär ett event är aktivt kan spelare ansluta med:\n\n\`\`\`text\n/event join\n\`\`\`\n\n## Eventområdet\n\nNär du går med flyttas du till eventområdet som serverteamet har förberett.\n\n> [!IMPORTANT]\n> Regler, PvP och vinstvillkor kan skilja sig mellan olika event. Följ alltid informationen som visas när eventet startar.\n\n## Inventarie och progression\n\nEvent kan använda ett separat inventoryupplägg. Död under ett aktivt event ska inte ge vanlig Coin-loss eller Character Level-loss.\n\n## PvP\n\nPvP styrs per event och kan vara av eller på beroende på aktiviteten.\n\n## Vinnare\n\nEventsystemet kan registrera vinnare så att resultat kan användas av andra GameZone-system och webben.`,
    headings: [
        { id: "vad-ar-ett-event", title: "Vad är ett event?", level: 2 },
        { id: "eventomradet", title: "Eventområdet", level: 2 },
        { id: "inventarie-och-progression", title: "Inventarie och progression", level: 2 },
        { id: "pvp", title: "PvP", level: 2 },
        { id: "vinnare", title: "Vinnare", level: 2 },
    ],
    relatedArticles: [
        {
            category: "experience",
            article: "dod-och-second-chance",
            title: "Död & Second Chance",
            description: "Hur vanlig död och progression fungerar utanför events.",
        },
        {
            category: "commands",
            article: "kommandon",
            title: "Kommandon",
            description: "Översikt över vanliga kommandon på GameZone.",
        },
    ],
    infoboxTitle: "Events",
    infobox: [
        { label: "Typ", value: "Serveraktiviteter" },
        { label: "Anslut", value: "/event join" },
        { label: "PvP", value: "Styrs per event" },
        { label: "Progression", value: "Skyddad under event" },
    ],
};

export default function EventsWikiPage() {
    const article = getWikiArticle("events", "events") ?? fallbackArticle;

    return (
        <MainLayout>
            <div className={styles.page}>
                <div className={styles.shell}>
                    <WikiSidebar
                        activeCategorySlug="events"
                        activeArticleSlug="events"
                    />
                    <WikiArticle article={article} />
                </div>
            </div>
        </MainLayout>
    );
}
