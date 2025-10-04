import adapter from '@sveltejs/adapter-static';
import { mdsvex } from 'mdsvex';
import { fileURLToPath, URL } from 'url';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  extensions: ['.svelte', '.md'],
  kit: {
    adapter: adapter({
      pages: 'build',
      assets: 'build',
      strict: false
    }),
  },
  preprocess: [
    mdsvex({
      extensions: ['.md'],
      layout: {
        _: fileURLToPath(new URL('./src/lib/MarkdownLayout.svelte', import.meta.url))
      }
    })
  ]
};

export default config;
