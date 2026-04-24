"use client";

import { motion } from "motion/react";

const PageTransition = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.main
      initial={{ opacity: 0, scale: 0.98, filter: "blur(12px)" }}
      animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
      exit={{ opacity: 0, scale: 1.02, filter: "blur(10px)" }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.main>
  );
};

export default PageTransition;
