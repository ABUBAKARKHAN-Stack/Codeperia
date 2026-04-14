import {
  PortfolioCTASection,
  PortfolioGridSection,
  PortfolioPageHero,
} from "@/components/sections/portfolio";
import { APP_NAME, BASE_URL, TAGLINE } from "@/constants/app.constants";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "T-Solutionz Portfolio",
  description:
    "Explore T-Solutionz’s portfolio of high-performance web apps, AI systems, and enterprise software designed for scalability and impact.",
  keywords: [
    "T-Solutionz Portfolio",
    "Software Development Case Studies",
    "AI & LLM Project Showcase",
    "Full-Stack Applications Portfolio",
    "Enterprise Software Examples",
    "Scalable Systems Showcase",
    "Web Application Development Projects",
  ],
  alternates: {
    canonical: `${BASE_URL}/portfolio`,
  },
  openGraph: {
    siteName: APP_NAME,
    title: `T-Solutionz Portfolio | ${TAGLINE}`,
    description:
      "View T-Solutionz’s projects, from scalable web applications to AI-driven enterprise systems, demonstrating innovation, performance, and measurable business results.",
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
