import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: 'https://7rs.github.io',
  base: 'chaos',
  integrations: [starlight({
    title: 'Chaos',
    social: {
      github: 'https://github.com/7rs/chaos'
    },
    sidebar: [{
      label: 'Guides',
      items: [
    // Each item here is one entry in the navigation menu.
        {
          label: 'Example Guide',
          link: '/guides/example/'
        }]
    }, {
      label: 'Reference',
        autogenerate: {
          directory: 'reference'
        }
      }]
  }), tailwind()]
});