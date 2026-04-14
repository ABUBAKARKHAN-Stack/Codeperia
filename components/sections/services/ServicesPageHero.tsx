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
      description="From full-stack and mobile applications to AI systems, e-commerce platforms, and cloud infrastructure, we engineer scalable digital ecosystems built for performance, automation, and measurable growth."
      breadcrumbs={[{ label: "Home", href: "/" }, { label: "Services" }]}
    />
  );
};

export default ServicesPageHero;
