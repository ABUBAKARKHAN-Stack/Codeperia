"use client";

import { ArrowUpRight, Star } from "lucide-react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import { IServiceOverview } from "@/types/service.types";
import Link from "next/link";
import { getIconByName } from "@/lib/icon-mapper";
import { getPreviewImageUrl } from "@/lib/transformed-img-urls";
import Image from "next/image";

interface ServiceCardProps {
  service: IServiceOverview;
  num: number;
}

const ServiceCard = ({
  num,
  service: { description, featured, icon, image, slug, tags, title },
}: ServiceCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const Icon = getIconByName(icon);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [6, -6]), {
    stiffness: 250,
    damping: 25,
  });

  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-6, 6]), {
    stiffness: 250,
    damping: 25,
  });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    mouseX.set((e.clientX - rect.left) / rect.width - 0.5);
    mouseY.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const resetTilt = () => {
    mouseX.set(0);
    mouseY.set(0);
    setIsHovered(false);
  };

  return (
    <Link
      href={slug ? `/services/${slug}` : "/services"}
      className="group block h-full"
      style={{ perspective: "1000px" }}
    >
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={resetTilt}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className="relative h-full overflow-hidden rounded-2xl"
      >
        <div className="border-border/40 group-hover:border-accent/40 relative h-full overflow-hidden rounded-2xl border transition-colors duration-500">
          {/* Background image */}
          <div className="absolute inset-0">
            <Image
              src={getPreviewImageUrl(image.source)}
              alt={image.alt}
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              fill
              loading="lazy"
            />
            <div className="from-background/95 via-background/60 to-background/10 absolute inset-0 bg-linear-to-t" />
          </div>

          {/* Hover gradient */}
          <motion.div
            className="from-accent/15 to-accent/10 pointer-events-none absolute inset-0 bg-linear-to-br via-transparent"
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.4 }}
          />

          {/* Shine sweep */}
          <motion.div
            className="pointer-events-none absolute inset-0 z-10"
            style={{
              background: `linear-gradient(105deg, transparent 40%, color-mix(in srgb, var(--accent) 7%, transparent) 45%, color-mix(in srgb, var(--accent) 12%, transparent) 50%, transparent 55%)`,
            }}
            initial={{ opacity: 0, x: "-100%" }}
            animate={{
              opacity: isHovered ? 1 : 0,
              x: isHovered ? "100%" : "-100%",
            }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          />

          {/* Top accent line */}
          <motion.div
            className="bg-accent absolute top-0 right-0 left-0 z-20 h-0.5"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: isHovered ? 1 : 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            style={{ transformOrigin: "left" }}
          />

          {/* Content */}
          <div className="relative z-10 flex h-full min-h-90 flex-col justify-between p-6 lg:p-7">
            {/* Top: Number + Arrow */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="text-accent/80 font-mono text-sm font-bold">
                  {num > 10 ? `${num}` : `0${num}`}
                </span>

                {featured && (
                  <span className="text-accent bg-accent/12 border-accent/20 inline-flex items-center gap-1 rounded-full border px-2 py-0.5 text-[9px] font-semibold tracking-wider uppercase backdrop-blur-md">
                    <Star className="fill-accent h-2.5 w-2.5" /> Featured
                  </span>
                )}
              </div>

              <motion.div
                className="bg-primary-foreground/10 dark:bg-foreground/10 border-primary-foreground/15 dark:border-border/40 flex h-9 w-9 items-center justify-center rounded-lg border backdrop-blur-md"
                animate={{
                  backgroundColor: isHovered ? "var(--accent)" : undefined,
                  borderColor: isHovered ? "var(--accent)" : undefined,
                }}
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  animate={{ rotate: isHovered ? 45 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ArrowUpRight className="text-foreground/80 group-hover:text-accent-foreground h-3.5 w-3.5 transition-colors duration-300" />
                </motion.div>
              </motion.div>
            </div>

            {/* Bottom: Icon, Title, Description, Tags */}
            <div className="mt-auto space-y-3">
              <div className="bg-accent/20 border-accent/25 flex h-10 w-10 items-center justify-center rounded-xl border backdrop-blur-sm">
                <Icon className="text-accent h-5 w-5" />
              </div>

              <h3 className="text-primary-foreground dark:text-foreground text-lg leading-snug font-bold tracking-tight lg:text-xl">
                {title}
              </h3>

              <p className="text-primary-foreground/65 dark:text-muted-foreground line-clamp-3 text-[13px] leading-relaxed font-light">
                {description}
              </p>

              {tags && tags.length > 0 && (
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="text-primary-foreground/55 dark:text-muted-foreground bg-primary-foreground/8 dark:bg-foreground/8 border-primary-foreground/10 dark:border-border/30 rounded-md border px-2.5 py-1 text-[10px] font-medium backdrop-blur-sm"
                    >
                      {tag}
                    </span>
                  ))}
                  {tags.length > 3 && (
                    <span className="text-accent bg-accent/15 border-accent/20 rounded-md border px-2.5 py-1 text-[10px] font-medium backdrop-blur-sm">
                      +{tags.length - 3} more
                    </span>
                  )}
                </div>
              )}
            </div>
          </div>

          {/* Bottom glow on hover */}
          <motion.div
            className="bg-accent/25 pointer-events-none absolute bottom-0 left-1/2 h-16 w-2/3 -translate-x-1/2 rounded-full blur-2xl"
            animate={{ opacity: isHovered ? 0.5 : 0 }}
            transition={{ duration: 0.4 }}
          />
        </div>
      </motion.div>
    </Link>
  );
};

export default ServiceCard;
