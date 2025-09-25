"use client";

import React from "react";
import ContainerLayout from "@/components/layout/ContainerLayout";
import { SectionHeader } from "@/components/reusable";
import { WhatWeDoCards } from "@/components/cards";

const WhatWeDoSection = () => {
  return (
    <section
      id="what-we-do-section"
      className="h-full w-full overflow-hidden py-16"
    >
      <ContainerLayout>
        <SectionHeader mainHeading="Areas of Expertise" />
        <section className="mt-10 grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <WhatWeDoCards />
        </section>
      </ContainerLayout>
    </section>
  );
};

export default WhatWeDoSection;
