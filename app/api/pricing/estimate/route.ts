import { NextResponse } from "next/server";
import { demoEstimate } from "../../../../src/lib/demo";

export async function POST(request: Request) {
  let body: unknown;
  try { body = await request.json(); } catch { return NextResponse.json({ ok: false, error: "VALIDATION_ERROR" }, { status: 400 }); }
  const result = demoEstimate(body && typeof body === "object" ? body : {});
  return NextResponse.json(result ?? { ok: false, error: "VALIDATION_ERROR" }, { status: result ? 200 : 400, headers: { "Cache-Control": "no-store" } });
}
