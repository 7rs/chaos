import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: 'https://7rs.github.io',
  base: "/chaos",
  markdown: {
    shikiConfig: {
      theme: 'dracula',
    }
  },
  integrations: [
    starlight({
      title: 'Chaos',
      customCss: [
        '@fontsource/fira-sans/400.css',
        '@fontsource/fira-code/400.css',
        'src/styles/custom.css'
      ],
      social: {
        github: 'https://github.com/7rs/chaos'
      },
      sidebar: [
        { label: 'Guides', autogenerate: { directory: 'guides' } },
        { label: 'FAQ', autogenerate: { directory: 'faq' } },
        { label: 'Modlist', autogenerate: { directory: 'mods' } }
      ],
      defaultLocale: "root",
      locales: {
        root: { label: 'English', lang: 'en' },
        'ja': { label: '日本語', lang: 'ja' },
      },
    }),
    tailwind()
  ]
});
