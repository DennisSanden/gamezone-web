"use client";

import { useEffect, useMemo, useState } from "react";
import styles from "./ActiveBountiesPanel.module.css";

type Bounty = {
    name: string;
    entityType: string;
    reward: number;
    hint: string | null;
    status: string;
    createdAt: string | null;
    expiresAt: string | null;
};

type BountyResponse = {
    status?: string;
    data?: {
        active?: Bounty[];
        count?: number;
    };
};

function formatNumber(value: number) {
    return new Intl.NumberFormat("sv-SE").format(value);
}

function formatEntityType(value: string) {
    return value
        .toLocaleLowerCase("sv-SE")
        .split("_")
        .map((part) => part.charAt(0).toLocaleUpperCase("sv-SE") + part.slice(1))
        .join(" ");
}

function formatRemaining(expiresAt: string | null, now: number) {
    if (!expiresAt) return "Ingen tidsgräns";

    const remaining = new Date(expiresAt).getTime() - now;
    if (!Number.isFinite(remaining) || remaining <= 0) return "Löper ut nu";

    const minutes = Math.ceil(remaining / 60_000);
    if (minutes < 60) return `${minutes} min kvar`;

    const hours = Math.ceil(minutes / 60);
    if (hours < 48) return `${hours} h kvar`;

    const days = Math.ceil(hours / 24);
    return `${days} dagar kvar`;
}

export default function ActiveBountiesPanel() {
    const [bounties, setBounties] = useState<Bounty[]>([]);
    const [loading, setLoading] = useState(true);
    const [unavailable, setUnavailable] = useState(false);
    const [now, setNow] = useState(() => Date.now());

    useEffect(() => {
        let cancelled = false;

        const load = async () => {
            try {
                const response = await fetch("/api/bounties", {
                    headers: { accept: "application/json" },
                });

                const payload = await response.json() as BountyResponse;
                const active = payload.data?.active;

                if (!response.ok || !Array.isArray(active)) {
                    throw new Error("Bounty API unavailable");
                }

                if (!cancelled) {
                    setBounties(active);
                    setUnavailable(false);
                }
            } catch {
                if (!cancelled) setUnavailable(true);
            } finally {
                if (!cancelled) setLoading(false);
            }
        };

        void load();
        const refresh = window.setInterval(load, 10_800_000);
        const clock = window.setInterval(() => setNow(Date.now()), 60_000);

        return () => {
            cancelled = true;
            window.clearInterval(refresh);
            window.clearInterval(clock);
        };
    }, []);

    const totalReward = useMemo(
        () => bounties.reduce((sum, bounty) => sum + Number(bounty.reward || 0), 0),
        [bounties],
    );

    if (loading) {
        return (
            <section className={styles.panel} aria-live="polite">
                <div className={styles.state}>Hämtar aktiva bounties från GameZone Engine...</div>
            </section>
        );
    }

    if (unavailable) {
        return (
            <section className={styles.panel} aria-live="polite">
                <div className={styles.state}>
                    Bountyregistret är tillfälligt otillgängligt. Försök igen om en stund.
                </div>
            </section>
        );
    }

    return (
        <section className={styles.panel} aria-label="Aktiva bounties">
            <div className={styles.header}>
                <div>
                    <span className={styles.eyebrow}>Live från servern</span>
                    <h3>Aktiva bounties</h3>
                </div>

                <div className={styles.summary}>
                    <strong>{bounties.length}</strong>
                    <span>aktiva</span>
                    <strong>{formatNumber(totalReward)}</strong>
                    <span>Coins totalt</span>
                </div>
            </div>

            {bounties.length === 0 ? (
                <div className={styles.state}>
                    Det finns inga aktiva bounties just nu.
                </div>
            ) : (
                <div className={styles.list}>
                    {bounties.map((bounty) => (
                        <article className={styles.card} key={bounty.name}>
                            <div className={styles.cardTop}>
                                <div>
                                    <span className={styles.mobType}>
                                        {formatEntityType(bounty.entityType)}
                                    </span>
                                    <h4>{bounty.name}</h4>
                                </div>

                                <div className={styles.reward}>
                                    <strong>{formatNumber(bounty.reward)}</strong>
                                    <span>Coins</span>
                                </div>
                            </div>

                            <div className={styles.hint}>
                                <span>Ledtråd</span>
                                <p>{bounty.hint || "Ingen offentlig ledtråd har publicerats."}</p>
                            </div>

                            <div className={styles.cardFooter}>
                                <span className={styles.statusDot} />
                                <span>Efterlyst</span>
                                <span className={styles.separator}>•</span>
                                <span>{formatRemaining(bounty.expiresAt, now)}</span>
                            </div>
                        </article>
                    ))}
                </div>
            )}
        </section>
    );
}
