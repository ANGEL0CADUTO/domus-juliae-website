import type { BookingLocale, BookingRequestInput } from "../../types/booking";

const locales: BookingLocale[] = ["it", "en", "fr", "es", "de"];
export const bookingRequestLimits = {
  guestName: 120,
  guestEmail: 254,
  guestPhone: 40,
  sourcePage: 300,
  message: 1500,
} as const;

export type BookingRequestValidationResult =
  | { ok: true; data: BookingRequestInput }
  | { ok: false; errors: Record<string, string>; spam?: boolean };

function asString(value: unknown): string {
  return typeof value === "string" ? value.trim() : "";
}

function isValidDateString(value: string): boolean {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(value)) {
    return false;
  }

  const date = new Date(`${value}T00:00:00.000Z`);
  return !Number.isNaN(date.getTime()) && date.toISOString().slice(0, 10) === value;
}

function isEmail(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export function validateBookingRequest(input: unknown): BookingRequestValidationResult {
  const raw = input && typeof input === "object" ? (input as Record<string, unknown>) : {};
  const errors: Record<string, string> = {};

  const locale = asString(raw.locale);
  const guestName = asString(raw.guestName);
  const guestEmail = asString(raw.guestEmail).toLowerCase();
  const guestPhone = asString(raw.guestPhone);
  const checkIn = asString(raw.checkIn);
  const checkOut = asString(raw.checkOut);
  const sourcePage = asString(raw.sourcePage);
  const message = asString(raw.message);
  const honeypot = asString(raw.honeypot);
  const guests = typeof raw.guests === "number" ? raw.guests : Number(asString(raw.guests));

  if (honeypot.length > 0) {
    return { ok: false, errors: { honeypot: "Spam request detected." }, spam: true };
  }

  if (!locales.includes(locale as BookingLocale)) {
    errors.locale = "Invalid locale.";
  }

  if (guestName.length < 2) {
    errors.guestName = "Name is required and must be at least 2 characters.";
  }

  if (guestName.length > bookingRequestLimits.guestName) {
    errors.guestName = `Name must be ${bookingRequestLimits.guestName} characters or fewer.`;
  }

  if (guestEmail && !isEmail(guestEmail)) {
    errors.guestEmail = "Email is invalid.";
  }

  if (guestEmail.length > bookingRequestLimits.guestEmail) {
    errors.guestEmail = `Email must be ${bookingRequestLimits.guestEmail} characters or fewer.`;
  }

  if (guestPhone.length > bookingRequestLimits.guestPhone) {
    errors.guestPhone = `Phone must be ${bookingRequestLimits.guestPhone} characters or fewer.`;
  }

  if (!guestEmail && !guestPhone) {
    errors.contact = "Email or phone is required.";
  }

  if (!isValidDateString(checkIn)) {
    errors.checkIn = "Check-in date is invalid.";
  }

  if (!isValidDateString(checkOut)) {
    errors.checkOut = "Check-out date is invalid.";
  }

  if (isValidDateString(checkIn) && isValidDateString(checkOut) && checkOut <= checkIn) {
    errors.checkOut = "Check-out must be after check-in.";
  }

  if (!Number.isInteger(guests) || guests < 1 || guests > 4) {
    errors.guests = "Guests must be between 1 and 4.";
  }

  if (sourcePage.length > bookingRequestLimits.sourcePage) {
    errors.sourcePage = `Source page must be ${bookingRequestLimits.sourcePage} characters or fewer.`;
  }

  if (message.length > bookingRequestLimits.message) {
    errors.message = `Message must be ${bookingRequestLimits.message} characters or fewer.`;
  }

  if (Object.keys(errors).length > 0) {
    return { ok: false, errors };
  }

  return {
    ok: true,
    data: {
      locale: locale as BookingLocale,
      sourcePage: sourcePage || undefined,
      guestName,
      guestEmail: guestEmail || undefined,
      guestPhone: guestPhone || undefined,
      checkIn,
      checkOut,
      guests,
      message: message || undefined,
      honeypot: undefined,
    },
  };
}
