import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import sitemap from "@astrojs/sitemap";
import tailwindcss from '@tailwindcss/vite';
export default defineConfig({
vite: {
    plugins: [tailwindcss()],
  },
    // add yur domain name here
   site: 'https://protrack.solutions',
  integrations: [sitemap(), react()]
});