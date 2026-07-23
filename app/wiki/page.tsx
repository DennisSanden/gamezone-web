import type { CSSProperties } from "react";
import type { Metadata } from "next";
import Link from "next/link";
import WikiIcon, {
    getCategoryIcon,
} from "@/components/wiki/WikiIcon";
import WikiSearch from "@/components/wiki/WikiSearch";
import {
    getWikiArticleCount,
    getWikiCategories,
    getWikiSearchIndex,
} from "@/lib/wiki/wiki-content";
import styles from "./wiki.module.css";

export const metadata: Metadata = {
    title: "Wiki | GameZone",
    description:
        "GameZones officiella dokumentation för regler, system och spelvärld.",
};

const backButtonStyle: CSSProperties = {
    display: "inline-flex",
    alignItems: "center",
    gap: "9px",
    marginBottom: "24px",
    padding: "11px 15px",
    border: "1px solid rgba(164, 196, 152, 0.2)",
    borderRadius: "11px",
    background:
        "linear-gradient(145deg, rgba(47, 70, 48, 0.82), rgba(24, 38, 27, 0.9))",
    color: "#dce8d8",
    fontSize: "0.72rem",
    fontWeight: 800,
    lineHeight: 1.2,
    textDecoration: "none",
    boxShadow:
        "inset 0 1px 0 rgba(255, 255, 255, 0.04), 0 8px 22px rgba(0, 0, 0, 0.14)",
};

const backButtonIconStyle: CSSProperties = {
    display: "grid",
    width: "31px",
    height: "31px",
    flex: "0 0 auto",
    placeItems: "center",
    border: "1px solid rgba(181, 211, 170, 0.16)",
    borderRadius: "8px",
    background: "rgba(118, 157, 106, 0.13)",
    color: "#aac5a1",
};

export default function WikiPage() {
    const categories = getWikiCategories();
    const searchEntries = getWikiSearchIndex();
    const articleCount = getWikiArticleCount();

    return (
        <main className={styles.page}>
            <Link href="/" style={backButtonStyle}>
                <span
                    style={backButtonIconStyle}
                    aria-hidden="true"
                >
                    ←
                </span>

                <span>Tillbaka till GameZone</span>
            </Link>

            <section className={styles.hero}>
                <div className={styles.heroPattern} />
                <div className={styles.heroGlow} />

                <div className={styles.heroContent}>
                    <span className={styles.eyebrow}>
                        GameZone Knowledge Base
                    </span>

                    <h1>GameZone Wiki</h1>

                    <p>
                        Utforska GameZones regler, system och
                        spelvärld.
                    </p>

                    <div className={styles.searchContainer}>
                        <WikiSearch entries={searchEntries} />
                    </div>

                    <div className={styles.heroStats}>
                        <span>
                            <strong>{categories.length}</strong>
                            kategorier
                        </span>

                        <span className={styles.statSeparator} />

                        <span>
                            <strong>{articleCount}</strong>
                            artiklar
                        </span>
                    </div>
                </div>
            </section>

            <section className={styles.content}>
                <header className={styles.sectionHeader}>
                    <div>
                        <span className={styles.sectionLabel}>
                            Dokumentation
                        </span>

                        <h2>Utforska Wikin</h2>
                    </div>

                    <p>
                        Välj ett område för att öppna dess artiklar
                        och guider.
                    </p>
                </header>

                {categories.length > 0 ? (
                    <div className={styles.categoryGrid}>
                        {categories.map((category) => (
                            <Link
                                className={styles.categoryCard}
                                href={`/wiki/${category.slug}`}
                                key={category.slug}
                            >
                                <span
                                    className={styles.categoryIcon}
                                >
                                    <WikiIcon
                                        name={getCategoryIcon(
                                            category.icon,
                                        )}
                                        size={26}
                                    />
                                </span>

                                <div
                                    className={
                                        styles.categoryContent
                                    }
                                >
                                    <span
                                        className={
                                            styles.articleCount
                                        }
                                    >
                                        {category.articles.length}{" "}
                                        artiklar
                                    </span>

                                    <h3>{category.title}</h3>

                                    {category.description && (
                                        <p>
                                            {category.description}
                                        </p>
                                    )}
                                </div>

                                <span
                                    className={
                                        styles.categoryArrow
                                    }
                                    aria-hidden="true"
                                >
                                    →
                                </span>
                            </Link>
                        ))}
                    </div>
                ) : (
                    <div className={styles.emptyState}>
                        <WikiIcon name="info" size={25} />

                        <div>
                            <h2>
                                Inga Wiki-kategorier hittades
                            </h2>

                            <p>
                                Lägg till en kategori i
                                content/wiki för att komma igång.
                            </p>
                        </div>
                    </div>
                )}
            </section>
        </main>
    );
}