import PrivacySection from "@/components/sections/privacy/PrivacySection";
import { Metadata } from "next";

export const metadata: Metadata = {
  robots: { index: false, follow: false },
};

const Privacy = () => {
  return (
    <>
      <PrivacySection />
    </>
  );
};

export default Privacy;
