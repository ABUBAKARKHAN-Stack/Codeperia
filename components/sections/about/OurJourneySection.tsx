"use client";

import { ContainerLayout } from "@/components/layout";
import SectionHeader from "@/components/shared/SectionHeader";
import { milestones } from "@/data/about.data";
import { motion } from "motion/react";

const OurJourneySection = () => {
  return (
    <section className="section-padding border-border/50 bg-muted/20 border-y">
      <ContainerLayout>
        <SectionHeader
          eyebrow="Our Journey"
          title="From Vision to Scalable Systems"
          centered
        />

        <div className="relative mx-auto max-w-4xl">
          {/* Vertical line */}
          <div className="bg-border/60 absolute top-0 bottom-0 left-4 w-px md:left-1/2 md:-translate-x-px" />
          {milestones.map((m, i) => {
            const isLeft = i % 2 === 0;
            return (
              <motion.div
                key={m.title}
                className={`relative mb-12 flex items-start gap-6 last:mb-0 md:w-1/2 ${isLeft ? "md:ml-0 md:pr-12" : "md:ml-auto md:pl-12"}`}
                initial={{ opacity: 0, x: isLeft ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
              >
                {/* Dot */}
                <div
                  className={`absolute top-1 ${isLeft ? "left-3.25 md:right-1.75 md:left-auto" : "left-3.25 md:left-1.75"} bg-accent border-background z-10 h-3.5 w-3.5 rounded-full border-[3px]`}
                />
                {/* Card */}
                <div className="border-border/30 bg-card/60 hover:border-accent/20 ml-10 rounded-xl border p-5 backdrop-blur-sm transition-colors duration-300 md:ml-0">
                  <span className="text-accent font-mono text-[10px] tracking-widest uppercase">
                    {m.year}
                  </span>
                  <h3 className="text-foreground mt-1 mb-1.5 text-sm font-semibold">
                    {m.title}
                  </h3>
                  <p className="text-muted-foreground text-xs leading-relaxed font-light">
                    {m.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </ContainerLayout>
    </section>
  );
};

export default OurJourneySection;
