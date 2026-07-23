import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { PageContainer } from "./PageContainer";
import styles from "./MainLayout.module.css";

type MainLayoutProps = {
    children: ReactNode;
};

const navigationItems = [
    { label: "Hem", href: "/" },
    { label: "Wiki", href: "/wiki" },
    { label: "Leaderboards", href: "/leaderboards" },
    { label: "Karta", href: "/map" },
    { label: "Settlements", href: "/settlements" },
    { label: "Companies", href: "/companies" },
    { label: "Live", href: "/live" },
];

export function MainLayout({ children }: MainLayoutProps) {
    return (
        <div className={styles.layout}>
            <header className={styles.header}>
                <PageContainer>
                    <div className={styles.headerContent}>
                        <Link
                            href="/"
                            className={styles.logo}
                            aria-label="GameZone startsida"
                        >
                            <Image
                                src="/brand/gamezonelogo.png"
                                alt="GameZone"
                                width={190}
                                height={54}
                                priority
                                className={styles.logoImage}
                            />
                        </Link>

                        <nav
                            className={styles.navigation}
                            aria-label="Huvudnavigation"
                        >
                            {navigationItems.map((item) => (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    className={styles.navigationLink}
                                >
                                    {item.label}
                                </Link>
                            ))}
                        </nav>

                        <div className={styles.actions}>
                            <Link
                                href="/discord"
                                className={styles.discordButton}
                            >
                                Discord
                            </Link>

                            <Link
                                href="/play"
                                className={styles.playButton}
                            >
                                Spela nu
                            </Link>
                        </div>
                    </div>
                </PageContainer>
            </header>

            <main className={styles.main}>
                {children}
            </main>

            <footer className={styles.footer}>
                <PageContainer>
                    <div className={styles.footerContent}>
                        <span>© 2026 GameZone</span>

                        <span>
                            Varje spelare har en plats. Varje stad har en historia.
                        </span>
                    </div>
                </PageContainer>
            </footer>
        </div>
    );
}