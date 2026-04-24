"use client";

import { motion } from "motion/react";

const AnimatedGradientMesh = () => {
  return (
    <motion.div className="absolute inset-0 z-1">
      <motion.div
        className="bg-accent/20 dark:bg-accent/10 absolute -top-[20%] -left-[10%] h-[60%] w-[60%] rounded-full blur-[120px]"
        animate={{
          x: [0, 80, -40, 0],
          y: [0, -60, 40, 0],
          scale: [1, 1.2, 0.9, 1],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="bg-accent/15 dark:bg-accent/8 absolute top-[30%] -right-[10%] h-[50%] w-[50%] rounded-full blur-[140px]"
        animate={{
          x: [0, -60, 30, 0],
          y: [0, 50, -30, 0],
          scale: [1, 0.85, 1.15, 1],
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="bg-accent/12 dark:bg-accent/6 absolute -bottom-[10%] left-[20%] h-[45%] w-[45%] rounded-full blur-[160px]"
        animate={{
          x: [0, 40, -60, 0],
          y: [0, -40, 20, 0],
          scale: [1, 1.1, 0.95, 1],
        }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="bg-accent/10 dark:bg-accent/5 absolute top-[10%] left-[40%] h-[35%] w-[35%] rounded-full blur-[130px]"
        animate={{
          x: [0, -30, 50, 0],
          y: [0, 60, -20, 0],
          scale: [1, 1.15, 0.9, 1],
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
    </motion.div>
  );
};

export default AnimatedGradientMesh;
