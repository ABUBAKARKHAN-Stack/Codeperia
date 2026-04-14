"use client";

import { ContainerLayout } from "@/components/layout";
import AnimatedSection from "@/components/shared/AnimatedSection";
import { NumberTicker } from "@/components/shared/NumberTicker";
import { ourMission } from "@/data/about.data";
import { stats } from "@/data/shared.data";
import { motion } from "motion/react";

const MissionSection = () => {
  return (
    <section className="section-padding bg-background">
      <ContainerLayout>
        <div className="grid grid-cols-1 items-center gap-20 lg:grid-cols-2">
          <AnimatedSection direction="left">
            <p className="text-accent mb-4 text-xs font-medium tracking-[0.3em] uppercase">
              Our Mission
            </p>
            <h2 className="text-foreground mb-6 text-3xl leading-tight font-bold md:text-4xl">
              Engineering Growth With Purpose
            </h2>
            <p className="text-muted-foreground mb-6 leading-relaxed font-light">
              {ourMission.para1}
            </p>
            <p className="text-muted-foreground relative text-sm leading-relaxed font-light">
              {ourMission.para2}
            </p>
          </AnimatedSection>
          <AnimatedSection direction="right" delay={0.2}>
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  className="glass-card rounded-2xl p-6 text-center"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.1, duration: 0.5 }}
                >
                  <p className="text-foreground text-3xl font-bold tabular-nums">
                    <NumberTicker
                      value={stat.val}
                      suffix={stat.suffix}
                      delay={0.3 + i * 0.1}
                    />
                  </p>
                  <p className="text-muted-foreground mt-2 text-xs tracking-wider uppercase">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </ContainerLayout>
    </section>
  );
};

export default MissionSection;
