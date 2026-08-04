import { HomeDashboard } from "@/components/home/HomeDashboard";
import { MainLayout } from "@/components/layout/MainLayout";

export const dynamic = "force-dynamic";

export default function HomePage() {
    return (
        <MainLayout>
            <HomeDashboard />
        </MainLayout>
    );
}