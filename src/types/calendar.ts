export type CalendarBlockType =
  | "MANUAL"
  | "DIRECT_HOLD"
  | "DIRECT_CONFIRMED"
  | "AIRBNB"
  | "BOOKING"
  | "BLOCKED";

export type CalendarBlockStatus = "ACTIVE" | "CANCELLED" | "EXPIRED";
export type ExternalCalendarSource = "AIRBNB" | "BOOKING" | "OTHER";
export type CalendarEventSource = "AIRBNB" | "BOOKING" | "OTHER" | "MANUAL" | "DIRECT";
export type CalendarEventStatus = "ACTIVE" | "CANCELLED";

export type CalendarBlock = {
  id: string;
  created_at: string;
  updated_at: string;
  start_date: string;
  end_date: string;
  type: CalendarBlockType;
  source: string;
  status: CalendarBlockStatus;
  title: string | null;
  notes: string | null;
  booking_request_id: string | null;
};

export type ExternalCalendar = {
  id: string;
  created_at: string;
  updated_at: string;
  name: string;
  source: ExternalCalendarSource;
  url: string;
  enabled: boolean;
  last_synced_at: string | null;
  last_error: string | null;
};

export type CalendarEvent = {
  id: string;
  created_at: string;
  updated_at: string;
  source: CalendarEventSource;
  external_calendar_id: string | null;
  external_uid: string | null;
  start_date: string;
  end_date: string;
  summary: string | null;
  status: CalendarEventStatus;
  raw: Record<string, unknown> | null;
};
