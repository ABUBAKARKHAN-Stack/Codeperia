import SectionHeader from "@/components/shared/SectionHeader";
import { team } from "@/data/shared.data";
import TeamMemberCard from "./TeamMemberCard";
import { ContainerLayout } from "@/components/layout";

const OurTeamSection = () => {
  return (
    <section className="section-padding border-border/50 border-t">
      <ContainerLayout>
        <SectionHeader
          eyebrow="Our Team"
          title="Our Leadership"
          description="A focused team of strategists and engineers committed to building scalable, high-performance systems."
          centered
        />
        <div className="mx-auto max-w-2xl">
          {team.map((member, i) => (
            <TeamMemberCard key={member.name} member={member} index={i} />
          ))}
        </div>
      </ContainerLayout>
    </section>
  );
};

export default OurTeamSection;
