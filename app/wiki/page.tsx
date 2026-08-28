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

    const recommendedLinks = [
        {
            title: "Kom igång",
            description: "För nya spelare som just har börjat.",
            href: "/kom-igang",
            icon: "start" as const,
        },
        {
            title: "Settlements",
            description: "Bygg, utveckla och styr ditt rike.",
            href: "/wiki/settlements",
            icon: "settlements" as const,
        },
        {
            title: "Företag & Ekonomi",
            description: "Skapa företag och bygg upp din ekonomi.",
            href: "/wiki/economy",
            icon: "economy" as const,
        },
        {
            title: "Reliker",
            description: "Upptäck, samla och använd reliker.",
            href: "/wiki/relics",
            icon: "relics" as const,
        },
        {
            title: "Bounties",
            description: "Se aktiva jakter och jaga efterlysta monster.",
            href: "/wiki/bounties/bounties",
            icon: "bounties" as const,
        },
        {
            title: "Events",
            description: "Turneringar, event och speciella aktiviteter.",
            href: "/wiki/events",
            icon: "experience" as const,
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


                    </section>

                    <section className={styles.recommendedSection}>
                        <span className={styles.eyebrow}>Rekommenderad väg</span>

                        <div className={styles.recommendedGrid}>
                            {recommendedLinks.map((item) => (
                                <Link
                                    className={styles.recommendedCard}
                                    href={item.href}
                                    key={item.title}
                                >
                                    <span className={styles.recommendedIcon}>
                                        <WikiIcon name={item.icon} size={24} />
                                    </span>
                                    <div>
                                        <h3>{item.title}</h3>
                                        <p>{item.description}</p>
                                    </div>
                                </Link>
                            ))}
                        </div>

                        <p className={styles.browseHint}>
                            Hittar du inte det du söker? Använd sökfältet ovan eller bläddra i{" "}
                            <a href="#alla-guider">alla kategorier</a>.
                        </p>
                    </section>

                    <section className={styles.allSection} id="alla-guider">
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
