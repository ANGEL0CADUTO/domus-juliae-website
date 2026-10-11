import Script from "next/script";
import type { Locale } from "../i18n/config";
import AnalyticsPageViewTracker from "./AnalyticsPageViewTracker";
import CookieConsentBanner from "./CookieConsentBanner";

type Props = {
  locale?: Locale;
};

export default function GoogleTag({ locale = "it" }: Props) {
  return (
    <>
      <Script
        id="google-consent-default"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{
          __html: `
window.dataLayer = window.dataLayer || [];
function gtag(){window.dataLayer.push(arguments);}
gtag('consent', 'default', {
  analytics_storage: 'denied',
  ad_storage: 'denied',
  ad_user_data: 'denied',
  ad_personalization: 'denied',
  wait_for_update: 500
});
          `.trim(),
        }}
      />
      <AnalyticsPageViewTracker />
      <CookieConsentBanner locale={locale} />
    </>
  );
}
