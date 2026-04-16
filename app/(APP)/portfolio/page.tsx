import {
  PortfolioCTASection,
  PortfolioGridSection,
  PortfolioPageHero,
} from "@/components/sections/portfolio";
import { APP_NAME, BASE_URL, TAGLINE } from "@/constants/app.constants";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Codeperia Portfolio",
  description:
    "Explore the Codeperia portfolio of high-performance digital systems, enterprise applications, and strategic AI integrations built for measurable business growth.",
  keywords: [
    "Codeperia Project Gallery",
    "Software Engineering Case Studies",
    "High-Performance System Architecture",
    "Custom Digital Solutions Portfolio",
    "Enterprise Software Development Examples",
  ],
  alternates: {
    canonical: `${BASE_URL}/portfolio`,
  },
  openGraph: {
    siteName: APP_NAME,
    title: `Codeperia Portfolio | ${TAGLINE}`,
    description:
      "Witness how Codeperia solves complex business challenges through technical precision, scalable architecture, and strategic digital transformation.",
    url: `${BASE_URL}/portfolio`,
    images: { url: "opengraph-image" },
    type: "website",
  },
};

const PortfolioPage = () => {
  return (
    <>
      {/* Page Hero  */}
      <PortfolioPageHero />

      {/* Portfolio Grid Section  */}
      <PortfolioGridSection />

      {/* Portfolio Cta Section  */}
      <PortfolioCTASection />
    </>
  );
};

export default PortfolioPage;
