const YoutubeEmbed = ({ id }: {id: string}) => (
  <div className="">
    <iframe
      width="480"
      height="320"
      src={`https://www.youtube.com/embed/${id}`}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
    />
  </div>
);

export default YoutubeEmbed;