import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Served from https://trulyta.com/ — the custom domain puts the site at the
// root, not under the /landing-page/ project-page subpath.
export default defineConfig({
  base: '/',
  plugins: [
    react(),
  ],
  // Build-time prerender only (vite build --ssr). GSAP ships CommonJS, so
  // leaving it external makes Node resolve `import { SplitText }` against a
  // module that has no named exports. Bundling it through Vite's transform
  // fixes the interop. This key does not touch the client build.
  ssr: {
    noExternal: ['gsap', '@gsap/react', 'framer-motion'],
  },
})
