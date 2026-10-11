# Domus Juliae — Holiday Apartment Website

I developed a multilingual holiday apartment website with a date-selection flow, booking details, gallery and reusable pricing logic.

[Live project](https://www.domusjuliae.it) · Public portfolio edition

![Desktop preview](.github/screenshots/desktop.png)

## Stack and features

Next.js, React, TypeScript and Tailwind CSS.

- Five-language storefront and localized routes
- Date selection and price breakdowns calculated by the original pricing engine with fictional rules
- Booking validation and cancellation-policy domain modules
- Local demonstration endpoints for prices and availability

## Run locally

Use Node.js 22 and npm:

```bash
npm ci
npm run dev
```

Open `http://localhost:3000/it`. No account, service keys or environment configuration are required. Use fictional data when exploring forms.

## Public edition

Availability is always fictional and empty; rates are examples. Checkout returns 403 and the booking submit control is disabled. Admin routes, Supabase clients, Stripe processing, email delivery, calendar synchronization, database exports and production schemas are not included. Analytics delivery is disabled. This edition cannot accept real reservations.

This repository starts from a separate source snapshot and contains no production Git history, hosting configuration, backups or operational reports. Public content and page structure are retained where useful; demo assets and sample contacts replace client materials. The live project runs from its separate private repository.

## Checks

```bash
npm run build
npm run lint
npm test
```

The CI workflow runs the build and TypeScript checks. Dependency update requests are configured through Dependabot. Production services are outside the scope of these checks.

## Assets

The SVG illustrations in this edition are simple geometric examples supplied with the source. Client artwork, photographs, membership documents and CV PDFs are not distributed. Third-party font licences are kept alongside the font files where used.
