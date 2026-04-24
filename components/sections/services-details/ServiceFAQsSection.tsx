import SectionHeader from "@/components/shared/SectionHeader";
import AnimatedSection from "@/components/shared/AnimatedSection";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ServiceFAQ } from "@/types/service.types";

type Props = {
  faqs: ServiceFAQ[];
};

const ServiceFAQsSection = ({ faqs }: Props) => {
  return (
    <section className="section-padding bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <SectionHeader
          eyebrow="FAQ"
          title={
            <>
              Common <span className="text-accent italic">questions</span>
            </>
          }
          centered
        />
        <AnimatedSection className="mx-auto max-w-2xl">
          <Accordion
            type="single"
            collapsible
            defaultValue="faq-0"
            className="w-full space-y-3"
          >
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="glass-card rounded-xl border-none px-6"
              >
                <AccordionTrigger className="text-foreground hover:text-accent cursor-pointer py-5 text-sm font-medium transition-colors duration-300 hover:no-underline">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5 text-sm leading-relaxed">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default ServiceFAQsSection;
