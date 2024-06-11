import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: 'https://7rs.github.io',
  base: "/chaos",
  integrations: [starlight({
    title: 'Chaos',
    social: {
      github: 'https://github.com/7rs/chaos'
    },
    sidebar: [{
      label: 'Guides',
      autogenerate: {
        directory: 'guides'
      }
    }, {
      label: 'Modlist',
        autogenerate: {
          directory: 'mods'
        }
      }]
  }), tailwind()]
});
