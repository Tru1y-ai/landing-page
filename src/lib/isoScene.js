/* ============================================================
   TRULY — isometric block world (hero backdrop)
   Generates an SVG field of extruded blocks with white edges,
   sitting on a faint isometric grid. Pure monochrome.
   Ported from the design project's assets/iso.js.
   ============================================================ */
export function buildIsoScene(svg) {
  if (!svg) return;
  svg.innerHTML = '';

  const HW = 34, HH = 17;          // half tile (2:1 isometric)
  const UNIT = 30;                  // px per height level
  const SVGNS = 'http://www.w3.org/2000/svg';

  function iso(x, y, z) {           // grid -> screen
    return [(x - y) * HW, (x + y) * HH - z * UNIT];
  }
  function poly(pts, cls, fill, stroke) {
    const p = document.createElementNS(SVGNS, 'polygon');
    p.setAttribute('points', pts.map((q) => q[0].toFixed(1) + ',' + q[1].toFixed(1)).join(' '));
    p.setAttribute('class', cls);
    if (fill) p.setAttribute('fill', fill);
    if (stroke) p.setAttribute('stroke', stroke);
    return p;
  }
  function line(a, b, cls) {
    const l = document.createElementNS(SVGNS, 'line');
    l.setAttribute('x1', a[0].toFixed(1)); l.setAttribute('y1', a[1].toFixed(1));
    l.setAttribute('x2', b[0].toFixed(1)); l.setAttribute('y2', b[1].toFixed(1));
    l.setAttribute('class', cls);
    return l;
  }

  const gGrid = document.createElementNS(SVGNS, 'g');
  const gBlocks = document.createElementNS(SVGNS, 'g');

  /* ---- floor grid ---- */
  const GMIN = -7, GMAX = 7;
  for (let g = GMIN; g <= GMAX; g++) {
    gGrid.appendChild(line(iso(g, GMIN, 0), iso(g, GMAX, 0), 'grid-line'));
    gGrid.appendChild(line(iso(GMIN, g, 0), iso(GMAX, g, 0), 'grid-line'));
  }

  /* ---- blocks: a loose skyline, denser toward centre ---- */
  const blocks = [
    { x: -5, y: -2, h: 1.4 }, { x: -4, y: 1, h: 2.2 }, { x: -3, y: -3, h: 1 },
    { x: -3, y: 2, h: 3.4 },  { x: -2, y: -1, h: 4.6 }, { x: -2, y: 3, h: 1.8 },
    { x: -1, y: 0, h: 6.2 },  { x: -1, y: -4, h: 2.4 }, { x: 0, y: 2, h: 5.0 },
    { x: 0, y: -2, h: 7.6 },  { x: 1, y: 0, h: 3.0 },   { x: 1, y: 3, h: 2.0 },
    { x: 2, y: -1, h: 5.4 },  { x: 2, y: 2, h: 1.4 },   { x: 3, y: 0, h: 3.8 },
    { x: 3, y: -3, h: 1.6 },  { x: 4, y: 1, h: 2.6 },   { x: 4, y: -2, h: 4.2 },
    { x: 5, y: 0, h: 1.5 },   { x: -4, y: -4, h: 0.9 }, { x: 5, y: 3, h: 2.8 }
  ];

  // draw far -> near so nearer blocks overlap correctly
  blocks.sort((a, b) => (a.x + a.y) - (b.x + b.y));

  // pure B/W palette
  const palette = [
    { top: '#1a1a1a', right: '#0d0d0d', left: '#080808', edge: 'rgba(255,255,255,0.65)' },
    { top: '#141414', right: '#0a0a0a', left: '#060606', edge: 'rgba(255,255,255,0.45)' },
    { top: '#202020', right: '#121212', left: '#0a0a0a', edge: 'rgba(255,255,255,0.85)' },
    { top: '#0f0f0f', right: '#080808', left: '#040404', edge: 'rgba(255,255,255,0.55)' }
  ];

  blocks.forEach((b, i) => {
    const x = b.x, y = b.y, h = b.h;
    const col = palette[i % palette.length];
    const Atop = iso(x, y, h),       Btop = iso(x + 1, y, h);
    const Ctop = iso(x + 1, y + 1, h), Dtop = iso(x, y + 1, h);
    const Bbot = iso(x + 1, y, 0),   Cbot = iso(x + 1, y + 1, 0), Dbot = iso(x, y + 1, 0);

    const grp = document.createElementNS(SVGNS, 'g');
    grp.appendChild(poly([Btop, Ctop, Cbot, Bbot], 'edge', col.right, col.edge));
    grp.appendChild(poly([Dtop, Ctop, Cbot, Dbot], 'edge', col.left, col.edge));
    grp.appendChild(poly([Atop, Btop, Ctop, Dtop], 'edge-bright', col.top, col.edge));
    gBlocks.appendChild(grp);
  });

  svg.appendChild(gGrid);
  svg.appendChild(gBlocks);

  /* ---- compute viewBox from content ---- */
  let minX = Infinity, minY = Infinity, maxX = -Infinity, maxY = -Infinity;
  [GMIN, GMAX].forEach((a) => {
    [GMIN, GMAX].forEach((bb) => {
      const p = iso(a, bb, 0);
      if (p[0] < minX) minX = p[0]; if (p[0] > maxX) maxX = p[0];
      if (p[1] < minY) minY = p[1]; if (p[1] > maxY) maxY = p[1];
    });
  });
  blocks.forEach((b) => {
    const t = iso(b.x, b.y, b.h);
    if (t[1] < minY) minY = t[1];
  });
  const pad = 30;
  svg.setAttribute('viewBox', (minX - pad) + ' ' + (minY - pad) + ' ' + (maxX - minX + pad * 2) + ' ' + (maxY - minY + pad * 2));
  svg.setAttribute('preserveAspectRatio', 'xMidYMax meet');
}
