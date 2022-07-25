import Link from "next/link";
import EchoLogo from "../../../public/svg/echo-logo-white.svg";
import IconLink from "./icon-link";
import { AiFillGithub } from "react-icons/ai";
import { BsInstagram } from "react-icons/bs";

const Header = () => (
  <header className="flex flex-row justify-between items-center w-full py-5 md:py-10 px-5 md:px-20 transition-all duration-300">
    <Link href="/" passHref>
      <a>
        <EchoLogo className="w-20 h-20" />
      </a>
    </Link>
    <nav className="flex flex-row gap-5 items-center">
      <IconLink
        to="https://github.com/echo-webkom"
        icon={
          <AiFillGithub
            size={25}
            className="text-gray-400 transition-colors duration-200 hover:text-white"
          />
        }
      />
      <IconLink
        to="https://instagram.com/echo_webkom"
        icon={
          <BsInstagram
            size={25}
            className="text-gray-400 transition-colors duration-200 hover:text-white"
          />
        }
      />
    </nav>
  </header>
);

export default Header;
