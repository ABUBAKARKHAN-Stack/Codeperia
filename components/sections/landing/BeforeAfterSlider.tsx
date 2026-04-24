import { useState, useRef, useCallback } from "react";

interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
  beforeLabel?: string;
  afterLabel?: string;
  className?: string;
}

const BeforeAfterSlider = ({
  beforeImage,
  afterImage,
  beforeLabel = "Before",
  afterLabel = "After",
  className = "",
}: BeforeAfterSliderProps) => {
  const [position, setPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(e.clientX - rect.left, rect.width));
    setPosition((x / rect.width) * 100);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setPosition(50);
  }, []);

  return (
    <div
      ref={containerRef}
      className={`relative cursor-col-resize overflow-hidden ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      aria-label="Before and after comparison slider"
    >
      {/* After image (full, sits behind) */}
      <img
        src={afterImage}
        alt="After"
        className="h-full w-full object-cover"
        draggable={false}
      />

      {/* Before image (clipped) */}
      <div
        className="absolute inset-0 transition-[clip-path] duration-100 ease-out"
        style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
      >
        <img
          src={beforeImage}
          alt="Before"
          className="h-full w-full object-cover"
          draggable={false}
        />
        <div className="bg-foreground/10 absolute inset-0" />
      </div>

      {/* Slider line */}
      <div
        className="bg-background/80 absolute top-0 bottom-0 z-10 w-0.5 backdrop-blur-sm transition-[left] duration-100 ease-out"
        style={{ left: `${position}%`, transform: "translateX(-50%)" }}
      >
        <div className="bg-background/90 border-accent absolute top-1/2 left-1/2 flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 shadow-lg backdrop-blur-md">
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            className="text-accent"
          >
            <path
              d="M5 3L2 8L5 13"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M11 3L14 8L11 13"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>

      {/* Labels */}
      <span className="text-foreground/70 bg-background/30 border-border/20 pointer-events-none absolute top-3 left-3 z-10 rounded-full border px-2.5 py-1 text-[10px] font-medium tracking-wider uppercase backdrop-blur-md">
        {beforeLabel}
      </span>
      <span className="text-accent bg-background/30 border-border/20 pointer-events-none absolute top-3 right-3 z-10 rounded-full border px-2.5 py-1 text-[10px] font-medium tracking-wider uppercase backdrop-blur-md">
        {afterLabel}
      </span>
    </div>
  );
};

export default BeforeAfterSlider;
