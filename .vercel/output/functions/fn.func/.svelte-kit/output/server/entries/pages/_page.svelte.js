import { c as create_ssr_component, d as add_attribute, f as each, v as validate_component, e as escape } from "../../chunks/ssr.js";
const ListItem = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { to } = $$props;
  if ($$props.to === void 0 && $$bindings.to && to !== void 0)
    $$bindings.to(to);
  return `<li class="py-2"><a${add_attribute("href", to, 0)} class="p-3 hover:bg-background-hover block rouned-lg group border border-border shadow transition-all duration-300 rounded-lg"><h2 class="text-lg font-medium">${slots.title ? slots.title({}) : ``}</h2> <p class="text-muted">${slots.desc ? slots.desc({}) : ``}</p> <p class="flex flex-row items-center gap-1 group-hover:gap-2 text-accent transition-all duration-200" data-svelte-h="svelte-11n2d5f"><span>Besøk</span> <span>→</span></p></a></li>`;
});
const links = [
  {
    title: "echo",
    desc: "Nettsiden til echo – Linjeforeningen for informatikk ved UiB.",
    to: "https://echo.uib.no"
  },
  {
    title: "GitHub",
    desc: "Kildekode for echo sin nettside.",
    to: "https://github.com/echo-webkom/echo-web"
  },
  {
    title: "Instagram",
    desc: "Vår Instagram-konto.",
    to: "https://www.instagram.com/echo_webkom/"
  }
];
const newLinks = [
  {
    title: "Beta nettside",
    desc: "Den kommende nettsiden til echo. Fortsatt under utvikling.",
    to: "https://beta.echo-webkom.no"
  },
  {
    title: "Beta Sanity CMS",
    desc: "CMS for den kommende nettsiden til echo. Fortsatt under utvikling.",
    to: "https://cms.echo-webkom.no"
  },
  {
    title: "Beta dokumentasjon",
    desc: "Dokumentasjon for den kommende nettsiden til echo. Fortsatt under utvikling.",
    to: "https://docs.echo-webkom.no"
  }
];
const WebkomLogo = "/_app/immutable/assets/webkom-logo.af419a81.png";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<main class="max-w-lg mx-auto min-h-screen py-20 space-y-6 px-4"><div class="flex flex-row items-center gap-2" data-svelte-h="svelte-ogfykb"><img${add_attribute("src", WebkomLogo, 0)} alt="echo logo" class="w-14 h-auto"> <h1 class="text-3xl font-bold">echo Webkom</h1></div> <p data-svelte-h="svelte-1bqb2rq">echo Webkom er utviklergruppen i Webkom. Vi jobber med å lage og vedlikeholde nettsidene til
		<b>echo – Linjeforeningen for informatikk</b> ved Universitetet i Bergen.</p> <div><h2 id="links" class="text-xl font-semibold" data-svelte-h="svelte-1fcfs68">Nyttige lenker</h2> <ul class="flex flex-col">${each(links, (link) => {
    return `${validate_component(ListItem, "ListItem").$$render($$result, { to: link.to }, {}, {
      desc: () => {
        return `${escape(link.desc)} `;
      },
      title: () => {
        return `${escape(link.title)} `;
      }
    })}`;
  })}</ul></div> <div><h2 id="links-dev" class="text-xl font-semibold" data-svelte-h="svelte-1mo0jpa">Lenker for utviklere</h2> <ul class="flex flex-col">${each(newLinks, (link) => {
    return `${validate_component(ListItem, "ListItem").$$render($$result, { to: link.to }, {}, {
      desc: () => {
        return `${escape(link.desc)} `;
      },
      title: () => {
        return `${escape(link.title)} `;
      }
    })}`;
  })}</ul></div></main>`;
});
export {
  Page as default
};
