import React from "react";
import { AnimatePresence, motion } from "motion/react";
import Link from "next/link";
import { Globe, Sparkles, ExternalLink, Code } from "lucide-react";

interface ProjectOverlayProps {
  showOverlay: boolean;
  isHovered: boolean;
  githubLink?: string;
  liveLink?: string;
  title?: string;
}

export const ProjectOverlay: React.FC<ProjectOverlayProps> = React.memo(
  ({ showOverlay, isHovered, liveLink, title }) => (
    <AnimatePresence mode="wait">
      {showOverlay && isHovered && (
        <motion.div
          key="project-overlay"
          className="absolute inset-0 z-30 flex flex-col items-center justify-center rounded-3xl"
          initial={{ opacity: 0 }}
          animate={{
            opacity: isHovered ? 1 : 0,
          }}
          exit={{ opacity: 0 }}
          transition={{
            duration: 0.4,
            ease: [0.4, 0, 0.2, 1],
          }}
          style={{
            background: `
              radial-gradient(circle at 50% 50%, 
                rgba(168, 85, 247, 0.95) 0%,
                rgba(147, 51, 234, 0.85) 30%,
                rgba(126, 34, 206, 0.75) 70%,
                rgba(107, 33, 168, 0.65) 100%
              )
            `,
          }}
        >
          <motion.div
            className="flex flex-col items-center gap-6 text-center"
            initial={{ scale: 0.8, y: 20, opacity: 0 }}
            animate={{
              scale: isHovered ? 1 : 0.8,
              y: isHovered ? 0 : 20,
              opacity: isHovered ? 1 : 0,
            }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 20,
              delay: 0.1,
            }}
          >
            {/* Project Icon */}
            <motion.div
              animate={{
                rotate: [0, 5, -5, 0],
                scale: [1, 1.1, 1]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Sparkles className="size-8 text-white/90" />
            </motion.div>

            {/* Live Link Button */}
            {liveLink && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <Link
                  href={liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/btn flex items-center gap-3 px-8 py-4 rounded-2xl border border-white/30 bg-white/20 backdrop-blur-xl text-white font-semibold shadow-2xl shadow-purple-500/30 hover:shadow-purple-500/50 hover:bg-white/30 transition-all duration-300 hover:scale-105"
                  onClick={(e) => e.stopPropagation()}
                >
                  <Globe className="size-5" />
                  <span>Explore Live</span>
                  <ExternalLink className="size-4 transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                </Link>
              </motion.div>
            )}
          </motion.div>

          {/* Floating CodePria Text */}
          <motion.div
            className="absolute bottom-6 flex items-center gap-2 text-white/50 text-sm font-mono"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <Code className="size-4" />
            <span>Developed By CodePria</span>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
);

ProjectOverlay.displayName = "ProjectOverlay";