import PageHero from "@/components/shared/PageHero";
import { APP_NAME } from "@/constants/app.constants";
import { getIconByName } from "@/lib/icon-mapper";
import { IImage } from "@/types/shared.types";
import { Star } from "lucide-react";

type Props = {
  serviceTitle: string;
  serviceDescription: string;
  image: IImage;
  icon: string;
  isFeatured: boolean;
};

const ServicePageHero = ({
  image,
  serviceDescription,
  serviceTitle,
  icon,
  isFeatured,
}: Props) => {
  const Icon = getIconByName(icon);
  return (
    <PageHero
      eyebrow={`${APP_NAME} Service`}
      title={serviceTitle}
      description={serviceDescription}
      backgroundImage={image}
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Services", href: "/services" },
        { label: serviceTitle },
      ]}
    >
      <div className="mb-6 flex items-center gap-4">
        <div className="bg-accent/10 border-accent/20 flex h-12 w-12 items-center justify-center rounded-xl border">
          <Icon className="text-accent h-5 w-5" />
        </div>
        {isFeatured && (
          <span className="text-accent bg-accent/10 border-accent/20 inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-[10px] font-semibold tracking-wider uppercase">
            <Star className="fill-accent h-3 w-3" /> Featured Service
          </span>
        )}
      </div>
    </PageHero>
  );
};

export default ServicePageHero;
