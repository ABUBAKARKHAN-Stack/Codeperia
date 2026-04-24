import CTASection from "@/components/shared/CTASection";

const ServicesCTASection = () => {
  return (
    <CTASection
      title={
        <>
          Need a strategic{" "}
          <span className="text-accent italic">partnership?</span>
        </>
      }
      description="Beyond code, we provide strategic engineering to help your business scale. Let's discuss a custom digital architecture tailored to your unique objectives."
      buttonText="Start a Strategic Conversation"
    />
  );
};

export default ServicesCTASection;
