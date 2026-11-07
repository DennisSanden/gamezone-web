import { NextResponse } from "next/server";
import { getSurvivalClasses } from "@/lib/survival-stats-server";

export async function GET(_request: Request, { params }: { params: Promise<{ username: string }> }) {
  const { username } = await params;
  if (!/^[.A-Za-z0-9_ ]{3,32}$/.test(username)) return NextResponse.json({ status: "error" }, { status: 400 });
  try {
    return NextResponse.json({ status: "success", data: await getSurvivalClasses(username) });
  } catch (error) {
    console.warn("Survival class progression unavailable", error);
    return NextResponse.json({ status: "error" }, { status: 503, headers: { "Cache-Control": "no-store" } });
  }
}
