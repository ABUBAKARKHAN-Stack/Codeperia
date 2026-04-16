import type { Metadata } from "next";
import { Audiowide, Inter, Orbitron, Playfair_Display } from "next/font/google";
import "./globals.css";
import {
  APP_NAME,
  BASE_URL,
  BRAND_DESCRIPTION,
  TAGLINE,
} from "@/constants/app.constants";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";
import JsonLd from "@/components/shared/JsonLd";

export const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const playfair = Audiowide({
  subsets: ["latin"],
  display: "swap",
  weight: ["400"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: `${APP_NAME} | ${TAGLINE}`,
    template: `%s | ${TAGLINE}`,
  },
  description: BRAND_DESCRIPTION,
  icons: {
    icon: [
      { url: "/assets/brand/favicons/favicon.ico", type: "image/x-icon" },
      { url: "/assets/brand/favicons/favicon.svg", type: "image/svg+xml" },
      {
        url: "/assets/brand/favicons/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
      {
        url: "/assets/brand/favicons/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        url: "/assets/brand/favicons/favicon-48x48.png",
        sizes: "48x48",
        type: "image/png",
      },
      {
        url: "/assets/brand/favicons/favicon-32x32.png",
        sizes: "32x32",
        type: "image/png",
      },
      {
        url: "/assets/brand/favicons/favicon-16x16.png",
        sizes: "16x16",
        type: "image/png",
      },
    ],
    apple: [
      {
        url: "/assets/brand/favicons/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  },
  keywords: [
    "Full-Stack Application Development",
    "Mobile Application Development",
    "E-Commerce Solutions",
    "AI Systems and Intelligent Automation",
    "SEO & Digital Visibility",
    "UI/UX Design",
    "Scalable Digital Solutions",
    "Custom Software Engineering",
    "Digital Transformation Agency",
  ],
  authors: [{ name: APP_NAME, url: BASE_URL }],
  creator: APP_NAME,
  publisher: APP_NAME,
  robots: "index, follow",
  category: "technology",
  alternates: {
    canonical: BASE_URL,
  },
  openGraph: {
    title: `${APP_NAME} | ${TAGLINE}`,
    siteName: APP_NAME,
    description: BRAND_DESCRIPTION,
    url: BASE_URL,
    images: { url: "opengraph-image" },
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${playfair.variable} ${inter.variable} antialiased`}>
        <JsonLd />
        {children}
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
