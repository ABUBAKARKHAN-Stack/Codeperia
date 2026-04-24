"use client";

import {
  StaggerChildren,
  itemVariants,
} from "@/components/shared/StaggerChildren";
import MagneticButton from "@/components/shared/MagneticButton";
import SectionHeader from "@/components/shared/SectionHeader";
import ServiceCard from "@/components/shared/ServiceCard";
import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { useServices } from "@/context/ServiceContext";
import { ContainerLayout } from "@/components/layout";

const ServicesSection = () => {
  const { servicesOverview } = useServices();
  return (
    <section className="section-padding bg-card/30 relative overflow-hidden">
      <div className="bg-accent/5 absolute top-0 right-0 h-125 w-125 rounded-full blur-[150px]" />

      <ContainerLayout className="relative z-10">
        <SectionHeader
          eyebrow="Our Services"
          title={
            <>
              What we <span className="text-accent italic">do best</span>
            </>
          }
          action={
            <MagneticButton>
              <Button
                asChild
                variant="outline"
                className="border-border text-foreground hover:bg-accent/10 h-10 rounded-full px-6 text-sm font-medium"
              >
                <Link href="/services">
                  View All Services <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </MagneticButton>
          }
        />

        <StaggerChildren
          className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
          staggerDelay={0.08}
        >
          {servicesOverview.map((s, i) => (
            <motion.div key={s.title} variants={itemVariants}>
              <ServiceCard service={s} num={(i = i + 1)} />
            </motion.div>
          ))}
        </StaggerChildren>
      </ContainerLayout>
    </section>
  );
};

export default ServicesSection;
