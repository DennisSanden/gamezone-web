import type { SettlementUpgrade, SettlementUpgradeKey } from "./types";

import { enstoringTillLager } from "./enstoring";
import { lagerTillBy } from "./lager";
import { byTillBosattning } from "./by";
import { bosattningTillSamhalle } from "./bosattning";
import { samhalleTillKoping } from "./samhalle";
import { kopingTillStad } from "./koping";
import { stadTillHandelsstad } from "./stad";
import { handelsstadTillFastning } from "./handelsstad";
import { fastningTillHuvudstad } from "./fastning";
import { huvudstadTillGrevskap } from "./huvudstad";
import { grevskapTillHertigdome } from "./grevskap";
import { hertigdomeTillNation } from "./hertigdome";
import { nationTillKungadome } from "./nation";
import { kungadomeTillImperium } from "./kungadome";

const settlementUpgrades: Record<
    SettlementUpgradeKey,
    SettlementUpgrade
> = {
    "enstoring-till-lager": enstoringTillLager,
    "lager-till-by": lagerTillBy,
    "by-till-bosattning": byTillBosattning,
    "bosattning-till-samhalle": bosattningTillSamhalle,
    "samhalle-till-koping": samhalleTillKoping,
    "koping-till-stad": kopingTillStad,
    "stad-till-handelsstad": stadTillHandelsstad,
    "handelsstad-till-fastning": handelsstadTillFastning,
    "fastning-till-huvudstad": fastningTillHuvudstad,
    "huvudstad-till-grevskap": huvudstadTillGrevskap,
    "grevskap-till-hertigdome": grevskapTillHertigdome,
    "hertigdome-till-nation": hertigdomeTillNation,
    "nation-till-kungadome": nationTillKungadome,
    "kungadome-till-imperium": kungadomeTillImperium,
};

export function getSettlementUpgrade(
    key: SettlementUpgradeKey,
): SettlementUpgrade | null {
    return settlementUpgrades[key] ?? null;
}

export function isSettlementUpgradeKey(
    value: string,
): value is SettlementUpgradeKey {
    return value in settlementUpgrades;
}

export type {
    SettlementUpgrade,
    SettlementUpgradeChange,
    SettlementUpgradeKey,
    SettlementUpgradeMaterial,
} from "./types";