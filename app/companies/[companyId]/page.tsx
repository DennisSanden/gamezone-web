import type { Metadata } from "next";
import { MainLayout } from "@/components/layout/MainLayout";
import { CompanyProfile } from "@/components/companies/CompanyProfile";

export const metadata: Metadata = { title: "Företag | GameZone" };

export default async function CompanyPage({ params }: { params: Promise<{ companyId: string }> }) {
  const { companyId } = await params;
  return <MainLayout><CompanyProfile companyId={companyId} /></MainLayout>;
}
