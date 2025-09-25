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
    <div className="relative aspect-[16/9] w-full sm:aspect-[21/9]">
      <Image
        src={urlFor(serviceImage.source)
          .width(1920)
          .quality(85)
          .format("webp")
          .url()}
        alt={serviceImage.alt || title}
        fill
        sizes="
                                (max-width: 640px) 100vw,   
                                (max-width: 1024px) 90vw,  
                                1200px  
                              "
        className="object-cover"
        priority
      />
    </div>
  );
};

export default ServiceImage;
