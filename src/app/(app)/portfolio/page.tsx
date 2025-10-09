import ComingSoonSection from "@/components/section/portfolio/ComingSoonSection";
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
