import {
  ContactFormAndInfo,
  ContactPageHero,
} from "@/components/sections/contact";
import JsonLd from "@/components/shared/JsonLd";
import { APP_NAME, BASE_URL, TAGLINE } from "@/constants/app.constants";
import { contactInfo, socials } from "@/constants/navigation.constants";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact T-Solutionz",
  description:
    "Get in touch with T-Solutionz, a scalable software agency. Discuss your project, explore solutions, and build high-performance systems.",
  keywords: [
    "Contact T-Solutionz",
    "Software Development Inquiry",
    "Digital Solutions Contact",
    "Scalable Systems Consultation",
    "Full-Stack Development Inquiry",
    "AI & LLM Project Contact",
  ],
  alternates: {
    canonical: `${BASE_URL}/contact`,
  },
  openGraph: {
    siteName: APP_NAME,
    title: `Contact T-Solutionz | ${TAGLINE}`,
    description:
      "Reach out to T-Solutionz to discuss scalable web applications, AI integrations, and DevOps solutions built for long-term growth and high performance.",
    url: `${BASE_URL}/contact`,
    images: { url: "opengraph-image" },
    type: "website",
  },
};

const ContactPage = () => {
  return (
    <>

      {/* Json LD Bunniess Schema  */}
      <JsonLd
        schema={{
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": APP_NAME,
          "contactPoint": {
            "@type": "ContactPoint",
            "contactType": "customer support",
            "telephone": "+92-3257030523",
            "email": "support@t-solutionz.com"
          },
          "availableLanguage": ["English", "Urdu"],
          "areaServed": "Worldwide",
          "parentOrganization": {
            "@type": "Organization",
            "name": APP_NAME,
            "url": BASE_URL
          }
        }}
      />

      {/* Contact Page Hero  */}
      <ContactPageHero />

      {/* Contact Form and Info Section  */}
      <ContactFormAndInfo />
    </>
  );
};

export default ContactPage;
