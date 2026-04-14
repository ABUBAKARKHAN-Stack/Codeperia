import { ReactNode } from "react";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import AnimatedSection from "./AnimatedSection";
import ContactDrawer from "./ContactDrawer";
import MagneticButton from "./MagneticButton";
import { ContainerLayout } from "../layout";

interface CTASectionProps {
  title: ReactNode;
  description: string;
  buttonText?: string;
  /** Extra buttons rendered alongside the main CTA */
  extraActions?: ReactNode;
}

const CTASection = ({
  title,
  description,
  buttonText = "Send a Message",
  extraActions,
}: CTASectionProps) => {
  return (
    <section className="section-padding relative overflow-hidden">
      <div className="bg-accent/5 absolute inset-0" />
      <div className="bg-accent/10 absolute top-0 right-1/4 h-100 w-100 rounded-full blur-[150px]" />
      <ContainerLayout className="relative z-10 text-center">
        <AnimatedSection>
          <h2 className="text-foreground mb-6 text-4xl leading-tight font-bold md:text-5xl">
            {title}
          </h2>
          <p className="text-muted-foreground mx-auto mb-10 max-w-md text-lg font-light">
            {description}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <ContactDrawer>
              <MagneticButton>
                <Button
                  size="lg"
                  className="bg-foreground text-background hover:bg-foreground/90 h-12 rounded-full px-10 text-sm font-medium"
                >
                  {buttonText} <ArrowUpRight className="ml-2 h-4 w-4" />
                </Button>
              </MagneticButton>
            </ContactDrawer>
            {extraActions}
          </div>
        </AnimatedSection>
      </ContainerLayout>
    </section>
  );
};

export default CTASection;
