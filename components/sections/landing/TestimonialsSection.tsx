"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import SectionHeader from "@/components/shared/SectionHeader";
import { ContainerLayout } from "@/components/layout";
import { testimonials } from "@/data/landing.data";

const TestimonialsSection = () => {
  const [active, setActive] = useState(2);

  const prev = () =>
    setActive((a) => (a === 0 ? testimonials.length - 1 : a - 1));
  const next = () =>
    setActive((a) => (a === testimonials.length - 1 ? 0 : a + 1));

  const getOffset = (index: number) => {
    let diff = index - active;
    if (diff > Math.floor(testimonials.length / 2)) diff -= testimonials.length;
    if (diff < -Math.floor(testimonials.length / 2))
      diff += testimonials.length;
    return diff;
  };

  return (
    <section className="section-padding bg-background overflow-hidden">
      <ContainerLayout>
        <SectionHeader
          eyebrow="Testimonials"
          title={
            <>
              What our clients <span className="text-accent italic">say</span>
            </>
          }
          centered
        />

        {/* Coverflow carousel */}
        <motion.div
          className="relative flex h-95 cursor-grab items-center justify-center active:cursor-grabbing md:h-85"
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.1}
          onDragEnd={(_, info) => {
            if (info.offset.x > 60) prev();
            else if (info.offset.x < -60) next();
          }}
        >
          {testimonials.map((t, i) => {
            const offset = getOffset(i);
            const isActive = offset === 0;
            const absOffset = Math.abs(offset);

            if (absOffset > 2) return null;

            return (
              <motion.div
                key={t.name}
                className="absolute w-[90%] max-w-md cursor-pointer"
                onClick={() => setActive(i)}
                animate={{
                  x: `${offset * 60}%`,
                  scale: isActive ? 1 : 0.85 - absOffset * 0.05,
                  rotateY: offset * -15,
                  z: isActive ? 50 : -absOffset * 50,
                  opacity: isActive ? 1 : absOffset === 1 ? 0.6 : 0.3,
                }}
                transition={{
                  duration: 0.6,
                  ease: [0.22, 1, 0.36, 1],
                }}
                style={{
                  transformStyle: "preserve-3d",
                  perspective: 1200,
                  zIndex: 10 - absOffset,
                }}
              >
                <div
                  className={`bg-card/50 border-border/30 flex flex-col rounded-3xl border p-8 backdrop-blur-sm transition-shadow duration-500 md:p-10 ${
                    isActive ? "border-accent/30 shadow-2xl" : ""
                  }`}
                  style={{ willChange: "backdrop-filter" }}
                >
                  <Quote className="text-accent/30 mb-4 h-6 w-6" />
                  <p className="text-foreground/80 mb-8 flex-1 text-sm leading-relaxed md:text-base">
                    {t.quote}
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="bg-accent/15 flex h-10 w-10 items-center justify-center rounded-full">
                      <span className="text-accent text-xs font-semibold">
                        {t.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </span>
                    </div>
                    <div>
                      <p className="text-foreground text-sm font-medium">
                        {t.name}
                      </p>
                      <p className="text-muted-foreground text-xs">{t.role}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Navigation */}
        <div className="mt-8 flex items-center justify-center gap-6">
          <button
            onClick={prev}
            className="border-border/50 hover:bg-accent/10 hover:border-accent/30 flex h-10 w-10 items-center justify-center rounded-full border transition-all duration-300"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="text-foreground h-4 w-4" />
          </button>

          <div className="flex items-center gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i === active
                    ? "bg-accent w-6"
                    : "bg-border/60 hover:bg-accent/40 w-1.5"
                }`}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>

          <button
            onClick={next}
            className="border-border/50 hover:bg-accent/10 hover:border-accent/30 flex h-10 w-10 items-center justify-center rounded-full border transition-all duration-300"
            aria-label="Next testimonial"
          >
            <ChevronRight className="text-foreground h-4 w-4" />
          </button>
        </div>
      </ContainerLayout>
    </section>
  );
};

export default TestimonialsSection;
