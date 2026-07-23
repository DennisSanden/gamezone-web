"use client";

import Link from "next/link";
import {
    useEffect,
    useMemo,
    useRef,
    useState,
} from "react";
import type { WikiSearchEntry } from "@/lib/wiki/wiki-content";
import WikiIcon, {
    getCategoryIcon,
} from "./WikiIcon";
import styles from "./WikiSearch.module.css";

type WikiSearchProps = {
    entries: WikiSearchEntry[];
};

const maximumResults = 8;

export default function WikiSearch({
                                       entries,
                                   }: WikiSearchProps) {
    const [query, setQuery] = useState("");
    const [isOpen, setIsOpen] = useState(false);
    const [activeIndex, setActiveIndex] =
        useState(0);

    const searchContainerRef =
        useRef<HTMLDivElement>(null);

    const normalizedQuery =
        normalizeSearchText(query);

    const results = useMemo(() => {
        if (normalizedQuery.length < 2) {
            return [];
        }

        return entries
            .map((entry) => ({
                entry,
                score: calculateSearchScore(
                    entry,
                    normalizedQuery,
                ),
            }))
            .filter((result) => result.score > 0)
            .sort(
                (first, second) =>
                    second.score - first.score,
            )
            .slice(0, maximumResults)
            .map((result) => result.entry);
    }, [entries, normalizedQuery]);

    useEffect(() => {
        function closeOnOutsideClick(
            event: MouseEvent,
        ) {
            if (
                searchContainerRef.current &&
                !searchContainerRef.current.contains(
                    event.target as Node,
                )
            ) {
                setIsOpen(false);
            }
        }

        document.addEventListener(
            "mousedown",
            closeOnOutsideClick,
        );

        return () => {
            document.removeEventListener(
                "mousedown",
                closeOnOutsideClick,
            );
        };
    }, []);

    useEffect(() => {
        setActiveIndex(0);
    }, [normalizedQuery]);

    function handleKeyboard(
        event: React.KeyboardEvent<HTMLInputElement>,
    ) {
        if (!isOpen || results.length === 0) {
            return;
        }

        if (event.key === "ArrowDown") {
            event.preventDefault();

            setActiveIndex((currentIndex) =>
                currentIndex >= results.length - 1
                    ? 0
                    : currentIndex + 1,
            );
        }

        if (event.key === "ArrowUp") {
            event.preventDefault();

            setActiveIndex((currentIndex) =>
                currentIndex <= 0
                    ? results.length - 1
                    : currentIndex - 1,
            );
        }

        if (event.key === "Enter") {
            event.preventDefault();

            window.location.href =
                results[activeIndex].href;
        }

        if (event.key === "Escape") {
            setIsOpen(false);
        }
    }

    const shouldShowResults =
        isOpen && normalizedQuery.length >= 2;

    return (
        <div
            className={styles.container}
            ref={searchContainerRef}
        >
            <div className={styles.search}>
        <span
            className={styles.searchIcon}
            aria-hidden="true"
        >
          <WikiIcon name="search" size={19} />
        </span>

                <label
                    className={styles.visuallyHidden}
                    htmlFor="wiki-live-search"
                >
                    Sök i GameZone Wiki
                </label>

                <input
                    id="wiki-live-search"
                    className={styles.input}
                    type="search"
                    value={query}
                    placeholder="Sök efter regler, system eller guider..."
                    autoComplete="off"
                    onChange={(event) => {
                        setQuery(event.target.value);
                        setIsOpen(true);
                    }}
                    onFocus={() => setIsOpen(true)}
                    onKeyDown={handleKeyboard}
                />

                {query.length > 0 && (
                    <button
                        className={styles.clearButton}
                        type="button"
                        aria-label="Rensa sökningen"
                        onClick={() => {
                            setQuery("");
                            setIsOpen(false);
                        }}
                    >
                        ×
                    </button>
                )}

                <span className={styles.shortcut}>
          Ctrl K
        </span>
            </div>

            {shouldShowResults && (
                <div className={styles.results}>
                    <div className={styles.resultsHeader}>
                        <span>Sökresultat</span>
                        <span>{results.length} träffar</span>
                    </div>

                    {results.length > 0 ? (
                        <div className={styles.resultList}>
                            {results.map((entry, index) => (
                                <Link
                                    className={`${styles.result} ${
                                        index === activeIndex
                                            ? styles.resultActive
                                            : ""
                                    }`}
                                    href={entry.href}
                                    key={entry.id}
                                    onMouseEnter={() =>
                                        setActiveIndex(index)
                                    }
                                    onClick={() =>
                                        setIsOpen(false)
                                    }
                                >
                  <span
                      className={styles.resultIcon}
                  >
                    <WikiIcon
                        name={getCategoryIcon(
                            entry.categorySlug,
                        )}
                        size={18}
                    />
                  </span>

                                    <span
                                        className={styles.resultContent}
                                    >
                    <span
                        className={
                            styles.resultCategory
                        }
                    >
                      {entry.category}
                    </span>

                    <strong>{entry.title}</strong>

                                        {entry.description && (
                                            <span
                                                className={
                                                    styles.resultDescription
                                                }
                                            >
                        {entry.description}
                      </span>
                                        )}
                  </span>

                                    <span
                                        className={styles.resultArrow}
                                        aria-hidden="true"
                                    >
                    →
                  </span>
                                </Link>
                            ))}
                        </div>
                    ) : (
                        <div className={styles.empty}>
                            <WikiIcon name="info" size={21} />

                            <div>
                                <strong>Inga artiklar hittades</strong>
                                <span>
                  Prova ett annat ord eller en bredare
                  sökning.
                </span>
                            </div>
                        </div>
                    )}

                    <div className={styles.resultsFooter}>
                        <span>↑ ↓ Navigera</span>
                        <span>Enter Öppna</span>
                        <span>Esc Stäng</span>
                    </div>
                </div>
            )}
        </div>
    );
}

function calculateSearchScore(
    entry: WikiSearchEntry,
    query: string,
) {
    const normalizedTitle = normalizeSearchText(
        entry.title,
    );

    const normalizedDescription =
        normalizeSearchText(entry.description);

    const normalizedCategory =
        normalizeSearchText(entry.category);

    let score = 0;

    if (normalizedTitle === query) {
        score += 100;
    }

    if (normalizedTitle.startsWith(query)) {
        score += 70;
    }

    if (normalizedTitle.includes(query)) {
        score += 45;
    }

    if (normalizedCategory.includes(query)) {
        score += 25;
    }

    if (normalizedDescription.includes(query)) {
        score += 18;
    }

    if (entry.searchText.includes(query)) {
        score += 8;
    }

    const queryWords = query
        .split(" ")
        .filter(Boolean);

    const matchingWords = queryWords.filter(
        (word) => entry.searchText.includes(word),
    );

    score += matchingWords.length * 5;

    return score;
}

function normalizeSearchText(value: string) {
    return value
        .toLocaleLowerCase("sv-SE")
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/\s+/g, " ")
        .trim();
}