import { ContainerLayout } from "@/components/layout/";
import GrainNoiseOverlay from "./GrainNoiseOverlay";
import AnimatedGradientMesh from "./AnimatedGradientMesh";
import DecorativeVerticalLine from "./DecorativeVerticalLine";
import HeroLeftColumn from "./HeroLeftColumn";
import HeroRightColumn from "./HeroRightColumn";

const HeroSection = () => {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden">
      {/* Grain noise overlay */}
      <GrainNoiseOverlay />

      {/* Animated gradient mesh */}
      <AnimatedGradientMesh />

      {/* Decorative vertical line */}
      <DecorativeVerticalLine />

      <ContainerLayout className="relative z-10">
        <div>
          <div className="lgx:pt-32 lgx:mb-20 lgx:grid-cols-12 lgx:gap-16 lgx:pb-24 mb-16 grid grid-cols-1 items-start gap-8 pt-28 pb-16">
            {/* Left column — main content */}
            <HeroLeftColumn />

            {/* Right column — services preview + mission */}
            <HeroRightColumn />
          </div>
        </div>
      </ContainerLayout>
    </section>
  );
};

export default HeroSection;
