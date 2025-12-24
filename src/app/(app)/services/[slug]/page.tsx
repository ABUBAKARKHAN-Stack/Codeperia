import { notFound } from "next/navigation";
import { PageHeader } from "@/components/reusable";
import { ContainerLayout } from "@/components/layout";
import { Metadata, ResolvingMetadata } from "next";
import { baseUrl, brandName } from "@/constants/constants";
import { getService, getServices } from "@/helpers/services.helper";
import { ServiceImage } from "@/components/section/services";
import { PortableText } from "next-sanity";
import { portableTextComponents } from "@/components/portableText/portableTextComponents";
import { SanityLive } from "@/sanity/lib/live";
import { urlFor } from "@/sanity/lib/image";
import { InteractiveHoverButton } from "@/components/magicui/interactive-hover-button";
import Link from "next/link";

type Params = {
  params: Promise<{ slug: string }>;
};

// export const dynamicParams = false;
export const revalidate = 10;

export async function generateStaticParams() {
  const services = await getServices();
  return services.map(({ slug }) => ({ slug }));
}

export async function generateMetadata(
  { params }: Params,
  _parent: ResolvingMetadata,
): Promise<Metadata> {
  const { slug } = await params;
  const service = await getService(slug);

  if (!service) {
    return {
      title: "Service Not Found",
      description: "The requested service does not exist.",
      robots: { index: false },
    };
  }

  const title = service.title;
  const description =
    service.shortDescription || `Read ${service.title} on ${brandName}`;
  const imageUrl = urlFor(service.serviceImage.source)
    .quality(85)
    .width(1200)
    .fit("clip")
    .format("jpg")
    .url();
  const imageAlt = service.serviceImage.alt;
  const servicesBaseUrl = `/services/${slug}`;

  return {
    title,
    description,
    keywords: service.title.split(" "),
    publisher: brandName,
    openGraph: {
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
      type: "article",
      siteName: brandName,
      url: servicesBaseUrl,
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
      site: baseUrl,
      creator: brandName,
    },
    alternates: {
      canonical: servicesBaseUrl,
    },
  };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = await getService(slug);

  if (!service) return notFound();

  return (
    <div className="flex flex-col overflow-hidden">
      <SanityLive />

      <PageHeader
        pageHeading={service.title}
        subText={service.shortDescription}
      ></PageHeader>

      <section className="mt-10 w-full">
        <ContainerLayout>
          <ServiceImage
            serviceImage={service.serviceImage}
            title={service.title}
          />
          <div>
            <PortableText
              value={service.body}
              components={portableTextComponents}
            />
          </div>
          <div className="mt-8 flex justify-end">
            <Link href="/services#service-contact-section">
              <InteractiveHoverButton className="text-primary float-end w-fit transform overflow-hidden rounded-2xl border-none bg-gradient-to-r from-purple-50 via-purple-100 to-purple-50 py-3 font-semibold transition-all duration-300 focus:ring-4 focus:ring-purple-500/40 focus:outline-none active:scale-95">
                Get Started
              </InteractiveHoverButton>
            </Link>
          </div>
        </ContainerLayout>
      </section>
    </div>
  );
}
