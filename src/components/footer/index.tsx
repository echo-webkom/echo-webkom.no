import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-[#111] w-full">
      <div className="w-fit m-auto py-5">
        <Link href="mailto:webkom-styret@echo.uib.no" passHref>
          <a className="text-gray-200 hover:text-white">
            webkom-styret@echo.uib.no
          </a>
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
