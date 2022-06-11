import TechStackImg from "../components/tech-stack-img";

import SanityLogo from "../../public/images/sanity-logo.png";
import ChakraUILogo from "../../public/images/chakraui-logo.png";
import ReactJSLogo from "../../public/images/reactjs-logo.png";
import NextJSLogo from "../../public/images/nextjs-logo.png";
import TypeScriptLogo from "../../public/images/typescript-logo.png";
import PostgreSQLLogo from "../../public/images/postgresql-logo.png";
import KotlinLogo from "../../public/images/kotlin-logo.png";

const TechStack = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-between">
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
  );
};

export default TechStack;
