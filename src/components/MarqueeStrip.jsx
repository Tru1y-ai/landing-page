const ITEMS = [
  'Job-posting-specific assessments',
  'Local-native work capture',
  'AI usage captured honestly',
  'Collaboration & behavioral signals',
  'Structured, hiring-ready reports',
  'Reusable candidate profiles',
  'Replacing static coding tests',
];

export default function MarqueeStrip() {
  return (
    <div className="marquee-wrap">
      <div className="marquee-track" id="marquee">
        {[...ITEMS, ...ITEMS].map((text, i) => (
          <div className="mitem" key={i}><span className="dot"></span>{text}</div>
        ))}
      </div>
    </div>
  );
}
