"use client";
import { PageHeader } from "@/components/reusable";
import { Button } from "@/components/ui/button";
import ScrollToSectionBtn from "@/components/ui/scroll-to-section-btn";
import { brandName } from "@/constants/constants";
import { Sparkles } from "lucide-react";

const ServicesHero = () => {

  return (
    <PageHeader
      pageHeading={`${brandName} Services`}
      subText="Each service is a spark, igniting new horizons in the universe of possibilities."
    >
      <ScrollToSectionBtn
        sectionId="what-we-do-section"
      >
        Explore Our Services <Sparkles className="size-5" />
      </ScrollToSectionBtn>
    </PageHeader>
  );
};

export default ServicesHero;
