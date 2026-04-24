"use client";

import {
  StaggerChildren,
  itemVariants,
} from "@/components/shared/StaggerChildren";
import SectionHeader from "@/components/shared/SectionHeader";
import { motion } from "motion/react";
import { ContainerLayout } from "@/components/layout";
import { values } from "@/data/about.data";

const ValuesSection = () => {
  return (
    <section className="section-padding border-border/50 border-y">
      <ContainerLayout>
        <SectionHeader
          eyebrow="Our Values"
          title="Principles Behind Every System"
        />

        <StaggerChildren className="xsm:grid-cols-2 grid grid-cols-1 gap-6 lg:grid-cols-4">
          {values.map((v) => (
            <motion.div key={v.title} variants={itemVariants}>
              <div className="glass-card h-full rounded-2xl p-8 text-center">
                <div className="bg-accent/10 mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl">
                  <v.icon className="text-accent h-6 w-6" />
                </div>
                <h3
                  className="text-foreground mb-3 text-base font-semibold"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  {v.title}
                </h3>
                <p className="text-muted-foreground mx-auto max-w-sm text-sm leading-relaxed">
                  {v.description}
                </p>
              </div>
            </motion.div>
          ))}
        </StaggerChildren>
      </ContainerLayout>
    </section>
  );
};

export default ValuesSection;
