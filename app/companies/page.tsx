import type { Metadata } from "next";
import { MainLayout } from "@/components/layout/MainLayout";
import { CompanyDirectory } from "@/components/companies/CompanyDirectory";

export const metadata: Metadata = {
  title: "Företag | GameZone",
  description: "Upptäck GameZones företag, deras sortiment, försäljning och handelshistorik.",
};

export default function CompaniesPage() {
  return <MainLayout><CompanyDirectory /></MainLayout>;
}
