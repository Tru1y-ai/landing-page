/**
 * A realistic CV sheet, rendered as real type rather than placeholder bars.
 * Kept deliberately generic — the point is that it reads as a polished,
 * anonymous document that tells you almost nothing about how someone works.
 */

type Density = 'full' | 'far';

/** Different candidates on different sheets — a stack of identical CVs
 *  reads as wallpaper, not as a pile of applications. */
const PEOPLE = [
  { name: 'Jordan Ellis Carter', role: 'Senior Software Engineer', city: 'Manchester M20 3AB', mail: 'j.carter@example.com', tel: '+44 7345 007652' },
  { name: 'Amara Okonjo', role: 'Backend Engineer', city: 'Leeds LS6 2QT', mail: 'a.okonjo@example.com', tel: '+44 7712 445190' },
  { name: 'Daniel Whitfield', role: 'Full-Stack Developer', city: 'Bristol BS1 4DJ', mail: 'd.whitfield@example.com', tel: '+44 7908 336214' },
  { name: 'Priya Raghunathan', role: 'Platform Engineer', city: 'Reading RG1 8LS', mail: 'p.raghunathan@example.com', tel: '+44 7455 902738' },
  { name: 'Marcus Feldman', role: 'Software Engineer II', city: 'Edinburgh EH3 9QA', mail: 'm.feldman@example.com', tel: '+44 7621 118450' },
  { name: 'Sofia Delacroix', role: 'Infrastructure Engineer', city: 'London N1 7GU', mail: 's.delacroix@example.com', tel: '+44 7530 664027' },
  { name: 'Tomás Iversen', role: 'Senior Backend Engineer', city: 'Glasgow G2 4JR', mail: 't.iversen@example.com', tel: '+44 7844 275913' },
];

const EXPERIENCE = [
  {
    role: 'Senior Software Engineer',
    org: 'Northgate Systems · 2022—Present',
    bullets: [
      'Owned the payments integration used across four product lines.',
      'Reduced checkout error rate through retry and queue redesign.',
      'Mentored two junior engineers through onboarding and review.',
    ],
  },
  {
    role: 'Software Engineer',
    org: 'Cormorant Labs · 2019—2022',
    bullets: [
      'Shipped the internal reporting service and its client library.',
      'Migrated the legacy job runner with no customer downtime.',
    ],
  },
];

const SKILLS = [
  'TypeScript', 'React', 'Node.js', 'PostgreSQL',
  'Distributed systems', 'CI/CD', 'Observability',
];

export default function ResumeDoc({
  density = 'full',
  who = 0,
}: { density?: Density; who?: number }) {
  const p = PEOPLE[who % PEOPLE.length];
  return (
    <div className="doc">
      <div className="doc-head">
        <div>
          <div className="doc-title">Curriculum Vitae</div>
          <div className="doc-name">{p.name}</div>
          <div className="doc-role">{p.role}</div>
        </div>
        <div className="doc-photo" />
      </div>

      <div className="doc-contact">
        <span>{p.city}</span>
        <span>{p.mail}</span>
        <span>{p.tel}</span>
      </div>

      <div className="doc-rule" />

      <p className="doc-summary">
        Results-driven engineer with over five years of experience building and
        operating production systems. Skilled in improving delivery throughput,
        coordinating across teams, and shipping measurable outcomes in
        fast-moving environments. Committed to strong professional
        relationships and long-term technical health.
      </p>

      {density === 'full' && (
        <>
          <div className="doc-cols">
            <div>
              <div className="doc-h">Work Experience</div>
              {EXPERIENCE.map((e) => (
                <div className="doc-job" key={e.role}>
                  <div className="doc-job-role">{e.role}</div>
                  <div className="doc-job-org">{e.org}</div>
                  {e.bullets.map((b) => (
                    <div className="doc-bullet" key={b}>{b}</div>
                  ))}
                </div>
              ))}
            </div>

            <div>
              <div className="doc-h">Skills</div>
              {SKILLS.map((s) => (
                <div className="doc-skill" key={s}>{s}</div>
              ))}

              <div className="doc-h doc-h-gap">Education</div>
              <div className="doc-job-role">BSc Computer Science</div>
              <div className="doc-job-org">University of Leeds · 2019</div>
              <div className="doc-job-role doc-h-gap">A-Levels</div>
              <div className="doc-job-org">Maths, Physics, Economics</div>
            </div>
          </div>

          <div className="doc-foot">References available upon request</div>
        </>
      )}
    </div>
  );
}
