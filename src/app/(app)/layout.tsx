import { Footer, Navbar } from "@/components/layout";
import ScrollToTopBtn from "@/components/ui/scroll-to-top-btn";
import { baseUrl, brandName } from "@/constants/constants";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: {
    default: `${brandName} | Software Development Company`,
    template: `%s | ${brandName}`,
  },
  description:
    "We are a forward-thinking tech startup creating modern, scalable web and software solutions that combine creativity, technology, and strategy for success.",
  icons: {
    icon: [
      { url: "/assets/favicons/favicon.ico", type: "image/png" },
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
    "codeperia",
    "digital tech agency",
    "software development",
    "custom web applications",
    "ui-ux",
    "ui",
    "ux",
    "devops and automation",
    "devops",
    "automation",
    "tech agency",
    "modern digital solutions",
    "scalable web apps",
    "scalable mobile apps",
  ],
  creator: brandName,
  publisher: brandName,
  robots: "index, follow",
  category: "technology",
  alternates: {
    canonical: baseUrl,
  },
  openGraph: {
    siteName: brandName,
    url: baseUrl,
  },
};

const layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
      <ScrollToTopBtn />
    </>
  );
};

export default layout;
