import adapter from '@sveltejs/adapter-auto';
import { mdsvex } from 'mdsvex';
import { fileURLToPath, URL } from 'url';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  extensions: ['.svelte', '.md'],
  kit: {
    adapter: adapter(),

    // Override http methods in the Todo forms
    methodOverride: {
      allowed: ['PATCH', 'DELETE']
    }
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
