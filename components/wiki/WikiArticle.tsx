import Link from "next/link";
import type { ReactNode } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeExternalLinks from "rehype-external-links";
import type { WikiArticle as WikiArticleData } from "@/lib/wiki/wiki-content";
import { createHeadingId } from "@/lib/wiki/wiki-content";
import {
    getWikiDefinitions,
    transformWikiLinks,
} from "@/lib/wiki/wiki-definitions";
import remarkWikiDefinitions from "@/lib/wiki/remark-wiki-definitions";
import SettlementBuildingsPanel from "./SettlementBuildingsPanel";
import BuildingRequirementsTable from "./BuildingRequirementsTable";
import SettlementInfoBox from "./SettlementInfoBox";
import SettlementUpgradePanel from "./SettlementUpgradePanel";
import {
    isSettlementBuildingGroup,
    type SettlementBuildingGroup,
} from "./settlement-buildings";
import {
    isBuildingRequirementKey,
    type BuildingRequirementKey,
} from "./building-requirements";
import {
    isSettlementLevelKey,
    type SettlementLevelKey,
} from "./settlement-levels";
import {
    isSettlementUpgradeKey,
    type SettlementUpgradeKey,
} from "./settlement-upgrades";
import WikiIcon, { getCategoryIcon } from "./WikiIcon";
import WikiImage from "./WikiImage";
import WikiInfobox from "./WikiInfobox";
import WikiTerm from "./WikiTerm";
import styles from "./WikiArticle.module.css";

type WikiArticleProps = {
    article: WikiArticleData;
};

type CalloutType =
    | "tip"
    | "important"
    | "warning"
    | "info";

type CalloutData = {
    type: CalloutType;
    title: string;
    content: string;
};

type ArticleContentPart =
    | {
    type: "markdown";
    content: string;
}
    | {
    type: "settlement-upgrade";
    upgradeKey: SettlementUpgradeKey;
}
    | {
    type: "settlement-buildings";
    group: SettlementBuildingGroup;
}
    | {
    type: "settlement-info";
    settlement: SettlementLevelKey;
}
    | {
    type: "building-requirements";
    building: BuildingRequirementKey;
};

const componentPattern =
    /<(SettlementUpgradePanel|SettlementBuildingsPanel|SettlementInfoBox|BuildingRequirementsTable)\s+(?:upgradeKey|group|settlement|building)=["']([a-z0-9-]+)["']\s*\/>/gi;

export default function WikiArticle({
                                        article,
                                    }: WikiArticleProps) {
    const definitions = getWikiDefinitions();

    const transformedContent = transformWikiLinks(
        article.content,
        definitions,
    );

    const contentParts =
        splitArticleContent(transformedContent);

    const settlementInfoPart = contentParts.find(
        (part): part is Extract<
            ArticleContentPart,
            { type: "settlement-info" }
        > => part.type === "settlement-info",
    );

    const hasInfobox =
        Boolean(settlementInfoPart) || article.infobox.length > 0;

    return (
        <div className={styles.layout}>
            <main className={styles.article}>
                <Link className={styles.homeButton} href="/">
                    <span aria-hidden="true">←</span>
                    <span>Tillbaka till GameZone</span>
                </Link>

                <nav
                    className={styles.breadcrumbs}
                    aria-label="Brödsmulor"
                >
                    <Link href="/wiki">Wiki</Link>
                    <span>/</span>

                    <Link
                        href={`/wiki/${article.categorySlug}`}
                    >
                        {article.category}
                    </Link>

                    <span>/</span>
                    <span>{article.title}</span>
                </nav>

                <header className={styles.hero}>
                    <div className={styles.heroPattern} />

                    <div className={styles.heroIcon}>
                        <WikiIcon
                            name={getCategoryIcon(
                                article.categorySlug,
                            )}
                            size={31}
                        />
                    </div>

                    <div className={styles.heroContent}>
                        <span className={styles.category}>
                            {article.category}
                        </span>

                        <h1>{article.title}</h1>

                        {article.description && (
                            <p className={styles.description}>
                                {article.description}
                            </p>
                        )}
                    </div>
                </header>

                <section className={styles.articleInformation}>
                    <div className={styles.informationItem}>
                        <span>Wiki-version</span>
                        <strong>{article.version}</strong>
                    </div>

                    <div className={styles.informationItem}>
                        <span>Engine-status</span>
                        <strong>{article.engineVersion}</strong>
                    </div>

                    <div className={styles.informationItem}>
                        <span>Lästid</span>
                        <strong>{article.readingTime}</strong>
                    </div>

                    {article.updatedAt && (
                        <div className={styles.informationItem}>
                            <span>Uppdaterad</span>

                            <strong>
                                {formatDate(article.updatedAt)}
                            </strong>
                        </div>
                    )}
                </section>

                {hasInfobox && (
                    <div className={styles.mobileInfobox}>
                        {settlementInfoPart ? (
                            <SettlementInfoBox
                                settlement={settlementInfoPart.settlement}
                            />
                        ) : (
                            <WikiInfobox
                                title={article.infoboxTitle}
                                category={article.category}
                                categorySlug={article.categorySlug}
                                items={article.infobox}
                            />
                        )}
                    </div>
                )}

                <article className={styles.markdown}>
                    {contentParts.map((part, index) => {
                        if (
                            part.type ===
                            "settlement-upgrade"
                        ) {
                            return (
                                <SettlementUpgradePanel
                                    upgradeKey={part.upgradeKey}
                                    key={`${part.upgradeKey}-${index}`}
                                />
                            );
                        }

                        if (
                            part.type ===
                            "settlement-buildings"
                        ) {
                            return (
                                <SettlementBuildingsPanel
                                    group={part.group}
                                    key={`${part.group}-${index}`}
                                />
                            );
                        }

                        if (part.type === "building-requirements") {
                            return (
                                <BuildingRequirementsTable
                                    building={part.building}
                                    key={`${part.building}-${index}`}
                                />
                            );
                        }

                        if (part.type === "settlement-info") {
                            return null;
                        }

                        return (
                            <MarkdownContent
                                content={part.content}
                                definitions={definitions}
                                key={`markdown-${index}`}
                            />
                        );
                    })}
                </article>

                {article.relatedArticles.length > 0 && (
                    <section className={styles.related}>
                        <div className={styles.relatedHeader}>
                            <span className={styles.sectionLabel}>
                                Fortsätt läsa
                            </span>

                            <h2>Relaterade artiklar</h2>
                        </div>

                        <div className={styles.relatedGrid}>
                            {article.relatedArticles.map(
                                (relatedArticle) => (
                                    <Link
                                        className={styles.relatedCard}
                                        href={`/wiki/${relatedArticle.category}/${relatedArticle.article}`}
                                        key={`${relatedArticle.category}/${relatedArticle.article}`}
                                    >
                                        <span
                                            className={
                                                styles.relatedIcon
                                            }
                                        >
                                            <WikiIcon
                                                name={getCategoryIcon(
                                                    relatedArticle.category,
                                                )}
                                                size={21}
                                            />
                                        </span>

                                        <div>
                                            <h3>
                                                {relatedArticle.title}
                                            </h3>

                                            {relatedArticle.description && (
                                                <p>
                                                    {
                                                        relatedArticle.description
                                                    }
                                                </p>
                                            )}
                                        </div>

                                        <span
                                            className={
                                                styles.relatedArrow
                                            }
                                            aria-hidden="true"
                                        >
                                            →
                                        </span>
                                    </Link>
                                ),
                            )}
                        </div>
                    </section>
                )}
            </main>

            <div className={styles.rightColumn}>
                {hasInfobox && (
                    <div className={styles.desktopInfobox}>
                        {settlementInfoPart ? (
                            <SettlementInfoBox
                                settlement={settlementInfoPart.settlement}
                            />
                        ) : (
                            <WikiInfobox
                                title={article.infoboxTitle}
                                category={article.category}
                                categorySlug={article.categorySlug}
                                items={article.infobox}
                            />
                        )}
                    </div>
                )}

                {article.headings.length > 0 && (
                    <aside className={styles.tableOfContents}>
                        <span className={styles.contentsLabel}>
                            Denna artikel
                        </span>

                        <nav aria-label="Artikelrubriker">
                            {article.headings.map((heading) => (
                                <a
                                    className={
                                        heading.level === 3
                                            ? styles.contentsSubLink
                                            : styles.contentsLink
                                    }
                                    href={`#${heading.id}`}
                                    key={heading.id}
                                >
                                    {heading.title}
                                </a>
                            ))}
                        </nav>

                        <div className={styles.contentsFooter}>
                            <WikiIcon name="info" size={16} />

                            <span>
                                Informationen följer GameZone Engine.
                            </span>
                        </div>
                    </aside>
                )}
            </div>
        </div>
    );
}

type MarkdownContentProps = {
    content: string;
    definitions: ReturnType<typeof getWikiDefinitions>;
};

function MarkdownContent({
                             content,
                             definitions,
                         }: MarkdownContentProps) {
    if (!content.trim()) {
        return null;
    }

    return (
        <ReactMarkdown
            remarkPlugins={[
                remarkGfm,
                [
                    remarkWikiDefinitions,
                    {
                        definitions,
                    },
                ],
            ]}
            rehypePlugins={[
                [
                    rehypeExternalLinks,
                    {
                        target: "_blank",
                        rel: ["noopener", "noreferrer"],
                    },
                ],
            ]}
            components={{
                h2: ({ children }) => {
                    const title = getTextContent(children);

                    return (
                        <h2 id={createHeadingId(title)}>
                            <span
                                className={styles.headingMarker}
                            />

                            {children}
                        </h2>
                    );
                },

                h3: ({ children }) => {
                    const title = getTextContent(children);

                    return (
                        <h3 id={createHeadingId(title)}>
                            {children}
                        </h3>
                    );
                },

                blockquote: ({ children }) => {
                    const callout = parseCallout(children);

                    if (!callout) {
                        return <blockquote>{children}</blockquote>;
                    }

                    const calloutClassName =
                        styles[
                            `callout${capitalize(
                                callout.type,
                            )}`
                            ];

                    return (
                        <aside
                            className={`${styles.callout} ${calloutClassName}`}
                        >
                            <div className={styles.calloutIcon}>
                                <WikiIcon
                                    name={callout.type}
                                    size={20}
                                />
                            </div>

                            <div className={styles.calloutContent}>
                                <strong>{callout.title}</strong>
                                <div>{callout.content}</div>
                            </div>
                        </aside>
                    );
                },

                img: ({ src, alt }) => {
                    if (
                        !src ||
                        typeof src !== "string"
                    ) {
                        return null;
                    }

                    return (
                        <WikiImage
                            src={src}
                            alt={alt ?? ""}
                        />
                    );
                },

                a: ({ href, children }) => {
                    const definitionKey =
                        getDefinitionKeyFromHref(href);

                    if (definitionKey) {
                        const definition =
                            definitions.find(
                                (candidate) =>
                                    candidate.key ===
                                    definitionKey,
                            );

                        if (definition) {
                            return (
                                <WikiTerm
                                    definition={definition}
                                    href={removeDefinitionMarker(
                                        href ??
                                        definition.href,
                                    )}
                                >
                                    {children}
                                </WikiTerm>
                            );
                        }
                    }

                    if (href?.startsWith("/")) {
                        return (
                            <Link href={href}>
                                {children}
                            </Link>
                        );
                    }

                    return <a href={href}>{children}</a>;
                },
            }}
        >
            {content}
        </ReactMarkdown>
    );
}

function splitArticleContent(
    content: string,
): ArticleContentPart[] {
    const parts: ArticleContentPart[] = [];
    let lastIndex = 0;

    componentPattern.lastIndex = 0;

    for (const match of content.matchAll(componentPattern)) {
        if (
            match.index === undefined ||
            !match[0] ||
            !match[1] ||
            !match[2]
        ) {
            continue;
        }

        const markdownBeforeMarker = content.slice(
            lastIndex,
            match.index,
        );

        if (markdownBeforeMarker.trim()) {
            parts.push({
                type: "markdown",
                content: markdownBeforeMarker,
            });
        }

        const componentName = match[1];
        const componentValue = match[2].toLowerCase();

        if (
            componentName === "SettlementUpgradePanel" &&
            isSettlementUpgradeKey(componentValue)
        ) {
            parts.push({
                type: "settlement-upgrade",
                upgradeKey: componentValue,
            });
        } else if (
            componentName === "SettlementBuildingsPanel" &&
            isSettlementBuildingGroup(componentValue)
        ) {
            parts.push({
                type: "settlement-buildings",
                group: componentValue,
            });
        } else if (
            componentName === "SettlementInfoBox" &&
            isSettlementLevelKey(componentValue)
        ) {
            parts.push({
                type: "settlement-info",
                settlement: componentValue,
            });
        } else if (
            componentName === "BuildingRequirementsTable" &&
            isBuildingRequirementKey(componentValue)
        ) {
            parts.push({
                type: "building-requirements",
                building: componentValue,
            });
        } else {
            parts.push({
                type: "markdown",
                content:
                    `> [!WARNING] Okänd wiki-komponent: ${componentName} (${componentValue})`,
            });
        }

        lastIndex = match.index + match[0].length;
    }

    const remainingMarkdown = content.slice(lastIndex);

    if (remainingMarkdown.trim()) {
        parts.push({
            type: "markdown",
            content: remainingMarkdown,
        });
    }

    return parts;
}

function getTextContent(value: ReactNode): string {
    if (
        typeof value === "string" ||
        typeof value === "number"
    ) {
        return String(value);
    }

    if (Array.isArray(value)) {
        return value.map(getTextContent).join("");
    }

    if (
        value &&
        typeof value === "object" &&
        "props" in value
    ) {
        const element =
            value as React.ReactElement<{
                children?: ReactNode;
            }>;

        return getTextContent(element.props.children);
    }

    return "";
}

function parseCallout(
    children: ReactNode,
): CalloutData | null {
    const rawText = getTextContent(children)
        .replace(/\r\n/g, "\n")
        .trim();

    const match = rawText.match(
        /^\s*\[!(TIP|IMPORTANT|WARNING|INFO|NOTE)\]\s*([\s\S]*)$/i,
    );

    if (!match) {
        return null;
    }

    const rawType = match[1].toLowerCase();
    const type = (rawType === "note" ? "info" : rawType) as CalloutType;

    const content = match[2].trim();

    const titles: Record<CalloutType, string> = {
        tip: "Tips",
        important: "Viktigt",
        warning: "Varning",
        info: "Information",
    };

    return {
        type,
        title: titles[type],
        content,
    };
}

function getDefinitionKeyFromHref(
    href?: string,
): string | null {
    if (!href) {
        return null;
    }

    try {
        const parsedUrl = new URL(
            href,
            "https://gamezoneminecraft.se",
        );

        return parsedUrl.searchParams.get(
            "wikiDefinition",
        );
    } catch {
        return null;
    }
}

function removeDefinitionMarker(href: string) {
    try {
        const parsedUrl = new URL(
            href,
            "https://gamezoneminecraft.se",
        );

        parsedUrl.searchParams.delete(
            "wikiDefinition",
        );

        const queryString =
            parsedUrl.searchParams.toString();

        return `${parsedUrl.pathname}${
            queryString ? `?${queryString}` : ""
        }${parsedUrl.hash}`;
    } catch {
        return href;
    }
}

function capitalize(value: string) {
    return (
        value.charAt(0).toUpperCase() +
        value.slice(1)
    );
}

function formatDate(date: string) {
    return new Intl.DateTimeFormat("sv-SE", {
        year: "numeric",
        month: "long",
        day: "numeric",
    }).format(new Date(`${date}T12:00:00`));
}