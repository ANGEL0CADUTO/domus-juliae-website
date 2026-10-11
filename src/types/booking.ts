export type BookingLocale = "it" | "en" | "fr" | "es" | "de";

export type BookingRequestStatus =
  | "NEW"
  | "CONTACTED"
  | "APPROVED"
  | "DECLINED"
  | "EXPIRED"
  | "CANCELLED";

export type BookingRequestInput = {
  locale: BookingLocale;
  sourcePage?: string;
  guestName: string;
  guestEmail?: string;
  guestPhone?: string;
  checkIn: string;
  checkOut: string;
  guests: number;
  message?: string;
  honeypot?: string;
};

export type BookingRequestRecord = {
  id: string;
  created_at: string;
  updated_at: string;
  locale: BookingLocale;
  source_page: string | null;
  guest_name: string;
  guest_email: string | null;
  guest_phone: string | null;
  check_in: string;
  check_out: string;
  guests: number;
  message: string | null;
  status: BookingRequestStatus;
  internal_notes: string | null;
  ip_hash: string | null;
  user_agent: string | null;
  honeypot: string | null;
  estimated_total_cents: number | null;
  estimated_currency: "EUR";
  estimated_pricing_snapshot: Record<string, unknown> | null;
  estimated_nights: number | null;
  estimated_cleaning_fee_cents: number | null;
  estimated_discount_cents: number | null;
  confirmed_total_cents: number | null;
  confirmed_currency: "EUR";
  confirmed_quote_notes: string | null;
  confirmed_quote_sent_at: string | null;
  stripe_checkout_session_id: string | null;
  stripe_payment_link_url: string | null;
  stripe_payment_intent_id: string | null;
  payment_status: BookingPaymentStatus;
  paid_at: string | null;
  payment_amount_cents: number | null;
  payment_currency: "EUR";
  payment_expires_at: string | null;
  post_payment_status: BookingPostPaymentStatus;
  host_confirmed_at: string | null;
};

export type BookingPaymentStatus =
  | "NOT_REQUIRED"
  | "PENDING"
  | "PAID"
  | "FAILED"
  | "EXPIRED"
  | "REFUNDED"
  | "CANCELLED";

export type BookingPostPaymentStatus =
  | "PENDING_HOST_CONFIRMATION"
  | "HOST_CONFIRMED"
  | "HOST_CANCELLED"
  | "REFUND_REQUIRED";

export type BookingRequestEmailTemplateType =
  | "AVAILABLE_QUOTE"
  | "NOT_AVAILABLE"
  | "NEED_MORE_INFO"
  | "PAYMENT_LINK"
  | "PAYMENT_RECEIVED_GUEST"
  | "PAYMENT_RECEIVED_OWNER";

export type BookingRequestEmailStatus = "DRAFT" | "SENT" | "FAILED";

export type BookingRequestEmailRecord = {
  id: string;
  created_at: string;
  booking_request_id: string;
  template_type: BookingRequestEmailTemplateType;
  locale: BookingLocale;
  to_email: string;
  subject: string;
  body_text: string;
  body_html: string | null;
  sent_status: BookingRequestEmailStatus;
  resend_email_id: string | null;
  sent_at: string | null;
  error_message: string | null;
};
