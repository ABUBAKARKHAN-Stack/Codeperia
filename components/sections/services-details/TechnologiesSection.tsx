import { ContainerLayout } from "@/components/layout";
import SectionHeader from "@/components/shared/SectionHeader";
import AnimatedSection from "@/components/shared/AnimatedSection";
import { ServiceTechnology } from "@/types/service.types";
import { Star } from "lucide-react";

type Props = {
  technologies: ServiceTechnology[];
};
const TechnologiesSection = ({ technologies }: Props) => {
  return (
    <section className="section-padding bg-card/30">
      <ContainerLayout>
        <SectionHeader
          eyebrow="Tech Stack"
          title={
            <>
              Technologies <span className="text-accent italic">we use</span>
            </>
          }
          centered
        />

        {/* Featured Technologies */}
        {technologies.some((t) => t.featured) && (
          <AnimatedSection className="mb-10">
            <div className="mx-auto grid max-w-4xl grid-cols-1 gap-5 md:grid-cols-2">
              {technologies
                .filter((t) => t.featured)
                .map((tech) => (
                  <div
                    key={tech.name}
                    className="border-accent/20 bg-background group hover:border-accent/40 relative rounded-2xl border p-6 transition-all duration-300"
                  >
                    <div className="mb-3 flex items-center gap-3">
                      <span className="text-foreground text-base font-semibold">
                        {tech.name}
                      </span>
                      <span className="text-accent bg-accent/10 inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[9px] font-semibold tracking-wider uppercase">
                        <Star className="fill-accent h-2.5 w-2.5" /> Core
                      </span>
                    </div>
                    <span className="text-muted-foreground/60 mb-2 block text-[10px] tracking-wider uppercase">
                      {tech.category}
                    </span>
                    {tech.description.split("\n").map((d, i) => (
                      <p
                        key={`${d}-${i}`}
                        className="text-muted-foreground mb-1 text-sm leading-relaxed font-light"
                      >
                        {d}
                      </p>
                    ))}
                  </div>
                ))}
            </div>
          </AnimatedSection>
        )}

        {/* Other Technologies */}
        {technologies.some((t) => !t.featured) && (
          <AnimatedSection>
            <div className="mx-auto grid max-w-5xl grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4">
              {technologies
                .filter((t) => !t.featured)
                .map((tech) => (
                  <div
                    key={tech.name}
                    className="group border-border/40 bg-background hover:border-accent/40 relative flex flex-col items-center gap-1 rounded-2xl border p-5 transition-all duration-300"
                    title={tech.description}
                  >
                    <span className="text-foreground mb-2 text-center text-sm font-semibold text-wrap">
                      {tech.name}
                    </span>
                    <span className="text-muted-foreground/60 mb-2 text-[10px] tracking-wider uppercase">
                      {tech.category}
                    </span>
                    <p className="text-muted-foreground mx-auto max-w-sm text-center text-sm leading-relaxed font-light">
                      {tech.description}
                    </p>
                  </div>
                ))}
            </div>
          </AnimatedSection>
        )}
      </ContainerLayout>
    </section>
  );
};

export default TechnologiesSection;
