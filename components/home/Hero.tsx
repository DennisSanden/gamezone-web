import Link from "next/link";
import { PageContainer } from "@/components/layout/PageContainer";
import styles from "./Hero.module.css";

export function Hero() {
    return (
        <section className={styles.hero}>
            <div className={styles.background} aria-hidden="true" />
            <div className={styles.overlay} aria-hidden="true" />

            <PageContainer>
                <div className={styles.content}>
                    <div className={styles.badge}>
                        <span className={styles.badgeIcon}>✦</span>
                        Sveriges nästa stora Minecraft-värld
                    </div>

                    <h1 className={styles.title}>
                        Ditt äventyr.
                        <br />
                        Din <span>legacy.</span>
                    </h1>

                    <p className={styles.description}>
                        Bygg, utforska och forma framtiden tillsammans på en
                        svensk Minecraft-server där varje spelare påverkar världen.
                    </p>

                    <div className={styles.actions}>
                        <Link href="/whitelist" className={styles.primaryAction}>
                            <span className={styles.actionIcon}>⚔</span>
                            Ansök till whitelist
                        </Link>

                        <Link href="/wiki" className={styles.secondaryAction}>
                            Läs mer om GameZone
                        </Link>
                    </div>

                    <div className={styles.serverStatus}>
                        <div className={styles.statusHeading}>
                            <span className={styles.statusDot} />

                            <div>
                                <span className={styles.statusLabel}>
                                    Serverstatus
                                </span>

                                <strong className={styles.statusValue}>
                                    Under utveckling
                                </strong>
                            </div>
                        </div>

                        <div className={styles.statusDetails}>
                            <div>
                                <span>Nästa version</span>
                                <strong>Alpha 0.1</strong>
                            </div>

                            <div>
                                <span>Plattform</span>
                                <strong>Minecraft Java</strong>
                            </div>

                            <div>
                                <span>Community</span>
                                <strong>Sverige</strong>
                            </div>
                        </div>
                    </div>
                </div>
            </PageContainer>

            <div className={styles.bottomFade} aria-hidden="true" />
        </section>
    );
}