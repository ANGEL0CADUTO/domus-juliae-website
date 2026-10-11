import { notFound } from "next/navigation";
import { isValidLocale, type Locale } from "./config";

export function requireValidLocale(value: string): Locale {
  if (!isValidLocale(value)) {
    notFound();
  }

  return value;
}
