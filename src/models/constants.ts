import { Project } from "./types";
import PetAgencyImage1 from "../assets/pet-agency1.png";
import PetAgencyImage2 from "../assets/pet-agency2.png";

export const TITLE = "Ezra Rubio : Developer";

export const HELLO = "Hello there!";

export const GITHUB = "https://github.com/ezraRubio/";

export const YOUTUBE = "https://www.youtube.com/embed/";

export const LINKEDIN = "https://www.linkedin.com/in/ezrarubio/";

export const PROJECTS: Project[] = [
  {
    title: "Music Library Extraction",
    repo: "music-library-extractor",
    description:
      "Native app for MacOS that allows the user to extract the data from their Apple Music library.",
    youtubeId: "kfiIeqocJTk",
    isHosted: false,
  },
  {
    title: "Pet Agency Project",
    repo: "pet-agency-BE",
    description: "Web app that simulates a pet adoption agency.",
    downloadOrOpen: "https://pet-agency.vercel.app/",
    isHosted: true,
    images: [PetAgencyImage1, PetAgencyImage2],
  },
  {
    title: "To-Do List",
    repo: "to-do_ios",
    description:
      "Native iOS app that has user login and holds a simple to do list",
    isHosted: false,
  },
];
