import adapter from "@sveltejs/adapter-vercel";
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";
import { mdsvex } from "mdsvex";

const config = {
  kit: {
    adapter: adapter({
      runtime: 'nodejs18.x',
    }),
  },
  extensions: [".svelte", ".svelte.md", ".md", ".svx"],
  preprocess: [
    vitePreprocess(),
    mdsvex({
      extensions: [".svelte.md", ".md", ".svx"],
      smartypants: { dashes: "oldschool" },
    }),
  ],
};

export default config;