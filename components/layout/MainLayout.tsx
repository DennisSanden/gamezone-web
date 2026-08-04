"use client";

import type { ReactNode } from "react";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { PageContainer } from "./PageContainer";
import styles from "./MainLayout.module.css";

type MainLayoutProps = {
    children: ReactNode;
};

const navigationItems = [
    { label: "Hem", href: "/" },
    { label: "Om GameZone", href: "/om-gamezone" },
    { label: "Kom igång", href: "/kom-igang" },
    { label: "Regler", href: "/regler" },
    { label: "Wiki", href: "/wiki" },
    { label: "Leaderboards", href: "/leaderboards" },
    { label: "MarketWatch", href: "/marketwatch" },
    { label: "Karta", href: "http://184.170.201.111:8100/" },
    { label: "Settlements", href: "/settlements" },
    { label: "Företag", href: "/companies" },
    { label: "Live", href: "/live" },
];

function isActivePath(pathname: string, href: string) {
    if (href === "/") {
        return pathname === "/";
    }

    return pathname === href || pathname.startsWith(`${href}/`);
}

export function MainLayout({ children }: MainLayoutProps) {
    const pathname = usePathname();
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <div className={styles.layout}>
            <header className={styles.header}>
                <PageContainer>
                    <div className={styles.headerContent}>
                        <Link
                            href="/"
                            className={styles.logo}
                            aria-label="GameZone startsida"
                            onClick={() => setMobileMenuOpen(false)}
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
                            {navigationItems.map((item) => {
                                const active = isActivePath(pathname, item.href);

                                return (
                                    <Link
                                        key={item.href}
                                        href={item.href}
                                        className={`${styles.navigationLink} ${active ? styles.navigationLinkActive : ""}`}
                                        aria-current={active ? "page" : undefined}
                                    >
                                        {item.label}
                                    </Link>
                                );
                            })}
                        </nav>

                        <div className={styles.actions}>
                            <Link
                                href="https://discord.gg/Uk9TzJh3DJ"
                                target="_blank"
                                rel="noreferrer"
                                className={styles.discordButton}
                            >
                                Discord
                            </Link>

                            <Link
                                href="/kom-igang"
                                className={styles.playButton}
                            >
                                Spela nu
                            </Link>

                            <button
                                type="button"
                                className={`${styles.mobileMenuButton} ${mobileMenuOpen ? styles.mobileMenuButtonOpen : ""}`}
                                aria-label={mobileMenuOpen ? "Stäng meny" : "Öppna meny"}
                                aria-expanded={mobileMenuOpen}
                                aria-controls="gamezone-mobile-navigation"
                                onClick={() => setMobileMenuOpen((open) => !open)}
                            >
                                <span />
                                <span />
                                <span />
                            </button>
                        </div>
                    </div>

                    <nav
                        id="gamezone-mobile-navigation"
                        className={`${styles.mobileNavigation} ${mobileMenuOpen ? styles.mobileNavigationOpen : ""}`}
                        aria-label="Mobilnavigation"
                    >
                        {navigationItems.map((item) => {
                            const active = isActivePath(pathname, item.href);

                            return (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    className={`${styles.mobileNavigationLink} ${active ? styles.mobileNavigationLinkActive : ""}`}
                                    aria-current={active ? "page" : undefined}
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    {item.label}
                                </Link>
                            );
                        })}

                        <Link
                            href="https://discord.gg/Uk9TzJh3DJ"
                            target="_blank"
                            rel="noreferrer"
                            className={styles.mobileDiscordLink}
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            Discord
                        </Link>
                    </nav>
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
