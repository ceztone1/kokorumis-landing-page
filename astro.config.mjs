// @ts-check
import { defineConfig } from "astro/config";
import image from "@astrojs/image";
import tailwind from "@astrojs/tailwind";
import vue from "@astrojs/vue";
// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind(),
    image({ serviceEntryPoint: "@astrojs/image/sharp" }),
    vue(),
  ],
});
