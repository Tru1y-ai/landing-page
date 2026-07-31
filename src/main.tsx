import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './index.css'
import App from './App'

gsap.registerPlugin(ScrollTrigger)

// Reveals across the page start at autoAlpha 0 and are released by ScrollTrigger,
// so a start position measured before the layout settles would leave whole
// sections invisible. The hero is 100svh and the display webfonts land late,
// so re-measure once those have actually resolved.
document.fonts?.ready.then(() => ScrollTrigger.refresh())
window.addEventListener('load', () => ScrollTrigger.refresh(), { once: true })

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
