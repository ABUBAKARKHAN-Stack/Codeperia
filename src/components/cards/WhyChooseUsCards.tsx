import { whyChooseData } from "@/data/whychoose.data";
import React from "react";
import { WhyChooseUsCard } from "./card";

const WhyChooseUsCards = () => {
  return (
    <>
      {whyChooseData.map(({ description, icon, id, title }, i) => (
        <div key={id} className="flex">
          <WhyChooseUsCard
            icon={icon}
            description={description}
            title={title}
            id={id}
            showOverlay={false}
            index={i}
          />
          <div className="via-brand mx-4 hidden w-0.5 self-stretch bg-gradient-to-b from-transparent to-transparent md:block" />
        </div>
      ))}
    </>
  );
};

export default WhyChooseUsCards;
