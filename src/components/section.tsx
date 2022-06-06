import { Parallax } from "react-scroll-parallax";

interface Props {
  children: React.ReactNode;
}

const Section = ({ children }: Props) => (
  <div className="w-full m-auto px-5 md:px-10">{children}</div>
);

export default Section;
