import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import WikiSidebar from "@/components/wiki/WikiSidebar";
import WikiIcon, {
    getCategoryIcon,
} from "@/components/wiki/WikiIcon";
import {
    getAllWikiCategoryPaths,
    getWikiCategory,
} from "@/lib/wiki/wiki-content";
import styles from "./page.module.css";

type WikiCategoryPageProps = {
    params: Promise<{
        category: string;
    }>;
};

export async function generateMetadata({
                                           params,
                                       }: WikiCategoryPageProps): Promise<Metadata> {
    const { category } = await params;
    const wikiCategory = getWikiCategory(category);

    if (!wikiCategory) {
        return {
            title: "Kategorin hittades inte | GameZone Wiki",
        };
    }

    return {
        title: `${wikiCategory.title} | GameZone Wiki`,
        description: wikiCategory.description,
    };
}

export function generateStaticParams() {
    return getAllWikiCategoryPaths();
}

export default async function WikiCategoryPage({
                                                   params,
                                               }: WikiCategoryPageProps) {
    const { category } = await params;
    const wikiCategory = getWikiCategory(category);

    if (!wikiCategory) {
        notFound();
    }

    return (
        <main className={styles.page}>
            <div className={styles.shell}>
                <WikiSidebar activeCategorySlug={category} />

                <section className={styles.content}>
                    <nav
                        className={styles.breadcrumbs}
                        aria-label="Brödsmulor"
                    >
                        <Link href="/wiki">Wiki</Link>
                        <span>/</span>
                        <span>{wikiCategory.title}</span>
                    </nav>

                    <header className={styles.hero}>
                        <div className={styles.heroPattern} />

                        <span className={styles.heroIcon}>
              <WikiIcon
                  name={getCategoryIcon(wikiCategory.icon)}
                  size={32}
              />
            </span>

                        <div>
              <span className={styles.eyebrow}>
                Wiki-kategori
              </span>

                            <h1>{wikiCategory.title}</h1>

                            {wikiCategory.description && (
                                <p>{wikiCategory.description}</p>
                            )}
                        </div>
                    </header>

                    <section className={styles.articles}>
                        <div className={styles.sectionHeader}>
                            <div>
                <span className={styles.eyebrow}>
                  Dokumentation
                </span>
                                <h2>Artiklar</h2>
                            </div>

                            <span className={styles.articleCount}>
                {wikiCategory.articles.length} artiklar
              </span>
                        </div>

                        <div className={styles.articleGrid}>
                            {wikiCategory.articles.map(
                                (article, index) => (
                                    <Link
                                        className={styles.articleCard}
                                        href={`/wiki/${wikiCategory.slug}/${article.articleSlug}`}
                                        key={article.articleSlug}
                                    >
                    <span className={styles.articleNumber}>
                      {String(index + 1).padStart(2, "0")}
                    </span>

                                        <div>
                                            <h3>{article.title}</h3>

                                            {article.description && (
                                                <p>{article.description}</p>
                                            )}
                                        </div>

                                        <span
                                            className={styles.articleArrow}
                                            aria-hidden="true"
                                        >
                      →
                    </span>
                                    </Link>
                                ),
                            )}
                        </div>
                    </section>
                </section>
            </div>
        </main>
    );
}