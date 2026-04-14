"use client";
import { motion } from "motion/react";
import { ArrowUpRight, Linkedin, Twitter, Mail } from "lucide-react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { useState } from "react";
import Image from "next/image";
import { APP_NAME } from "@/constants/app.constants";

interface TeamMember {
  name: string;
  role: string;
  initials: string;
  image: string;
  bio: string;
  linkedin?: string;
  twitter?: string;
  email?: string;
}

const TeamMemberCard = ({
  member,
  index,
}: {
  member: TeamMember;
  index: number;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Minimal Card */}
      <motion.div
        className="group relative cursor-pointer"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.1, duration: 0.5 }}
        onClick={() => setIsOpen(true)}
      >
        <div className="border-border/30 hover:border-accent/40 flex items-center gap-5 border-b px-2 py-6 transition-all duration-500">
          <span className="text-muted-foreground/40 group-hover:text-accent w-5 font-mono text-[10px] transition-colors duration-500">
            {String(index + 1).padStart(2, "0")}
          </span>
          <div className="border-border/30 group-hover:border-accent/30 relative h-12 w-12 shrink-0 overflow-hidden rounded-full border transition-all duration-500">
            <Image
              src={member.image}
              fill
              alt={`${member.name}, ${member.role}`}
              className="h-full w-full scale-105 object-cover grayscale transition-all duration-500 group-hover:scale-110 group-hover:grayscale-0"
            />
          </div>
          <div className="min-w-0 flex-1">
            <h3 className="text-foreground group-hover:text-accent text-sm font-semibold transition-colors duration-300">
              {member.name}
            </h3>
            <p className="text-muted-foreground mt-0.5 text-[11px] font-light">
              {member.role}
            </p>
          </div>
          <ArrowUpRight className="text-muted-foreground/30 group-hover:text-accent h-4 w-4 shrink-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </div>
      </motion.div>

      {/* Dialog */}
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="h-[80vh] max-h-150 max-w-md gap-0 overflow-hidden rounded-2xl border-0 p-0 shadow-2xl">
          <DialogTitle className="sr-only">{member.name}</DialogTitle>

          {/* Image fills entire modal */}
          <Image
            fill
            src={member.image}
            alt={`Portrait of ${member.name}, ${member.role} at ${APP_NAME}`}
            className="absolute inset-0 h-full w-full object-cover object-top"
          />

          {/* Accent overlay */}
          <div className="from-background/95 via-background/40 absolute inset-0 bg-linear-to-t to-transparent" />
          <div className="from-background/95 via-background/40 absolute inset-0 bg-linear-to-t to-transparent" />

          {/* Content at bottom over image */}
          <div className="absolute right-0 bottom-0 left-0 p-8">
            <h3 className="text-foreground font-playfair mb-0.5 text-xl font-semibold">
              {member.name}
            </h3>
            <p className="text-foreground/80 mb-4 text-[11px] font-medium tracking-[0.2em] uppercase">
              {member.role}
            </p>

            <p className="text-foreground/75 mb-5 text-sm leading-relaxed font-light">
              {member.bio}
            </p>

            <div className="border-foreground/15 flex items-center gap-2 border-t pt-4">
              {member.linkedin && (
                <a
                  href={member.linkedin}
                  onClick={(e) => e.stopPropagation()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-foreground/20 hover:border-foreground/50 hover:bg-foreground/10 flex h-8 w-8 items-center justify-center rounded-full border transition-all duration-300"
                >
                  <Linkedin className="text-foreground/70 hover:text-foreground h-3.5 w-3.5 transition-colors" />
                </a>
              )}
              {member.twitter && (
                <a
                  href={member.twitter}
                  onClick={(e) => e.stopPropagation()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-foreground/20 hover:border-foreground/50 hover:bg-foreground/10 flex h-8 w-8 items-center justify-center rounded-full border transition-all duration-300"
                >
                  <Twitter className="text-foreground/70 hover:text-foreground h-3.5 w-3.5 transition-colors" />
                </a>
              )}
              {member.email && (
                <a
                  href={`mailto:${member.email}`}
                  onClick={(e) => e.stopPropagation()}
                  className="border-foreground/20 hover:border-foreground/50 hover:bg-foreground/10 flex h-8 w-8 items-center justify-center rounded-full border transition-all duration-300"
                >
                  <Mail className="text-foreground/70 hover:text-foreground h-3.5 w-3.5 transition-colors" />
                </a>
              )}
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default TeamMemberCard;
