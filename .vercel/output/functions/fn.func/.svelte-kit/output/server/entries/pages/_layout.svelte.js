import { c as create_ssr_component, a as subscribe } from "../../chunks/ssr.js";
import { w as writable } from "../../chunks/index.js";
const app = "";
const storedTheme = "light";
const theme = writable(storedTheme);
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $theme, $$unsubscribe_theme;
  $$unsubscribe_theme = subscribe(theme, (value) => $theme = value);
  $$unsubscribe_theme();
  return `<div class="fixed top-0 right-0 m-4"><button class="w-10 text-lg h-10 border border-border rounded-full bg-background hover:bg-background-hover">${$theme === "dark" ? `🌞` : `🌚`}</button></div> ${slots.default ? slots.default({}) : ``}`;
});
export {
  Layout as default
};
