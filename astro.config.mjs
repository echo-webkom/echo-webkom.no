import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import vercel from "@astrojs/vercel/serverless";
import preact from "@astrojs/preact";

export default defineConfig({
  site: "https://echo-webkom.no",
  integrations: [mdx(), sitemap(), tailwind(), preact()],
  output: "server",
  adapter: vercel(),
});
