import Image from "next/image";
import Link from "next/link";
import logo from "../../../public/images/echo-negativ.png";
import IconLink from "./icon-link";
import { AiFillGithub } from "react-icons/ai";
import { BsInstagram } from "react-icons/bs";
import { IoMdPerson } from "react-icons/io";

const Header = () => (
  <div className="flex flex-row justify-between items-center w-full py-5 px-5 md:px-10 z-10">
    <div>
      <div className="relative h-20 w-20">
        <Link href="https://echo.uib.no" passHref>
          <a>
            <Image src={logo} alt="echo logo" objectFit="fill" layout="fill" />
          </a>
        </Link>
      </div>
    </div>
    <div className="flex flex-row gap-5 items-center">
      <IconLink
        to="https://github.com/echo-webkom"
        icon={
          <IoMdPerson
            size={30}
            className="text-gray-400 transition-colors duration-200 hover:text-white"
          />
        }
      />
      <IconLink
        to="https://github.com/echo-webkom"
        icon={
          <AiFillGithub
            size={30}
            className="text-gray-400 transition-colors duration-200 hover:text-white"
          />
        }
      />
      <IconLink
        to="https://instagram.com/echo_webkom"
        icon={
          <BsInstagram
            size={30}
            className="text-gray-400 transition-colors duration-200 hover:text-white"
          />
        }
      />
    </div>
  </div>
);

export default Header;
