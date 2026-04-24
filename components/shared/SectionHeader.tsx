import { ReactNode } from "react";
import AnimatedSection from "@/components/shared/AnimatedSection";
import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  eyebrow: string;
  title: ReactNode;
  description?: string;
  /** Right-side content (e.g., a CTA button) */
  action?: ReactNode;
  /** Center-align the header */
  centered?: boolean;
  className?: string;
}

const SectionHeader = ({
  eyebrow,
  title,
  description,
  action,
  centered,
  className,
}: SectionHeaderProps) => {
  if (action) {
    return (
      <AnimatedSection
        className={cn(
          "mb-16 flex flex-col gap-6 md:flex-row md:items-end md:justify-between",
          className,
        )}
      >
        <div>
          <p className="text-accent mb-4 text-xs font-medium tracking-[0.3em] uppercase">
            {eyebrow}
          </p>
          <h2 className="text-foreground max-w-lg text-4xl leading-tight font-bold md:text-5xl">
            {title}
          </h2>
          {description && (
            <p className="text-muted-foreground mt-4 max-w-sm text-sm leading-relaxed font-light">
              {description}
            </p>
          )}
        </div>
        {action}
      </AnimatedSection>
    );
  }

  return (
    <AnimatedSection
      className={cn(centered ? "mb-16 text-center" : "mb-16", className)}
    >
      <p className="text-accent mb-4 text-xs font-medium tracking-[0.3em] uppercase">
        {eyebrow}
      </p>
      <h2
        className={cn(
          "text-foreground text-3xl leading-tight font-bold md:text-4xl",
          centered ? "" : "max-w-md",
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "text-muted-foreground mt-4 font-light",
            centered ? "mx-auto max-w-lg" : "max-w-sm",
          )}
        >
          {description}
        </p>
      )}
    </AnimatedSection>
  );
};

export default SectionHeader;
