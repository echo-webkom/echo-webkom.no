import Image, { StaticImageData } from "next/image";

interface Props {
  src: StaticImageData;
  text: string;
}

const TechStackImg = ({ src, text }: Props) => (
  <div className="flex flex-col h-24 w-28">
    <div>
      <Image src={src} alt={text + " logo"} />
    </div>
    <p className="text-center text-gray-300 text-md">{text}</p>
  </div>
);

export default TechStackImg;
