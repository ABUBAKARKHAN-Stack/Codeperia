import { brandName } from "@/constants/constants";
import React from "react";

const HighlightedBrandName = () => {
  return (
    <>
      {" "}
      <span className="relative inline-block px-1 font-semibold">
        {brandName}
        <span className="bg-primary absolute inset-0 -z-10 inline-block" />
      </span>
    </>
  );
};

export default HighlightedBrandName;
