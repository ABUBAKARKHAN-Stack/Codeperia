import React from "react";
import { motion } from "motion/react";

interface ProjectContentProps {
  title: string;
  index: number;
  isInView: boolean;
  isHovered: boolean;
}

export const ProjectContent: React.FC<ProjectContentProps> = React.memo(
  ({ title, index, isInView, isHovered }) => (
    <motion.div
      className=""
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay: index * 0.15 + 0.4,
        duration: 0.6,
        ease: [0.4, 0, 0.2, 1],
      }}
    >
      <div className="space-y-4">
        {/* Title with Glass Effect */}
        <motion.div
          className="inline-block"
          animate={isHovered ? { x: 4 } : { x: 0 }}
          transition={{ duration: 0.3 }}
        >
          <h3 className="text-2xl text-center font-bold text-white drop-shadow-lg">
            {title}
          </h3>
        </motion.div>

     
      </div>
    </motion.div>
  )
);

ProjectContent.displayName = "ProjectContent";