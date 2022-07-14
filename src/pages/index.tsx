import type { NextPage } from "next";

import Header from "../components/header/header";
import { motion } from "framer-motion";
import Form from "../components/form";
import Footer from "../components/footer";

const Home: NextPage = () => {
  return (
    <>
      <Header />

      <div className="grid grid-cols-1 lg:grid-cols-2 px-5 md:px-10 mt-5 gap-10 lg:gap-3 mb-10">
        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: -300 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex flex-col gap-4"
        >
          <h1 className="text-8xl md:text-9xl font-display">
            <p>echo</p>
            <p className="text-blue-500">Webkom</p>
          </h1>
          <div className="text-xl text-gray-200 flex flex-col gap-3 break-words">
            <p>
              Bli med på å drifte og utvikle echo sine webløsninger, og få en
              smakebit på arbeidslivet.
            </p>
            <p>
              Webkom søker engasjerte studenter til som ønsker å jobbe med web.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 300 }}
          animate={{ opacity: 1, y: 0 }}
          className="m-auto w-full"
        >
          <div className="bg-white p-5 rounded-md">
            <h2 className="text-3xl font-display text-black">Send søknad</h2>

            <Form />
          </div>
        </motion.div>
      </div>

      <Footer />
    </>
  );
};

export default Home;
