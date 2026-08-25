import { StrictMode } from 'react'
import { hydrateRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

/* hydrateRoot, not createRoot: the build prerenders App into #root (see
   scripts/prerender.js), and createRoot would throw that markup away and
   repaint. Hydrating adopts it instead, so there is no flash. */
hydrateRoot(
  document.getElementById('root'),
  <StrictMode>
    <App />
  </StrictMode>,
)
