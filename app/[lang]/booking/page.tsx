import type { Metadata } from "next";
import BookingDetails from "../../../src/components/BookingDetails";
import { getContent } from "../../../src/content";
import { requireValidLocale } from "../../../src/i18n/routing";

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  const locale = requireValidLocale(lang);
  const titles = {
    it: "Completa la prenotazione", en: "Complete your booking", fr: "Finalisez votre réservation",
    es: "Completa tu reserva", de: "Buchung abschließen",
  };
  return { title: titles[locale], robots: { index: false, follow: false } };
}

type Props = {
  params: Promise<{ lang: string }>;
  searchParams: Promise<{ checkIn?: string; checkOut?: string; guests?: string }>;
};

export default async function BookingDetailsPage({ params, searchParams }: Props) {
  const { lang } = await params;
  const query = await searchParams;
  const locale = requireValidLocale(lang);
  return <BookingDetails content={getContent(locale)} initialCheckIn={query.checkIn ?? ""} initialCheckOut={query.checkOut ?? ""} initialGuests={query.guests ?? "2"} />;
}
