import CTASection from "@/components/shared/CTASection";

const AboutCTASection = () => {
  return (
    <CTASection
      title={
        <>
          Ready to engineer your{" "}
          <span className="text-accent italic">digital future?</span>
        </>
      }
      description="Partner with Codeperia to transform complex challenges into high-performance, scalable systems built for sustainable business success."
      buttonText="Schedule a Consultation"
    />
  );
};

export default AboutCTASection;
