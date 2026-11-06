import { NextResponse } from "next/server";
import { getSurvivalPlayer } from "@/lib/survival-stats-server";

export const dynamic = "force-dynamic";

export async function GET(_request: Request, context: { params: Promise<{ username: string }> }) {
  const { username } = await context.params;
  if (!/^[.A-Za-z0-9_ ]{3,32}$/.test(username)) {
    return NextResponse.json({ status: "error", message: "Ogiltigt spelarnamn." }, { status: 400 });
  }
  try {
    const stats = await getSurvivalPlayer(username);
    if (!stats) return NextResponse.json({ status: "success", data: null }, { headers: { "Cache-Control": "no-store" } });
    return NextResponse.json({ status: "success", data: stats }, { headers: { "Cache-Control": "no-store" } });
  } catch (error) {
    console.error("Unable to load Survival profile", error);
    return NextResponse.json({ status: "error", message: "Survival-statistiken är tillfälligt otillgänglig." }, { status: 503, headers: { "Cache-Control": "no-store" } });
  }
}
