import { useEffect } from 'react';
import { buildIsoScene } from '../lib/isoScene.js';

/* ============================================================
   TRULY — scroll engine
   nav state · hero parallax · reveals · counters · principle
   text highlight · fixed-desktop scaling.
   Ported from the design project's inline <script>. Operates
   on the DOM by id/attribute after React has mounted.
   ============================================================ */
export function useScrollEngine() {
  useEffect(() => {
    const nav = document.getElementById('nav');
    const scene = document.getElementById('scene');
    const heroInner = document.getElementById('hero-inner');
    const pBig = document.getElementById('p-big');

    buildIsoScene(scene);

    /* ---- reveals ---- */
    let revEls = Array.prototype.slice.call(document.querySelectorAll('[data-reveal]'));
    function checkReveals() {
      const trigger = window.innerHeight * 0.9;
      for (let i = revEls.length - 1; i >= 0; i--) {
        if (revEls[i].getBoundingClientRect().top < trigger) {
          revEls[i].classList.add('in');
          revEls.splice(i, 1);
        }
      }
    }

    /* ---- counters ---- */
    let counters = Array.prototype.slice.call(document.querySelectorAll('[data-counter]'));
    function animateCount(el) {
      const target = parseFloat(el.getAttribute('data-counter'));
      const suffix = el.getAttribute('data-suffix') || '';
      const dec = target % 1 !== 0 ? 1 : 0;
      const render = (v) => { el.innerHTML = v + '<span class="u">' + suffix + '</span>'; };
      render('0');
      let start = null;
      const dur = 1400;
      function frame(t) {
        if (!start) start = t;
        const p = Math.min((t - start) / dur, 1);
        const e = 1 - Math.pow(1 - p, 3);
        render((target * e).toFixed(dec));
        if (p < 1) requestAnimationFrame(frame); else render(target.toFixed(dec));
      }
      requestAnimationFrame(frame);
    }
    function checkCounters() {
      const trigger = window.innerHeight * 0.85;
      for (let i = counters.length - 1; i >= 0; i--) {
        if (counters[i].getBoundingClientRect().top < trigger) {
          animateCount(counters[i]);
          counters.splice(i, 1);
        }
      }
    }

    /* ---- principle text highlight ---- */
    function checkP() {
      if (!pBig) return;
      const r = pBig.getBoundingClientRect();
      let progress = (window.innerHeight * 0.7 - r.top) / (window.innerHeight * 0.5);
      progress = Math.max(0, Math.min(1, progress));
      const spans = pBig.querySelectorAll('.lit');
      spans.forEach((s, i) => {
        const threshold = i === 0 ? 0.3 : 0.7;
        s.style.color = progress > threshold ? '#fff' : 'rgba(255,255,255,0.15)';
        s.style.transition = 'color .5s';
      });
    }

    /* ---- update loop ---- */
    function update() {
      const y = window.pageYOffset;
      if (nav) nav.classList.toggle('scrolled', y > 30);
      if (scene && y < window.innerHeight * 1.5) {
        scene.style.transform = 'translateX(-50%) translateY(' + (-y * 0.14) + 'px)';
      }
      if (heroInner) {
        heroInner.style.transform = 'translateY(' + (y * 0.32) + 'px)';
        heroInner.style.opacity = Math.max(0, 1 - y / (window.innerHeight * 0.58));
      }
      checkReveals();
      checkCounters();
      checkP();
    }

    /* ---- rAF loop ---- */
    let lastY = -1;
    let rafId;
    function loop() {
      const y = window.pageYOffset;
      if (y !== lastY) { lastY = y; update(); }
      rafId = requestAnimationFrame(loop);
    }
    update();
    rafId = requestAnimationFrame(loop);

    /* ---- scale the fixed-size desktop to fit ---- */
    const stage = document.getElementById('desktop-stage');
    const desk = document.getElementById('desktop');
    function scaleDesktop() {
      if (!stage || !desk) return;
      const avail = stage.clientWidth - 32;
      const s = Math.min(avail / 1280, 1);
      desk.style.transform = 'scale(' + s + ')';
      stage.style.height = (800 * s) + 'px';
    }
    scaleDesktop();
    const scaleTimer = setTimeout(scaleDesktop, 100);
    window.addEventListener('resize', scaleDesktop);

    return () => {
      cancelAnimationFrame(rafId);
      clearTimeout(scaleTimer);
      window.removeEventListener('resize', scaleDesktop);
    };
  }, []);
}
