import React from "react";
import Project from "@/components/Project";
import { PROJECTS } from "@/models/constants";

const Projects = () => {
  return (
    <div className="flex flex-row justify-center flex-wrap my-14">
      {PROJECTS.map((project) => (
        <React.Fragment key={project.description}>
          <Project project={project} />
        </React.Fragment>
      ))}
    </div>
  );
};

export default Projects;
