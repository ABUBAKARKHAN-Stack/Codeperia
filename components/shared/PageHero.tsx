"use client";
import { motion } from "motion/react";
import { ReactNode } from "react";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { ContainerLayout } from "../layout";
import { urlFor } from "@/sanity/lib/image";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface PageHeroProps {
  eyebrow: string;
  title: ReactNode;
  description: string;
  /** Optional background image for detail pages */
  backgroundImage?: {
    source: string;
    alt: string;
  };

  /** Breadcrumb trail */
  breadcrumbs?: BreadcrumbItem[];
  /** Optional content rendered before the title (e.g., back links, badges) */
  children?: ReactNode;
}

const PageHero = ({
  eyebrow,
  title,
  description,
  backgroundImage,
  breadcrumbs,
  children,
}: PageHeroProps) => {
  return (
    <section className="relative overflow-hidden pt-32 pb-20 lg:pt-40 lg:pb-28">
      {backgroundImage ? (
        <div className="absolute inset-0">
          <div className="glass absolute inset-0 z-10 h-20" />
          <Image
            fill
            src={urlFor(backgroundImage.source).quality(90).url()}
            alt={backgroundImage.alt}
            className="h-full w-full object-cover"
            priority
          />
          <div className="from-background/80 via-background/90 to-background absolute inset-0 bg-linear-to-b" />
        </div>
      ) : (
        <div className="bg-accent/5 absolute top-0 right-0 h-125 w-125 rounded-full blur-[150px]" />
      )}
      <ContainerLayout className="relative z-10">
        <motion.div
          className="max-w-3xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          {breadcrumbs && breadcrumbs.length > 0 && (
            <nav aria-label="breadcrumb" className="mb-6">
              <ol className="flex flex-wrap items-center gap-1.5 text-sm">
                {breadcrumbs.map((crumb, i) => (
                  <li key={i} className="inline-flex items-center gap-1.5">
                    {i > 0 && (
                      <ChevronRight className="text-muted-foreground/50 h-3.5 w-3.5" />
                    )}
                    {crumb.href ? (
                      <Link
                        href={crumb.href}
                        className="text-muted-foreground hover:text-foreground transition-colors"
                      >
                        {crumb.label}
                      </Link>
                    ) : (
                      <span className="text-foreground font-medium">
                        {crumb.label}
                      </span>
                    )}
                  </li>
                ))}
              </ol>
            </nav>
          )}
          {children}
          <p className="text-accent mb-4 text-xs font-medium tracking-[0.3em] uppercase">
            {eyebrow}
          </p>
          <h1 className="text-foreground font-playfair mb-6 text-5xl leading-[0.95] font-bold tracking-tight md:text-6xl lg:text-7xl">
            {title}
          </h1>
          <p className="text-muted-foreground max-w-xl text-lg leading-relaxed font-light">
            {description}
          </p>
        </motion.div>
      </ContainerLayout>
    </section>
  );
};

export default PageHero;
