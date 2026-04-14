import {
  ApproachSection,
  DifferentiatorsSection,
  OtherServicesSection,
  ServiceCTASection,
  ServiceFAQsSection,
  ServiceNotFoundSection,
  ServiceOverviewAndDeliverablesSection,
  ServicePageHero,
  TechnologiesSection,
} from "@/components/sections/services-details";
import JsonLd from "@/components/shared/JsonLd";
import { APP_NAME, BASE_URL } from "@/constants/app.constants";
import {
  getServiceDetails,
  getServicesOverview,
} from "@/helpers/service.helper";
import { urlFor } from "@/sanity/lib/image";
import { Metadata, ResolvingMetadata } from "next";

type Params = {
  params: Promise<{ slug: string }>;
};

//* Static Site Generation for service details page
export async function generateStaticParams() {
  const services = await getServicesOverview();
  return services.map((s) => ({ slug: s.slug }));
}

//* Dynamic Metadata Per Page
export async function generateMetadata(
  { params }: Params,
  _parent: ResolvingMetadata,
): Promise<Metadata> {
  const { slug } = await params;
  const service = await getServiceDetails(slug);

  if (!service) {
    return {
      title: "Service Not Found",
      description: "The requested service does not exist.",
      robots: { index: false },
    };
  }

  const title = `${service.title} | ${APP_NAME}`;
  const description = service.description || `Read ${title} on ${APP_NAME}`;
  const imageUrl = urlFor(service.image.source)
    .quality(85)
    .width(1200)
    .fit("clip")
    .format("jpg")
    .url();
  const imageAlt = service.image.alt;
  const servicesBaseUrl = `/services/${slug}`;

  return {
    title: {
      absolute: title,
    },
    description,
    keywords: service.tags,
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
      siteName: APP_NAME,
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
      site: BASE_URL,
      creator: APP_NAME,
    },
    alternates: {
      canonical: servicesBaseUrl,
    },
  };
}

const ServiceDetail = async ({ params }: Params) => {
  const { slug } = await params;
  const service = await getServiceDetails(slug);

  if (!service) {
    return <ServiceNotFoundSection />;
  }

  return (
    <>
      {/* JSON LD Service  Schema */}

      <JsonLd
        schema={{
          "@context": "https://schema.org",
          "@type": "Service",
          "serviceType": service.title,
          "description": service.description,
          "provider": {
            "@type": "Organization",
            "name": "T-Solutionz",
            "url": "https://t-solutionz.com"
          },
          "areaServed": "Worldwide"
        }}
      />

      {/* Service Page Hero  */}
      <ServicePageHero
        icon={service.icon}
        image={service.image}
        isFeatured={service.featured}
        serviceDescription={service.description}
        serviceTitle={service.title}
      />

      {/* Overview + Deliverables Section */}
      <ServiceOverviewAndDeliverablesSection
        deliverables={service.deliverables}
        tags={service.tags}
        serviceLongDescription={service.longDescription}
      />

      {/* Technologies Section */}
      <TechnologiesSection technologies={service.technologies} />

      {/* Our Approach Section */}
      <ApproachSection approach={service.approach} />

      {/* Why We Stand Out Section */}
      <DifferentiatorsSection differentiators={service.differentiators} />

      {/* FAQs Section */}
      <ServiceFAQsSection faqs={service.faqs} />

      {/* Other Services Section */}
      <OtherServicesSection />

      {/* Cta Section  */}
      <ServiceCTASection serviceTitle={service.title} />
    </>
  );
};

export default ServiceDetail;
