"use client";

import React from "react";
import { SectionHeader } from "@/components/reusable";
import ContainerLayout from "@/components/layout/ContainerLayout";
import { WhyChooseUsCards } from "@/components/cards";
import { whyChooseSectionHeader } from "@/data/whychoose.data";

const WhyChooseUsSection = () => {
  return (
    <section className="h-full w-full py-16">
      <ContainerLayout>
        <SectionHeader mainHeading={whyChooseSectionHeader.mainHeading} />
        <section className="mt-10 grid w-full grid-cols-1 gap-14 sm:grid-cols-2 lg:grid-cols-3">
          <WhyChooseUsCards />
        </section>
      </ContainerLayout>
    </section>
  );
};

export default WhyChooseUsSection;
