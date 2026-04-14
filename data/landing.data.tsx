import HighlightedBrandName from "@/components/shared/HighlightedBrandName";
import {
  ShieldCheck,
  Layers,
  Code2,
  Smartphone,
  Cloud,
  Container,
  Brain,
  Globe,
  Target,
  Users,
  Search,
  Lightbulb,
  Rocket,
  Zap,
  Monitor,
  Award,
  HeartHandshake,
  Shield,
  Sparkles,
  Clock,
} from "lucide-react";

export const heroContent = {
  eyebrow: "Idea · Code · Deploy · Scale · Monitor",

  headline: ["Building", "Future-Ready", "Systems"],

  subtexts: [
    "We builds modern, high-performance software solutions designed to help businesses scale with confidence. From custom web applications to enterprise software systems, we engineer technology that delivers measurable results.",
    <>
      At <HighlightedBrandName animate once />, we transform ideas into scalable
      systems through a complete development lifecycle from idea validation and
      architecture to deployment, scaling, and continuous monitoring, we build
      resilient, future-ready software designed for sustainable growth and
      operational excellence.
    </>,
  ],

  cta: {
    primary: "Our Services",
    secondary: "Get in Touch",
  },

  mission: {
    title: "Our Mission",
    quote:
      "Transforming ideas into scalable systems that drive growth and measurable impact.",
  },

  accentCards: [
    {
      label: "Quality First",
      sub: "Engineered with Precision",
      icon: ShieldCheck,
    },
    {
      label: "Scalable by Design",
      sub: "Built for Long-Term Growth",
      icon: Layers,
    },
  ],
};

export const featuresContent = [
  {
    icon: Code2,
    title: "Full Stack Apps",
    description:
      "End-to-end web applications built with modern frameworks and scalable architecture.",
    num: "01",
  },
  {
    icon: Smartphone,
    title: "Mobile First",
    description:
      "Cross-platform mobile apps with native performance and beautiful user experiences.",
    num: "02",
  },
  {
    icon: Cloud,
    title: "Cloud Native",
    description:
      "Scalable cloud infrastructure on AWS, Azure, designed for growth.",
    num: "03",
  },
  {
    icon: Container,
    title: "DevOps Pipeline",
    description:
      "Automated CI/CD, containerization, and infrastructure as code for rapid delivery.",
    num: "04",
  },
  {
    icon: Brain,
    title: "AI Integration",
    description:
      "Smart automation, predictive analytics, and LLM-powered features for your products.",
    num: "05",
  },
  {
    icon: Globe,
    title: "Global Scale",
    description:
      "Distributed systems and edge computing to serve users worldwide with low latency.",
    num: "06",
  },
];

export const partners = [
  "TechVault",
  "Horizon Inc",
  "NovaBridge",
  "EcoSphere",
  "PeakPoint",
];

export const aboutPreviewData = {
  para1: (
    <>
      Founded with a vision to build meaningful digital experiences,{" "}
      <HighlightedBrandName animate={false} /> combines strategic thinking with
      modern technology. We help startups and growing businesses scale through
      smart, reliable, and performance-driven solutions.
    </>
  ),
  para2: `Our multidisciplinary team blends strategy, design,
              and development to create systems that are scalable, efficient, and built
              for long-term growth. We focus on delivering real-world impact, not just
              ideas.`,
  highlights: [
    { icon: Target, label: "Purpose-Driven" },
    { icon: Users, label: "Dedicated Team" },
    { icon: Globe, label: "Global Impact" },
  ],
};

export const blogPosts = [
  {
    title: "The Future of AI in Enterprise Software",
    excerpt:
      "How artificial intelligence is reshaping the way businesses build, deploy, and maintain software at scale.",
    category: "AI & Innovation",
    date: "Feb 10, 2026",
    readTime: "5 min read",
    slug: "future-of-ai-enterprise",
    image: "/assets/blog-ai.jpg",
  },
  {
    title: "Why Sustainable Tech Matters More Than Ever",
    excerpt:
      "Exploring the intersection of environmental responsibility and cutting-edge technology solutions.",
    category: "Sustainability",
    date: "Jan 28, 2026",
    readTime: "4 min read",
    slug: "sustainable-tech-matters",
    image: "/assets/blog-sustainability.jpg",
  },
  {
    title: "Scaling Startups: From MVP to Market Leader",
    excerpt:
      "A proven framework for transforming minimum viable products into industry-defining platforms.",
    category: "Strategy",
    date: "Jan 15, 2026",
    readTime: "6 min read",
    slug: "scaling-startups-mvp",
    image: "/assets/blog-scaling.jpg",
  },
];

export const approachSteps = [
  {
    num: "01",
    icon: Search,
    title: "Idea",
    description:
      "We explore your vision, business goals, and user needs to define a clear, actionable solution.",
  },
  {
    num: "02",
    icon: Lightbulb,
    title: "Code",
    description:
      "Our engineers implement scalable, maintainable systems with modern frameworks and best practices.",
  },
  {
    num: "03",
    icon: Rocket,
    title: "Deploy",
    description:
      "We deliver software with automated pipelines, CI/CD, and thorough testing for smooth launches.",
  },
  {
    num: "04",
    icon: Zap,
    title: "Scale",
    description:
      "We optimize performance, add features, and ensure your system grows seamlessly with demand.",
  },
  {
    num: "05",
    icon: Monitor,
    title: "Monitor",
    description:
      "Continuous monitoring and analytics help us maintain reliability, performance, and measurable outcomes.",
  },
];

export const whyChooseUsReasons = [
  {
    icon: Award,
    title: "Proven Expertise",
    description:
      "Our engineers and strategists bring deep experience building scalable, high-performance systems across industries.",
  },
  {
    icon: Target,
    title: "Results-Oriented",
    description:
      "Every project is designed to deliver measurable impact, growth, and operational efficiency.",
  },
  {
    icon: HeartHandshake,
    title: "Collaborative Approach",
    description:
      "We partner closely with your team throughout the lifecycle from idea to monitoring to ensure success.",
  },
  {
    icon: Clock,
    title: "Agile & Iterative",
    description:
      "Fast, adaptive delivery with continuous feedback so value is realized from the very first sprint.",
  },
  {
    icon: Shield,
    title: "Transparent & Reliable",
    description:
      "Clear communication, full visibility, and robust systems you can trust.",
  },
  {
    icon: Sparkles,
    title: "Innovation-Focused",
    description:
      "We leverage modern tools, emerging technologies, and scalable architectures to keep your systems future-ready.",
  },
];

export const faqs = [
  {
    q: "What industries do you serve?",
    a: "We work across technology, finance, healthcare, energy, and consumer goods. Every solution is tailored to your market and designed to scale.",
  },
  {
    q: "How long does a typical project take?",
    a: "Projects usually range from 4 to 16 weeks depending on scope. We start with discovery and provide a clear timeline upfront.",
  },
  {
    q: "Do you work with startups or enterprises?",
    a: "Both. We help startups launch scalable solutions and guide enterprises through digital transformation. Our approach adapts to any stage.",
  },
  {
    q: "How do you ensure long-term impact?",
    a: "We define KPIs from day one and track performance throughout the project. Regular check-ins and dashboards keep results measurable and transparent.",
  },
  {
    q: "Can we start with a small pilot?",
    a: "Absolutely. Many clients begin with a focused pilot to experience our methodology before expanding into larger initiatives.",
  },
  {
    q: "What sets your solutions apart?",
    a: "We build scalable, high-performance systems with a full lifecycle approach. Every solution is designed for reliability, growth, and measurable results.",
  },
];

export const testimonials = [
  {
    quote:
      "T-Solutions brought a fresh perspective to our sustainability roadmap. Their energy and dedication were exactly what our team needed.",
    name: "Sarah Mitchell",
    role: "Founder, EcoSphere",
  },
  {
    quote:
      "Working with a young, hungry team made all the difference. They treated our project like their own and delivered beyond expectations.",
    name: "James Chen",
    role: "CTO, TechVault",
  },
  {
    quote:
      "Their strategic framework helped us find clarity during a pivotal growth phase. Highly recommend for any startup or scaling business.",
    name: "Elena Rodriguez",
    role: "Director, NovaBridge",
  },
  {
    quote:
      "What they lack in decades, they make up for in insight and hustle. T-Solutions is the real deal.",
    name: "Marcus Liu",
    role: "Co-founder, PeakPoint",
  },
  {
    quote:
      "They challenged our assumptions in the best way possible. A truly collaborative experience from start to finish.",
    name: "Aisha Patel",
    role: "CEO, Horizon Inc",
  },
];
