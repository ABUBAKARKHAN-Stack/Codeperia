"use client";

import React from "react";
import ContainerLayout from "@/components/layout/ContainerLayout";
import { SectionHeader } from "@/components/reusable";
import { TestimonialsCarousel } from "./TestimonialsCarousel";

const TestimonialSection = () => {

  return (
    <section id="testimonials" className="h-full w-full py-16">
      <ContainerLayout>
        <SectionHeader mainHeading={"What Our Clients Say"} />

        <section className="mt-10 h-full mask-x-from-95%">
          <TestimonialsCarousel
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
