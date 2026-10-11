import { NextResponse } from "next/server";

export function POST() {
  return NextResponse.json({ ok: false, error: "DEMO_DISABLED" }, { status: 403, headers: { "Cache-Control": "no-store" } });
}
