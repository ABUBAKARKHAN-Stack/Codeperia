"use client";

import { ContactForm, MailLink, SectionHeader } from "@/components/reusable";
import ContainerLayout from "@/components/layout/ContainerLayout";
import { Mail } from "lucide-react";
import { brandContactInfo } from "@/constants/constants";
import Link from "next/link";

const ContactSection = () => {
  const { contact, info, phone } = brandContactInfo;
  return (
    <section
      id="get-in-touch-section"
      className="h-full w-full py-16 text-white"
    >
      <ContainerLayout>
        <SectionHeader mainHeading="Get In Touch" />
        <section className="mt-10 flex flex-col items-start justify-between gap-12 lg:flex-row">
          <div className="space-y-4 text-center lg:max-w-sm lg:text-left">
            <h3 className="text-3xl font-semibold">
              We’d Love to Hear From You
            </h3>
            <p className="leading-relaxed text-gray-300">
              Whether you have a question, want to share feedback, discuss a
              project, or simply say hello, drop us a message and we’ll get back
              to you shortly.
            </p>
            <div className="space-y-2.5">
              <MailLink showIcon mail={info} />
              <MailLink showIcon mail={contact} />
              <MailLink showIcon mail={phone} forTel />
            </div>
          </div>

          <div className="w-full rounded-2xl border border-white/5 bg-purple-500/5 p-8 shadow-2xl backdrop-blur-3xl lg:max-w-2xl">
            <ContactForm />
          </div>
        </section>
      </ContainerLayout>
    </section>
  );
};

export default ContactSection;
