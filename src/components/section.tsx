interface Props {
  children: React.ReactNode;
  className?: string;
}

const Section = ({ children, className }: Props) => (
  <div className={`min-h-screen m-auto ${className ?? ""}`}>{children}</div>
);

export default Section;
