import React from "react";
import { motion } from "motion/react";

interface CardContentProps {
  title: string;
  description: string;
}

export const CardContent: React.FC<CardContentProps> = React.memo(
  ({ title, description }) => (
    <motion.div className="z-[2] flex flex-col gap-4">
      <div className="space-y-2">
        <motion.h3 className="bg-gradient-to-r from-[#ada3e9] to-[#c5b3ea] bg-clip-text text-lg leading-tight font-semibold text-transparent drop-shadow-[0_0_8px_oklch(0.75_0.1_290_/_0.4)]">
          {title}
        </motion.h3>
        <motion.div className="h-0.5 rounded-full bg-gradient-to-r from-[oklch(0.65_0.22_295)] via-[#a1a7ec] to-[#c5b3ea] shadow-[0_0_8px_oklch(0.75_0.1_290_/_0.7)]" />
      </div>
      <motion.p className="text-sm leading-relaxed text-[#9d9ea5]">
        {description}
      </motion.p>
    </motion.div>
  ),
);

CardContent.displayName = "CardContent";
