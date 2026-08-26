"use client";

import Link from "next/link";
import { useCallback, useRef, useState, type CSSProperties, type ReactNode } from "react";
import type { WikiDefinition } from "@/lib/wiki/wiki-definitions";
import WikiIcon from "./WikiIcon";
import styles from "./WikiTerm.module.css";

type WikiTermProps = {
    definition: WikiDefinition;
    href: string;
    children: ReactNode;
};

type TooltipPosition = {
    left: number;
    top: number;
    placement: "above" | "below";
};

const VIEWPORT_GAP = 16;
const TERM_GAP = 12;

export default function WikiTerm({
                                     definition,
                                     href,
                                     children,
                                 }: WikiTermProps) {
    const termRef = useRef<HTMLAnchorElement>(null);
    const tooltipRef = useRef<HTMLSpanElement>(null);
    const [position, setPosition] = useState<TooltipPosition | null>(null);

    const positionTooltip = useCallback(() => {
        const term = termRef.current;
        const tooltip = tooltipRef.current;
        if (!term || !tooltip) return;

        const termRect = term.getBoundingClientRect();
        const tooltipWidth = tooltip.offsetWidth || Math.min(310, window.innerWidth - 32);
        const tooltipHeight = tooltip.offsetHeight || 180;

        const idealLeft = termRect.left + termRect.width / 2 - tooltipWidth / 2;
        const maxLeft = Math.max(VIEWPORT_GAP, window.innerWidth - tooltipWidth - VIEWPORT_GAP);
        const left = Math.min(Math.max(idealLeft, VIEWPORT_GAP), maxLeft);

        const roomAbove = termRect.top - TERM_GAP;
        const placement: TooltipPosition["placement"] =
            roomAbove >= tooltipHeight + VIEWPORT_GAP ? "above" : "below";

        const top = placement === "above"
            ? termRect.top - tooltipHeight - TERM_GAP
            : termRect.bottom + TERM_GAP;

        setPosition({ left, top, placement });
    }, []);

    const tooltipStyle: CSSProperties | undefined = position
        ? {
            left: `${position.left}px`,
            top: `${position.top}px`,
        }
        : undefined;

    return (
        <span
            className={styles.wrapper}
            onMouseEnter={positionTooltip}
            onFocus={positionTooltip}
        >
            <Link ref={termRef} className={styles.term} href={href}>
                {children}
            </Link>

            <span
                ref={tooltipRef}
                className={`${styles.tooltip} ${position?.placement === "below" ? styles.tooltipBelow : ""}`}
                role="tooltip"
                style={tooltipStyle}
            >
                <span className={styles.tooltipHeader}>
                    <span className={styles.tooltipIcon}>
                        <WikiIcon name="info" size={16} />
                    </span>

                    <span>
                        <span className={styles.category}>
                            {definition.category}
                        </span>

                        <strong>{definition.title}</strong>
                    </span>
                </span>

                <span className={styles.definition}>
                    {definition.definition}
                </span>

                <span className={styles.tooltipFooter}>
                    Öppna artikel
                    <span aria-hidden="true">→</span>
                </span>
            </span>
        </span>
    );
}
