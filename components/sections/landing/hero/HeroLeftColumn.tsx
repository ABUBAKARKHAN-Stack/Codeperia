"use client";

import ContactDrawer from "@/components/shared/ContactDrawer";
import MagneticButton from "@/components/shared/MagneticButton";
import { BorderBeam } from "@/components/ui/border-beam";
import { Button } from "@/components/ui/button";
import { heroContent } from "@/data/landing.data";
import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import Link from "next/link";

const HeroLeftColumn = () => {
  return (
    <div className="lgx:col-span-6 col-span-full">
      {/* Eyebrow */}
      <motion.div
        className="bg-accent/20 dark:bg-accent/10 relative mb-8 flex w-fit items-center gap-3 rounded-full px-4 py-2.25"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <BorderBeam
          colorFrom="var(--color-accent)"
          colorTo="var(--color-accent)"
        />

        <span className="text-accent text-[8px] font-semibold tracking-[0.3em] uppercase min-[400px]:text-[10px]">
          {heroContent.eyebrow}
        </span>
      </motion.div>

      {/* Headline */}
      <h1 className="text-foreground mb-8 text-5xl leading-[0.92] font-bold tracking-[-0.01em] sm:text-6xl md:text-7xl lg:text-[5rem] xl:text-[5.5rem]">
        {heroContent.headline.map((word, i) => (
          <span key={word} className="block">
            <motion.span
              className="block"
              initial={{ y: "110%" }}
              animate={{ y: 0 }}
              transition={{
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1],
                delay: 0.15 + i * 0.1,
              }}
            >
              {word.toLowerCase().trim().includes("future-ready") ? (
                <motion.span
                  className="text-accent text-nowrap italic"
                  initial={{ opacity: 0, filter: "blur(8px)" }}
                  animate={{ opacity: 1, filter: "blur(0px)" }}
                  transition={{ duration: 0.8, delay: 0.55 }}
                >
                  {word}
                </motion.span>
              ) : (
                word
              )}
            </motion.span>
          </span>
        ))}
      </h1>

      {/* Subtext Paragraphs */}

      {heroContent.subtexts.map((p, i) => (
        <motion.p
          key={i}
          className="text-muted-foreground mb-4 max-w-xl text-base leading-[1.8] font-light md:text-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          {p}
        </motion.p>
      ))}

      <div className="mb-10" />

      {/* CTAs */}
      <motion.div
        className="flex flex-wrap items-center gap-4 border-b pb-8"
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <MagneticButton>
          <Button
            asChild
            size="lg"
            className="bg-foreground text-background hover:bg-foreground/90 h-12 rounded-full px-8 text-sm font-medium tracking-wide"
          >
            <Link href="/services">
              {heroContent.cta.primary} <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </MagneticButton>
        <ContactDrawer>
          <MagneticButton>
            <Button
              variant="outline"
              size="lg"
              className="text-foreground hover:bg-accent/10 h-12 rounded-full px-6 text-sm font-medium"
            >
              {heroContent.cta.secondary}{" "}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </MagneticButton>
        </ContactDrawer>
      </motion.div>
    </div>
  );
};

export default HeroLeftColumn;
