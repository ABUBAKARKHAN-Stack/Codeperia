import ComingSoonSection from "@/components/section/portfolio/ComingSoonSection";
import Portfolio from "@/components/section/portfolio/Portfolio";
import PortfolioHeroSection from "@/components/section/portfolio/PortfolioHero";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Portfolio",
  description: "Our Innovative Projects Are Coming Soon!",
};

const PortfolioPage = () => {
  return (
    <>
      <ComingSoonSection />
    </>
  );
};

export default PortfolioPage;
