import {
  AboutCTASection,
  AboutPageHero,
  MissionSection,
  OurJourneySection,
  OurTeamSection,
  ValuesSection,
} from "@/components/sections/about";
import { APP_NAME, BASE_URL, TAGLINE } from "@/constants/app.constants";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Codeperia",

  description:
    "Codeperia is a premium software development agency providing scalable engineering, strategic technology consulting, and high-performance digital solutions for modern enterprises.",

  keywords: [
    "About Codeperia",
    "Scalable Software Engineering",
    "Enterprise Technology Partner",
    "High-Performance Digital Transformation",
    "Reliable Software Solutions architecture",
  ],

  alternates: {
    canonical: `${BASE_URL}/about`,
  },

  openGraph: {
    siteName: APP_NAME,
    title: `About Codeperia | ${TAGLINE}`,
    description:
      "Learn how Codeperia bridges the gap between complex digital challenges and high-performance, scalable solutions through engineering excellence and strategic innovation.",
    url: `${BASE_URL}/about`,
    images: { url: "opengraph-image" },
    type: "website",
  },
};

const AboutPage = () => {
  return (
    <>
      {/* About Page Hero  */}
      <AboutPageHero />

      {/* Our Mission Section  */}
      <MissionSection />

      {/* Our Jounrey Section  */}
      <OurJourneySection />

      {/* Our Values Section */}
      <ValuesSection />

      {/* Our Team Section  */}
      <OurTeamSection />

      {/* Founder Quote Section  */}
      {/* <FounderQuoteSection /> */}

      {/* About CTA Section  */}
      <AboutCTASection />
    </>
  );
};

export default AboutPage;
