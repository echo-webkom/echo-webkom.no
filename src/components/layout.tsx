interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <>
      <div className="aboslute">{children}</div>
    </>
  );
};

export default Layout;
