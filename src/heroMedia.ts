/**
 * The hero's background film.
 *
 * `null` until the render exists. While it is null the CSS 3D stage in
 * Hero.tsx remains the hero, so dropping the files into `public/hero/` and
 * filling this in is the entire switch-over — nothing else has to change.
 *
 * Paths are relative to `public/`; BASE_URL is prepended where they are used,
 * so they resolve correctly under the /landing-page/ deploy base.
 *
 * What the render has to contain: docs/hero-video-brief.md
 */
export type HeroVideo = {
  /** VP9/AV1 in WebM — smaller, and what Chrome/Firefox will pick */
  webm: string;
  /** H.264 in MP4 — required for Safari, which will not take the WebM */
  mp4: string;
  /** first frame of the film, so there is no jump when playback starts */
  poster: string;
  /**
   * Play once and hold the last frame, or loop.
   * The scatter-and-settle narrative wants `false` — a burst that restarts
   * every few seconds reads as a glitch. Only set `true` for a render that
   * was deliberately built to loop seamlessly.
   */
  loop: boolean;
  /** object-position, so the focal point survives the crop to 100svh */
  position?: string;
};

export const HERO_VIDEO: HeroVideo | null = null;

/* Once the files are in public/hero/, this is the whole change:
 *
 * export const HERO_VIDEO: HeroVideo | null = {
 *   webm: 'hero/resumes.webm',
 *   mp4: 'hero/resumes.mp4',
 *   poster: 'hero/resumes-poster.jpg',
 *   loop: false,
 *   position: '68% 50%',
 * };
 */
