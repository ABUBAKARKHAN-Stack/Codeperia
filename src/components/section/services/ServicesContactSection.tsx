import { ContainerLayout } from "@/components/layout";
import { ContactForm, SectionHeader } from "@/components/reusable";
import React from "react";

const ServicesContactSection = () => {
  return (
    <section
      id="get-in-touch-section"
      className="h-full w-full py-16 text-white"
    >
      <ContainerLayout>
        <SectionHeader mainHeading="Request a Service" />

        <div className="mt-10 flex flex-col items-start justify-between gap-12 lg:flex-row">
          <div className="space-y-4 text-center lg:max-w-sm lg:text-left">
            <h3 className="text-3xl font-semibold">
              Let’s Build Something Great
            </h3>
            <p className="leading-relaxed text-gray-300">
              Select a service and tell us more about your project. Our team
              will get back to you with tailored solutions.
            </p>
          </div>

          {/* Right form  */}
          <div className="w-full rounded-2xl border border-white/5 bg-purple-500/5 p-8 shadow-2xl backdrop-blur-3xl lg:max-w-2xl">
            <ContactForm forServices />
          </div>
        </div>
      </ContainerLayout>
    </section>
  );
};

export default ServicesContactSection;
