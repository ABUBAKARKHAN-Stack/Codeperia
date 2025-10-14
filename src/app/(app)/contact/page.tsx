import {
  ContactHeroSection,
  ContactSection,
  FAQSection,
  SecondaryCtaSection,
} from "@/components/section/contact";
import { baseUrl, brandName } from "@/constants/constants";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Contact",
  description: `Connect with ${brandName} to discuss your project or get support. Reach our team, explore FAQs, and let’s build innovative software solutions together.`,
  openGraph: {
    url: '/contact',
    images: { url: "opengraph-image" }
  },
  alternates: {
    canonical: '/contact',
  },
};

function ContactPage() {
  return (
    <>
      <ContactHeroSection />
      <ContactSection />
      <SecondaryCtaSection />
      <FAQSection />
    </>
  );
}

export default ContactPage;
