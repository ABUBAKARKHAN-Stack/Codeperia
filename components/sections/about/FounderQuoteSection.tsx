import { ContainerLayout } from "@/components/layout";
import AnimatedSection from "@/components/shared/AnimatedSection";
import { Quote } from "lucide-react";

const FounderQuoteSection = () => {
  return (
    <section className="section-padding bg-muted/20 border-border/50 border-y">
      <ContainerLayout>
        <AnimatedSection className="mx-auto max-w-3xl text-center">
          <Quote className="text-accent/30 mx-auto mb-6 h-8 w-8" />
          <blockquote className="font-playfair text-foreground mb-6 text-xl leading-relaxed font-light italic md:text-2xl">
            "We founded Codeperia with a singular commitment to engineering
            excellence. Our goal is to bridge the gap between complex digital
            challenges and high-performance, scalable solutions that drive
            measurable business success."
          </blockquote>
          <div className="flex items-center justify-center gap-3">
            <div className="border-border/30 h-10 w-10 overflow-hidden rounded-full border">
              <img
                src="/assets/team/ubaid - Copy.jpg"
                alt="Sardar Ubaidullah"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="text-left">
              <p className="text-foreground text-sm font-semibold">
                Sardar Ubaidullah
              </p>
              <p className="text-muted-foreground text-[10px] tracking-wider uppercase">
                CEO & Co-Founder
              </p>
            </div>
          </div>
        </AnimatedSection>
      </ContainerLayout>
    </section>
  );
};

export default FounderQuoteSection;
