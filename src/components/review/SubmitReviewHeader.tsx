"use client";

import { PageHeader } from "@/components/reusable";
import ScrollToSectionBtn from "@/components/ui/scroll-to-section-btn";
import { PiStar } from "react-icons/pi";

const ReviewHeader = () => {
  return (
    <PageHeader
      pageHeading={`Submit Your Review`}
      subText="Your detailed feedback helps us enhance our services and ensures we continue providing an exceptional experience for all our users."
      showBreadCrumb={false}
    >
      {" "}
      <ScrollToSectionBtn sectionId="submit-review-form-section">
        Share Your Experience <PiStar className="size-5" />{" "}
      </ScrollToSectionBtn>
    </PageHeader>
  );
};

export default ReviewHeader;
