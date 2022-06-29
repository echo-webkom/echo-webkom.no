interface Props {
  children: React.ReactNode;
  className?: string;
}

const Section = ({ children, className }: Props) => (
  <div className={`h-screen m-auto px-5 md:px-10 ${className ?? ""}`}>{children}</div>
);

export default Section;
