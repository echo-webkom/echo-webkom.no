import type { NextPage } from "next";

import Header from "../components/header";
import { motion } from "framer-motion";
import Form from "../components/form";
import Footer from "../components/footer";
import SEO from "../components/seo";
import Spacer from "../components/spacer";

const Home: NextPage = () => {
  return (
    <>
      <SEO />

      <div className="flex flex-col min-h-screen">
        <Header />

        <div className="m-auto grid grid-cols-1 lg:grid-cols-2 px-5 md:px-15 gap-32 lg:gap-5 mb-10">
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
                Vi i Webkom søker nye engasjerte studenter som har til å hjelpe
                med å utvikle og drifte echo sine løsninger på nettet.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 300 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col"
          >
            <div className="bg-white p-5 rounded-md">
              <h2 className="text-3xl font-display text-black mb-3">
                Send søknad
              </h2>
              <Form />
            </div>
          </motion.div>
        </div>

        <Spacer />

        <Footer />
      </div>
    </>
  );
};

export default Home;
