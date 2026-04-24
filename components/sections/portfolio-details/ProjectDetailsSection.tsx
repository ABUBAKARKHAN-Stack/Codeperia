import { ContainerLayout } from "@/components/layout";
import ContactDrawer from "@/components/shared/ContactDrawer";
import AnimatedSection from "@/components/shared/AnimatedSection";
import { Button } from "@/components/ui/button";
import { urlFor } from "@/sanity/lib/image";
import { IImage, ITestimonial } from "@/types/shared.types";
import { ArrowUpRight, CheckCircle2, Quote } from "lucide-react";
import Image from "next/image";
import { FC } from "react";

type Props = {
  longDescription: string;
  image: IImage;
  tags: string[];
  results: string[];
  testimonial?: ITestimonial;
};
const ProjectDetailsSection: FC<Props> = ({
  image,
  longDescription,
  results,
  tags,
  testimonial,
}) => {
  return (
    <section className="section-padding bg-background">
      <ContainerLayout>
        <div className="grid grid-cols-1 gap-y-16">
          {/* Main Content */}
          <AnimatedSection>
            <h2 className="text-foreground mb-6 text-2xl font-bold">
              The Challenge & Solution
            </h2>
            <div className="max-w-5xl space-y-4">
              {longDescription.split("\n\n").map((paragraph, i) => (
                <p
                  key={i}
                  className="text-muted-foreground text-base leading-relaxed font-light"
                >
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Project Display Mockup Screenshot */}
            <div className="border-border/40 shadow-accent/10 mt-6 overflow-hidden rounded-2xl border shadow-lg">
              <Image
                src={urlFor(image.source)
                  .width(1920)
                  .height(1080)
                  .quality(85)
                  .url()}
                alt={image.alt}
                height={1920}
                width={1080}
                loading="lazy"
                className="h-auto w-full object-cover"
              />
            </div>

            {/* Tech Stack */}
            <div className="mt-10">
              <h3 className="text-foreground mb-4 text-lg font-semibold">
                Technology Stack
              </h3>
              <div className="flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-foreground/80 bg-accent/10 border-accent/20 rounded-full border px-3 py-1.5 text-xs font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </AnimatedSection>

          {/* Results And Testmonials */}
          <AnimatedSection
            delay={0.2}
            className="grid grid-cols-1 gap-8 md:grid-cols-3"
          >
            {/* Key Results */}
            <div className="glass-card border-border/40 rounded-2xl border p-8 md:col-span-2">
              <h3 className="text-foreground mb-6 text-lg font-semibold">
                Key Results
              </h3>
              <ul className="space-y-4">
                {results.map((r, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="text-accent mt-0.5 h-5 w-5 shrink-0" />
                    <span className="text-muted-foreground text-sm leading-relaxed">
                      {r}
                    </span>
                  </li>
                ))}
              </ul>
              <div className="border-border/30 mt-8 border-t pt-6">
                <ContactDrawer>
                  <Button className="bg-foreground text-background hover:bg-foreground/90 w-full rounded-full font-medium">
                    Start a Similar Project{" "}
                    <ArrowUpRight className="ml-2 h-4 w-4" />
                  </Button>
                </ContactDrawer>
              </div>
            </div>

            {/* Testimonial */}
            {testimonial && (
              <div className="glass-card border-accent/20 relative col-span-1 flex flex-col justify-between gap-4 overflow-hidden rounded-2xl border p-8 md:gap-0">
                <div className="bg-accent/10 absolute top-0 right-0 h-24 w-24 rounded-full blur-[60px]" />
                <div>
                  <Quote className="text-accent/30 mb-4 h-8 w-8" />
                  <p
                    className="text-foreground mb-5 text-base leading-relaxed italic"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    "{testimonial.quote}"
                  </p>
                </div>
                <div className="border-t" />
                <div className="flex items-center gap-3">
                  <div className="bg-accent/20 text-accent flex h-9 w-9 items-center justify-center rounded-full text-sm font-bold">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <p className="text-foreground text-sm font-semibold">
                      {testimonial.name}
                    </p>
                    <p className="text-muted-foreground text-xs">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </div>
            )}
          </AnimatedSection>
        </div>
      </ContainerLayout>
    </section>
  );
};

export default ProjectDetailsSection;
