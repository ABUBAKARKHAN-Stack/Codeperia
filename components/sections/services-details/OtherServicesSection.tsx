"use client";
import { ContainerLayout } from "@/components/layout";
import SectionHeader from "@/components/shared/SectionHeader";
import AnimatedSection from "@/components/shared/AnimatedSection";
import { useServices } from "@/context/ServiceContext";
import { getIconByName } from "@/lib/icon-mapper";
import { getPreviewImageUrl } from "@/lib/transformed-img-urls";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";

const OtherServicesSection = () => {
  const { servicesOverview } = useServices();
  const { slug } = useParams();
  const otherServices = servicesOverview
    .filter((s) => s.slug !== slug)
    .slice(0, 3);

  return (
    <section className="section-padding bg-card/30">
      <ContainerLayout>
        <SectionHeader
          eyebrow="Explore More"
          title="Other Services"
          className="mb-12"
        />
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {otherServices.map((s) => {
            const SIcon = getIconByName(s.icon);
            return (
              <AnimatedSection key={s.slug} delay={0.1}>
                <Link href={`/services/${s.slug}`} className="group block">
                  <div className="bg-card border-border/40 hover:border-accent/40 overflow-hidden rounded-2xl border shadow-sm transition-all duration-500">
                    <div className="relative h-36 overflow-hidden">
                      <Image
                        src={getPreviewImageUrl(s.image.source)}
                        alt={s.image.alt}
                        fill
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                        loading="lazy"
                      />
                      <div className="from-card via-card/50 absolute inset-0 bg-linear-to-t to-transparent" />
                    </div>
                    <div className="p-6">
                      <div className="mb-2 flex items-center gap-3">
                        <SIcon className="text-accent h-4 w-4" />
                        <h3 className="text-foreground text-sm font-semibold">
                          {s.title}
                        </h3>
                      </div>
                      <p className="text-muted-foreground line-clamp-2 text-xs">
                        {s.description}
                      </p>
                    </div>
                  </div>
                </Link>
              </AnimatedSection>
            );
          })}
        </div>
      </ContainerLayout>
    </section>
  );
};

export default OtherServicesSection;
