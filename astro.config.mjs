// @ts-check
import { defineConfig } from 'astro/config';

import netlify from '@astrojs/netlify';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://rekaerdei.com',
  adapter: netlify(),
  integrations: [sitemap({ filter: (page) => !page.includes('/404') })],
  build: {
    // Inline all CSS into <style> tags to remove render-blocking stylesheet
    // requests on this small site — improves FCP/LCP.
    inlineStylesheets: 'always',
  },
});
