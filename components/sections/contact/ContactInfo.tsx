"use client";

import { motion } from "motion/react";
import AnimatedSection from "@/components/shared/AnimatedSection";
import { contactInfo, socials } from "@/constants/navigation.constants";

const ContactInfo = () => {
  return (
    <AnimatedSection className="lg:col-span-2" direction="right" delay={0.2}>
      <div>
        <p className="text-accent mb-4 text-xs font-medium tracking-[0.3em] uppercase">
          Get in Touch
        </p>
        <h2 className="text-foreground mb-4 text-2xl font-bold">
          Contact Information
        </h2>
        <p className="text-muted-foreground mb-10 text-sm leading-relaxed font-light">
          We're here to help. Reach out through any of the channels below, and
          our team will respond within 24 hours.
        </p>
      </div>

      <div className="space-y-6">
        {contactInfo.map((item, i) => (
          <motion.div
            key={item.link}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 + i * 0.1 }}
          >
            <a href={item.link} className="group flex items-center gap-4">
              <div className="bg-accent/10 group-hover:bg-accent/20 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl transition-colors duration-300">
                <item.icon className="text-accent h-4 w-4" />
              </div>
              <div>
                <p className="text-muted-foreground text-xs tracking-wider uppercase">
                  {item.label}
                </p>
                <p className="text-foreground text-sm font-medium">
                  {item.value}
                </p>
              </div>
            </a>
          </motion.div>
        ))}

        <div className="mt-10">
          <p className="text-accent mb-4 text-xs font-medium tracking-[0.3em] uppercase">
            Follow Us
          </p>
          <div className="flex gap-3">
            {socials.map((social, i) => (
              <motion.a
                key={social.label}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="bg-accent/10 border-border/30 text-muted-foreground hover:text-accent hover:border-accent/30 hover:bg-accent/15 flex h-10 w-10 items-center justify-center rounded-xl border transition-all duration-300"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 + i * 0.08 }}
                whileHover={{ y: -2 }}
              >
                <social.icon className="h-4 w-4" />
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default ContactInfo;
