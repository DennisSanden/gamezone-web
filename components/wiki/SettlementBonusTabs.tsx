import Link from "next/link";
import styles from "./SettlementBonusTabs.module.css";

type SettlementBonusTabsProps = {
    active: "levels" | "buildings";
};

const tabs = [
    {
        id: "levels" as const,
        title: "Nivåbonusar",
        description: "50 settlementnivåer",
        href: "/wiki/settlements/settlement-upgrades",
    },
    {
        id: "buildings" as const,
        title: "Byggnadsbonusar",
        description: "24 frivilliga byggnader",
        href: "/wiki/buildings/fysiska-byggnader",
    },
];

export default function SettlementBonusTabs({ active }: SettlementBonusTabsProps) {
    return (
        <nav className={styles.tabs} aria-label="Settlementbonusar">
            {tabs.map((tab) => (
                <Link
                    key={tab.id}
                    href={tab.href}
                    className={`${styles.tab} ${active === tab.id ? styles.active : ""}`}
                    aria-current={active === tab.id ? "page" : undefined}
                >
                    <span className={styles.title}>{tab.title}</span>
                    <span className={styles.description}>{tab.description}</span>
                </Link>
            ))}
        </nav>
    );
}
