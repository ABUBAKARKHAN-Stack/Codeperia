import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import ContactDrawer from "@/components/shared/ContactDrawer";
import MagneticButton from "@/components/shared/MagneticButton";
import SectionHeader from "@/components/shared/SectionHeader";
import AnimatedSection from "@/components/shared/AnimatedSection";
import { ContainerLayout } from "@/components/layout";
import { ArrowRight } from "lucide-react";
import { faqs } from "@/data/landing.data";

const FAQSection = () => {
  return (
    <section className="section-padding bg-background relative overflow-hidden">
      <div className="bg-accent/5 absolute right-0 bottom-0 h-100 w-100 rounded-full blur-[150px]" />

      <ContainerLayout className="relative z-10">
        <div className="grid grid-cols-1 items-start gap-16 lg:grid-cols-2">
          <div>
            <SectionHeader
              eyebrow="FAQs"
              title={
                <>
                  Questions? <br />
                  <span className="text-accent italic">We've got answers</span>
                </>
              }
              description="Everything you need to know about working with us. Can't find what you're looking for? Feel free to reach out."
            />
            <ContactDrawer>
              <MagneticButton
                strength={0.1}
                className="text-accent flex w-fit items-center bg-transparent hover:cursor-pointer hover:bg-transparent"
              >
                Start a Conversation <ArrowRight className="ml-2 size-4" />
              </MagneticButton>
            </ContactDrawer>
          </div>

          <AnimatedSection delay={0.2}>
            <Accordion
              type="single"
              collapsible
              defaultValue="faq-0"
              className="space-y-3"
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
      </ContainerLayout>
    </section>
  );
};

export default FAQSection;
