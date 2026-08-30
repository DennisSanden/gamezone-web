import { HomeDashboard } from "@/components/home/HomeDashboard";
import { MainLayout } from "@/components/layout/MainLayout";

export const revalidate = 30;

export default function HomePage() {
    return (
        <MainLayout>
            <HomeDashboard />
        </MainLayout>
    );
}