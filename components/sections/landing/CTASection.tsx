import SharedCTASection from "@/components/shared/CTASection";
import MagneticButton from "@/components/shared/MagneticButton";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const CTASection = () => {
  return (
    <SharedCTASection
      title={
        <>
          Let's build something
          <br />
          <span className="text-accent italic">extraordinary</span>
        </>
      }
      description="Ready to bring your idea to life? Send us a message and start the conversation today."
      extraActions={
        <MagneticButton>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="border-border text-foreground hover:bg-accent/10 h-12 rounded-full px-8 text-sm font-medium"
          >
            <Link href="/about">
              Learn About Us <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </MagneticButton>
      }
    />
  );
};

export default CTASection;
