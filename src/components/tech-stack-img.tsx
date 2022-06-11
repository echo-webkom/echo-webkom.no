import Image, { StaticImageData } from "next/image";

interface Props {
  src: StaticImageData;
  text: string;
}

const TechStackImg = ({ src, text }: Props) => (
  <div className="flex flex-col">
    <div className="h-20 w-20 rounded overflow-hidden">
      <Image src={src} alt={text + " logo"} objectFit="fill" />
    </div>
    <p className="text-center text-gray-300 text-md">{text}</p>
  </div>
);

export default TechStackImg;
