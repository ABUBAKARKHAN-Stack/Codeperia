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
    "Learn about Codeperia, a scalable software development agency building high-performance web applications and enterprise systems.",

  keywords: [
    "About Codeperia",
    "Scalable Software Development Agency",
    "Technology Partner for Businesses",
  ],

  alternates: {
    canonical: `${BASE_URL}/about`,
  },

  openGraph: {
    siteName: APP_NAME,
    title: `About Codeperia | ${TAGLINE}`,
    description:
      "Discover how Codeperia engineers scalable software systems, enterprise applications, and growth-driven digital solutions for modern businesses.",
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
