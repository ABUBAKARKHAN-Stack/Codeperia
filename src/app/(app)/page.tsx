
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

const Home = () => {
  return (
    <>
      <HeroSection />
      <AboutUsSection />
      <WhatWeDoSection />
      <WhyChooseUsSection />
      {/* <OurWorkSection /> */}
      <TestimonialSection />
      <TechStackSection />
      <ContactSection />
      <ScrollToTopBtn />
    </>
  );
};

export default Home;
