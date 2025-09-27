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

export const PrimaryCtaBtn: FC<Props> = ({
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
        "flex cursor-pointer items-center gap-2 overflow-hidden rounded-full !p-7 text-base font-semibold text-white shadow-lg transition-colors duration-200 ease-in-out md:text-lg",
        className,
      )}
      whileTap={{ scale: [1, 0.9, 1] }}
      {...props}
    >
      {children}
      <Icon className="size-5" />
    </motion.button>
  );
};
