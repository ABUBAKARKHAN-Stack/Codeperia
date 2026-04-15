import React from "react";
import { motion } from "motion/react";
import Image from "next/image";

interface ProjectImageProps {
  projectImage?: string;
  title: string;
  index: number;
  isHovered: boolean;
}

export const ProjectImage: React.FC<ProjectImageProps> = React.memo(
  ({ projectImage, title, index, isHovered }) => (
    <motion.div
      className="relative z-0 h-full w-full overflow-hidden"
      initial={{ opacity: 0, scale: 1.1 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        delay: index * 0.15 + 0.2,
        duration: 0.8,
        ease: [0.4, 0, 0.2, 1],
      }}
    >
      {projectImage ? (
        <div className="relative h-full w-full">
          <Image
            src={projectImage}
            alt={title}
            fill
            className="object-cover transition-all duration-700 group-hover:scale-110"
          />
          {/* Glass Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/20 to-purple-900/60" />
        </div>
      ) : (
        <div className="relative flex h-full w-full items-center justify-center overflow-hidden bg-gradient-to-br from-purple-900/50 to-pink-900/30">
          {/* Animated Glass Placeholder */}
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-pink-500/10 backdrop-blur-sm" />
          
          {/* Floating Logo Effect */}
          <motion.div
            className="relative"
            animate={{ 
              y: [0, -10, 0],
              rotateY: [0, 180, 360]
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <div className="text-5xl font-bold bg-gradient-to-r from-purple-200 to-pink-200 bg-clip-text text-transparent">
              {title}
            </div>
          </motion.div>

          {/* Glass Shine */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12"
            animate={{ x: isHovered ? ["-100%", "200%"] : "-100%" }}
            transition={{ duration: 1.5, delay: 0.2 }}
          />
        </div>
      )}

      {/* Purple Hover Glow */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-t from-purple-500/40 via-purple-400/20 to-transparent opacity-0"
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      />
    </motion.div>
  )
);

ProjectImage.displayName = "ProjectImage";