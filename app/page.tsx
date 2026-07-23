import { HomeDashboard } from "@/components/home/HomeDashboard";
import { MainLayout } from "@/components/layout/MainLayout";

export default function HomePage() {
    return (
        <MainLayout>
            <HomeDashboard />
        </MainLayout>
    );
}