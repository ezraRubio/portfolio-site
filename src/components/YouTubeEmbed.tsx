import { YOUTUBE } from "@/models/constants";

const YoutubeEmbed = ({ id }: {id: string}) => (
  <div className="">
    <iframe
      width="480"
      height="320"
      src={`${YOUTUBE}${id}`}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
    />
  </div>
);

export default YoutubeEmbed;