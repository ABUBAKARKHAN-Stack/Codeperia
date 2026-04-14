"use client";

import { motion } from "motion/react";
import {
  StaggerChildren,
  itemVariants,
} from "@/components/shared/StaggerChildren";
import SectionHeader from "@/components/shared/SectionHeader";
import { ContainerLayout } from "@/components/layout";
import { approachSteps } from "@/data/landing.data";

const ApproachSection = () => {
  return (
    <section className="section-padding bg-background relative overflow-hidden">
      <div className="bg-accent/5 absolute bottom-0 left-0 h-125 w-125 rounded-full blur-[150px]" />
      <ContainerLayout className="relative z-10">
        <SectionHeader
          eyebrow="Our Approach"
          title={
            <>
              A proven path to{" "}
              <span className="text-accent italic">results</span>
            </>
          }
          centered
        />

        <StaggerChildren
          className="xsm:grid-cols-2 grid grid-cols-1 gap-6 lg:grid-cols-4"
          staggerDelay={0.1}
        >
          {approachSteps.map((step, i) => (
            <motion.div
              key={step.title}
              variants={itemVariants}
              className="relative"
            >
              {i < approachSteps.length - 1 && (
                <div className="border-border/40 absolute top-10 left-[calc(50%+30px)] hidden h-px w-[calc(100%-60px)] border-t border-dashed lg:block" />
              )}
              <div className="glass-card group h-full rounded-2xl p-8 text-center">
                <div className="bg-accent/10 group-hover:bg-accent/20 relative mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl transition-colors duration-500">
                  <step.icon className="text-accent h-5 w-5" />
                  <span className="bg-accent text-background absolute -top-2 -right-2 flex h-6 w-6 items-center justify-center rounded-full text-[10px] font-bold">
                    {step.num}
                  </span>
                </div>
                <h3 className="text-foreground mb-2 text-base font-semibold">
                  {step.title}
                </h3>
                <p className="text-muted-foreground mx-auto max-w-sm text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </StaggerChildren>
      </ContainerLayout>
    </section>
  );
};

export default ApproachSection;
