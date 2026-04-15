"use client";

import { motion, useInView } from "motion/react";
import ContainerLayout from "@/components/layout/ContainerLayout";
import { aboutUsSectionHeader } from "@/data/about.data";
import { SectionHeader } from "@/components/reusable";
import { PiRocket } from "react-icons/pi";
import { useRef } from "react";
import { useRouter } from "next/navigation";
import { AnimatedHoverBtn } from "@/components/ui/animated-hover-btn";
import OurPrinciplesCards from "@/components/cards/OurPrinciplesCards";

export default function AboutUsSection() {
  const aboutRef = useRef(null);
  const router = useRouter();

  const inView = useInView(aboutRef, {
    margin: "-100px",
    once: true,
  });

  return (
    <section ref={aboutRef} className="w-full overflow-hidden py-16">
      <ContainerLayout>
        <SectionHeader mainHeading={aboutUsSectionHeader.mainHeading} />

        <motion.div
          animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="mt-10 flex max-w-4xl flex-col gap-y-4 text-center font-normal text-white/90 md:text-left"
        >
          <p className="text-base leading-relaxed md:text-lg">
            We’re building empires of ideas at the heart of everything we do.
            Every line of code, design choice, and interaction is crafted to
            make a meaningful impact and set new standards.
          </p>

          <p className="text-base leading-relaxed md:text-lg">
            The digital world is full of opportunities waiting to be shaped.
            That’s why we combine creativity, technology, and vision to elevate
            ideas and projects to new heights. For us, innovation is not just a
            goal, it’s the journey of building something lasting.
          </p>
        </motion.div>

        <motion.div
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 1 }}
        >
          <h2 className="mt-16 text-center text-2xl font-semibold md:text-left md:text-3xl">
            Our Guiding Principles
          </h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <OurPrinciplesCards />
          </div>

          <div className="mt-12 flex justify-center md:justify-start">
            <AnimatedHoverBtn
              icon={PiRocket}
              onClick={() => router.push("/about")}
            >
              Learn More About Us
            </AnimatedHoverBtn>
          </div>
        </motion.div>
      </ContainerLayout>
    </section>
  );
}
