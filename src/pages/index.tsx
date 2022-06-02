import type { NextPage } from "next";
import Link from "next/link";
import { motion } from "framer-motion";
import Gradient from "../components/gradient";
import Heading from "../components/title";
import Section from "../components/section";

const Home: NextPage = () => {
  return (
    <>
      <Section>
        <div className="text-white text-center flex flex-col gap-10">
          <div>
            <motion.div initial={{ x: -200 }} whileInView={{ x: 0 }}>
              <div className="font-fira-bold text-8xl sm:text-9xl">
                <p>echo</p>
                <p>
                  <Gradient dir="left-to-right" from="#018D9E" to="#FBD87C">
                    Webkom
                  </Gradient>
                </p>
              </div>
            </motion.div>
          </div>
          <div className="flex flex-row w-fit m-auto gap-5">
            <div className="w-fit px-1 py-2 text-2xl m-auto text-center rounded-md border">
              <Link href="https://github.com/echo-webkom">
                <a className="text-white text-center p-4">github</a>
              </Link>
            </div>
            <div className="w-fit px-1 py-2 text-2xl m-auto text-center rounded-md border">
              <Link href="https://echo.uib.no">
                <a className="text-white text-center p-4">echo.uib.no</a>
              </Link>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
};

export default Home;
