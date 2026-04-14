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
      description={`${APP_NAME} was founded in 2026 with a clear purpose, to build digital systems that are not only functional, but scalable, intelligent, and future-ready.`}
      breadcrumbs={[{ label: "Home", href: "/" }, { label: "About" }]}
    />
  );
};

export default AboutPageHero;
