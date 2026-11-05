import { NextResponse } from "next/server";
import { getSurvivalOverview } from "@/lib/survival-analytics";
export async function GET() {
  try {
    return NextResponse.json({ status: "success", data: await getSurvivalOverview() },
      { headers: { "Cache-Control": "public, s-maxage=180" } });
  } catch (error) {
    console.error("Survival overview unavailable", error);
    return NextResponse.json({ status: "error", message: "Survival-statistiken är tillfälligt otillgänglig." }, { status: 503 });
  }
}
