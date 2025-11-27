"use client";

import React, { FC, useCallback, useRef, useState } from "react";
import { motion, useInView } from "motion/react";
import { ProjectImage } from "./ProjectImage";
import { ProjectOverlay } from "./ProjectOverlay";
import { ProjectContent } from "./ProjectContent";

type Props = {
  projectImage?: string;
  liveLink: string;
  id: number;
  title: string;
  showOverlay?: boolean;
  index?: number;
  width?: string;
  height?: string;
};

const ProjectCard: FC<Props> = ({
  projectImage,
  liveLink,
  index = 0,
  height,
  width,
  title,
  showOverlay = true,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: true, margin: "-50px" });

  const handleMouseEnter = useCallback(() => setIsHovered(true), []);
  const handleMouseLeave = useCallback(() => setIsHovered(false), []);

  return (
    <motion.div
      className={`group relative cursor-pointer rounded-3xl ${width ?? "w-full"} ${height ?? "h-[360px]"} flex flex-col overflow-hidden border border-white/20 backdrop-blur-2xl`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      ref={cardRef}
      initial={{ opacity: 0, y: 60, rotateX: 15 }}
      animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
      whileHover={{
        y: -20,
        scale: 1.05,
        rotateY: 5,
        borderColor: "rgba(192, 132, 252, 0.4)",
      }}
      transition={{
        type: "spring",
        stiffness: 120,
        damping: 18,
        mass: 0.8,
        delay: index * 0.15,
      }}
      style={{
        background: `
          linear-gradient(135deg, 
            rgba(168, 85, 247, 0.15) 0%,
            rgba(139, 92, 246, 0.1) 30%,
            rgba(124, 58, 237, 0.05) 70%,
            rgba(147, 51, 234, 0.1) 100%
          )
        `,
        boxShadow: `
          inset 0 1px 0 rgba(255, 255, 255, 0.2),
          inset 0 -1px 0 rgba(0, 0, 0, 0.3),
          0 20px 40px rgba(168, 85, 247, 0.15),
          0 8px 25px rgba(0, 0, 0, 0.3),
          0 0 0 1px rgba(255, 255, 255, 0.05)
        `,
      }}
    >
      {/* Animated Glass Layers */}
      <motion.div
        className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100"
        style={{
          background: `
            radial-gradient(circle at 30% 20%, rgba(192, 132, 252, 0.3) 0%, transparent 50%),
            radial-gradient(circle at 80% 80%, rgba(168, 85, 247, 0.2) 0%, transparent 50%)
          `,
        }}
        animate={{
          opacity: isHovered ? 1 : 0,
        }}
        transition={{ duration: 0.6 }}
      />

      {/* Floating Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full bg-purple-400/30 blur-sm"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0, 1, 0],
              scale: [0.8, 1.2, 0.8],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <ProjectImage
        projectImage={projectImage}
        title={title}
        index={index}
        isHovered={isHovered}
      />

      <ProjectOverlay
        showOverlay={showOverlay}
        isHovered={isHovered}
        liveLink={liveLink}
      />

      {/* Glass Reflection Effect */}
      <motion.div
        className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 pointer-events-none"
        style={{
          background: `linear-gradient(135deg, rgba(255,255,255,0.1) 0%, transparent 50%)`,
          mask: `linear-gradient(white, transparent 70%)`,
        }}
        animate={{
          opacity: isHovered ? 0.3 : 0,
        }}
        transition={{ duration: 0.4 }}
      />
    </motion.div>
  );
};

export default ProjectCard;