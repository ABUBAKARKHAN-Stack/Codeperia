"use client";

import { APP_NAME } from "@/constants/app.constants";
import {
  animate,
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
} from "motion/react";
import { MouseEvent, useRef } from "react";

const MaskedBrandName = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const smoothX = useSpring(mouseX, { stiffness: 300, damping: 20 });
  const smoothY = useSpring(mouseY, { stiffness: 300, damping: 20 });

  const handleMouseMove = (
    e: MouseEvent<HTMLDivElement, globalThis.MouseEvent>,
  ) => {
    if (!containerRef.current) return;
    const rect = containerRef.current?.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };
  const maskOpacity = useMotionValue(0);

  const handleMouseEnter = () => {
    animate(maskOpacity, 1, {
      type: "tween",
      ease: "linear",
      duration: 0.3,
    });
  };
  const handleMouseLeave = () => {
    animate(maskOpacity, 0, {
      type: "tween",
      ease: "linear",
      duration: 1,
      delay: 0.3,
    });
  };

  const maskImage = useMotionTemplate`
    radial-gradient(
      circle 200px at ${smoothX}px ${smoothY}px,
      rgba(0,0,0,${maskOpacity}) 35%,
      rgba(0,0,0,${maskOpacity}) 55%,
      transparent 100%
    )
  `;
  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="relative hidden overflow-hidden pb-24 lg:block"
    >
      <motion.div
        className="group relative cursor-default select-none"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <div className="relative">
          {/* Outline layer */}
          <h2 className="font-playfair text-center text-[clamp(4rem,14vw,12rem)] leading-[0.85] font-semibold tracking-wider whitespace-nowrap text-transparent [-webkit-text-stroke:1px_rgba(255,255,255,0.05)]">
            {APP_NAME}
          </h2>

          {/* Masked Accent Color Fill*/}

          <motion.h2
            className="font-playfair pointer-events-none absolute inset-0 bg-clip-text text-center text-[clamp(4rem,14vw,12rem)] leading-[0.85] font-semibold tracking-wider whitespace-nowrap text-transparent"
            style={{
              backgroundImage:
                "linear-gradient(180deg, #ABC7A3 0%, rgba(144, 179, 137, 0.4) 100%)",
              WebkitMaskImage: maskImage,
              maskImage: maskImage,
            }}
            aria-hidden="true"
          >
            {APP_NAME}
          </motion.h2>
        </div>
      </motion.div>
    </div>
  );
};

export default MaskedBrandName;
