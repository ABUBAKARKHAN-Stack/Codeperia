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
  OurWorkSection,
} from "@/components/section/landing";
import { SanityLive } from "@/sanity/lib/live";
import { getServices } from "@/helpers/services.helper";
import { ServicesProvider } from "@/context/services.context";
import { Metadata } from "next";
import { brandName } from "@/constants/constants";
import { getReviews } from "@/helpers/review.helper";
import { ReviewsProvider } from "@/context/reviews.content";

export const metadata: Metadata = {
  title: `${brandName} | Software Development Company`,
  description:
    "We are a forward-thinking tech startup creating modern, scalable web and software solutions that combine creativity, technology, and strategy for success.",
  openGraph: {
    url: "/",
    images: { url: "opengraph-image" },
    siteName: brandName,
  },
  alternates: {
    canonical: "/",
  },
};

const Home = async () => {
  const services = await getServices();
  const reviews = await getReviews();

  return (
    <>
      <ServicesProvider services={services}>
        <ReviewsProvider reviews={reviews}>
          <SanityLive />
          <HeroSection />
          <AboutUsSection />
          <WhatWeDoSection />
          <WhyChooseUsSection />
          <OurWorkSection />
          <TestimonialSection />
          <TechStackSection />
          <ContactSection />
        </ReviewsProvider>
      </ServicesProvider>
    </>
  );
};

export default Home;
