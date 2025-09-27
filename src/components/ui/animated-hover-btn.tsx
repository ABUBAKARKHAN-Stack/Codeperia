"use client";
import React, { FC, ReactNode, ElementType } from "react";
import { buttonVariants } from "./button";
import { cn } from "@/lib/utils";
import { motion, MotionProps } from "framer-motion";

type Props = {
  icon: ElementType;
  children: ReactNode;
  variant?:
    | "default"
    | "destructive"
    | "outline"
    | "secondary"
    | "ghost"
    | "link";
} & React.ButtonHTMLAttributes<HTMLButtonElement> &
  MotionProps;

export const AnimatedHoverBtn: FC<Props> = ({
  icon: Icon,
  children,
  variant = "default",
  className = "",
  ...props
}) => {
  return (
    <motion.button
      type="button"
      className={cn(
        buttonVariants({ variant, size: "lg" }),
        "flex cursor-pointer items-center gap-2 overflow-hidden rounded-full !p-7 text-base font-semibold text-white shadow-lg md:text-lg",
        className,
      )}
      initial="rest"
      animate="rest"
      whileHover="hover"
      whileTap={{ scale: [1, 0.9, 1] }}
      {...props}
    >
      {children}

      <div className="relative h-5 w-5">
        <motion.div
          variants={{
            rest: { y: 0, opacity: 1, scale: 1 },
            hover: { y: -20, opacity: 0, scale: 0.8 },
          }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <Icon className="size-5" />
        </motion.div>

        <motion.div
          variants={{
            rest: { y: 20, opacity: 0, scale: 0.8 },
            hover: { y: 0, opacity: 1, scale: 1.05 },
          }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <Icon className="size-5" />
        </motion.div>
      </div>
    </motion.button>
  );
};
