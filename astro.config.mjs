import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';
import remarkToc from 'remark-toc';
import rehypePresetMinify from 'rehype-preset-minify';

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  markdown: {
    syntaxHighlight: 'shiki',
    shikiConfig: {
      theme: 'dracula'
    },
    remarkPlugins: [remarkToc],
    gfm: true
  },
  integrations: [tailwind(), mdx({
    extendMarkdownConfig: true,
    remarkPlugins: [remarkToc],
    rehypePlugins: [rehypePresetMinify],
    remarkRehype: {
      footnoteLabel: 'Footnotes'
    },
    gfm: false
  }), react()]
});