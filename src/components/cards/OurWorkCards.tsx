import React from "react";
import { ProjectCard } from "./card";
import { projects } from "@/data/portfolio.data";

const OurWorkCards = ({ showAll = false }) => {
  const cardslength = showAll ? projects.length : 4
  return (
    <>
      {projects.slice(0, cardslength).map(({
        id,
        liveLink,
        projectImage,
        title
      }, i) => {
        console.log(projectImage);

        return (

          <ProjectCard
            key={id}
            id={id}
            title={title}
            projectImage={projectImage}
            liveLink={liveLink}
            index={i}
          />
        )
      })}

    </>
  );
};

export default OurWorkCards;
