"use client";

import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { stats } from "@/data/shared.data";
import Link from "next/link";
import Image from "next/image";
import { ContainerLayout } from "../../layout";
import { NumberTicker } from "@/components/shared/NumberTicker";
import AnimatedSection from "@/components/shared/AnimatedSection";
import MagneticButton from "@/components/shared/MagneticButton";
import { aboutPreviewData } from "@/data/landing.data";

const AboutPreviewSection = () => {
  return (
    <section className="section-padding bg-background relative overflow-hidden">
      <div className="bg-accent/5 absolute bottom-0 left-0 h-125 w-125 rounded-full blur-[150px]" />

      <ContainerLayout className="relative z-10">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2 lg:gap-24">
          {/* Left — text content */}
          <AnimatedSection direction="left">
            <p className="text-accent mb-4 text-xs font-medium tracking-[0.3em] uppercase">
              About Us
            </p>
            <h2 className="text-foreground mb-6 text-4xl leading-tight font-bold md:text-5xl">
              Strategy meets <span className="text-accent italic">purpose</span>
            </h2>
            <p className="text-muted-foreground mb-4 leading-relaxed font-light">
              {aboutPreviewData.para1}
            </p>
            <p className="text-muted-foreground mb-8 text-sm leading-relaxed font-light">
              {aboutPreviewData.para2}
            </p>

            {/* Highlights row */}
            <div className="mb-8 flex items-center gap-6">
              {aboutPreviewData.highlights.map((item) => (
                <div key={item.label} className="flex items-center gap-2">
                  <div className="bg-accent/10 flex h-8 w-8 items-center justify-center rounded-lg">
                    <item.icon className="text-accent h-3.5 w-3.5" />
                  </div>
                  <span className="text-foreground text-xs font-medium">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>

            <MagneticButton>
              <Button
                asChild
                variant="outline"
                className="border-border text-foreground hover:bg-accent/10 h-10 rounded-full px-6 text-sm font-medium"
              >
                <Link href="/about">
                  Learn More About Us <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </MagneticButton>
          </AnimatedSection>

          {/* Right — image + overlaid stats */}
          <AnimatedSection direction="right" delay={0.2}>
            <div className="relative">
              {/* Main image */}
              <div className="overflow-hidden rounded-3xl shadow-2xl">
                <Image
                  src={"/assets/about-preview.jpg"}
                  alt="T-Solutionz team collaborating in a modern office"
                  className="h-125 w-full object-cover"
                  width={500}
                  height={500}
                  loading="lazy"
                />
                <div className="from-foreground/30 absolute inset-0 rounded-3xl bg-linear-to-t via-transparent to-transparent" />
              </div>

              {/* Floating stats overlay */}
              <div className="absolute right-4 -bottom-6 left-4 grid grid-cols-2 gap-3">
                {stats.map((stat, i) => (
                  <motion.div
                    key={stat.label}
                    className="bg-card/80 border-border/30 group hover:border-accent/30 rounded-xl border px-4 py-3 text-center backdrop-blur-xl transition-all duration-500"
                    style={{ willChange: "backdrop-filter" }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + i * 0.1, duration: 0.5 }}
                  >
                    <p className="text-foreground group-hover:text-accent text-xl font-bold tabular-nums transition-colors duration-500 md:text-2xl">
                      <NumberTicker
                        value={stat.val}
                        suffix={stat.suffix}
                        delay={0.3 + i * 0.1}
                      />
                    </p>
                    <p className="text-muted-foreground text-[9px] tracking-wider uppercase">
                      {stat.label}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </ContainerLayout>
    </section>
  );
};

export default AboutPreviewSection;
