import { useState } from 'react';

import type { HeroVideo } from '@/heroMedia';

/**
 * The hero film.
 *
 * Autoplay only survives if the element is muted and inline — Chrome and iOS
 * both block a sound-capable video from starting on its own, and the failure
 * is silent, leaving a poster frame that looks like a broken hero.
 *
 * Reduced motion and a file that cannot be decoded both land on the poster.
 * That is not a placeholder: the poster is a real frame of the film, so the
 * composition and the copy's legibility over it are unchanged either way.
 */
export default function HeroMedia({ video }: { video: HeroVideo }) {
  const url = (p: string) => `${import.meta.env.BASE_URL}${p}`;
  const [reduce] = useState(
    () => window.matchMedia('(prefers-reduced-motion: reduce)').matches
  );
  const [failed, setFailed] = useState(false);

  if (reduce || failed) {
    return (
      <div className="hero-media" aria-hidden="true">
        <img src={url(video.poster)} alt="" style={{ objectPosition: video.position }} />
      </div>
    );
  }

  return (
    <div className="hero-media" aria-hidden="true">
      <video
        poster={url(video.poster)}
        style={{ objectPosition: video.position }}
        // the three attributes autoplay actually depends on
        autoPlay
        muted
        playsInline
        loop={video.loop}
        preload="auto"
        // fires once every <source> has failed — a 404 on the render should
        // degrade to the poster, not to a black rectangle
        onError={() => setFailed(true)}
      >
        <source src={url(video.webm)} type="video/webm" />
        <source src={url(video.mp4)} type="video/mp4" />
      </video>
    </div>
  );
}
