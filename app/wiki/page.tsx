import type { Metadata } from "next";
import Link from "next/link";
import { MainLayout } from "@/components/layout/MainLayout";
import { PageContainer } from "@/components/layout/PageContainer";
import WikiIcon, { getCategoryIcon } from "@/components/wiki/WikiIcon";
import WikiSearch from "@/components/wiki/WikiSearch";
import {
    getWikiArticleCount,
    getWikiCategories,
    getWikiSearchIndex,
} from "@/lib/wiki/wiki-content";
import styles from "./wiki.module.css";

export const metadata: Metadata = {
    title: "Wiki | GameZone",
    description: "Guider till GameZones settlements, ekonomi, företag, allianser, krig och system.",
};

function findArticleHref(
    categories: ReturnType<typeof getWikiCategories>,
    articleSlugs: string[],
    categorySlugs: string[] = [],
) {
    for (const categorySlug of categorySlugs) {
        const category = categories.find((item) => item.slug === categorySlug);
        if (!category) continue;

        for (const articleSlug of articleSlugs) {
            const article = category.articles.find(
                (item) => item.articleSlug === articleSlug,
            );
            if (article) return `/wiki/${category.slug}/${article.articleSlug}`;
        }
    }

    for (const category of categories) {
        for (const articleSlug of articleSlugs) {
            const article = category.articles.find(
                (item) => item.articleSlug === articleSlug,
            );
            if (article) return `/wiki/${category.slug}/${article.articleSlug}`;
        }
    }

    return "/wiki";
}

export default function WikiPage() {
    const categories = getWikiCategories();
    const searchEntries = getWikiSearchIndex();
    const articleCount = getWikiArticleCount();

    const startLinks = [
        {
            step: "01",
            label: "Ny på servern",
            title: "Börja spela",
            description: "Whitelist, serveradress och dina första steg i världen.",
            href: "/kom-igang",
            action: "Öppna guiden",
        },
        {
            step: "02",
            label: "Bygg din stad",
            title: "Skapa ett settlement",
            description: "Se hur du grundar ett settlement, väljer kategori och skyddar mark.",
            href: findArticleHref(
                categories,
                ["skapa-ett-settlement", "skapa-settlement", "oversikt"],
                ["settlements"],
            ),
            action: "Läs guiden",
        },
        {
            step: "03",
            label: "Förstå ekonomin",
            title: "Coins och handel",
            description: "Lär dig hur Coins tjänas, används och beskattas på GameZone.",
            href: findArticleHref(
                categories,
                ["coins", "vad-ar-coins", "ekonomi", "server-tax"],
                ["economy", "ekonomi"],
            ),
            action: "Förstå Coins",
        },
    ];

    return (
        <MainLayout>
            <div className={styles.page}>
                <section className={styles.intro}>
                    <PageContainer>
                        <div className={styles.breadcrumbs}>
                            <Link href="/">GameZone</Link>
                            <span>/</span>
                            <span>Wiki</span>
                        </div>

                        <div className={styles.introGrid}>
                            <div className={styles.introCopy}>
                                <span className={styles.eyebrow}>Spelarguide</span>
                                <h1>Vad vill du lära dig?</h1>
                                <p>
                                    Börja med en guide nedan eller sök direkt efter ett
                                    system, kommando eller en regel.
                                </p>
                            </div>

                            <div className={styles.searchPanel}>
                                <span className={styles.searchLabel}>Sök i wikin</span>
                                <WikiSearch entries={searchEntries} />
                                <p>
                                    {articleCount} artiklar i {categories.length} områden
                                </p>
                            </div>
                        </div>
                    </PageContainer>
                </section>

                <PageContainer className={styles.content}>
                    <section className={styles.featuredSection}>
                        <Link
                            className={styles.featuredCard}
                            href="/wiki/settlements/settlement-upgrades"
                        >
                            <div className={styles.featuredIcon}>
                                <WikiIcon name="settlements" size={30} />
                            </div>

                            <div className={styles.featuredCopy}>
                                <span className={styles.featuredLabel}>Mest använda guiden</span>
                                <h2>Settlement Upgrade</h2>
                                <p>
                                    Alla nivåer, kostnader, material, byggnadskrav och
                                    fördelar samlade på en enda lång sida.
                                </p>
                            </div>

                            <span className={styles.featuredAction}>
                                Visa alla upgrades <span aria-hidden="true">→</span>
                            </span>
                        </Link>

                        <Link
                            className={styles.featuredCard}
                            href="/wiki/war/krigssystemet"
                        >
                            <div className={styles.featuredIcon}>
                                <WikiIcon name="war" size={30} />
                            </div>

                            <div className={styles.featuredCopy}>
                                <span className={styles.featuredLabel}>Nytt system</span>
                                <h2>Krig & Diplomati</h2>
                                <p>
                                    Allianser, krigssidor, gemensamma tickets, PvP,
                                    fred, kapitulation och krigsskadestånd förklarat.
                                </p>
                            </div>

                            <span className={styles.featuredAction}>
                                Läs krigsguiden <span aria-hidden="true">→</span>
                            </span>
                        </Link>
                    </section>

                    <section className={styles.startSection}>
                        <div className={styles.sectionHeading}>
                            <div>
                                <span className={styles.eyebrow}>Rekommenderad väg</span>
                                <h2>Börja här</h2>
                            </div>
                            <p>Tre tydliga steg för dig som inte vet var du ska klicka.</p>
                        </div>

                        <div className={styles.startGrid}>
                            {startLinks.map((item) => (
                                <Link className={styles.startCard} href={item.href} key={item.step}>
                                    <span className={styles.stepNumber}>{item.step}</span>
                                    <span className={styles.cardLabel}>{item.label}</span>
                                    <h3>{item.title}</h3>
                                    <p>{item.description}</p>
                                    <span className={styles.cardAction}>
                                        {item.action} <span aria-hidden="true">→</span>
                                    </span>
                                </Link>
                            ))}
                        </div>
                    </section>

                    <section className={styles.allSection}>
                        <div className={styles.sectionHeading}>
                            <div>
                                <span className={styles.eyebrow}>Alla guider</span>
                                <h2>Utforska efter område</h2>
                            </div>
                            <p>Vet du redan vad du söker kan du gå direkt till rätt område.</p>
                        </div>

                        {categories.length > 0 ? (
                            <div className={styles.categoryGrid}>
                                {categories.map((category) => (
                                    <Link
                                        className={styles.categoryCard}
                                        href={`/wiki/${category.slug}`}
                                        key={category.slug}
                                    >
                                        <span className={styles.categoryIcon}>
                                            <WikiIcon
                                                name={getCategoryIcon(category.icon)}
                                                size={23}
                                            />
                                        </span>
                                        <div>
                                            <h3>{category.title}</h3>
                                            {category.description && <p>{category.description}</p>}
                                            <span>{category.articles.length} artiklar</span>
                                        </div>
                                        <span className={styles.categoryArrow} aria-hidden="true">→</span>
                                    </Link>
                                ))}
                            </div>
                        ) : (
                            <div className={styles.emptyState}>
                                <WikiIcon name="info" size={24} />
                                <p>Inga wikiområden har publicerats ännu.</p>
                            </div>
                        )}
                    </section>
                </PageContainer>
            </div>
        </MainLayout>
    );
}
