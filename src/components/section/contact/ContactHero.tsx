"use client";
import { PageHeader } from "@/components/reusable";
import ScrollToSectionBtn from "@/components/ui/scroll-to-section-btn";
import { brandName } from "@/constants/constants";
import { MessageCircle } from "lucide-react";

const ContactHeroSection = () => {
  return (
    <PageHeader
      pageHeading={`Contact ${brandName}`}
      subText="Strong empires are built on strong bonds let’s connect and create something powerful together."
    >
      <ScrollToSectionBtn sectionId="get-in-touch-section">
        Start the Conversation <MessageCircle className="size-5" />
      </ScrollToSectionBtn>
    </PageHeader>
  );
};

export default ContactHeroSection;
