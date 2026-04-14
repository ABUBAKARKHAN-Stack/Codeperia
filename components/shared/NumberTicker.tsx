"use client";

import { useInView } from "motion/react";
import { useEffect, useRef, useState } from "react";

export const NumberTicker = ({
  value,
  suffix,
  delay,
}: {
  value: number;
  suffix: string;
  delay: number;
}) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    const timeout = setTimeout(() => {
      const duration = 1500;
      const steps = 60;
      let step = 0;
      const interval = setInterval(() => {
        step++;
        const progress = 1 - Math.pow(1 - step / steps, 3);
        if (step >= steps) {
          setCount(value);
          clearInterval(interval);
        } else {
          setCount(Math.floor(value * progress));
        }
      }, duration / steps);
      return () => clearInterval(interval);
    }, delay * 1000);
    return () => clearTimeout(timeout);
  }, [inView, value, delay]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
};
