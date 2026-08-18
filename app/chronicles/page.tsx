import type { Metadata } from "next";
import { MainLayout } from "@/components/layout/MainLayout";
import { PageContainer } from "@/components/layout/PageContainer";
import { ChroniclesTimeline } from "@/components/chronicles/ChroniclesTimeline";
import styles from "./page.module.css";

export const metadata: Metadata = { title: "Chronicles | GameZone", description: "Serverns historia, skriven av spelarna." };
export default function ChroniclesPage(){return <MainLayout><section className={styles.hero}><PageContainer><span>GAMEZONE CHRONICLES</span><h1>Serverns historia, skriven av spelarna.</h1><p>Krig. Reliker. Maktbyten. Allianser. De händelser som förändrade världen sparas här, permanent.</p></PageContainer></section><PageContainer><ChroniclesTimeline/></PageContainer></MainLayout>}
