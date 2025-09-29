"use client";

import { Button } from "./button";
import { FaArrowUp } from "react-icons/fa6";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useScroll } from "@/hooks/useScroll";

const ScrollToTopBtn = () => {
  const { scrollToTop } = useScroll();
  const [showButton, setShowButton] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const shouldShow = window.scrollY >= window.innerHeight / 2;
      setShowButton((prev) => (prev !== shouldShow ? shouldShow : prev));
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence mode="wait">
      {showButton && (
        <motion.div
          initial={{ y: -20, scale: 0.5, opacity: 0 }}
          animate={{ y: 0, scale: 1.05, opacity: 1 }}
          exit={{ y: -20, scale: 0.5, opacity: 0 }}
          transition={{ ease: "linear", duration: 0.5 }}
          className="fixed right-[5%] bottom-[5%] z-50"
        >
          <Button
            size="icon"
            className="cursor-pointer rounded-full shadow-[0px_0px_10px_rgba(0,0,0,0.5)]"
            onClick={() => scrollToTop()}
          >
            <FaArrowUp />
          </Button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ScrollToTopBtn;
