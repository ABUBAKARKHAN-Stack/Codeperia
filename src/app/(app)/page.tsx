"use client";

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
    </>
  );
};

export default Home;
