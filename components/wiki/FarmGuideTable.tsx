"use client";

import { useMemo, useState } from "react";
import { farmGuideRows } from "./farm-guide-data";
import styles from "./FarmGuideTable.module.css";

const categories = ["Alla", "Gruvdrift", "Fiske", "Alkemi", "Jordbruk", "Byggmaterial", "Boskap", "Skogsbruk"];
const categoryOrder = ["Gruvdrift", "Fiske", "Alkemi", "Jordbruk", "Byggmaterial", "Boskap", "Skogsbruk"];

function categoryRank(categories: string) {
    const values = categories.split(",").map((value) => value.trim());
    const ranks = values.map((value) => categoryOrder.indexOf(value)).filter((rank) => rank >= 0);
    return ranks.length ? Math.min(...ranks) : categoryOrder.length;
}

export default function FarmGuideTable() {
    const [query, setQuery] = useState("");
    const [category, setCategory] = useState("Alla");

    const rows = useMemo(() => {
        const needle = query.trim().toLocaleLowerCase("sv-SE");
        return farmGuideRows.filter((row) => {
            const matchesQuery = !needle || `${row.farm} ${row.items} ${row.categories}`.toLocaleLowerCase("sv-SE").includes(needle);
            const matchesCategory = category === "Alla" || row.categories.split(",").map((value) => value.trim()).includes(category);
            return matchesQuery && matchesCategory;
        }).sort((a, b) => categoryRank(a.categories) - categoryRank(b.categories) || a.farm.localeCompare(b.farm, "sv-SE"));
    }, [query, category]);

    return (
        <section className={styles.panel} aria-label="Farmtabell">
            <div className={styles.toolbar}>
                <label className={styles.search}>
                    <span>Sök farm eller item</span>
                    <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="T.ex. iron, creeper eller honey" />
                </label>
                <label>
                    <span>Kategori</span>
                    <select value={category} onChange={(event) => setCategory(event.target.value)}>
                        {categories.map((value) => <option key={value}>{value}</option>)}
                    </select>
                </label>
            </div>

            <div className={styles.summary}><strong>{rows.length}</strong> av {farmGuideRows.length} farms visas</div>
            <div className={styles.tableWrap}>
                <table>
                    <thead><tr><th>Farm</th><th>Viktiga items</th><th>Kategorier</th></tr></thead>
                    <tbody>
                        {rows.map((row) => (
                            <tr key={row.farm}>
                                <td className={styles.farm}>{row.farm}</td>
                                <td>{row.items}</td>
                                <td><div className={styles.tags}>{row.categories.split(",").map((value) => <span key={value}>{value.trim()}</span>)}</div></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            {rows.length === 0 && <p className={styles.empty}>Ingen farm matchar filtreringen.</p>}
        </section>
    );
}
