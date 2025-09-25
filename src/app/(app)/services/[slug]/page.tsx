import { notFound } from "next/navigation";
import { PageHeader } from "@/components/reusable";
import { ContainerLayout } from "@/components/layout";
import ContactCardServices from "@/components/section/services/ContactCardServices";
import { Metadata } from "next";
import { baseUrl, brandName } from "@/constants/constants";
import { getService, getServices } from "@/helpers/services.helper";

export async function generateStaticParams() {
  const services = await getServices()
  return services.map(({ slug }) => ({ slug }))
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

  return {
    title: service.title,
    description: service.shortDescription,
    alternates: {
      canonical: `${baseUrl}/services/${slug}`,
    },
  };
}


export default async function ServiceDetailPage({ params }: {
  params: Promise<{ slug: string }>;
}) {
  
  const { slug } = await params;
  const service = await getService(slug)

  if (!service) return notFound();


  return (
    <div className="flex flex-col overflow-hidden">
      <PageHeader
        pageHeading={service.title}
        subText={service.shortDescription}
      />

      <section className="">
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
          Hello Service
        </ContainerLayout>
      </section>
    </div>
  );
}
