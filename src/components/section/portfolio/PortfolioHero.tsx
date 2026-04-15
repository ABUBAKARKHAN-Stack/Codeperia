"use client";
import { PageHeader } from "@/components/reusable";
import ScrollToSectionBtn from "@/components/ui/scroll-to-section-btn";
import { brandName } from "@/constants/constants";
import { FolderKanban } from "lucide-react";

const PortfolioHeroSection = () => {
    return (
        <PageHeader
            pageHeading={`Explore Craftsmanship`}
            subText="Where creativity meets precision — dive into our portfolio and see how we transform ideas into impactful digital experiences."
        >
            <ScrollToSectionBtn sectionId="portfolio-section">
                View Our Projects <FolderKanban className="size-5" />
            </ScrollToSectionBtn>
        </PageHeader>
    );
};

export default PortfolioHeroSection;
