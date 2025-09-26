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
import ScrollToTopBtn from "@/components/ui/scroll-to-top-btn";
import { SanityLive } from "@/sanity/lib/live";
import { getServices } from "@/helpers/services.helper";
import { ServicesProvider } from "@/context/services.context";

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
        <ScrollToTopBtn />
      </ServicesProvider>
    </>
  );
};

export default Home;
