import { Inter } from "next/font/google";
import clsx from "clsx";

const inter = Inter({ subsets: ["latin"] });

const LINKS = [
  {
    title: "echo",
    desc: "Nettsiden til echo – Linjeforeningen for informatikk ved UiB.",
    to: "https://echo.uib.no",
  },
  {
    title: "Sanity CMS",
    desc: "CMS for echo sin nettside.",
    to: "https://cms.echo-webkom.no",
  },
  {
    title: "GitHub",
    desc: "Kildekode for echo sin nettside.",
    to: "https://github.com/echo-webkom/echo-web",
  },
  {
    title: "Dokumentasjon",
    desc: "Dokumentasjon for echo sin nettside.",
    to: "https://docs.echo-webkom.no",
  },
  {
    title: "Instagram",
    desc: "Vår Instagram-konto.",
    to: "https://www.instagram.com/echo_webkom/",
  },
];

export default function Home() {
  return (
    <div
      className={clsx(
        "flex flex-col items-center justify-center min-h-screen py-2",
        inter.className
      )}
    >
      <main className="flex flex-col items-center justify-center w-full flex-1 px-10 gap-10 py-20">
        <div className="flex flex-col gap-10 max-w-md w-full">
          {LINKS.map(({ to, title, desc }) => (
            <a href={to} key={`${title}${to}`}>
              <section className="relative group">
                <div className="absolute blur group-hover:blur-lg transition-all duration-500 inset-0 bg-gradient-to-tr from-indigo-900 to-purple-900 rounded-lg" />

                <div className="relative px-8 bg-[--color-background] py-6 rounded-lg">
                  <h2 className="font-bold text-2xl mb-1">{title}</h2>
                  <p className="text-md text-white/80">{desc}</p>
                </div>
              </section>
            </a>
          ))}
        </div>
      </main>
    </div>
  );
}
