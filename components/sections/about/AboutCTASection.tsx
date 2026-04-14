import CTASection from "@/components/shared/CTASection";

const AboutCTASection = () => {
  return (
    <CTASection
      title={
        <>
          Let's discuss your{" "}
          <span className="text-accent italic">next move</span>
        </>
      }
      description="Whether you're planning a new build or scaling an existing platform, we're ready to help."
      buttonText="Get in Touch"
    />
  );
};

export default AboutCTASection;
