import { urlFor } from "@/sanity/lib/image";
import { ISanityImage } from "@/types/main.types";
import Image from "next/image";
import React, { FC } from "react";

type Props = {
  serviceImage: ISanityImage;
  title: string;
};

const ServiceImage: FC<Props> = ({ serviceImage, title }) => {
  return (
    <div className="relative aspect-[21/9] w-full">
      <Image
        src={urlFor(serviceImage.source)
          .auto("format")
          .fit("max")
          .quality(100)
          .url()}
        alt={serviceImage.alt || title}
        fill
        className="object-cover"
        priority
      />
    </div>
  );
};

export default ServiceImage;
