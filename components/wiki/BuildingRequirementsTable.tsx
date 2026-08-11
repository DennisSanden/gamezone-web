import { ItemIcon } from "@/components/marketwatch/ItemIcon";
import {
    getBuildingRequirements,
    type BuildingRequirementKey,
} from "./building-requirements";
import styles from "./BuildingRequirementsTable.module.css";

type BuildingRequirementsTableProps = {
    building: BuildingRequirementKey;
};

export default function BuildingRequirementsTable({
    building,
}: BuildingRequirementsTableProps) {
    const requirements = getBuildingRequirements(building);

    return (
        <div className={styles.wrapper}>
            <div className={styles.header}>
                <span>Specialkrav</span>
                <strong>{requirements.length} typer av block eller items</strong>
            </div>

            <div className={styles.tableWrap}>
                <table className={styles.table}>
                    <thead>
                        <tr>
                            <th aria-label="Ikon" />
                            <th>Block eller item</th>
                            <th>Antal</th>
                        </tr>
                    </thead>
                    <tbody>
                        {requirements.map((requirement) => (
                            <tr key={requirement.minecraftId}>
                                <td className={styles.iconCell}>
                                    <span className={styles.icon}>
                                        <ItemIcon
                                            itemId={`minecraft:${requirement.minecraftId}`}
                                            itemName={requirement.name}
                                            size={34}
                                        />
                                    </span>
                                </td>
                                <td>
                                    <strong className={styles.name}>
                                        {requirement.name}
                                    </strong>
                                    <span className={styles.minecraftId}>
                                        minecraft:{requirement.minecraftId}
                                    </span>
                                </td>
                                <td className={styles.amount}>
                                    ×{requirement.amount}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
