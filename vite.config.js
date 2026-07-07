import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig(({ command }) => ({
  // GitHub Pages serves this project from /portafolio-web/, so assets
  // must be built with that base path. Local dev keeps the root path.
  base: command === 'build' ? '/portafolio-web/' : '/',
  plugins: [react(), tailwindcss()],
}))
