"use client";

import { OPEN_COOKIE_PREFERENCES_EVENT } from "../lib/analytics";

type Props = {
  label: string;
  className?: string;
};

export default function CookiePreferencesButton({ label, className = "" }: Props) {
  return (
    <button
      type="button"
      onClick={() => window.dispatchEvent(new Event(OPEN_COOKIE_PREFERENCES_EVENT))}
      className={className}
    >
      {label}
    </button>
  );
}
