import CTASection from "@/components/shared/CTASection";

const PortfolioCTASection = () => {
  return (
    <CTASection
      title={
        <>
          Ready for strategic{" "}
          <span className="text-accent italic">results?</span>
        </>
      }
      description="Let's discuss how our strategic engineering can create a similar impact for your unique business objectives."
      buttonText="Initiate Your Project"
    />
  );
};

export default PortfolioCTASection;
