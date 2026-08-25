/* Build-time render only. The site ships as a static SPA, but a client-rendered
   page hands crawlers an empty <div id="root">, and most AI crawlers
   (GPTBot, ClaudeBot, PerplexityBot) never run the JS that would fill it.
   This renders App to HTML at build time so the copy is in the document itself.

   It renders App exactly as main.jsx does, so the markup matches React's first
   client render and hydrateRoot adopts it without a repaint. Nothing here may
   touch window/document — every browser API in the tree is inside an effect,
   which is what makes this safe. */
import { renderToString } from 'react-dom/server';
import App from './App.jsx';

export function render() {
  return renderToString(<App />);
}
