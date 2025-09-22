import React, { FC, ReactNode, ElementType } from "react";
import { Button } from "./button";
import { cn } from "@/lib/utils";

type Props = {
  icon: ElementType;
  children: ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export const AnimatedHoverBtn: FC<Props> = ({
  icon: Icon,
  children,
  className = "",
  ...props
}) => {
  return (
    <Button
      size="lg"
      className={cn(
        "group overflow-hidden rounded-full !p-7 text-base font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:cursor-pointer hover:shadow-purple-500/25 md:text-lg",
        className,
      )}
      {...props}
    >
      {children}
      <div className="relative">
        <Icon className="size-5 -translate-y-0 opacity-100 transition-all duration-300 ease-in-out group-hover:-translate-y-20 group-hover:scale-0 group-hover:opacity-0" />
        <Icon className="absolute inset-0 size-5 translate-y-20 scale-0 opacity-0 transition-all duration-300 ease-in-out group-hover:-translate-y-0 group-hover:scale-105 group-hover:opacity-100" />
      </div>
    </Button>
  );
};
