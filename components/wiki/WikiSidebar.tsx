import Link from "next/link";
import { getWikiCategories } from "@/lib/wiki/wiki-content";
import WikiIcon, { getCategoryIcon } from "./WikiIcon";
import styles from "./WikiSidebar.module.css";

type WikiSidebarProps = {
    activeCategorySlug?: string;
    activeArticleSlug?: string;
};

export default function WikiSidebar({
                                        activeCategorySlug,
                                        activeArticleSlug,
                                    }: WikiSidebarProps) {
    const categories = getWikiCategories();

    return (
        <aside className={styles.sidebar}>
            <div className={styles.topNavigation}>
                <Link
                    className={styles.gameZoneButton}
                    href="/"
                >
                    <span
                        className={styles.gameZoneButtonIcon}
                        aria-hidden="true"
                    >
                        <WikiIcon name="home" size={18} />
                    </span>

                    <span className={styles.gameZoneButtonText}>
                        <span aria-hidden="true">←</span>
                        Tillbaka till GameZone
                    </span>
                </Link>
            </div>

            <div className={styles.header}>
                <Link className={styles.brand} href="/wiki">
                    <span className={styles.brandIcon}>
                        <WikiIcon name="rules" size={20} />
                    </span>

                    <span>
                        <span className={styles.label}>
                            Knowledge Base
                        </span>

                        <strong>GameZone Wiki</strong>
                    </span>
                </Link>
            </div>

            <nav
                className={styles.navigation}
                aria-label="Wiki-innehåll"
            >
                <span className={styles.navigationTitle}>
                    Innehåll
                </span>

                {categories.map((category) => {
                    const isActiveCategory =
                        category.slug === activeCategorySlug;

                    return (
                        <div
                            className={styles.category}
                            key={category.slug}
                        >
                            <Link
                                className={`${styles.categoryLink} ${
                                    isActiveCategory
                                        ? styles.categoryLinkActive
                                        : ""
                                }`}
                                href={`/wiki/${category.slug}`}
                            >
                                <span className={styles.categoryIcon}>
                                    <WikiIcon
                                        name={getCategoryIcon(
                                            category.icon,
                                        )}
                                        size={17}
                                    />
                                </span>

                                <span className={styles.categoryName}>
                                    {category.title}
                                </span>

                                <span
                                    className={styles.chevron}
                                    aria-hidden="true"
                                >
                                    {isActiveCategory ? "−" : "+"}
                                </span>
                            </Link>

                            {isActiveCategory && (
                                <div className={styles.articleList}>
                                    {category.articles.map(
                                        (article) => {
                                            const isActiveArticle =
                                                article.articleSlug ===
                                                activeArticleSlug;

                                            return (
                                                <Link
                                                    className={`${styles.articleLink} ${
                                                        isActiveArticle
                                                            ? styles.articleLinkActive
                                                            : ""
                                                    }`}
                                                    href={`/wiki/${category.slug}/${article.articleSlug}`}
                                                    key={
                                                        article.articleSlug
                                                    }
                                                >
                                                    <span
                                                        className={
                                                            styles.articleMarker
                                                        }
                                                    />

                                                    <span>
                                                        {article.title}
                                                    </span>
                                                </Link>
                                            );
                                        },
                                    )}
                                </div>
                            )}
                        </div>
                    );
                })}
            </nav>

            <div className={styles.footer}>
                <span className={styles.status}>
                    <span className={styles.statusDot} />
                    Synkroniserad dokumentation
                </span>

                <p>Byggd för GameZone Engine</p>
            </div>
        </aside>
    );
}