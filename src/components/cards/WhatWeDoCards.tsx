import React from "react";
import { FeatureCard } from "./card";
import { useServices } from "@/context/services.context";
import { iconsMap } from "@/lib/serviceIconsMap";

const WhatWeDoCards = () => {
  const { services } = useServices();

  return (
    <>
      {services.map(({ cardIcon, shortDescription, slug, title }, i) => {
        const icon = iconsMap[cardIcon as keyof typeof iconsMap];
        return (
          <FeatureCard
            key={i}
            icon={icon}
            showOverlay={true}
            description={shortDescription}
            title={title}
            id={i}
            link={`/services/${slug}`}
            index={i}
          />
        );
      })}
    </>
  );
};

export default WhatWeDoCards;
