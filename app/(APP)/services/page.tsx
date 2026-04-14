import {
  ServicesCTASection,
  ServicesGridSection,
  ServicesPageHero,
} from "@/components/sections/services";
import { APP_NAME, BASE_URL } from "@/constants/app.constants";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: { absolute: `Software Development Services | ${APP_NAME}` },

  description:
    "T-Solutionz delivers full-stack and mobile apps, AI systems, e-commerce platforms, DevOps, cloud, and SEO solutions for lasting digital growth and business impact.",

  keywords: [
    "Software Development Services",
    "Full-Stack Application Development",
    "Mobile Application Development",
    "AI Systems and Intelligent Automation",
    "E-Commerce Solutions Development",
    "DevOps and Cloud Infrastructure",
    "SEO and Digital Visibility Services",
    "Scalable Web and Mobile Applications",
    "Enterprise Software Engineering",
    "High-Performance Digital Systems",
  ],

  alternates: {
    canonical: `${BASE_URL}/services`,
  },

  openGraph: {
    siteName: APP_NAME,
    title: `Software Development Services | ${APP_NAME}`,
    description:
      "T-Solutionz delivers full-stack and mobile application development, AI systems and intelligent automation, scalable e-commerce platforms, DevOps & cloud infrastructure, and SEO-driven digital growth solutions engineered for performance and long-term business impact.",
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
