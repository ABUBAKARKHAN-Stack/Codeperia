import CTASection from "@/components/shared/CTASection";

const ProjectCTA = () => {
  return (
    <CTASection
      title={
        <>
          Your project <span className="text-accent italic">starts here</span>
        </>
      }
      description="Let's discuss your requirements and define the right approach."
    />
  );
};

export default ProjectCTA;
