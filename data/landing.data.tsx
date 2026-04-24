import HighlightedBrandName from "@/components/shared/HighlightedBrandName";
import {
  ShieldCheck,
  Layers,
  Code2,
  Smartphone,
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
  ShoppingCart,
  Palette,
} from "lucide-react";

export const heroContent = {
  eyebrow: "Engineering · Strategy · Systems · Scale",

  headline: ["Building", "Resilient", "Digital Systems"],

  subtexts: [
    "We engineer modern, high-performance software solutions designed to support your business growth. From custom enterprise systems to scalable web applications, we deliver technology that drives measurable results.",
    <>
      At <HighlightedBrandName animate once />, we transform complex ideas into 
      high-performance digital experiences. Through a strategic development 
      lifecycle-from architecture validation to seamless scaling-we build 
      resilient software designed for sustainable excellence and long-term impact.
    </>,
  ],

  cta: {
    primary: "Explore Our Services",
    secondary: "Start Your Project",
  },

  mission: {
    title: "Our Mission",
    quote:
      "Empowering modern businesses through scalable technology and innovative digital transformation.",
  },

  accentCards: [
    {
      label: "Engineering Excellence",
      sub: "Built for Performance",
      icon: ShieldCheck,
    },
    {
      label: "Strategic Growth",
      sub: "Designed to Scale",
      icon: Layers,
    },
  ],
};

export const featuresContent = [
  {
    icon: Code2,
    title: "Full-Stack Application Development",
    description:
      "We deliver scalable, end-to-end web and mobile applications emphasizing high-performance architecture, reliability, and long-term maintenance.",
    num: "01",
  },
  {
    icon: Smartphone,
    title: "Mobile Application Development",
    description:
      "Engineered for speed and usability, our cross-platform mobile apps provide seamless user experiences with modern design.",
    num: "02",
  },
  {
    icon: ShoppingCart,
    title: "E-Commerce Solutions",
    description:
      "Drive business growth with secure, scalable e-commerce platforms focused on customer experience and high conversions.",
    num: "03",
  },
  {
    icon: Brain,
    title: "AI Systems and Intelligent Automation",
    description:
      "Optimize efficiency and smart decision-making with innovative, future-ready AI systems and intelligent automation.",
    num: "04",
  },
  {
    icon: Globe,
    title: "SEO & Digital Visibility",
    description:
      "Maximize business exposure with traffic growth strategies and measurable SEO results that dominate the digital landscape.",
    num: "05",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description:
      "User-centered design focused on clarity and engagement, delivering modern aesthetics with intuitive digital experiences.",
    num: "06",
  },
  {
    icon: Users,
    title: "Social Media Management",
    description:
      "Drive brand visibility and measurable growth with data-driven social media strategies focused on community engagement and high-ROI content.",
    num: "07",
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
      Codeperia is a forward-thinking digital solutions provider dedicated to
      building modern, scalable software. We combine strategic thinking with
      advanced technology to help businesses achieve sustainable growth through
      reliable and innovative solutions.
    </>
  ),
  para2: `Our multidisciplinary team leverages deep expertise in engineering 
              and strategy to create systems that are high-performance, secure, 
              and built for the future. We focus on delivering value-driven outcomes 
              that empower your long-term success.`,
  highlights: [
    { icon: Target, label: "Strategy-Driven" },
    { icon: Users, label: "Expert Engineering" },
    { icon: Globe, label: "Global Reach" },
  ],
};

export const blogPosts = [
  {
    title: "The Future of AI in Enterprise Software",
    excerpt:
      "Discover how intelligent automation is reshaping modern business architecture and driving operational efficiency at scale.",
    category: "AI & Innovation",
    date: "Feb 10, 2026",
    readTime: "5 min read",
    slug: "future-of-ai-enterprise",
    image: "/assets/blog-ai.jpg",
  },
  {
    title: "Scaling Modern Tech: From Architecture to ROI",
    excerpt:
      "A strategic framework for building scalable digital solutions that support long-term business growth and sustainable impact.",
    category: "Strategy",
    date: "Jan 15, 2026",
    readTime: "6 min read",
    slug: "scaling-startups-mvp",
    image: "/assets/blog-scaling.jpg",
  },
  {
    title: "Sustainable Digital Transformation",
    excerpt:
      "Why long-term scalability and engineering excellence are critical for modern businesses in an evolving digital landscape.",
    category: "Business",
    date: "Jan 28, 2026",
    readTime: "4 min read",
    slug: "sustainable-tech-matters",
    image: "/assets/blog-sustainability.jpg",
  },
];

export const approachSteps = [
  {
    num: "01",
    icon: Search,
    title: "Strategic Intelligence",
    description:
      "We analyze target objectives and market dynamics to architect a high-level roadmap designed for technical authority and measurable impact.",
  },
  {
    num: "02",
    icon: Lightbulb,
    title: "Scalable Engineering",
    description:
      "Our engineers design resilient, cloud-native architectures using modern frameworks that prioritize performance, security, and long-term scalability.",
  },
  {
    num: "03",
    icon: Rocket,
    title: "Precision Deployment",
    description:
      "We implement high-performance code with automated CI/CD pipelines to ensure a seamless, high-velocity transition from development to production.",
  },
  {
    num: "04",
    icon: Zap,
    title: "Performance Refinement",
    description:
      "Continuous system optimization and data-driven tuning ensure your digital foundation adapts and excels under evolving business demands.",
  },
  {
    num: "05",
    icon: Monitor,
    title: "Strategic Scaling",
    description:
      "We provide proactive monitoring and architectural support to ensure your technology supports sustainable growth and long-term success.",
  },
];

export const whyChooseUsReasons = [
  {
    icon: Award,
    title: "Engineering Excellence",
    description:
      "We prioritize clean architecture, high-performance standards, and scalable solutions in everything we build.",
  },
  {
    icon: Target,
    title: "Strategy-Driven",
    description:
      "Every project is aligned with your business objectives to deliver measurable impact and sustainable growth.",
  },
  {
    icon: HeartHandshake,
    title: "Premium Partnerships",
    description:
      "We collaborate closely with your team to ensure every digital experience reflects your brand vision and values.",
  },
  {
    icon: Clock,
    title: "Agile Adaptability",
    description:
      "Our iterative approach ensures rapid delivery and flexibility, allowing your systems to adapt to changing markets.",
  },
  {
    icon: Shield,
    title: "Reliable & Secure",
    description:
      "We build robust systems using secure practices, providing you with full transparency and peace of mind.",
  },
  {
    icon: Sparkles,
    title: "Innovation-Focused",
    description:
      "We leverage emerging technologies and smart automation to keep your business ahead in a competitive landscape.",
  },
];

export const faqs = [
  {
    q: "How do you ensure the scalability of your solutions?",
    a: "We architect every system with long-term growth in mind, utilizing cloud-native infrastructures and modular designs that adapt to increasing demands.",
  },
  {
    q: "What is your typical project timeline?",
    a: "Timelines range from 4 to 16 weeks depending on complexity. We focus on clear milestones and high-performance delivery at every stage.",
  },
  {
    q: "Do you specialize in startups or enterprises?",
    a: "We serve both. We help startups build scalable foundations and guide enterprises through successful digital transformation and automation.",
  },
  {
    q: "How do you measure project success?",
    a: "We define clear KPIs from the start, focusing on performance metrics, user engagement, and measurable business growth.",
  },
  {
    q: "Can we collaborate on specific project modules?",
    a: "Absolutely. We offer flexible engagement models, including dedicated team support for specific digital initiatives and full-scale systems development.",
  },
  {
    q: "What sets Codeperia apart?",
    a: "Our commitment to engineering excellence and strategic innovation. We don't just build software; we build high-performance systems for business success.",
  },
];

export const testimonials = [
  {
    quote:
      "Codeperia brought a strategic perspective to our digital roadmap. Their commitment to engineering excellence was exactly what our team needed.",
    name: "Sarah Mitchell",
    role: "Founder, EcoSphere",
  },
  {
    quote:
      "The team at Codeperia treated our project with absolute ownership. They delivered a high-performance system that significantly exceeded our expectations.",
    name: "James Chen",
    role: "CTO, TechVault",
  },
  {
    quote:
      "Their strategic framework helped us find clarity during a critical growth phase. Highly recommended for any business looking for scalable solutions.",
    name: "Elena Rodriguez",
    role: "Director, NovaBridge",
  },
  {
    quote:
      "Codeperia combines deep technical insight with incredible hustle. They are professional, reliable, and truly focused on delivering measurable impact.",
    name: "Marcus Liu",
    role: "Co-founder, PeakPoint",
  },
  {
    quote:
      "They challenged our assumptions and improved our vision. A premium collaborative experience from initial architecture to final deployment.",
    name: "Aisha Patel",
    role: "CEO, Horizon Inc",
  },
];
