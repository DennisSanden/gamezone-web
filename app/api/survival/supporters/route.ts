import { NextResponse } from "next/server";
import { getSurvivalSupporterRanking } from "@/lib/survival-analytics";
export async function GET() {
  try {
    const data = await getSurvivalSupporterRanking();
    return NextResponse.json({ status: "success", data }, { headers: { "Cache-Control": "public, s-maxage=60" } });
  } catch (error) {
    console.error("Survival Patreon rankings unavailable", error);
    return NextResponse.json({ status: "error", message: "Supporterstatistiken är tillfälligt otillgänglig." }, { status: 503 });
  }
}
