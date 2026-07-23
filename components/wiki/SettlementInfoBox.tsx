import {
    getSettlementInfoboxItems,
    getSettlementLevel,
    type SettlementLevelKey,
} from "./settlement-levels";
import WikiInfobox from "./WikiInfobox";

type SettlementInfoBoxProps = {
    settlement: SettlementLevelKey;
};

export default function SettlementInfoBox({
                                              settlement,
                                          }: SettlementInfoBoxProps) {
    const level = getSettlementLevel(settlement);

    return (
        <WikiInfobox
            title={level.name}
            category="Settlements"
            categorySlug="settlements"
            items={getSettlementInfoboxItems(settlement)}
        />
    );
}
