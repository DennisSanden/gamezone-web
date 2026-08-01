import type { Metadata } from "next";
import { SettlementDirectory } from "@/components/settlements/SettlementDirectory";

export const metadata: Metadata = {
    title: "Settlements | GameZone",
    description: "Utforska städer, kungar, nivåer, byggnader och ekonomi på GameZone.",
};

export default function SettlementsPage() {
    return <SettlementDirectory />;
}
