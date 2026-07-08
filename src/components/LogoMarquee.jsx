const LOGOS = [
  { name: 'HackerRank', path: 'M12 2L3 7v10l9 5 9-5V7l-9-5zm0 2.3l6.5 3.6-6.5 3.6L5.5 7.9 12 4.3z' },
  { name: 'CodeSignal', path: 'M12 2a10 10 0 100 20 10 10 0 000-20zm0 3.5L16 12l-4 6.5L8 12l4-6.5z' },
  { name: 'HireVue', path: 'M4 5h16v3H4V5zm0 5.5h16v3H4v-3zM4 16h10v3H4v-3z' },
  { name: 'LeetCode', path: 'M13.5 2L4 13h6l-1.5 9L20 11h-6l-0.5-9z' },
  { name: 'Codility', path: 'M8 4l-6 8 6 8 2.4-1.8L5.8 12l4.6-6.2L8 4zm8 0l-2.4 1.8L18.2 12l-4.6 6.2L16 20l6-8-6-8z' },
  { name: 'Karat', circle: true },
  { name: 'CoderPad', path: 'M3 6h18v4H3V6zm0 8h12v4H3v-4z' },
  { name: 'Coderbyte', path: 'M12 2l9 16H3L12 2zm0 5L7 16h10L12 7z' },
];

function LogoItem({ item, k }) {
  return (
    <span className="litem" key={k}>
      <span className="lmk">
        <svg viewBox="0 0 24 24" width="23" height="23" fill="currentColor">
          {item.circle ? <circle cx="12" cy="12" r="9" /> : <path d={item.path} />}
        </svg>
      </span>
      {item.name}
    </span>
  );
}

export default function LogoMarquee() {
  return (
    <section className="logos" data-screen-label="Replaces">
      <p className="logos-cap">One platform to replace <b>all of them</b></p>
      <div className="logos-mask">
        <div className="logos-track" id="logos-track">
          {LOGOS.map((item, i) => <LogoItem item={item} k={`a${i}`} key={`a${i}`} />)}
          {/* duplicate for seamless loop */}
          {LOGOS.map((item, i) => <LogoItem item={item} k={`b${i}`} key={`b${i}`} />)}
        </div>
      </div>
    </section>
  );
}
