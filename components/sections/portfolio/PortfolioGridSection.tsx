"use client";

import { ContainerLayout } from "@/components/layout";
import { StaggerChildren } from "@/components/shared/StaggerChildren";
import PortfolioCard from "@/components/shared/PortfolioCard";
import { usePortfolio } from "@/context/PortfolioContext";

const PortfolioGridSection = () => {
  const { portfolioOverview } = usePortfolio();
  return (
    <section className="section-padding bg-background">
      <ContainerLayout>
        <StaggerChildren
          className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
          staggerDelay={0.08}
        >
          {portfolioOverview.map((project) => (
            <PortfolioCard key={project._id} project={project} />
          ))}
        </StaggerChildren>
      </ContainerLayout>
    </section>
  );
};

export default PortfolioGridSection;
