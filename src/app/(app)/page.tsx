import React from "react";
import {
  HeroSection,
  WhatWeDoSection,
  WhyChooseUsSection,
  AboutUsSection,
  // OurWorkSection,
  TestimonialSection,
  TechStackSection,
  ContactSection,
} from "@/components/section/landing";
import { SanityLive } from "@/sanity/lib/live";
import { getServices } from "@/helpers/services.helper";
import { ServicesProvider } from "@/context/services.context";
import { Metadata } from "next";
import { baseUrl, brandName } from "@/constants/constants";


export const metadata: Metadata = {
  title: `${brandName} | Software Development Company`,
  description: "We are a forward-thinking tech startup creating modern, scalable web and software solutions that combine creativity, technology, and strategy for success.",
  alternates: {
    canonical: `${baseUrl}/`,
  },
  openGraph: {
    siteName: brandName,
    url: `${baseUrl}/`,
  },
};

const Home = async () => {
  const services = await getServices();
  return (
    <>
      <ServicesProvider services={services}>
        <SanityLive />
        <HeroSection />
        <AboutUsSection />
        <WhatWeDoSection />
        <WhyChooseUsSection />
        {/* <OurWorkSection /> */}
        <TestimonialSection />
        <TechStackSection />
        <ContactSection />
      </ServicesProvider>
    </>
  );
};

export default Home;
