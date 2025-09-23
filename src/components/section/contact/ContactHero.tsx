"use client";
import { PageHeader } from "@/components/reusable";
import { Button } from "@/components/ui/button";
import { brandName } from "@/constants/constants";
import { useScroll } from "@/hooks/useScroll";
import { MessageCircle } from "lucide-react";

const ContactHeroSection = () => {
  const { scrollToSection } = useScroll();

  return (
    <PageHeader
      pageHeading={` Contact ${brandName}`}
      subText="Reach out today and let’s build something amazing together."
    >
      <Button
        size="lg"
        onClick={() => scrollToSection("#get-in-touch-section")}
        className="font-orbitron bg-primary/10 rounded-full !p-6 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:cursor-pointer hover:shadow-purple-500/25"
      >
        Start the Conversation <MessageCircle className="size-5" />
      </Button>
    </PageHeader>
  );
};

export default ContactHeroSection;
