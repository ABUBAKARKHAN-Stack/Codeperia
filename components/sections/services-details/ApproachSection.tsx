import { ContainerLayout } from "@/components/layout";
import SectionHeader from "@/components/shared/SectionHeader";
import AnimatedSection from "@/components/shared/AnimatedSection";
import { ServiceApproachStep } from "@/types/service.types";

type Props = {
  approach: ServiceApproachStep[];
};
const ApproachSection = ({ approach }: Props) => {
  return (
    <section className="section-padding bg-background">
      <ContainerLayout>
        <SectionHeader
          eyebrow="Our Approach"
          title={
            <>
              How we <span className="text-accent italic">deliver</span>
            </>
          }
          centered
        />
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {approach.map((step, i) => (
            <AnimatedSection key={step.step} delay={i * 0.1}>
              <div className="border-border/40 bg-card relative h-full rounded-2xl border p-6">
                <span
                  className="text-accent/10 absolute top-4 right-4 text-5xl font-bold"
                  style={{ fontFamily: "'Space Mono', monospace" }}
                >
                  {step.step}
                </span>
                <div className="relative z-10">
                  <h3 className="text-foreground mt-4 mb-3 max-w-[80%] text-start text-base font-semibold text-wrap">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed font-light">
                    {step.description}
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

export default ApproachSection;
