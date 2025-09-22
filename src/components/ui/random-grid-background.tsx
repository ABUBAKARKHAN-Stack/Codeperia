import { cn } from "@/lib/utils";
import React, { useState, useEffect } from "react";

interface RandomBackgroundGridProps extends React.SVGProps<SVGSVGElement> {
  width?: number;
  height?: number;
  squares?: [number, number];
  className?: string;
  squaresClassName?: string;
  fillPercentage?: number;
  animationDuration?: number;
  refreshInterval?: number;
}

export function RandomBackgroundGrid({
  width = 40,
  height = 40,
  squares = [24, 24],
  className,
  squaresClassName,
  fillPercentage = 15,
  animationDuration = 2000,
  refreshInterval = 4000,
  ...props
}: RandomBackgroundGridProps) {
  const [horizontal, vertical] = squares;
  const [filledSquares, setFilledSquares] = useState<Set<number>>(new Set());

  const totalSquares = horizontal * vertical;
  const totalWidth = width * horizontal;
  const totalHeight = height * vertical;

  // Generate random filled squares
  const generateRandomSquares = () => {
    const numToFill = Math.floor((totalSquares * fillPercentage) / 100);
    const newFilledSquares = new Set<number>();

    while (newFilledSquares.size < numToFill) {
      const randomIndex = Math.floor(Math.random() * totalSquares);
      newFilledSquares.add(randomIndex);
    }

    return newFilledSquares;
  };

  // Initialize and set up interval for refreshing pattern
  useEffect(() => {
    setFilledSquares(generateRandomSquares());

    const interval = setInterval(() => {
      setFilledSquares(generateRandomSquares());
    }, refreshInterval);

    return () => clearInterval(interval);
  }, [fillPercentage, refreshInterval, totalSquares]);

  return (
    <svg
      viewBox={`0 0 ${totalWidth} ${totalHeight}`}
      preserveAspectRatio="xMidYMid slice"
      className={cn(
        "pointer-events-none absolute inset-0 h-full w-full",
        className,
      )}
      {...props}
    >
      {Array.from({ length: totalSquares }).map((_, index) => {
        const x = (index % horizontal) * width;
        const y = Math.floor(index / horizontal) * height;
        const isFilled = filledSquares.has(index);

        return (
          <rect
            key={index}
            x={x}
            y={y}
            width={width}
            height={height}
            className={cn(
              "stroke-gray-200/20 transition-all ease-in-out",
              isFilled
                ? "fill-blue-500/10 stroke-blue-500/20"
                : "fill-transparent",
              squaresClassName,
            )}
            style={{
              transitionDuration: `${animationDuration}ms`,
              transitionDelay: `${Math.random() * 1000}ms`,
            }}
          />
        );
      })}
    </svg>
  );
}
