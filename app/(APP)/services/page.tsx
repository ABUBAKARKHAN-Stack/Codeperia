import {
  ServicesCTASection,
  ServicesGridSection,
  ServicesPageHero,
} from "@/components/sections/services";
import { APP_NAME, BASE_URL } from "@/constants/app.constants";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: { absolute: `High-Performance Software Services | ${APP_NAME}` },

  description:
    "Codeperia delivers premium engineering and growth services including full-stack and mobile applications, e-commerce solutions, AI systems, SEO, UI/UX design, and social media management built for performance.",

  keywords: [
    "Software Development Services",
    "Full-Stack Application Development",
    "Mobile Application Development",
    "E-Commerce Solutions Development",
    "AI Systems and Intelligent Automation",
    "SEO & Digital Visibility Services",
    "UI/UX Design Agency",
    "Social Media Management",
    "Strategic Social Media Growth",
    "Scalable Enterprise Systems",
    "Custom Software Engineering",
  ],

  alternates: {
    canonical: `${BASE_URL}/services`,
  },

  openGraph: {
    siteName: APP_NAME,
    title: `Premium Software Development Services | ${APP_NAME}`,
    description:
      "Codeperia engineers high-performance digital environments across full-stack systems, mobile apps, e-commerce, AI automation, and strategic digital visibility solutions.",
    url: `${BASE_URL}/services`,
    images: { url: "opengraph-image" },
    type: "website",
  },
};

const ServicesPage = () => {
  return (
    <>
      <ServicesPageHero />
      <ServicesGridSection />
      <ServicesCTASection />
    </>
  );
};

export default ServicesPage;
