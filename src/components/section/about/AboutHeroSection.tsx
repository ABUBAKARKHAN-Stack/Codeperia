"use client";
import { PageHeader } from "@/components/reusable";
import ScrollToSectionBtn from "@/components/ui/scroll-to-section-btn";
import { brandName } from "@/constants/constants";
import { Sparkles } from "lucide-react";

const AboutHeroSection = () => {

  return (
    <PageHeader
      pageHeading={`About ${brandName}`}
      subText="Every great empire begins with a story and ours is built on innovation and code."
    >
      <ScrollToSectionBtn sectionId="about-our-story-section">
        Explore Who We Are <Sparkles className="size-5" />
      </ScrollToSectionBtn>
    </PageHeader>
  );
};

export default AboutHeroSection;
