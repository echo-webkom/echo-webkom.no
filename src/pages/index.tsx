import type { NextPage } from "next";
import Section from "../components/section";
import Header from "../components/header/header";
import { motion } from "framer-motion";
import Gradient from "../components/gradient";
import Link from "next/link";
import TechStackImg from "../components/tech-stack-img";

import SanityLogo from "../../public/images/sanity-logo.png";
import ChakraUILogo from "../../public/images/chakraui-logo.png";
import ReactJSLogo from "../../public/images/reactjs-logo.png";
import NextJSLogo from "../../public/images/nextjs-logo.png";
import TypeScriptLogo from "../../public/images/typescript-logo.png";
import PostgreSQLLogo from "../../public/images/postgresql-logo.png";
import KotlinLogo from "../../public/images/kotlin-logo.png";

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <Section>
        <motion.div
          initial={{ opacity: 0, x: -300 }}
          whileInView={{ opacity: 100, x: 0 }}
          className="m-auto pt-20 min-h-screen"
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
        {/*
          Kotlin, Sanity, PostgreSQL og Docker.
          React, Next.js, TypeScript og Chakra UI.
        */}
        <div className="flex flex-col lg:flex-row gap-20">
          <div className="border border-white max-w-xl p-10">
            <h1 className="text-6xl font-fira-bold mb-10">Frontend</h1>
            <div className="flex flex-wrap gap-10">
              <TechStackImg src={ReactJSLogo} text="ReactJS" />
              <TechStackImg src={NextJSLogo} text="NextJS" />
              <TechStackImg src={TypeScriptLogo} text="TypeScript" />
              <TechStackImg src={ChakraUILogo} text="ChakraUI" />
            </div>
          </div>
          <div className="border border-white max-w-xl p-10">
            <h1 className="text-6xl font-fira-bold mb-10">Backend</h1>
            <div className="flex flex-wrap gap-10">
              <TechStackImg src={KotlinLogo} text="Kotlin" />
              <TechStackImg src={SanityLogo} text="Sanity CMS" />
              <TechStackImg src={PostgreSQLLogo} text="PostgreSQL" />
            </div>
          </div>
        </div>
      </Section>
    </>
  );
};

export default Home;
