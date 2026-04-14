import { ContainerLayout } from "@/components/layout";
import AnimatedSection from "@/components/shared/AnimatedSection";
import ContactDrawer from "@/components/shared/ContactDrawer";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";

type Props = {
  serviceLongDescription: string;
  tags: string[];
  deliverables: string[];
};

const ServiceOverviewAndDeliverablesSection = ({
  deliverables,
  serviceLongDescription,
  tags,
}: Props) => {
  return (
    <section className="section-padding bg-background">
      <ContainerLayout>
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-5">
          <AnimatedSection className="lg:col-span-3">
            <h2 className="text-foreground mb-6 text-2xl font-bold">
              Overview
            </h2>

            <div className="space-y-4">
              {serviceLongDescription.split("\n\n").map((p) => (
                <p
                  key={p.slice(0, 12)}
                  className="text-muted-foreground text-base leading-relaxed font-light"
                >
                  {p}
                </p>
              ))}
            </div>

            {tags && (
              <div className="mt-8 flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-accent bg-accent/10 border-accent/20 rounded-full border px-4 py-2 text-xs font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </AnimatedSection>

          <AnimatedSection delay={0.2} className="lg:col-span-2">
            <div className="glass-card border-border/40 rounded-2xl border p-8">
              <h3 className="text-foreground mb-6 text-lg font-semibold">
                Key Deliverables
              </h3>
              <ul className="space-y-4">
                {deliverables?.map((d, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="text-accent mt-0.5 h-5 w-5 shrink-0" />
                    <span className="text-muted-foreground text-sm leading-relaxed">
                      {d}
                    </span>
                  </li>
                ))}
              </ul>
              <div className="border-border/30 mt-8 border-t pt-6">
                <ContactDrawer>
                  <Button className="bg-foreground text-background hover:bg-foreground/90 w-full rounded-full font-medium">
                    Discuss This Service{" "}
                    <ArrowUpRight className="ml-2 h-4 w-4" />
                  </Button>
                </ContactDrawer>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </ContainerLayout>
    </section>
  );
};

export default ServiceOverviewAndDeliverablesSection;
