"use client";
import { useScrollToSection } from "@/hooks/useScrollToSection";
import { Sparkles } from "lucide-react";
import ContainerLayout from "../../layout/ContainerLayout";
import { motion } from "framer-motion";
import { brandName } from "@/constants/constants";
import { cn } from "@/lib/utils";
import { AnimatedHoverBtn } from "@/components/ui/animated-hover-btn";
import { PiRocketDuotone } from "react-icons/pi";
import { AnimatedGridPattern } from "@/components/ui/animated-grid-pattern";
import { ourStats } from "@/data/about.data";
import { useMediaQuery } from "@/hooks/useMediaQuery";

const Hero = () => {
  const { scrollToSection } = useScrollToSection();


  
  return (
    <section className="relative mt-16 flex h-full min-h-screen w-full items-center overflow-hidden mask-x-from-95%">

      <AnimatedGridPattern
        numSquares={30}
        maxOpacity={0.05}
        duration={3}
        repeatDelay={1}
        className={cn(
          "inset-x-0 inset-y-[-30%] h-[200%] skew-y-12 stroke-white/5",
          "-z-10",
        )}
      />

      <ContainerLayout>
        <div className="relative z-10 flex flex-col items-center justify-center space-y-6 py-6 sm:space-y-8 lg:items-start lg:justify-start">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 rounded-full border border-purple-400/20 bg-purple-500/10 px-3 py-1.5 backdrop-blur-sm sm:px-4 sm:py-2"
          >
            <Sparkles className="size-3 text-purple-300 sm:size-4" />
            <span className="text-xs font-medium tracking-wide text-purple-200 sm:text-sm">
              Premium Software Solutions
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
            className={cn(
              "text-2xl min-[320px]:text-3xl min-[450px]:text-4xl sm:text-5xl md:text-6xl lg:text-left xl:text-7xl 2xl:text-8xl",
              "font-audiowide relative text-center leading-tight font-bold tracking-wide text-wrap uppercase sm:leading-tight md:leading-tight",
            )}
          >
            <motion.span
              animate={{
                textShadow: [
                  "0 0 10px #a855f7, 0 0 20px #a855f7, 0 0 30px #9333ea",
                  "0 0 20px #9333ea, 0 0 40px #a855f7, 0 0 60px #7e22ce",
                  "0 0 10px #a855f7, 0 0 20px #a855f7, 0 0 30px #9333ea",
                ],
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                repeatType: "mirror",
                ease: "easeInOut",
              }}
              className="text-white drop-shadow-2xl"
            >
              Building Digital Empires
            </motion.span>
          </motion.h1>

          <p className="max-w-xs text-center text-sm leading-relaxed font-normal text-white/90 min-[350px]:max-w-sm min-[350px]:text-base sm:max-w-md md:max-w-lg md:text-lg lg:text-left xl:text-xl 2xl:max-w-2xl">
            At{" "}
            <span className="relative inline-block px-1 font-semibold">
              {brandName}
              <span className="absolute inset-0 -z-10 inline-block bg-primary"></span>
            </span>
            , we craft innovative, scalable, and reliable software solutions
            that empower businesses to grow, lead, and thrive in the digital
            world.
          </p>

          <div className="flex justify-center lg:justify-start">
            <AnimatedHoverBtn icon={PiRocketDuotone}>
              Start Your Project
            </AnimatedHoverBtn>
          </div>

          <div className="grid grid-cols-2 gap-4 text-purple-200/80 sm:flex sm:flex-wrap sm:items-center sm:justify-center sm:gap-6 md:gap-8 lg:justify-start lg:gap-12">
            {ourStats.map((metric, index) => (
              <div key={index} className="text-center">
                <div className="text-xl font-bold text-white sm:text-2xl md:text-3xl">
                  {metric.value}
                </div>
                <div className="text-xs font-medium tracking-wider uppercase opacity-70 sm:text-sm">
                  {metric.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </ContainerLayout>
    </section>
  );
};

export default Hero;

{
  /* <InteractiveGridPattern
          className={cn("inset-x-0 inset-y-[-30%] h-[200%] skew-y-12")}
          squares={[30, 30]}
          squaresClassName="stroke-white/2.5"
        /> */
}
{
  /* <GridPattern
          className={cn(
            "inset-x-0 inset-y-[-30%] h-[200%] skew-y-12 stroke-white/5 fill-purple-500/5"
          )}
          squares={[
            [4, 4],
            [5, 1],
            [8, 2],
            [5, 3],
            [5, 5],
            [10, 10],
            [12, 15],
            [15, 10],
            [10, 15],
            [15, 10],
            [10, 15],
            [15, 10],
          ]}
        /> */
}
