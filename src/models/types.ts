import { StaticImageData } from "next/image";

export type Project = {
    title: string;
    repo: string;
    description: string;
    images?: StaticImageData[];
    downloadOrOpen?: string;
    youtubeId?: string;
    isHosted?: boolean;
}