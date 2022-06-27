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
          className="m-auto pt-10"
        >
          <div className="font-fira-bold text-white text-center flex flex-col text-7xl sm:text-9xl">
            <p>echo </p>
            <p>
              <Gradient from="#018D9E" to="#FBD87C" dir="left-to-right">
                Webkom
              </Gradient>
            </p>
          </div>
          <div className="my-5 mx-auto w-fit">
            <Link href="/form" passHref>
              <a className="bg-white text-black rounded px-5 py-2 font-fira transition-all border border-transparent hover:bg-transparent hover:text-white hover:border-white">
                <span>Søk idag</span>
              </a>
            </Link>
          </div>
          <div className="my-10">
            <p className="text-center text-xl text-[#ccc] font-thin">
              Bli med på å drifte og utvikle echo sine webløsninger, og få en
              smakebit på arbeidslivet.
            </p>
          </div>
        </motion.div>
      </Section>
    </>
  );
};

export default Home;
