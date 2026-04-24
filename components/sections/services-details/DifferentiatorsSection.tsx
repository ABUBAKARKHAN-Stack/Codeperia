import { ContainerLayout } from "@/components/layout";
import SectionHeader from "@/components/shared/SectionHeader";
import AnimatedSection from "@/components/shared/AnimatedSection";
import { ServiceDifferentiator } from "@/types/service.types";
import { CheckCircle2 } from "lucide-react";

type Props = {
  differentiators: ServiceDifferentiator[];
};
const DifferentiatorsSection = ({ differentiators }: Props) => {
  return (
    <section className="section-padding bg-card/30">
      <ContainerLayout>
        <SectionHeader
          eyebrow="Why Us"
          title={
            <>
              Why we <span className="text-accent italic">stand out</span>
            </>
          }
          centered
        />
        <div className="mx-auto grid max-w-4xl grid-cols-1 gap-6 md:grid-cols-2">
          {differentiators.map((diff, i) => (
            <AnimatedSection key={diff.title} delay={i * 0.1}>
              <div className="border-border/40 bg-background flex h-full items-start gap-4 rounded-2xl border p-6">
                <CheckCircle2 className="text-accent mt-0.5 h-6 w-6 shrink-0" />
                <div>
                  <h3 className="text-foreground mb-2 text-base font-semibold">
                    {diff.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed font-light">
                    {diff.description}
                  </p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </ContainerLayout>
    </section>
  );
};

export default DifferentiatorsSection;
