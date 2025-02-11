// @ts-check

import eslint from "@eslint/js";
import tseslint from "typescript-eslint";
import importPlugin from "eslint-plugin-import";
import pluginPromise from "eslint-plugin-promise";
import nodePlugin from "eslint-plugin-n";
import jsxA11y from "eslint-plugin-jsx-a11y";
import eslintPluginAstro from "eslint-plugin-astro";
// import oxlint from 'eslint-plugin-oxlint';

export default tseslint.config(
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  importPlugin.flatConfigs.recommended,
  pluginPromise.configs["flat/recommended"],
  nodePlugin.configs["flat/recommended-script"],
  jsxA11y.flatConfigs.recommended,
  ...eslintPluginAstro.configs.recommended,
);
