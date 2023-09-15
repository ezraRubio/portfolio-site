import React from "react";
import Project from "@/components/Project";
import { PROJECTS } from "@/models/constants";

const Projects = () => {
  return (
    <div className="ml-8">
      <div className="flex flex-col space-y-8 my-20 mr-8">
        {PROJECTS.map(project => (
          <React.Fragment key={project.description}>
            <Project project={project}/>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}

export default Projects;
