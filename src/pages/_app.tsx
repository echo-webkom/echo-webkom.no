import type { AppProps } from "next/app";
import { ParallaxProvider } from "react-scroll-parallax";
import "../../styles/globals.css";
import Header from "../components/header/header";

const App = ({ Component, pageProps }: AppProps) => (
  <ParallaxProvider>
    <Component {...pageProps} />
  </ParallaxProvider>
);

export default App;
