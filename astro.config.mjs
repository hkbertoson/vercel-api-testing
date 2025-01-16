// @ts-check
import { defineConfig } from 'astro/config';

import solidJs from '@astrojs/solid-js';

import vercel from '@astrojs/vercel';

import preact from '@astrojs/preact';

import svelte from '@astrojs/svelte';

import vue from '@astrojs/vue';

import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  integrations: [solidJs({
    include: ["**/solid/*"]
  }), preact({
     include: ["**/preact/*"],
  }), svelte(), vue(), react({ include: ["**/react/*"],})],
  adapter: vercel()
});