import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import sitemap from "astro-sitemap";

export default defineConfig({
  site: "https://www.cristinapsico.com", // Especifica tu sitio aquí
  integrations: [
    tailwind(),
    sitemap({
      site: "https://www.cristinapsico.com",
    }),
  ],
});
