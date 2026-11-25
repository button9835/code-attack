// vite.config.js
import process from 'node:process';
import adapter from '@sveltejs/adapter-static';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [
    sveltekit({
      adapter: adapter({
        pages: 'docs',
        assets: 'docs',
        fallback: '404.html'
      }),
      paths: {
        base: process.argv.includes('dev') ? '' : '/code-attack'
      }
    })
  ]
});