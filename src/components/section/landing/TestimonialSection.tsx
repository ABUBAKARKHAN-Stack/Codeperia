"use client";

import React from "react";
import ContainerLayout from "@/components/layout/ContainerLayout";
import {
  testimonials,
  testimonialSectionHeader,
} from "@/data/testimonials.data";
import { SectionHeader } from "@/components/reusable";
import { TestimonialsCarousel } from "./TestimonialsCarousel";

const TestimonialSection = () => {
  return (
    <section id="testimonials" className="h-full w-full py-16">
      <ContainerLayout>
        <SectionHeader mainHeading={testimonialSectionHeader.mainHeading} />

        <section className="mt-10 h-full mask-x-from-95%">
          <TestimonialsCarousel
            items={testimonials}
            autoplay
            loop
            showPagination
            spaceBetween={10}
          />
        </section>
      </ContainerLayout>
    </section>
  );
};

export default TestimonialSection;
