import { defineConfig } from 'astro/config';
import UnoCSS from 'unocss/astro';
import icon from 'astro-icon';

export default defineConfig({
  integrations: [UnoCSS(), icon({ iconDir: 'src/assets/icons' })],
});
