import HighlightedBrandName from "@/components/shared/HighlightedBrandName";
import Logo from "@/components/shared/Logo";
import MagneticButton from "@/components/shared/MagneticButton";
import { socials } from "@/constants/navigation.constants";
import { cn } from "@/lib/utils";

const BrandInfo = () => {
  return (
    <div className="lg:col-span-4">
      <Logo className="xsm:h-13 h-11 lg:h-15" />
      <p className="text-foreground/50 mt-4 max-w-sm text-sm leading-relaxed">
        Modern software solutions built to scale with your business. We create
        reliable, high-performance systems that deliver measurable impact.
        <br className="mt-1 block" />
        <HighlightedBrandName /> is sometimes searched as T Solutions, T-Solutions, or
        TSolutions.
      </p>

      <div className="mt-6 flex gap-2.5">
        {socials?.map((platform) => (
          <MagneticButton key={platform.url} strength={0.2}>
            <a
              href={platform.url}
              aria-label={platform.label}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                "group relative flex size-9 items-center justify-center overflow-hidden rounded-full",
                "border-border border text-xs font-medium transition-colors",
                "hover:text-accent-foreground",
              )}
            >
              <platform.icon className="z-10 size-4" />

              <span
                className={cn(
                  "bg-accent absolute inset-0 z-0",
                  "translate-y-full group-hover:translate-y-0",
                  "transition-transform duration-300 ease-out",
                )}
              />
            </a>
          </MagneticButton>
        ))}
      </div>
    </div>
  );
};

export default BrandInfo;
