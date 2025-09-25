"use client";
import { Highlighter } from "@/components/magicui/highlighter";
import React, { FC, JSX, ReactNode, useEffect, useState } from "react";
import { ContainerLayout } from "../layout";
import { cn } from "@/lib/utils";

type Props = {
  pageHeading: string;
  subText?: string;
  children?: ReactNode;
  className?: string;
};

const PageHeader: FC<Props> = ({
  pageHeading,
  subText,
  children,
  className,
}) => {
  const [headerHeight, setHeaderHeight] = useState("");

  useEffect(() => {
    const updateHeight = () => {
      const vh = window.innerHeight;
      if (vh < 1024) {
        setHeaderHeight(`calc(75vh + 4rem)`);
      } else {
        setHeaderHeight(`calc(50vh + 4rem)`);
      }
    };
    updateHeight();
    window.addEventListener("resize", updateHeight);

    return () => window.removeEventListener("resize", updateHeight);
  }, []);

  return (
    <header
      style={{ height: headerHeight, }}
      className={cn(
        "z-10 bg-gradient-to-b flex flex-col justify-center items-center from-[#2a0347] via-[#450e6e] to-[#2a0347]",
        "pt-16",
        "relative w-full",
        className,
      )}
    >
      <div
        className="absolute inset-0 -z-20 opacity-25"
        style={{ backgroundImage: "url('/assets/bg-pattern.svg')" }}
      />

    
      <ContainerLayout className="h-full">
        <section className="flex size-full flex-col items-center justify-center gap-y-8">
          <Highlighter
            action="underline"
            animationDuration={500}
            once
            color="white"
            padding={5}
            className="font-audiowide w-fit text-center text-4xl text-wrap md:text-5xl lg:text-6xl"
          >
            <h1 className="w-fit">{pageHeading}</h1>
          </Highlighter>
          {subText && (
            <Highlighter
              action="highlight"
              delay={0.75}
              animationDuration={500}
              once
              color="rgba(255,255,255,0.05)"
              className="font-audiowide w-fit max-w-[500px] p-2 text-center text-base font-light tracking-wider text-wrap text-white/85"
            >
              <span className="w-fit">{subText}</span>
            </Highlighter>
          )}
          {children && children}
        </section>
      </ContainerLayout>
    </header>
  );
};

export default PageHeader;
