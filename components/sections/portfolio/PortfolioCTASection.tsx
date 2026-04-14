import CTASection from "@/components/shared/CTASection";

const PortfolioCTASection = () => {
  return (
    <CTASection
      title={
        <>
          Want results <br />
          <span className="text-accent italic">like these?</span>
        </>
      }
      description="Let's discuss how we can create a similar success story for your business."
      buttonText="Start Your Project"
    />
  );
};

export default PortfolioCTASection;
