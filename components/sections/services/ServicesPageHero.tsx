import PageHero from "@/components/shared/PageHero";

const ServicesPageHero = () => {
  return (
    <PageHero
      eyebrow="Our Services"
      title={
        <>
          What we <span className="text-accent italic">do best</span>
        </>
      }
      description="We deliver high-performance digital environments across full-stack applications, mobile systems, scalable e-commerce platforms, AI-driven automation, strategic SEO, and user-centered UI/UX design."
      breadcrumbs={[{ label: "Home", href: "/" }, { label: "Services" }]}
    />
  );
};

export default ServicesPageHero;
