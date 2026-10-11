import localFont from "next/font/local";

export const inter = localFont({
  src: "../assets/fonts/inter-normal-latin.woff2",
  weight: "300 600",
  display: "swap",
  variable: "--font-inter",
});

export const playfairDisplay = localFont({
  src: [
    { path: "../assets/fonts/playfair-display-normal-latin.woff2", weight: "400 600", style: "normal" },
    { path: "../assets/fonts/playfair-display-italic-latin.woff2", weight: "400 600", style: "italic" },
  ],
  display: "swap",
  variable: "--font-playfair",
});
