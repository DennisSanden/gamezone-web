"use client";

import { useState } from "react";
import styles from "@/app/leaderboards/page.module.css";

type LeaderboardCategory = "players" | "settlements" | "companies" | "server";

type BoardDefinition = {
    title: string;
    description: string;
    valueLabel: string;
    icon: string;
};

const categoryLabels: Record<LeaderboardCategory, string> = {
    players: "Spelare",
    settlements: "Settlements",
    companies: "Företag",
    server: "Server",
};

const categoryDescriptions: Record<LeaderboardCategory, string> = {
    players: "Spelarna som utmärker sig mest i ekonomi, aktivitet och prestation.",
    settlements: "Serverns rikaste, största och mest utvecklade samhällen.",
    companies: "Företagen som dominerar handel, försäljning och licensutveckling.",
    server: "Övergripande siffror som visar hur hela GameZone-världen utvecklas.",
};

const categoryIcons: Record<LeaderboardCategory, string> = {
    players: "⚔",
    settlements: "♜",
    companies: "◆",
    server: "◎",
};

const boards: Record<LeaderboardCategory, BoardDefinition[]> = {
    players: [
        { title: "Rikaste spelare", description: "Spelare med högst aktuellt coin-saldo.", valueLabel: "Coins", icon: "◉" },
        { title: "Mest producerat", description: "Högst total registrerad produktion.", valueLabel: "Produktion", icon: "⚒" },
        { title: "Mest spelad tid", description: "Spelare med flest aktiva timmar på servern.", valueLabel: "Tid", icon: "◷" },
        { title: "Flest kills", description: "Flest registrerade spelarkills.", valueLabel: "Kills", icon: "⚔" },
        { title: "Flest deaths", description: "Flest registrerade dödsfall.", valueLabel: "Deaths", icon: "☠" },
        { title: "Högst K/D", description: "Bästa förhållandet mellan kills och deaths.", valueLabel: "K/D", icon: "✦" },
        { title: "Flest företag skapade", description: "Antal företag spelaren har grundat.", valueLabel: "Företag", icon: "◆" },
        { title: "Flest settlements grundade", description: "Antal settlements spelaren har grundat.", valueLabel: "Settlements", icon: "♜" },
    ],
    settlements: [
        { title: "Rikaste settlement", description: "Högst aktuellt saldo i stadskassan.", valueLabel: "Coins", icon: "◉" },
        { title: "Flest invånare", description: "Settlements med störst aktiv befolkning.", valueLabel: "Invånare", icon: "♟" },
        { title: "Högst nivå", description: "Settlements som nått längst i utvecklingen.", valueLabel: "Nivå", icon: "▲" },
        { title: "Störst territorium", description: "Störst skyddat område baserat på aktuell nivå.", valueLabel: "Radie", icon: "◎" },
        { title: "Mest skatt insamlad", description: "Högst totalt inflöde till stadskassan.", valueLabel: "Coins", icon: "▣" },
    ],
    companies: [
        { title: "Rikaste företag", description: "Företag med högst aktuellt saldo.", valueLabel: "Coins", icon: "◉" },
        { title: "Mest försäljning", description: "Högst total försäljning genom GameZones handelssystem.", valueLabel: "Coins", icon: "↗" },
        { title: "Flest transaktioner", description: "Företag med flest slutförda köp.", valueLabel: "Köp", icon: "⇄" },
        { title: "Högsta licensnivå", description: "Företag med den mest utvecklade licensen.", valueLabel: "Licens", icon: "◆" },
    ],
    server: [
        { title: "Coin-ekonomi", description: "Totalt antal coins i spelarnas och organisationernas ekonomi.", valueLabel: "Coins", icon: "◉" },
        { title: "Aktiva settlements", description: "Antal settlements som finns på servern.", valueLabel: "Totalt", icon: "♜" },
        { title: "Aktiva företag", description: "Antal registrerade företag på servern.", valueLabel: "Totalt", icon: "◆" },
        { title: "Aktiva idag", description: "Unika spelare som varit online idag.", valueLabel: "Spelare", icon: "●" },
        { title: "Aktiva denna vecka", description: "Unika spelare som varit online de senaste sju dagarna.", valueLabel: "Spelare", icon: "▥" },
    ],
};

const overviewCards = [
    { label: "Rikaste spelare", value: "Inväntar data", icon: "◉" },
    { label: "Största settlement", value: "Inväntar data", icon: "♜" },
    { label: "Ledande företag", value: "Inväntar data", icon: "◆" },
    { label: "Aktiva denna vecka", value: "Inväntar data", icon: "●" },
];

function PlaceholderRows({ valueLabel }: { valueLabel: string }) {
    return (
        <ol className={styles.rankingList}>
            {[1, 2, 3, 4, 5].map((rank) => (
                <li key={rank} className={styles.rankingRow}>
                    <span className={`${styles.rank} ${rank <= 3 ? styles[`rank${rank}`] : ""}`}>
                        {rank <= 3 ? ["🥇", "🥈", "🥉"][rank - 1] : rank}
                    </span>

                    <div className={styles.playerPlaceholder}>
                        <span className={styles.avatarPlaceholder} />
                        <span className={styles.namePlaceholder}>Inväntar Engine API</span>
                    </div>

                    <div className={styles.valuePlaceholder}>
                        <strong>–</strong>
                        <small>{valueLabel}</small>
                    </div>
                </li>
            ))}
        </ol>
    );
}

export function LeaderboardDashboard() {
    const [activeCategory, setActiveCategory] = useState<LeaderboardCategory>("players");

    return (
        <div className={styles.dashboard}>
            <section className={styles.overviewGrid} aria-label="Översikt">
                {overviewCards.map((card) => (
                    <article key={card.label} className={styles.overviewCard}>
                        <span className={styles.overviewIcon}>{card.icon}</span>
                        <div>
                            <span>{card.label}</span>
                            <strong>{card.value}</strong>
                            <small>Uppdateras automatiskt senare</small>
                        </div>
                    </article>
                ))}
            </section>

            <div className={styles.categoryTabs} role="tablist" aria-label="Topplistor">
                {(Object.keys(categoryLabels) as LeaderboardCategory[]).map((category) => (
                    <button
                        key={category}
                        type="button"
                        role="tab"
                        aria-selected={activeCategory === category}
                        className={activeCategory === category ? styles.activeTab : styles.categoryTab}
                        onClick={() => setActiveCategory(category)}
                    >
                        <span>{categoryIcons[category]}</span>
                        {categoryLabels[category]}
                    </button>
                ))}
            </div>

            <section className={`${styles.categoryShowcase} ${styles[`showcase_${activeCategory}`]}`}>
                <div className={styles.categoryShowcaseShade} />
                <div className={styles.categoryShowcaseIcon}>{categoryIcons[activeCategory]}</div>
                <div className={styles.categoryShowcaseCopy}>
                    <span>Topplistor</span>
                    <h2>{categoryLabels[activeCategory]}</h2>
                    <p>{categoryDescriptions[activeCategory]}</p>
                </div>
            </section>

            <div className={styles.boardGrid}>
                {boards[activeCategory].map((board, index) => (
                    <article key={board.title} className={styles.boardCard}>
                        <header className={`${styles.boardHeader} ${styles[`boardVisual${(index % 4) + 1}`]}`}>
                            <span className={styles.boardIcon}>{board.icon}</span>
                            <div>
                                <h3>{board.title}</h3>
                                <p>{board.description}</p>
                            </div>
                            <span className={styles.apiBadge}>API</span>
                        </header>
                        <PlaceholderRows valueLabel={board.valueLabel} />
                    </article>
                ))}
            </div>

            <aside className={styles.apiNotice}>
                <span className={styles.noticeIcon}>i</span>
                <div>
                    <strong>Inga påhittade resultat</strong>
                    <p>
                        Sidan är visuellt färdigbyggd, men visar inte falska spelare eller värden.
                        När Engine HTTP API är klart ersätts platshållarna med riktig serverdata.
                    </p>
                </div>
            </aside>
        </div>
    );
}
