"use client";
import { PageHeader } from "@/components/reusable";
import { Button } from "@/components/ui/button";
import ScrollToSectionBtn from "@/components/ui/scroll-to-section-btn";
import { brandName } from "@/constants/constants";
import { Wrench } from "lucide-react";

const ServicesHero = () => {
  return (
    <PageHeader
      pageHeading={`${brandName} Services`}
      subText="We provide digital services that strengthen your ideas and help you build lasting success."
    >
      <ScrollToSectionBtn sectionId="what-we-do-section">
        Discover Our Services <Wrench className="size-5" />
      </ScrollToSectionBtn>
    </PageHeader>
  );
};

export default ServicesHero;
