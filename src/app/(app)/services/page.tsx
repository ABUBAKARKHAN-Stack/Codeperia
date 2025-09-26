import { WhatWeDoSection } from "@/components/section/landing";
import {
  FeaturedServiceSection,
  ServicesContactSection,
  ServicesHero,
} from "@/components/section/services/";
import { brandName } from "@/constants/constants";
import { ServicesProvider } from "@/context/services.context";
import { getServices } from "@/helpers/services.helper";
import { SanityLive } from "@/sanity/lib/live";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: `Services`,
  description: `Explore ${brandName}'s services including web development, app development, full stack development and e-commerce solutions, UI/UX design, and DevOps automation.`,
};

const ServicePage = async () => {
  const services = await getServices();
  return (
    <ServicesProvider services={services}>
      <SanityLive />
      <ServicesHero />
      <WhatWeDoSection />
      {/* <FeaturedServiceSection /> */}
      <ServicesContactSection />
    </ServicesProvider>
  );
};

export default ServicePage;
