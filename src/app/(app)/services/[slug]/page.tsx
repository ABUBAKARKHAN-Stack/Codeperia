import { notFound } from "next/navigation";
import { PageHeader } from "@/components/reusable";
import { ContainerLayout } from "@/components/layout";
import ContactCardServices from "@/components/section/services/ContactCardServices";
import { Metadata } from "next";
import { baseUrl, brandName } from "@/constants/constants";
import { getService, getServices } from "@/helpers/services.helper";
import { ServiceImage } from "@/components/section/services";
import { PortableText } from "next-sanity";
import { portableTextComponents } from "@/components/portableText/portableTextComponents";
import { SanityLive } from "@/sanity/lib/live";
import { urlFor } from "@/sanity/lib/image";

export async function generateStaticParams() {
  const services = await getServices();
  return services.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = await getService(slug);

  if (!service) {
    return {
      title: "Service Not Found | " + brandName,
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
    .height(630)
    .format("jpg")
    .url();
  const imageAlt = service.serviceImage.alt;

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
      canonical: `${baseUrl}/services/${slug}`,
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
          {/* <div className="flex flex-col py-20 xl:flex-row xl:justify-between xl:gap-20">
            <div className="text-[14px] lg:max-w-[700px] lg:text-[18px] xl:max-w-[600px] xl:text-[20px]">
              {service.fullContent.map((para, i) => (
                <p key={i} className="mb-4 text-gray-300">
                  {para}
                </p>
              ))}

              {service.features.map((section, i) => (
                <div key={i} className="mb-6">
                  <h3 className="text-lg font-semibold text-white">
                    {section.title}
                  </h3>
                  <ul className="list-disc pl-6 text-gray-400">
                    {section.items.map((item, j) => (
                      <li key={j}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <ContactCardServices />
          </div> */}
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
        </ContainerLayout>
      </section>
    </div>
  );
}
