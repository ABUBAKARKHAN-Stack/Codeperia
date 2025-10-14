import { ContainerLayout } from "@/components/layout";
import { PageHeader } from "@/components/reusable";
import React from "react";
import { SanityLive } from "@/sanity/lib/live";
import { BlogPostsSection } from "@/components/section/blog";
import { Metadata } from "next";
import { baseUrl, brandName } from "@/constants/constants";
import { BookOpen } from "lucide-react";
import ScrollToSectionBtn from "@/components/ui/scroll-to-section-btn";

export const metadata: Metadata = {
  title: "Blog",
  description: `Read expert insights, tutorials, and updates on software development, web technologies, and IT trends from ${brandName}`,
  openGraph: {
    url: '/blog',
    images: { url: "opengraph-image" }
  },
  alternates: {
    canonical: '/blog',
  },
};

const Blog = async () => {
  return (
    <div className="relative h-full min-h-screen w-full overflow-hidden">
      <SanityLive />
      <PageHeader
        pageHeading="Insights & Stories"
        subText="Our blog shares knowledge and ideas that inspire growth in the empire of technology."
      >
        <ScrollToSectionBtn sectionId="blog-posts-section">
          Read Our Insights <BookOpen className="size-5" />
        </ScrollToSectionBtn>
      </PageHeader>
      <ContainerLayout>
        <BlogPostsSection />
      </ContainerLayout>
    </div>
  );
};

export default Blog;
