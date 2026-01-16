import { defineConfig } from 'astro/config';

export default defineConfig({
  site: process.env.GITHUB_ACTIONS 
    ? 'https://KatherinAguilera.github.io' 
    : 'https://katherineaguilera.netlify.app',

  base: process.env.GITHUB_ACTIONS 
    ? '/katherineaguilera' 
    : '/',
});