import { YOUTUBE } from "@/models/constants";

const YoutubeEmbed = ({ id }: {id: string}) => (
  <div className="aspect-w-16 aspect-h-9">
    <iframe
      src={`${YOUTUBE}${id}`}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
    />
  </div>
);

export default YoutubeEmbed;