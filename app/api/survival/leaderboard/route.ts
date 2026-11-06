import { NextResponse } from "next/server";
import { getSurvivalRanking } from "@/lib/survival-stats-server";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    return NextResponse.json({ status: "success", data: await getSurvivalRanking() }, { headers: { "Cache-Control": "no-store" } });
  } catch (error) {
    console.error("Unable to load Survival ranking", error);
    return NextResponse.json({ status: "error", message: "Survival-statistiken är tillfälligt otillgänglig." }, { status: 503, headers: { "Cache-Control": "no-store" } });
  }
}
