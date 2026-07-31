/// <reference types="vite/client" />

// Several sections pass brand hues down as CSS custom properties
// (e.g. style={{ '--hue': ... }}); React's CSSProperties rejects them by default.
declare module 'react' {
  interface CSSProperties {
    [key: `--${string}`]: string | number | undefined;
  }
}

export {};
