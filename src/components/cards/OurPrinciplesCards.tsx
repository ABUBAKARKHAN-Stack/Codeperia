import { values } from "@/data/about.data";
import React from "react";

const OurPrinciplesCards = () => {
  return (
    <>
      {values.map((value, idx) => (
        <div
          key={idx}
          className="group rounded-xl bg-white/5 p-6 text-center shadow-md backdrop-blur-sm transition duration-300 hover:shadow-purple-500/20"
        >
          <div className="mb-4 flex justify-center">{value.icon}</div>
          <h3 className="text-lg font-semibold text-purple-200 transition group-hover:text-white">
            {value.title}
          </h3>
          <p className="mt-2 text-sm leading-relaxed">{value.description}</p>
        </div>
      ))}
    </>
  );
};

export default OurPrinciplesCards;
