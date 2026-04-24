"use client";

import { ContainerLayout } from "@/components/layout";
import ParallaxSection from "@/components/shared/ParallaxSection";
import SectionHeader from "@/components/shared/SectionHeader";
import {
  StaggerChildren,
  itemVariants,
} from "@/components/shared/StaggerChildren";
import { featuresContent } from "@/data/landing.data";
import { motion } from "motion/react";

const FeaturesSection = () => {
  return (
    <ParallaxSection speed={0.15}>
      <section className="section-padding bg-background relative">
        <ContainerLayout>
          <SectionHeader
            eyebrow="What We Offer"
            title="Core Capabilities That Scale"
            className="mb-16"
          />

          <StaggerChildren className="xsm:grid-cols-2 grid grid-cols-1 gap-6 lg:grid-cols-3">
            {featuresContent.map((feature) => (
              <motion.div key={feature.title} variants={itemVariants}>
                <div className="group glass-card h-full cursor-default rounded-2xl p-8">
                  <div className="mb-6 flex items-start justify-between">
                    <div className="bg-accent/10 group-hover:bg-accent/20 flex h-12 w-12 items-center justify-center rounded-2xl transition-colors duration-500">
                      <feature.icon className="text-accent h-5 w-5" />
                    </div>
                    <span className="text-muted-foreground/40 font-mono text-xs">
                      {feature.num}
                    </span>
                  </div>
                  <h3
                    className="text-foreground mb-3 text-lg font-semibold"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {feature.description}
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

export default FeaturesSection;
