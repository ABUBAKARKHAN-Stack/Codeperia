"use client";

import { ContainerLayout } from "@/components/layout";
import SectionHeader from "@/components/shared/SectionHeader";
import AnimatedSection from "@/components/shared/AnimatedSection";
import { APP_NAME } from "@/constants/app.constants";
import { usePortfolio } from "@/context/PortfolioContext";
import { getPreviewImageUrl } from "@/lib/transformed-img-urls";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";

const OtherProjectsSection = () => {
  const { slug } = useParams();
  const { portfolioOverview } = usePortfolio();
  const otherProjects = portfolioOverview.filter((p) => p.slug !== slug);

  if (otherProjects.length === 0) return;

  return (
    <section className="section-padding bg-card/30">
      <ContainerLayout>
        <SectionHeader
          eyebrow="More Work"
          title="Other Projects"
          className="mb-12"
        />
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {otherProjects.map((p) => (
            <AnimatedSection key={p.slug} delay={0.1}>
              <Link href={`/portfolio/${p.slug}`} className="group block">
                <div className="bg-card border-border/40 hover:border-accent/40 overflow-hidden rounded-2xl border shadow-sm transition-all duration-500">
                  <div className="relative h-44 overflow-hidden">
                    <Image
                      src={getPreviewImageUrl(p.image.source)}
                      fill
                      alt={`${p.title} – Screenshot of the project created by ${APP_NAME}`}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="from-card/60 absolute right-0 bottom-0 left-0 h-16 bg-linear-to-t to-transparent" />
                  </div>
                  <div className="p-5">
                    <span className="text-accent bg-accent/10 rounded-full px-2 py-0.5 text-[10px] font-medium tracking-wider uppercase">
                      {p.category}
                    </span>
                    <h3 className="text-foreground mt-3 mb-1 text-sm font-semibold">
                      {p.title}
                    </h3>
                    <p className="text-muted-foreground line-clamp-2 text-xs">
                      {p.description}
                    </p>
                  </div>
                </div>
              </Link>
            </AnimatedSection>
          ))}
        </div>
      </ContainerLayout>
    </section>
  );
};

export default OtherProjectsSection;
