"use client";

import { motion } from "motion/react";

const DecorativeVerticalLine = () => {
  return (
    <motion.div
      className="via-border/40 absolute top-0 bottom-0 left-[10%] hidden w-px bg-linear-to-b from-transparent to-transparent lg:block"
      initial={{ scaleY: 0 }}
      animate={{ scaleY: 1 }}
      transition={{ duration: 1.2, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
    />
  );
};

export default DecorativeVerticalLine;
