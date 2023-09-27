import Image, { StaticImageData } from "next/image";

const ProjectImageDisplay = ({ images }: { images: StaticImageData[] }) => {
  return (
    <div className="flex flex-row">
      {images.map((image, index) => (
        <Image
          src={image}
          alt="project image"
          height={250}
          width={150}
          key={index}
        />
      ))}
    </div>
  );
};

export default ProjectImageDisplay;
