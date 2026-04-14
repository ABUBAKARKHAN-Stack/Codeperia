import { ContainerLayout } from "@/components/layout";
import AnimatedSection from "@/components/shared/AnimatedSection";

const TermsSection = () => {
  return (
    <section className="section-padding pt-32 pb-20">
      <ContainerLayout className="max-w-3xl">
        <AnimatedSection>
          <p className="text-accent mb-4 text-xs font-medium tracking-[0.3em] uppercase">
            Legal
          </p>
          <h1
            className="text-foreground mb-8 text-4xl font-bold md:text-5xl"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Terms of <span className="text-accent italic">Service</span>
          </h1>
          <p className="text-muted-foreground mb-12 text-sm">
            Last updated: February 11, 2026
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <div className="prose prose-sm text-foreground/80 max-w-none space-y-8">
            <div>
              <h2 className="text-foreground mb-3 text-lg font-semibold">
                1. Acceptance of Terms
              </h2>
              <p className="text-muted-foreground text-sm leading-relaxed">
                By accessing and using the T-Solutions website and services, you
                accept and agree to be bound by these Terms of Service. If you
                do not agree to these terms, please do not use our services.
              </p>
            </div>

            <div>
              <h2 className="text-foreground mb-3 text-lg font-semibold">
                2. Services
              </h2>
              <p className="text-muted-foreground text-sm leading-relaxed">
                T-Solutions provides business consulting services including
                strategic planning, digital transformation, sustainability
                consulting, market research, compliance advisory, and growth
                acceleration. The scope of services will be defined in
                individual service agreements.
              </p>
            </div>

            <div>
              <h2 className="text-foreground mb-3 text-lg font-semibold">
                3. Intellectual Property
              </h2>
              <p className="text-muted-foreground text-sm leading-relaxed">
                All content, logos, trademarks, and materials on this website
                are the property of T-Solutions and are protected by
                intellectual property laws. You may not reproduce, distribute,
                or create derivative works without our prior written consent.
              </p>
            </div>

            <div>
              <h2 className="text-foreground mb-3 text-lg font-semibold">
                4. User Responsibilities
              </h2>
              <p className="text-muted-foreground text-sm leading-relaxed">
                You agree to provide accurate information when using our contact
                forms or engaging our services. You are responsible for
                maintaining the confidentiality of any account credentials and
                for all activities that occur under your account.
              </p>
            </div>

            <div>
              <h2 className="text-foreground mb-3 text-lg font-semibold">
                5. Limitation of Liability
              </h2>
              <p className="text-muted-foreground text-sm leading-relaxed">
                T-Solutions shall not be liable for any indirect, incidental,
                special, or consequential damages arising from the use of our
                website or services. Our total liability shall not exceed the
                amount paid for the specific service giving rise to the claim.
              </p>
            </div>

            <div>
              <h2 className="text-foreground mb-3 text-lg font-semibold">
                6. Confidentiality
              </h2>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Both parties agree to maintain the confidentiality of any
                proprietary or sensitive information shared during the course of
                our engagement. This obligation survives the termination of any
                service agreement.
              </p>
            </div>

            <div>
              <h2 className="text-foreground mb-3 text-lg font-semibold">
                7. Termination
              </h2>
              <p className="text-muted-foreground text-sm leading-relaxed">
                We reserve the right to terminate or suspend access to our
                services at our discretion, without notice, for conduct that we
                believe violates these Terms or is harmful to other users, us,
                or third parties.
              </p>
            </div>

            <div>
              <h2 className="text-foreground mb-3 text-lg font-semibold">
                8. Governing Law
              </h2>
              <p className="text-muted-foreground text-sm leading-relaxed">
                These Terms shall be governed by and construed in accordance
                with the laws of the State of Oregon, United States, without
                regard to its conflict of law provisions.
              </p>
            </div>

            <div>
              <h2 className="text-foreground mb-3 text-lg font-semibold">
                9. Contact
              </h2>
              <p className="text-muted-foreground text-sm leading-relaxed">
                For any questions regarding these Terms of Service, please
                contact us at hello@t-solutions.com or +1 (555) 123-4567.
              </p>
            </div>
          </div>
        </AnimatedSection>
      </ContainerLayout>
    </section>
  );
};

export default TermsSection;
