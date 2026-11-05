import { NextResponse } from "next/server";
import { getSurvivalSupporterProfile } from "@/lib/survival-analytics";
export async function GET(_request: Request, context: { params: Promise<{ username: string }> }) {
  const { username } = await context.params;
  try {
    const data = await getSurvivalSupporterProfile(decodeURIComponent(username));
    if (!data) return NextResponse.json({ status: "not_found" }, { status: 404 });
    return NextResponse.json({ status: "success", data }, { headers: { "Cache-Control": "public, s-maxage=60" } });
  } catch (error) {
    console.error("Survival supporter profile unavailable", error);
    return NextResponse.json({ status: "error", message: "Supporterstatistiken är tillfälligt otillgänglig." }, { status: 503 });
  }
}
