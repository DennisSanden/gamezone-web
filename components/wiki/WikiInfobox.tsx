import WikiIcon, { getCategoryIcon } from "./WikiIcon";
import styles from "./WikiInfobox.module.css";

export type WikiInfoboxItem = {
    label: string;
    value: string;
};

type WikiInfoboxProps = {
    title: string;
    category: string;
    categorySlug: string;
    items: WikiInfoboxItem[];
};

export default function WikiInfobox({
                                        title,
                                        categorySlug,
                                        items,
                                    }: WikiInfoboxProps) {
    if (items.length === 0) {
        return null;
    }

    return (
        <aside
            className={styles.infobox}
            aria-label={`Fakta om nivån ${title}`}
        >
            <header className={styles.header}>
                <div className={styles.heading}>
                    <span className={styles.category}>
                        Fakta om nivån
                    </span>

                    <h2 className={styles.title}>
                        {title}
                    </h2>
                </div>

                <div className={styles.icon}>
                    <WikiIcon
                        name={getCategoryIcon(categorySlug)}
                        size={30}
                    />
                </div>
            </header>

            <dl className={styles.list}>
                {items.map((item) => (
                    <div
                        className={styles.row}
                        key={`${item.label}-${item.value}`}
                    >
                        <dt>{item.label}</dt>
                        <dd>{item.value}</dd>
                    </div>
                ))}
            </dl>

            <footer className={styles.footer}>
                <span
                    className={styles.statusDot}
                    aria-hidden="true"
                />

                <span>Verifierad GameZone-data</span>
            </footer>
        </aside>
    );
}