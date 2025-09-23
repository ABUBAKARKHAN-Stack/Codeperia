"use client";

import { useLenis } from "lenis/react";
import { useCallback } from "react";

export const useScroll = () => {
  const lenis = useLenis();

  const scrollToSection = useCallback(
    (selector: string) => {
      let target: HTMLElement | null = null;

      if (
        selector.startsWith("#") ||
        selector.startsWith(".") ||
        selector.includes("[")
      ) {
        target = document.querySelector(selector) as HTMLElement | null;
      } else {
        target = document.getElementById(selector);
      }

      if (target) {
        lenis?.scrollTo(target)
      } else {
        console.warn(`Element not found for selector: ${selector}`);
      }
    },
    [lenis],
  );

  const scrollToTop = useCallback(
    () => {
      if (lenis) lenis.scrollTo(0);
    }, [lenis]
  )



  return {
    scrollToSection,
    scrollToTop,
  };
};
