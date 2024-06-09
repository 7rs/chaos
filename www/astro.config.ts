import { defineConfig } from "astro/config";
import UnoCSS from "unocss/astro";
import icon from "astro-icon";

export default defineConfig({
    server: { host: true, port: 5174 },
    integrations: [UnoCSS(), icon({ iconDir: "src/assets/icons" })],
});
