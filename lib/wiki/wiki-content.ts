import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

export type WikiHeading = {
    id: string;
    title: string;
    level: 2 | 3;
};

export type WikiRelatedArticle = {
    category: string;
    article: string;
    title: string;
    description?: string;
};

export type WikiInfoboxItem = {
    label: string;
    value: string;
};

export type WikiArticleSummary = {
    title: string;
    description: string;
    category: string;
    categorySlug: string;
    articleSlug: string;
    order: number;
    version: string;
    engineVersion: string;
    updatedAt: string;
};

export type WikiCategory = {
    slug: string;
    title: string;
    description: string;
    order: number;
    icon: string;
    articles: WikiArticleSummary[];
};

export type WikiArticle = WikiArticleSummary & {
    readingTime: string;
    content: string;
    headings: WikiHeading[];
    relatedArticles: WikiRelatedArticle[];
    infoboxTitle: string;
    infobox: WikiInfoboxItem[];
};

export type WikiSearchEntry = {
    id: string;
    title: string;
    description: string;
    category: string;
    categorySlug: string;
    articleSlug: string;
    href: string;
    searchText: string;
};

const wikiContentDirectory = path.join(
    process.cwd(),
    "content",
    "wiki",
);

export function getWikiCategories(): WikiCategory[] {
    if (!fs.existsSync(wikiContentDirectory)) {
        return [];
    }

    return fs
        .readdirSync(wikiContentDirectory, {
            withFileTypes: true,
        })
        .filter((entry) => entry.isDirectory())
        .map((entry) => getWikiCategory(entry.name))
        .filter(
            (category): category is WikiCategory =>
                category !== null,
        )
        .sort(compareByOrderAndTitle);
}

export function getWikiCategory(
    categorySlug: string,
): WikiCategory | null {
    const categoryDirectory = path.join(
        wikiContentDirectory,
        categorySlug,
    );

    if (!fs.existsSync(categoryDirectory)) {
        return null;
    }

    const categoryMetadata = readCategoryMetadata(
        categoryDirectory,
    );

    const articles = fs
        .readdirSync(categoryDirectory, {
            withFileTypes: true,
        })
        .filter(
            (entry) =>
                entry.isFile() &&
                entry.name
                    .toLocaleLowerCase("sv-SE")
                    .endsWith(".md"),
        )
        .map((entry) => {
            const articleSlug = entry.name.replace(/\.md$/i, "");

            return getWikiArticleSummary(
                categorySlug,
                articleSlug,
            );
        })
        .filter(
            (
                article,
            ): article is WikiArticleSummary =>
                article !== null,
        )
        .sort(compareByOrderAndTitle);

    return {
        slug: categorySlug,
        title:
            categoryMetadata.title ??
            createTitleFromSlug(categorySlug),
        description: categoryMetadata.description ?? "",
        order: categoryMetadata.order ?? 999,
        icon: categoryMetadata.icon ?? categorySlug,
        articles,
    };
}

export function getWikiArticle(
    categorySlug: string,
    articleSlug: string,
): WikiArticle | null {
    const articlePath = getArticlePath(
        categorySlug,
        articleSlug,
    );

    if (!fs.existsSync(articlePath)) {
        return null;
    }

    const fileContent = fs.readFileSync(
        articlePath,
        "utf8",
    );

    const { data, content } = matter(fileContent);

    const title = String(
        data.title ?? createTitleFromSlug(articleSlug),
    );

    return {
        title,
        description: String(data.description ?? ""),
        category: String(
            data.category ??
            createTitleFromSlug(categorySlug),
        ),
        categorySlug,
        articleSlug,
        order: parseNumber(data.order, 999),
        version: String(data.version ?? "1.0"),
        engineVersion: String(
            data.engineVersion ?? "Foundation",
        ),
        updatedAt: String(data.updatedAt ?? ""),
        readingTime: calculateReadingTime(content),
        content,
        headings: extractHeadings(content),
        relatedArticles: parseRelatedArticles(
            data.relatedArticles,
        ),
        infoboxTitle: String(data.infoboxTitle ?? title),
        infobox: parseInfobox(data.infobox),
    };
}

export function getWikiArticleSummary(
    categorySlug: string,
    articleSlug: string,
): WikiArticleSummary | null {
    const articlePath = getArticlePath(
        categorySlug,
        articleSlug,
    );

    if (!fs.existsSync(articlePath)) {
        return null;
    }

    const fileContent = fs.readFileSync(
        articlePath,
        "utf8",
    );

    const { data } = matter(fileContent);

    return {
        title: String(
            data.title ?? createTitleFromSlug(articleSlug),
        ),
        description: String(data.description ?? ""),
        category: String(
            data.category ??
            createTitleFromSlug(categorySlug),
        ),
        categorySlug,
        articleSlug,
        order: parseNumber(data.order, 999),
        version: String(data.version ?? "1.0"),
        engineVersion: String(
            data.engineVersion ?? "Foundation",
        ),
        updatedAt: String(data.updatedAt ?? ""),
    };
}

export function getWikiSearchIndex(): WikiSearchEntry[] {
    return getWikiCategories().flatMap((category) =>
        category.articles.map((article) => {
            const completeArticle = getWikiArticle(
                category.slug,
                article.articleSlug,
            );

            const plainContent = completeArticle
                ? markdownToPlainText(completeArticle.content)
                : "";

            const infoboxContent = completeArticle
                ? completeArticle.infobox
                    .map(
                        (item) =>
                            `${item.label} ${item.value}`,
                    )
                    .join(" ")
                : "";

            return {
                id: `${category.slug}/${article.articleSlug}`,
                title: article.title,
                description: article.description,
                category: category.title,
                categorySlug: category.slug,
                articleSlug: article.articleSlug,
                href: `/wiki/${category.slug}/${article.articleSlug}`,
                searchText: normalizeSearchText(
                    [
                        article.title,
                        article.description,
                        category.title,
                        category.description,
                        plainContent,
                        infoboxContent,
                    ].join(" "),
                ),
            };
        }),
    );
}

export function getAllWikiArticlePaths() {
    return getWikiCategories().flatMap((category) =>
        category.articles.map((article) => ({
            category: category.slug,
            article: article.articleSlug,
        })),
    );
}

export function getAllWikiCategoryPaths() {
    return getWikiCategories().map((category) => ({
        category: category.slug,
    }));
}

export function getWikiArticleCount() {
    return getWikiCategories().reduce(
        (total, category) =>
            total + category.articles.length,
        0,
    );
}

function parseInfobox(value: unknown): WikiInfoboxItem[] {
    if (
        typeof value !== "object" ||
        value === null ||
        Array.isArray(value)
    ) {
        return [];
    }

    return Object.entries(value)
        .map(([rawLabel, rawValue]) => ({
            label: createInfoboxLabel(rawLabel),
            value: parseInfoboxValue(rawValue),
        }))
        .filter(
            (item) =>
                item.label.length > 0 &&
                item.value.length > 0,
        );
}

function parseInfoboxValue(value: unknown): string {
    if (
        typeof value === "string" ||
        typeof value === "number" ||
        typeof value === "boolean"
    ) {
        return String(value);
    }

    if (Array.isArray(value)) {
        return value
            .map(parseInfoboxValue)
            .filter(Boolean)
            .join(", ");
    }

    return "";
}

function createInfoboxLabel(key: string) {
    const spacedLabel = key
        .replace(/([a-zåäö])([A-ZÅÄÖ])/g, "$1 $2")
        .replace(/[-_]/g, " ")
        .trim();

    if (!spacedLabel) {
        return "";
    }

    return (
        spacedLabel
            .charAt(0)
            .toLocaleUpperCase("sv-SE") +
        spacedLabel.slice(1)
    );
}

function getArticlePath(
    categorySlug: string,
    articleSlug: string,
) {
    return path.join(
        wikiContentDirectory,
        categorySlug,
        `${articleSlug}.md`,
    );
}

function readCategoryMetadata(
    categoryDirectory: string,
): {
    title?: string;
    description?: string;
    order?: number;
    icon?: string;
} {
    const metadataPath = path.join(
        categoryDirectory,
        "_category.json",
    );

    if (!fs.existsSync(metadataPath)) {
        return {};
    }

    try {
        const rawMetadata = fs.readFileSync(
            metadataPath,
            "utf8",
        );

        const parsedMetadata = JSON.parse(
            rawMetadata,
        ) as Record<string, unknown>;

        return {
            title:
                typeof parsedMetadata.title === "string"
                    ? parsedMetadata.title
                    : undefined,

            description:
                typeof parsedMetadata.description === "string"
                    ? parsedMetadata.description
                    : undefined,

            order: parseOptionalNumber(
                parsedMetadata.order,
            ),

            icon:
                typeof parsedMetadata.icon === "string"
                    ? parsedMetadata.icon
                    : undefined,
        };
    } catch {
        throw new Error(
            `Ogiltig kategori-metadata i ${metadataPath}`,
        );
    }
}

function parseRelatedArticles(
    value: unknown,
): WikiRelatedArticle[] {
    if (!Array.isArray(value)) {
        return [];
    }

    return value
        .filter(
            (item): item is Record<string, unknown> =>
                typeof item === "object" &&
                item !== null,
        )
        .map((item) => ({
            category: String(item.category ?? ""),
            article: String(item.article ?? ""),
            title: String(item.title ?? ""),
            description:
                typeof item.description === "string"
                    ? item.description
                    : undefined,
        }))
        .filter(
            (item) =>
                item.category.length > 0 &&
                item.article.length > 0 &&
                item.title.length > 0,
        );
}

function extractHeadings(
    content: string,
): WikiHeading[] {
    const headings: WikiHeading[] = [];
    const headingPattern = /^(##|###)\s+(.+)$/gm;

    for (const match of content.matchAll(
        headingPattern,
    )) {
        const marker = match[1];
        const title = cleanMarkdownText(
            match[2].trim(),
        );

        headings.push({
            id: createHeadingId(title),
            title,
            level: marker === "##" ? 2 : 3,
        });
    }

    return headings;
}

function calculateReadingTime(content: string) {
    const cleanedContent = markdownToPlainText(content);

    const words = cleanedContent
        .trim()
        .split(/\s+/)
        .filter(Boolean).length;

    const minutes = Math.max(
        1,
        Math.ceil(words / 210),
    );

    return `${minutes} min läsning`;
}

function markdownToPlainText(content: string) {
    return content
        .replace(/---[\s\S]*?---/g, " ")
        .replace(/```[\s\S]*?```/g, " ")
        .replace(/!\[([^\]]*)\]\([^)]+\)/g, "$1")
        .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")
        .replace(/^\s*>?\s*\[![A-Z]+\]\s*/gim, " ")
        .replace(/<[^>]+>/g, " ")
        .replace(/[#>*_[\]()`~|-]/g, " ")
        .replace(/\s+/g, " ")
        .trim();
}

function normalizeSearchText(value: string) {
    return value
        .toLocaleLowerCase("sv-SE")
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/\s+/g, " ")
        .trim();
}

function cleanMarkdownText(value: string) {
    return value
        .replace(/\*\*(.*?)\*\*/g, "$1")
        .replace(/\*(.*?)\*/g, "$1")
        .replace(/`(.*?)`/g, "$1");
}

function createTitleFromSlug(slug: string) {
    const title = slug.replace(/-/g, " ");

    return (
        title
            .charAt(0)
            .toLocaleUpperCase("sv-SE") +
        title.slice(1)
    );
}

function parseNumber(
    value: unknown,
    fallback: number,
) {
    const parsedValue = Number(value);

    return Number.isFinite(parsedValue)
        ? parsedValue
        : fallback;
}

function parseOptionalNumber(value: unknown) {
    const parsedValue = Number(value);

    return Number.isFinite(parsedValue)
        ? parsedValue
        : undefined;
}

function compareByOrderAndTitle<
    T extends {
        order: number;
        title: string;
    },
>(first: T, second: T) {
    if (first.order !== second.order) {
        return first.order - second.order;
    }

    return first.title.localeCompare(
        second.title,
        "sv-SE",
    );
}

export function createHeadingId(title: string) {
    return title
        .toLocaleLowerCase("sv-SE")
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/[^a-z0-9åäö\s-]/g, "")
        .trim()
        .replace(/\s+/g, "-");
}