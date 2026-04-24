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
      description="We deliver high-performance digital environments across full-stack applications, mobile systems, e-commerce, AI automation, strategic SEO, user-centered UI/UX design, and social media management."
      breadcrumbs={[{ label: "Home", href: "/" }, { label: "Services" }]}
    />
  );
};

export default ServicesPageHero;
