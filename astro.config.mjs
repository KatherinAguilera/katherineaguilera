import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://KatherinAguilera.github.io',
  base: process.env.NODE_ENV === 'production' ? '/katherineaguilera' : '/',
});