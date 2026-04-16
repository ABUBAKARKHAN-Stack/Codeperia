import PageHero from "@/components/shared/PageHero";
import { APP_NAME } from "@/constants/app.constants";

const AboutPageHero = () => {
  return (
    <PageHero
      eyebrow="About Us"
      title={
        <>
          About <span className="text-accent italic">{APP_NAME}</span>
        </>
      }
      description={`${APP_NAME} was established in 2025, with a singular mission: to engineer high-performance digital systems that are built for reliability, intelligence, and sustainable scalability.`}
      breadcrumbs={[{ label: "Home", href: "/" }, { label: "About" }]}
    />
  );
};

export default AboutPageHero;
