import {
  ContactSection,
  WhatWeDoSection,
} from "@/components/section/landing";
import FeaturedServiceSection from "@/components/section/services/FeaturedServiceSection";
import ServicesHero from "@/components/section/services/ServicesHero";
import { brandName } from "@/constants/constants";
import { ServicesProvider } from "@/context/services.context";
import { getServices } from "@/helpers/services.helper";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: `Services`,
  description: `Explore ${brandName}'s services including web development, app development, full stack development and e-commerce solutions, UI/UX design, and DevOps automation.`,
};

const ServicePage = async () => {
  const services = await getServices()
  return (
    <ServicesProvider services={services}>
      <ServicesHero />
      <WhatWeDoSection />
      <FeaturedServiceSection />
      <ContactSection forServices />
    </ServicesProvider>
  );
};

export default ServicePage;
