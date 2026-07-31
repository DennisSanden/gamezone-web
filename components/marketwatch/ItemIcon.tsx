"use client";

import { useState } from "react";
import styles from "./MarketWatchDashboard.module.css";

export function ItemIcon({ minecraftId, fallback, large = false }: { minecraftId: string; fallback: string; large?: boolean }) {
    const [failed, setFailed] = useState(false);
    if (failed) return <span className={large ? styles.iconFallbackLarge : styles.iconFallback}>{fallback}</span>;
    return (
        <img
            className={large ? styles.minecraftIconLarge : styles.minecraftIcon}
            src={`https://mc-heads.net/item/${minecraftId}`}
            alt=""
            loading="lazy"
            onError={() => setFailed(true)}
        />
    );
}
