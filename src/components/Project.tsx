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
    <>
      <h1 className="text-bold text-black text-3xl">{project.title}</h1>
      {project.youtubeId && <YoutubeEmbed id={project.youtubeId ?? ""} />}
      <p>{project.description}</p>
      {project.isHosted ? (
        <Button
          title={ButtonOptions.CLICK}
          link={project.downloadOrOpen ?? ""}
        />
      ) : project.downloadOrOpen ? (
        <Button title={ButtonOptions.DOWNLOAD} link={project.downloadOrOpen} />
      ) : null}
      <Button title={ButtonOptions.CODE} link={project.repo} />
    </>
  );
};

export default Project;
