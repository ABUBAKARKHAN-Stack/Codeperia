import HighlightedBrandName from "@/components/shared/HighlightedBrandName";
import { Award, Eye, Heart, Target } from "lucide-react";

export const milestones = [
  {
    year: "2026",
    title: "Foundation",
    description:
      "T-Solutionz was founded with a clear vision to transform ideas into scalable, high-performance systems.",
  },
  {
    year: "2026",
    title: "First Major Deployment",
    description:
      "Successfully delivered our first large-scale production system built for reliability, performance, and growth.",
  },
  {
    year: "2026",
    title: "Cloud & DevOps Expansion",
    description:
      "Strengthened our cloud-native and CI/CD capabilities to support seamless deployment and scaling.",
  },
  {
    year: "2026",
    title: "Intelligent Systems Integration",
    description:
      "Integrated AI-powered features and automation into client platforms to enhance performance and decision-making.",
  },
];

export const ourMission = {
  para1:
    "We believe technology should do more than function. It should create clarity, unlock momentum, and support long-term progress. Every system we design is built with intention, precision, and scalability at its core.",
  para2: (
    <>
      From architecture to optimization, we focus on building resilient digital
      foundations that adapt to change and perform under pressure. At{" "}
      <HighlightedBrandName />, growth is not accidental. It is designed.
    </>
  ),
};

export const values = [
  {
    icon: Target,
    title: "Purposeful Execution",
    description:
      "Every solution is designed with clear objectives, measurable outcomes, and long-term scalability in mind.",
  },
  {
    icon: Eye,
    title: "Radical Transparency",
    description:
      "We communicate openly about progress, trade-offs, and performance so every decision is informed.",
  },
  {
    icon: Heart,
    title: "Ownership Mentality",
    description:
      "We treat every system we build as if it were our own, prioritizing reliability, performance, and sustainability.",
  },
  {
    icon: Award,
    title: "Engineering Excellence",
    description:
      "We pursue precision, clean architecture, and high-performance standards in everything we deliver.",
  },
];
