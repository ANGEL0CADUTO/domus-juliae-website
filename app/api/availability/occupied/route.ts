import { NextResponse } from "next/server";
import { validDate } from "../../../../src/lib/demo";

export function GET(request: Request) {
  const params = new URL(request.url).searchParams;
  const start = params.get("start"), end = params.get("end");
  if (!validDate(start) || !validDate(end) || end <= start) return NextResponse.json({ ok: false, error: "VALIDATION_ERROR" }, { status: 400 });
  return NextResponse.json({ ok: true, demo: true, configured: true, ranges: [] }, { headers: { "Cache-Control": "no-store" } });
}
