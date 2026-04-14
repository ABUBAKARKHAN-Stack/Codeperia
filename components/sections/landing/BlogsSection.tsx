import { ArrowRight } from "lucide-react";
import { StaggerChildren } from "@/components/shared/StaggerChildren";
import BlogCard from "@/components/shared/BlogCard";
import SectionHeader from "@/components/shared/SectionHeader";
import MagneticButton from "@/components/shared/MagneticButton";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { blogPosts } from "@/data/landing.data";
import { ContainerLayout } from "@/components/layout";

const BlogSection = () => {
  return (
    <section className="section-padding bg-background relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="bg-accent/5 absolute bottom-0 left-[20%] h-100 w-100 rounded-full blur-[150px]" />

      <ContainerLayout className="relative z-10">
        <SectionHeader
          eyebrow="Insights & Ideas"
          title={
            <>
              From our <span className="text-accent italic">blog</span>
            </>
          }
          description="Perspectives on technology, strategy, and sustainable growth."
          action={
            <MagneticButton>
              <Button
                asChild
                variant="outline"
                className="border-border text-foreground hover:bg-accent/10 h-10 rounded-full px-6 text-sm font-medium"
              >
                <Link href="/blogs">
                  All Articles <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </MagneticButton>
          }
        />

        <StaggerChildren
          className="grid grid-cols-1 gap-6 md:grid-cols-3"
          staggerDelay={0.1}
        >
          {blogPosts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </StaggerChildren>
      </ContainerLayout>
    </section>
  );
};

export default BlogSection;
