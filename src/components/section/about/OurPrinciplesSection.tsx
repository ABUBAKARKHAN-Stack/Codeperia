import OurPrinciplesCards from "@/components/cards/OurPrinciplesCards";
import { ContainerLayout } from "@/components/layout";
import { SectionHeader } from "@/components/reusable";
import React from "react";

const OurPrinciplesSection = () => {
  return (
    <section className="h-full w-full py-16">
      <ContainerLayout>
        <SectionHeader mainHeading="Our Guiding Principles" />
        <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <OurPrinciplesCards />
        </div>
      </ContainerLayout>
    </section>
  );
};

export default OurPrinciplesSection;
