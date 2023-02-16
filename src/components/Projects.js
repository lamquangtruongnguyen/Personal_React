import React from "react";

import { projects } from "../utils/constant";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <main
      id="projects"
      className="w-full flex flex-col lg:justify-between items-center xl:px-52 lg-px-24 xl:py-4 my-8 relative"
    >
      {/* Section title */}
      <div className="self-start border-b-2 pl-12">
        <h2 className="font-bold text-[32px] opacity-50">My projects</h2>
      </div>
      {/* Render project cards */}
      <div className="w-full flex flex-wrap justify-center items-center md:my-8 md:gap-x-12 md:gap-y-8 px-8 md:px-0">
        {projects.map(item => (
          <ProjectCard key={item.id} {...item} />
        ))}
      </div>
    </main>
  );
};

export default Projects;
