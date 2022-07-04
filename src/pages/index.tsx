import type { NextPage } from "next";
import Section from "../components/section";
import Header from "../components/header/header";
import Gradient from "../components/gradient";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <Section>
        <div className="max-w-7xl m-auto px-5">
          <div className="text-7xl sm:text-9xl my-10 flex flex-col font-monospace font-extrabold">
            <p>echo</p>
            <p>
              <Gradient from="#a6cfd9" to="#fed879" dir="left-to-right">
                Webkom
              </Gradient>
            </p>
          </div>
          <div className="max-w-lg mb-10">
            <p className="text-3xl text-white">
              Bli med på å drifte og utvikle echo sine webløsninger, og få en
              smakebit på arbeidslivet.
            </p>
          </div>
          <div className="w-fit">
            <Link href="/soknad" passHref>
              <a className="bg-white text-black rounded px-5 py-2 text-xl font-monospace transition-all border border-transparent hover:bg-transparent hover:text-white hover:border-white">
                <span>Søk idag</span>
              </a>
            </Link>
          </div>
        </div>
      </Section>
      <Section>
        <div className="p-5 max-w-4xl m-auto">
          <div className="text-6xl sm:text-8xl font-bold mb-8">
            <Gradient from="#5ac1e9" to="#257bb2" dir="left-to-right">
              Hvem er vi?
            </Gradient>
          </div>
          <div className="max-w-xl flex flex-col gap-8 text-xl">
            <p>
              Webkom er en undergruppe som drifter og videreutvikler echo sine
              webløsninger, blant annet denne nettsiden.
            </p>
            <p>
              Ved hjelp av prosjektarbeid og en arbeidsmåte som gjenspeiler
              arbeidslivet, gir vi våre medlemmer en smakebit på hvordan det er
              å være utvikler.
            </p>
            <p>
              Noe av det du kan være med å utvikle som medlem i Webkom, er blant
              annet publiseringssytemet til nettsiden, påmeldingsløsninger til
              bedriftspresentasjoner og arrangementer, eller design av ulike
              interne webapplikasjoner.
            </p>
          </div>
        </div>
      </Section>
      <Section>
        <div className="p-5 max-w-4xl m-auto z-50">
          <div className="float-right text-right">
            <div className="text-6xl sm:text-8xl font-bold mb-8">
              <Gradient from="#f26d70" to="#f13d3f" dir="left-to-right">
                Teknologier
              </Gradient>
            </div>
            <p className="max-w-xl text-xl">
              I webkom prøver vi så godt som mulig å reflektere hvordan
              arbeidslivet ditt kan en dag bli. Dette gjør vi ved å blant annet
              bruke teknologier som er relavante. Dette gjør at du får en
              forsmak på hva du en dag kommer til å jobbe med.
            </p>
          </div>
        </div>
      </Section>
    </>
  );
};

export default Home;
