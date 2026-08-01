import type { Metadata } from "next";
import { MainLayout } from "@/components/layout/MainLayout";
import { PlayerProfile } from "@/components/player/PlayerProfile";

type Props = { params: Promise<{ username: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { username } = await params;
  const name = decodeURIComponent(username);
  return {
    title: `${name} | Spelarprofil | GameZone`,
    description: `Publik spelarprofil och statistik för ${name} på GameZone.`,
  };
}

export default async function PlayerPage({ params }: Props) {
  const { username } = await params;
  return (
    <MainLayout>
      <PlayerProfile username={decodeURIComponent(username)} />
    </MainLayout>
  );
}
