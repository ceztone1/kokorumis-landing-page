// @ts-check
import { defineConfig, passthroughImageService } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import vue from '@astrojs/vue';
// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), vue()],
  image: {
    service: passthroughImageService(),
  },
});
