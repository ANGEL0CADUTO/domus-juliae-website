import type { Locale } from "./i18n/config";
import type { SiteContent } from "./content/types";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TrustBar from "./components/TrustBar";
import Features from "./components/Features";
import Apartment from "./components/Apartment";
import Location from "./components/Location";
import Gallery from "./components/Gallery";
import Amenities from "./components/Amenities";
import WhyDirect from "./components/WhyDirect";
import Booking from "./components/Booking";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import StickyMobileCTA from "./components/StickyMobileCTA";
import ScrollReveal from "./components/ScrollReveal";
import { getBookingToday } from "./lib/bookingDates";

type AppProps = {
  locale: Locale;
  content: SiteContent;
};

export default function App({ locale, content }: AppProps) {
  return (
    <div className="min-h-screen bg-brand-cream">
      <Navbar locale={locale} content={content} />
      <main>
        <Hero locale={locale} content={content} />
        <TrustBar content={content} />
        <Features locale={locale} content={content} />
        <Apartment locale={locale} content={content} />
        <Location content={content} />
        <Gallery locale={locale} content={content} />
        <Amenities content={content} />
        <WhyDirect content={content} />
        <Booking content={content} initialToday={getBookingToday()} />
        <Testimonials locale={locale} content={content} />
        <FAQ content={content} />
      </main>
      <Footer locale={locale} content={content} />
      <StickyMobileCTA content={content} />
      <ScrollReveal />
    </div>
  );
}
