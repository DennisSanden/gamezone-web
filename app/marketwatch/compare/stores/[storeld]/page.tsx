import { MainLayout } from "@/components/layout/MainLayout";
import { StoreDetail } from "@/components/marketwatch/StoreDetail";
export default async function StorePage({params}:{params:Promise<{storeId:string}>}){const {storeId}=await params; return <MainLayout><StoreDetail storeId={storeId}/></MainLayout>}
