"use client";

import { useServices } from "@/context/ServiceContext";
import { getIconByName } from "@/lib/icon-mapper";
import { AnimatePresence, motion } from "motion/react";
import Link from "next/link";
import { RefObject } from "react";
import { createPortal } from "react-dom";

type Props = {
  hasDropdown: boolean | undefined;
  showServices: boolean;
  anchorRef: RefObject<HTMLDivElement | null>;
};

const dropdownVariants = {
  hidden: { opacity: 0, y: 8, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.25,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
      staggerChildren: 0.04,
    },
  },
  exit: { opacity: 0, y: 8, scale: 0.96, transition: { duration: 0.2 } },
};

const dropdownItemVariants = {
  hidden: { opacity: 0, x: -8 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.25 } },
};

const ServicesDropdown = ({ hasDropdown, showServices, anchorRef }: Props) => {
  if (!anchorRef.current) return null;

  const rect = anchorRef.current.getBoundingClientRect();
  const { servicesOverview } = useServices();

  return createPortal(
    <AnimatePresence>
      {showServices && hasDropdown && (
        <motion.div
          className="glass border-border/50 top-[calc(0.75rem+100%)] right-0 z-999 w-107.5 overflow-hidden rounded-2xl border p-4 shadow-2xl"
          variants={dropdownVariants}
          initial="hidden"
          style={{
            position: "fixed",
            top: rect.bottom + 12,
            left: rect.right - 430,
          }}
          animate="visible"
          exit="exit"
        >
          <div className="grid grid-cols-2 gap-1">
            {servicesOverview.map((item) => {
              const Icon = getIconByName(item.icon);
              return (
                <motion.div key={item.slug} variants={dropdownItemVariants}>
                  <Link
                    href={`/services/${item.slug}`}
                    className="hover:bg-accent/10 group flex items-start gap-3 rounded-xl p-3 transition-colors duration-300"
                  >
                    <div className="bg-accent/10 group-hover:bg-accent/20 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg transition-colors duration-300">
                      <Icon className="text-accent h-4 w-4" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-foreground text-sm leading-tight font-medium">
                        {item.title}
                      </p>
                      <p className="text-muted-foreground mt-0.5 text-xs leading-snug">
                        {item.overviewLabel}
                      </p>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body,
  );
};

export default ServicesDropdown;
