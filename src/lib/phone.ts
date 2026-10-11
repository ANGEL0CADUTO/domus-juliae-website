export function normalizeItalianPhoneForWhatsApp(phone: string): string | null {
  const digits = phone
    .trim()
    .replace(/[\s\-()]/g, "")
    .replace(/^\+/, "")
    .replace(/\D/g, "");

  if (!digits) {
    return null;
  }

  let normalized = digits;

  if (normalized.startsWith("0039")) {
    normalized = `39${normalized.slice(4)}`;
  } else if (normalized.startsWith("39")) {
    normalized = normalized;
  } else if (normalized.startsWith("3")) {
    normalized = `39${normalized}`;
  }

  return /^393\d{9}$/.test(normalized) ? normalized : null;
}

export function buildWhatsAppUrl(phone: string): string | null {
  const normalized = normalizeItalianPhoneForWhatsApp(phone);
  return normalized ? `https://example.com` : null;
}
