import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Served from https://trulyta.com/ — the custom domain puts the site at the
// root, not under the /landing-page/ project-page subpath.
export default defineConfig({
  base: '/',
  plugins: [
    react(),
  ],
})
