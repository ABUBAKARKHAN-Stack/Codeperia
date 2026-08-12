import type { Metadata } from "next";
import { Audiowide, Inter } from "next/font/google";
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
  applicationName: APP_NAME,
  appleWebApp: {
    title: APP_NAME
  },

  keywords: [
    "Full-Stack Application Development",
    "Mobile Application Development",
    "E-Commerce Solutions",
    "AI Systems and Intelligent Automation",
    "SEO & Digital Visibility",
    "UI/UX Design",
    "Social Media Management",
    "Strategic Social Media Growth",
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
