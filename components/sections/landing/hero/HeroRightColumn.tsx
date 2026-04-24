"use client";
import { useServices } from "@/context/ServiceContext";
import { heroContent } from "@/data/landing.data";
import { getIconByName } from "@/lib/icon-mapper";
import { ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";
import Link from "next/link";

const HeroRightColumn = () => {
  const { servicesOverview } = useServices();

  return (
    <div className="lgx:col-span-6 lgx:block relative hidden">
      <div className="space-y-5">
        {/* Mission card */}
        <div className="glass-card relative overflow-hidden rounded-3xl p-8 backdrop-blur-none! md:p-10">
          <div className="bg-accent/10 absolute top-0 right-0 h-32 w-32 rounded-full blur-[60px]" />

          <div className="relative z-10 mb-6 flex items-center gap-3">
            <div className="bg-accent h-2 w-2 animate-pulse rounded-full" />
            <span className="text-muted-foreground text-[10px] font-semibold tracking-[0.3em] uppercase">
              {heroContent.mission.title}
            </span>
          </div>

          <p className="text-foreground font-playfair relative z-10 mb-6 text-lg leading-relaxed font-semibold md:text-xl">
            "{heroContent.mission.quote}"
          </p>

          <div className="relative z-10 space-y-4">
            {servicesOverview
              .filter((s) => s.featured)
              .map((service, i) => {
                const Icon = getIconByName(service.icon);
                return (
                  <Link key={service._id} href={`/services/${service.slug}`}>
                    <motion.div
                      className="group hover:border-accent/15 hover:bg-accent/5 flex items-center gap-4 rounded-xl border border-transparent p-3 transition-all duration-300"
                      initial={{ opacity: 0, x: -15 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.25, delay: 0.75 + i * 0.05 }}
                    >
                      <div className="bg-accent/10 group-hover:bg-accent/20 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl transition-colors duration-300">
                        <Icon className="text-accent size-4" />
                      </div>
                      <div>
                        <p className="text-foreground text-sm font-medium">
                          {service.title}
                        </p>
                        <p className="text-muted-foreground line-clamp-3 text-xs">
                          {service.description}
                        </p>
                      </div>
                      <ArrowUpRight className="text-muted-foreground/30 group-hover:text-accent size-3.5 shrink-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </motion.div>
                  </Link>
                );
              })}
          </div>
        </div>

        {/* Small accent cards row */}
        <div className="grid grid-cols-2 gap-4">
          {heroContent.accentCards.map((c, i) => (
            <motion.div
              key={c.sub}
              className="glass-card rounded-2xl p-5 text-center backdrop-blur-none!"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.25, delay: 0.75 + i * 0.05 }}
            >
              <c.icon className="text-accent mx-auto mb-2 h-5 w-5" />
              <p className="text-foreground text-sm font-bold">{c.label}</p>
              <p className="text-muted-foreground text-[10px] tracking-wider uppercase">
                {c.sub}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroRightColumn;
