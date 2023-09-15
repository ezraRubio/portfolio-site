import React from "react";
import YoutubeEmbed from "./YouTubeEmbed";
import Button from "./Button";
import { ButtonOptions } from "@/models/enums";
import { Project } from "@/models/types";

interface ProjectProps {
  project: Project;
}

const Project: React.FC<ProjectProps> = ({ project }) => {
  return (
    <div className="flex flex-col items-center border rounded-md shadow-lg p-4 space-y-4 w-[350px] md:w-[450px] min-h-full mx-6 mt-6">
      <h1 className="text-bold text-black text-3xl text-center">
        {project.title}
      </h1>
      {project.youtubeId && <YoutubeEmbed id={project.youtubeId ?? ""} />}
      <p className="text-center">{project.description}</p>
      <div className="flex flex-row justify-items-center space-x-1 sm:space-x-4">
        {project.isHosted ? (
          <Button
            title={ButtonOptions.CLICK}
            link={project.downloadOrOpen ?? ""}
          />
        ) : project.downloadOrOpen ? (
          <Button
            title={ButtonOptions.DOWNLOAD}
            link={project.downloadOrOpen}
          />
        ) : null}
        <Button title={ButtonOptions.CODE} link={project.repo} />
      </div>
    </div>
  );
};

export default Project;
