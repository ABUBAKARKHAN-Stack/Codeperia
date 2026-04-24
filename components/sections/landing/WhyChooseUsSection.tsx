"use client";

import { motion } from "motion/react";
import {
  StaggerChildren,
  itemVariants,
} from "@/components/shared/StaggerChildren";
import ParallaxSection from "@/components/shared/ParallaxSection";
import SectionHeader from "@/components/shared/SectionHeader";
import { ContainerLayout } from "@/components/layout";
import { whyChooseUsReasons } from "@/data/landing.data";

const WhyChooseUsSection = () => {
  return (
    <ParallaxSection speed={0.1}>
      <section className="section-padding bg-card/30 relative overflow-hidden">
        <div className="bg-accent/5 absolute top-0 right-0 h-150 w-150 rounded-full blur-[180px]" />
        <ContainerLayout className="relative z-10">
          <SectionHeader
            eyebrow="Why Choose Us"
            title={
              <>
                Built on <span className="text-accent italic">trust</span> and
                results
              </>
            }
            description="We partner with your team to deliver scalable, high-performance solutions that drive measurable impact."
          />

          <StaggerChildren
            className="xsm:grid-cols-2 grid grid-cols-1 gap-6 lg:grid-cols-3"
            staggerDelay={0.08}
          >
            {whyChooseUsReasons.map((r) => (
              <motion.div key={r.title} variants={itemVariants}>
                <div className="group glass-card h-full rounded-2xl p-8">
                  <div className="bg-accent/10 group-hover:bg-accent/20 mb-5 flex h-12 w-12 items-center justify-center rounded-2xl transition-colors duration-500">
                    <r.icon className="text-accent h-5 w-5" />
                  </div>
                  <h3 className="text-foreground mb-2 text-base font-semibold">
                    {r.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {r.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </StaggerChildren>
        </ContainerLayout>
      </section>
    </ParallaxSection>
  );
};

export default WhyChooseUsSection;
