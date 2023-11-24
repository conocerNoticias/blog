import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

//import netlify from "@astrojs/netlify/functions";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  site: 'https://conocerNoticias.github.io',
  base: '/blog',
  //output: "server",
  //adapter: netlify()
});