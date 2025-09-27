"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { SectionHeader } from "@/components/reusable";
import { ContainerLayout } from "@/components/layout";
import { ChooseIllustration } from "@/components/ui/illustrations";
import { InteractiveHoverButton } from "@/components/magicui/interactive-hover-button";

function SecondaryCtaSection() {
  return (
    <section className="w-full py-16">
      <ContainerLayout>
        <SectionHeader mainHeading="Not Ready Yet?" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-10 flex flex-col justify-between space-y-6 gap-x-10 lg:flex-row"
        >
          <div className="xsm:w-80 mx-auto block w-full min-[300px]:w-72 md:w-96 lg:hidden lg:w-[450px]">
            <ChooseIllustration className="size-full" />
          </div>

          <div className="space-y-6">
            <p className="mx-auto max-w-[600px] text-center text-[14px] md:text-lg lg:text-left">
              If now isn’t the perfect time to connect, that’s absolutely fine.
              Take a moment to browse our Services and discover how we can
              assist you whenever you’re ready.
            </p>
            <Link href="/services" className="hidden lg:block">
              <InteractiveHoverButton className="text-primary w-fit transform overflow-hidden rounded-2xl border-none bg-gradient-to-r from-purple-50 via-purple-100 to-purple-50 py-4 font-semibold transition-all duration-300 focus:ring-4 focus:ring-purple-500/40 focus:outline-none active:scale-95">
                View Our Services
              </InteractiveHoverButton>
            </Link>
          </div>

          <div className="xsm:w-80 mx-auto hidden w-full min-[300px]:w-72 md:w-96 lg:block lg:w-[450px]">
            <ChooseIllustration className="size-full" />
          </div>

          <Link href="/services" className="mx-auto block lg:hidden">
            <InteractiveHoverButton className="text-primary w-fit transform overflow-hidden rounded-2xl border-none bg-gradient-to-r from-purple-50 via-purple-100 to-purple-50 py-4 font-semibold transition-all duration-300 focus:ring-4 focus:ring-purple-500/40 focus:outline-none active:scale-95">
              View Our Services
            </InteractiveHoverButton>
          </Link>
        </motion.div>
      </ContainerLayout>
    </section>
  );
}

export default SecondaryCtaSection;
