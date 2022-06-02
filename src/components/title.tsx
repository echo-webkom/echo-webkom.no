interface Props {
  children: React.ReactNode;
}

const Heading = ({ children }: Props) => (
  <h1 className="text-9xl font-passion text-center text-white">{children}</h1>
);

export default Heading;
