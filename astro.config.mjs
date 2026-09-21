import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://oosaka0123-sudo.github.io/junior-nisa/',
  base: '/junior-nisa',
  trailingSlash: 'always',
  integrations: [sitemap()]
});
