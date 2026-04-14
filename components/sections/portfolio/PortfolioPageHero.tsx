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
      description="Discover Codeperia projects where engineering precision meets business impact, scalable, high-performance systems built for growth."
      breadcrumbs={[{ label: "Home", href: "/" }, { label: "Portfolio" }]}
    />
  );
};

export default PortfolioPageHero;
