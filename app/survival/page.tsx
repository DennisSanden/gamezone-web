import type { Metadata } from "next";
import { MainLayout } from "@/components/layout/MainLayout";
import { SurvivalDashboard } from "./SurvivalDashboard";
export const metadata: Metadata = {
  title: "Survival | GameZone",
  description: "Survival-rekord, wave-statistik och detaljerade Patreon-spelarprofiler på GameZone.",
};
export default function SurvivalPage() { return <MainLayout><SurvivalDashboard /></MainLayout>; }
