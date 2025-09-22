import type { Metadata } from "next";
import { Poppins, Audiowide, Orbitron } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { baseUrl, brandName, foundersSocials } from "@/constants/constants";
import { Toaster } from "sonner";
import { SmoothCursor } from "@/components/ui/smooth-cursor";
import { LenisProvider } from "@/context/LenisContext";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const audiowide = Audiowide({
  variable: "--font-audiowide",
  subsets: ["latin"],
  weight: ["400"],
});

const orbitron = Orbitron({
  variable: "--font-orbitron",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: {
    default: `${brandName} | Software Development Company`,
    template: `%s | ${brandName}`,
  },
  description:
    "We are a forward-thinking tech startup helping businesses build modern, scalable, and user-friendly digital solutions. From custom web applications to innovative software products, we combine creativity, technology, and strategy to drive growth and success.",
  icons: {
    icon: [
      { url: "/assets/favicons/favicon.svg", type: "image/svg+xml" },
      {
        url: "/assets/favicons/favicon-32X32.png",
        sizes: "32x32",
        type: "image/png",
      },
      {
        url: "/assets/favicons/favicon-16X16.png",
        sizes: "16x16",
        type: "image/png",
      },
    ],
    apple: [
      {
        url: "/assets/favicons/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  },
  keywords: [
    "tech startup",
    "software development",
    "custom web applications",
    "tech agency",
    "modern digital solutions",
    "scalable web apps",
  ],
  authors: [
    { name: "Awais", url: foundersSocials.abubakar.linkedin },
    { name: "Abubakar", url: foundersSocials.awais.linkedin },
  ],
  creator: brandName,
  publisher: brandName,
  robots: "index, follow",
  category: "technology",
  alternates: {
    canonical: baseUrl,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${poppins.variable} ${audiowide.variable} ${orbitron.variable} font-poppins h-full w-full min-w-screen overflow-x-hidden bg-[#2a0347] antialiased`}
      >
        <LenisProvider>
          {children}
          <Toaster position="top-center" duration={2000} theme="system" />
          <Analytics />
          <SpeedInsights />
        </LenisProvider>
      </body>
    </html>
  );
}
