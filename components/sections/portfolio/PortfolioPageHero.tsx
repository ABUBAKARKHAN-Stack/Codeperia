import PageHero from "@/components/shared/PageHero";

const PortfolioPageHero = () => {
  return (
    <PageHero
      eyebrow="Our Work"
      title={
        <>
          Our <span className="text-accent italic">Portfolio</span>
        </>
      }
      description="Explore the Codeperia portfolio: where technical precision meets strategic business impact through high-performance, scalable systems engineered for growth."
      breadcrumbs={[{ label: "Home", href: "/" }, { label: "Portfolio" }]}
    />
  );
};

export default PortfolioPageHero;
