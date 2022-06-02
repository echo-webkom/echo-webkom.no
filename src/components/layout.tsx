interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => (
  <div className="aboslute">{children}</div>
);

export default Layout;
