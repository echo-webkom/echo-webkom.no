import Link from "next/link";

const Navbar = () => (
  <nav className="flex flex-row content-between">
    <ul>
      <li>
        <Link href="/" passHref>
          <a>Hjem</a>
        </Link>
      </li>
    </ul>
  </nav>
);

export default Navbar;
