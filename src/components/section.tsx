import { Parallax } from "react-scroll-parallax";

interface Props {
  children: React.ReactNode;
}

const Section = ({ children }: Props) => (
  <div className="min-h-screen overflow-hidden w-full relative aboslute">
    <div className="absolute top-1/3 -translate-y-1/2 left-1/2 -translate-x-1/2">
      {children}
    </div>
  </div>
);

export default Section;
