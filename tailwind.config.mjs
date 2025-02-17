/** @type {import('tailwindcss').Config} */

import daisyui from 'daisyui';

export default {
  purge: ['./src/**/*.{astro,mdx,svelte,ts}'],
  content: ['./src/**/*.{astro,mdx,svelte,ts}'],
  theme: {
    extend: {},
  },
  plugins: [daisyui],
};
