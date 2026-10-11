import assert from "node:assert/strict";
import test from "node:test";
import { demoEstimate } from "../src/lib/demo";
import { POST } from "../app/api/direct-booking/checkout/route";

test("demo pricing rejects invalid, excessive and reversed stays", () => {
  for (const input of [null, { checkIn: "2026-02-30", checkOut: "2026-03-04", guests: 2 }, { checkIn: "2027-01-01", checkOut: "2027-04-01", guests: 2 }, { checkIn: "2027-01-03", checkOut: "2027-01-01", guests: 2 }]) assert.equal(demoEstimate(input ?? {}), null);
});
test("demo pricing uses fictional rates and marks the response", () => {
  const result = demoEstimate({ checkIn: "2027-01-04", checkOut: "2027-01-06", guests: 2 });
  assert.ok(result); assert.equal(result.demo, true); assert.equal(result.nights, 2); assert.equal(result.totalCents, 25000);
});
test("checkout cannot create a payment or booking", async () => {
  const response = POST(); assert.equal(response.status, 403); assert.equal((await response.json()).error, "DEMO_DISABLED");
});
