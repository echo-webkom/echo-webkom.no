import type { NextPage } from "next";
import Link from "next/link";
import { motion } from "framer-motion";
import Heading from "../components/title";
import Section from "../components/section";

const Home: NextPage = () => {
  return (
    <Section>
      <div className="text-white text-center flex flex-col gap-10">
        <div>
          <motion.div initial={{ x: -200 }} whileInView={{ x: 0 }}>
            <Heading>echo Webkom</Heading>
          </motion.div>

          <motion.p
            initial={{ x: 200 }}
            whileInView={{ x: 0 }}
            className="text-4xl"
          >
            wazza
          </motion.p>
        </div>
        <div className="w-fit px-1 py-2 text-3xl m-auto text-center rounded border">
          <Link href="https://github.com/echo-webkom">
            <a className="text-white text-center p-4">github</a>
          </Link>
        </div>
      </div>
    </Section>
  );
};

export default Home;
