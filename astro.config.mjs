import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import remarkToc from "remark-toc";
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  markdown: {
    syntaxHighlight: "shiki",
    shikiConfig: {
      themes: {
        light: "github-light",
        dark: "tokyo-night",
      },
      defaultColor: "light",
      wrap: true,
    },
    remarkPlugins: [remarkToc],
    gfm: true,
  },
  integrations: [
    tailwind(),
    mdx({
      extendMarkdownConfig: true,
    }),
    react(),
  ],
});
