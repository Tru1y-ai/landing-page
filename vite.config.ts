import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'node:path'

// Served from https://tru1y-ai.github.io/landing-page/ (a GitHub project page),
// so assets must be resolved under the /landing-page/ subpath.
export default defineConfig({
  base: '/landing-page/',
  plugins: [
    react(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      '@': path.resolve(import.meta.dirname, './src'),
    },
  },
})
