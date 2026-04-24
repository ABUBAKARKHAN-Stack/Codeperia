import {
  OtherProjectsSection,
  ProjectCTA,
  ProjectDetailsPageHero,
  ProjectDetailsSection,
} from "@/components/sections/portfolio-details";
import { APP_NAME, BASE_URL } from "@/constants/app.constants";
import {
  getPortfolioOverview,
  getProjectDetails,
} from "@/helpers/portfolio.helper";
import { urlFor } from "@/sanity/lib/image";
import { Metadata, ResolvingMetadata } from "next";
import { notFound } from "next/navigation";

type Params = {
  params: Promise<{ slug: string }>;
};

//* Static Site Generation for project details page
export async function generateStaticParams() {
  const projects = await getPortfolioOverview();
  return projects.map((p) => ({ slug: p.slug }));
}

//* Dynamic Metadata Per Page
export async function generateMetadata(
  { params }: Params,
  _parent: ResolvingMetadata,
): Promise<Metadata> {
  const { slug } = await params;
  const project = await getProjectDetails(slug);

  if (!project) {
    return {
      title: "Project Not Found",
      description: "The requested project does not exist.",
      robots: { index: false },
    };
  }

  const title = `${project.title} | ${APP_NAME}`;
  const description = project.description || `Read ${title} on ${APP_NAME}`;
  const imageUrl = urlFor(project.displayImage.source)
    .quality(85)
    .width(1200)
    .fit("clip")
    .format("jpg")
    .url();
  const imageAlt = project.image.alt;
  const portfolioBaseUrl = `/portfolio/${slug}`;

  return {
    title: {
      absolute: title,
    },
    description,
    keywords: [`${project.title} by ${APP_NAME}`, ...project.tags],
    openGraph: {
      title,
      description,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: `${project.title} project created by ${APP_NAME}`,
        },
      ],
      type: "article",
      siteName: APP_NAME,
      url: portfolioBaseUrl,
    },
    twitter: {
      title,
      description,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: imageAlt || title,
        },
      ],
      card: "summary_large_image",
      site: BASE_URL,
      creator: APP_NAME,
    },
    alternates: {
      canonical: portfolioBaseUrl,
    },
  };
}

const PortfolioDetailsPage = async ({ params }: Params) => {
  const { slug } = await params;
  const project = await getProjectDetails(slug);

  if (!project) return notFound();

  return (
    <>
      {/* Project Page Hero  */}
      <ProjectDetailsPageHero
        category={project.category}
        description={project.description}
        image={{
          ...project.image,
          alt: `${project.title} – Screenshot of the project created by ${APP_NAME}`,
        }}
        title={project.title}
        year={project.year}
      />

      {/* Project Details  */}

      <ProjectDetailsSection
        image={{
          ...project.displayImage,
          alt: `${project.title} – Responsive web application interface displayed across multiple devices`,
        }}
        longDescription={project.longDescription}
        results={project.results}
        tags={project.tags}
        testimonial={project.testimonial}
      />

      {/* Other Projects  */}
      <OtherProjectsSection />

      {/* Project CTA  */}
      <ProjectCTA />
    </>
  );
};

export default PortfolioDetailsPage;
