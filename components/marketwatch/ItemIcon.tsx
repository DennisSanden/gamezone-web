"use client";

import { useMemo, useState } from "react";
import styles from "./MarketWatchDashboard.module.css";

type ItemIconProps = {
    minecraftId: string;
    fallback: string;
    large?: boolean;
};

export function ItemIcon({ minecraftId, fallback, large = false }: ItemIconProps) {
    const normalizedId = minecraftId.replace(/^minecraft:/, "");

    const sources = useMemo(
        () => [
            `https://raw.githubusercontent.com/PrismarineJS/minecraft-assets/master/data/1.21.5/items/${normalizedId}.png`,
            `https://raw.githubusercontent.com/PrismarineJS/minecraft-assets/master/data/1.21.8/items/${normalizedId}.png`,
        ],
        [normalizedId],
    );

    const [sourceIndex, setSourceIndex] = useState(0);

    if (sourceIndex >= sources.length) {
        return (
            <span
                className={large ? styles.iconFallbackLarge : styles.iconFallback}
                title={`Ikon saknas för minecraft:${normalizedId}`}
            >
                {fallback}
            </span>
        );
    }

    return (
        <img
            className={large ? styles.minecraftIconLarge : styles.minecraftIcon}
            src={sources[sourceIndex]}
            alt={normalizedId.replaceAll("_", " ")}
            loading="lazy"
            decoding="async"
            draggable={false}
            onError={() => setSourceIndex((current) => current + 1)}
        />
    );
}
