"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { cancellationCopy } from "../content/cancellationPolicy";
import { getLocalizedPath, type Locale } from "../i18n/config";
import { getCancellationDeadline, getCancellationDeadlineLabel } from "../lib/booking/cancellationPolicy";

export default function CancellationSummary({ locale, checkIn }: { locale: Locale; checkIn?: string }) {
  const c = cancellationCopy[locale];
  const [now, setNow] = useState<number | null>(null);
  useEffect(() => {
    const update = () => setNow(Date.now());
    update();
    const timer = window.setInterval(update, 30_000);
    return () => window.clearInterval(timer);
  }, []);
  const deadline = checkIn ? getCancellationDeadline(checkIn) : null;
  const expired = deadline && now !== null && now > Date.parse(deadline);
  const label = checkIn ? getCancellationDeadlineLabel(checkIn, locale) : null;
  return (
    <aside className="mt-5 rounded-md border border-brand-slate/20 bg-brand-cream/60 p-4 text-sm leading-6 text-brand-slate" aria-label={c.title}>
      <h3 className="font-bold">{c.title}</h3>
      <p className="mt-2 font-semibold" aria-live="polite">{expired ? c.expired : label ?? c.freeRule}</p>
      {!expired ? <p className="mt-2">{c.lateRule}</p> : null}
      <p className="mt-2">{c.hostRule}</p>
      <p className="mt-2">{c.taxRule}</p>
      <Link href={getLocalizedPath(locale, "terms")} target="_blank" rel="noopener noreferrer" className="mt-1 inline-flex min-h-11 items-center font-bold underline underline-offset-4">{c.terms}</Link>
    </aside>
  );
}
