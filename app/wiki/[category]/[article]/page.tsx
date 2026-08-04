import type { Metadata } from "next";
import { notFound } from "next/navigation";
import WikiArticle from "@/components/wiki/WikiArticle";
import WikiSidebar from "@/components/wiki/WikiSidebar";
import { MainLayout } from "@/components/layout/MainLayout";
import {
    getAllWikiArticlePaths,
    getWikiArticle,
} from "@/lib/wiki/wiki-content";
import styles from "./page.module.css";

type WikiArticlePageProps = {
    params: Promise<{
        category: string;
        article: string;
    }>;
};

export async function generateMetadata({
                                           params,
                                       }: WikiArticlePageProps): Promise<Metadata> {
    const { category, article } = await params;
    const wikiArticle = getWikiArticle(category, article);

    if (!wikiArticle) {
        return {
            title: "Artikeln hittades inte | GameZone Wiki",
        };
    }

    return {
        title: `${wikiArticle.title} | GameZone Wiki`,
        description: wikiArticle.description,
    };
}

export function generateStaticParams() {
    return getAllWikiArticlePaths();
}

export default async function WikiArticlePage({
                                                  params,
                                              }: WikiArticlePageProps) {
    const { category, article } = await params;
    const wikiArticle = getWikiArticle(category, article);

    if (!wikiArticle) {
        notFound();
    }

    return (
        <MainLayout>
        <div className={styles.page}>
            <div className={styles.shell}>
                <WikiSidebar
                    activeCategorySlug={category}
                    activeArticleSlug={article}
                />

                <WikiArticle article={wikiArticle} />
            </div>
        </div>
        </MainLayout>
    );
}