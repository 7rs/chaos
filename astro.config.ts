import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import tailwind from '@astrojs/tailwind';
import playformCompress from '@playform/compress';
import compressor from 'astro-compressor';
import purgecss from 'astro-purgecss';

import tsconfig from './tsconfig.json' assert { type: 'json' };
import { getAliases } from './scripts/alias.ts';
import { findCategories } from './scripts/category.ts';

import icon from 'astro-icon';

export default defineConfig({
  site: 'https://7rs.github.io',
  base: '/chaos',
  vite: {
    resolve: {
      alias: getAliases(tsconfig.compilerOptions.paths),
    },
  },
  integrations: [
    icon(),
    tailwind(),
    starlight({
      title: 'Chaos',
      customCss: ['@fontsource/inter/400.css', '@fontsource/fira-code/400.css', 'src/styles/custom.css'],
      social: {
        github: 'https://github.com/7rs/chaos',
      },
      sidebar: findCategories('src/content/docs', ['ja']),
      defaultLocale: 'root',
      locales: {
        root: { label: 'English', lang: 'en' },
        ja: { label: '日本語', lang: 'ja' },
      },
      expressiveCode: {
        themes: ['dracula', 'github-light'],
        defaultProps: { frame: 'none' },
      },
    }),
    purgecss(),
    playformCompress(),
    compressor({ brotli: true }),
  ],
});
