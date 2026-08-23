import type { Metadata } from "next";
import Link from "next/link";
import { MainLayout } from "@/components/layout/MainLayout";
import { PageContainer } from "@/components/layout/PageContainer";
import RelicArchive from "./RelicArchive";
import styles from "./page.module.css";

export const metadata: Metadata = {
    title: "Reliker | GameZone",
    description: "GameZones levande relikarkiv. Följ vilka av serverns 50 reliker som har upptäckts och vilka som fortfarande är okända.",
};

export default function RelicsPage() {
    return (
        <MainLayout>
            <div className={styles.page}>
                <section className={styles.hero}>
                    <PageContainer>
                        <div className={styles.breadcrumbs}>
                            <Link href="/">GameZone</Link>
                            <span>/</span>
                            <span>Reliker</span>
                        </div>

                        <div className={styles.heroGrid}>
                            <div>
                                <span className={styles.eyebrow}>Server Relics</span>
                                <h1>Relikarkivet</h1>
                                <p>
                                    Femtio unika föremål finns registrerade i GameZone. Några har redan fått en historia. Andra väntar fortfarande på att bli hittade.
                                </p>
                            </div>

                            <div className={styles.heroActions}>
                                <Link href="/wiki/relics/reliker" className={styles.wikiButton}>
                                    Läs om reliksystemet
                                    <span aria-hidden="true">→</span>
                                </Link>
                                <p>Wikin förklarar tiers, settlementbonusar, handel, historik och Relic Chests.</p>
                            </div>
                        </div>
                    </PageContainer>
                </section>

                <PageContainer className={styles.content}>
                    <RelicArchive />
                </PageContainer>
            </div>
        </MainLayout>
    );
}
