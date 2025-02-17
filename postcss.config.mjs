import presetEnv from 'postcss-preset-env';
import autoprefixer from 'autoprefixer';
import tailwind from '@tailwindcss/postcss';

import tailwindConfig from './tailwind.config.mjs';

export default {
  plugins: [tailwind(tailwindConfig), presetEnv, autoprefixer],
};
