"use client";

import React, { FC, useRef } from "react";
import { motion, useInView } from "motion/react";
import { LucideIcon } from "lucide-react";
import { CardContent } from "./CardContent";
import Link from "next/link";

type FeatureCardProps = {
  title: string;
  description: string;
  icon: LucideIcon;
  link?: string;
  index?: number;
  width?: string;
  height?: string;
};

const FeatureCard: FC<FeatureCardProps> = ({
  title,
  description,
  icon: Icon,
  link = "#",
  index = 0,
  height,
  width,
}) => {
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, {
    once: true,
    margin: "-100px",
  });

  return (
    <Link href={link}>
      <motion.div
        className={`group relative rounded-xl hover:cursor-pointer ${width ?? "w-full"} ${height ?? "h-80"} flex flex-col justify-between overflow-hidden border border-white/10 bg-slate-800/40 px-6 py-8 backdrop-blur-md before:absolute before:inset-0 before:animate-pulse before:rounded-xl before:bg-gradient-to-br before:from-slate-900 before:via-purple-900 before:to-slate-900 before:p-[1px] after:absolute after:inset-[1px] after:z-[1] after:rounded-xl after:bg-slate-900/40 after:backdrop-blur-sm`}
        ref={cardRef}
        initial={{ opacity: 0, y: 50, scale: 0.95 }}
        animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
        whileHover={{
          y: -12,
          scale: 1.02,
          boxShadow: [
            "0 5px 15px rgba(168,85,247,0.3), 0 0 10px rgba(196,181,253,0.2)",
            "0 10px 30px rgba(168,85,247,0.4), 0 0 20px rgba(196,181,253,0.3)",
          ],
        }}
        transition={{
          type: "spring",
          stiffness: 150,
          damping: 25,
        }}
        style={{
          boxShadow:
            "0 8px 25px rgba(168,85,247,0.15), 0 3px 10px rgba(0,0,0,0.3)",
          willChange: "transform, opacity",
        }}
      >
        <motion.div
          className="relative z-[2] mb-4 flex h-14 w-14 items-center justify-center"
          initial={{ scale: 0, rotate: 180, opacity: 0 }}
          animate={{ scale: 1, rotate: 0, opacity: 1 }}
          transition={{
            type: "spring",
            stiffness: 200,
            damping: 20,
            delay: index * 0.1 + 0.3,
          }}
        >
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[oklch(0.75_0.1_290)] to-[oklch(0.65_0.22_295)] shadow-lg" />

          <motion.div
            className="absolute inset-0 rounded-full bg-gradient-to-br from-[oklch(0.75_0.1_290)] to-[oklch(0.65_0.22_295)]"
            animate={{
              boxShadow: [
                "0_0_15px_oklch(0.75_0.1_290_/_0.7)",
                "0_0_25px_oklch(0.65_0.22_295_/_0.9)",
                "0_0_15px_oklch(0.75_0.1_290_/_0.7)",
              ],
            }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ delay: index * 0.1 + 0.5 }}
          >
            <Icon className="relative z-10 size-7 stroke-[1.5] text-white drop-shadow-[0_0_6px_black]" />
          </motion.div>
        </motion.div>

        <CardContent title={title} description={description} index={index} />
      </motion.div>
    </Link>
  );
};

export default FeatureCard;
