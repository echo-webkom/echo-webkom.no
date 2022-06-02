import Image from "next/image";
import logo from "../../../public/images/echo-logos/echo-negativ.png";

const Header = () => (
  <div className="fixed flex flex-row text-white w-full py-5 z-10">
    <div className="flex flex-row items-center">
      <div className="relative h-10 w-10">
        <Image src={logo} alt="echo logo" />
      </div>
      <h1 className="text-4xl">echo Webkom</h1>
    </div>
  </div>
);

export default Header;
