"use client";

import { useServices } from "@/context/ServiceContext";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

const ServicesLinks = () => {
  const { servicesOverview } = useServices();
  return (
    <div className="lg:col-span-3">
      <h4 className="text-foreground/40 mb-6 text-xs font-semibold tracking-[0.2em] uppercase">
        Services
      </h4>
      <ul className="space-y-3">
        {servicesOverview.map((link) => (
          <li key={link.slug}>
            <Link
              href={`/services/${link.slug}`}
              className="text-foreground/60 hover:text-accent group flex items-center gap-1 text-sm text-wrap transition-colors duration-300"
            >
              {link.title}
              <ArrowUpRight className="h-3 w-3 shrink-0 -translate-y-1 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100" />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ServicesLinks;
