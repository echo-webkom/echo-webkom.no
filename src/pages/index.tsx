import type { NextPage } from "next";
import Section from "../components/section";
import Header from "../components/header/header";
import { motion } from "framer-motion";
import Gradient from "../components/gradient";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <Section>
        <motion.div
          initial={{ opacity: 0, x: -300 }}
          whileInView={{ opacity: 100, x: 0 }}
        >
          <div className="text-7xl sm:text-9xl flex flex-col font-bold text-center">
            <p>echo</p>
            <p>
              <Gradient from="#a6cfd9" to="#fed879" dir="left-to-right">
                Webkom
              </Gradient>
            </p>
          </div>
          <div className="my-10">
            <p className="text-center text-xl text-[#ccc] font-thin">
              Bli med på å drifte og utvikle echo sine webløsninger, og få en
              smakebit på arbeidslivet.
            </p>
          </div>
          <div className="my-5 mx-auto w-fit">
            <Link href="/soknad" passHref>
              <a className="bg-white text-black rounded px-5 py-2 font-fira transition-all border border-transparent hover:bg-transparent hover:text-white hover:border-white">
                <span>Søk idag</span>
              </a>
            </Link>
          </div>
        </motion.div>
      </Section>
    </>
  );
};

export default Home;
